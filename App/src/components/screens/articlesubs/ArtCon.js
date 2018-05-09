import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, WebView } from "react-native";
import config from "../../../config";

class ArtCon extends Component{

	constructor(){
		super();
		this.state={
			savedthis: false,
			likedmiddle: false,
			likedleft: false,
			likedright: false
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
						}}>
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

				<View style={styles.goback}>
					<TouchableOpacity onPress={() => {
						this.bulletPad();
						}}>
					<Image
					style={[styles.arrow, {tintColor: "rgb(0,0,0)"}]}
					source={config.userInfo.leftarrow} 
					/>
					</TouchableOpacity>

					<View style={styles.titleBar}>
						<Text style={{marginLeft: 0, marginRight: 3, fontWeight: 'bold', fontSize: 13}}>Blood Biomarkers Are Associated With Brain Function And Blood Flow Following Sport Concussion</Text>
					</View>
				</View>

					<View style={styles.authorBar}>
						<Text style={{marginLeft: 15, marginRight: 15, fontSize: 12}}>Alex P.Di Battistaab, Nathan Churchillc, and Tom A.Schweizercd</Text>
					</View>

					<View style={styles.content}>
						<ScrollView contentContainerStyle={styles.contentContainer}>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>CONCLUSIONS</Text>
						<Text />

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
				The principal finding of this study was the robust associations observed between advanced functional MRI and peripheral blood biomarkers in athletes after SRC. We observed simultaneous alterations of multiple neuroinjury-related blood biomarkers and neuroimaging measures (Gconn and CBF) in acutely concussed athletes versus healthy athletes without prior concussion. Furthermore, healthy athletes with a history of concussion exhibited a more limited set of concurrent perturbations in peripheral blood and neuroimaging markers relative to healthy athletes with no prior concussion history. These findings were identified based on a novel co/anti-modulation analytic approach. This provided a robust, non-parametric framework for measuring concurrent variations in both brain imaging and blood biomarkers within an individual, giving greater insight into how these factors are inter-related following a concussion.
						</Text>

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
						Decreases in CBF and Gconn were associated with lower T-tau levels in concussed versus healthy athletes. While the specific underlying mechanisms cannot be ascertained in the present study, our results are potentially supportive of concussion-related abhorrent waste clearance from the brain (Iliff et al., 2014; Iliff et al., 2012). Indeed, the recently discovered glymphatic system is perturbed after experimental TBI, possibly impeding Tau clearance from the brain into the peripheral circulation (Iliff et al., 2014; Iliff et al., 2012; Plog et al., 2015). In addition, glymphatic clearance is dependent on arterial blood flow (Iliff et al., 2013), which may be affected by impaired autonomic regulation, a common sequela of concussion (Len et al., 2011). While not yet evaluated in humans, the covariant alterations we observed in peripheral T-tau, blood flow and function are supportive of this theory. Our findings are also supported by a recent study by Gill and colleagues, who identified lower plasma T-tau levels in athletes at approximately 3 days post-concussion (Gill et al., 2017). Interestingly, Gill and colleagues noted that measures of T-tau are potentially confounded by exercise in athletes (Gill et al., 2017; Shahim et al., 2015). However, in a study by Shahim and colleagues, it was found that while some brain injury-related biomarkers were elevated in the peripheral blood at one hour after a pre-season training session in hockey players, T-tau was not altered (Shahim et al., 2015). Nonetheless, future studies should attempt to control for extracranial sources of Tau and may be improved by the evaluation of its more CNS-centric isoforms, such as its phosphorylated conformation.
						</Text>

						<Text/>


						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
In the current study, decreases in CBF and Gconn were associated with elevated blood PRDX-6 levels to a greater degree in recently concussed versus healthy athletes. These findings are consistent with the hypothesis that elevated PRDX-6 is an indicator of concussion-related oxidative stress (Buonora et al., 2015a; Buonora et al., 2015b; Singh et al., 2016), which is expected to be most pronounced early after injury. The causal mechanisms remain to be fully elucidated, however, this may signify that oxidative stress during the acute metabolic cascade is associated with impairments in neural functioning and metabolic activity, the latter corresponding to our observed reduction in CBF. Alternatively, post-concussion impairments in cerebral autoregulation may lead to reduced CBF (Len et al., 2011), with subtle ischemic effects contributing to oxidative stress and reduced neurometabolic activity. However, further research is required to support these hypotheses.						
						</Text>

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
We found a greater inverse association between Gconn and s100B levels in concussed versus healthy athletes. These results are in general agreement with Marchi et al., who found a relationship between s100B autoantibodies and DTI in football players sustaining comparatively more subconcussive impacts over the course of a season (Marchi et al., 2013), and are also supported by the works of Ingebrigtsen and colleagues, who noted a relationship between s100B and cerebral contusion (MRI) in a case report study of 3 non-sport mTBI patients (Ingebrigtsen and Romner, 1996). Yet, it is difficult to consolidate these findings, as the imaging modalities, patient cohorts, and injuries differed between studies. Interpretation is further complicated by the potential non-specificity of s100B to concussion; s100B may be elevated after exercise and non-head trauma (Falcone et al., 2015; Savola et al., 2004). Yet, beyond s100B, perturbations in peripheral blood levels of calpain cleaved aII spectrin N-terminal fragment (SNTF) and GFAP have also been correlated with changes in advanced neuroimaging metrics in mTBI patients (Kou et al., 2013; Siman et al., 2013). Hence, our results contribute to a growing body of literature which has shown that changes in peripheral biomarkers associated with neuroinjury, correlate with changes in advanced neuroimaging measures after both mTBI and SRC.						
						</Text>
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

	goback: {
		width: 100 + "%", 
		height: 40,
		marginTop: 0,
		backgroundColor: "rgb(233,233,233)",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},

	arrow: {
		width: 27, 
		height: 27,
		marginLeft: 0,
		marginRight: 0,
		flexDirection: "row"
	},

	titleBar:{
		width: 90 + "%", 
		height: 40,
		marginTop: 0,
		marginLeft: 0,
		marginRight: 0,
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

export default ArtCon;