import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MainFeed, Login, Profile, Saved, Register } from "./components/screens";
import { 
	SwitchNavigator, 
	TabNavigator,
	StackNavigator
	 } from "react-navigation";

const Tabs = SwitchNavigator({
	feed: MainFeed,
	profile: Profile,
	saved: Saved
});

const IntroStack = SwitchNavigator({
	login: Login,
	register: Register
})

const MainStack = SwitchNavigator({
	intro: IntroStack,
	main: Tabs
});

class Qual extends Component {
	render() {
		return <MainStack />;
	}

}

export default Qual;