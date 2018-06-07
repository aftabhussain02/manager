import React, { Component } from 'react';
import { View, Text, YellowBox } from 'react-native';
import { connect } from 'react-redux';
import {
   Card,
   CardSection,
   Input,
   Button,
   Spinner
  } from './common';
import { loginDetail, loginUser } from '../actions';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class LoginForm extends Component {

  static navigationOption = {
    title: 'welcome',
    headerStyle: {
       backgroundColor: 'black',
   },
   headerTitleStyle: {
       color: 'black',
       flex: 1
   },
   headerBackTitleStyle: {
       color: '#345',
   },
   headerTintColor: 'white',
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Card style={{ backgroundColor: '#333' }}>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@gmail.com"
            value={this.props.email}
            onChangeText={text => this.props.loginDetail({ prop: 'email', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeHolder="********"
            value={this.props.password}
            onChangeText={text => this.props.loginDetail({ prop: 'password', value: text })}
          />
        </CardSection>
        <Text style={styles.errorText}>{ this.props.error }</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      </View>
    );
  }
}

const mapStateToProp = state => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading };
};

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default connect(mapStateToProp, { loginDetail, loginUser })(LoginForm);
