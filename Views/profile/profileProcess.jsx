import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileProcess = () => {
  const dispatch = useDispatch();
  const { email, password, access_token, phone, countryCode, name } = useSelector(
    (state) => state.userReducer
  );
  const initialValues = {
    username: name,
    phone: phone,
    email: email,
    password: password,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("correo electronico es requerido"),
    phone: Yup.string().required("correo electronico es requerido"),
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
      {(formik) => <Profile {...formik} />}
    </Formik>
  );
};

export default ProfileProcess;
