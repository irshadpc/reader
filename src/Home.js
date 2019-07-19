import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate('Scanner')}>
          <Text>Click to skip to scan the QR code page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate('Reader')}>
          <Text>Click to jump to the QR code page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}