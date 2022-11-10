import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CoinData, Recommendations } from "../../data/coinsData";
import Footer from "../../src/footer/footer";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Listitem from "../../src/Listitem";
// import { LinearGradient } from "expo-linear-gradient";
// import { HalfPieChart } from "half-pie-chart";

const BalancePage1 = () => {
  const [right, setRight] = useState([
    {
      value: 20,
      displayValue: "20 $",
      text: "Collected",
      color: "#4cb38e",
    },
  ]);
  const [left, setLeft] = useState([
    {
      value: 10,
      displayValue: "10 $",
      text: "Pending",
      color: "#eee36b",
    },
  ]);
  const image1 =
    "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";

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
                marginLeft: 15,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: image1 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../assets/scan.png")}
                />
              </TouchableOpacity>
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
              $456,895.37 mxn
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
                  style={{ width: wp(70), height: hp(20) }}
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
                    $345,987.00
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

                <View style={{ marginTop: 10, width:120 }}>
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "#8D00FF",
                      fontFamily: "NunitoSans_400Regular",
                    }}
                  >
                    BCKL
                  </Text>
                  <Text style={{
                        fontFamily: "NunitoSans_400Regular",}}>$23,359.74 mxn</Text>
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
                  <View style={{ }}>
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
                  <Text style={{ color: "#8D00FF", fontWeight: "700",fontFamily: "NunitoSans_400Regular" }}>
                    MSH
                  </Text>
                  <Text style={{fontFamily: "NunitoSans_400Regular",width:180}}>$125,698.00 mxn</Text>
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
              {CoinData.map((item, idx) => {
                return (
                  <>
                    <Listitem
                      price={item.price}
                      change={item.change}
                      image={item.image}
                      title={item.title}
                      symbol={item.symbol}
                    />
                  </>
                );
              })}
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
    margin: 1,
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
