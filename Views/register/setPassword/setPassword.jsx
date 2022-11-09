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
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

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
    // alert("Password : " + values.password)
    navigation.navigate("verifyOTP");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: -10,
          }}
        >
          <Progress.Bar
            progress={0.5}
            width={90}
            color={"#8D00FF"}
            borderColor={"#c5dafb"}
            backgroundColor={"#d2e2fb"}
          />
        </View>
        <Text style={styles.Label}>Protege tu cuenta</Text>

        <View style={{ paddingTop: 20 }}>
          <Text  style={[
              styles.text,
              { color: errors.password && touched.password ? "red" : "#2D0052" },
            ]}
          >Elige una contraseña</Text>
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
          {errors.password === "se requiere contraseña" && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
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
            // disabled={!(formik.isValid && formik.dirty)}
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
  text: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    color: "#2D0052",
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
    borderColor: "rgba(18, 3, 58, 0.1)",
    alignSelf: "center",
  },
  button: {
    marginTop: 80,
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
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default SetPassword;
