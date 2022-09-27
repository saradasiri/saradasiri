import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../globalStyles";

const SetWalletPin = () => {
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

        <View
          style={{ flexDirection: "row", marginTop: 126, alignSelf: "center" }}
        >
          <View
            style={[
              styles.display,
              {
                backgroundColor: pin.length > 0 ? "#8D00FF" : "grey",
              },
            ]}
          ></View>
          <View
            style={[
              styles.display,
              {
                backgroundColor: pin.length > 1 ? "#8D00FF" : "grey",
                marginRight: 5,
                marginLeft: 5,
              },
            ]}
          ></View>
          <View
            style={[
              styles.display,
              {
                backgroundColor: pin.length > 2 ? "#8D00FF" : "grey",
                marginRight: 5,
              },
            ]}
          ></View>
          <View
            style={[
              styles.display,
              {
                backgroundColor: pin.length > 3 ? "#8D00FF" : "grey",
              },
            ]}
          ></View>
        </View>

        <View>
          <View style={{ flexDirection: "row", height: 50, marginTop: 50 }}>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("1")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "left", paddingLeft: 30 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("2")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "center" }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("3")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "right", paddingRight: 30 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 50 }}>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("4")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "left", paddingLeft: 30 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("5")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "center" }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("6")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "right", paddingRight: 30 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 50 }}>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("7")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "left", paddingLeft: 30 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("8")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "center" }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("9")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "right", paddingRight: 30 }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 50 }}>
            <View style={styles.keyButton}></View>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => merge("0")}
              disabled={pin.length == 4}
            >
              <Text style={{ textAlign: "center" }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyButton}
              onPress={() => setPin(pin.slice(0, -1))}
            >
              <Image
                style={styles.Logo}
                source={require("../assets/back.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 24 }}>
          <Text style={{ textAlign: "center", color: "#2D0052" }}>
            Olvidé mi PIN móvil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            width: 312,
            height: 58,
            backgroundColor: "#8D00FF",
            borderRadius: 8,
            alignSelf: "center",
            marginTop: 62,
            opacity: pin.length != 4 ? 0.5 : 1,
          }}
          disabled={pin.length != 4}
          onPress={() => handleSubmit()}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Continuar</Text>
        </TouchableOpacity>
        {/* <Text style={{ textAlign: "center", marginTop: 20 }}>{pin}</Text> */}
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SetWalletPin;

const styles = StyleSheet.create({
  keyButton: {
    width: 110,
    justifyContent: "center",
  },
  Logo: {
    height: 18,
    width: 22,
    alignSelf: "flex-end",
    marginRight: 28,
  },
  display: {
    height: 15,
    width: 15,
    borderRadius: 5,
  },
});
