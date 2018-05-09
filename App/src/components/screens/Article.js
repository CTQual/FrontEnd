import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import config from "../../config";

class Article extends Component{

	constructor(){
		super();
		this.state={
			savedthis: false,
			likedmiddle: false,
			likedleft: false,
			likedright: false,
		};
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

	likeArticle(){
		this.setState({
			savedthis: !this.state.savedthis
		})

	}

	homescreen(){ 
		this.props.navigation.navigate("feed");
	}

	bulletPad(){
		this.props.navigation.navigate("listed");
	}

	notePad(){
		this.props.navigation.navigate("remark");
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


	render(){
		const savedthisIconColor = this.state.savedthis ? "rgb(252,61,57)" : null;
		const profileIconColor = this.state.likedmiddle ? "rgb(255, 255, 255)" : null;
		const homeIconColor = this.state.likedleft ? "rgb(255, 255, 255)" : null;
		const savedIconColor = this.state.likedright ? "rgb(255, 255, 255)" : null;

		return (

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
				<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", marginLeft: 131, marginRight: 123, width:60, height:27, marginTop:38, marginBottom:3}} 
					source={config.images.qualIcon}/>

				</View>


				<View style={styles.articleBar} >
					<View style={styles.clickBar}>

						<Text style={{marginLeft: 5, marginRight: 70, fontSize: 12}}>Journal Of Neuroimmunology</Text>

						<TouchableOpacity onPress={() => {
						this.bulletPad();
						}}
						>
						<Image
							style={styles.barIcon1}
							source={config.images.bullet} 
						/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => {
						this.notePad();
						}}
						>
						<Image
							style={styles.barIcon2}
							source={config.images.notes} 
						/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => {
						this.likeArticle();
						}}
						>
						<Image
							style={[styles.barIcon3, {tintColor: savedthisIconColor}]}
							source={config.touchBar.savedIcon} 
						/>
						</TouchableOpacity>

					</View>

					<View style={styles.titleBar}>
						<Text style={{marginLeft: 15, marginRight: 15, fontWeight: 'bold', fontSize: 13.5}}>Blood Biomarkers Are Associated With Brain Function And Blood Flow Following Sport Concussion</Text>
					</View>

					<View style={styles.authorBar}>
						<Text style={{marginLeft: 15, marginRight: 15, fontSize: 12}}>Alex P.Di Battistaab, Nathan Churchillc, and Tom A.Schweizercd</Text>
					</View>

					<View style={styles.content}>
						<ScrollView contentContainerStyle={styles.contentContainer}>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>SUMMARY</Text>
						<Text />
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Secondary injury pathophysiology after sport-related concussion (SRC) is poorly understood. Blood biomarkers may be a useful tool for characterizing these processes combining blood biomarker analysis with advanced neuroimaging may help validate their continued utility in brain injury research by demonstrating important secondary injury mechanisms.</Text> 
						<Text />
						
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Forty-three university level athletes from 7 sports were recruited (16 recently concussed athletes; 15 healthy athletes with no prior history of concussion; 12 healthy athletes with a history of concussion).</Text>
						<Text />
						
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Seven blood biomarkers were evaluated: s100B, total tau (T-tau), von Willebrand factor (vWF), brain derived neurotrophic factor (BDNF), peroxiredoxin (PRDX)-6, monocyte chemoattractant protein (MCP)-1 and −4.</Text>
						<Text />
						
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>We identified robust relationships between peripheral blood biomarkers and MRI measures in both recently concussed athletes and healthy athletes with a history of concussion.</Text>
						<Text />
						
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>The results from this combinatorial approach further support that human concussion is associated with inflammation, oxidative stress, and cellular damage, and that physiological perturbations may extend chronically beyond recovery.</Text>

						</ScrollView>
					</View>
					

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


	articleBar:{
		width: 100 + "%", 
		height: 83 + "%",
		backgroundColor: "rgb(233,233,233)",
		flexDirection:"column",
		alignItems: "center"

	},

	clickBar: {
		width: 100 + "%", 
		height: 40,
		marginTop: 10,
		backgroundColor: "rgb(233,233,233)",
		flexDirection:"row",
		justifyContent: "center",
		alignItems: "center"
	},

	titleBar:{
		width: 100 + "%", 
		height: 40,
		marginTop: 0,
		backgroundColor: "rgb(233,233,233)",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},

	authorBar:{
		width: 100 + "%", 
		height: 20,
		marginTop: 0,
		backgroundColor: "rgb(233,233,233)",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},

	tempQ: { 
			width: 100 + "%", 
			height: 80,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	},


	tempBar: { 
			width: 100 + "%", 
			height: 60,
			marginTop: 0,
			backgroundColor: "rgb(153,220,230)",
			justifyContent: "center",
			alignItems: "center"
	},

	barIcon1: {
		width: 25, 
		height: 25,
		marginLeft: 22,
		marginRight: 3
	},

	barIcon2: {
		width: 25, 
		height: 25,
		marginLeft: 3,
		marginRight: 3
	},

	barIcon3: {
		width: 25, 
		height: 25,
		marginLeft: 3,
		marginRight: 5
	},

	content: {
		width: 90 + "%", 
		height: 80 + "%",
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: "rgb(250,250,250)",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},

	contentContainer: {
	marginTop: 0,
    paddingVertical: 20
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
	}

});


export default Article;