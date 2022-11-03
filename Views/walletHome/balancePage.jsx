import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PriceAlert from "../../src/priceAlert";
import BlockAlert from "../../src/blockAlert";
import { CoinData, Recommendations } from "../../data/coinsData";
import Footer from "../../src/footer/footer";

const BalancePage = () => {
  const image1 =
    "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          width: 150,
          paddingVertical: 20,
          paddingHorizontal: 20,
          marginLeft: index == 0 ? 1 : 0,
          borderRadius: 15,
          marginRight: 20,
          backgroundColor: "#fff",
        }}
        // onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{ marginTop: 5, width: 25, height: 25 }}
            />
          </View>
          <View style={{ marginLeft: 14 }}>
            <Text style={{ fontWeight: "700" }}>{item.title}</Text>
            <Text>{item.symbol}</Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: "bold" }}>
            {item.amount} <Text style={{}}>{item.price}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <KeyboardAwareScrollView>
        <ScrollView>
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
                fontWeight: "700",
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
              }}
            >
              $0.00 mxn
            </Text>
            <View
              style={{
                marginTop: 70,
                paddingLeft: 30,
                marginHorizontal: 50,
                justifyContent: "space-between",
                alignSelf: "center",
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
                      fontSize: 15,
                      padding: 10,
                      alignSelf: "center",
                    }}
                  >
                    Buscar moneda
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
            <PriceAlert
              title="Compra Vadi coins."
              content=" La mejor manera de iniciar es comprar la moneda que te permite invertir en las start ups más innovadoras de LaTam."
            />
          </View>
          <View style={{ paddingLeft: 30 }}>
            <Text
              style={{
                color: "#2D0052",
                fontSize: 16,
                lineHeight: 26,
                fontWeight: "800",
              }}
            >
              Recomendaciones
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            {Recommendations.map((item, idx) => {
              return (
                <BlockAlert
                  price={item.price}
                  change={item.change}
                  image={item.image}
                  title={item.title}
                  symbol={item.symbol}
                  text={item.text}
                  buttons={item.buttons}
                />
              );
            })}
          </View>
          <View style={{ paddingLeft: 30 }}>
            <Text
              style={{
                color: "#2D0052",
                fontSize: 16,
                lineHeight: 26,
                fontWeight: "800",
              }}
            >
              Compra tu primer criptomoneda
            </Text>
          </View>
          <View style={{ paddingLeft: 10, paddingTop: 10 }}>
            <FlatList
              contentContainerStyle={{ marginTop: 0 }}
              style={{
                flexGrow: 0,
                border: 4,
                borderColor: "black",
                border: 1,
              }}
              data={CoinData}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={{ padding: 30 ,paddingBottom:100 }}>
            <Text style={{ alignSelf: "center", color: "#2D0052" }}>
              ¿Ya tienes criptos? Depositar ahora
            </Text>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <Footer />
    </>
  );
};

export default BalancePage;
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
