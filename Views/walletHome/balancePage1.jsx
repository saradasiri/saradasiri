import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { HalfPieChart } from "half-pie-chart";

const BalancePage1 = () => {
  const image1 =
    "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
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
            $456,895.37 mxn
          </Text>
        </View>
        <View style={{top:-100 ,height:"100%"}}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
                          alignItems: "center",
              alignSelf:"center",
              marginTop: 5,
              backgroundColor: "#fff",
              marginHorizontal: 40,
              paddingVertical: 50,
              paddingHorizontal: 10,
              // backgroundColor :"#fff",
              //   ...customContainerStyle,
              ...styles.shadow,
                          borderRadius: 20,
                          height:"100%",
              width:"80%",
              justifyContent: "center",
            }}
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default BalancePage1;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
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
