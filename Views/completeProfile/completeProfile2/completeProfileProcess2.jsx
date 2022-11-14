// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Formik, Field } from "formik";
// import * as Yup from "yup";
// import CompleteProfile2 from "./completeProfile2";

// const CompleteProfileProcess2 = (profile1) => {
//   const initialValues = {
//     street: "",
//     exterior: "",
//     inside: "",
//     postalCode: "",
//     colony: "",
//     municipality: "",
//     state: "",
//     email: profile1.route.params.email,
//     range: profile1.route.params.range,
//     fund: profile1.route.params.fund,
//     lower: profile1.route.params.lower,
//     upper: profile1.route.params.upper,
//     firstName: profile1.route.params.firstName,
//     secondName: profile1.route.params.secondName,
//     name: profile1.route.params.name,
//     birth: profile1.route.params.birth,
//     dateISO: profile1.route.params.dateISO,
//     nationality: profile1.route.params.nationality,
//     countryBirth: profile1.route.params.countryBirth,
//     curp: profile1.route.params.curp,
//     rfc: profile1.route.params.rfc,
//     tax: profile1.route.params.tax,
//     phone: profile1.route.params.phone,
//     occupation: profile1.route.params.occupation,
//     age: profile1.route.params.age,
//     countryCode : profile1.route.params.countryCode,
//     isTokenSubscribed: profile1.route.params.isTokenSubscribed,
//   };

//   const validationSchema = Yup.object({
//     street: Yup.string().required("Street cannot be blank"),
//     exterior: Yup.number().required("Exterior required"),
//     inside: Yup.number().required("Inside required"),
//     postalCode: Yup.number().required("Postal Code cannot be blank"),
//     colony: Yup.string().required("Colony cannot be blank"),
//     municipality: Yup.string().required("Municipality cannot be blank"),
//     state: Yup.string().required("Status cannot be blank"),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       enableReinitialize
//       validationSchema={validationSchema}
//     >
//       {(formik) => <CompleteProfile2 {...formik} />}
//     </Formik>
//   );
// };

// export default CompleteProfileProcess2;

// const styles = StyleSheet.create({});
