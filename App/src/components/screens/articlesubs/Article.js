import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import config from "../../config";

class Article extends Component{

	constructor(){
		super();
		this.state={
			savedthis: false
		};
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

	render(){
		const savedIconColor = this.state.savedthis ? "rgb(252,61,57)" : null;

		return (

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
				<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", width:80, height:36, marginTop: 38, marginBottom:3}}
					source={config.images.qualIcon}/>
				</View>

				<View style={styles.articleBar} >
					<View style={styles.clickBar}>

						<Text style={{marginLeft: 5, marginRight: 22, fontSize: 12}}>The New England Journal Of Medicine</Text>

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
							style={[styles.barIcon3, {tintColor: savedIconColor}]}
							source={config.touchBar.savedIcon} 
						/>
						</TouchableOpacity>

					</View>

					<View style={styles.titleBar}>
						<Text style={{marginLeft: 5, marginRight: 25, fontWeight: 'bold', fontSize: 16}}>Hybrid Strategy to Prevent Venous Thromboembolism after Joint Arthroplasty</Text>
					</View>

					<View style={styles.authorBar}>
						<Text style={{marginLeft: 5, marginRight: 210, fontSize: 12}}>Michael P. Merchut, MD</Text>
					</View>

					<View style={styles.content}>
						<ScrollView contentContainerStyle={styles.contentContainer}>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>SUMMARY</Text>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Total hip and total knee replacement procedures offer the potential to relieve pain and disability, but both surgeries expose patients to a substantial risk of venous thromboembolism. Most experts agree that postoperative pharmacologic prophylaxis is warranted, but different clinical practice guidelines encompass a relatively wide spectrum of strategies. Recommended approaches range from low-dose aspirin monotherapy at one extreme to the long-term use of an anticoagulant such as low-molecular-weight heparin at the other. These differences are partly explained by limitations of the available evidence. </Text> 
						<Text />

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>BACKGROUND</Text>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Clinical trials and meta-analyses have suggested that aspirin may be effective for the prevention of venous thromboembolism (proximal deep-vein thrombosis or pulmonary embolism) after total hip or total knee arthroplasty, but comparisons with direct oral anticoagulants are lacking for prophylaxis beyond hospital discharge.</Text>
						<Text / >

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>METHODS</Text>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>We performed a multicenter, double-blind, randomized, controlled trial involving patients who were undergoing total hip or knee arthroplasty. All the patients received once-daily oral rivaroxaban (10 mg) until postoperative day 5 and then were randomly assigned to continue rivaroxaban or switch to aspirin (81 mg daily) for an additional 9 days after total knee arthroplasty or for 30 days after total hip arthroplasty. Patients were followed for 90 days for symptomatic venous thromboembolism (the primary effectiveness outcome) and bleeding complications, including major or clinically relevant nonmajor bleeding (the primary safety outcome).</Text>
						<Text / >

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>RESULTS</Text>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>A total of 3424 patients (1804 undergoing total hip arthroplasty and 1620 undergoing total knee arthroplasty) were enrolled in the trial. Venous thromboembolism occurred in 11 of 1707 patients (0.64%) in the aspirin group and in 12 of 1717 patients (0.70%) in the rivaroxaban group (difference, 0.06 percentage points; 95% confidence interval [CI], −0.55 to 0.66; P=0.001 for noninferiority and P=0.84 for superiority). Major bleeding complications occurred in 8 patients (0.47%) in the aspirin group and in 5 (0.29%) in the rivaroxaban group (difference, 0.18 percentage points; 95% CI, −0.65 to 0.29; P=0.42). Clinically important bleeding occurred in 22 patients (1.29%) in the aspirin group and in 17 (0.99%) in the rivaroxaban group (difference, 0.30 percentage points; 95% CI, −1.07 to 0.47; P=0.43).</Text>
						<Text / >

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>CONCLUSIONS</Text>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>Among patients who received 5 days of rivaroxaban prophylaxis after total hip or total knee arthroplasty, extended prophylaxis with aspirin was not significantly different from rivaroxaban in the prevention of symptomatic venous thromboembolism.</Text>
						<Text / >


						</ScrollView>
					</View>
					

				</View>

				<View style={styles.tempBar}>
					<TouchableOpacity onPress={() => {
						this.homescreen();
						}}
						>
					<Image
					style={styles.BarPicMiddle}
					source={config.touchBar.homeIcon} 
					/>
					</TouchableOpacity>
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

  	BarPicMiddle: {
		width: 27, 
		height: 27,
		marginLeft: 100,
		marginRight:100,
		marginBottom: 10
	}

});


export default Article;