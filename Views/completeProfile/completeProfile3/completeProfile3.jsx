import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";

import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import Tabs1234 from "../../../src/tabs1234";
import { useSelector } from "react-redux";
import globalStyles from "../../../globalStyles";
import DocModal from "../../../src/docModal";

const CompleteProfile3 = (formik) => {
  const navigation = useNavigation();
  const { range, nationality } = useSelector((state) => state.userReducer);
  const { values, errors, touched } = formik;
  const [frontDoc, setFrontDoc] = useState([]);
  const [behindDoc, setBehindDoc] = useState([]);
  const [addressDoc, setAddressDoc] = useState([]);

  const [isFrontModalVisible, setIsFrontModalVisible] = React.useState(false);
  const [isBehindModalVisible, setIsBehindModalVisible] = React.useState(false);
  const [isAddressModalVisible, setIsAddressModalVisible] =
    React.useState(false);

  const frontDocModal = () =>
    setIsFrontModalVisible(() => !isFrontModalVisible);
  const behindDocModal = () =>
    setIsBehindModalVisible(() => !isBehindModalVisible);
  const addressDocModal = () =>
    setIsAddressModalVisible(() => !isAddressModalVisible);

  const pickFrontDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setFrontDoc(result);
  };
  const pickBehindDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setBehindDoc(result);
  };
  const pickAddressDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setAddressDoc(result);
  };

  useEffect(() => {
    frontDoc.name ? setFrontDoc("") : null;
    behindDoc.name ? setBehindDoc("") : null;
    addressDoc.name ? setAddressDoc("") : null;
  }, [range, nationality]);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    const profile3 = {
      frontDoc: frontDoc,
      behindDoc: behindDoc.name ? behindDoc : "",
      documentNo: values.documentNo,
      addressDoc: addressDoc.name ? addressDoc : "",
    };
    navigation.navigate("completeProfile4", profile3);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Tabs1234 range={range} value="3" />

          <View>
          <Text style={[globalStyles.Label, { textAlign: "center" }]}>Document upload</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <View
              style={[
                styles.button,
                {
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                },
              ]}
            >
              <Text style={styles.buttonText}>
                {nationality === "Mexican" ? (
                  <Text>Official ID Front</Text>
                ) : (
                  <Text>Valid Passport</Text>
                )}
              </Text>
            </View>
            <View
              style={[
                {
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  height: 150,
                  borderColor: "#2D0052",
                  borderWidth: 1,
                  top: -1,
                },
              ]}
            >
              <Pressable onPress={frontDocModal} disabled={!frontDoc.name}>
                <Text
                  style={[
                    styles.fileText,
                    { color: frontDoc.name ? "black" : "#6B6A6A" },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode={"middle"}
                >
                  {frontDoc.name
                    ? frontDoc.name
                    : "No Official ID Front Selected"}
                </Text>
              </Pressable>
              <View
                style={{ borderTopWidth: 1, borderColor: "#D9D9D9", top: 60 }}
              ></View>
              <View style={styles.Uploadbox}>
                <TouchableOpacity
                  onPress={() => {
                    setFrontDoc({});
                  }}
                >
                  <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pickFrontDocument}>
                  <View
                    style={[
                      { borderRadius: 100, marginTop: 5 },
                      {
                        opacity: 1,
                      },
                    ]}
                  >
                    <Text style={styles.uploadText}>Upload</Text>
                  </View>
                </TouchableOpacity>
                <DocModal
                  visible={isFrontModalVisible}
                  doc={frontDoc}
                  func={frontDocModal}
                />
              </View>
            </View>
          </View>
          {nationality === "Mexican" ? (
            <View style={{ marginTop: 40 }}>
              <View
                style={[
                  styles.button,
                  {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Official ID Behind</Text>
              </View>
              <View
                style={[
                  {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: 150,
                    borderColor: "#2D0052",
                    borderWidth: 1,
                    top: -1,
                  },
                ]}
              >
                <Pressable onPress={behindDocModal} disabled={!behindDoc.name}>
                  <Text
                    style={[
                      styles.fileText,
                      { color: behindDoc.name ? "black" : "#6B6A6A" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {behindDoc.name
                      ? behindDoc.name
                      : "No Official ID Behind Selected"}
                  </Text>
                </Pressable>

                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "#D9D9D9",
                    top: 60,
                  }}
                ></View>
                <View style={styles.Uploadbox}>
                  <TouchableOpacity
                    onPress={() => {
                      setBehindDoc({});
                    }}
                  >
                    <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={pickBehindDocument}>
                    <Text style={styles.uploadText}>Upload</Text>
                  </TouchableOpacity>
                  <DocModal
                    visible={isBehindModalVisible}
                    doc={behindDoc}
                    func={behindDocModal}
                  />
                </View>
              </View>
            </View>
          ) : null}

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                globalStyles.text,
                {
                  color:
                    errors.documentNo && touched.documentNo ? "red" : "#737373",
                },
              ]}
            >
              {nationality === "Mexican" ? (
                <Text>Identification Number </Text>
              ) : (
                <Text>Passport Number </Text>
              )}
            </Text>
            <View>
              <TextInput
                name="documentNo"
                placeholder="Document No"
                keyboardType="numeric"
                onChangeText={(text) => {
                  formik.handleChange("documentNo")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("documentNo")}
                value={values.documentNo}
                autoCapitalize="none"
                style={[
                  globalStyles.inputStyle,
                  {
                    borderColor:
                      errors.documentNo && touched.documentNo
                        ? "red"
                        : "rgba(18, 3, 58, 0.1)",
                  },
                ]}
              />
              {errors.documentNo && touched.documentNo && (
                <Text style={globalStyles.error}>{errors.documentNo}</Text>
              )}
            </View>
          </View>

          {range === "$10,000 - $59,999" ? null : (
            <View style={{ marginTop: 40 }}>
              <View
                style={[
                  styles.button,
                  {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    width: 322,
                    height: 50,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Proof of address</Text>
              </View>
              <View
                style={[
                  {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: 150,
                    borderColor: "#2D0052",
                    borderWidth: 1,
                    top: -1,
                  },
                ]}
              >
                <Pressable
                  onPress={addressDocModal}
                  disabled={!addressDoc.name}
                >
                  <Text
                    style={[
                      styles.fileText,
                      { color: addressDoc.name ? "black" : "#6B6A6A" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {addressDoc.name
                      ? addressDoc.name
                      : "No Proof of Address Selected"}
                  </Text>
                </Pressable>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "#D9D9D9",
                    top: 60,
                  }}
                ></View>
                <View style={styles.Uploadbox}>
                  <TouchableOpacity
                    onPress={() => {
                      setAddressDoc({});
                    }}
                  >
                    <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={pickAddressDocument}>
                    <View
                      style={[
                        { borderRadius: 100 },
                        {
                          opacity: 1,
                          width: 80,
                          height: 42,
                          marginTop: 5,
                        },
                      ]}
                    >
                      <Text style={styles.uploadText}>Upload</Text>
                    </View>
                  </TouchableOpacity>
                  <DocModal
                    visible={isAddressModalVisible}
                    doc={addressDoc}
                    func={addressDocModal}
                  />
                </View>
              </View>
            </View>
          )}
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              disabled={
                !(range === "$10,000 - $59,999"
                  ? (values.documentNo && frontDoc.name && behindDoc.name) ||
                    (nationality !== "Mexican" && values.documentNo && frontDoc.name)
                  : (values.documentNo &&
                      frontDoc.name &&
                      behindDoc.name &&
                      addressDoc.name) ||
                    (nationality !== "Mexican" &&
                      values.documentNo &&
                      frontDoc.name &&
                      addressDoc.name))
              }
              onPress={() => {
                handleFormSubmit(values);
              }}
            >
              <View
                style={[
                  globalStyles.button,
                  {
                    opacity:
                      (range === "$10,000 - $59,999" &&
                        values.documentNo &&
                        frontDoc.name &&
                        behindDoc.name) ||
                      (range === "$10,000 - $59,999" &&
                        values.documentNo &&
                        frontDoc.name &&
                        nationality !== "Mexican") ||
                      (values.documentNo &&
                        frontDoc.name &&
                        behindDoc.name &&
                        addressDoc.name) ||
                      (nationality !== "Mexican" &&
                        values.documentNo &&
                        frontDoc.name &&
                        addressDoc.name)
                        ? 1
                        : 0.5,
                  },
                ]}
              >
                <Text style={globalStyles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={[globalStyles.Logo, { marginBottom: 75 }]}
              source={require("../../../assets/vlogo.png")}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#2D0052",
    alignSelf: "center",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    color: "#737373",
    marginLeft: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 18,
    paddingTop: 16,
    textAlign: "left",
    left: 20,
  },
  Uploadbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    top: 70,
    left: -30,
  },
  fileText: {
    textAlign: "center",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    top: 30,
    left: 10,
    width: 250,
  },
  uploadText: {
    height: 36,
    width: 85,
    borderRadius: 8,
    backgroundColor: "#8D00FF",
    textAlign: "center",
    paddingTop: 8,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
export default CompleteProfile3;
