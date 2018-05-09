import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, WebView } from "react-native";
import config from "../../../config";

class ArtRes extends Component{


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
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>RESULTS</Text>
						<Text />
						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					A summary of athlete characteristics can be found in Table 1. All groups spanned similar age ranges and male-to-female ratio (Table 1): AcuConc (9 female (56%), median age: 18.5 yrs), HxConc (5 female (42%), median age: 21.0 yrs), NoConc (8 female (53%), median age: 19.0 yrs). The highest represented sport in the AcuConc group was rugby (n = 6, 37.5%) while the highest represented sport for both the NoConc and HxConc groups was volleyball (n = 6 (40%); n = 6 (50%), respectively). In concussed athletes, at the time of blood draw, the median total number of symptoms was 5.0 (IQR 4.0–11.7), while the median symptom severity score was 7.0 (IQR 4.0–14.0). The median days to return-to-play was 36 (IQR 14.2–84.5), only one athlete suffered loss of consciousness (6%), and three athletes reported amnesia (18.7%) (data not shown).

						</Text>

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
				Associations between CBF and blood biomarkers are depicted in Fig. 1. The comparison of recently concussed athletes (AcuConc vs. NoConc) showed greater differences in MRI and biomarker expression than the HxConc vs. NoConc comparison. Extensive negative co-modulation of CBF and T-tau was seen in the AcuConc vs. NoConc comparison, with similar but more spatially sparse effects observed for AcuConc vs. HxConc, indicating that concurrently reduced CBF and T-tau is more pronounced in recently concussed individuals compared to healthy individuals with or without a history of concussion. Negative anti-modulation of CBF with PRDX-6 was also observed in the AcuConc vs. NoConc comparison, indicating that the inverse relationship between CBF and PRDX-6 was stronger in recently concussed individuals compared to those without a history of concussion.

						</Text>		

						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
					The associations between Gconn and blood biomarkers are depicted in Fig. 2. Consistent with CBF, co-modulation effects were only seen with T-tau; Gconn showed negative co-modulation in the AcuConc vs. NoConc comparison, with similar but spatially sparser effects for AcuConc vs. HxConc, indicating that lower GConn is related to elevated T-tau levels to a greater degree in acutely concussed athletes compared to healthy athletes with or without a history of concussion. Furthermore, consistent with CBF, negative anti-modulation of Gconn with PRDX-6 was observed in the AcuConc vs. NoConc comparison, indicating that the association between lower Gconn and elevated PRDX-6 is more extensive in recently concussed individuals compared to individuals without a history of concussion. However, anti-modulation of Gconn was seen across a more extensive suite of biomarkers. In particular, s100B showed the greatest effects for HxConc vs. NoConc, with weaker effects for AcuConc vs. NoConc, indicating that co-modulatory effects are greatest for individuals with a history of concussion. MCP4 also showed extensive negative anti-modulation for both AcuConc vs. NoConc and HxConc vs. NoConc, while MCP1 showed highly sparse effects for AcuConc only. Finally, only T-tau showed significant anti-modulation in AcuConc vs. HxConc.

						</Text>	


						<Text/>

						<Text style={{marginLeft: 5, marginRight: 5, fontSize: 12}}>
				In order to better interpret the spatial pattern of concussion effects seen for CBF (Fig. 1) and Gconn (Fig. 2), Fig. 3 depicts voxel-wise maps counting the number of brain-biomarker analyses that detected significant concussion effects. For CBF, significant coupling with biomarkers is mainly seen fronto-temporally. Areas overlapping across multiple analyses include the bilateral orbitofrontal regions (axial slices −14,−4), bilateral insula (slice +6), anterior cingulate (slices +16,+26,+36), midcingulate (slices +36,+46) and middle frontal lobes (slices +46,+56). There is also a tendency towards right lateralization, with overlap in the right middle temporal (slices −14,−4), inferior occipital (slice −14), superior temporal (slice −4,+6,+16,+26), postcentral (slice +26) and angular gyri (slice +36,+46). For Gconn, effects appear to be primarily in bilateral occipital and parietal regions, with the most reliable brain-biomarker coupling effects seen in the inferior occipital lobes (slices −4,+6) middle occipital lobes, cuneus (slice +26) and precuneus (slices +46,+56), and midcingulate cortex (slices +36, +46). Consistent with CBF, some fronto-temporal peaks are also seen in right middle temporal (slice +6), right superior temporal (slice 16), right inferior frontal (slice +26) and bilateral middle frontal brain regions (slice +46).

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

export default ArtRes;