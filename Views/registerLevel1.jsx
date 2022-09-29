import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { getfontSize, getHeight, getWidth } from "../src/Dimentions/DImentions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../globalStyles";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { API_PATHS } from "../src/constants/apiPaths";
import axios from "axios";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const RegisterLevel1 = (formik) => {
  const { values, touched, errors } = formik
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  // const pressSubmitAction = () => {
  //   props.navigation.navigate("SetUpPin");
  
  const RegisterLevel1 = (props) => {
    const formik = { user: "", password: "" };

    const loginValidationSchema = yup.object().shape({
      user: yup
        .string()
        // .user("Email inválido")
        .required("correo electronico es requerido"),
      password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "La contraseña debe tener una letra minúscula")
        .matches(/\w*[A-Z]\w*/, "La contraseña debe tener una letra mayúscula")
        .matches(/\d/, "La contraseña debe tener un número")
        .matches(
          /[!@#$%^&*()\-_"=+{};:,<.>]/,
          "La contraseña debe tener un carácter especial"
        )
        .min(8, ({ min }) => `La contraseña debe tener al menos 8 caracteres`)
        .required("se requiere contraseña"),
    });

    const toastConfig = {
      success: (props) => (
        <BaseToast
          {...props}
          style={{ borderLeftColor: "pink", top: -30, zIndex: 2, width: 320 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 18,
            fontWeight: "400",
            fontFamily: "NunitoSans_400Regular",
          }}
        />
      ),
      // error: (props) => (
      //   <ErrorToast
      //     {...props}
      //     text1Style={{
      //       fontSize: 17
      //     }}
      //     text2Style={{
      //       fontSize: 15
      //     }}
      //   />
      // ),
      // tomatoToast: ({ text1, props }) => (
      //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      //     <Text>{text1}</Text>
      //     <Text>{props.uuid}</Text>
      //   </View>
      // )
    };

    const pressSubmitAction = (values) => {
      const obj = {
        email: values.user,
        password: values.password,
      };
      axios
        .post(API_PATHS.LOGIN, obj)
        .then((res) => {
          if (res.data.message) {
            Toast.show({
              type: "success",
              text1: res.data.message,
            });
            res.data.message === "Login Success"
              ? props.navigation.navigate("SetUpPin")
              : null;
          }
        })
        .catch((err) => {
          if (err.message) {
            Toast.show({
              type: "success",
              text1: err.message,
            });
          }
        });

      //
    };


    let [fontsLoad, error] = useFonts({
      NunitoSans_400Regular,
    });

    if (!fontsLoad) {
      return null;
    }
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={[globalStyles.flex_1, { paddingTop: 100 }]}
        style={{ backgroundColor: "#fff" }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Toast config={toastConfig} />
          <Text
            style={[
              globalStyles.BeginText,
              {
                fontFamily: "NunitoSans_400Regular",
                color: "#2D0052",
                zIndex: -2,
              },
            ]}
          >
            ¡Hola de nuevo!
          </Text>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ user: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <Text
                  style={[
                    globalStyles.Text_Private_1,
                    {
                      fontFamily: "NunitoSans_400Regular",
                      textAlign: "center",
                      marginTop: getHeight(35),
                      color: "#686873",
                    },
                  ]}
                >
                  Inicia sesión
                </Text>

                <View style={styles.container}>
                  <View style={globalStyles.PhoneInput}>
                    <TextInput
                      style={globalStyles.inputText}
                      placeholder="Usuario"
                      onChangeText={handleChange("user")}
                      onBlur={handleBlur("user")}
                      value={values.user}
                      isInvalid={touched.user && errors.user}
                    />
                  </View>
                  {touched.user && errors.user && (
                    <Text style={{ fontSize: 14, color: "red", paddingLeft: 20 }}>
                      {errors.user}
                    </Text>
                  )}

                  <View
                    style={[
                      globalStyles.PhoneInput,
                      { marginTop: getHeight(30) },
                    ]}
                  >
                    <TextInput
                      style={globalStyles.inputText}
                      placeholder="Contraseña"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      isInvalid={touched.password && errors.password}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={{ fontSize: 14, color: "red", paddingLeft: 20 }}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: getHeight(30),
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ color: "#2D0052" }}>
                      ¿Olvidaste tu contraseña?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => pressSubmitAction(values)}>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ImageBackground
                        source={require("../assets/BG.png")}
                        style={{ height: 50, width: 50 }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                          }}
                        >
                          <Image
                            source={require("../assets/RightIcon.png")}
                            style={{
                              alignSelf: "center",
                              marginBottom: getHeight(20),
                            }}
                          />
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  };
}

export default RegisterLevel1;

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(60),
  },
})
