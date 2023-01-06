import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import KeyPad from "../../src/keyPad";
import { Picker } from "@react-native-picker/picker";

const StackExchange = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState("");
  const [cyptoType, setCyptoType] = useState("");
  const pickerRef = useRef();

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
            Stack Exchange
          </Text>
          <Text></Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "NunitoSans_400Regular",
            color: "#2D0052",
            fontSize: 16,
            marginTop: 50,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Est. APR 5.86%
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "NunitoSans_400Regular",
            color: "#8D00FF",
            fontSize: 16,
            marginBottom: 50,
            fontWeight: "bold",
          }}
        >
          Est. Reward 1.21%
        </Text>
        <View style={{ marginTop: 30 }}>
          <View
            style={[
              globalStyles.inputStyle,
              {
                borderColor: "#ECECEC",
                flexDirection: "row",
                paddingLeft: 0,
                width: 322,
              },
            ]}
          >
            <View style={{ width: "25%", justifyContent: "center" }}>
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignSelf: "center",
                  // color: "#8D00FF",
                  fontSize: 18,
                }}
              >
                SOL
              </Text>
              {/* <Image
                style={{ width: 35, height: 35, alignSelf: "center" }}
                source={require("../../assets/Bitcoin.png")}
              /> */}
            </View>
            {/* <Picker
              ref={pickerRef}
              selectedValue={cyptoType}
              onValueChange={(e) => {
                setCyptoType(e);
              }}
              //   onBlur={formik.handleBlur("fromCryptoType")}
              value={cyptoType}
              style={{
                width: "35%",
                height: 50,
                fontSize: 12,
                alignSelf: "center",
              }}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="BTC" value="BTC" />
              <Picker.Item label="ETH" value="ETH" />
              <Picker.Item label="MXN" value="MXN" />
            </Picker> */}
            <Text
              style={{
                color: "#737373",
                opacity: 0.5,
                alignSelf: "center",
              }}
            >
              |
            </Text>
            <TouchableOpacity
              style={{
                width: "55%",
                height: 48,
                justifyContent: "center",
                //   backgroundColor: toggle === "1" ? "#ECECEC" : "white",
                borderColor: "#ECECEC",
              }}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 18,
                  color: pin ? "black" : "#737373",
                  opacity: pin ? 1 : 0.5,
                }}
              >
                {pin ? pin : "1 - 500000"}
              </Text>
            </TouchableOpacity>
            <View
              style={{ justifyContent: "center", marginTop: 2, width: "20%" }}
            >
              <Image
                style={{ width: 25, height: 25, alignSelf: "center" }}
                source={require("../../assets/swap.png")}
              />
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#737373",
                  fontSize: 12,
                }}
              >
                Flexibility
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View>
            <Text style={[globalStyles.text, { fontSize: 14 }]}>
              Available Balance : 7.291
            </Text>
            <Text style={[globalStyles.text, { fontSize: 14, marginTop: -5 }]}>
              Price: 7.29139286
            </Text>
          </View>
          <Text
            style={{
              width: "15%",
              textAlign: "center",
              alignSelf: "center",
              color: "#8D00FF",
              fontSize: 20,
            }}
          >
            MXN
          </Text>
        </View>
        <KeyPad pin={pin} setPin={setPin} />
        <TouchableOpacity
          style={[globalStyles.button, { marginBottom: 80 }]}
          //   disabled={pin.length != 4}
          onPress={() => {
            navigation.navigate("refferal");
          }}
        >
          <Text style={globalStyles.buttonText}>Sell Coin</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default StackExchange;

const styles = StyleSheet.create({});
