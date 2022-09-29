import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

const HomePage = () => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <ImageBackground
      style={{ flex: 1, alignSelf: "stretch", width: null }}
      source={require("../assets/home.png")}
    >
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          top: 600,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#8D00FF",
            width: 312,
            height: 50,
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 8,
          }}
          onPress={() => navigation.navigate("introSlides")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>+ </Text>
            <Text style={{ color: "#fff", fontSize: 16, top: 11,fontFamily: "NunitoSans_400Regular" }}>
              Iniciar registro
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 20,
              fontFamily: "NunitoSans_400Regular"
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
