import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/footer2/footer";
import { RadioButton } from "react-native-paper";

const Payment = (formik) => {
  const { values, errors, touched } = formik;
  const [checked, setChecked] = React.useState("paypal");

  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    values.paypal
      ? alert("Paypal Account No : " + values.paypal)
      : alert(
          "Card No : " +
          values.cardNo.replace(/\D/g, '') +
            "\nExpiry : " +
            values.expiry.replace(/\D/g, '')+
            "\nCVV : " +
            values.cvv +
            "\nName : " +
            values.name.trim()
        );
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Text style={[styles.Label1, { marginTop: 30, marginBottom: 20 }]}>
          Payment Methods
        </Text>
        <Text style={{textAlign:'center', marginBottom: 5 }}>Your Transaction Amount :  ${values.amount} {values.cryptoType}</Text>
        <View style={{ alignSelf: "flex-start", marginHorizontal: 10 }}>
          <View>
            <View style={{ marginBottom: -20 }}>
              <RadioButton
                value="paypal"
                label="First item"
                status={checked === "paypal" ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked("paypal");
                  formik.resetForm();
                }}
              />
              <View style={{ left: 40, top: -28 }}>
                <Text>Paypal</Text>
              </View>
            </View>

            <View style={{ marginBottom: -20 }}>
              <RadioButton
                value="crypto"
                status={checked === "crypto" ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked("crypto");
                  formik.resetForm();
                }}
              />
              <View style={{ left: 40, top: -28 }}>
                <Text>Crypto</Text>
              </View>
            </View>

            <RadioButton
              value="card"
              status={checked === "card" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("card");
                formik.resetForm();
              }}
            />
            <View style={{ left: 40, top: -28 }}>
              <Text>Credit/Debit Card</Text>
            </View>
          </View>
        </View>
        {checked === "paypal" ? (
          <View>
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: errors.paypal && touched.paypal ? "red" : "#33B7B0",
                  },
                ]}
              >
                Paypal Account Number
              </Text>
              <View>
                <TextInput
                  name="paypal"
                  placeholder="xxxxxxxxxxx"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={formik.handleChange("paypal")}
                  onBlur={formik.handleBlur("paypal")}
                  value={values.paypal}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.paypal && touched.paypal ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.paypal && touched.paypal && (
                <Text style={[styles.error, { left: 0 }]}>{errors.paypal}</Text>
              )}
            </View>
          </View>
        ) : null}

        {checked === "crypto" ? (
          <View>
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      errors.cryptoAddress && touched.cryptoAddress
                        ? "red"
                        : "#33B7B0",
                  },
                ]}
              >
                Crypto Address
              </Text>
              <View>
                <TextInput
                  name="cryptoAddress"
                  placeholder="xxxxxxxxxxx"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={formik.handleChange("cryptoAddress")}
                  onBlur={formik.handleBlur("cryptoAddress")}
                  value={values.cryptoAddress}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.cryptoAddress && touched.cryptoAddress
                          ? "red"
                          : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.cryptoAddress && touched.cryptoAddress && (
                <Text style={[styles.error, { left: 0 }]}>
                  {errors.cryptoAddress}
                </Text>
              )}
            </View>
          </View>
        ) : null}

        {checked === "card" ? (
          <View>
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    // top: -10,
                    color: errors.cardNo && touched.cardNo ? "red" : "#33B7B0",
                  },
                ]}
              >
                Card Number
              </Text>
              <View>
                
                <TextInput
                  name="cardNo"
                  keyboardType="numeric"
                  // maxLength={22}
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  placeholder="xxxx xxxx xxxx xxxx"
                  // onChangeText={formik.handleChange("cardNo")}
                  onChangeText={(text) =>  {formik.handleChange("cardNo")
                  (
                    text
                    .replace(/\D/g, "")
                    .replace(/\s?/g, '')
                  .replace(/(\d{4})/g, '$1  ')
                  .trim()
                  )}}
                  onBlur={formik.handleBlur("cardNo")}
                  value={values.cardNo}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.cardNo && touched.cardNo ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.cardNo && touched.cardNo && (
                <Text style={[styles.error, { left: 0 }]}>{errors.cardNo}</Text>
              )}
            </View>

            <View
              style={{
                paddingTop: 40,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={[
                    styles.text,
                    {
                      top: -10,
                      left: 15,
                      color:
                        errors.expiry && touched.expiry ? "red" : "#33B7B0",
                    },
                  ]}
                >
                  Expiry
                </Text>
                <TextInput
                  name="expiry"
                  placeholder="MM / YY"
                  keyboardType="numeric"
                  // maxLength={7}
                  // onChangeText={formik.handleChange("expiry")}
                  onChangeText={(text) =>  {formik.handleChange("expiry")
                  (
                    text
                    .replace(/\D/g, "")
                    .replace(/\s?/g, '')
                  .replace(/(\d{2})/, '$1 / ')
                  .trim()
                  )}}
                  onBlur={formik.handleBlur("expiry")}
                  value={values.expiry}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      width: 150,
                      marginRight: 20,
                      borderColor:
                        errors.expiry && touched.expiry ? "red" : "#33B7B0",
                    },
                  ]}
                />
                {errors.expiry && touched.expiry && (
                  <Text style={styles.error}>{errors.expiry}</Text>
                )}
              </View>

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={[
                    styles.text,
                    {
                      top: -10,
                      left: 15,
                      color: errors.cvv && touched.cvv ? "red" : "#33B7B0",
                    },
                  ]}
                >
                  CVV
                </Text>
                <TextInput
                  name="cvv"
                  secureTextEntry={true}
                  placeholder="****"
                  keyboardType="numeric"
                  maxLength={4}
                  // onChangeText={formik.handleChange("cvv")}
                  onChangeText={(text) =>  {formik.handleChange("cvv")
                  (
                    text
                    .replace(/\D/g, "")
                  .trim()
                  )}}
                  onBlur={formik.handleBlur("cvv")}
                  value={values.cvv}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      width: 150,
                      borderColor:
                        errors.cvv && touched.cvv ? "red" : "#33B7B0",
                    },
                  ]}
                />
                {errors.cvv && touched.cvv && (
                  <Text style={styles.error}>{errors.cvv}</Text>
                )}
              </View>
            </View>

            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: errors.name && touched.name ? "red" : "#33B7B0",
                  },
                ]}
              >
                Full Name
              </Text>
              <View>
                <TextInput
                  name="name"
                  placeholder="Juan gonzalez garcia"
                  onChangeText={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={values.name}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.name && touched.name ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.name && touched.name && (
                <Text style={[styles.error, { left: 0 }]}>{errors.name}</Text>
              )}
            </View>
          </View>
        ) : null}

        <View
          style={{
            marginBottom: 115,
            marginTop: checked === "paypal" || checked === "crypto" ? 200 : 20,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            disabled={
              !(
                formik.isValid && formik.dirty 
              )
            }
            onPress={() => {
              handleFormSubmit(values);
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4E68E1", "#33B9AF"]}
              width={322}
              height={50}
              style={[
                { borderRadius: 100 },
                {
                  opacity:
                  formik.isValid && formik.dirty 

                      ? 1
                      : 0.5,
                },
              ]}
            >
              <Text style={styles.buttonText}>Proceed</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Label1: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  Label2: {
    color: "#FE4040",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
    fontWeight: "bold",
    fontStyle: "normal",
    marginTop: 25,
  },
  Label3: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 188,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },
  inputStyle: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
    alignSelf: "center",
  },
  inputBox: {
    display: "flex",
    flexDirection: "row",
  },
  modalLevel: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 37,
    textAlign: "center",
  },
  image: {
    margin: 60,
    marginLeft: 50,
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
    // alignSelf:'flex-start'
  },
});
export default Payment;
