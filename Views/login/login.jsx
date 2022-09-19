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
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const setUserEmail = async (value) => {
    try {
      await AsyncStorage.setItem("@userEmail", value);
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
          setUserEmail(values.email);
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
        <View>
          <StatusBar style="auto" />
          <Toast position="top" topOffset={-10} />
         
          <Text style={styles.Label}>¡Hola de nuevo!</Text>

          <View style={{ paddingTop: 70 }}>
            <Text
              style={[
                styles.text,
                // { color: errors.email && touched.email ? "red" : "#33B7B0" },
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
                      errors.email && touched.email ? "red" : "#808080",
                  },
                ]}
              />
            </View>
            {errors.email && touched.email && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "NunitoSans_400Regular",
                  textAlign: "left",
                }}
              >
                {errors.email}
              </Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  // color:
                    // errors.password && touched.password ? "red" : "#808080",
                },
              ]}
            >
              Contraseña
            </Text>
            <View>
              <TextInput
                name="password"
                secureTextEntry={true}
                placeholder="*****************"
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={values.password}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.password && touched.password ? "red" : "#808080",
                  },
                ]}
              />
            </View>
            {errors.password && touched.password && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "NunitoSans_400Regular",
                  textAlign: "left",
                }}
              >
                {errors.password}
              </Text>
            )}
          </View>

          <View style={styles.signup}>
            <Text style={{ fontFamily: "NunitoSans_400Regular" }}>
            ¿Olvidaste tu contraseña?
            </Text>
            <TouchableOpacity
              style={{ paddingLeft: 5 }}
              // onPress={() => navigation.navigate("register")}
            >
              <Text
                style={{
                  fontFamily: "NunitoSans_400Regular",
                  color: "#2E2E2E",
                  textDecorationLine:'underline',
                  fontWeight:'bold'                  
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
              { opacity: formik.isValid && formik.dirty ? 1 : 0.5 },
            ]}
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                handleSubmit();
              }}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.Logo}
            source={require("../../assets/vlogo.png")}
          />

        </View>
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
  Logo: {
    height: 50,
    width: 180,
    marginTop:50,
    alignSelf:'center',
  },
  Label: {
    marginTop: 50,
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 27,
    marginBottom:-20,
    zIndex:-1
  },
  text: {
    fontSize:18,
    marginBottom:8,
    fontFamily: "NunitoSans_400Regular",
    color: '#737373',
  },
  inputStyle: {
    height: 50,
    width:322,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 30,
  },
  button:{
    marginTop:40,
    height: 50,
    width:322,
    borderRadius: 5,
    backgroundColor: "#00BFFF",
  },
  resetPassword: {
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: -14,
    color: "#7A869A",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "black",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
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
