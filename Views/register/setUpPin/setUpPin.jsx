import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const VerifyOTP = (email) => {
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
      navigation.navigate("login")
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />

          <Text style={styles.Label}>Mayor seguridad</Text>
          <Text
            style={[
              styles.Label,
              { fontSize: 20, marginTop: 20, color: "#2D0052" },
            ]}
          >
            Configura tu PIN móvil
          </Text>
          <Text
            style={[
              styles.Label,
              { fontSize: 15, marginTop: 10, color: "#2D0052" },
            ]}
          >
            Este PIN móvil te permite acceder y confirmar operaciones en la app.
          </Text>
        </View>

        <View style={{ marginTop: 250 }}>
          <TouchableOpacity
            style={[styles.button, { opacity: 1 }]}
            // disabled={!otpInput}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>Configurar mi PIN</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.Logo}
          source={require("../../../assets/vlogo.png")}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 30,color: "#2D0052"
  },
  button: {
    marginTop: 40,
    height: 42,
    width: 312,
    borderRadius: 8,
    backgroundColor: "#8D00FF",
    
  },
  buttonText: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default VerifyOTP;
