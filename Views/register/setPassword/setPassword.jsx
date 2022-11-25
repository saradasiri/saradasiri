import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_PATHS } from "../../../src/constants/apiPaths";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../../../globalStyles";
import ProgressBar from "../../../src/progressBar";
import { useDispatch , useSelector } from "react-redux";
import { addEmail, addPassword } from "../../../src/redux/actions";




const SetPassword = (formik) => {
  const dispatch = useDispatch()
  
  const navigation = useNavigation();
  const { values, errors, touched } = formik;

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const setUserEmail = async (value) => {
    try {
      await AsyncStorage.setItem("@userEmail", value);
      navigation.navigate("verifyOTP");
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = () => {   
    const obj = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(API_PATHS.SIGNUP, obj)
      .then((res) => {
        if (res.data.message) {
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          if (
            res.data.message ===
            "Success,Verification code has been sent to your Mail"
          ) {
            setUserEmail(values.email);
            dispatch(addEmail(values.email))
            dispatch(addPassword(values.password))
          }
        }
      })
      .catch((err) => {
        ToastAndroid.show(err.message, ToastAndroid.SHORT);
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={globalStyles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <ProgressBar length={0.5}/>
        <Text style={globalStyles.Label}>Protege tu cuenta</Text>

        <View style={{ paddingTop: 20 }}>
          <Text
            style={[
              globalStyles.text,
              {
                color: errors.password && touched.password ? "red" : "#2D0052",
              },
            ]}
          >
            Elige una contraseña
          </Text>
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
          {errors.password === "se requiere contraseña" && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
        </View>

        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            marginBottom: 20,
            fontWeight: "400",
            fontSize: 20,
          }}
        >
          Sigue esta guía:
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: values.password.length > 7 ? "green" : "red",
            fontSize: values.password.length > 7 ? 16 : 14,
          }}
        >
          Mínimo 8 caracteres
        </Text>
        <Text
          style={{
            textAlign: "center",
            color:
              values.password.replace(/[^A-Z]/g, "").length > 0
                ? "green"
                : "red",
            fontSize:
              values.password.replace(/[^A-Z]/g, "").length > 0 ? 16 : 14,
          }}
        >
          Una mayúscula
        </Text>
        <Text
          style={{
            textAlign: "center",
            color:
              values.password.replace(/[^a-z]/g, "").length > 0
                ? "green"
                : "red",
            fontSize:
              values.password.replace(/[^a-z]/g, "").length > 0 ? 16 : 14,
          }}
        >
          Una minúscula
        </Text>
        <Text
          style={{
            textAlign: "center",
            color:
              values.password.replace(/[^0-9]/g, "").length > 0
                ? "green"
                : "red",
            fontSize:
              values.password.replace(/[^0-9]/g, "").length > 0 ? 16 : 14,
          }}
        >
          Un número
        </Text>
        <Text
          style={{
            textAlign: "center",
            color:
              values.password.replace(/[^!@#$%^&*()\-_"=+{};:,<.>]/g, "")
                .length > 0
                ? "green"
                : "red",
            fontSize:
              values.password.replace(/[^!@#$%^&*()\-_"=+{};:,<.>]/g, "")
                .length > 0
                ? 16
                : 14,
          }}
        >
          Un símbolo
        </Text>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={[
              globalStyles.button,
              { marginTop:80,opacity: formik.isValid && formik.dirty ? 1 : 0.5 },
            ]}
            disabled={!(formik.isValid && formik.dirty)}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={globalStyles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={globalStyles.Logo}
          source={require("../../../assets/vlogo.png")}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});
export default SetPassword;
