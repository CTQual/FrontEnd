import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import config from "../../config";

class Profile extends Component{

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
		this.props.navigation.navigate("afterliked");
	}


	interests(){ 
		this.props.navigation.navigate("interests");
	}

	render(){

		const profileIconColor = this.state.likedmiddle ? "rgb(255, 255, 255)" : null;
		const homeIconColor = this.state.likedleft ? "rgb(255, 255, 255)" : null;
		const savedIconColor = this.state.likedright ? "rgb(255, 255, 255)" : null;


		return (
		<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
			
				
					<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", marginLeft: 130, marginRight: 123, width:60, height:27, marginTop:38, marginBottom:3}} 
					source={config.images.qualIcon}/>

				</View>

			<ScrollView contentContainerStyle={styles.contentContainer} >
			<View style={styles.profileBar} >
			{/* first box */}
		        <View style={styles.boxstyle} >

			        <View style={{ flexDirection: "row" }}>

				        <Image style={styles.journalPicLeft}
				        source = {{
				        	uri : "https://lh3.googleusercontent.com/ub07d_BPqksyNKgRmhDuipVk_guRQonBsT_uAZbks-DvxnmEWM94KpjHDwci2jz4Qe84pTZDo2x1uMQj4pTljroUyQ"									
						}} />


						<View style = {{flexDirection: "column", alignItems:"center"}}>
							<Text style={styles.username}>Sherry Z</Text>
							<Text style={{marginLeft: 27, fontSize: 12}}>Brain Surgeon</Text>
						</View>


						<View style = {{flexDirection:'row',marginLeft: 110}}>
							<Text style = {{color :'red', marginTop: 2, fontWeight: "bold", fontSize: 10}}>VIP Center</Text>
	        				<Image 
	        					style = {{marginLeft: 5, marginTop: 4, height: 10, width: 10, tintColor: "red"}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/D--9UqGBFJDMtD50DRjTpcqe5BT0_hTbKucyKXypNdLtOGnfpv1TVQuDcN-B-tec8AUvMYXhizrqM3BSYxXf5CetfA"
								}}
							/>
						</View>  

					</View>	        

		        </View>	

		    {/* second box */}
		        <View style={styles.boxstyle} >
		        	<View style={{ flexDirection: "row", alignItems:"center"}}>

		        		<View style = {{flexDirection:"column"}}>
		        			{/* first interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> Brain cancer </Text>
		        			</View>


		        			{/* second interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> Neuroscience </Text>
		        			</View>


		        			{/* third interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> Coronary Disease </Text>
		        			</View>
		        	
		        		</View>


		        		<View style = {{flexDirection:"column",position: 'absolute', top: -7, right: 10}}>

			        				<Text style = {{color: 'red', fontWeight:"bold", fontSize: 11, marginLeft: 7}}> Interests</Text>
=

							<TouchableOpacity onPress={() => {
								this.interests();
								}}
								>
	        				<Image 
	        					style = {{marginLeft: 43, marginTop: 50, height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>
							</TouchableOpacity>


		        		</View>

		        	</View>

		        </View>		
		        

		   	 {/* third box */}
		        <View style={styles.boxstyle} >
		        	<View style={{ flexDirection: "row", alignItems:"center"}}>

		        		<View style = {{flexDirection:"column"}}>
		        			{/* first interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> JAMA      The American Journal Of Medicin</Text>
		        			</View>


		        			{/* second interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> NPJ         Scientific Reports</Text>
		        			</View>


		        			{/* third interest */}
		        			<View style = {styles.interestStyle}>
		        				<Text> Journal Of Neuroimmunology</Text>
		        			</View>
		        	
		        		</View>



		        		<View style = {{flexDirection:"column",position: 'absolute', top: -7, right: 10}}>
		        			<Text style = {{color: 'red', fontWeight:"bold", fontSize: 11, marginLeft: 7}}> Following</Text>

		        			<TouchableOpacity onPress={() => {
								this.interests();
								}}
								>
	        				<Image 
	        					style = {{marginLeft: 43, marginTop: 50, height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>
							</TouchableOpacity>

		        		</View>

		        	</View>


		        </View>



					{/* fourth box => personal background */}
				<View style = {{marginTop: 10, marginLeft: 10}}>
			        <Text style={{color: 'red', marginLeft: 4}}>
			          Persional background
			        </Text>
		        </View>



		        <View style={styles.smallboxstyle} >
	        			{/* first background */}
	        			
        				<Text style = {{marginLeft: 4, marginTop: 10}}> Brain Surgeon </Text>

        				<Text style = {{marginLeft: 177, marginTop: 13, color: 'red', fontSize: 11}}> Change </Text>

        				<Image 
        					style = {{marginLeft: 7, marginTop: 16, height: 10, width: 10}}
		        			source= {{
								uri:"https://lh3.googleusercontent.com/D--9UqGBFJDMtD50DRjTpcqe5BT0_hTbKucyKXypNdLtOGnfpv1TVQuDcN-B-tec8AUvMYXhizrqM3BSYxXf5CetfA"
							}}
						/>

		        </View>



				{/* fifth box => Browsing History */}
				<View style = {{marginTop: 10, marginLeft: 10}}>
			        <Text style={{color: 'red', marginLeft: 4}}>
			          Browsing history
			        </Text>
		        </View>
	        

		        <View style={styles.largeboxstyle} >
	        			{/* first background */}
	        			<View style = {{flexDirection: 'column', marginLeft: 4, width:83+ '%'}}>
							<Text style = {{ marginLeft: 4, marginTop: 12, marginBottom:4}}>Hybrid Strategy to Prevent Venous Thromboembolism after Joint Arthroplasty... </Text>
	        				<Text style = {{ marginLeft: 4, marginTop: 10, marginBottom:4}}>Electromechanical Vortex Filaments During Cardiac Fibrillation...</Text>
	        				<Text style = {{ marginLeft: 4, marginTop: 10, marginBottom:4}}>A Review of the Current Therapies, Challenges, and 
																							Future Directions of Transcranial Focused Ultrasound 
																							Technology...</Text>
	        			</View>


	        			<View style = {{flexDirection: 'row',  marginTop: 170, marginRight: 10 }}>
	        				<Text style = {{color: 'red', marginLeft: -5}}> More </Text>
	        				<Image 
	        					style = {{marginTop: 3, marginLeft: 1,  height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>	        				

	        			</View>



		        </View>	        

		    </View>
			</ScrollView>


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

	profileBar:{
		width: 100 + "%", 
		height: 80 + "%",
		marginTop: 40,
		borderBottomColor: "rgb(233,233,233)",
		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: "rgb(250,250,250)",
		flexDirection:"column",
		justifyContent: "center"

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
    paddingVertical: 20
  	}



});


export default Profile;