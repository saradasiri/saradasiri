import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";

const slides = [
  {
    key: "one",
    image: require("../assets/vlogo.png"),
    backgroundColor: "#270041",
    styles: {
      width: 330,
      height :90
    }
  },
  {
    key: "two",
    title: "El marketplace de activos digitales",
    text: "Vadi es unmarketplace donde se unen las startups y pymes latinoamericanas con inversores de todo el mundo",
    image: require("../assets/vlogo.png"),
    backgroundColor: "#270041",
  },
  {
    key: "three",
    title: "Participacion acionaria",
    text: "Una infraestructura segura y accesible para emitir, almacenar y operar activos digitales em proyectos de bloackchain",
    image: require("../assets/rocket.png"),
    backgroundColor: "#270041",
  },
  {
    key: "four",
    title: "Capital para emprender",
    text:"Con Vadi puedes lanzar un activo digital para reunir el capital privado necesario para desarrollar tu proyecto",
    image: require("../assets/rocket.png"),
    backgroundColor: "#270041",
  },
];

const IntroSlides = () => {
  const [showApp, setShowApp] = useState();

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          flex: 1,
          backgroundColor: `${item.backgroundColor}`,
        }}
      >
        <Image source={item.image} style={item.styles}/>
        {item.title && <Text style={styles.title}>{item.title}</Text>}
        {item.text && <Text style={styles.text}>{item.text}</Text>}
      </SafeAreaView>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="rightcircle"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      showSkipButton="true"
      contentContainerStyle={{
        resizeMode: "contain",
      }}
    />
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
    paddingHorizontal: 30,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 35,
  },
  title: {
    fontSize: 40,
    color: "white",
    padding: 25,
    textAlign: "center",
    paddingTop:20    
  },
});
