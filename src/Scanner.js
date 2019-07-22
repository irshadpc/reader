import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import QRscanner from "./QRScanner";
import { ToastAndroid } from "react-native";

export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: false,
      zoom: 0.2
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <QRscanner
          onRead={this.onRead}
          renderBottomView={this.bottomView}
          flashMode={this.state.flashMode}
          zoom={this.state.zoom}
          finderY={50}
        />
      </View>
    );
  }
  bottomView = () => {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#0000004D" }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => this.setState({ flashMode: !this.state.flashMode })}
        >
          <Text style={{ color: "#fff" }}>
            Click me to turn on/off the flashlight
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  onRead = res => {
    console.log(res);
    ToastAndroid.show(res.data, ToastAndroid.SHORT);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
