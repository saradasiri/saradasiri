import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

const PriceAlert = ({ customContainerStyle, title, content }) => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#8D00FF",
        marginHorizontal: 40,
        paddingVertical: 30,
        paddingHorizontal: 10,
        // backgroundColor :"#fff",
        ...customContainerStyle,
        ...styles.shadow,
        borderRadius: 20,
        justifyContent: "center",
      }}
    >
      {/* <Image source={require("../assets/bar-chart.png")}/> */}
      <View style={{ borderRadius: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
            marginTop: -10,
            marginBottom: 10,
            textAlign: "center",
            lineHeight: 28,
            fontFamily: "NunitoSans_400Regular",
            width: 200,
            alignSelf: "center",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            color: "#fff",
            lineHeight: 25,
            fontWeight: "500",
            fontFamily: "NunitoSans_400Regular",
            width: 270,
          }}
        >
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default PriceAlert;
