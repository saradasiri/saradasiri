import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CompleteProfile3 from "./completeProfile3";

const CompleteProfileProcess3 = (values) => {
  const initialValues = {
    documentNo: "",
    email: values.route.params.email,
    range: values.route.params.range,
    fund: values.route.params.fund,
    lower: values.route.params.lower,
    upper: values.route.params.upper,
    firstName: values.route.params.firstName,
    secondName: values.route.params.secondName,
    name: values.route.params.name,
    gender: values.route.params.gender,
    birth: values.route.params.birth,
    dateISO:values.route.params.dateISO,
    nationality: values.route.params.nationality,
    countryBirth: values.route.params.countryBirth,
    curp: values.route.params.curp ? values.route.params.curp : "",
    rfc: values.route.params.rfc ? values.route.params.rfc : "",
    tax: values.route.params.tax ? values.route.params.tax : "",
    phone: values.route.params.phone,
    occupation: values.route.params.occupation
      ? values.route.params.occupation
      : "",
    age: values.route.params.age,
    street: values.route.params.street,
    exterior: values.route.params.exterior,
    inside: values.route.params.inside,
    postalCode: values.route.params.postalCode,
    colony: values.route.params.colony,
    municipality: values.route.params.municipality,
    state: values.route.params.state,
    countryCode : values.route.params.countryCode,
    isTokenSubscribed: values.route.params.isTokenSubscribed,
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
