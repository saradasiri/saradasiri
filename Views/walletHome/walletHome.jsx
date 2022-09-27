import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/footer/footer";

const WalletHome = (email) => {
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
    alert("ok");
    //   navigation.navigate("setUpPin")
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />

        <Text style={[styles.Label,{marginTop:0}]}>Combined balance</Text>
        <Text style={[styles.Label, { fontSize: 40, marginTop: 5 }]}>
          9,909.27
          <Text style={[styles.Label, { fontSize: 25, marginTop: 5 }]}>
            MXN
          </Text>
        </Text>
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Tap to hide
        </Text>

        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: -20 }}
        >
          <View style={{ flexDirection: "column" }}>
            <Image
              style={styles.Logo}
              source={require("../../assets/plus.png")}
            />
            <Text
              style={styles.iconText}
            >
              Deposit
            </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../assets/sync.png")}
            />
            <Text
              style={styles.iconText}
            >
              Convert
            </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Image
              style={styles.Logo}
              source={require("../../assets/arrow.jpeg")}
            />
            <Text
              style={styles.iconText}
            >
              Send
            </Text>
          </View>
        </View>

        <View style={[styles.container, { marginTop: 40 }]}>
          <View style={{ paddingLeft: 15, paddingTop: 10 }}>
            <View
              style={{
                backgroundColor: "#D8BFD8",
                width: 80,
                borderRadius: 10,
                paddingLeft: 10,
                flexDirection: "row",
              }}
            >
              <Text>Bitso+</Text>
              <Image
                style={{ width: 18, height: 18, marginLeft: 5 }}
                source={require("../../assets/flame.png")}
              />
            </View>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            Your wallet is already growing with Bitso+
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              textAlign: "left",
              paddingTop: 5,
              paddingLeft: 10,
            }}
          >
            Keep buying crypto to get more every day. you will get
            distbursements every Monday.
          </Text>
          <Text
            style={{
              color: "#90EE90",
              fontSize: 16,
              textAlign: "right",
              paddingRight: 15,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Buy crypto
          </Text>
        </View>

        <View style={styles.container}>
          <View
            style={{ paddingLeft: 30, paddingTop: 20, flexDirection: "row" }}
          >
            <Image
              style={{
                width: 22,
                height: 22,
                marginRight: 10,
                borderRadius: 50,
              }}
              source={require("../../assets/Dollar.jpeg")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Mexican pesos</Text>
            <Text style={{ color: "white", fontSize: 16, marginLeft: 65 }}>
              - 4.96%
            </Text>
          </View>
          <View
            style={{ paddingLeft: 20, paddingTop: 20, flexDirection: "row" }}
          >
            <Text style={{ color: "white", fontSize: 26 }}>491.85</Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                paddingTop: 8,
                marginLeft: 5,
                marginBottom: 10,
              }}
            >
              MXN
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{ paddingLeft: 30, paddingTop: 20, flexDirection: "row" }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("../../assets/Bitcoin.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Bitcoin</Text>
            <Text style={{ color: "white", fontSize: 16, marginLeft: 120 }}>
              - 50.69%
            </Text>
          </View>
          <View
            style={{ paddingLeft: 20, paddingTop: 20, flexDirection: "row" }}
          >
            <Text style={{ color: "white", fontSize: 26 }}>0.01320387</Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                paddingTop: 8,
                marginLeft: 5,
              }}
            >
              BTC
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                marginLeft: 10,
                paddingTop: 10,
              }}
            >
              5,022.88 MXN
            </Text>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 10 }}>
            <View
              style={{
                backgroundColor: "#ADD8E6",
                width: 110,
                borderRadius: 10,
                paddingLeft: 10,
                marginBottom: 10,
                flexDirection: "row",
              }}
            >
              <Text>+2% annual</Text>
              <Image
                style={{ width: 18, height: 18, marginLeft: 5 }}
                source={require("../../assets/flame.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={{ height: 130 }}></View>
        </View>
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
      <Footer />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#270041",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 16,
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "center",
  },
  Logo: {
    height: 70,
    width: 70,
    marginTop: 50,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 100,
  },
  container: {
    width: 330,
    marginTop: 20,
    backgroundColor: "#8D00FF",
    borderRadius: 15,
  },
  iconText:{
    color: "white",
    fontSize: 16,
    paddingTop: 5,
    textAlign: "center",
  }
});
export default WalletHome;
