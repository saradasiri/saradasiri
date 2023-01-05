import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import Listitem from "../../src/Listitem";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";

const Checkout = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATHS.MARKET_DATA).then((res) => {
      setData(res.data.result);
    });
  }, []);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[globalStyles.MainContainer]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingTop: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "white",
              // margintop: 30,
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderColor: "#ECECEC",
                borderRadius: 1,
                borderWidth: 1,
                borderRadius: 10,
              }}
              source={require("../../assets/leftArrow.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
            //   fontWeight: "bold",
              color: "#8D00FF",
              marginLeft: -25,
            }}
          >
            Sell Coin
          </Text>
          <Text></Text>
        </View>
        <View style={{ marginTop: 50 }}>
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
                    id={item.id}
                  />
                </View>
              </>
            );
          })}
        </View>
        <Text
          style={[
            styles.text,
            { color: "#2D0052", fontWeight: "700", paddingTop: 20 },
          ]}
        >
          Payment Summary
        </Text>
        <View
          style={{
            width: "98%",
            // height: 100,
            elevation: 5,
            backgroundColor: "white",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
          <View style={styles.box}>
            <Text style={[styles.text, { color: "rgba(18, 3, 58, 0.4)" }]}>
              Sub Total
            </Text>
            <Text style={[styles.text, { color: "#2D0052" }]}>$98.00</Text>
          </View>
          <View style={[styles.box, , { marginTop: -10 }]}>
            <Text style={[styles.text, { color: "rgba(18, 3, 58, 0.4)" }]}>
              Convert Fee
            </Text>
            <Text style={[styles.text, { color: "#2D0052" }]}>$10.00</Text>
          </View>
          <View
            style={{
              borderBottomColor: "rgba(18, 3, 58, 0.4)",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.box}>
            <Text style={[styles.text, { color: "#2D0052" }]}>Total Price</Text>
            <Text style={[styles.text, { color: "#2D0052" }]}> $108.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[globalStyles.button, { marginBottom: 65, marginTop: 30 }]}
          //   disabled={pin.length != 4}
          onPress={() => {
            navigation.navigate("paymentPage");
          }}
        >
          <Text style={globalStyles.buttonText}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "NunitoSans_400Regular",
    // fontWeight: "700",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
