import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
function Footer(active) {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={{ marginLeft: 0 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("walletHome");
          }}
        >
          {active.active === "home" ? (
            <Image
              style={[
                styles.image,
                { alignSelf: "center", width: 34, height: 22 },
              ]}
              source={require("../../assets/homeButton2.png")}
            />
          ) : (
            <Image
              style={[
                styles.image,
                { alignSelf: "center", width: 22, height: 22 },
              ]}
              source={require("../../assets/homeButton.png")}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{ }}>
        <TouchableOpacity>
          <Image
            style={{ alignSelf: "center", width: 25, height: 22 }}
            source={require("../../assets/exchange.png")}
          />
          {/* <Text style={{ marginTop: 5, color: "#7A869A" }}>Crypto</Text> */}
        </TouchableOpacity>
      </View>

      <View style={{ }}>
        <TouchableOpacity>
          <Image
            style={{ alignSelf: "center", width: 64, height: 64, top: -10 }}
            source={require("../../assets/plus.png")}
          />
          {/* <Text style={{ marginTop: 5, color: "#7A869A" }}>Activity</Text> */}
        </TouchableOpacity>
      </View>

      <View style={{ }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{ alignSelf: "center", width: 25, height: 22 }}
            source={require("../../assets/graph.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("balancePage");
          }}
        >
          {active.active === "wallet" ? (
            <Image
              style={[
                styles.image,
                { alignSelf: "center", width: 34, height: 34 },
              ]}
              source={require("../../assets/wallet2.png")}
            />
          ) : (
            <Image
              style={[
                styles.image,
                { alignSelf: "center", width: 28, height: 22 },
              ]}
              source={require("../../assets/wallet.png")}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    position: "absolute",
    bottom: 0,
    justifyContent:'space-between',
    paddingHorizontal:15
  },
  image: {
    // width: 35,
    // height: 35,
  },
});
export default Footer;
