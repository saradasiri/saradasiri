import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  KeyboardAwareScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyles from "../globalStyles";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#2D0052",
        }}
      >
        <Image
          style={{ marginLeft: -110, top: 20 }}
          source={require("../assets/vadihome.png")}
        />
        <View
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#8D00FF",
              width: 330,
              height: 50,
              top: -70,
              justifyContent: "center",
              textAlign: "center",
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate("registerLevel1")}
          >
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
              + Iniciar registro
            </Text>
          </TouchableOpacity>
                  <TouchableOpacity style={{ justifyContent: "center", top: -40 }}
                  onPress={() => navigation.navigate("introSlides")}>
            <Text
              style={{
                color: "#fff",
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    width: 60,
  },
});
