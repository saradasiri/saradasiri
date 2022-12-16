import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Tabs1234 from "../../../src/tabs1234";
import { useDispatch, useSelector } from "react-redux";
import {
  addStreet,
  addExterior,
  addInside,
  addPostalCode,
  addColony,
  addMunicipality,
  addState,
} from "../../../src/redux/actions";
import globalStyles from "../../../globalStyles";

const CompleteProfile2 = (formik) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { range } = useSelector((state) => state.userReducer);

  const { values, errors, touched } = formik;
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    dispatch(addStreet(values.street));
    dispatch(addExterior(values.exterior));
    dispatch(addInside(values.inside));
    dispatch(addPostalCode(values.postalCode));
    dispatch(addColony(values.colony));
    dispatch(addMunicipality(values.municipality));
    dispatch(addState(values.state));
    if (range === "$0 - $9,999") {
      const profile = {
        frontDoc: "",
        behindDoc: "",
        documentNo: "",
        addressDoc: "",
      };
      navigation.navigate("completeProfile4", profile);
    } else {
      navigation.navigate("completeProfile3");
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Tabs1234 range={range} value="2" />

          <View>
          <Text style={[globalStyles.Label, { textAlign: "center" }]}>Home Address</Text>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.street && touched.street ? "red" : "#737373",
                },
              ]}>Street</Text>
            <View>
              <TextInput
                name="street"
                onChangeText={formik.handleChange("street")}
                onBlur={formik.handleBlur("street")}
                value={values.street}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.street && touched.street
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
            </View>
            {errors.street && touched.street && (
              <Text style={globalStyles.error}>{errors.street}</Text>
            )}
          </View>

          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.exterior && touched.exterior ? "red" : "#737373",
                },
              ]}>No. Exterior</Text>
              <TextInput
                name="exterior"
                keyboardType="numeric"
                onChangeText={(text) => {
                  formik.handleChange("exterior")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("exterior")}
                value={values.exterior}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    width: 135,
                    borderColor:
                      errors.exterior && touched.exterior
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
              {errors.exterior && touched.exterior && (
                <Text style={globalStyles.error}>{errors.exterior}</Text>
              )}
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.inside && touched.inside ? "red" : "#737373",
                },
              ]}>No. Interior</Text>
              <TextInput
                name="inside"
                keyboardType="numeric"
                onChangeText={(text) => {
                  formik.handleChange("inside")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("inside")}
                value={values.inside}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    width: 150,
                    borderColor:
                      errors.inside && touched.inside
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
              {errors.inside && touched.inside && (
                <Text style={globalStyles.error}>{errors.inside}</Text>
              )}
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.postalCode && touched.postalCode ? "red" : "#737373",
                },
              ]}>Postal Code</Text>
            <View>
              <TextInput
                name="postalCode"
                keyboardType="numeric"
                onChangeText={(text) => {
                  formik.handleChange("postalCode")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("postalCode")}
                value={values.postalCode}
                autoCapitalize="none"
                maxLength={6}
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.postalCode && touched.postalCode
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
            </View>
            {errors.postalCode && touched.postalCode && (
              <Text style={globalStyles.error}>{errors.postalCode}</Text>
            )}
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.colony && touched.colony ? "red" : "#737373",
                },
              ]}>Colony</Text>
            <View>
              <TextInput
                name="colony"
                onChangeText={formik.handleChange("colony")}
                onBlur={formik.handleBlur("colony")}
                value={values.colony}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.colony && touched.colony
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
            </View>
            {errors.colony && touched.colony && (
              <Text style={globalStyles.error}>{errors.colony}</Text>
            )}
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.municipality && touched.municipality ? "red" : "#737373",
                },
              ]}>Municipality</Text>
            <View>
              <TextInput
                name="municipality"
                onChangeText={formik.handleChange("municipality")}
                onBlur={formik.handleBlur("municipality")}
                value={values.municipality}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.municipality && touched.municipality
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
            </View>
            {errors.municipality && touched.municipality && (
              <Text style={globalStyles.error}>{errors.municipality}</Text>
            )}
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={[
                globalStyles.text,
                {
                  color:
                    errors.state && touched.state ? "red" : "#737373",
                },
              ]}>State</Text>
            <View>
              <TextInput
                name="state"
                onChangeText={formik.handleChange("state")}
                onBlur={formik.handleBlur("state")}
                value={values.state}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.state && touched.state
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
            </View>
            {errors.state && touched.state && (
              <Text style={globalStyles.error}>{errors.state}</Text>
            )}
          </View>

          <View style={{ marginBottom: 40 }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                handleFormSubmit(values);
              }}
              style={[
                globalStyles.button,
                {
                  marginTop: 50,
                },
                {
                  opacity: formik.isValid && formik.dirty ? 1 : 0.5,
                },
              ]}
            >
              <Text style={globalStyles.buttonText}>Next</Text>
            </TouchableOpacity>
            <Image
              style={[globalStyles.Logo, { marginBottom: 35 }]}
              source={require("../../../assets/vlogo.png")}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});
export default CompleteProfile2;
