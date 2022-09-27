import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { getfontSize, getHeight, getWidth } from "../src/Dimentions/DImentions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import PincodeInput from "react-native-pincode-input";
import globalStyles from "../globalStyles";

const SetWalletPin = () => {
  const [pin, setPin] = useState();
  let myRef = useRef(null);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[globalStyles.flex_1, { paddingTop: 100 }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[
            globalStyles.BeginText,
            { fontFamily: "NunitoSans_400Regular", color: "#2D0052" },
          ]}
        >
          Escribe tu PIN
        </Text>
        <View style={{ paddingTop: 100 }}>
          <PincodeInput
            // ref={(pincodeInput) => setPin(pincodeInput)}
            length={4}
            containerStyle={{
              width: "100%",
              height: 200,
            }}
            circleContainerStyle={{
              paddingHorizontal: 32,
            }}
            circleEmptyStyle={{
              borderWidth: 1,
              borderColor: "#424242",
            }}
            circleFilledStyle={{
              backgroundColor: "#424242",
            }}
            pin={pin}
            onTextChange={setPin}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SetWalletPin;

const styles = StyleSheet.create({});
