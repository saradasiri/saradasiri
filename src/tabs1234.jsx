import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

const Tabs1234 = ({ range, value }) => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <View>
      {range === "$0 - $9,999" ? (
        <View style={styles.tab}>
          <View
            style={[
              styles.tab1,
              {
                marginLeft: 0,
                backgroundColor: value === "1" ? "#8D00FF" : "#D9D9D9",
              },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "1" ? "white" : "#9A9CA0" },
              ]}
            >
              1
            </Text>
          </View>

          <View
            style={[
              styles.tab1,
              { backgroundColor: value === "2" ? "#8D00FF" : "#D9D9D9" },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "2" ? "white" : "#9A9CA0" },
              ]}
            >
              2
            </Text>
          </View>

          <View
            style={[
              styles.tab1,
              { backgroundColor: value === "3" ? "#8D00FF" : "#D9D9D9" },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "3" ? "white" : "#9A9CA0" },
              ]}
            >
              3
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.tab}>
          <View
            style={[
              styles.tab1,
              {
                marginLeft: 0,
                backgroundColor: value === "1" ? "#8D00FF" : "#D9D9D9",
              },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "1" ? "white" : "#9A9CA0" },
              ]}
            >
              1
            </Text>
          </View>

          <View
            style={[
              styles.tab1,
              { backgroundColor: value === "2" ? "#8D00FF" : "#D9D9D9" },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "2" ? "white" : "#9A9CA0" },
              ]}
            >
              2
            </Text>
          </View>

          <View
            style={[
              styles.tab1,
              { backgroundColor: value === "3" ? "#8D00FF" : "#D9D9D9" },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "3" ? "white" : "#9A9CA0" },
              ]}
            >
              3
            </Text>
          </View>

          <View
            style={[
              styles.tab1,
              { backgroundColor: value === "4" ? "#8D00FF" : "#D9D9D9" },
            ]}
          >
            <Text
              style={[
                styles.font,
                { color: value === "4" ? "white" : "#9A9CA0" },
              ]}
            >
              4
            </Text>
          </View>
        </View>
      )}
      {range === "$0 - $9,999" ? (
        <View
          style={[
            styles.dottedline,
            { width: 120, left: value === "3" ? 110 : 90 },
          ]}
        ></View>
      ) : (
        <View style={[styles.dottedline,{left: value === "4" ? 60 : 50}]}></View>
      )}
    </View>
  );
};

export default Tabs1234;

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop:50,
  },
  tab1: {
    width: 35,
    height: 35,
    marginLeft: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dottedline: {
    borderColor: "#8D00FF",
    borderStyle: "dotted",
    borderWidth: 0.5,
    width: 210,
    zIndex: -1,
    // left: ((range === "$0 - $9,999" && value==="3") || (value==="4")) ? 49: 55,
    top: -17,
  },
  font: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    fontWeight: "bold",
    top: 2,
  },
});
