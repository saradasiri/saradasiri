import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const accountLevel = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />

          <Text style={styles.Label1}>Define Account Level</Text>
          <Text style={[styles.Label2, { marginTop: 30 }]}>
            How much do you want to invest?
          </Text>
          <Text style={styles.Label2}>
            Define Your Monthly payment limit to your Account
          </Text>

          <View style={{ marginTop: 60 }}>
            <TouchableOpacity
              style={[styles.button]}
              // onPress={() => {
              //   handleFormSubmit("$0 - $9,999");
              // }}
            >
              <Text style={styles.buttonText}>$0 - $9,999 MXN</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.button]}
              // onPress={() => {
              //   handleFormSubmit("$10,000 - $59,999");
              // }}
            >
              <Text style={styles.buttonText}>From $10,000 - $59,999 MXN</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.button]}
              // onPress={() => {
              //   handleFormSubmit("$60,000 - $1,20,000");
              // }}
            >
              <Text style={styles.buttonText}>
                {" "}
                From $60,000 - $1,20,000 MXN
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => navigation.navigate("completeProfile1")}
              // onPress={() => {
              //   navigation.navigate("funding", { email: email.route.params.email});
              //   // handleFormSubmit("unlimited");
              // }}
            >
              <Text style={styles.buttonText}>Skip for Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default accountLevel;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#00BFFF",
  },
  Label1: {
    marginTop: 40,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  Label2: {
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
  },
  buttonText: {
    color: "black",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
});
