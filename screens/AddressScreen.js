import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import LocationAutoComplete from "../components/LocationAutoComplete";

export default class AddressScreen extends React.Component {
  static navigationOptions = {
    title: "Search for an address"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container}>
        <LocationAutoComplete searchFor={"address"} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
