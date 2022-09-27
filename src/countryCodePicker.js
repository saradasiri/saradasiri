import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { getHeight, getWidth } from "./Dimentions/DImentions";
import PhoneInput from "react-native-phone-number-input";
import globalStyles from "../globalStyles";
const CountryCodePicker = (props) => {
  const { onChangeTextValue, OnChangeCountryCode, Value, layout } = props;
  return (
    <View>
      <PhoneInput
        disableArrowIcon={false}
        placeholder={"     "}
        containerStyle={globalStyles.PhoneInput}
        textInputStyle={styles.textInputStyles}
        textContainerStyle={styles.textInputStyle}
        flagButtonStyle={styles.countryImage}
        countryPickerButtonStyle={styles.countryImages}
        layout={layout}
        onChangeCountry={OnChangeCountryCode}
        onChangeText={onChangeTextValue}
        value={Value}
        keyboardType={"numeric"}
        textInputProps={{
          maxLength: 10,
        }}
        codeTextStyle={styles.codeTextStyle}
        defaultCode={"MX"}
        autoFocus={true}
        // renderDropdownImage={renderDropdownImage}
      />
    </View>
  );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
  textInputStyles: {
    padding: 0,
    fontWeight: "700",
    // position: 'absolute',
    // width: '100%',
  },
  textInputStyle: {
    paddingVertical: 0,
    paddingLeft: getWidth(10),
    backgroundColor: "white",
  },
  countryImage: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'blue',
    paddingVertical: 0,
    width: getWidth(150),
    alignSelf: "center",
  },
  countryImages: {
    alignItems: "center",
  },
  codeTextStyle: {
    marginRight: 0,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: getWidth(20),

    // marginHorizontal: 'auto',
  },
});
