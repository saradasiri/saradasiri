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
// import AppLoading from "expo-app-loading";
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
    navigation.navigate("setPassword");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />

          <Text style={styles.Label}>Abre tu cuenta</Text>

          <View style={{ paddingTop: 30 }}>
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
                    borderColor: "#808080",
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

          <View style={{ paddingTop: 30 }}>
            <Text
              style={[
                styles.text,
                // { color: errors.email && touched.email ? "red" : "#33B7B0" },
              ]}
            >
              Confirmar correo electrónico
            </Text>
            <View>
              <TextInput
                name="confirmEmail"
                onChangeText={formik.handleChange("confirmEmail")}
                onBlur={formik.handleBlur("confirmEmail")}
                value={values.confirmEmail}
                style={[
                  styles.inputStyle,
                  {
                    borderColor: "#808080",
                  },
                ]}
              />
            </View>
            {errors.confirmEmail && touched.confirmEmail && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "NunitoSans_400Regular",
                  textAlign: "left",
                }}
              >
                {errors.confirmEmail}
              </Text>
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
                <Text>Acepto el </Text>
                <TouchableOpacity
                // onPress={termsDocModal}
                >
                  <Text style={[styles.agreementText, { color: "#000000" }]}>
                    Aviso de Privacidad
                  </Text>
                </TouchableOpacity>
                <Text> y la </Text>
              </View>

              <View style={styles.privacy}>
                <TouchableOpacity
                // onPress={termsDocModal}
                >
                  <Text style={[styles.agreementText, { color: "#000000" }]}>
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
              color={isPrivacyChecked ? "#33B7B0" : undefined}
            />
            <View style={{ flexDirection: "column", top: -5, left: 15 }}>
              <Text>Acepto que Vadi realice la consulta de mis</Text>
              <Text>datos para corroborar mi información.</Text>
              <TouchableOpacity>
                <Text style={[styles.agreementText, { color: "#000000" }]}>
                ¿Mi información está segura?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
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
              // disabled={
              //   !(
              //     formik.isValid &&
              //     formik.dirty &&
              //     isPrivacyChecked &&
              //     isAccepted
              //   )
              // }
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
export default ConfirmEmail;
