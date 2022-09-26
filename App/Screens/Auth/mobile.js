import React, { useState } from "react";
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
import { getfontSize, getHeight, getWidth } from "../../Dimentions/DImentions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryCodePicker from "../../Components/CountryCodePicker";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";
import * as Progress from "react-native-progress";

const Mobile = (props) => {
  const [countryCode, setCountryCode] = useState(+91);
  const [state, setState] = useState({
    contact: "",
    countryCode: countryCode,
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
    if (state.contact === "" || state.contact.length < 10) {
      console.log("state.contact");
      console.log(state.contact.length);
      setPhoneError("*please enter a valid mobile number.");
    } else if (state.contact.length === 10) {
      setPhoneError("");
      props.navigation.navigate("Verify", {
        contactNumber: state.contact,
        countryCode: countryCode,
      });
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.flex_1}>
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
              style={[globalStyles.BeginText, { marginBottom: getHeight(50) }]}
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
            onChangeTextValue={(val) => onChangeTextValue("contact", val)}
          />
          <Text>{phoneError}</Text>
          <TouchableOpacity style={styles.signIn} onPress={() => submit()}>
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
                  { fontFamily: "NunitoSans_400Regular" },
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
                  globalStyles.Text_Private,
                  {
                    fontFamily: "NunitoSans_400Regular",
                  },
                ]}
              >
                Jurisdicción Aplicable
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.Logo}
            source={require("../../AssetsVadi/assets/vlogo.png")}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Mobile;

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
    height: getHeight(85),
    width: "80%",
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
    height: getHeight(70),
    width: getWidth(500),
    marginTop: getHeight(80),
    alignSelf: "center",
  },
});
