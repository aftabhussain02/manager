import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
    <Text style={styles.fontStyle}>
      {props.children}
    </Text>
  </TouchableOpacity>
  );


const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    padding: 10
  },
  fontStyle: {
    color: '#007aff',
    fontSize: 18,
    alignSelf: 'center'
  }
};

export { Button };
