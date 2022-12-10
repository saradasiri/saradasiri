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
import { useDispatch, useSelector } from "react-redux";
import { addRange, addLower, addUpper } from "../../src/redux/actions";
import globalStyles from "../../globalStyles";

const AccountLevel = () => {
  const dispatch = useDispatch();
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

    dispatch(addRange(range));
    dispatch(addLower(limit.lower));
    dispatch(addUpper(limit.upper));
    navigation.navigate("completeProfile1");
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />

        <Text style={[globalStyles.Label, { textAlign: "center" }]}>
          Define Account Level
        </Text>
        <Text
          style={[
            globalStyles.Label,
            {
              textAlign: "center",
              fontSize: 15,
              color: "#7A869A",
              marginTop: 20,
            },
          ]}
        >
          How much do you want to invest?
        </Text>

        <Text
          style={[
            globalStyles.Label,
            {
              textAlign: "center",
              fontSize: 15,
              marginTop: 10,
              color: "#7A869A",
            },
          ]}
        >
          Define Your Monthly payment limit to your Account
        </Text>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={[globalStyles.button, { marginTop: 30 }]}
            onPress={() => {
              handleFormSubmit("$0 - $9,999");
            }}
          >
            <Text style={globalStyles.buttonText}>$0 - $9,999 MXN</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 30 }]}
          onPress={() => {
            handleFormSubmit("$10,000 - $59,999");
          }}
        >
          <Text style={globalStyles.buttonText}>
            From $10,000 - $59,999 MXN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 30 }]}
          onPress={() => {
            handleFormSubmit("$60,000 - $1,20,000");
          }}
        >
          <Text style={globalStyles.buttonText}>
            From $60,000 - $1,20,000 MXN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 30 }]}
          onPress={() => {
            navigation.navigate("walletHome");
          }}
        >
          <Text style={globalStyles.buttonText}>Skip for Now</Text>
        </TouchableOpacity>

        <Image
          style={[globalStyles.Logo, { marginTop: 115 }]}
          source={require("../../assets/vlogo.png")}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
export default AccountLevel;
