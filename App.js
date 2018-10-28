/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Header from './App/components/Header';
import AlbumList from './App/components/AlbumList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'} />
        <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
