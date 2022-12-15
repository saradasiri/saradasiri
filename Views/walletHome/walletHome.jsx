import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { CoinData } from "../../data/coinsData";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
// import Footer from "../../src/footer/footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PriceAlert from "../../src/priceAlert";
import Listitem from "../../src/Listitem";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, addPassword, addAccessToken } from "../../src/redux/actions";

const WalletHome = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState();
  const [toggle, setToggle] = useState(false);
  const { email, password, access_token } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    axios.get(`${API_PATHS.EXISTENCE_OF_WALLET}${email}`).then((res) => {
      if (res.data == true) {
        setToggle(true);
      } else setToggle(false);
    });
  }, []);

  useEffect(() => {
    axios.get(API_PATHS.MARKET_DATA).then((res) => {
      setData(res.data.result);
    });
  }, []);

  const createWallet = () => {
    const obj = {
      email: email,
      password: password,
    };
    axios.post(API_PATHS.WALLET_SIGNUP, obj).then((res) => {
      if (res.data.access_token) {
        dispatch(addAccessToken(res.data.access_token));
        axios
          .get(API_PATHS.CREATE_WALLET, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${res.data.access_token}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              setToggle(true);
              navigation.navigate("balancePage1");
            }
          });
      }
    });
  };

  const signIn = () => {
    const obj = {
      email: email,
      password: password,
    };
    axios.post(API_PATHS.WALLET_SIGNIN, obj).then((res) => {
      if (res.data.access_token) {
        dispatch(addAccessToken(res.data.access_token));
        navigation.navigate("balancePage1");
      }
    });
  };
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <>
      <KeyboardAwareScrollView style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.MainContainer}>
          {/* <StatusBar style="auto" /> */}

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
                // marginLeft: 15,
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
                // justifyContent: "center",
                textAlign: "center",
                top: 50,
                fontSize: 24,
                fontFamily: "NunitoSans_400Regular",
                marginLeft: 15,
                fontWeight: "700",
              }}
            >
              ¡Hola Hermenegildo!
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
                fontWeight: "700",
                marginLeft: 15,
              }}
            >
              ¿Qué quieres hacer hoy?
            </Text>
            <View
              style={{
                marginTop: 70,
                // paddingLeft: 30,
                marginHorizontal: toggle ? 70 : 55,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <LinearGradient
                start={[0, 0.5]}
                end={[1, 0.5]}
                colors={[
                  "#5d0047",
                  "#4A8151",
                  "#5AEF67",
                  "#47C901",
                  "#48e1e1",
                  "#46F2FB",
                ]}
                style={{ borderRadius: 5, padding: 1.5 }}
              >
                <Pressable style={styles.circleGradient}>
                  <Text
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: 16,
                      // paddingTop: 10,
                      fontFamily: "NunitoSans_400Regular",
                      fontWeight: "700",
                    }}
                  >
                    Depositar
                  </Text>
                </Pressable>
              </LinearGradient>
              <LinearGradient
                start={[0, 0.5]}
                end={[1, 0.5]}
                colors={[
                  "#46F2FB",
                  "#62F2F2",
                  "#5DFF3F",
                  "#5DFF3F",
                  "#8D00FF",
                  "#8D00FF",
                ]}
                style={{ borderRadius: 5, padding: 1.5 }}
              >
                <Pressable
                  style={styles.circleGradient}
                  onPress={() => {
                    toggle ? signIn() : createWallet();
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: 16,
                      // padding: 5,
                      fontFamily: "NunitoSans_400Regular",
                      fontWeight: "700",
                    }}
                  >
                    {toggle ? "Registrarse" : "Crear Billetera"}
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              top: -40,
              width: "100%",
              justifyContent: "center",
              textAlign: "center",
              // marginLeft: 5,
            }}
          >
            <PriceAlert
              title="Desbloquea todas las funciones de Vadi."
              content="  Valida tu identidad para que puedas ver todas las funciones del
          marketplace."
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 25,
            }}
          >
            <Text
              style={{
                color: "#2D0052",
                fontSize: 16,
                lineHeight: 26,
                fontFamily: "NunitoSans_400Regular",
                fontWeight: "700",
              }}
            >
              Tokens para invertir
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{
                  backgroundColor: "#8D00FF",
                  marginRight: 10,
                  padding: 8,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "500",
                  }}
                >
                  Hot
                </Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "#DFD4F9",
                  marginRight: 10,
                  padding: 8,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "500",
                    color: "#8D00FF",
                  }}
                >
                  Precio
                </Text>
              </Pressable>
            </View>
          </View>
          {/* <Text>{JSON.stringify(data)}</Text> */}
          <View style={{ padding: 20, paddingBottom: 100 }}>
            {data.map((item, idx) => {
              return (
                <>
                  <View key={idx}>
                    <Listitem
                      image={item.image}
                      change={item.price_change_percentage_24h}
                      title={item.name}
                      symbol={item.symbol}
                      price={item.current_price}
                    />
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      {/* <Footer active={"home"} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
  },
  circleGradient: {
    margin: 1,
    backgroundColor: "#270041",
    borderRadius: 5,
    // width: 100,
    // justifyContent:'center',
    padding: 10,
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
    width: 330,
    marginTop: 20,
    // backgroundColor: "#8D00FF",
    borderRadius: 15,
  },
  iconText: {
    color: "white",
    fontSize: 16,
    paddingTop: 5,
    textAlign: "center",
  },
});
export default WalletHome;
