import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import KeyPad from "../../src/keyPad";

const AddFund = () => {
    const navigation = useNavigation();
  const [pin, setPin] = useState("");

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const merge = async (value) => {
    setPin(pin.concat(value.toString()));
  };

  const handleSubmit = () => {
    alert("Your Pin : " + pin);
    // navigation.navigate("");
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              paddingTop: 20,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: "white",
                // margintop: 30,
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderColor: "#ECECEC",
                  borderRadius: 1,
                  borderWidth: 1,
                  borderRadius: 10,
                }}
                source={require("../../assets/leftArrow.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                // fontWeight: "bold",
                color: "#8D00FF",
                marginLeft: -25,
              }}
            >
              Add Fund
            </Text>
            <Text></Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "NunitoSans_400Regular",
              color: "#2D0052",
              fontSize: 16,
              marginVertical: 50,
              fontWeight: "bold",
            }}
          >
            Add fund value in the below input box
          </Text>
          <Text
            style={[
              globalStyles.inputStyle,
              {
                borderColor: "rgba(18, 3, 58, 0.1)",
                textAlign: "center",
                fontSize: 18,
                fontFamily: "NunitoSans_400Regular",
                color: "#2D0052",
                paddingVertical: 12,
              },
            ]}
          >
            {pin}
          </Text>
          <Text style={[globalStyles.text, { marginLeft: 20, fontSize: 14 }]}>
            Available Balance : 7.291
          </Text>
          <KeyPad pin={pin} setPin={setPin}/>
          <TouchableOpacity
            style={[
              globalStyles.button,
              { flexDirection: "row", justifyContent: "center" },
            ]}
            //   disabled={pin.length != 4}
            onPress={() => {navigation.navigate('paymentGateway')}}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../assets/paypal.png")}
            />
            <Text style={globalStyles.buttonText}> Pay with paypal</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
  );
};

export default AddFund;

const styles = StyleSheet.create({});
