import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../globalStyles";

const PaymentGateway = () => {
  const navigation = useNavigation();
  const [paypal, setPaypal] = useState(false);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <View>
      <KeyboardAwareScrollView style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.MainContainer}>
          <StatusBar style="auto" />
          <View
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#270041",
              width: "100%",
              height: 300,
              paddingTop: 20,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 30,
                justifyContent: "space-between",
                paddingBottom: 10,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/leftArrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "NunitoSans_400Regular",
                  fontWeight: "700",
                }}
              >
                Price:
              </Text>
              <Text
                style={{
                  color: "#FFDE00",
                  fontSize: 18,
                  fontFamily: "NunitoSans_400Regular",
                  fontWeight: "700",
                }}
              >
                $456,89
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "NunitoSans_400Regular",
                  fontWeight: "700",
                }}
              >
                Coin
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  BTC
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              backgroundColor: "#D3D3D3",
              marginHorizontal: "5%",
              borderRadius: 20,
              marginTop: -50,
              paddingVertical: 30,
              paddingHorizontal: "10%",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "NunitoSans_400Regular",
                fontWeight: "700",
              }}
            >
              Bank Account
            </Text>
            <Checkbox
              style={[
                globalStyles.checkbox,
                { width: 20, height: 20, marginTop: 10, zIndex: 2 },
              ]}
              value={paypal}
              onValueChange={setPaypal}
              color={paypal ? "#8D00FF" : undefined}
            />
            <TouchableOpacity
              onPress={() => setPaypal(true)}
              style={{
                marginTop: -15,
                width: "100%",
                height: 70,
                borderRadius: 20,
                borderColor: "#8D00FF",
                borderWidth: 1,
                flexDirection: "row",
                paddingVertical: 15,
                paddingLeft: 20,
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                }}
                source={require("../../assets/paypalLogo.png")}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Text
                  style={{
                    color: "#2D0052",
                    fontSize: 16,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  Paypal
                </Text>
                <Text
                  style={{
                    color: "rgba(18, 3, 58, 0.4)",
                    fontSize: 14,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  Debit *8490
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("checkout");
              }}
              style={[
                globalStyles.button,
                {
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 30,
                  backgroundColor: "#2D0052",
                },
              ]}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/paypal.png")}
              />
              <Text style={globalStyles.buttonText}> Pay with paypal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PaymentGateway;

const styles = StyleSheet.create({});
