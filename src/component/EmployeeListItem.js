import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { NavigateTo } from '../actions';

class EmployeeListItem extends Component {
  onRowPress() {
    this.props.NavigateTo({ routeName: 'EmployeeEdit', employee: this.props.employee });
  }

  render() {
    console.log(this.props);
    const { name } = this.props.employee;
    const { itemTextStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress()}>
        <CardSection>
          <Text style={itemTextStyle}>
            {name}
          </Text>
        </CardSection>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  itemTextStyle: {
    fontSize: 18,
    color: 'black'
  }
};

export default connect(null, NavigateTo)(EmployeeListItem);
