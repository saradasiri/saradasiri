import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../globalStyles";

const Refferal = () => {
  const navigation = useNavigation();
  const [paypal, setPaypal] = useState(false);

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
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  Referral ID
                </Text>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                  }}
                >
                  20258945662
                </Text>
              </View>
              <TouchableOpacity
               onPress={()=>{navigation.navigate('qrCode')}}
                style={{
                  backgroundColor: "#04BE7B",
                  padding: 15,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "NunitoSans_400Regular",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Invite Friends
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: "5%",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 15,
              marginTop: -50,
            }}
          >
            <View>
              <Text style={globalStyles.text}>Referral Link</Text>
              <Text
                style={[
                  globalStyles.text,
                  { justifyContent: "center", color: "#04BE7B" },
                ]}
              >
                www.vadiapp.com
              </Text>
            </View>
            <Image
              style={{ width: 35, height: 35, alignSelf: "center" }}
              source={require("../../assets/copy.png")}
            />
          </View>
          <View
            style={{
              width: "90%",
              backgroundColor: "#F1F3FA",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: "5%",
              padding: 12,
              borderRadius: 40,
              marginTop: 20,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 100, height: 100, alignSelf: "center" }}
              source={require("../../assets/logo5.png")}
            />
            <View>
              <Text
                style={[
                  globalStyles.text,
                  { justifyContent: "center", color: "#2D0052" },
                ]}
              >
                Invite friends{" "}
              </Text>
              <Text style={[globalStyles.text, { justifyContent: "center" }]}>
                Code LP867J{" "}
              </Text>
              <View
                style={{
                  backgroundColor: "#E1E3FF",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={[
                    globalStyles.text,
                    { justifyContent: "center", color: "#8D00FF" },
                  ]}
                >
                  Earn $200
                </Text>
              </View>
            </View>
            <Image
              style={{
                width: 25,
                height: 25,
                alignSelf: "center",
              }}
              source={require("../../assets/view.png")}
            />
          </View>
          <View
            style={{
              width: "90%",
              backgroundColor: "#F1F3FA",
              marginHorizontal: "5%",
              padding: 12,
              borderRadius: 40,
              marginTop: 20,
              elevation: 5,
            }}
          >
            <Image
              style={{
                alignSelf: "center",
              }}
              source={require("../../assets/Diagram.png")}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginTop: 50,
              }}
            >
              <Text style={[globalStyles.text, { justifyContent: "center" }]}>
                Earned
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    globalStyles.text,
                    {
                      justifyContent: "center",
                      color: "#2D0052",
                      marginRight: 5,
                    },
                  ]}
                >
                  $140
                </Text>
                <View
                  style={{
                    backgroundColor: "#E1E3FF",
                    paddingHorizontal: 8,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={[
                      globalStyles.text,
                      { justifyContent: "center", color: "#8D00FF" },
                    ]}
                  >
                    +3%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "rgba(18, 3, 58, 0.4)",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={[
                  globalStyles.text,
                  { padding: 10, justifyContent: "center" },
                ]}
              >
                Monthly deposit
              </Text>
              <Text
                style={[
                  globalStyles.text,
                  { padding: 10, justifyContent: "center", color: "#2D0052" },
                ]}
              >
                $200
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: "rgba(18, 3, 58, 0.4)",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={[
                  globalStyles.text,
                  { padding: 10, justifyContent: "center" },
                ]}
              >
                Manual topup
              </Text>
              <Text
                style={[
                  globalStyles.text,
                  { padding: 10, justifyContent: "center", color: "#2D0052" },
                ]}
              >
                $5060
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 90 }}></View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Refferal;

const styles = StyleSheet.create({});
