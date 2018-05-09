import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { HomePage, MainFeed, Login, Profile, Saved, Register, Post, Article, BulletPad, NotePad, AfterLiked, AfterRefresh, NoSaved } from "./components/screens";
import { ArtSum, ArtBac, ArtCon, ArtMet, ArtRes } from "./components/screens/articlesubs";
import { Interests } from "./components/screens/profilesubs";
import { 
	SwitchNavigator, 
	TabNavigator,
	StackNavigator
	 } from "react-navigation";


const Tabs = SwitchNavigator({
	profile: Profile,
	saved: Saved,
	nos: NoSaved,
	feed: HomePage,
	article: Article,
	listed: BulletPad,
	remark: NotePad, 
	artsum: ArtSum,
	artbac: ArtBac, 
	artcon: ArtCon, 
	artmet: ArtMet, 
	artres: ArtRes,
	interests: Interests,
	afterliked: AfterLiked,
	refresh: AfterRefresh
});


const IntroStack = SwitchNavigator({
	login: {screen: Login},
	register: {screen: Register}
	
});

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