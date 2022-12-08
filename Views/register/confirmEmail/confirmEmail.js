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
import globalStyles from "../../../globalStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../../../src/progressBar";

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

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <ProgressBar length={0.25} />
        <Text style={globalStyles.Label}>Abre tu cuenta</Text>

        <View style={{ paddingTop: 30 }}>
          <Text
            style={[
              globalStyles.text,
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
              globalStyles.inputStyle,
              {
                borderColor:
                  errors.email && touched.email
                    ? "red"
                    : "rgba(18, 3, 58, 0.1)",
              },
            ]}
          />
          {errors.email && touched.email && (
            <Text style={globalStyles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text
            style={[
              globalStyles.text,
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
              globalStyles.inputStyle,
              {
                borderColor:
                  errors.confirmEmail && touched.confirmEmail
                    ? "red"
                    : "rgba(18, 3, 58, 0.1)",
              },
            ]}
          />
          {errors.confirmEmail && touched.confirmEmail && (
            <Text style={globalStyles.error}>{errors.confirmEmail}</Text>
          )}
        </View>

        <View style={styles.agreement}>
          <Checkbox
            style={globalStyles.checkbox}
            value={isPrivacyChecked}
            onValueChange={setChecked}
            color={isPrivacyChecked ? "#8D00FF" : undefined}
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
            style={globalStyles.checkbox}
            value={isAccepted}
            onValueChange={setIsAccepted}
            color={isAccepted ? "#8D00FF" : undefined}
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
              globalStyles.button,
              {
                marginTop: 45,
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
              navigation.navigate("setPassword", { email: values.email });
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
  agreementText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  agreement: {
    marginTop: 25,
    flexDirection: "row",
  },
  privacy: {
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    paddingLeft: 15,
  },
});
export default ConfirmEmail;
