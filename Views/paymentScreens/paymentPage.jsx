import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Switch,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../globalStyles";
import { Formik, Field } from "formik";
import * as yup from "yup";

const PaymentPage = () => {
  const navigation = useNavigation();
  const [paypal, setPaypal] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const formik = { cardNo: "", name: "", cvv: "", expiry: "" };

  const loginValidationSchema = yup.object().shape({
    cardNo: yup.string().required("Card Number cannot be Blank"),
    name: yup.string().required("Card Holder Name cannot be Blank"),
    cvv: yup.string().required("CVV Required"),
    expiry: yup.string().required("Expiry Required"),
  });

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <View>
      <KeyboardAwareScrollView style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.MainContainer}>
          <StatusBar style="auto" />
          <View
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#270041",
              width: "100%",
              height: 300,
              paddingTop: 20,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 30,
                justifyContent: "space-between",
                paddingBottom: 10,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/leftArrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: "#fff",
                    fontWeight: "700",
                  },
                ]}
              >
                Price:
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#FFDE00",
                    fontWeight: "700",
                  },
                ]}
              >
                $456,89
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
                marginHorizontal: 30,
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: "#fff",
                    fontWeight: "700",
                  },
                ]}
              >
                Coin
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  BTC
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              marginHorizontal: "5%",
              borderRadius: 20,
              marginTop: -50,
            }}
          >
            <Image
              style={{
                width: "100%",
                borderRadius: 20,
                backgroundColor: "white",
              }}
              source={require("../../assets/atmCard.png")}
            />
            <View style={{ top: -135, paddingHorizontal: 20 }}>
              <Text style={styles.text}>DEBIT CARD</Text>
              <Text style={styles.text}>**** **** **** 4200</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={[styles.text, { color: "rgba(18, 3, 58, 0.4)" }]}
                  >
                    Card Name
                  </Text>
                  <Text style={styles.text}>Melvin Guerrero</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={[styles.text, { color: "rgba(18, 3, 58, 0.4)" }]}
                  >
                    Exp
                  </Text>
                  <Text style={styles.text}>01/25</Text>
                </View>
                <Image
                  style={{
                    width: 40,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: "white",
                    alignSelf: "flex-end",
                  }}
                  source={require("../../assets/chip.png")}
                />
              </View>
            </View>
          </View>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ cardNo: "", name: "", cvv: "", expiry: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={{ marginTop: -90 }}>
                  <Text
                    style={[
                      globalStyles.text,
                      { paddingLeft: 20 },
                      {
                        color:
                          errors.cardNo && touched.cardNo ? "red" : "#737373",
                      },
                    ]}
                  >
                    Card number
                  </Text>
                  <TextInput
                    name="cardNo"
                    // placeholder="Usuario"
                    onChangeText={handleChange("cardNo")}
                    onBlur={handleBlur("cardNo")}
                    value={values.cardNo}
                    isInvalid={touched.cardNo && errors.cardNo}
                    style={[
                      globalStyles.inputStyle,
                      {
                        borderColor:
                          errors.cardNo && touched.cardNo
                            ? "red"
                            : "rgba(18, 3, 58, 0.1)",
                      },
                    ]}
                  />
                  {errors.cardNo && touched.cardNo && (
                    <Text style={[globalStyles.error, { paddingLeft: 20 }]}>
                      {errors.cardNo}
                    </Text>
                  )}
                </View>
                <View style={{ paddingTop: 30 }}>
                  <Text
                    style={[
                      globalStyles.text,
                      { paddingLeft: 20 },
                      {
                        color: errors.name && touched.name ? "red" : "#737373",
                      },
                    ]}
                  >
                    Card Holder Name
                  </Text>
                  <TextInput
                    name="name"
                    // placeholder="Usuario"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    isInvalid={touched.name && errors.name}
                    style={[
                      globalStyles.inputStyle,
                      {
                        borderColor:
                          errors.name && touched.name
                            ? "red"
                            : "rgba(18, 3, 58, 0.1)",
                      },
                    ]}
                  />
                  {errors.name && touched.name && (
                    <Text style={[globalStyles.error, { paddingLeft: 20 }]}>
                      {errors.name}
                    </Text>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                  }}
                >
                  <View style={{ paddingTop: 30 }}>
                    <Text
                      style={[
                        globalStyles.text,
                        {
                          color: errors.cvv && touched.cvv ? "red" : "#737373",
                        },
                      ]}
                    >
                      CVC
                    </Text>
                    <TextInput
                      name="cvv"
                      // placeholder="Usuario"
                      onChangeText={handleChange("cvv")}
                      onBlur={handleBlur("cvv")}
                      value={values.cvv}
                      isInvalid={touched.cvv && errors.cvv}
                      style={[
                        globalStyles.inputStyle,
                        {
                          width: 150,
                          borderColor:
                            errors.cvv && touched.cvv
                              ? "red"
                              : "rgba(18, 3, 58, 0.1)",
                        },
                      ]}
                    />
                    {errors.cvv && touched.cvv && (
                      <Text style={globalStyles.error}>{errors.cvv}</Text>
                    )}
                  </View>
                  <View style={{ paddingTop: 30 }}>
                    <Text
                      style={[
                        globalStyles.text,
                        {
                          color:
                            errors.expiry && touched.expiry ? "red" : "#737373",
                        },
                      ]}
                    >
                      Expiry Date
                    </Text>
                    <TextInput
                      name="expiry"
                      // placeholder="Usuario"
                      onChangeText={handleChange("expiry")}
                      onBlur={handleBlur("expiry")}
                      value={values.expiry}
                      isInvalid={touched.expiry && errors.expiry}
                      style={[
                        globalStyles.inputStyle,
                        {
                          width: 150,
                          borderColor:
                            errors.expiry && touched.expiry
                              ? "red"
                              : "rgba(18, 3, 58, 0.1)",
                        },
                      ]}
                    />
                    {errors.expiry && touched.expiry && (
                      <Text style={globalStyles.error}>{errors.expiry}</Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    marginTop: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.text}>Save this card</Text>

                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ alignSelf: "center", marginTop: -8 }}
                  />
                </View>
                <TouchableOpacity
                  style={[
                    globalStyles.button,
                    { marginBottom: 65, marginTop: 20 },
                  ]}
                  //   disabled={pin.length != 4}
                  onPress={() => {
                    navigation.navigate("paymentStatus");
                  }}
                >
                  <Text style={globalStyles.buttonText}>Pay Now</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "NunitoSans_400Regular",
    // fontWeight: "700",
    color: "#232440",
  },
});
