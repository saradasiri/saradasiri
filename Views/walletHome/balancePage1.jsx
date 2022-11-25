import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import PieChart from "react-native-pie-chart";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "../../src/footer/footer";
import { useFonts } from "expo-font";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Listitem from "../../src/Listitem";
import { pieChartData } from "./data";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { useDispatch, useSelector } from "react-redux";
const BalancePage1 = () => {
  const [data, setData] = useState([]);
  const { email, password, access_token } = useSelector(
    (state) => state.userReducer
  );

  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  useEffect(() => {
    axios
      .get(`https://vadi-wallet.herokuapp.com/api/vdc/get/balances`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const graphStyle = {
    marginVertical: 8,
  };

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
        <ScrollView>
          <View
            style={{
              display: "flex",
              backgroundColor: "#270041",
              width: "100%",
              top: 0,
              height: hp("40%"),
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
                // marginLeft: 15,
                borderRadius: 10,
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/image.png")}
              />
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
                top: 50,
                fontSize: 24,
                fontWeight: "700",
                fontFamily: "NunitoSans_400Regular",
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
                fontFamily: "NunitoSans_400Regular",
              }}
            >
              $ {(data.map(li => li.balance.balance).reduce((sum, val) => sum + val, 0) )} MXN
            </Text>
          </View>
          <View style={{ top: hp(-13), height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
                backgroundColor: "#fff",
                marginHorizontal: 40,
                paddingVertical: 80,
                paddingHorizontal: 80,
                // backgroundColor :"#fff",
                //   ...customContainerStyle,
                ...styles.shadow,
                borderRadius: 20,
                height: hp("35%"),
                width: wp("80%"),
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2D0052",
                    fontSize: 16,
                    lineHeight: 26,
                    fontWeight: "800",
                    textAlign: "center",
                    fontFamily: "NunitoSans_400Regular",
                  }}
                >
                  Balance combinado
                </Text>
                <Image
                  style={{ width: wp(75), height: hp(20) }}
                  source={require("../../assets/Diagram.png")}
                />
                <View style={{ bottom: hp(5) }}>
                  <Text
                    style={{
                      color: "#2D0052",
                      fontSize: hp(2.5),
                      lineHeight: 26,
                      fontWeight: "600",
                      textAlign: "center",
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    $0 MXN
                  </Text>
                  <Text
                    style={{
                      color: "#2D0052",
                      fontSize: hp(2.4),
                      lineHeight: 26,
                      fontWeight: "600",
                      textAlign: "center",
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    {" "}
                    MXN en startups
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                right: 15,
                lineHeight: 26,
                fontWeight: "700",
                paddingLeft: 30,
                bottom: hp(-2),
                fontFamily: "NunitoSans_400Regular",
              }}
            >
              Tus inversiones
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: wp("40%"),
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  borderRadius: 15,
                  top: hp(3),
                  height: hp("20%"),
                  marginLeft: wp(5),
                  backgroundColor: "#fff",
                }}
                // key={index}
                // onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={["#FC6A18", "#E4B716D4", "#FFE600"]}
                  style={{
                    width: wp("40%"),
                    paddingVertical: 20,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    bottom: hp(3),
                    alignSelf: "center",
                  }}
                ></LinearGradient>
                <View style={{ flexDirection: "row" }}>
                  <View></View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: hp(2.3),
                        fontWeight: "700",
                        fontFamily: "NunitoSans_400Regular",
                      }}
                    >
                      BlockbitLab
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 10, width: 120 }}>
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "#8D00FF",
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    BCKL
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    {/* {values.totalbalance ? values.totalbalance : '0'} */}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: wp("42%"),
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  borderRadius: 15,
                  height: hp("20%"),
                  top: hp(3),
                  marginLeft: wp(5),
                  backgroundColor: "#fff",
                }}
                // key={index}
                // onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={["#184AFC", "#16A6E4D4", "#00D1FF"]}
                  style={{
                    width: wp("42%"),
                    paddingVertical: 20,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    bottom: hp(3),
                    // justifyContent: "center",
                    // alignItems: "center",
                    alignSelf: "center",
                  }}
                ></LinearGradient>
                <View style={{ flexDirection: "row" }}>
                  <View></View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: hp(2.2),
                        fontWeight: "700",
                        fontFamily: "NunitoSans_400Regular",
                      }}
                    >
                      Meishy
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      color: "#8D00FF",
                      fontWeight: "700",
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    MSH
                  </Text>
                  <Text
                    style={{ fontFamily: "NunitoSans_400Regular", width: 180 }}
                  >
                    $125,698.00 mxn
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <Text
              style={{
                color: "#2D0052",
                fontSize: 16,
                lineHeight: 26,
                fontFamily: "NunitoSans_400Regular",
                fontWeight: "700",
                margintop: hp(10),
              }}
            >
              Tus criptomonedas
            </Text> */}

            <View style={{ padding: 20, paddingBottom: 100, top: 20 }}>
              <Text
                style={{
                  color: "#2D0052",
                  fontSize: 16,
                  lineHeight: 26,
                  // fontFamily: "NunitoSans_400Regular",
                  fontWeight: "700",
                  margin: 20,
                  right: 15,
                  margintop: hp(10),
                  fontFamily: "NunitoSans_400Regular",
                }}
              >
                Tus criptomonedas
              </Text>
              {data.map((item, idx) => {
                return (
                  <>
                    <View key={idx}>
                      <Listitem
                        image={item.image}
                        // change={item.price_change_percentage_24h}
                        title={item.name}
                        symbol={item.symbol}
                        price={item.balance.balance}
                      />
                    </View>
                  </>
                );
              })}
              <View style={{ marginBottom: -90 }}></View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <Footer active={"wallet"} />
    </>
  );
};

export default BalancePage1;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  MainContainer: {
    // width: "100%",
    // height: "100%",
    // backgroundColor: "",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
  },
  circleGradient: {
    marginTop: 10,
    backgroundColor: "#270041",
    borderRadius: 5,
    width: 150,
    height: 50,
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
    // width: 330,
    // marginTop: 20,
    // // backgroundColor: "#8D00FF",
    // borderRadius: 15,
  },
  iconText: {
    color: "white",
    fontSize: 16,
    paddingTop: 5,
    textAlign: "center",
  },
});
