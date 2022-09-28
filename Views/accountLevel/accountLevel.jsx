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
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const AccountLevel = (email) => {
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (range) => {
    const limit = { lower: "", upper: "" };
    if (range === "$0 - $9,999") {
      limit.lower = 0;
      limit.upper = 9999;
    }
    if (range === "$10,000 - $59,999") {
      limit.lower = 10000;
      limit.upper = 59999;
    }
    if (range === "$60,000 - $1,20,000") {
      limit.lower = 60000;
      limit.upper = 120000;
    }
    const accountLevel = {
      lower: limit.lower,
      upper: limit.upper,
      range: range,
      // email: login1.route.params.email,
      // isTokenSubscribed: login1.route.params.isTokenSubscribed || "",
    };
    navigation.navigate("completeProfile1", { ...accountLevel });
  };

  const skipForNow = () => {
    const login = {
      // email: login1.route.params.email,
      // isTokenSubscribed: login1.route.params.isTokenSubscribed,
    };
    navigation.navigate("funding", login);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />

        <Text style={styles.Label}>Define Account Level</Text>
        <Text
          style={[
            styles.Label,
            { fontSize: 15, color: "#7A869A", marginTop: 20 },
          ]}
        >
          How much do you want to invest?
        </Text>

        <Text
          style={[
            styles.Label,
            { fontSize: 15, marginTop: 10, color: "#7A869A" },
          ]}
        >
          {" "}
          Define Your Monthly payment limit to your Account
        </Text>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.button, { opacity: 1 }]}
            // disabled={!otpInput}
            onPress={() => {
              handleFormSubmit("$0 - $9,999");
            }}
          >
            <Text style={styles.buttonText}>$0 - $9,999 MXN</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: 1 }]}
          // disabled={!otpInput}
          onPress={() => {
            handleFormSubmit("$10,000 - $59,999");
          }}
        >
          <Text style={styles.buttonText}>From $10,000 - $59,999 MXN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { opacity: 1 }]}
          // disabled={!otpInput}
          onPress={() => {
            handleFormSubmit("$60,000 - $1,20,000");
          }}
        >
          <Text style={styles.buttonText}>From $60,000 - $1,20,000 MXN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { opacity: 1 }]}
          // disabled={!otpInput}
          onPress={() => {
            skipForNow();
          }}
        >
          <Text style={styles.buttonText}>Skip for Now</Text>
        </TouchableOpacity>

        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
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
    textAlign: "center",
    marginTop: 30,
    fontWeight: "400",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#2D0052",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  Logo: {
    height: 50,
    width: 180,
    marginTop: 70,
    alignSelf: "center",
  },
});
export default AccountLevel;
