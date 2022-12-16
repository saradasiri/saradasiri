import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import globalStyles from "../../globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {
  addEmail,
  addPassword,
  addAccountAccessToken,
  addIsTokenSubscribed,
} from "../../src/redux/actions";
const Login = (formik) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { values, errors, touched } = formik;

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleSubmit = () => {
    const obj = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(API_PATHS.LOGIN, obj)
      .then((res) => {
        if (res.data.message) {
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          if (res.data.message === "Login Success") {
            dispatch(addAccountAccessToken(res.data.access_token));
            dispatch(addIsTokenSubscribed(res.data.isTokenSubscribed));
            dispatch(addEmail(values.email));
            dispatch(addPassword(values.password));
            res.data.isVerified
              ? res.data.isProfileCompleted
                ? saveData()
                : navigation.navigate("accountLevel")
              : sendOTP();
          }
        }
      })
      .catch((err) => {
        if (err.message) {
          ToastAndroid.show(err.message, ToastAndroid.SHORT);
        }
      });
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("@userEmail", values.email);
      await AsyncStorage.setItem("@userPassword", values.password);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("tabs");
  };

  const sendOTP = () => {
    axios
      .get(API_PATHS.RESEND_OTP + values.email)
      .then((res) => {
        if (res.data.message) {
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          if (res.data.message === "mail sent") {
            navigation.navigate("verifyOTP");
          }
        }
      })
      .catch((err) => {
        if (err.message) {
          ToastAndroid.show(err.message, ToastAndroid.SHORT);
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Text style={globalStyles.Label}>¡Hola de nuevo!</Text>
        <View style={{ paddingTop: 20 }}>
          <Text
            style={[
              globalStyles.text,
              { color: errors.email && touched.email ? "red" : "#2D0052" },
            ]}
          >
            Correo electrónico
          </Text>
          <View>
            <TextInput
              name="email"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={values.email}
              style={[
                globalStyles.inputStyle,
                {
                  borderColor:
                    errors.email && touched.email
                      ? "red"
                      : "rgba(18, 3, 58, 0.1)",
                },
              ]}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={globalStyles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              globalStyles.text,
              {
                color: errors.password && touched.password ? "red" : "#2D0052",
              },
            ]}
          >
            Contraseña
          </Text>
          <View>
            <TextInput
              name="password"
              secureTextEntry={true}
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={values.password}
              style={[
                globalStyles.inputStyle,
                {
                  borderColor:
                    errors.password && touched.password
                      ? "red"
                      : "rgba(18, 3, 58, 0.1)",
                },
              ]}
            />
          </View>
          <View></View>
          {errors.password && touched.password && (
            <Text style={globalStyles.error}>{errors.password}</Text>
          )}
        </View>

        <View style={styles.signup}>
          <Text
            style={{ fontFamily: "NunitoSans_400Regular", color: "#2D0052" }}
          >
            ¿Olvidaste tu contraseña?
          </Text>
          <TouchableOpacity
            style={{ paddingLeft: 5 }}
            // onPress={() => navigation.navigate("register")}
          >
            <Text
              style={{
                fontFamily: "NunitoSans_400Regular",
                color: "#2D0052",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              Recuperar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={[
              globalStyles.button,
              {
                marginTop: 103,
                opacity: formik.isValid && formik.dirty ? 1 : 0.5,
              },
            ]}
            disabled={!(formik.isValid && formik.dirty)}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={globalStyles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={globalStyles.Logo}
          source={require("../../assets/vlogo.png")}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  signup: {
    marginTop: 15,
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    alignSelf: "center",
  },
});
export default Login;
