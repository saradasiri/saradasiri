import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Payment from "./payment";

const PaymentProcess = (funding) => {
  const initialValues = {
    email: funding.route.params.amount,
    transType: funding.route.params.transType,
    amount: funding.route.params.amount,
    cryptoType: funding.route.params.cryptoType,
    cardNo: "",
    expiry: "",
    name: "",
    cvv: "",
    paypal: "",
  };

  const validationSchema = Yup.object({
    cardNo: Yup.number()
      // .max(16)
      .typeError("you must specify a number")
      .test(
        "len",
        "Must be exactly 16 digits",
        (val) => val && val.toString().length === 16
      )
      .required("Card No cannot be blank"),
    expiry: Yup.string()
      .typeError("you must specify a number")
      // .test(
      //   'test-credit-card-expiration-date',
      //   'Invalid Expiration Date has past',
      //   expiry => {
      //     if (!expiry) {
      //       return false
      //     }

      //     const today = new Date()
      //     const monthToday = today.getMonth() + 1
      //     const yearToday = today
      //       .getFullYear()
      //       .toString()
      //       .substr(-2)

      //     const [month, expYear] = expiry.split(' / ')

      //     if (Number(expYear) < Number(yearToday)) {
      //       return false
      //     } else if (
      //       Number(month) < monthToday &&
      //       Number(expYear) <= Number(yearToday)
      //     ) {
      //       return false
      //     }

      //     return true
      //   }
      // )
      .test("test-expiry", ["Invalid Expiry"], (expiryMonth) => {
        if (!expiryMonth) {
          return false;
        }
        var parts = expiryMonth.split(" / ");
        var month = parts[0];
        var year = parts[1];

        if (Number(month) <= 12) {
          if (Number(month) > 0) {
            if (Number(year) <= new Date().getFullYear() + 5) {
              if (Number(year) >= new Date().getFullYear()) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
      .required("Expiry cannot be blank"),
    name: Yup.string().required("Name cannot be blank"),
    cvv: Yup.number()
      .typeError("you must specify a number")
      .required("CVV cannot be blank"),
    paypal: Yup.number().typeError("you must specify a number"),
    // .when(["cardNo"], {
    //   is: "",
    //   then: Yup.number()
    //     .typeError("you must specify a number")
    //     // .required("Paypal Account Number cannot be blank"),
    //   otherwise: null,
    //
  });

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <Payment {...formik} />}
    </Formik>
  );
};

export default PaymentProcess;

const styles = StyleSheet.create({});
