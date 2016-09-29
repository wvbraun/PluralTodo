'use strict';

import React, { PropTypes } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';

const localStyle = StyleSheet.create({
  row: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },
  container: {
    marginBottom: 20
  },
  doneButton: {
    borderRadius: 5,
    padding: 5
  }
});

export default function render(baseStyle) {
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed
    }
  ];

  return (
    <View style={localStyle.container}>
      <Swipeout
        backgroundColor="#fff"
        right={buttons}
      >
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>ios: {this.props.todo.task}</Text>
          <Image
            style={localStyle.doneButton}
            source={require('../../images/done.png')}
          />
        </View>
      </Swipeout>
    </View>
  );
}
