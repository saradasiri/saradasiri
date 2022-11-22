import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/footer/footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";

const WalletLanding = (formik) => {
  const { values, errors, touched } = formik;
  const [isCreate, SetIsCreate] = useState(false);
  const [isClose, setClose] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const verifyPassword = () => {
    const obj = {
      password: values.password,
    };
    console.log(values.email + "\n" + obj.password);
    axios
      .post(API_PATHS.VALIDATE_PASSWORD + values.email, obj)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        res.data.message === "success " ? navigation.navigate("walletHome") : null;
      })
      .catch((err) => {
        if (err.message) {
          Toast.show({
            type: "info",
            text1: err.message,
          });
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          {/* <Toast position="bottom" topOffset={-100} /> */}
          <View style={{ marginTop: 200 }}>
            <TouchableOpacity
              onPress={() => {
                SetIsCreate(true);
                setClose(true);
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100, paddingBottom: 10 }}
              >
                <Text style={styles.buttonText}>Create Wallet</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("importWallet");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100, paddingBottom: 10 }}
              >
                <Text style={styles.buttonText}>Import Wallet</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <Modal isVisible={isCreate && isClose} style={styles.modalContainer}>
            <View>
              <Toast position="top" topOffset={-100} />
              <TouchableOpacity
                onPress={() => setClose(false)}
                style={[styles.passwordViewer, { left: 45, top: -30 }]}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../assets/close.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.modalLevel, { top: 0, zIndex:-1}]}>
                Confirm Your Password
              </Text>
              <View style={{ paddingTop: 40, paddingLeft: 10 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#33B7B0",
                    },
                  ]}
                >
                  Password
                </Text>
                <View>
                  <TextInput
                    name="password"
                    secureTextEntry={passwordVisibility}
                    placeholder="*****************"
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={values.password}
                    autoCapitalize="none"
                    style={[
                      styles.inputStyle3,
                      {
                        borderColor: "#33B7B0",
                      },
                    ]}
                  />
                  <Pressable
                    onPress={handlePasswordVisibility}
                    style={styles.passwordViewer}
                  >
                    <MaterialCommunityIcons
                      name={rightIcon}
                      size={22}
                      color="#7A869A"
                    />
                  </Pressable>
                </View>
                {errors.password && touched.password && (
                  <Text style={[styles.error, { top: -23 }]}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <Text style={styles.modalLevel}></Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Pressable
                  style={styles.modalButton}
                  disabled={!(formik.isValid && formik.dirty)}
                  onPress={() => {
                    verifyPassword();
                    // navigation.navigate("wallet");
                  }}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E68E1", "#33B9AF"]}
                    width={100}
                    height={50}
                    style={[
                      {
                        borderRadius: 100,
                        opacity:formik.isValid && formik.dirty  ?1:0.5,
                      },
                    ]}
                  >
                    <Text style={styles.buttonText}>Create</Text>
                  </LinearGradient>
                </Pressable>
              </View>
            </View>
          </Modal>
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
    marginTop: 120,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  Label2: {
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
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
    zIndex: -2,
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
    zIndex: -1,
  },
  modalContainer: {
    position: "absolute",
    marginTop: 180,
    width: 300,
    height: 350,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  modalLevel: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 40,
    textAlign: "center",
    color: "black",
  },
  modalButton: {
    borderRadius: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle3: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
  },
  text: {
    position: "absolute",
    top: 30,
    left: 25,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
});
export default WalletLanding;
