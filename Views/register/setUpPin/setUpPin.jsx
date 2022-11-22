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
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../../globalStyles";
import ProgressBar from "../../../src/progressBar";
const VerifyOTP = (email) => {
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
    navigation.navigate("accountLevel");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <ProgressBar length={1} />
        <Text style={globalStyles.Label}>Mayor seguridad</Text>
        <Text
          style={[
            globalStyles.Label,
            { fontSize: 20, marginTop: 20, color: "#2D0052" },
          ]}
        >
          Configura tu PIN móvil
        </Text>
        <Text
          style={[
            globalStyles.Label,
            { fontSize: 15, marginTop: 10, color: "#2D0052" },
          ]}
        >
          Este PIN móvil te permite acceder y confirmar operaciones en la app.
        </Text>

        <View style={{ marginTop: 250 }}>
          <TouchableOpacity
            style={[globalStyles.button, { marginTop: 55, opacity: 1 }]}
            // disabled={!otpInput}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={globalStyles.buttonText}>Configurar mi PIN</Text>
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

const styles = StyleSheet.create({});
export default VerifyOTP;
