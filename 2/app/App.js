// Nguyen Tuan Anh 17020585

import React, {Component} from 'react';
import {StatusBar, View } from 'react-native';
import Categories from './screens/Categories';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#12a6e4"/>
        <Categories />
      </View>
    );
  }
}
