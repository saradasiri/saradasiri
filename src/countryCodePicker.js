import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const CountryCodePicker = (props) => {
  const { onChangeTextValue, OnChangeCountryCode, Value, layout, contact } =
    props;
  return (
    <View >
      <PhoneInput
        containerStyle={{ backgroundColor: "transparent", width:"100%" }}
        disableArrowIcon={false}
        // placeholder={"     "}
        // containerStyle={globalStyles.PhoneInput}
        textInputStyle={styles.textInputStyles}
        textContainerStyle={styles.textInputStyle}
        flagButtonStyle={styles.countryImage}
        // countryPickerButtonStyle={styles.countryImages}
        // layout={layout}
        onChangeCountry={(value) => {OnChangeCountryCode(value.callingCode);}}
        onChangeText={onChangeTextValue}
        value={contact}
        keyboardType={"numeric"}
        textInputProps={{
          maxLength: 10,
        }}
        // codeTextStyle={styles.codeTextStyle}
        defaultCode={"MX"}
        // onChangeText={(text) => {
        //   // setValue(text);
        // }}
        // onChangeFormattedText={(text) => {
        // }}

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
    // backgroundColor: "white",
    width: 330,
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "rgba(18, 3, 58, 0.1)",
    backgroundColor: "transparent",
  },
  countryImage: {
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
    // backgroundColor: 'blue',
    borderColor: "rgba(18, 3, 58, 0.1)",
    paddingVertical: 0,
    width: 70,
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  codeTextStyle: {
    marginRight: 0,
    fontWeight: "700",
    alignSelf: "center",
    // marginLeft: getWidth(20),

    // marginHorizontal: 'auto',
  },
});
