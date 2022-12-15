import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const KeypadButtons = (formik) => {
  const { values, errors, touched } = formik;
  const navigation = useNavigation();
  const pickerRef = useRef();
  const [toggle, setToggle] = useState("");
  function open() {
    pickerRef.current.focus();
  }
  const [toAmount, setToAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("");

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const merge = async (value) => {
    if (toggle === "1") {
      setFromAmount(fromAmount.concat(value.toString()));
    }
    if (toggle === "2") {
      setToAmount(toAmount.concat(value.toString()));
    }
  };

  const handleSubmit = () => {
    // navigation.navigate("");
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={[globalStyles.flex_1]}
        style={{ backgroundColor: "#fff" }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,

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
                fontWeight: "bold",
                color: "#8D00FF",
                marginLeft: -25,
              }}
            >
              Convert
            </Text>
            <Text></Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
              paddingHorizontal: 40,
            }}
          >
            <Text
              style={{
                backgroundColor: "#2D0052",
                width: 120,
                height: 45,
                borderRadius: 10,
                textAlign: "center",
                color: "white",
                borderWidth: 1,
                borderColor: "#ECECEC",
                padding: 10,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Convert
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("plus")}>
              <Text
                style={{
                  backgroundColor: "white",
                  color: "#2D0052",
                  width: 120,
                  height: 45,
                  borderRadius: 10,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "#ECECEC",
                  padding: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Limit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={[globalStyles.text, { marginLeft: 20 }]}>From</Text>

            <View
              style={[
                globalStyles.inputStyle,
                {
                  borderColor: "#ECECEC",
                  flexDirection: "row",
                  paddingLeft: 0,
                  width:322
                },
              ]}
            >
              <View style={{ width: "15%", justifyContent: "center" }}>
                <Image
                  style={{ width: 35, height: 35, alignSelf:'center' }}
                  source={require("../../assets/Bitcoin.png")}
                />
              </View>
              <Picker
                ref={pickerRef}
                selectedValue={values.fromCryptoType}
                onValueChange={formik.handleChange("fromCryptoType")}
                onBlur={formik.handleBlur("fromCryptoType")}
                value={values.fromCryptoType}
                style={{
                  width: "35%",
                  height: 50,
                  fontSize: 12,
                  alignSelf:'center'
                }}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="BTC" value="BTC" />
                <Picker.Item label="ETH" value="ETH" />
                <Picker.Item label="MXN" value="MXN" />
              </Picker>
              <TouchableOpacity
                onPress={() => {
                  setToggle("1");
                }}
                style={{
                  width: "35%",
                  height: 48,
                  justifyContent: "center",
                  backgroundColor: toggle === "1" ? "#ECECEC" : "white",
                  borderColor: "#ECECEC",
                }}
              >
                <Text style={{ paddingLeft: 10 }}>{fromAmount}</Text>
              </TouchableOpacity>
              <Text style={{ width:'15%', textAlign:'center', alignSelf:'center', color:'#8D00FF' }}>MXN</Text>
            </View>
          </View>

          <Text style={[globalStyles.text, { marginLeft: 20, fontSize: 14 }]}>
            Available Balance : 7.291{" "}
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={[globalStyles.text, { marginLeft: 20 }]}>To</Text>
            <View
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor: "#ECECEC",
                    flexDirection: "row",
                    paddingLeft: 0,
                    width:322
                  },
                ]}
            ><View style={{ width: "15%", justifyContent: "center" }}>
            <Image
              style={{ width: 35, height: 35, alignSelf:'center' }}
              source={require("../../assets/Bitcoin.png")}
            /></View>
              <Picker
                ref={pickerRef}
                selectedValue={values.toCryptoType}
                onValueChange={formik.handleChange("toCryptoType")}
                onBlur={formik.handleBlur("toCryptoType")}
                value={values.toCryptoType}
                style={{
                  width: "35%",
                  height: 50,
                  fontSize: 12,
                  alignSelf:'center'
                }}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="BTC" value="BTC" />
                <Picker.Item label="ETH" value="ETH" />
                <Picker.Item label="MXN" value="MXN" />
              </Picker>
              <TouchableOpacity
                onPress={() => {
                  setToggle("2");
                }}
                style={{
                  width: "35%",
                  height: 48,
                  justifyContent: "center",
                  backgroundColor: toggle === "2" ? "#ECECEC" : "white",
                  borderColor: "#ECECEC",
                }}
              >
                <Text style={{ paddingLeft: 10 }}>{toAmount}</Text>
              </TouchableOpacity>
              <Text style={{ width:'15%', textAlign:'center', alignSelf:'center', color:'#8D00FF' }}>MXN</Text>
           
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", height: 50, marginTop: 30 }}>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("1")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("2")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("3")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", height: 50 }}>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("4")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("5")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("6")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", height: 50 }}>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("7")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("8")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("9")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", height: 50 }}>
              <View style={styles.keyButton}></View>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => merge("0")}
                // disabled={pin.length == 4}
              >
                <Text style={{ textAlign: "center" }}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() =>
                  toggle === "1"
                    ? setFromAmount(fromAmount.slice(0, -1))
                    : toggle === "2"
                    ? setToAmount(toAmount.slice(0, -1))
                    : null
                }
              >
                <Image
                  style={styles.Logo}
                  source={require("../../assets/back.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{ marginTop: 10, marginBottom: 35 }}
            onPress={() => {
              setFromAmount("");
              setToAmount("");
            }}
          >
            <Text style={{ textAlign: "center", color: "#2D0052" }}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.button}
            //   disabled={pin.length != 4}
            // onPress={() => handleSubmit()}
          >
            <Text style={globalStyles.buttonText}>Preview Conversion</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default KeypadButtons;

const styles = StyleSheet.create({
  keyButton: {
    width: "33.33%",
    justifyContent: "center",
  },
  Logo: {
    height: 18,
    width: 22,
    alignSelf: "center",
  },
  display: {
    height: 15,
    width: 15,
    borderRadius: 5,
  },
});
