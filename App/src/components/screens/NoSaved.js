import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import config from "../../config";

class NoSaved extends Component {
	
	constructor(){
		super();
		this.state={
			likedmiddle: false,
			likedleft: false,
			likedright: true,

			liked1: true
		};
	}

	

	likeToggled1(){
		this.setState({
			liked1: !this.state.liked1
		})

	}

	likeToggled_middle(){
		this.setState({
			likedmiddle: !this.state.likedmiddle
		})

	}

	likeToggled_left(){
		this.setState({
			likedleft: !this.state.likedleft
		})

	}

	likeToggled_right(){
		this.setState({
			likedright: !this.state.likedright
		})

	}

	profile(){ 
		this.props.navigation.navigate("profile");
	}

	saved(){ 
		this.props.navigation.navigate("saved");
	}

	home(){ 
		this.props.navigation.navigate("feed");
	}

	fulltext(){ 
		this.props.navigation.navigate("article");
	}


	render(){

		const heartIconColor1 = this.state.liked1 ? "rgb(252,61,57)" : null;
		
		const profileIconColor = this.state.likedmiddle ? "rgb(255, 255, 255)" : null;
		const homeIconColor = this.state.likedleft ? "rgb(255, 255, 255)" : null;
		const savedIconColor = this.state.likedright ? "rgb(255, 255, 255)" : null;

		return(

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>

				<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", marginLeft: 131, marginRight: 123, width:60, height:27, marginTop:38, marginBottom:3}} 
					source={config.images.qualIcon}/>

				</View>


				///journal
	
				<ScrollView contentContainerStyle={styles.contentContainer}>

				
				///article3: liked

				</ScrollView>
				///bar

				<View style={styles.tempBar}>
					<View style={{ flexDirection: "row", alignItems:"center"}}>

						//left: home
						<TouchableOpacity onPress={() => {
											this.likeToggled_left();
											this.home();
											}}
						>
							<Image
								style={[styles.BarPicLeft, {tintColor: homeIconColor}]}
								source={config.touchBar.homeIcon} 
							/>
						</TouchableOpacity>

						//middle:profile
						<TouchableOpacity onPress={() => {
											this.likeToggled_middle();
											this.profile();
											}}
						>
							<Image
								style={[styles.BarPicMiddle, {tintColor: profileIconColor}]}
								source={config.touchBar.profileIcon} 
							/>
						</TouchableOpacity>

						//right:saved
						<TouchableOpacity onPress={() => {
											this.likeToggled_right();
											this.saved();
											}}
						>
							<Image
								style={[styles.BarPicRight, {tintColor: savedIconColor}]}
								source={config.touchBar.savedIcon} 
							/>
						</TouchableOpacity>

					</View>
				</View>
				
				
			</View>

		);
	
	}
}

const styles = StyleSheet.create({
	tempQ: { 
			width: 100 + "%", 
			height: 80,
			marginBottom: 0,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			flexDirection:"row",
			justifyContent: "center",
			alignItems: "center"
	},


	journalBar:{
		width: 100 + "%", 
		height: 55,
		marginTop: 0,
		borderBottomColor: "rgb(233,233,233)",
		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: "rgb(250,250,250)",
		flexDirection:"row",
		justifyContent: "center"

	},


	journalPicLeft: {
		width: 40, 
		height: 40,
		marginLeft: 0

	},

	journalPicRight: {
		width: 27, 
		height: 27,
		marginLeft: 10
	},

	tempBar: { 
			width: 100 + "%", 
			height: 60,
			marginTop: 0,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	},

	BarPicLeft: {
		width: 27, 
		height: 27,
		marginLeft: 10,
		marginBottom: 10

	},

	BarPicMiddle: {
		width: 27, 
		height: 27,
		marginLeft: 100,
		marginRight:100,
		marginBottom: 10
	},

	BarPicRight: {
		width: 32, 
		height: 32,
		marginRight: 10,
		marginBottom: 10
	},

	contentContainer: {
	marginTop: 0,
    paddingVertical: 20
  	},

  	journalBarr:{
		width: 100 + "%", 
		height: 55,
		marginTop: 0,
		marginBottom:10,
		borderBottomColor: "rgb(233,233,233)",
		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: "rgb(250,250,250)",
		flexDirection:"row",
		justifyContent: "center"

	}

});

export default NoSaved;