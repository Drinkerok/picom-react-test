import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteItem, changeItemStatus} from './../../AC';
import './todo-item.css';


class TodoItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      done: PropTypes.bool
    })
  }


  render() {
    const {item} = this.props;

    return (
      <div className={`todo-item ${this.getClassName(item.done)}`}>
        <button onClick = {this.statusHandler} className="todo-item__status"></button>
        <p className="todo-item__name"><span>{item.name}</span></p>
        <button onClick = {this.deleteHandler} className="todo-item__delete">Удалить</button>
      </div>
    )
  }


  getClassName = (status) => {
    return status ? `todo-item--done` : ``;
  }

  statusHandler = () => {
    const {item} = this.props;
    this.props.changeItemStatus({
      id: item.id,
      status: !item.done
    });
  }

  deleteHandler = () => {
    const {item: {id}} = this.props;
    this.props.deleteItem(id);
  }
}


export default connect(null, { deleteItem, changeItemStatus })(TodoItem);