import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Profile extends Component{
	personal(){
		this.props.navigation.navigate("feed");
		//navigate to the next page
	}

	render(){
		return (
			<TouchableOpacity
			style = {{
				height: 100 + "%",
				width: 100 + "%",
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
			onPress={()=> {this.personal();}}
			>
			
			<Text>Profile PAGE</Text>
			</TouchableOpacity>

		);
	}
}

export default Profile;