import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";

const PaymentStatus = () => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <ImageBackground
      style={{
        flex: 1,
        alignSelf: "stretch",
        width: null,
        backgroundColor: "#270041",
      }}
      source={require("../../assets/rect.png")}
    >
      <Image
        style={{
          width: "95%",
          marginTop: "30%",
          alignSelf: "center",
        }}
        source={require("../../assets/paymentStatus.png")}
      />
      <View style={{ marginTop: -260 }}>
        <Text style={[styles.text, { textAlign: "center", fontSize: 24 }]}>
          $ 1234.00
        </Text>
        <View style={{ marginTop: 50, marginLeft: 100 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { color: "#232440" }]}>CITY BANK</Text>
            <View
              style={{
                width: 5,
                height: 5,
                backgroundColor: "yellow",
                marginHorizontal: 10,
                marginTop: 10,
              }}
            ></View>
            <Text style={[styles.text, { color: "#232440" }]}>$ 12,769.00</Text>
          </View>
          <Text style={[styles.text, { color: "#6E6E82" }]}>
            123 456 789 000
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[globalStyles.button, { marginTop: 70 }]}
        //   disabled={pin.length != 4}
        onPress={() => {
          // alert("Payment Completed");
            navigation.navigate("sellcoin");
        }}
      >
        <Text style={globalStyles.buttonText}>Done</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PaymentStatus;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "NunitoSans_400Regular",
    // fontWeight: "700",
    color: "#232440",
  },
});
