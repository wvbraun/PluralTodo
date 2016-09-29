'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Render from "./Render";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5
  }
});

class TaskRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.Render = Render.bind(this);
    this.onDonePressed = this.onDonePressed.bind(this);
  }

  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  render() {
    return this.Render(styles);
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
};

export default TaskRow;
