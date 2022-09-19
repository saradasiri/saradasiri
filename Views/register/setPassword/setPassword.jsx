import {
  StyleSheet,
  Text,
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
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const SetPassword = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  const handleSubmit = () => {
    alert("Password : " + values.password)
    navigation.navigate("verifyOTP")
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />

          <Text style={styles.Label}>Protege tu cuenta</Text>

          <View style={{ paddingTop: 30 }}>
            <Text
              style={[
                styles.text,
                // { color: errors.password && touched.password ? "red" : "#33B7B0" },
              ]}
            >
              Correo electrónico
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
                    borderColor: "#808080",
                  },
                ]}
              />
            </View>
            {errors.password === "se requiere contraseña" && touched.password && (
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

          <Text
            style={{
              textAlign: "center",
              marginTop: 30,
              marginBottom: 20,
              fontWeight: "400",
              fontSize: 20,
            }}
          >
            Sigue esta guía:
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: values.password.length > 7 ? "green" : "red",
              fontSize: values.password.length > 7 ? 16 : 14,
            }}
          >
            Mínimo 8 caracteres
          </Text>
          <Text
            style={{
              textAlign: "center",
              color:
                values.password.replace(/[^A-Z]/g, "").length > 0
                  ? "green"
                  : "red",
              fontSize:
                values.password.replace(/[^A-Z]/g, "").length > 0 ? 16 : 14,
            }}
          >
            Una mayúscula
          </Text>
          <Text
            style={{
              textAlign: "center",
              color:
                values.password.replace(/[^a-z]/g, "").length > 0
                  ? "green"
                  : "red",
              fontSize:
                values.password.replace(/[^a-z]/g, "").length > 0 ? 16 : 14,
            }}
          >
            Una minúscula
          </Text>
          <Text
            style={{
              textAlign: "center",
              color:
                values.password.replace(/[^0-9]/g, "").length > 0
                  ? "green"
                  : "red",
              fontSize:
                values.password.replace(/[^0-9]/g, "").length > 0 ? 16 : 14,
            }}
          >
            Un número
          </Text>
          <Text
            style={{
              textAlign: "center",
              color:
                values.password.replace(/[^!@#$%^&*()\-_"=+{};:,<.>]/g, "")
                  .length > 0
                  ? "green"
                  : "red",
              fontSize:
                values.password.replace(/[^!@#$%^&*()\-_"=+{};:,<.>]/g, "")
                  .length > 0
                  ? 16
                  : 14,
            }}
          >
            Un símbolo
          </Text>

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
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          </View>
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
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    color: "#737373",
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
    marginTop: 40,
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#00BFFF",
  },
  buttonText: {
    color: "black",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  agreementText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  agreement: {
    marginTop: 25,
    flexDirection: "row",
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 5,
  },

  privacy: {
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    paddingLeft: 15,
  },
});
export default SetPassword;
