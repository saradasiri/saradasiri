import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export const getHeight = (size) => {
  let height = Dimensions.get("window").height;
  return (height * size) / 1000;
};

export const getWidth = (size) => {
  let width = Dimensions.get("window").width;
  return (width * size) / 1000;
};

export const getfontSize = (val) => {
  return RFValue(val, 680);
};
