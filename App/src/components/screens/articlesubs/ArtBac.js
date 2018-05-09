import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, WebView } from "react-native";
import config from "../../../config";

class ArtBac extends Component{

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
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>BACKGROUND</Text>
						<Text />
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
							The first week after concussion is a period of peak symptom presentation (McCrory et al., 2013), and represents an important stage for secondary injury processes. Experimental animal studies have found that it is marked by disturbances in neural metabolism and cerebral autoregulation (Giza and Hovda, 2014), and is correlated with the greatest macrophage recruitment to the brain (Mishra et al., 2016). However, our understanding of these processes in humans remains limited.
						</Text>

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					Since the identification of the neurometabolic cascade in 2001 (Giza and Hovda, 2001), advanced neuroimaging using Magnetic Resonance Imaging (MRI) has been the most frequently employed modality to evaluate concussion pathophysiology in humans (Giza and Hovda, 2014), and has proven particularly useful for characterizing disturbances in resting brain function. For example, arterial spin labelling (ASL) has provided evidence of altered cerebral blood flow (CBF) in individuals with concussion (Becelewski and Pierzchala, 2002; Churchill et al., 2017b; Ge et al., 2009; Grossman et al., 2013; Meier et al., 2015; Wang et al., 2016), and blood oxygenation level dependent functional MRI (BOLD fMRI) has been used to measure communication between brain regions, with concussed individuals showing patterns of altered connectivity (Churchill et al., 2017b; Johnson et al., 2012; Zhu et al., 2015).
						</Text>	

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
				In addition to neuroimaging, blood biomarkers are a convenient and relatively inexpensive tool that can be used to measure analytes linked to pathophysiological processes such as inflammation and neurodegeneration (Di Battista et al., 2013; Sahu et al., 2017), and have been utilized across the severity spectrum of traumatic brain injury (TBI) to help understand the complex interactions between the central nervous system (CNS) and the periphery (Catania et al., 2009; Di Battista et al., 2016a; Jaerve and Muller, 2012). Indeed, recent blood biomarker studies in sport-related concussion (SRC) have identified inflammatory perturbations that correlate with dysregulation of the hypothalamic-pituitary-adrenal axis (Gill et al., 2016; Merchant-Borna et al., 2016). However, blood biomarker analysis in concussion is not without limitations. For example, neuroinjury markers such as s100 calcium binding protein (s100B) (Papa et al., 2014; Savola et al., 2004) and neuron specific enolase (NSE) (Gempp et al., 2014; Isgro et al., 2015; Tolan et al., 2013) are elevated in the peripheral blood after non-head trauma and hemolysis, and increases in s100B have also been observed acutely after exercise (Koh and Lee, 2014). Furthermore, modulation of the neuroendocrine-immune axis can be seen in many forms of stress, acute infection, and chronic health disorders (Chrousos, 1997; Elenkov, 2000; Elenkov and Chrousos, 1999; Jones, 2012; Liezmann et al., 2012; Menard et al., 2017; Webster et al., 1997; Woda et al., 2016). Hence, while athletes are generally regarded as healthy, researchers need to be cognisant of both experimental design and the interpretation of findings when employing blood biomarkers to investigate the pathophysiology of sport-related concussion (SRC).
						</Text>	

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					One potential strategy to improve the utility of blood biomarkers to brain injury is by analyzing them in parallel with advanced neuroimaging. To date, multimodal analysis using neuroimaging and blood biomarkers has been largely limited to non-sport mild TBI (mTBI), and has most often employed gross computerized tomography (CT) alongside common neuroinjury biomarkers such as s100B and glial fibrillary acidic protein (GFAP) (Akhtar et al., 2003; Muller et al., 2007; Pelinka et al., 2004; Petzold et al., 2003; Unden and Romner, 2010; Wiesmann et al., 2010). In the few studies that have employed advanced neuroimaging techniques, elevations in blood levels of s100B and GFAP have been associated with significant radiologic findings using structural MRI (Ingebrigtsen and Romner, 1996), and altered measures of white matter microstructure using diffusion tensor imaging (DTI) (Ingebrigtsen and Romner, 1996; Kou et al., 2013; Siman et al., 2013). In the sport domain, Marchi and colleagues simultaneously employed peripheral blood analysis and DTI, and found that s100B autoantibody levels were correlated with microstructural abnormalities in football players sustaining a comparatively greater number of subconcussive impacts throughout a competitive season (Marchi et al., 2013). While this provides encouraging preliminary evidence, there are no combinatorial blood biomarker and advanced neuroimaging studies that have evaluated athletes after a physician diagnosed SRC.
						</Text>		

						<Text/>
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
			Hence, the purpose of this study was to evaluate the relationship between peripheral blood biomarkers related to neuroinjury, and advanced functional brain imaging measures of CBF and functional connectivity, after SRC. We hypothesized that concussed athletes, compared to non-concussed athletes, would display greater covariance between blood biomarker concentrations and advanced MRI measures.

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


export default ArtBac;