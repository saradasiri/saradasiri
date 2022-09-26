import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../../globalStyles";
import { getfontSize, getHeight, getWidth } from "../../Dimentions/DImentions";

const SetUpPin = () => {
  return (
    <SafeAreaView style={globalStyles.flex_1}>
      <TouchableOpacity>
        <Text style={styles.TextPin}>Escribe tu PIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SetUpPin;

const styles = StyleSheet.create({
  TextPin: {
    fontSize: getfontSize(30),
    fontWeight: "700",
  },
});
