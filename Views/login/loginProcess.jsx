import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Login from "./login";
import RegisterLevel1 from "../registerLevel1";

const LoginProcess = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("correo electronico es requerido"),
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/,  "La contraseña debe tener una letra minúscula")
      .matches(/\w*[A-Z]\w*/,  "La contraseña debe tener una letra mayúscula")
      .matches(/\d/, "La contraseña debe tener un número")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/, "La contraseña debe tener un carácter especial")
      .min(8, ({ min }) => `La contraseña debe tener al menos 8 caracteres`)
      .required('se requiere contraseña'),
  });

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <RegisterLevel1 {...formik} />}
    </Formik>
  );
};

export default LoginProcess;

const styles = StyleSheet.create({});
