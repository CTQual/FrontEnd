import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Qual from './src/Qual.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Qual />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
