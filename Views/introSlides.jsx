import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
// import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getHeight } from "../src/Dimentions/DImentions";

const slides = [
  {
    key: "one",
    title: "El marketplace de activos digitales",
    text: "Vadi es unmarketplace donde se unen las startups y pymes latinoamericanas con inversores de todo el mundo",
    // image: require("../assets/vlogo.png"),
    backgroundColor: "#270041",
  },
  {
    key: "two",
    title: "Participacion acionaria",
    text: "Una infraestructura segura y accesible para emitir, almacenar y operar activos digitales em proyectos de bloackchain",
    // image: require("../assets/rocket.png"),
    backgroundColor: "#270041",
  },
  {
    key: "three",
    title: "Capital para emprender",
    text: "Con Vadi puedes lanzar un activo digital para reunir el capital privado necesario para desarrollar tu proyecto",
    image: require("../assets/cupVadi1.png"),
    backgroundColor: "#270041",
  },
];

const IntroSlides = () => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      // <ImageBackground
      //   style={{ flex: 1, alignSelf: "stretch", width: null }}
      //   source={require("../assets/rect.png")}
      //
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            alignSelf: "center",
            height: hp("30%"),
            width: wp("70%"),
            marginTop: hp("4%"),
          }}
        />
        <View style={{ marginBottom: hp("0.9%"), padding: 10 }}>
          {item.title && <Text style={styles.title}>{item.title}</Text>}
          {item.text && <Text style={styles.text}>{item.text}</Text>}
        </View>
      </View>
      // </ImageBackground>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.skipped}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Next
        </Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#8D00FF",
          height: hp("8%"),
          width: wp("90%"),
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          borderRadius: 8,
          alignSelf: "center",
          marginTop: getHeight(-100),
          left: wp("1%"),
        }}
        onPress={() => navigation.navigate("mobileotp")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "NunitoSans_400Regular",
            alignSelf: "center",
          }}
        >
          Crear mi cuenta
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.skipped}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Skip
        </Text>
      </View>
    );
  };
  return (
    <>
      <StatusBar style="auto" />
      <AppIntroSlider
        dotStyle={{
          backgroundColor: "#bababa",
          top: -13,
          width: 8,
          height: 8,
        }}
        activeDotStyle={{
          backgroundColor: "#8D00FF",
          top: -13,
          width: 8,
          height: 8,
        }}
        data={slides}
        renderItem={renderItem}
        renderDoneButton={_renderDoneButton}
        renderSkipButton={_renderSkipButton}
        renderNextButton={_renderNextButton}
        showSkipButton="true"
        contentContainerStyle={{
          resizeMode: "contain",
        }}
      />
    </>
  );
};

export default IntroSlides;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    paddingHorizontal: 20,
    fontSize: hp("2.5%"),
    textAlign: "center",
    top: 30,
    lineHeight: 30,
    fontFamily: "NunitoSans_400Regular",
  },
  title: {
    fontSize: hp("5%"),
    color: "white",
    padding: 15,
    top: 30,
    lineHeight: 46,
    textAlign: "center",
    paddingTop: 20,
    fontFamily: "NunitoSans_400Regular",
  },
  skipped: {
    height: 30,
    width: 70,
  },
});
