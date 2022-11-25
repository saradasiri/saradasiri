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
  Button,
  ToastAndroid,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
// import CountryPicker from "react-native-country-picker-modal";
import DateTimePicker from "@react-native-community/datetimepicker";

const CompleteProfile1 = (formik) => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
    calAge(value);
  }

  const calAge = (value) => {
    const birthDate = new Date(value);
    const difference = Date.now() - birthDate.getTime();
    const cal = new Date(difference);
    const ageCal = Math.abs(cal.getUTCFullYear() - 1970);
    setAge(ageCal);
    if (ageCal < 18) {
      ToastAndroid.show(
        "You must be of legal age to continue.",
        ToastAndroid.SHORT
      );
    }
    if (ageCal < 0) {
      ToastAndroid.show("Please select a valid Date", ToastAndroid.SHORT);
    }
  };

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  const [age, setAge] = useState("");
  const { values, errors, touched } = formik;
  const navigation = useNavigation();

  const [countryBirth, setCountryBirth] = useState(values.countryBirth);
  const [nationality, setNationality] = useState(values.nationality);
  const [countryCode, setCountryCode] = useState("52");

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
      birth: date.toDateString(),
      dateISO: date.toISOString(),
      dateISO: "",
      nationality: nationality,
      countryBirth: values.countryBirth,
      curp: values.curp ? values.curp : "",
      rfc: values.rfc ? values.rfc : "",
      tax: values.tax ? values.tax : "",
      phone: values.phone,
      occupation: values.occupation ? values.occupation : "",
      age: age,
      countryCode: countryCode,
      isTokenSubscribed: values.isTokenSubscribed,
    };

    if (values.fund < values.lower || values.fund > values.upper) {
      ToastAndroid.show(
        `Your Investment Range is : ${values.range}`,
        ToastAndroid.SHORT
      );
    }
    if (values.fund < 100) {
      ToastAndroid.show("Minimum Amount is 100", ToastAndroid.SHORT);
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
              <View
                style={[
                  styles.tab1,
                  {
                    marginLeft: 0,
                    backgroundColor: "#00BFFF",
                    borderRadius: 30,
                  },
                ]}
              >
                <Text>1</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text>2</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text>3</Text>
              </View>
            </View>
          ) : (
            <View style={styles.tab}>
              <View
                style={[
                  styles.tab1,
                  { marginLeft: 0, backgroundColor: "#00BFFF" },
                ]}
              >
                <Text>1</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text>2</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text>3</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text>4</Text>
              </View>
            </View>
          )}

          {values.range === "$0 - $9,999" ? (
            <View style={[styles.dottedline, { width: 120, left: 90 }]}></View>
          ) : (
            <View style={styles.dottedline}></View>
          )}

          <View style={{ paddingTop: 25 }}>
            <Text style={[styles.text, { textAlign: "center", marginLeft: 0 }]}>
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
                    borderColor: errors.fund && touched.fund ? "red" : "black",
                  },
                ]}
              />
            </View>
            {errors.fund && touched.fund && (
              <Text style={styles.error}>{errors.fund}</Text>
            )}
          </View>

          <View>
            <Text style={styles.Label}>Personal Data</Text>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.text}>First Name</Text>
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
                      errors.firstName && touched.firstName ? "red" : "black",
                  },
                ]}
              />
            </View>
            {errors.firstName && touched.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}
          </View>

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Second Name</Text>
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
                      errors.secondName && touched.secondName ? "red" : "black",
                  },
                ]}
              />
            </View>
            {errors.secondName && touched.secondName && (
              <Text style={styles.error}>{errors.secondName}</Text>
            )}
          </View>

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Name(s)</Text>
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
                    borderColor: errors.name && touched.name ? "red" : "black",
                  },
                ]}
              />
            </View>
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
          </View>

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Date of Birth</Text>
            <TouchableOpacity
              onPress={showDatePicker}
              style={styles.inputStyle}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.datetext,
                  { color: age < 18 ? "#B9B9B9" : "black" },
                ]}
              >
                {age < 18 ? "DD / MM / YYYY" : date.toDateString()}
              </Text>
            </TouchableOpacity>
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={"date"}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                is24Hour={true}
                onChange={onDateSelected}
              />
            )}
          </View>

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Country of Birth</Text>
            <View style={styles.inputStyle}>
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
                style={{ fontSize: 24, width: 322, paddingBottom: 50 }}
              />
            </View>
            {errors.countryBirth && touched.countryBirth && (
              <Text style={styles.error}>{errors.countryBirth}</Text>
            )}
          </View>

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Nationality</Text>
            <View style={styles.inputStyle}>
              <CountryPicker
                withFilter
                countryCode={nationality}
                withFlag
                withCountryNameButton
                withAlphaFilter={false}
                withCountryButton={false}
                withCallingCode
                onSelect={(country) => {
                  const { cca2, callingCode } = country;
                  setNationality(cca2);
                  setCountryCode(callingCode);
                }}
                style={{ fontSize: 24, width: 322 }}
              />
            </View>
            {errors.nationality && touched.nationality && (
              <Text style={styles.error}>{errors.nationality}</Text>
            )}
          </View>

          {countryBirth === "MX" && nationality === "MX" && (
            <View style={{ paddingTop: 25 }}>
              <Text style={styles.text}>CURP</Text>
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
                        errors.curp && touched.curp ? "red" : "black",
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
            <View style={{ paddingTop: 25 }}>
              <Text style={styles.text}>RFC</Text>
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
                      borderColor: errors.rfc && touched.rfc ? "red" : "black",
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
            <View style={{ paddingTop: 25 }}>
              <Text style={styles.text}>TAX ID</Text>
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
                      borderColor: errors.tax && touched.tax ? "red" : "black",
                    },
                  ]}
                />
              </View>
              {errors.tax && touched.tax && (
                <Text style={styles.error}>{errors.tax}</Text>
              )}
            </View>
          ) : null}

          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Phone Number </Text>
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
                      errors.phone && touched.phone ? "red" : "black",
                  },
                ]}
              />
            </View>
            {errors.phone && touched.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}
          </View>

          {values.range === "$60,000 - $1,20,000" ? (
            <View style={{ marginTop: 25 }}>
              <Text style={styles.text}>Occupation</Text>
              <Pressable
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.occupation && touched.occupation ? "red" : "black",
                  },
                ]}
                onPress={open}
              >
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
                  <Picker.Item label="Public Servant" value="Public Servant" />
                  <Picker.Item
                    label="Systems and Communications"
                    value="Systems and Communications"
                  />
                  <Picker.Item
                    label="Self-Employed Worker"
                    value="Self-Employed Worker"
                  />
                  <Picker.Item label="Various Trades" value="Various Trades" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </Pressable>
              {errors.occupation && touched.occupation && (
                <Text style={styles.error}>{errors.occupation}</Text>
              )}
            </View>
          ) : null}

          <TouchableOpacity
            // disabled={!(formik.isValid && formik.dirty && age)}
            onPress={() => {
              handleFormSubmit(values);
            }}
            style={[
              styles.button,
              // { opacity: formik.isValid && formik.dirty ? 1 : 0.5 },
            ]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
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
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
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
  Logo: {
    height: 50,
    width: 180,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 25,
  },
  Label: {
    marginTop: 20,
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 27,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "NunitoSans_400Regular",
    color: "#737373",
    marginLeft: 15,
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 30,
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 40,
    height: 50,
    width: 322,
    borderRadius: 5,
    backgroundColor: "#2D0052",
    marginBottom: 50,
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
    marginLeft: 18,
  },
  boxContainer: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 12,
    paddingLeft: 30,
  },
  datetext: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "NunitoSans_400Regular",
    alignSelf: "flex-start",
  },
});
export default CompleteProfile1;
