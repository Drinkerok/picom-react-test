import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {todoItemsSelector} from './../../selectors';
import Loader from './../Loader';
import {loadTodoItems} from './../../AC';
import TodoItem from './TodoItem';
import './styles.css';


class Todo extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired
  }


  componentDidMount() {
    const {loading, loaded, loadTodoItems} = this.props;
    if (!loading && !loaded) loadTodoItems();
  }


  render() {
    const {todoList, loading} = this.props;
    if (loading) return <Loader />;
    if (todoList.length === 0) return <div className="todo todo--empty">Всё сделано</div>

    const items = todoList.map(item => <li key = {item.id} className="todo__item"><TodoItem item = {item} /></li>);

    return (
      <div className="todo">
        <ul className="todo__list">
          {items}
        </ul>
      </div>
    )
  }
}


export default connect(state => ({
  todoList: todoItemsSelector(state),
  loading: state.todo.loading,
  loaded: state.todo.loaded,
}), { loadTodoItems })(Todo);