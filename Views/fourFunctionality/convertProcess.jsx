import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Convert from "./convert";
import { API_PATHS } from "../../src/constants/apiPaths";
import axios from "axios";
const ConvertProcess = (login) => {
  const [data, setData] = useState([])
  const obj = {
  };
 

  const initialValues = {
    fromAmount:"",
    toAmount:"",
    fromCryptoType:"",
    toCryptoType:"",
    TransType:"",
  };

  const validationSchema = Yup.object({
  })

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <Convert {...formik} />}
    </Formik>
  );
};

export default ConvertProcess;

const styles = StyleSheet.create({});
