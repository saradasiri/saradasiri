import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import WalletLanding from "./walletLanding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WalletLandingProcess = () => {
  const [email, setEmail] = useState("");
  const fetchEmail = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("@userEmail");
      setEmail(userEmail);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchEmail();
  }, []);

  const initialValues = {
    email: email,
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{};:,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <WalletLanding {...formik} />}
    </Formik>
  );
};

export default WalletLandingProcess;

const styles = StyleSheet.create({});
