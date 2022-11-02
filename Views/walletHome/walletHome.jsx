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
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/footer/footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
      <ScrollView>
        {/* <StatusBar style="auto" /> */}

        <View
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#270041",
            width: "100%",
            top: 0,
            height: 300,
            borderBottomRightRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              justifyContent: "space-between",
              top: 50,
              paddingBottom: 10,
              marginLeft: 30,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: image1 }}
              style={{
                width: 30,
                height: 30,
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
              fontSize: 14,
            }}
          >
            ¿Qué quieres hacer hoy?
          </Text>
          <View
            style={{
              marginTop: 100,
              paddingLeft: 30,
              justifyContent: "space-between",
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              // colors={["#4E68E1", "#33B9AF"]}
              width={322}
              height={50}
              colors={["#46F2FB", "#62F2F2"]}
              style={{ width: "40%", height: "60%" }}
            >
              <Pressable>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Depositar
                </Text>
              </Pressable>
              {/* </LinearGradient>
            <LinearGradient
              colors={["#46F2FB", "#62F2F2"]}
              style={{ width: "40%", height: "60%" ,marginLeft:100 }}
            > */}
              <Pressable>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Comprar
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#270041",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
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
