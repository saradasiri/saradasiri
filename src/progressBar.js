import { View, Text } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
const ProgressBar = (length) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -10,
        marginTop: 10,
      }}
    >
      <Progress.Bar
        progress={length.length}
        width={90}
        color={"#8D00FF"}
        borderColor={"#c5dafb"}
        backgroundColor={"#d2e2fb"}
      />
    </View>
  );
};

export default ProgressBar;
