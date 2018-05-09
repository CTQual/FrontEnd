import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { List, ListItem } from 'react-native-elements';
import config from "../../../config";

class Interests extends Component{

	constructor(){
		super();
		this.state={
			likedleft: false,
			likedmiddle: true,
			likedright: false

		};
	}

	homescreen(){ 
		this.props.navigation.navigate("feed");
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


	interests(){ 
		this.props.navigation.navigate("interests");
	}

	render(){

		const profileIconColor = this.state.likedmiddle ? "rgb(255, 255, 255)" : null;
		const homeIconColor = this.state.likedleft ? "rgb(255, 255, 255)" : null;
		const savedIconColor = this.state.likedright ? "rgb(255, 255, 255)" : null;
		const list = [{name: 'Annals of Internal Medicine'}, {name: 'Chemical Reviews'}];

		return (
		<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
			
				
			<View style = {styles.tempQ}>
			<Image
			style={{alignItems:"center", width:60, height:27, marginTop: 38, marginBottom:3}}
			source={config.images.qualIcon}/>
			</View>


					<View style = {styles.selected}>
					<Text style ={{marginLeft: 15, marginTop: 10, fontWeight: 'bold', fontSize: 20}}>Selected Journals</Text>
					<View style = {styles.selectedJournals}>
						<Image
						style={{width: 60, height: 39, marginLeft: 15, marginTop: 5}}
						source={config.articleTabs.jama} />

						<Image
						style={{width: 52, height: 35, marginLeft: 15, marginTop: 5}}
						source={config.articleTabs.npj} />

						<Image
						style={{width: 60, height: 35, marginLeft: 15, marginTop: 5}}
						source={config.articleTabs.nejm} />
					</View>
					</View>

					<View style = {styles.framework}>
						<ScrollView contentContainerStyle={styles.contentContainer} >
						
						<View style={styles.journalList}>
							{list.map((l, i) => (
								<ListItem key={i}
								title={l.name}
								rightIcon={{ name: 'done', style: { color: 'red' }}}/>
							))}
						</View>

						</ScrollView>
					</View>

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
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	},

	controlPad: {
			width: 100 + "%", 
			height: 300,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(200,200,200)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	},

	selected: {
			width: 100 + "%", 
			height: 90,
			backgroundColor: "rgb(233, 233,233)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			flexDirection:"column",
			justifyContent: "center"
	},

	selectedJournals:{
			width: 100 + "%", 
			height: 50,
			marginTop: 0,
			backgroundColor: "rgb(233,233,233)",
			flexDirection:"row",
			alignItems: "center"
	},

	framework: {
		width: 100 + "%", 
		height: 582,
		marginTop: 0,
		backgroundColor: "rgb(233,233,233)",
		flexDirection:"column",
		justifyContent: "center"
	},

	journalList:{
		width: 90 + "%", 
		height: 100 + "%",
		marginTop: 5,
		marginLeft: 15,
		backgroundColor: "rgb(255,255,255)",
	},

	boxstyle:{

			width: 95 + '%', 
			height: 100,
			borderRadius:10, 
			backgroundColor: 'rgb(243, 243, 243)',
			borderWidth: 1,
			borderColor: 'white',
			justifyContent: "center",
		  	marginVertical: 5,
			marginHorizontal: 10		
	},

	journalPicLeft: {
		width: 50, 
		height: 50,
		marginLeft: 10,
		borderRadius:25,
		backgroundColor: 'rgb(243, 243, 243)',
		borderColor: 'white',

	},


	username: {
		marginLeft: 10, 
		marginBottom: 5,
		fontWeight: 'bold',
		backgroundColor: 'rgb(243, 243, 243)'
	},


	smallboxstyle:{

		flexDirection:"row",
    	width: 95 + '%', 
    	height: 40,
    	borderRadius:10, 
    	backgroundColor: 'white',
    	borderWidth: 1,
      	marginVertical: 5,
		marginHorizontal: 10,	
		backgroundColor: 'rgb(243, 243, 243)',
		borderColor: 'white',
	},


	largeboxstyle:{

		flexDirection:"row",
    	width: 95 + '%', 
    	height: 210,
    	borderRadius:10, 
    	backgroundColor: 'white',
    	borderWidth: 1,
      	marginVertical: 5,
		marginHorizontal: 10,
		backgroundColor: 'rgb(243, 243, 243)',
		borderColor: 'white',		
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

	interestStyle: {
		marginLeft: 4, 
		marginTop: 5, 
		marginBottom: 5
	},


	contentContainer: {
	marginTop: 0,
    paddingVertical: 10
  	}



});


export default Interests;