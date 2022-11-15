import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import CookieManager from '@react-native-cookies/cookies';
const Login = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const resendOTP = () => {
    axios
      .get(API_PATHS.RESEND_OTP + values.email)
      .then((res) => {
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
          if (res.data.message === "mail sent") {
            navigation.navigate("verifyOTP");
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

  const setUserEmail = async (isVerified) => {
    try {
      await AsyncStorage.setItem("@userEmail", values.email);
      isVerified === false ? resendOTP() : navigation.navigate("walletHome");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    const obj = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(API_PATHS.LOGIN, obj)
      .then((res) => {
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        if (res.data.message === "Login Success") {
          setUserEmail(res.data.isVerified);
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
        <Toast position="bottom" bottomOffset={-10} />

        <Text style={styles.Label}>¡Hola de nuevo!</Text>
        <View style={{ paddingTop: 20 }}>
          <Text
            style={[
              styles.text,
              { color: errors.email && touched.email ? "red" : "#2D0052" },
            ]}
          >
            Correo electrónico
          </Text>
          <View>
            <TextInput
              name="email"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={values.email}
              style={[
                styles.inputStyle,
                {
                  borderColor:
                    errors.email && touched.email
                      ? "red"
                      : "rgba(18, 3, 58, 0.1)",
                },
              ]}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              styles.text,
              {
                color: errors.password && touched.password ? "red" : "#2D0052",
              },
            ]}
          >
            Contraseña
          </Text>
          <View>
            <TextInput
              name="password"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={values.password}
              style={[
                styles.inputStyle,
                {
                  borderColor:
                    errors.password && touched.password
                      ? "red"
                      : "rgba(18, 3, 58, 0.1)",
                },
              ]}
            />
          </View>
          <View></View>
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
        </View>

        <View style={styles.signup}>
          <Text
            style={{ fontFamily: "NunitoSans_400Regular", color: "#2D0052" }}
          >
            ¿Olvidaste tu contraseña?
          </Text>
          <TouchableOpacity
            style={{ paddingLeft: 5 }}
            // onPress={() => navigation.navigate("register")}
          >
            <Text
              style={{
                fontFamily: "NunitoSans_400Regular",
                color: "#2D0052",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              Recuperar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={[
              styles.button,
              // { opacity: formik.isValid && formik.dirty ? 1 : 0.5 },
            ]}
            // disabled={!(formik.isValid && formik.dirty)}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
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
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
    color: "#2D0052",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: "NunitoSans_400Regular",
    color: "#737373",
    fontWeight: "500",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  inputStyle: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 30,
  },
  button: {
    marginTop: 103,
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
  resetPassword: {
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: -14,
    color: "#7A869A",
    alignSelf: "flex-end",
  },
  signup: {
    marginTop: 15,
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    alignSelf: "center",
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
  },
});
export default Login;
