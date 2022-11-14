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
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import OTPTextView from "react-native-otp-textinput";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import axios from "axios";
import { API_PATHS } from "../../../src/constants/apiPaths";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


const VerifyOTP = () => {

  const fetchEmail = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("@userEmail");
      setEmail(userEmail);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchEmail();
  }, []);
  const [otpInput, setOtpInput] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
    const obj = {
      email: email,
      otp: Number(otpInput),
    };
    axios
      .post(API_PATHS.VALIDATE_OTP, obj)
      .then((res) => {
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
          if (res.data.message === "User Confirmed his/her Email") {
            navigation.navigate("registerSuccess");
          }
        }
      })
      .catch((err) => {
        if (err.message) {
          Toast.show({
            type: "info",
            text1: err.message,
          });
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Toast position="bottom" bottomOffset={20} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: -10,
            marginTop: 10,
          }}
        >
          <Progress.Bar
            progress={0.75}
            width={90}
            color={"#8D00FF"}
            borderColor={"#c5dafb"}
            backgroundColor={"#d2e2fb"}
          />
        </View>
        <Text style={styles.Label}>Confirma tu correo</Text>
        <Text
          style={[
            styles.Label,
            { fontSize: 20, marginTop: 20, color: "#2D0052" },
          ]}
        >
          Ingresa el código que enviamos a:
        </Text>
        <Text
          style={[
            styles.Label,
            {
              fontSize: 16,
              marginTop: 20,
              textAlign: "center",
              color: "#8D00FF",
            },
          ]}
        >
          {email ? email : "carmen@aureacode.com"}
        </Text>

        <View style={styles.container}>
          <OTPTextView
            handleTextChange={(text) => setOtpInput(text)}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCount={6}
            keyboardType="numeric"
          />
        </View>
        <Text
          style={[
            styles.Label,
            {
              fontSize: 15,
              textAlign: "center",
              marginTop: -10,
              color: "#2D0052",
            },
          ]}
        >
          No olvides revisar tu bandeja de no deseados
        </Text>

        <View style={{ marginTop: 150 }}>
          <TouchableOpacity
            style={[styles.button, { opacity: otpInput.length > 5 ? 1 : 0.5 }]}
            disabled={!(otpInput.length>5)}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
  },
  button: {
    marginTop: 45,
    height: 42,
    width: 312,
    borderRadius: 8,
    backgroundColor: "#8D00FF",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderBottomWidth: 1,
    fontFamily: "NunitoSans_400Regular",
    height: 50,
    width: 42,
  },
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default VerifyOTP;
