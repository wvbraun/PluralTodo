'use strict';

import React, { PropTypes } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA'
  },
  cancelButton: {
    backgroundColor: '#666'
  }
});

class TaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.onAddPressed = this.onAddPressed.bind(this);
  }

  onChange(text) {
    this.task = text;
  }

  onAddPressed() {
    this.props.onSave(this.task);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text style={styles.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TaskForm;
