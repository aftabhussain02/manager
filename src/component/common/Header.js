import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
	<View style={style.headerContainer}>
	<Text style={style.headerFont}>{props.headerText}</Text>
	</View>
	);

	
const style = {
	headerContainer: {
   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 1,
		elevation: 2
	},
	headerFont: {
		fontSize: 20
	}
};

export { Header };
