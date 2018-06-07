import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.CardSectionContainer}>
      {props.children}
    </View>
  );

const styles = {
  CardSectionContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
