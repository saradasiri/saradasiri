import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Share,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../globalStyles";
import QRCode from "react-native-qrcode-svg";
import * as Clipboard from "expo-clipboard";

const QrCode = () => {
  const navigation = useNavigation();
  const [paypal, setPaypal] = useState(false);
  const value = "https://vadi.ixiono.tech/api";
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(value);
    setCopiedText(value);
  };

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: value,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: -220,
            }}
          >
            <Image
              style={{
                width: 35,
                height: 35,
                alignSelf: "center",
                marginRight: 10,
              }}
              source={require("../../assets/Bitcoin.png")}
            />
            <Text
              style={{
                textAlign: "center",
                fontFamily: "NunitoSans_400Regular",
                color: "#fff",
                fontSize: 16,
                marginVertical: 50,
                fontWeight: "bold",
              }}
            >
              BTC
            </Text>
          </View>
          <View
            style={{
              // width: "70%",
              // height:'40%',
              marginHorizontal: "5%",
              backgroundColor: "white",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              padding: 30,
              borderRadius: 20,
            }}
          >
            <QRCode
              value={value}
              size={200}
              color="black"
              backgroundColor="white"
              logoSize={30}
              logoMargin={2}
              logoBorderRadius={15}
              logoBackgroundColor="yellow"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                copyToClipboard();
              }}
              style={{}}
            >
              <Text style={[globalStyles.text]}>
                {copiedText.length != 0 ? "Copied" : "Tap To Copy"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onShare();
              }}
              style={{ flexDirection: "row" }}
            >
              <Text style={[globalStyles.text]}>Share</Text>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: "center",
                  marginHorizontal: 10,
                }}
                source={require("../../assets/share.png")}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({});
