import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import config from "../../../config";

class ArtMet extends Component{

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
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>METHODS</Text>
						<Text />
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					Forty-three (43) athletes were recruited from interuniversity teams at a single institution (including volleyball, hockey, soccer, football, rugby, basketball and lacrosse). Sixteen (16) athletes were recruited within 1–7 days (blood draw, median = 3.6 days; MRI scans, median = 4 days) of a physician diagnosed concussion (AcuConc). Fifteen (15) healthy athletes were recruited without any prior history of concussion (NoConc), along with twelve (12) healthy athletes with a history of concussion diagnosed >6 months prior to brain imaging (HxConc). For NoConc and HxConc groups, scanning and blood draws were conducted a median of 7 days apart; AcuConc participants underwent scanning and blood draws at a median of 4 days apart. Subjects were excluded if they presented with seasonal allergies, cold, or any known acute infection at the time of blood sampling. The study procedures were approved by research ethics boards (REBs) at the University of Toronto and St. Michael's Hospital, and carried out in accordance with REB guidelines. All patients provided written informed consent prior to study participation.

						</Text>

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					Participants were imaged at St. Michael's Hospital using an MRI system operating at 3 Tesla (Magnetom Skyra, Siemens, Erlangen, Germany) with a 20-channel head receiver coil. The imaging sequences and data processing are briefly summarized below; see Supplementary methods for further details. Anatomical imaging included three-dimensional T1-weighted magnetization prepared rapid acquisition gradient echo imaging (3D MPRAGE), along with 3D fluid attenuated inversion recovery imaging (FLAIR) and 3D susceptibility-weighted imaging (SWI) to screen for structural abnormalities including lesions and micro-hemorrhage, respectively. No structural abnormalities were found for either concussed or control athletes in this study.
	
						</Text>		

						<Text/>


						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
						All functional imaging data were acquired for participants at rest, after they were instructed to lie still with their eyes closed and not focus on anything. 2D pulsed Arterial Spin Labelling(ASL) was acquired, consisting of a single calibration scan and 45 tag-control pairs. The ASL data were processed and analyzed using a combination of the ASLtbx package (cfn.upenn.edu/~zewang/ASLtbx.php) and in-house software, producing a brain map of absolute CBF for each subject in units of mL/100 g/min. Functional MRI (fMRI) data were acquired via multi-slice T2*-weighted echo planar imaging, producing a time-series of 195 images. Processing was performed using the Analysis of Functional Neuroimages package (AFNI; afni.nimh.nih.gov) and in-house software. For each brain voxel, global functional connectivity (Gconn) was then measured by computing the Pearson correlation between its BOLD time-series and all other brain voxels, and taking the mean of all (positive) connectivity values. This approach produced a brain map reflecting the total integrative function of each voxel (Cole et al., 2012; Rubinov and Sporns, 2010), which has been used to identify functional alterations after concussion for both symptomatic and asymptomatic individuals (Churchill et al., 2017b, 2017c). To perform group-level analyses, ASL and fMRIdata were co-registered to a common MNI152 template space using the FMRIB Software Library package (FSL ) and resampled to 2x2x2 mm resolution. Subsequent analyses were restricted to grey matter by retaining only voxels that intersected with the MNI152 brain mask and a grey matter mask, generated using FSL utilities.
	
						</Text>		

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
				Venous blood samples were drawn from athletes after consent was obtained. Healthy athletes with and without concussion history were sampled prior to the beginning of the competitive season, and concussed athletes were sampled within 7 days of injury (median = 3.6 days). Blood was drawn into a 10-mL K2EDTA (with 4 mM sodium metabisulfite [Na2S2O5]) or 4-mL non-additive (Vacutainer, Becton Dickinson, NJ, USA) tube. Within one hour of sampling, specimens were centrifuged for 2 min using the PlasmaPrep 12™ centrifuge (Separation Technology Inc., FL, USA). Plasma and serum supernatants were then aliquoted and frozen at −70 °C until analysis.	
						</Text>	

						<Text/>


						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					Biomarkers were evaluated using Meso Scale Diagnostics (MSD) 96-well MULTI-ARRAY® technology. The platform uses an array-based multiplex format with electrochemiluminescence detection, employing a sandwich immunoassay comprised of 1) capture antibodies coated on arrays within plate wells, and 2) detection antibodies conjugated with an electrochemiluminescent SULFO-Tag™. We employed a prototype neuroinjury-related biomarker assay developed at MSD, in part through work supported by US Army Medical Research and Materiel Command (Contract No. W81XWH-13-C-0196), and as reported previously by our group (Di Battista et al., 2016b). Seven markers were chosen from this panel due to 1) their theorized involvement in secondary injury pathophysiology, and 2) previous findings from our group (Di Battista et al., 2016b). The final assessment included s100B, total tau (T-tau), von Willebrand factor (vWF), brain derived neurotrophic factor (BDNF), peroxiredoxin (PRDX)-6, and monocyte chemoattractant protein (MCP)-1 and −4. MCP-4 was assayed in-house as part of a chemokine 10-plex kit and run on an MSD® Sector Imager™ 6000 with Discovery Workbench software (version 3.0.18). Biomarker values were employed for statistical analyses only if they fell within the lower and upper limits of detection. For statistical analysis, each marker was only evaluated if detectable in ≥80% of analyzed samples. Please see Supplementary Table 1 for biomarker concentrations across groups, Supplementary Table 2 for biomarker detectability information, and Supplementary Table 3 for assay sensitivity information.

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

export default ArtMet;