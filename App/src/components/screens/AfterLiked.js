import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import config from "../../config";

class AfterLiked extends Component {
	
	constructor(){
		super();
		this.state={
			likedmiddle: false,
			likedleft: true,
			likedright: false,

			liked1: true,
			liked2: false,
			liked3: false,
			liked4: false,
			liked5: false,
			liked6: false,
			liked7: false
		};
	}

	likeToggled1(){
		this.setState({
			liked1: !this.state.liked1
		})

	}

	likeToggled2(){
		this.setState({
			liked2: !this.state.liked2
		})

	}

	likeToggled3(){
		this.setState({
			liked3: !this.state.liked3
		})

	}

	likeToggled4(){
		this.setState({
			liked4: !this.state.liked4
		})

	}

	likeToggled5(){
		this.setState({
			liked5: !this.state.liked5
		})

	}

	likeToggled6(){
		this.setState({
			liked6: !this.state.liked6
		})

	}

	likeToggled7(){
		this.setState({
			liked7: !this.state.liked7
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

	refresher(){ 
		this.props.navigation.navigate("refresh");
	}


	render(){

		const heartIconColor1 = this.state.liked1 ? "rgb(252,61,57)" : null;
		const heartIconColor2 = this.state.liked2 ? "rgb(252,61,57)" : null;
		const heartIconColor3 = this.state.liked3 ? "rgb(252,61,57)" : null;
		const heartIconColor4 = this.state.liked4 ? "rgb(252,61,57)" : null;
		const heartIconColor5 = this.state.liked5 ? "rgb(252,61,57)" : null;
		const heartIconColor6 = this.state.liked6 ? "rgb(252,61,57)" : null;
		const heartIconColor7 = this.state.liked7 ? "rgb(252,61,57)" : null;

		const profileIconColor = this.state.likedmiddle ? "rgb(255, 255, 255)" : null;
		const homeIconColor = this.state.likedleft ? "rgb(255, 255, 255)" : null;
		const savedIconColor = this.state.likedright ? "rgb(255, 255, 255)" : null;

		return(

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
				<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", marginLeft: 145, marginRight: 50, width:60, height:27, marginTop: 38, marginBottom:3}} 
					source={config.images.qualIcon}/>


					<TouchableOpacity onPress={() => {
						this.refresher();
						}}>
					<Image
					style={{width:27, height:27, marginTop: 38, marginLeft: 50, marginRight: 10, tintColor: "rgb(255,255,255)"}}
					source={config.touchBar.refreshIcon}/>
					</TouchableOpacity>
				</View>


				///journal
				///article1
				<ScrollView contentContainerStyle={styles.contentContainer}>

				

				///article2

				///article3: liked
				<View style={styles.journalBar} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jon} 
						/>
						<Text style={{marginLeft: 5, marginRight: 45,fontWeight: 'bold'}}>Journal Of Neuroimmunology</Text>

						<View style={{alignItems: "center"}}>

						<TouchableOpacity onPress={() => {
						this.likeToggled1();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor1}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>

				<TouchableOpacity onPress={() => {
						this.fulltext();
						}}
						>
				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 160
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Blood Biomarkers Are Associated With Brain Function And Blood Flow Following Sport Concussion</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Secondary injury pathophysiology after sport-related concussion (SRC) is poorly understood. Blood biomarkers may be a useful tool for characterizing these processes combining blood biomarker analysis with advanced neuroimaging may help validate their continued utility in brain injury research by demonstrating important secondary injury mechanisms. Forty-three university level athletes from 7 sports...</Text>
			
				</View>
				</TouchableOpacity>

				///old article2
				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jama}
						/>
						<Text style={{marginLeft: 5, marginRight: 128,fontWeight: 'bold'}}>JAMA Neurology</Text>

						<View style={{alignItems: "center"}}>
						<TouchableOpacity onPress={() => {
						this.likeToggled2();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor2}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>

				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 140
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>A Review of the Current Therapies, Challenges, and Future Directions of Transcranial Focused Ultrasound Technology</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Magnetic resonance imaging–guided focused ultrasound ablation has been approved for the treatment of refractory essential tremor and is being studied for other neurological indications, including dyskinesias and tremor in Parkinson disease, dystonia, neuropathic pain, obsessive-compulsive disorder, epilepsy, and brain...</Text>
				</View>

				



				///old article3
				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={{
								width: 42, 
								height: 38,
								marginLeft: 0
							}}
							source={config.copyright.npj} 
						/>
						<Text style={{marginLeft: 5, marginRight: 77,fontWeight: 'bold'}}>NPJ Precision Oncology</Text>

						<View style={{alignItems: "center"}}>
						<TouchableOpacity onPress={() => {
						this.likeToggled3();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor3}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>

				///article4
				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 130
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Organotropism: new insights into molecular mechanisms of breast cancer metastasis</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Metastasis accounts for 90% of breast cancer mortality. Despite the significant progress made over the past decade in cancer medicine our understanding of metastasis remains limited, therefore preventing and targeting metastasis is not yet possible. Breast cancer cells preferentially metastasize to specific organs...</Text>
				</View>

				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.ajm}
						/>
						<Text style={{marginLeft: 5, marginRight: 10,fontWeight: 'bold'}}>The American Journal Of Medicine</Text>

						<View style={{alignItems: "center"}}>
						<TouchableOpacity onPress={() => {
						this.likeToggled4();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor4}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>

				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 130
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Emerging Trends in Pain Medication Management: Back to the Future A Focus on Ketamine</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Providers face many challenges when faced with pain management. Pain is complex, difficult to understand, diagnose, and especially enigmatic to manage. The discovery of non-opioid agents for pain management has become particularly important considering the on-going opioid epidemic. This review is focused on...</Text>
				</View>

				///Article 5
				<View style={styles.journalBarr} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jon} 
						/>
						<Text style={{marginLeft: 5, marginRight: 45,fontWeight: 'bold'}}>Journal Of Neuroimmunology</Text>

						<View style={{alignItems: "center"}}>

						<TouchableOpacity onPress={() => {
						this.likeToggled5();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor5}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>

				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 160
				}}>
					<Text style={{marginTop:9, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Infiltrating macrophages are broadly activated at the early stage to support acute skeletal muscle injury repair</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>
					Acute skeletal muscle injury repair requires an adequate inflammatory response predominated by macrophage infiltration. We studied the activation of infiltrating macrophages by analyzing the expression of M1/M2 signature genes. Most of the intramuscular macrophages were Ly6Chi at day 1 after BaCl2 injection, while many were Ly6Clo at day 3. Ly6Chi macrophages at day 1 expressed a high level of both M1 and M2...</Text>
			
				</View>





				///article6

				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jama}
						/>
						<Text style={{marginLeft: 5, marginRight: 128,fontWeight: 'bold'}}>JAMA Neurology</Text>

						<View style={{alignItems: "center"}}>
						<TouchableOpacity onPress={() => {
						this.likeToggled6();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor6}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>				


				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 160
				}}>
					<Text style={{marginTop:9, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Changes in Synthetic Opioid Involvement in Drug Overdose Deaths in the United States</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>
Drug overdose deaths are at unprecedented levels in the United States.1 Prescription opioids have been the most common drug involved in overdose deaths, but heroin and synthetic opioids (primarily illicit fentanyl) are increasingly implicated in overdoses.2 In addition, synthetic opioids are increasingly found in illicit drug supplies of heroin, cocaine, methamphetamine, and counterfeit pills.3 To date, the involvement of...</Text>
			
				</View>


				///Article7


				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jama}
						/>
						<Text style={{marginLeft: 5, marginRight: 128,fontWeight: 'bold'}}>JAMA Neurology</Text>

						<View style={{alignItems: "center"}}>
						<TouchableOpacity onPress={() => {
						this.likeToggled7();
						}}
						>
						<Image
							style={[styles.journalPicRight, {tintColor: heartIconColor7}]}
							source={config.images.heartIcon} 
						/>
						</TouchableOpacity>
						</View>

					</View>

					
				</View>			


				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 160
				}}>
					<Text style={{marginTop:9, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>The therapeutic potential of resveratrol: a review of clinical trials</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>
				Resveratrol is a nutraceutical with several therapeutic effects. It has been shown to mimic effects of caloric restriction, exert anti-inflammatory and anti-oxidative effects, and affect the initiation and progression of many diseases through several mechanisms. While there is a wealth of in vitro and in vivo evidence that resveratrol could be a promising therapeutic agent, clinical trials must confirm its potential. In this work...</Text>
			
				</View>



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

	refresh: {
		width: 100 + "%",
		height: 35,
		backgroundColor: "rgb(255, 255, 255)",
		marginBottom: 0,
		flexDirection:"row",
		justifyContent: "center",
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

	journalBarN:{
		width: 100 + "%", 
		height: 55,
		borderTopColor: "rgb(233,233,233)",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "rgb(233,233,233)",
		backgroundColor: "rgb(250,250,250)",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection:"row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 5

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

export default AfterLiked;