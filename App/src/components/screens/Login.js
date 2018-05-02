import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import config from "../../config";

class Login extends Component{
	login(){
		this.props.navigation.navigate("register");
		//navigate to the next page
	}

	comeback(){
		this.props.navigation.navigate("feed");
	}

	render(){
		return (

			<View style = {{
				flex: 1,
				width: 100 + "%",
				height: 100 + "%",
				backgroundColor: "rgb(153,220,230)",
				justifyContent: "center",
				alignItems: "center"}}>
			
			<Image
			style={{alignItems:"center", width:160, height:72, marginTop:80, marginBottom:30}}
			source={config.images.qualIcon}
			/>

			<View style={{ flexDirection: "row", alignItems:"center", marginTop: 20, marginBottom: 180}}>


						<View style={{alignItems: "center"}}>

						<TouchableOpacity onPress={() => {
						this.comeback();
						}}
						>
						<Image
							style={styles.picLeft}
							source={config.logs.olduser} 
						/>
						</TouchableOpacity>
						</View>

	
						<View style={{alignItems: "center"}}>

						<TouchableOpacity onPress={() => {
						this.login();
						}}
						>
						<Image
							style={styles.picRight}
							source={config.logs.newuser} 
						/>
						</TouchableOpacity>
						</View>

			</View>

			</View>

		);
	}
}

const styles = StyleSheet.create({
	picLeft: {
		height: 70,
		width: 65,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 50,
		marginRight: 30
	},

	picRight: {
		height: 65,
		width: 65,
		marginLeft: 30,
		marginRight: 50,
		tintColor: "rgb(255,255,255)"
	}
});

export default Login;