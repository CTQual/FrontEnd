import React, { Component } from "react";
import { FlatList} from "react-native";
import { Liked } from "../presentation";


class LikedFeed extends Component {

	_renderPost({ item }){
		return <Liked item={item}/>;
	}

	_returnKey(item){
		return item.toString();
	}

	render(){
		return (
			<FlatList
				data={[1,2,3,4,5]}
				keyExtractor={this._returnKey}
				renderItem={this._renderPost}

		 	/>
		);
	}
}

export default LikedFeed;