import { GoogleAutoComplete } from "react-native-google-autocomplete";
import React from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import LocationItem from "./LocationItem";

export default class LocationAutoComplete extends React.Component {
  state = {
    name: "",
    vicinity: "",
    latitude: "",
    longitude: ""
  };

  update = nextState => {
    this.setState(nextState);
  };
  //https://developers.google.com/places/web-service/autocomplete#place_types
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{this.state.name}</Text>
          <Text style={styles.text}>{this.state.vicinity}</Text>
          <Text style={styles.text}>{this.state.latitude}</Text>
          <Text style={styles.text}>{this.state.longitude}</Text>
        </View>
        <GoogleAutoComplete
          apiKey="<API_KEY>"
          debounce={300}
          language={"sv"}
          components="country:se"
          minLength={5}
          queryTypes={this.props.lookFor}
        >
          {({
            handleTextChange,
            locationResults,
            fetchDetails,
            isSearching,
            inputValue,
            clearSearchs
          }) => (
            <React.Fragment>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  value={inputValue}
                  onChangeText={handleTextChange}
                  placeholder="Search..."
                />
              </View>

              <ScrollView>
                {locationResults.map((el, i) => (
                  <LocationItem
                    {...el}
                    fetchDetails={fetchDetails}
                    key={i}
                    update={this.update}
                    {...{ clearSearchs }}
                  />
                ))}
              </ScrollView>
            </React.Fragment>
          )}
        </GoogleAutoComplete>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 360,
    elevation: 1,
    paddingLeft: 5,
    backgroundColor: "white",
    borderColor: "white",

    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 }
  },
  text: { marginTop: 30, flexDirection: "row" },
  inputWrapper: {
    marginTop: 30,
    flexDirection: "row"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
