import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import {createRef} from 'react';
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import globalStyles from "../../globalStyles";
import CountryCodePicker from "../../src/countryCodePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  addAccessToken,
  addRange,
  addLower,
  addUpper,
  addFund,
  addFirstName,
  addLastName,
  addName,
  addBirth,
  addNationality,
  addCountryBirth,
  addCurp,
  addRfc,
  addTax,
  addPhone,
  addOccupation,
  addCountryCode,
  addStreet,
  addExterior,
  addInside,
  addPostalCode,
  addColony,
  addMunicipality,
  addState,
  addEmail,
  addPassword,
  addAccountAccessToken,
} from "../../src/redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = (formik) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { values, errors, touched } = formik;
  const [countryCode, setCountryCode] = useState("52");

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  const empty =""

  const Logout = async () => {
    dispatch(addAccessToken(""));
    dispatch(addEmail(""));
    dispatch(addPassword(""));
    dispatch(addAccountAccessToken(""));
    dispatch(addRange(""));
    dispatch(addLower(""));
    dispatch(addUpper(""));
    dispatch(addFund(""));
    dispatch(addFirstName(""));
    dispatch(addLastName(""));
    dispatch(addName(""));
    dispatch(addBirth(""));
    dispatch(addNationality(""));
    dispatch(addCountryBirth(""));
    dispatch(addCurp(""));
    dispatch(addRfc(""));
    dispatch(addTax(""));
    dispatch(addPhone(""));
    dispatch(addOccupation(""));
    dispatch(addCountryCode(""));
    dispatch(addStreet(""));
    dispatch(addExterior(""));
    dispatch(addInside(""));
    dispatch(addPostalCode(""));
    dispatch(addColony(""));
    dispatch(addMunicipality(""));
    dispatch(addState(""));
  await AsyncStorage.clear();
    
  console.log( await AsyncStorage.getItem("@userEmail"))
    if (await AsyncStorage.getItem("@userEmail") === null) {
      navigation.navigate("logout");
    }e
  };
  return (
    <View>
      <KeyboardAwareScrollView style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.MainContainer}>
          <StatusBar style="auto" />
{/* <Text>{AsyncStorage.getItem("@userEmail")}</Text> */}
          <View
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#270041",
              width: "100%",
              top: 0,
              height: 300,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 30,
                justifyContent: "space-between",
                top: 50,
                paddingBottom: 10,
                // marginLeft: 15,
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
            <Text
              style={{
                color: "#fff",
                marginTop: 10,
                // justifyContent: "center",
                textAlign: "center",
                top: 50,
                fontSize: 24,
                fontFamily: "NunitoSans_400Regular",
                marginLeft: 15,
                fontWeight: "700",
              }}
            >
              ¡Hola Hermenegildo!
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "#fff",
              marginHorizontal: 20,
              ...styles.shadow,
              borderRadius: 20,
              width: wp("86%"),
              justifyContent: "center",
              top: -80,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: "white",
                  borderRadius: 100,
                  borderColor: "grey",
                  borderWidth: 0.5,
                  top: -50,
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    alignSelf: "center",
                    tintColor: "#8D00FF",
                    opacity: 0.5,
                  }}
                  source={require("../../assets/profile.png")}
                ></Image>
              </View>
              <Image
                style={{ width: 35, height: 35, top: -90, left: 50 }}
                source={require("../../assets/editPic.png")}
              />
            </View>
            <View style={{ marginTop: -50 }}>
              <Text
                style={[
                  globalStyles.text,
                  {
                    color:
                      errors.username && touched.username ? "red" : "#737373",
                    marginLeft: 10,
                  },
                ]}
              >
                Nombre de Usuario
              </Text>
              <View>
                <TextInput
                  name="username"
                  onChangeText={formik.handleChange("username")}
                  onBlur={formik.handleBlur("username")}
                  value={values.username}
                  style={[
                    globalStyles.inputStyle,
                    {
                      width: "95%",
                      borderColor:
                        errors.username && touched.username
                          ? "red"
                          : "rgba(18, 3, 58, 0.1)",
                    },
                  ]}
                />
              </View>
              {errors.username && touched.username && (
                <Text style={[globalStyles.error, { marginLeft: 10 }]}>
                  {errors.username}
                </Text>
              )}
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text
                style={[
                  globalStyles.text,
                  {
                    color: errors.email && touched.email ? "red" : "#737373",
                    marginLeft: 10,
                  },
                ]}
              >
                Correo electrónico
              </Text>
              <View>
                <TextInput
                  name="email"
                  onChangeText={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={values.email}
                  style={[
                    globalStyles.inputStyle,
                    {
                      width: "95%",
                      borderColor:
                        errors.email && touched.email
                          ? "red"
                          : "rgba(18, 3, 58, 0.1)",
                    },
                  ]}
                />
              </View>
              {errors.email && touched.email && (
                <Text style={[globalStyles.error, { marginLeft: 10 }]}>
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={{ paddingTop: 20 }}>
              <Text
                style={[
                  globalStyles.text,
                  {
                    color: errors.phone && touched.phone ? "red" : "#737373",
                    marginLeft: 10,
                  },
                ]}
              >
                Número de teléfono
              </Text>
              <View style={{ alignSelf: "center", width: "95%" }}>
                <CountryCodePicker
                  withFilter
                  countryCode={values.phone}
                  withFlag
                  withCountryNameButton
                  withAlphaFilter={false}
                  withCountryButton={false}
                  withCallingCode
                  style={[
                    styles.input,
                    {
                      backgroundColor: "none",
                      borderColor:
                        errors.phone && touched.phone
                          ? "red"
                          : "rgba(18, 3, 58, 0.1)",
                    },
                  ]}
                  contact={values.phone}
                  onBlur={formik.handleBlur("phone")}
                  OnChangeCountryCode={(code) => {
                    setCountryCode(code.toString());
                  }}
                  onChangeTextValue={(text) => {
                    formik.handleChange("phone")(text.replace(/\D/g, ""));
                  }}
                />
              </View>
              {errors.phone && touched.phone && (
                <Text style={globalStyles.error}>{errors.phone}</Text>
              )}
            </View>

            <View style={{ paddingTop: 20 }}>
              <Text
                style={[
                  globalStyles.text,
                  {
                    color:
                      errors.password && touched.password ? "red" : "#737373",
                    marginLeft: 10,
                  },
                ]}
              >
                Contraseña
              </Text>
              <View>
                <TextInput
                  name="password"
                  secureTextEntry={true}
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={values.password}
                  style={[
                    globalStyles.inputStyle,
                    {
                      width: "95%",
                      borderColor:
                        errors.password && touched.password
                          ? "red"
                          : "rgba(18, 3, 58, 0.1)",
                    },
                  ]}
                />
              </View>
              <View></View>
              {errors.password && touched.password && (
                <Text style={[globalStyles.error, { marginLeft: 10 }]}>
                  {errors.password}
                </Text>
              )}
            </View>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                // handleFormSubmit(values);
              }}
              style={[
                globalStyles.button,
                {
                  opacity: formik.isValid && formik.dirty ? 1 : 0.5,
                  marginVertical: 30,
                  width: "95%",
                },
              ]}
            >
              <Text style={globalStyles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Logout()
                // handleFormSubmit(values);
              }}
              style={[
                globalStyles.button,
                {
                  marginVertical: 30,
                  width: "95%",
                },
              ]}
            >
              <Text style={globalStyles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
