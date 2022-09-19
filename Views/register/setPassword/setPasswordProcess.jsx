import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import SetPassword from "./setPassword";

const SetPasswordProcess = () => {
  const initialValues = {
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
    .required("se requiere contraseña")
    .min(8, ({ min }) => `Mínimo 8 caracteres`)
    .matches(/\w*[A-Z]\w*/, "Una mayúscula")
    .matches(/\w*[a-z]\w*/, "Una minúscula")
      .matches(/\d/, "Un número")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/,"Un símbolo")
  })
  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <SetPassword {...formik} />}
    </Formik>
  );
};

export default SetPasswordProcess;

const styles = StyleSheet.create({});
