import React, { PureComponent } from "react";
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from "react-native";

export default class LocationItem extends PureComponent {
  _handlePress = async () => {
    Keyboard.dismiss();
    this.props.clearSearchs();
    const res = await this.props.fetchDetails(this.props.place_id);
    console.log(res);
    const name = res.name;
    const vicinity = res.vicinity;
    const { location } = res.geometry;
    const latitude = location.lat;
    const longitude = location.lng;
    this.props.update({ name, vicinity, latitude, longitude });
  };

  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this._handlePress}>
        <Text>{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: 360,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
