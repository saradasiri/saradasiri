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
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
// import Footer from "../../src/footer/footer";
import SwitchSelector from "react-native-switch-selector";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_PATHS } from "../../src/constants/apiPaths";
import axios from "axios";
import Toast from "react-native-toast-message";

const Funding = (formik) => {
  const { values, errors, touched } = formik;
  const [isFrontModalVisible, setIsFrontModalVisible] = React.useState(true);
  const [isSubscribe, setIsSubscribe] = React.useState(
    values.isTokenSubscribed
  );
  const [isClose, setClose] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isAmount, setIsAmount] = React.useState(false);
  const [rightIcon, setRightIcon] = useState("eye");
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const amountDocModal = () => setIsAmount(() => !isAmount);
  const [password, setPassword] = useState("");

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }

  const navigation = useNavigation();
  const [transType, setTransType] = useState("deposit");
  const frontDocModal = () => {
    setIsFrontModalVisible(() => !isFrontModalVisible);
    setClose(true);
  };

  const subscribeDocModal = () => setIsSubscribe(() => !isSubscribe);
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }

  const validateUser = () => {
    const obj = {
      password: values.password,
    };
    axios
      .post(API_PATHS.VALIDATE_PASSWORD + values.email, obj)
      .then((res) => {
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        if (res.data.message === "success ") {
          subscribeSubmit();
        }
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

  const subscribeSubmit = () => {
    axios
      .post(
        `https://apiforvadi.herokuapp.com/api/investor/token-subscription/${values.email} `
      )
      .then((res) => {
        Toast.show({
          type: "info",
          text1: res.data.message,
        });

        if (
          res.data.message === "subscription success " ||
          res.data.message === "Already subscribed"
        ) {
          setIsToggle(true);
        }
      })
      .catch((error) => console.log(error));
  };

  const profile = {
    email: values.email,
    nationality: values.nationality,
    transType: transType,
    amount: values.amount,
    cryptoType: values.cryptoType,
  };
  const handleFormSubmit = (value) => {
    if (values.amount > values.upper) {
      if (
        values.range === "$0 - $9,999" ||
        values.range === "$10,000 - $59,999"
      ) {
        amountDocModal();
      } else {
        Toast.show({
          type: "info",
          text1: `Your Investment Range is : \n${values.range}`,
        });
      }
    }
    if (values.amount < 100) {
      if (values.range === "$0 - $9,999") {
        Toast.show({
          type: "info",
          text1: "Minimum Amount is 100",
        });
      }
    }
    if (values.amount < values.lower) {
      Toast.show({
        type: "info",
        text1: `Your Investment Range is : \n${values.range}`,
      });
    }
    if (
      values.amount >= values.lower &&
      values.amount >= 100 &&
      values.amount <= values.upper
    ) {
      navigation.navigate("payment", profile);
    }
    if (values.range === undefined) {
      Alert.alert("Please Create your Profile First.");
      const login1 = {
        email: values.email,
        isTokenSubscribed: values.isTokenSubscribed,
      };
      navigation.navigate("accountLevel", login1);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Toast position="top" topOffset={28} />
        <Text style={{ textAlign: "center", marginTop: 5 }}>
          {isSubscribe ? "Subscribed" : "Not Subscribed"}
        </Text>

        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
        <Text style={[styles.Label1, { marginTop: 62 }]}>Funding</Text>
        <Text style={styles.Label1}>Deposits and withdrawal</Text>

        <Text style={styles.Label2}>
          $ {values.totalAmountFunded ? totalAmountFunded : 0} MXN
        </Text>
        <Text style={styles.Label3}>Available Balance</Text>
        <View style={{ marginTop: 25, width: 300, alignSelf: "center" }}>
          <TouchableOpacity>
            <SwitchSelector
              initial={0}
              onPress={(value) => setTransType(value)}
              textColor="#ffff"
              selectedColor="#FFFF"
              backgroundColor="#2BD1A0"
              buttonColor="#4630EB"
              borderColor="#2BD1A0"
              hasPadding
              options={[
                { label: "Deposit", value: "deposit" },
                { label: "Withdraw", value: "withdraw" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.inputBox, { alignSelf: "center" }]}>
          <TextInput
            name="amount"
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(text) => {
              formik.handleChange("amount")(text.replace(/\D/g, ""));
            }}
            onBlur={formik.handleBlur("amount")}
            value={values.amount}
            autoCapitalize="none"
            style={[
              styles.inputStyle1,
              {
                borderColor: "#33B7B0",
              },
            ]}
          />

          <Pressable onPress={open} style={styles.inputStyle2}>
            <View
              style={[
                styles.inputBox,
                {
                  alignItems: "center",
                  alignSelf: "center",
                },
              ]}
            >
              <Text
                style={{ marginRight: 40, marginLeft: 30, width: 40, top: -2 }}
              >
                {values.cryptoType ? values.cryptoType : "Select"}
              </Text>
              <Picker
                ref={pickerRef}
                selectedValue={values.cryptoType}
                onValueChange={formik.handleChange("cryptoType")}
                onBlur={formik.handleBlur("occupation")}
                value={values.occupation}
              >
                <Picker.Item
                  label="              - - - Select Crypto Coins - - -"
                  value=""
                />
                <Picker.Item label="BTC" value="BTC" />
                <Picker.Item label="ETH" value="ETH" />
                <Picker.Item label="MXN" value="MXN" />
              </Picker>
            </View>
          </Pressable>
        </View>

        {values.amount && values.cryptoType ? (
          <View style={{ marginTop: 130, alignSelf: "center" }}>
            <TouchableOpacity
              disabled={!(values.amount && values.cryptoType)}
              onPress={() => {
                handleFormSubmit();
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Text></Text>
        )}

        <Modal isVisible={isFrontModalVisible} style={styles.modalContainer}>
          <Image
            style={{ marginBottom: 40 }}
            source={require("../../assets/vlogo.png")}
          />
          <Text style={[styles.modalLevel, { marginTop: 50 }]}>
            Welcome to the
          </Text>
          <Text style={[styles.modalLevel, { marginBottom: 50 }]}>
            Vadi Community
          </Text>
          <Text style={styles.modalLevel}></Text>
          <Pressable style={styles.modalButton} onPress={frontDocModal}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4E68E1", "#33B9AF"]}
              width={250}
              height={50}
              style={[{ borderRadius: 100 }]}
            >
              <Text style={styles.buttonText}>Start</Text>
            </LinearGradient>
          </Pressable>
        </Modal>

        <KeyboardAwareScrollView>
          <ScrollView contentContainerStyle={styles.MainContainer}>
            <Modal
              isVisible={!isSubscribe && isClose}
              style={styles.modalContainer}
            >
              {!isToggle ? (
                <View>
                  <Toast position="bottom" bottomOffset={55} />
                  <TouchableOpacity
                    onPress={() => setClose(false)}
                    style={styles.passwordViewer}
                  >
                    {/* <Image
                      style={{ width: 30, height: 30, left: 35, top: 10 }}
                      source={require("../../assets/close.png")}
                    /> */}
                  </TouchableOpacity>
                  <Text style={[styles.modalLevel, { top: 0 }]}>
                    Token subscription
                  </Text>
                  <View style={styles.agreement}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#33B7B0" : undefined}
                    />

                    <Text style={styles.agreementText}>
                      I have read and agree that by acquiring and subscribing to
                      Vadi tokens, I acknowledge my character as an investor of
                      Vadi Hodl SAPI de CV
                    </Text>
                  </View>
                  <View style={{ paddingTop: 40, paddingLeft: 10 }}>
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            errors.password && touched.password
                              ? "red"
                              : "#33B7B0",
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
                            borderColor:
                              errors.password && touched.password
                                ? "red"
                                : "#33B7B0",
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
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Pressable
                      style={styles.modalButton}
                      onPress={
                        values.password && isChecked ? validateUser : null
                      }
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
                            opacity: values.password && isChecked ? 1 : 0.5,
                          },
                        ]}
                      >
                        <Text style={styles.buttonText}>Accept</Text>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              ) : (
                <View>
                  <Text
                    style={[
                      styles.modalLevel,
                      { fontSize: 18, padding: 10, fontWeight: "600" },
                    ]}
                  >
                    Congratulations you are now part of Vadi! You will receive
                    in your mail information that will be useful to you.
                  </Text>
                  <Pressable
                    style={styles.modalButton}
                    onPress={subscribeDocModal}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#4E68E1", "#33B9AF"]}
                      width={200}
                      height={50}
                      style={[{ marginTop: 50, borderRadius: 100, opacity: 1 }]}
                    >
                      <Text style={styles.buttonText}>Continue</Text>
                    </LinearGradient>
                  </Pressable>
                </View>
              )}
            </Modal>
          </ScrollView>
        </KeyboardAwareScrollView>

        <Modal isVisible={isAmount} style={styles.modalContainer}>
          <Text style={[styles.modalLevel, { top: -50 }]}>Attention!</Text>
          <Text
            style={[
              styles.modalLevel,
              { fontSize: 18, padding: 10, fontWeight: "600" },
            ]}
          >
            To proceed with this funding, you need to share some additional
            information with us.
          </Text>
          <Text style={styles.modalLevel}></Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable style={styles.modalButton} onPress={amountDocModal}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={100}
                height={50}
                style={[{ borderRadius: 100 }]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              style={[styles.modalButton, { paddingLeft: 20 }]}
              onPress={() => {
                setIsAmount(() => !isAmount);
                navigation.navigate("additonalDoc", profile);
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={100}
                height={50}
                style={[{ borderRadius: 100 }]}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
      {/* <Footer /> */}
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
    textAlign: "center",
  },
  button: {
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#00BFFF",
    alignSelf: "center",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  Label3: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
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
  Logo: {
    height: 50,
    width: 180,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: -30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle1: {
    marginTop: 28,
    height: 50,
    width: 230,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#33B7B0",
    paddingLeft: 30,
  },
  inputStyle2: {
    marginTop: 28,
    height: 50,
    width: 100,
    borderWidth: 1,
    left: -1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#33B7B0",
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
  modalContainer: {
    position: "absolute",
    marginTop: 140,
    width: 300,
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  agreement: {
    top: 30,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    justifyContent: "center",
    marginBottom: 50,
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 6,
    top: 5,
  },
  agreementText: {
    paddingLeft: 20,
    width: 250,
    fontSize: 16,
    fontFamily: "NunitoSans_400Regular",
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
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
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
});
export default Funding;
