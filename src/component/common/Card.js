import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={styles.CardContainer}>
    {props.children}
  </View>
);


const styles = {
  CardContainer: {
    borderRadius: 2,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1
  }
};

export { Card };
