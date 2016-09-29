'use strict';

// import Exponent from 'exponent';
import React from 'react';
import { AppRegistry, Navigator } from 'react-native'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    };

    this.updateNav = this.updateNav.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAddStarted = this.onAddStarted.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onSave(task) {
    let todos = this.state.todos;
    todos.push({ task: task })
    this.setState({ todos: todos });
    this.nav.pop();
  }

  onDone(todo) {
    const todos =
      this.state.todos.filter((_todo) => {
        return _todo !== todo;
    });
    this.setState({ todos: todos });
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onSave={this.onSave}
            onCancel={this.onCancel}
          />
        );

      default:
        return (
          <TaskList
            todos={this.state.todos}
            onDone={this.onDone}
            onAddStarted={this.onAddStarted}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  updateNav(nav) {
    this.nav = nav;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={this.updateNav}
        renderScene={this.renderScene}
      />
    );
  }
}

// Exponent.registerRootComponent(App);
// AppRegistry.registerComponent('main', () => PluralTodo);
export default PluralTodo;
