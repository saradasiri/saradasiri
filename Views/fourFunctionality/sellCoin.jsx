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

const SellCoin = () => {
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
            Sell Coin
          </Text>
          <Text></Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            style={{
              width: 35,
              height: 35,
              alignSelf: "center",
              marginRight: 10,
            }}
            source={require("../../assets/Bitcoin.png")}
          />
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
            BUSD = Mex $20.00
          </Text>
        </View>
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
            <View style={{ width: "15%", justifyContent: "center" }}>
              <Image
                style={{ width: 35, height: 35, alignSelf: "center" }}
                source={require("../../assets/Bitcoin.png")}
              />
            </View>
            <Picker
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
            </Picker>
            <TouchableOpacity
              style={{
                width: "35%",
                height: 48,
                justifyContent: "center",
                //   backgroundColor: toggle === "1" ? "#ECECEC" : "white",
                borderColor: "#ECECEC",
              }}
            >
              <Text style={{ paddingLeft: 10 }}>{pin}</Text>
            </TouchableOpacity>
            <View
              style={{ justifyContent: "center", marginLeft: 8, marginTop: 2 }}
            >
              <Image
                style={{ width: 25, height: 25, alignSelf: "center" }}
                source={require("../../assets/swap.png")}
              />
              <Text
                style={{
                  //   width: "15%",
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#8D00FF",
                }}
              >
                MXN
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
          <Text style={[globalStyles.text, { fontSize: 14 }]}>
            Available Balance : 7.291
          </Text>
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
          style={[
            globalStyles.button,
            { marginBottom:80 },
          ]}
          //   disabled={pin.length != 4}
          onPress={() => {
            navigation.navigate("stackexchange");
          }}
        >
          <Text style={globalStyles.buttonText}>Sell Coin</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SellCoin;

const styles = StyleSheet.create({});
