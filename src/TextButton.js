import React from "react";
import { Text, TouchableOpacity } from "react-native";

const TextButton = ({
  label,
  custContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "green",
        ...custContainerStyle,
        fontSize :5
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontSize: 13 }}>{label}</Text>
    </TouchableOpacity>
  );
};


export default TextButton