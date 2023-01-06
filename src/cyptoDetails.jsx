import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { API_PATHS } from "./constants/apiPaths";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const CyptoDetails = () => {
  const { cyptoName } = useSelector((state) => state.userReducer);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API_PATHS.MARKET_DATA).then((res) => {
      const newData = res.data.result.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = cyptoName.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
    });
  }, [cyptoName]);
  return (
    <ScrollView
      style={{ backgroundColor: "white", height: "100%", marginBottom: 50 }}
    >
      <Text></Text>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Rank
        </Text>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          {data.length !== 0 ? data[0].market_cap_rank.toString() : " "}
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Market cap
        </Text>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          {data.length !== 0 ? data[0].market_cap.toString() : " "}
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Circulating supply
        </Text>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          {data.length !== 0 ? data[0].circulating_supply.toString() : " "}
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Max supply
        </Text>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          {data.length !== 0
            ? data[0].max_supply
              ? data[0].max_supply.toString()
              : " "
            : " "}
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Issue date
        </Text>
        <Text
          style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}
        ></Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Issue price
        </Text>
        <Text
          style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}
        ></Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          All time high
        </Text>
        <Text
          style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}
        ></Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          All time low
        </Text>
        <Text
          style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}
        ></Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Contract address
        </Text>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          vadi@email.com
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Website
        </Text>
        <Text style={{ color: "#8D00FF", fontFamily: "NunitoSans_400Regular" }}>
          www.vadi.com
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={{
            color: "rgba(18, 3, 58, 0.4)",
            fontFamily: "NunitoSans_400Regular",
          }}
        >
          Description
        </Text>
      </View>
      <View style={[styles.aboutContainer, { marginTop: -10 }]}>
        <Text style={{ color: "#2D0052", fontFamily: "NunitoSans_400Regular" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit
        </Text>
      </View>
    </ScrollView>
  );
};

export default CyptoDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 10,
  },
});
