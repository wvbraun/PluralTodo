'use strict';

import React, { PropTypes } from 'react';
import TaskRow from './components/TaskRow/TaskRow';
import {
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600'
  }
});

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource: dataSource });
  }

  renderRow(todo) {
    return (
      <TaskRow
        onDone={this.props.onDone}
        todo={todo}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onAddStarted}
        >
          <Text style={styles.buttonText}>
            Add One
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDone: PropTypes.func.isRequired,
  onAddStarted: PropTypes.func.isRequired
};

export default TaskList;
