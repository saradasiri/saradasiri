import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CompleteProfile2 from "./completeProfile2";

const CompleteProfileProcess2 = () => {
  const initialValues = {
    street: "",
    exterior: "",
    inside: "",
    postalCode: "",
    colony: "",
    municipality: "",
    state: "",
  };

  const validationSchema = Yup.object({
    street: Yup.string().required("Street cannot be blank"),
    exterior: Yup.number().required("Exterior required"),
    inside: Yup.number().required("Inside required"),
    postalCode: Yup.number().required("Postal Code cannot be blank"),
    colony: Yup.string().required("Colony cannot be blank"),
    municipality: Yup.string().required("Municipality cannot be blank"),
    state: Yup.string().required("Status cannot be blank"),
  });

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <CompleteProfile2 {...formik} />}
    </Formik>
  );
};

export default CompleteProfileProcess2;
