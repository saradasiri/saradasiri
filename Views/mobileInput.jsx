import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { getfontSize, getHeight, getWidth } from "../src/Dimentions/DImentions";
// import PhoneInput from "react-native-phone-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryCodePicker from "../src/countryCodePicker";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../globalStyles";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const MobileInput = (props) => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState(+91);
  const [state, setState] = useState({
    contact: "",
  });
  const [phoneError, setPhoneError] = useState("");

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const onChangeTextValue = (key, value) => {
    setState({ ...state, [key]: value });
    key === "contact" && value.length === 10 ? Keyboard.dismiss() : null;
  };

  const submit = () => {
    // const isValid = phoneInput.current.isValidNumber();
    // if (!isValid) {
    //   console.log("state.contact");
    //   console.log(state.contact.length);
    //   setPhoneError("*please enter a valid mobile number.");
    // } else {
    //   setPhoneError("");
    //   props.navigation.navigate("verifyMobileOtp", {
    //     contactNumber: state.contact,
    //     countryCode: countryCode,
    //   });
    // }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={globalStyles.flex_1}
      style={{ backgroundColor: "#fff" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Progress.Bar
              progress={0.15}
              width={80}
              color={"#8D00FF"}
              borderColor={"#c5dafb"}
              backgroundColor={"#d2e2fb"}
            />
          </View>
          <View style={styles.beginContainer}>
            <Text
              style={[
                globalStyles.BeginText,
                { marginBottom: getHeight(50), color: "#2D0052" },
              ]}
            >
              {"Iniciemos tu" + "\n" + "registro vadi"}
            </Text>
          </View>
          <CountryCodePicker
            layout={"first"}
            OnChangeCountryCode={(country) =>
              setCountryCode(country.callingCode[0])
            }
            // Value={val => state.contact(val)}
            contact={state.contact}
            onChangeTextValue={(val) => onChangeTextValue("contact", val)}
          />
          <Text>{phoneError}</Text>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate("verifyMobileOtp")}
          >
            <Text
              style={[
                globalStyles.Text_1,
                { fontFamily: "NunitoSans_400Regular" },
              ]}
            >
              Enviar código
            </Text>
          </TouchableOpacity>
          <View style={[globalStyles.flex_2, { marginTop: getHeight(20) }]}>
            <TouchableOpacity>
              <Text
                style={[
                  globalStyles.Text_3,
                  { fontFamily: "NunitoSans_400Regular" },
                ]}
              >
                ¿Ya tienes una cuenta?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  globalStyles.Text_2,
                  { fontFamily: "NunitoSans_400Regular", color: "#2D0052" },
                ]}
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text
              style={[
                globalStyles.Text_Private_1,
                {
                  fontFamily: "NunitoSans_400Regular",
                },
              ]}
            >
              Al crear mi registro acepto el{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  globalStyles.Text_Private,
                  {
                    fontFamily: "NunitoSans_400Regular",
                  },
                ]}
              >
                {"Aviso  de privacidad"}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                globalStyles.Text_Private_1,
                {
                  fontFamily: "NunitoSans_400Regular",
                },
              ]}
            >
              {" "}
              y la{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  globalStyles.Text_Private.color,
                  {
                    fontFamily: "NunitoSans_400Regular",
                    color: "#2D0052",
                  },
                ]}
              >
                Jurisdicción Aplicable
              </Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.Logo} source={require("../assets/vlogo.png")} />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default MobileInput;

const styles = StyleSheet.create({
  beginContainer: {
    marginTop: getHeight(20),
  },
  container: {
    marginTop: getHeight(90),
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: getHeight(50),
    marginBottom: 10,
    justifyContent: "center",
    width: "85%",
    left: getWidth(45),
    alignItems: "center",
  },
  signIn: {
    height: 50,
    width: 312,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "#2D0052",
    marginTop: getHeight(15),
  },
  Logo: {
    height: 37,
    width: 136,
    marginTop: getHeight(80),
    alignSelf: "center",
  },
});
