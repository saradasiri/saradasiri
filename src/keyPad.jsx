import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

const KeyPad = ({ pin, setPin }) => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const merge = async (value) => {
    setPin(pin.concat(value.toString()));
  };
  return (
    <View>
      <View>
        <View style={{ flexDirection: "row", height: 50, marginTop: 30 }}>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("1")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("2")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("3")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", height: 50 }}>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("4")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("5")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("6")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", height: 50 }}>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("7")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("8")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("9")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", height: 50 }}>
          <View style={styles.keyButton}></View>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => merge("0")}
            // disabled={pin.length == 4}
          >
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keyButton}
            onPress={() => setPin(pin.slice(0, -1))}
          >
            <Image style={styles.Logo} source={require("../assets/back.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{ marginTop: 10, marginBottom: 35 }}
        onPress={() => {
          setPin("");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#2D0052",
            fontFamily: "NunitoSans_400Regular",
            color: "#2D0052",
          }}
        >
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default KeyPad;

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
  number: {
    fontFamily: "NunitoSans_400Regular",
    color: "#2D0052",
    textAlign: "center",
    fontFamily: "NunitoSans_400Regular",
    color: "#2D0052",
    fontSize: 18,
    // fontWeight: "bold",
  },
});
