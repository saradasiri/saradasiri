import { StyleSheet } from "react-native";
import { getHeight, getfontSize, getWidth } from "./src/Dimentions/DImentions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  Text_1: {
    fontSize: getfontSize(15),
    color: "#ffff",
    fontWeight: "400",
  },
  Text_2: {
    textAlign: "center",
    fontSize: getfontSize(20),
    fontWeight: "400",
    color: "#8D00FF",
    marginLeft: getWidth(30),
  },
  Text_3: {
    fontSize: getfontSize(15),
    textAlign: "center",
    fontWeight: "400",
  },
  Text_Private: {
    color: "#2D0052",
    fontWeight: "400",
    fontSize: getfontSize(15),
  },
  Text_Private_1: {
    color: "#929094",
    fontWeight: "400",
    fontSize: getfontSize(15),
  },
  BeginText: {
    fontSize: getfontSize(36),
    textAlign: "center",
    fontFamily: "NunitoSans_400Regular",
    color: "",
    fontWeight: "400",
  },
  flex_1: {
    width: "100%",
    height: "100%",
    padding: 10,
    justifyContent: "center",
    color: "#FFFFFF",
    // marginTop: getHeight(100),
  },
  marginTop_100: {
    marginTop: hp("20%"),
  },
  marginTop_30: {
    marginTop: getHeight(30),
  },
  MarginBottom_100: {
    marginBottom: hp("20%"),
  },
  MarginBottom_30: {
    marginBottom: getHeight(30),
  },
  flex_2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  PhoneInput: {
    height: getHeight(85),
    width: wp("90%"),
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: getHeight(15),
  },
  inputText: {
    fontSize: hp("2%"),
    padding: 20,
  },
});
