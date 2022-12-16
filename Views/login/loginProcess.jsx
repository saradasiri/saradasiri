import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Login from "./login";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import { addEmail, addPassword } from "../../src/redux/actions";

const LoginProcess = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = async () => {
    const userEmail = await AsyncStorage.getItem("@userEmail");
    const userPassword = await AsyncStorage.getItem("@userPassword");

    if (userEmail !== "" && userPassword !== "") {
      dispatch(addEmail(userEmail));
      dispatch(addPassword(userPassword));
      navigation.navigate("tabs");
    }
  };

  const initialValues = {
    password: "",
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido")
      .required("correo electronico es requerido"),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "La contraseña debe tener una letra minúscula")
      .matches(/\w*[A-Z]\w*/, "La contraseña debe tener una letra mayúscula")
      .matches(/\d/, "La contraseña debe tener un número")
      .matches(
        /[!@#$%^&*()\-_"=+{};:,<.>]/,
        "La contraseña debe tener un carácter especial"
      )
      .min(8, ({ min }) => `La contraseña debe tener al menos 8 caracteres`)
      .required("se requiere contraseña"),
  });

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <Login {...formik} />}
    </Formik>
  );
};

export default LoginProcess;

const styles = StyleSheet.create({});
