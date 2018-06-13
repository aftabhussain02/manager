import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  render() {
    const { name } = this.props.employee;
    const { itemTextStyle } = styles;
    return (
        <CardSection>
          <Text style={itemTextStyle}>
            {name}
          </Text>
        </CardSection>
    );
  }
}

const styles = {
  itemTextStyle: {
    fontSize: 18,
    color: 'black'
  }
};

export default EmployeeListItem;
