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
import {CoinData, coinData} from "../../data/coinsData"
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/footer/footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PriceAlert from "../../src/priceAlert";
import Listitem from "../../src/Listitem";

const WalletHome = (email) => {
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();
  const image1 =
    "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";

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
              marginLeft: 15,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: image1 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
              }}
            />
            <MaterialCommunityIcons
              name="code-brackets"
              size={34}
              color="white"
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
            }}
          >
            ¿Qué quieres hacer hoy?
          </Text>
          <View
            style={{
              marginTop: 70,
              paddingLeft: 30,
              marginHorizontal: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
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
              style={{ borderRadius: 5 }}
            >
              <Pressable style={styles.circleGradient}>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 16,
                    paddingTop: 10,
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
              style={{ borderRadius: 5 }}
            >
              <Pressable style={styles.circleGradient}>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 16,
                    paddingTop: 10,
                  }}
                >
                  Comprar
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
            marginLeft: 5,
          }}
        >
          <PriceAlert />
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
              fontWeight: "800",
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
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#FFF" }}>Hot</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "rgba(141, 0, 255, 0.5)",
                marginRight: 10,
                padding: 8,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff" }}>Precio</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          {CoinData.map((item, idx) => {
            return (
              <Listitem
                price={item.price}
                change={item.change}
                image={item.image}
                title={item.title}
                symbol={item.symbol}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={{paddingTop:20}}>
        <Footer />
      </View>
    </KeyboardAwareScrollView>
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
    width: 100,
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
