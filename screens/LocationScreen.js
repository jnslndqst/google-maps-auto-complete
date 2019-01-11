import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import LocationAutoComplete from "../components/LocationAutoComplete";
export default class LocationScreen extends React.Component {
  static navigationOptions = {
    title: "Search for a place"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <LocationAutoComplete lookFor={"establishment"} />
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
