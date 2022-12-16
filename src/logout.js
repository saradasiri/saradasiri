import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAccessToken,
  addRange,
  addLower,
  addUpper,
  addFund,
  addFirstName,
  addLastName,
  addName,
  addBirth,
  addNationality,
  addCountryBirth,
  addCurp,
  addRfc,
  addTax,
  addPhone,
  addOccupation,
  addCountryCode,
  addStreet,
  addExterior,
  addInside,
  addPostalCode,
  addColony,
  addMunicipality,
  addState,
  addEmail,
  addPassword,
  addAccountAccessToken,
} from "./redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import LoginProcess from "../views/login/loginProcess";
import App from "../App";

const Logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const LogoutFunction = async () => {
    dispatch(addAccessToken(""));
    dispatch(addEmail(""));
    dispatch(addPassword(""));
    dispatch(addAccountAccessToken(""));
    dispatch(addRange(""));
    dispatch(addLower(""));
    dispatch(addUpper(""));
    dispatch(addFund(""));
    dispatch(addFirstName(""));
    dispatch(addLastName(""));
    dispatch(addName(""));
    dispatch(addBirth(""));
    dispatch(addNationality(""));
    dispatch(addCountryBirth(""));
    dispatch(addCurp(""));
    dispatch(addRfc(""));
    dispatch(addTax(""));
    dispatch(addPhone(""));
    dispatch(addOccupation(""));
    dispatch(addCountryCode(""));
    dispatch(addStreet(""));
    dispatch(addExterior(""));
    dispatch(addInside(""));
    dispatch(addPostalCode(""));
    dispatch(addColony(""));
    dispatch(addMunicipality(""));
    dispatch(addState(""));

    await AsyncStorage.clear();
    // navigation.navigate("login");
  };
  return (
    <>
      {LogoutFunction}
      <App />
    </>
  );
};

export default Logout;

const styles = StyleSheet.create({});
