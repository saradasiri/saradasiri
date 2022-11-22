import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Image,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import Modal from "react-native-modal";
function footer() {
  const [isprivacyNotice, setIsprivacyNotice] = React.useState(false);
  const termsDocModal = () => setIsprivacyNotice(() => !isprivacyNotice);
  
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
            <View style={{ marginLeft: 0 }}>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../../assets/Home1.png")}
                />
                <Text style={{ marginTop: 5, color:'#7A869A' }}>Home</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{ marginLeft: 50 }}>
              <TouchableOpacity onPress={termsDocModal}>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../../assets/Profile1.png")}
                />
                <Text style={{ marginTop: 5, color:'#7A869A' }}>Profile</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{ marginLeft: 50 }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../../assets/News.png")}
                />
                <Text style={{ marginTop: 5, color:'#7A869A' }}>News</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{ marginLeft: 50 }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../../assets/Settings.png")}
                />
                <Text style={{ marginTop: 5, color:'#7A869A' }}>Settings</Text>
              </TouchableOpacity>
            </View>
            <Modal
              isVisible={isprivacyNotice}
              style={[styles.modalContainer, { backgroundColor: "white" }]}
            >
              <Text
                style={[
                  styles.modalLevel,
                  {
                    fontSize: 19,
                    fontWeight: "bold",
                    marginTop: 20,
                  },
                ]}
              >
              Profile
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.text, { color: "#33B7B0", top: 0 }]}>
              Investment
            </Text>
            <View
              style={[
                styles.inputStyle2,
                {
                  borderColor: "#33B7B0",
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
                  values.range
                </Text>
              </View>

              <View style={[styles.totalText, { marginBottom: 20 }]}>
                <Text style={styles.personalText}>Monthly Investment :</Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.fund
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={[styles.text, { color: "#33B7B0" }]}>
              Personal Data
            </Text>
            <View
              style={[
                styles.inputStyle2,
                {
                  borderColor: "#33B7B0",
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
                  values.firstName
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Last Name : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.secondName
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Full Name : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.name
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Date of Birth : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.birth
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Country Of Birth : </Text>
                <Text
                 style={[styles.displayText,{width:130}]}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.countryBirth
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Nationality : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.countryCode
                </Text>
              </View>

              {/* {values.curp ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>CURP : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    values.curp
                  </Text>
                </View>
              ) : null} */}

              {/* {values.rfc ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>RFC : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    values.rfc
                  </Text>
                </View>
              ) : null} */}

              {/* {values.tax ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>Tax ID : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    values.tax
                  </Text>
                </View>
              ) : null} */}

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Phone Number : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.phone
                </Text>
              </View>

              {/* {values.occupation ? (
                <View style={styles.totalText}>
                  <Text style={styles.personalText}>Occupation : </Text>
                  <Text
                    style={styles.displayText}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  >
                    values.occupation
                  </Text>
                </View>
              ) : null} */}

              <View style={[styles.totalText, { marginBottom: 20 }]}></View>
            </View>
          </View>

          <View>
            <Text style={[styles.text, { color: "#33B7B0" }]}>Address</Text>
            <View
              style={[
                styles.inputStyle2,
                {
                  borderColor: "#33B7B0",
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
                  values.street
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>No. Exterior : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.inside
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>No. Inside : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.inside
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Postal Code : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.postalCode
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Colony : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.colony
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>Municipality : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.municipality
                </Text>
              </View>

              <View style={styles.totalText}>
                <Text style={styles.personalText}>State : </Text>
                <Text
                  style={styles.displayText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  values.state
                </Text>
              </View>

              <View style={[styles.totalText, { marginBottom: 20 }]}></View>
            </View>
          </View>

          {/* {values.range === "$0 - $9,999" ? null : (
            <View>
              <Text style={[styles.text, { color: "#33B7B0" }]}>Documents</Text>
              <View
                style={[
                  styles.inputStyle,
                  {
                    borderColor: "#33B7B0",
                  },
                ]}
              >
                <View style={[styles.totalText, { marginTop: 20 }]}>
                  <Text style={styles.personalText}>
                    {values.countryCode === "MX"
                      ? "Official ID front : "
                      : "Valid Passport : "}
                  </Text>
                    <Text
                      style={[styles.displayText, { width: 150 }]}
                      numberOfLines={1}
                      ellipsizeMode={"middle"}
                    >
                      {values.frontDoc.name}
                    </Text>
                </View>

                {values.behindDoc.name ? (
                  <View style={styles.totalText}>
                    <Text style={styles.personalText}>
                      Official ID Behind :
                    </Text>
                      <Text
                        style={[styles.displayText, { width: 150 }]}
                        numberOfLines={1}
                        ellipsizeMode={"middle"}
                      >
                        {values.behindDoc.name}
                      </Text>
                  </View>
                ) : null}

                <View style={styles.totalText}>
                  <Text style={styles.personalText}>
                    {values.countryCode === "MX"
                      ? "Identification number : "
                      : "Passport Number : "}
                  </Text>
                  <Text
                    style={[styles.displayText, { width: 150 }]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {values.documentNo}
                  </Text>
                </View>

                {values.addressDoc.name ? (
                  <View style={styles.totalText}>
                    <Text style={styles.personalText}>Proof of address : </Text>
                      <Text
                        style={[styles.displayText, { width: 150 }]}
                        numberOfLines={1}
                        ellipsizeMode={"middle"}
                      >
                        {values.addressDoc.name}
                      </Text>
                  </View>
                ) : null}

                <View style={[styles.totalText, { marginBottom: 20 }]}></View>
              </View>
            </View>
          )} */}

            </ScrollView>
            <Text style={styles.modalLevel}></Text>
            <Pressable
                style={[
                  styles.modalButton,
                  { marginBottom: 20, marginTop: -30 },
                ]}
                onPress={() => {
                  // setIsAccepted(true);
                  termsDocModal();
                }}
              >
                
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={250}
                height={50}
                style={[{ borderRadius: 100 }]}
              >
                <Text style={styles.buttonText}>Back</Text>
              </LinearGradient>
            </Pressable>
          </Modal>
          </View>
  )
}
const styles = StyleSheet.create({
footer: {
    flex:1,
    display: "flex",
    flexDirection: "row",
    // marginTop: 188,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    position:'absolute',
    bottom:0
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
  inputStyle2: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
    marginBottom: 40,
    width:300
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
  buttonText: {
    textAlign: "center",
    alignContent: "center",
    paddingTop: 10,
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
  },
  modalLevel: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 11,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 17,
    color: "black",
    padding: 20,
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
export default footer;