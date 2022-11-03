import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
function Footer() {

  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={{ marginLeft: 0 }}>
        <TouchableOpacity>
          <Image
            style={[styles.image, { alignSelf: "center" }]}
            source={require("../../assets/wallet.png")}
          />
          <Text style={{ marginTop: 5, color: "#7A869A" }}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 50 }}>
        <TouchableOpacity >
          <Image
            style={[styles.image, { alignSelf: "center" }]}
            source={require("../../assets/graph.png")}
          />
          <Text style={{ marginTop: 5, color: "#7A869A" }}>Crypto</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 50 }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={[styles.image, { alignSelf: "center" }]}
            source={require("../../assets/activity.png")}
          />
          <Text style={{ marginTop: 5, color: "#7A869A" }}>Activity</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 50 }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={[styles.image, { alignSelf: "center" }]}
            source={require("../../assets/profile.png")}
          />
          <Text style={{ marginTop: 5, color: "#7A869A" }}>Profile</Text>
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
    backgroundColor: "#2D0052",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    position: "absolute",
    bottom: 0,
  },
  image: {
    width: 35,
    height: 35,
  },
});
export default Footer;
