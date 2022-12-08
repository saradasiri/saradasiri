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




  inputStyle: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 30,
    alignSelf: "center",
  },
  button: {
    height: 42,
    width: 312,
    borderRadius: 8,
    backgroundColor: "#8D00FF",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  Logo: {
    height: 50,
    width: 180,
    marginTop: 50,
    alignSelf: "center",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Label: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
    color: "#2D0052",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    color: "#737373",
    fontWeight: "500",
  },
  checkbox: {
    borderColor: "rgba(18, 3, 58, 0.1)",
    opacity: 0.8,
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});
