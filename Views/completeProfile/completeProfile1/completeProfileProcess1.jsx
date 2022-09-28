import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";
import CompleteProfile1 from "./completeProfile1";

const CompleteProfileProcess1 = (accountLevel) => {
  const initialValues = {
    email: accountLevel.route.params.email,
    range: accountLevel.route.params.range,
    fund: "",
    upper: accountLevel.route.params.upper,
    lower: accountLevel.route.params.lower,
    firstName: "",
    secondName: "",
    name: "",
    curp: "",
    rfc: "",
    tax: "",
    countryBirth: "MX",
    nationality: "MX",
    phone: "",
    occupation: "",
    isTokenSubscribed: accountLevel.route.params.isTokenSubscribed,
  };

  const validationSchema = Yup.object({
    fund: Yup.number().required("Fund cannot be blank"),
    firstName: Yup.string().required("First Name cannot be blank"),
    secondName: Yup.string(),
    name: Yup.string().required("Name cannot be blank"),
    countryBirth: Yup.string(),
    curp: Yup.number().when(["countryBirth", "nationality"], {
      is: "MX",
      then: Yup.number().required("CURP cannot be blank"),
      otherwise: null,
    }),
    rfc: Yup.number().when(["countryBirth", "nationality"], {
      is: "MX",
      then: Yup.number().required("RFC cannot be blank"),
      otherwise: null,
    }),
    tax: Yup.number().when(["countryBirth", "nationality"], {
      is: "MX",
      then: null,
      otherwise: Yup.number().required("Tax cannot be blank"),
    }),
    occupation: Yup.string().when(["range"], {
      is: "$60,000 - $1,20,000",
      then: Yup.string().required("Occupation cannot be blank"),
      otherwise: null,
    }),
    phone: Yup.number()
      .test(
        "len",
        "Must be exactly 10 digits",
        (val) => val && val.toString().length === 10
      )
      .required("Phone Number cannot be blank"),
  });

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <CompleteProfile1 {...formik} />}
    </Formik>
  );
};

export default CompleteProfileProcess1;

const styles = StyleSheet.create({});
