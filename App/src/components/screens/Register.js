import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Image } from "react-native";
import config from "../../config";
import { 
	SwitchNavigator, 
	TabNavigator,
	StackNavigator
	 } from "react-navigation";

class Register extends Component{

	register(){
		this.props.navigation.navigate("feed");
		//navigate to the next page
	}

	render(){
		return (
			<View
			style = {{ 
				height: 100 + "%",
				width: 100 + "%",
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgb(153,220,230)"
			}}
			>

			<Image
			style={{alignItems:"center", width:160, height:72, marginTop:18, marginBottom:30}}
			source={config.images.qualIcon}
			/>

			<TextInput placeholder="Username" style={styles.input} />
			<TextInput
			secureTextEntry
			placeholder="Password"
			style={styles.input}
			/>

			<TouchableOpacity onPress={() => {this.register();}}>

			<Image
			style={{alignItems:"center", width:80, height:24, marginTop:10, marginBottom: 100}}
			source={config.images.registerIcon}
			/>

			</TouchableOpacity>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	input: {
		height: 50,
		width: 70 + "%",
		marginHorizontal: 20,
		backgroundColor: "rgb(255,255,255)",
		marginBottom: 20

	}
});

export default Register;