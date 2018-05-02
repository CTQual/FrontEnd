import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from "../../config";

class Liked extends Component {

	constructor(){
		super();
		this.state={
			liked1: true,
			liked2: true,
			liked3: true
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

	render(){

		const heartIconColor1 = this.state.liked1 ? "rgb(252,61,57)" : null;
		const heartIconColor2 = this.state.liked2 ? "rgb(252,61,57)" : null;
		const heartIconColor3 = this.state.liked3 ? "rgb(252,61,57)" : null;

		return(

			<View>

				<View style={styles.journalBar} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.nejm} 
						/>
						<Text style={{marginLeft: 5, fontWeight: 'bold'}}>The New England Journal Of Medicine</Text>

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



				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 160
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Hybrid Strategy to Prevent Venous Thromboembolism after Joint Arthroplasty</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Self-organized dynamics of vortex-like rotating waves or scroll waves underlie complex spatial-temporal pattern formation in many excitable chemical and biological systems 1–4. In the heart, filament-like phase singularities 5, 6 associated with three-dimensional scroll waves8 are considered to be the organizing centers of life-threatening cardiac arrhythmias 7–13. The mechanisms underlying the onset, perpetuation, and control...</Text>
				</View>




				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={config.copyright.jama}
						/>
						<Text style={{marginLeft: 5, fontWeight: 'bold'}}>JAMA Neurology                                    </Text>

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
					height: 130
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>A Review of the Current Therapies, Challenges, and Future Directions of Transcranial Focused Ultrasound Technology</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Magnetic resonance imaging–guided focused ultrasound ablation has been approved for the treatment of refractory essential tremor and is being studied for other neurological indications, including dyskinesias and tremor in Parkinson disease, dystonia, neuropathic pain, obsessive-compulsive disorder, epilepsy, and brain tumors.</Text>
				</View>

				




				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={{
								width: 42, 
								height: 38,
								marginLeft: 10
							}}
							source={config.copyright.npj} 
						/>
						<Text style={{marginLeft: 5, fontWeight: 'bold'}}>NPJ Precision Oncology                        </Text>

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


				<View style={{
					flexDirection: "column",
					justifyContent: "center", 
					marginLeft: 15, 
					width: 330, 
					height: 130
				}}>
					<Text style={{marginTop:3, fontWeight: 'bold', marginLeft: 5, marginRight: 5, fontSize: 12}}>Organotropism: new insights into molecular mechanisms of breast cancer metastasis</Text>
					<Text style ={{marginTop: 2, marginLeft: 5, marginRight: 5, fontSize: 12, marginBottom: 2}}>Metastasis accounts for 90% of breast cancer mortality. Despite the significant progress made over the past decade in cancer medicine our understanding of metastasis remains limited, therefore preventing and targeting metastasis is not yet possible. Breast cancer cells preferentially metastasize to specific organs, known as “organotropic metastasis”...</Text>
				</View>

				
			</View>

		);
	
	}
}

const styles = StyleSheet.create({


	journalBar:{
		width: 100 + "%", 
		height: 55,
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
		marginLeft: 10

	},

	journalPicRight: {
		width: 27, 
		height: 27,
		marginLeft: 20
	}

});

export default Liked;