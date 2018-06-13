import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { NavigateTo, employeeReset } from '../actions';

class IconButton extends Component {
  onButtonPress() {
    const { routeName } = this.props;
    
    this.props.employeeReset();
    this.props.NavigateTo({ name: routeName });
  }

  render() {
    console.log(this.props);
    return (
      <Icon.Button
        name={this.props.iconName}
        size={this.props.iconSize}
        iconStyle={{ color: 'black' }}
        backgroundColor='white'
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }
}


export default connect(null, { NavigateTo, employeeReset })(IconButton);
