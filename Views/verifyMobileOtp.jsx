import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from "react-native-confirmation-code-field";
import {
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
} from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

import * as Progress from "react-native-progress";
import globalStyles from "../globalStyles";
import { getfontSize, getHeight, getWidth } from "../src/Dimentions/DImentions";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: getfontSize(30),
    color: "#0c2b77",
    fontWeight: "700",
    fontFamily: "NunitoSans_400Regular_Italic",
  },
  sendText: {
    textAlign: "center",
    fontSize: getfontSize(14),
    color: "#0c2b77",
    marginBottom: getHeight(50),
    fontWeight: "500",
    fontFamily: "NunitoSans_400Regular",
  },
  codeFieldRoot: {
    // height: getHeight(30),
    marginTop: getHeight(40),
  },
  Logo: {
    height: getHeight(70),
    width: getWidth(500),
    marginTop: getHeight(250),
    alignSelf: "center",
  },
  cell: {
    width: 40,
    height: 40,
    fontSize: getfontSize(20),
    borderWidth: 2,
    borderColor: "#e0e0e0",
    textAlign: "center",
    borderRadius: 8,
    color: "#0c2b77",
    // lineHeight: getHeight(70),
  },

  focusCell: {
    borderColor: "#0c2b77",
  },
});

const CELL_COUNT = 4;
const CELL_SIZE = 60;

const VerifyMobile = (props) => {
  let route = props.route;
  let navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState(
    route.params?.contactNumber ?? ""
  );
  const [countryCode, setCountryCode] = useState(
    route.params?.countryCode ?? ""
  );
  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
  });

  if (!fontsLoad) {
    return null;
  }

  // useEffect(() => {
  //   if (value.length === 4) {
  //     navigation.navigate("registerLevel1");
  //   }
  // },[value]);

  const pressSubmitAction = () => {
    // if (value.length < 4) {
    //   Alert.alert("Fill in all the 4 digits.");
    //   return;
    // }
    // if (value.length === 4) {
    navigation.navigate("accountLevel");
    // }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={globalStyles.flex_1}
      style={{ backgroundColor: "#fff" }}
    >
      <SafeAreaView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.marginTop_100}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: getHeight(20),
            }}
          >
            <Progress.Bar
              progress={0.4}
              width={80}
              color={"#8D00FF"}
              borderColor={"#c5dafb"}
              backgroundColor={"#d2e2fb"}
            />
          </View>
          <View>
            <Text style={styles.title}>Ingresa el código</Text>
            <Text style={styles.sendText}>
              {mobileNumber &&
                "Lo hemos enviado a " +
                  // mobileNumber.toString().slice(0, 2) +
                  "*****" +
                  mobileNumber
                    .toString()
                    .slice(mobileNumber.toString().length - 2)}
            </Text>
            <View style={{ paddingLeft: 40, paddingRight: 40 }}>
              <CodeField
                ref={ref}
                {...propss}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                  let textChild = null;

                  if (symbol) {
                    textChild = (
                      <MaskSymbol
                        maskSymbol="*"
                        isLastFilledCell={isLastFilledCell({ index, value })}
                      >
                        {symbol}
                      </MaskSymbol>
                    );
                  } else if (isFocused) {
                    textChild = <Cursor />;
                  }
                  return (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {textChild || (isFocused ? <Cursor /> : null)}
                    </Text>
                  );
                }}
              />
            </View>
            {/* <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          /> */}
          </View>
          <TouchableOpacity
            style={globalStyles.marginTop_30}
            onPress={() => pressSubmitAction()}
          >
            <Text
              style={[
                globalStyles.Text_2,
                { fontFamily: "NunitoSans_400Regular" },
              ]}
            >
              Volver a enviar
            </Text>
          </TouchableOpacity>
          <Image style={styles.Logo} source={require("../assets/vlogo.png")} />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default VerifyMobile;
