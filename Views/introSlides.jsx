import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
        <Image source={item.image} style={item.styles} />
        {item.title && <Text style={styles.title}>{item.title}</Text>}
        {item.text && <Text style={styles.text}>{item.text}</Text>}
      </SafeAreaView>
    );
  };
  const _renderNextButton = () => {
    return (
      <View>
        {/* <AntDesign
          name="rightcircle"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={() => navigation.navigate("mobileotp")}
        />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.skipped}>
        <Text
          style={{ color: "white", textAlign: "center", fontSize: 16 }}
          onPress={() => navigation.navigate("mobileotp")}
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
        }}
        activeDotStyle={{
          backgroundColor: "#8D00FF",
        }}
        data={slides}
        renderItem={renderItem}
        onDone ={() => navigation.navigate("mobileotp")}
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
    fontSize: 18,
    textAlign: "center",
    top:30,
    lineHeight: 35,
  },
  title: {
    fontSize: 36,
    color: "white",
    padding: 25,
    top: 30,
    lineHeight:46,
    textAlign: "center",
    paddingTop: 20,
  },
  skipped: {
    height: 30,
    width: 70,
    backgroundColor: "#483D8B",
    justifyContent: "center",
    borderRadius: 10,
    top: -630,
    left: 15,
  },
});
