import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";
import { NativeBaseProvider, Box }  from "native-base";

const KeyPad = ({ setNumber, onPress }) => {
  const [updatedNumber, setUpdatedNumber] = useState("");
  const [key1] = useState([1, 2, 3]);
  const [key2] = useState([4, 5, 6]);
  const [key3] = useState([7, 8, 9]);
  const [key4] = useState([".", 0]);

  useEffect(() => {
    setNumber(updatedNumber);
  }, [updatedNumber]);

  const renderNumber = (num) => {
    let number = updatedNumber;
    number = number + num.toString();
    setUpdatedNumber(number);
  };

  const removeNumber = () => {
    let str = updatedNumber;
    str = str.substring(0, str.length - 1);
    setUpdatedNumber(str);
  };

  const display = (item) => {
    return item.map((num, index) => {
      return (
        <TouchableOpacity>
          <View
            key={index}
            style={{
              margin: 10,
              width: 100,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Button backgroundColor="gray" onPress={() => renderNumber(num)}>
              <Text style={{ fontSize: 20 }}>{num}</Text>
            </Button>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>{display(key1)}</View>
        <View style={{ flexDirection: "row" }}>{display(key2)}</View>
        <View style={{ flexDirection: "row" }}>{display(key3)}</View>
        <View style={{ flexDirection: "row" }}>
          {display(key4)}
          <View
            style={{
              margin: 10,
              width: 100,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Button onPress={() => removeNumber()}>
              <FontAwesome5 name="backspace" size={24} color="black" />
            </Button>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 130,
            width: 100
          }}
        >
          <Button
            backgroundColor="green.500"
            style={{
              width: 100,
            }}
            onPress={() => onPress()}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "column",
    width: 100,
  },
});