import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PriceAlert from "../../src/priceAlert";
import GraphAlert from "../../src/graphAlert";
import { VictoryChart, VictoryArea } from "victory-native";


const CoinDetails = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#270041",
            width: "100%",
            top: 0,
            height: 300,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              justifyContent: "space-between",
              top: 50,
              paddingBottom: 10,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("profile");
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/image.png")}
              />
            </TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/scan.png")}
            />
          </View>
          <Text
            style={{
              color: "#fff",
              marginTop: 10,
              justifyContent: "center",
              textAlign: "center",
              top: 30,
              fontSize: 24,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            Balance Total
          </Text>
          <Text
            style={{
              color: "#fff",
              marginTop: 10,
              justifyContent: "center",
              textAlign: "center",
              top: 50,
              fontSize: 18,
              alignSelf: "center",
            }}
          >
            $0.00 mxn
          </Text>
          <View
            style={{
              marginTop: 70,
              alignSelf: "center",
            }}
          ></View>
        </View>
        <View
          style={{
            top: -60,
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: 5,
          }}
        >
          <GraphAlert />
          <VictoryChart>
            <VictoryArea
              style={{
                data: { fill: "#c43a31" },
              }}
              data={[
                { x: 1, y: 2, y0: 0 },
                { x: 2, y: 3, y0: 1 },
                { x: 3, y: 5, y0: 1 },
                { x: 4, y: 4, y0: 2 },
                { x: 5, y: 6, y0: 2 },
              ]}
            />
          </VictoryChart>
          {/* </GraphAlert> */}
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
