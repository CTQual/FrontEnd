import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from "../../config";

class Box extends Component{
	personal(){
		this.props.navigation.navigate("feed");
		//navigate to the next page
	}

	render(){


		return (


				<View style = {styles.boxstyle}>
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.pics}
							source={config.logs.olduser} 
						/>

						<Image
							style={styles.names}
							source={config.userInfo.verify} 
						/>

						<Text style = {{color :'red', fontWeight: "bold", fontSize: 12}}>VIP Center</Text>

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

						<Image
							style={styles.arrowStyle}
							source={config.userInfo.arrow} 
						/>

						</TouchableOpacity>
					</View>
				</View>


		);
	}
}

const styles = StyleSheet.create({

	boxstyle:{
		width: 95 + '%', 
		height: 100,
		marginTop: 10,
		borderRadius:10, 
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'rgb(218, 218, 218)',
		justifyContent: "center",
		marginVertical: 5,
		marginHorizontal: 10  
 	},

	pics: {
		height: 56,
		width: 52,
		alignItems: "center",
		marginLeft: 20,
		marginRight: 5
	},

	names: {
		height: 30,
		width: 80,
		alignItems: "center",
		marginLeft: 5,
		marginRight: 95
	},

	vip:{
		height: 25,
		width: 30,
		alignItems: "center",
		marginLeft: 95
	},

	arrowStyle:{
		height: 16,
		width: 16,
		alignItems: "center",
		marginLeft: 5,
		marginRight: 20,
		tintColor:"rgb(235,50,35)"
	}


});

export default Box;