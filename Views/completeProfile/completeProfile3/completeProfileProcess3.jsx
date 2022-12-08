import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CompleteProfile3 from "./completeProfile3";

const CompleteProfileProcess3 = (values) => {
  const initialValues = {
    documentNo: "",
  };

  const validationSchema = Yup.object({
    documentNo: Yup.number().required("Document No cannot be blank"),
  });
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <CompleteProfile3 {...formik} />}
    </Formik>
  );
};

export default CompleteProfileProcess3;

const styles = StyleSheet.create({});
