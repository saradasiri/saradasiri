import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

const JoinVadi = () => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <ImageBackground
      style={{
        flex: 1,
        alignSelf: "stretch",
        width: null,
        backgroundColor: "#270041",
      }}
      source={require("../assets/rect.png")}
    >
      <Image
        style={{
          height: 65,
          width: 240,
          marginTop: 100,
          alignSelf: "center",
        }}
        source={require("../assets/vlogo2.png")}
      />
      <Text
        style={{
          marginTop: 40,
          fontWeight: "400",
          fontSize: 24,
          fontFamily: "NunitoSans_400Regular",
          color: "white",
          textAlign: "center",
        }}
      >
        Nuevas oportunidades de inversión
      </Text>
      <Text
        style={{
          marginTop: 50,
          width: 280,
          color: "white",
          fontWeight: "400",
          fontSize: 24,
          fontFamily: "NunitoSans_400Regular",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        Te damos la bienvenida al marketplace más grande de Latinoamérica.
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 210,
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
          onPress={() => navigation.navigate("confirmEmail")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "NunitoSans_400Regular",
              }}
            >
              Unirme a Vadi
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignSelf:'center', marginTop:20 }}>
          <Text style={{ color:'white' }}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity
            // style={{ justifyContent: "center" }}
            onPress={() => navigation.navigate("login")}
          >
            <Text
              style={{
                color: "#8D00FF",
                alignSelf: "center",
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "NunitoSans_400Regular", 
                textDecorationLine: "underline",
              }}
            >
              Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default JoinVadi;

const styles = StyleSheet.create({});
