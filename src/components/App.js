import React, {Component} from 'react';
import AddForm from './AddForm';
import Todo from './Todo';
import store from './../store';
import {Provider} from 'react-redux';
import './main.css';


class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <div>
          <AddForm />
          <Todo />
        </div>
      </Provider>
    )
  }
}


export default App;