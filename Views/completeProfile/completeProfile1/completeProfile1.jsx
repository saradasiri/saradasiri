import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
// import Checkbox from "expo-checkbox";
// import CountryPicker from "react-native-country-picker-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import NationalitySelector from "../../../src/nationality/nationalitySelector";

const CompleteProfile1 = (formik) => {
  const pickerRef = useRef();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [age, setAge] = useState("");
  const [birth, setBirth] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const { values, errors, touched } = formik;
  const navigation = useNavigation();

  const [countryBirth, setCountryBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [countryCode, setCountryCode] = useState("52");

  const [occupation, setOccupation] = useState("");

  useEffect(() => {
    values.countryBirth = countryBirth;
    values.nationality = nationality;
    if (countryBirth === "MX" && nationality === "MX") {
      values.tax = "";
    }
    if (countryBirth === "MX" || nationality === "MX") {
      (values.curp = ""), (values.rfc = "");
    }
  }, [countryBirth, nationality]);

  useEffect(() => {
    setAge("");
    setCountryBirth("MX");
    setNationality("MX");
  }, [values.range]);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirth(date);
    const birthDate = new Date(date);
    const difference = Date.now() - birthDate.getTime();
    const cal = new Date(difference);
    const ageCal = Math.abs(cal.getUTCFullYear() - 1970);
    setAge(ageCal);
    if (ageCal < 18) {
      Alert.alert("You must be of legal age to continue.");
    }
    if (ageCal < 0) {
      Alert.alert("Please select a valid Date");
    }
    hideDatePicker();
  };

  function open() {
    pickerRef.current.focus();
  }

  const handleFormSubmit = (values) => {
    const profile1 = {
      email: values.email,
      range: values.range,
      fund: values.fund,
      lower: values.lower,
      upper: values.upper,
      firstName: values.firstName.trim(),
      secondName: values.secondName,
      name: values.name,
      birth: birth.toDateString(),
      dateISO: birth.toISOString(),
      nationality: nationality,
      countryBirth: values.countryBirth,
      curp: values.curp ? values.curp : "",
      rfc: values.rfc ? values.rfc : "",
      tax: values.tax ? values.tax : "",
      phone: values.phone,
      occupation: values.occupation ? values.occupation : "",
      age: age,
      countryCode: countryCode,
    };

    if (values.fund < values.lower || values.fund > values.upper) {
      alert(`Your Investment Range is : \n${values.range}`);
    }
    if (values.fund < 100) {
      alert("Minimum Amount is 100");
    }
    if (
      values.fund >= values.lower &&
      values.fund >= 100 &&
      values.fund <= values.upper
    ) {
      navigation.navigate("completeProfile2", { ...profile1 });
    }
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Image
            style={styles.Logo}
            source={require("../../../assets/vlogo.png")}
          />
          {values.range === "$0 - $9,999" ? (
            <View style={styles.tab}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#33B9AF", "#4E68E1"]}
                style={[styles.tab1, { marginLeft: 0 }]}
              >
                <Text style={styles.tabText}>1</Text>
              </LinearGradient>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>2</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>3</Text>
              </View>
            </View>
          ) : (
            <View style={styles.tab}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#33B9AF", "#4E68E1"]}
                style={[styles.tab1, { marginLeft: 0 }]}
              >
                <Text style={styles.tabText}>1</Text>
              </LinearGradient>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>2</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>3</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>4</Text>
              </View>
            </View>
          )}

          {values.range === "$0 - $9,999" ? (
            <View style={[styles.dottedline, { width: 120, left: 90 }]}></View>
          ) : (
            <View style={styles.dottedline}></View>
          )}

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  top: 15,
                  color: errors.fund && touched.fund ? "red" : "#33B7B0",
                  marginTop: 20,
                },
              ]}
            >
              Indicate the amount you are going to fund
            </Text>
            <View>
              <TextInput
                name="fund"
                placeholder="Fund"
                keyboardType="numeric"
                onChangeText={(text) => {
                  formik.handleChange("fund")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("fund")}
                value={values.fund}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    marginTop: 20,
                    borderColor:
                      errors.fund && touched.fund ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.fund && touched.fund && (
              <Text style={styles.error}>{errors.fund}</Text>
            )}
          </View>

          <View>
            <Text style={styles.Label1}>Personal Data</Text>
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.firstName && touched.firstName ? "red" : "#33B7B0",
                },
              ]}
            >
              First Name
            </Text>
            <View>
              <TextInput
                name="firstName"
                placeholder="Juan"
                onChangeText={(text) => {
                  formik.handleChange("firstName")(text.trim());
                }}
                onBlur={formik.handleBlur("firstName")}
                value={values.firstName}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.firstName && touched.firstName ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.firstName && touched.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.secondName && touched.secondName ? "red" : "#33B7B0",
                },
              ]}
            >
              Second Name
            </Text>
            <View>
              <TextInput
                name="secondName"
                placeholder="garcia"
                onChangeText={(text) => {
                  formik.handleChange("secondName")(text.trim());
                }}
                onBlur={formik.handleBlur("secondName")}
                value={values.secondName}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.secondName && touched.secondName
                        ? "red"
                        : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.secondName && touched.secondName && (
              <Text style={styles.error}>{errors.secondName}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                { color: errors.name && touched.name ? "red" : "#33B7B0" },
              ]}
            >
              Name(s)
            </Text>
            <View>
              <TextInput
                name="name"
                placeholder="Juan gonzalez garcia"
                onChangeText={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={values.name}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.name && touched.name ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text style={[styles.text, { color: "#33B7B0" }]}>
              Date of Birth
            </Text>
            <TouchableOpacity
              onPress={showDatePicker}
              style={styles.boxContainer}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.datetext,
                  { color: age < 18 ? "#B9B9B9" : "black" },
                ]}
              >
                {age < 18 ? "DD / MM / YYYY" : birth.toDateString()}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.countryBirth && touched.countryBirth
                      ? "red"
                      : "#33B7B0",
                },
              ]}
            >
              Country of Birth
            </Text>
            <View style={styles.boxContainer}>
              <CountryPicker
                withFilter
                countryCode={countryBirth}
                withFlag
                withCountryNameButton
                withAlphaFilter={false}
                withCountryButton={false}
                withCallingCode
                onSelect={(country) => {
                  const { cca2 } = country;
                  setCountryBirth(cca2);
                }}
                style={{ fontSize: 24, width: 322 }}
              />
            </View>
            {errors.countryBirth && touched.countryBirth && (
              <Text style={styles.error}>{errors.countryBirth}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.nationality && touched.nationality
                      ? "red"
                      : "#33B7B0",
                },
              ]}
            >
              Nationality
            </Text>
            <View style={styles.boxContainer}>
              <CountryPicker
                withFilter
                countryCode={nationality}
                withFlag
                withCountryNameButton
                withAlphaFilter={false}
                withCountryButton={false}
                withCallingCode
                onSelect={(country) => {
                  const { cca2, countryCode } = country;
                  setNationality(cca2);
                  setCountryCode(countryCode[0]);
                }}
                style={{ fontSize: 24, width: 322 }}
              />
            </View>
            {errors.nationality && touched.nationality && (
              <Text style={styles.error}>{errors.nationality}</Text>
            )}
          </View>

          {countryBirth === "MX" && nationality === "MX" && (
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: errors.curp && touched.curp ? "red" : "#33B7B0",
                  },
                ]}
              >
                CURP
              </Text>
              <View>
                <TextInput
                  name="curp"
                  keyboardType="numeric"
                  placeholder="Your CURP Number"
                  onChangeText={(text) => {
                    formik.handleChange("curp")(text.replace(/\D/g, ""));
                  }}
                  onBlur={formik.handleBlur("curp")}
                  value={values.curp}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.curp && touched.curp ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.curp && touched.curp && (
                <Text style={styles.error}>{errors.curp}</Text>
              )}
            </View>
          )}

          {countryBirth === "MX" && nationality === "MX" ? (
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: errors.rfc && touched.rfc ? "red" : "#33B7B0",
                  },
                ]}
              >
                RFC
              </Text>
              <View>
                <TextInput
                  name="rfc"
                  keyboardType="numeric"
                  placeholder="Your RFC Number"
                  onChangeText={(text) => {
                    formik.handleChange("rfc")(text.replace(/\D/g, ""));
                  }}
                  onBlur={formik.handleBlur("rfc")}
                  value={values.rfc}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.rfc && touched.rfc ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.rfc && touched.rfc && (
                <Text style={styles.error}>{errors.rfc}</Text>
              )}
            </View>
          ) : null}

          {countryBirth !== "MX" || nationality !== "MX" ? (
            <View style={{ paddingTop: 40 }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: errors.tax && touched.tax ? "red" : "#33B7B0",
                  },
                ]}
              >
                TAX ID
              </Text>
              <View>
                <TextInput
                  name="tax"
                  keyboardType="numeric"
                  placeholder="Your RFC Number"
                  onChangeText={(text) => {
                    formik.handleChange("tax")(text.replace(/\D/g, ""));
                  }}
                  onBlur={formik.handleBlur("tax")}
                  value={values.tax}
                  autoCapitalize="none"
                  style={[
                    styles.inputStyle,
                    {
                      borderColor:
                        errors.tax && touched.tax ? "red" : "#33B7B0",
                    },
                  ]}
                />
              </View>
              {errors.tax && touched.tax && (
                <Text style={styles.error}>{errors.tax}</Text>
              )}
            </View>
          ) : null}

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color: errors.phone && touched.phone ? "red" : "#33B7B0",
                },
              ]}
            >
              Phone Number
            </Text>
            <View>
              <TextInput
                name="phone"
                placeholder="8110000000"
                maxLength={10}
                onChangeText={(text) => {
                  formik.handleChange("phone")(text.replace(/\D/g, ""));
                }}
                onBlur={formik.handleBlur("phone")}
                value={values.phone}
                keyboardType="numeric"
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.phone && touched.phone ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.phone && touched.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}
          </View>

          {values.range === "$60,000 - $1,20,000" ? (
            <View>
              <Pressable
                style={[
                  styles.boxContainer,
                  {
                    borderColor:
                      errors.occupation && touched.occupation
                        ? "red"
                        : "#33B7B0",
                    marginTop: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                onPress={open}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        errors.occupation && touched.occupation
                          ? "red"
                          : "#33B7B0",
                      top: -10,
                    },
                  ]}
                >
                  Occupation
                </Text>
                <Text
                  style={{
                    width: 300,
                    fontSize: 16,
                    top: -4,
                    fontFamily: "NunitoSans_400Regular",
                    color: values.occupation === "" ? "#B9B9B9" : "black",
                    left: 10,
                  }}
                >
                  {values.occupation
                    ? values.occupation
                    : "--- Select Occupation ---"}
                </Text>
                <View style={{ marginBottom: 10 }}>
                  <Picker
                    ref={pickerRef}
                    selectedValue={values.occupation}
                    onValueChange={formik.handleChange("occupation")}
                    onBlur={formik.handleBlur("occupation")}
                    value={values.occupation}
                  >
                    <Picker.Item label="--- Select Occupation ---" value="" />
                    <Picker.Item
                      label="Artistic Activities"
                      value="Artistic Activities"
                    />
                    <Picker.Item label="Agriculture" value="Agriculture" />
                    <Picker.Item label="Livestock" value="Livestock" />
                    <Picker.Item label="Fishing" value="Fishing" />
                    <Picker.Item label="Commerce" value="Commerce" />
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Employee" value="Employee" />
                    <Picker.Item
                      label="Entrepreneurship"
                      value="Entrepreneurship"
                    />
                    <Picker.Item label="Home" value="Home" />
                    <Picker.Item label="Teacher" value="Teacher" />
                    <Picker.Item label="Professional" value="Professional" />
                    <Picker.Item
                      label="Public Servant"
                      value="Public Servant"
                    />
                    <Picker.Item
                      label="Systems and Communications"
                      value="Systems and Communications"
                    />
                    <Picker.Item
                      label="Self-Employed Worker"
                      value="Self-Employed Worker"
                    />
                    <Picker.Item
                      label="Various Trades"
                      value="Various Trades"
                    />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                </View>
              </Pressable>
              {errors.occupation && touched.occupation && (
                <Text style={styles.error}>{errors.occupation}</Text>
              )}
            </View>
          ) : null}

          <View style={{ marginTop: 40, marginBottom: 50 }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty && age)}
              onPress={() => {
                handleFormSubmit(values);
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={[
                  { borderRadius: 100, paddingBottom: 10 },
                  {
                    opacity: formik.isValid && formik.dirty && age ? 1 : 0.5,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  Logo: {
    margin: 100,
    height: 32,
    width: 115,
    marginBottom: 50,
    marginTop: 50,
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  tab1: {
    width: 35,
    height: 35,
    marginLeft: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dottedline: {
    borderColor: "#33B7B0",
    borderStyle: "dotted",
    borderWidth: 0.5,
    width: 210,
    zIndex: -1,
    left: 49,
    top: -17,
  },
  Label1: {
    marginTop: 30,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },
  inputStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    borderRadius: 6,
    height: 20,
    marginTop: 5,
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  boxContainer: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 12,
    paddingLeft: 30,
  },
  datetext: {
    fontSize: 15,
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
    zIndex: 1,
    fontWeight: "600",
    fontFamily: "NunitoSans_400Regular",
  },
});
export default CompleteProfile1;
