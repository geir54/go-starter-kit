import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default class Todo extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>;
  }

}
