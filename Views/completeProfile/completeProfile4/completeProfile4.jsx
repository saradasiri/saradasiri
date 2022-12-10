import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
  Pressable,
} from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Modal from "react-native-modal";
import TermsConditions from "../../../src/termsConditions/termsConditions";
import { API_PATHS } from "../../../src/constants/apiPaths";
import Tabs1234 from "../../../src/tabs1234";
import { useSelector } from "react-redux";
import globalStyles from "../../../globalStyles";
import DocModal from "../../../src/docModal";
const CompleteProfile4 = (profile) => {
  const navigation = useNavigation();
  const {
    email,
    access_token,
    range,
    fund,
    lower,
    upper,
    firstName,
    lastName,
    name,
    birth,
    nationality,
    countryBirth,
    curp,
    rfc,
    tax,
    phone,
    occupation,
    countryCode,
    street,
    exterior,
    inside,
    postalCode,
    colony,
    municipality,
    state,
  } = useSelector((state) => state.userReducer);
  const [isNatural, setIsNatural] = useState(false);
  const [isGeo, setIsGeo] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
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

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  const [isTermsConditions, setIsTermsConditions] = React.useState(false);
  const termsDocModal = () => setIsTermsConditions(() => !isTermsConditions);

  if (!fontsLoad) {
    return null;
  }

  const docUpload = () => {
    if (profile.route.params.frontDoc.name) {
      const file = {
        uri: profile.route.params.frontDoc.uri,
        name: profile.route.params.frontDoc.name,
        type: profile.route.params.frontDoc.mimeType,
      };
      const body1 = new FormData();
      body1.append("file", file);
      const headers = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
      axios
        .post(API_PATHS.FRONT_DOC + email, body1, { headers: headers })
        .then(function (response) {
          console.log("image upload successfully", response.data);
        })
        .catch((error) => {
          console.log("error raised", error);
        });
    }

    if (profile.route.params.behindDoc.name) {
      const file = {
        uri: profile.route.params.behindDoc.uri,
        name: profile.route.params.behindDoc.name,
        type: profile.route.params.behindDoc.mimeType,
      };
      const body2 = new FormData();
      body2.append("file", file);
      const headers = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
      axios
        .post(API_PATHS.BACK_DOC + email, body2, { headers: headers })
        .then(function (response) {
          console.log("image upload successfully", response.data);
        })
        .catch((error) => {
          console.log("error raised", error);
        });
    }

    if (profile.route.params.addressDoc.name) {
      const file = {
        uri: profile.route.params.addressDoc.uri,
        name: profile.route.params.addressDoc.name,
        type: profile.route.params.addressDoc.mimeType,
      };
      const body3 = new FormData();
      body3.append("file", file);
      const headers = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };

      axios
        .post(API_PATHS.ADDRESS_DOC + email, body3, { headers: headers })
        .then(function (response) {
          console.log("image upload successfully", response.data);
        })
        .catch((error) => {
          console.log("error raised", error);
        });
    }

    navigation.navigate("walletHome");
  };

  const handleFormSubmit = () => {
    const obj = {
      range: range,
      fund: fund,
      lower: lower,
      upper: upper,
      fundAmount: Number(fund),
      firstName: firstName,
      lastName: lastName,
      fullName: name,
      dateOfBirth: birth.toISOString(),
      nationality: nationality,
      countryCode: countryCode,
      countryOfBirth: countryBirth,
      cURP: curp ? Number(curp) : 0,
      rFC: rfc ? Number(rfc) : 0,
      phoneNumber: Number(phone),
      tax: tax ? Number(tax) : 0,
      occupation: occupation ? occupation : " ",
      street: street,
      exterior: exterior,
      interior: inside,
      postalCode: Number(postalCode),
      colony: colony,
      muncipiality: municipality,
      state: state,
      documentNo:
        range === "$0 - $9,999"
          ? " "
          : profile.route.params.documentNo
          ? profile.route.params.documentNo
          : " ",
      isGeo: " ",
      isEmailVerified: true,
      isProfileCompleted: true,
    };
    axios
      .post(API_PATHS.CREATE_PROFILE + email, obj)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
          docUpload();
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message) {
          Toast.show({
            type: "info",
            text1: err.message,
          });
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Tabs1234 range={range} value={range === "$0 - $9,999" ? "3" : "4"} />

          <View>
            <Text style={[globalStyles.Label, { textAlign: "center" }]}>
              Confirmation
            </Text>
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text style={[styles.text, { color: "#8D00FF", top: 30 }]}>
              Investment
            </Text>
            <View
              style={[
                styles.inputStyle,
                {
                  borderColor: "#8D00FF",
                },
              ]}
            >
              <View style={[styles.totalText, { marginTop: 20 }]}>
                <Text style={styles.personalText}>Selected Range :</Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {range}
                </Text>
              </View>

              <View style={[styles.totalText, { marginBottom: 20 }]}>
                <Text style={styles.personalText}>Monthly Investment :</Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {fund}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={[styles.text, { color: "#8D00FF" }]}>
              Personal Data
            </Text>
            <View
              style={[
                styles.inputStyle,
                {
                  borderColor: "#8D00FF",
                },
              ]}
            >
              <View style={[styles.totalText, { marginTop: 20 }]}>
                <Text style={styles.personalText}>First Name : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {firstName}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Last Name : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {lastName}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Full Name : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {name}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Date of Birth : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {birth.toDateString()}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Country Of Birth : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {countryBirth}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>nationality : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {nationality}
                </Text>
              </View>

              {curp ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>CURP : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    {curp}{" "}
                  </Text>
                </View>
              ) : null}

              {rfc ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>RFC : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    {rfc}
                  </Text>
                </View>
              ) : null}

              {tax ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>Tax ID : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    {tax}
                  </Text>
                </View>
              ) : null}

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Phone Number : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {phone}
                </Text>
              </View>

              {occupation ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>Occupation : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    {occupation}
                  </Text>
                </View>
              ) : null}

              <View style={[styles.totalText, { marginBottom: 20 }]}></View>
            </View>
          </View>

          <View>
            <Text style={[styles.text, { color: "#8D00FF" }]}>Address</Text>
            <View
              style={[
                styles.inputStyle,
                {
                  borderColor: "#8D00FF",
                },
              ]}
            >
              <View style={[styles.totalText, { marginTop: 20 }]}>
                <Text style={styles.personalText}>Street : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {street}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>No. Exterior : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {exterior}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>No. Inside : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {inside}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Postal Code : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {postalCode}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Colony : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {colony}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Municipality : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {municipality}
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>State : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {state}
                </Text>
              </View>

              <View style={[styles.totalText, { marginBottom: 20 }]}></View>
            </View>
          </View>

          {range === "$0 - $9,999" ? null : (
            <View>
              <Text style={[styles.text, { color: "#8D00FF" }]}>Documents</Text>
              <View
                style={[
                  styles.inputStyle,
                  {
                    borderColor: "#8D00FF",
                  },
                ]}
              >
                <View style={[styles.totalText, { marginTop: 20 }]}>
                  <Text style={styles.personalText}>
                    {nationality === "Mexican"
                      ? "Official ID front : "
                      : "Valid Passport : "}
                  </Text>
                  <Pressable onPress={frontDocModal}>
                    <Text
                      style={[styles.displayText, { width: 150 }]}
                      numberOfLines={1}
                      ellipsizeMode={"middle"}
                    >
                      {profile.route.params.frontDoc.name}
                    </Text>
                  </Pressable>

                  <DocModal
                    visible={isFrontModalVisible}
                    doc={profile.route.params.frontDoc}
                    func={frontDocModal}
                  />
                </View>

                {profile.route.params.behindDoc.name ? (
                  <View style={styles.totalText}>
                    <Text style={styles.personalText}>
                      Official ID Behind :
                    </Text>
                    <Pressable onPress={behindDocModal}>
                      <Text
                        style={[styles.displayText, { width: 150 }]}
                        numberOfLines={1}
                        ellipsizeMode={"middle"}
                      >
                        {profile.route.params.behindDoc.name}
                      </Text>
                    </Pressable>
                    <DocModal
                      visible={isBehindModalVisible}
                      doc={profile.route.params.behindDoc}
                      func={behindDocModal}
                    />
                  </View>
                ) : null}

                <View style={styles.totalText}>
                  <Text style={styles.personalText}>
                    {nationality === "Mexican"
                      ? "Identification number : "
                      : "Passport Number : "}
                  </Text>
                  <Text
                    style={[styles.displayText, { width: 150 }]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {profile.route.params.documentNo}
                  </Text>
                </View>

                {profile.route.params.addressDoc.name ? (
                  <View style={styles.totalText}>
                    <Text style={styles.personalText}>Proof of address : </Text>
                    <Pressable onPress={addressDocModal}>
                      <Text
                        style={[styles.displayText, { width: 150 }]}
                        numberOfLines={1}
                        ellipsizeMode={"middle"}
                      >
                        {profile.route.params.addressDoc.name}
                      </Text>
                    </Pressable>
                    <DocModal
                      visible={isAddressModalVisible}
                      doc={profile.route.params.addressDoc}
                      func={addressDocModal}
                    />
                  </View>
                ) : null}

                <View style={[styles.totalText, { marginBottom: 20 }]}></View>
              </View>
            </View>
          )}

          <View style={styles.agreement}>
            <Checkbox
              style={globalStyles.checkbox}
              value={isNatural}
              onValueChange={setIsNatural}
              color={isNatural ? "#8D00FF" : undefined}
            />
            {/* <TouchableOpacity> */}
            <Text style={styles.agreementText}>
              I confirm that I am a natural person acting on my own account.
            </Text>
            {/* </TouchableOpacity> */}
          </View>

          <View style={styles.agreement}>
            <Checkbox
              style={globalStyles.checkbox}
              value={isGeo}
              onValueChange={setIsGeo}
              color={isGeo ? "#8D00FF" : undefined}
            />
            {/* <TouchableOpacity> */}
            <Text style={styles.agreementText}>
              I authorize my geolocation to be stored.
            </Text>
            {/* </TouchableOpacity> */}
          </View>

          <View style={styles.agreement}>
            <Checkbox
              style={globalStyles.checkbox}
              value={isAccepted}
              onValueChange={setIsAccepted}
              color={isAccepted ? "#8D00FF" : undefined}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.agreementText}>
                I have read and accept the
                <Pressable onPress={termsDocModal}>
                  <Text style={{ textDecorationLine: "underline" }}>
                    Terms and Conditions.
                  </Text>
                </Pressable>
              </Text>
            </View>
            <Modal
              isVisible={isTermsConditions}
              style={[styles.modalContainer, { backgroundColor: "white" }]}
            >
              <Text
                style={[
                  styles.modalLevel,
                  {
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 20,
                    marginTop: 20,
                  },
                ]}
              >
                Términos y Condiciones de Uso de
              </Text>
              <ScrollView>
                <Text style={[styles.modalLevel, { width: 300, fontSize: 11 }]}>
                  <TermsConditions />
                </Text>
              </ScrollView>
              <Pressable
                style={[
                  globalStyles.button,
                  { marginBottom: 20, marginTop: 20 },
                ]}
                onPress={() => {
                  setIsAccepted(true);
                  termsDocModal();
                }}
              >
                <Text style={globalStyles.buttonText}>Accept</Text>
              </Pressable>
            </Modal>
          </View>

          <TouchableOpacity
            disabled={!(isAccepted && isNatural && isGeo)}
            onPress={() => {
              handleFormSubmit();
            }}
            style={[
              globalStyles.button,
              { opacity: isAccepted && isNatural && isGeo ? 1 : 0.5 },
            ]}
          >
            <Text style={globalStyles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <Image
            style={[globalStyles.Logo, { marginBottom: 75 }]}
            source={require("../../../assets/vlogo.png")}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  totalText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#B9B9B9",
    borderWidth: 0.3,
    left: -11,
    paddingLeft: 6,
    paddingRight: 6,
  },
  personalText: {
    lineHeight: 27,
    color: "#4E68E1",
    fontFamily: "NunitoSans_400Regular",
  },
  displayText: {
    left: 10,
    width: 155,
    lineHeight: 27,
    color: "black",
    fontSize: 16,
    fontFamily: "NunitoSans_400Regular",
  },
  agreement: {
    left: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    marginBottom: 30,
  },
  agreementText: {
    top: -3,
    paddingLeft: 16,
    width: 290,
  },
  text: {
    position: "absolute",
    top: -10,
    left: 15,
    zIndex: 90,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "white",
    paddingHorizontal: 20,
    fontSize: 16,
  },
  inputStyle: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 600,
    resizeMode: "stretch",
  },
  modalButton: {
    borderRadius: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  modalContainer: {
    width: 322,
    height: 500,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
});
export default CompleteProfile4;
