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
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmail = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;
  const [isPrivacyChecked, setChecked] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
    // alert(
    //   "Email : " +
    //     values.email +
    //     "\nConfirm Email : " +
    //     values.confirmEmail +
    //     "\nIs Privacy Checked: " +
    //     isPrivacyChecked +
    //     "\nIs Accepted : " +
    //     isAccepted
    // );
    navigation.navigate("setPassword", { email : values.email});
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
            marginTop:10
          }}
        >
          <Progress.Bar
            progress={0.25}
            width={90}
            color={"#8D00FF"}
            borderColor={"#c5dafb"}
            backgroundColor={"#d2e2fb"}
          />
        </View>

        <Text style={styles.Label}>Abre tu cuenta</Text>

        <View style={{ paddingTop: 30 }}>
          <Text
            style={[
              styles.text,
              { color: errors.email && touched.email ? "red" : "#2D0052" },
            ]}
          >
            Correo electrónico
          </Text>
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
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text
            style={[
              styles.text,
              {
                color:
                  errors.confirmEmail && touched.confirmEmail
                    ? "red"
                    : "#2D0052",
              },
            ]}
          >
            Confirmar correo electrónico
          </Text>
          <TextInput
            name="confirmEmail"
            onChangeText={formik.handleChange("confirmEmail")}
            onBlur={formik.handleBlur("confirmEmail")}
            value={values.confirmEmail}
            style={[
              styles.inputStyle,
              {
                borderColor:
                  errors.confirmEmail && touched.confirmEmail
                    ? "red"
                    : "rgba(18, 3, 58, 0.1)",
              },
            ]}
          />
          {errors.confirmEmail && touched.confirmEmail && (
            <Text style={styles.error}>{errors.confirmEmail}</Text>
          )}
        </View>

        <View style={styles.agreement}>
          <Checkbox
            style={styles.checkbox}
            value={isPrivacyChecked}
            onValueChange={setChecked}
            color={isPrivacyChecked ? "#33B7B0" : undefined}
          />

          <View style={{ flexDirection: "column", marginTop: -5 }}>
            <View style={styles.privacy}>
              <Text style={{ color: "#2D0052" }}>Acepto el </Text>
              <TouchableOpacity>
                <Text style={[styles.agreementText, { color: "#2D0052" }]}>
                  Aviso de Privacidad
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "#2D0052" }}> y la </Text>
            </View>

            <View style={styles.privacy}>
              <TouchableOpacity>
                <Text style={[styles.agreementText, { color: "#2D0052" }]}>
                  Jurisdicción Aplicable
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.agreement}>
          <Checkbox
            style={styles.checkbox}
            value={isAccepted}
            onValueChange={setIsAccepted}
            color={isAccepted ? "#33B7B0" : undefined}
          />
          <View style={{ flexDirection: "column", top: -5, left: 15 }}>
            <Text style={{ color: "#2D0052" }}>
              Acepto que Vadi realice la consulta de mis
            </Text>
            <Text style={{ color: "#2D0052" }}>
              datos para corroborar mi información.
            </Text>
            <TouchableOpacity>
              <Text style={[styles.agreementText, { color: "#2D0052" }]}>
                ¿Mi información está segura?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                opacity:
                  formik.isValid &&
                  formik.dirty &&
                  isPrivacyChecked &&
                  isAccepted
                    ? 1
                    : 0.5,
              },
            ]}
            disabled={
              !(
                formik.isValid &&
                formik.dirty &&
                isPrivacyChecked &&
                isAccepted
              )
            }
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
  agreementText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  agreement: {
    marginTop: 25,
    flexDirection: "row",
  },
  checkbox: {
    borderColor: "rgba(18, 3, 58, 0.1)",
    opacity: 0.8,
    width: 30,
    height: 30,
    borderRadius: 5,
  },

  privacy: {
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    paddingLeft: 15,
  },
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default ConfirmEmail;
