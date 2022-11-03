import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const BlockAlert = ({ image, change, title, symbol, price, text, buttons }) => {
  const priceChange = change < 0 ? "#34C759" : "#FF3B30";
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "rgba(128,128,128,0.25)",
        marginBottom: 20,
      }}
    >
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={image} style={styles.Image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right Side */}

        <View style={styles.rightWrapper}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/vect.png")}
              width={10}
              height={15}
              style={{ marginTop: 10 }}
            />
            <Text
              style={[styles.title, { color: "#2D0052", fontWeight: "600" }]}
            >
              {" "}
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
          <Text style={[styles.subtitle, { color: priceChange, top: -10 }]}>
            {change}
          </Text>
        </View>
      </View>
      <Text style={{ lineHeight: 25, padding: 5 }}>{text}</Text>
      <View style={{ flexDirection: "row", paddingRight: 10 }}>
        <Pressable
          style={{
            backgroundColor: "#E1E3FF",
            width: 100,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#8D00FF",
              lineHeight: 20,
              fontWeight: "500",
            }}
          >
            {buttons[0]}
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#E1E3FF",
            width: 90,
            borderRadius: 15,
            paddingLeft: 5,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#8D00FF",
              lineHeight: 20,
              fontWeight: "500",
            }}
          >
            {buttons[1]}
          </Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default BlockAlert;

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 0,
    // marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Image: {
    height: 45,
    width: 45,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    color: "#2D0052",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#8D00FF",
    marginTop: 4,
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
