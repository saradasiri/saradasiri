import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import ConfirmEmail from "./confirmEmail";

const ConfirmEmailProcess = () => {
  const initialValues = {
    email: "",
    confirmEmail:""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("correo electronico es requerido"),
    confirmEmail: Yup.string().email("Email inválido").oneOf([Yup.ref("email"), null], "Correo electrónico debe coincidir").required("correo electronico es requerido"),
  })
  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <ConfirmEmail {...formik} />}
    </Formik>
  );
};

export default ConfirmEmailProcess;

const styles = StyleSheet.create({});
