import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from './../../AC';
import './styles.css';


class AddForm extends Component {
  static propTypes = {
    // from connect
    addItem: PropTypes.func
  }

  state = {
    value: ''
  }

  render() {
    return (
      <div className="add-form">
        <input value = {this.state.value} onChange = {this.inputHandler} placeholder='Что нужно сделать?' className="add-form__input" />
        <button disabled = {this.isSubmitDisabled()} onClick = {this.submitHandler} className="add-form__submit" >Добавить</button>
      </div>
    )
  }

  inputHandler = (evt) => {
    this.setState({
      value: evt.target.value
    })
  }

  isSubmitDisabled = () => {
    return this.state.value === '';
  }

  submitHandler = () => {
    this.props.addItem(this.state.value);
    this.setState({
      value: ''
    })
  }
}


export default connect(null, { addItem })(AddForm);