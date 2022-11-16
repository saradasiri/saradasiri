import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import OTPTextView from "react-native-otp-textinput";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_PATHS } from "../../../src/constants/apiPaths";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../../../globalStyles";
import ProgressBar from "../../../src/progressBar";
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
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          if (res.data.message === "User Confirmed his/her Email") {
            navigation.navigate("registerSuccess");
          }
        }
      })
      .catch((err) => {
        if (err.message) {
          ToastAndroid.show(err.message, ToastAndroid.SHORT);
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <ProgressBar length={0.75} />
        <Text style={globalStyles.Label}>Confirma tu correo</Text>
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
            style={[
              globalStyles.button,
              { marginTop: 45, opacity: otpInput.length > 5 ? 1 : 0.5 },
            ]}
            disabled={!(otpInput.length > 5)}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={globalStyles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={globalStyles.Logo}
          source={require("../../../assets/vlogo.png")}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
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
});
export default VerifyOTP;
