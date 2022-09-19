import {
    StyleSheet,
    Text,
    Image,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Pressable,
  } from "react-native";
  // import { LinearGradient } from "expo-linear-gradient";
  import React, { useState } from "react";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
  import { useFonts } from "expo-font";
  import AppLoading from "expo-app-loading";
  import { useNavigation } from "@react-navigation/native";
  // import { MaterialCommunityIcons } from "@expo/vector-icons";
  // import axios from "axios";
  // import { API_PATHS } from "../../src/constants/apiPaths";
  // import Toast from "react-native-toast-message";
  
  const LandingPage = () => {
    const navigation = useNavigation();
    // const { values, errors, touched } = formik;
    // const [passwordVisibility, setPasswordVisibility] = useState(true);
    // const [access_token, setAccessToken] = useState("");
    // const [rightIcon, setRightIcon] = useState("eye");
  
    // const setUserEmail = async (value) => {
    //   try {
    //     await AsyncStorage.setItem("@userEmail", value);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
  
    // const validateUser = () => {
    //   axios
    //     .get(`${API_PATHS.RESEND_OTP}/${values.email} `)
    //     .then((res) => {
    //       Toast.show({
    //         type: "info",
    //         text1: res.data.message,
    //       });
    //       navigation.navigate("verification", { email: values.email });
    //     })
    //     .catch((error) => console.log(error));
    // };
  
    // const handleSubmit = () => {
    //   const obj = {
    //     email: values.email,
    //     password: values.password,
    //   };
    //   axios
    //     .post(API_PATHS.LOGIN, obj)
    //     .then((res) => {
    //       if (res.data.message) {
    //         Toast.show({
    //           type: "info",
    //           text1: res.data.message,
    //         });
    //       }
  
    //       const login = {
    //         email: values.email,
    //         isTokenSubscribed: res.data.isTokenSubscribed,
    //       };
    //       const login1 = {
    //         email: values.email,
    //         isTokenSubscribed: res.data.isTokenSubscribed,
    //       };
  
    //       res.data.message === "Login Success"
    //         ? setUserEmail(values.email)
    //         : null;
    //       res.data.message === "Login Success"
    //         ? res.data.isVerified
    //           ? !res.data.isProfileCompleted
    //             ? navigation.navigate("accountLevel", login1)
    //             : navigation.navigate("funding", login)
    //           : validateUser()
    //         : null;
    //     })
    //     .catch((err) => {
    //       if (err.message) {
    //         Toast.show({
    //           type: "info",
    //           text1: err.message,
    //         });
    //       }
    //     });
    // };
  
    // const handlePasswordVisibility = () => {
    //   if (rightIcon === "eye") {
    //     setRightIcon("eye-off");
    //     setPasswordVisibility(!passwordVisibility);
    //   } else if (rightIcon === "eye-off") {
    //     setRightIcon("eye");
    //     setPasswordVisibility(!passwordVisibility);
    //   }
    // };
    let [fontsLoad, error] = useFonts({
      NunitoSans_400Regular,
    });
  
    if (!fontsLoad) {
      return null;
    }
  
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <StatusBar style="auto" />
           

            <Image
              style={styles.Logo}
              source={require("../../assets/vlogo.png")}
              />
  
              <Text style={[styles.Label,{ marginTop: 50,fontSize:26}]}>Nuevas oportunidades</Text>
              <Text style={[styles.Label,{marginTop: 5,fontSize:26}]}>de inversión</Text>
              <Text style={[styles.Label]}>Te damos la bienvenida al</Text>
              <Text style={[styles.Label]}>marketplace más grande de</Text>
              <Text style={[styles.Label]}>Latinoamérica.</Text>
            
  
            {/* <TouchableOpacity
              style={styles.resetPassword}
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text style={{ color: "#34B6B0" }}>Forgot Password?</Text>
            </TouchableOpacity> */}
  
            <View style={{ marginTop: 180 }}>
              <TouchableOpacity
              style={styles.button}
              onPress={()=>navigation.navigate("confirmEmail")}
                // disabled={!(formik.isValid && formik.dirty)}
                // onPress={() => {
                //   handleSubmit();
                // }}
              >
                  <Text style={styles.buttonText}>Unirme a Vadi</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signup}>
              <Text style={{ fontFamily: "NunitoSans_400Regular", fontSize:18, color:'white' }}>
              Ya tienes una cuenta?
              </Text>
              <TouchableOpacity
                style={{ paddingLeft: 5 }}
                onPress={()=>navigation.navigate("login")}
              >
                <Text
                  style={{
                    fontFamily: "NunitoSans_400Regular",
                    color: "#377E9B",
                    textDecorationLine:'underline',
                    fontWeight:'bold', fontSize:18                   
                  }}
                >
                  Inicia sesión
                </Text>
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
      backgroundColor: "#270041",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    Logo: {
      height: 50,
      width: 180,
      marginTop:50,
      alignSelf:'center',
    },
    Label: {
      fontWeight: "400",
      fontSize: 20,
      lineHeight: 27,
      color:'white',
      textAlign:'center',
    },
    text: {
      fontSize:18,
      marginBottom:8,
      fontFamily: "NunitoSans_400Regular",
      color: '#737373',
    },
    inputStyle: {
      height: 50,
      width:322,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "white",
      paddingLeft: 30,
    },
    button:{
      marginTop:40,
      height: 50,
      width:322,
      borderRadius: 5,
      backgroundColor: "#00BFFF",
    },
    resetPassword: {
      fontStyle: "normal",
      fontWeight: "400",
      marginTop: -14,
      color: "#7A869A",
      alignSelf: "flex-end",
    },
    buttonText: {
      color: "black",
      fontFamily: "NunitoSans_400Regular",
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: "center",
    },
    signup: {
      marginTop: 25,
      flexDirection: "row",
      fontFamily: "NunitoSans_400Regular",
      alignSelf: "center",
      fontSize:30
    },
    passwordViewer: {
      alignSelf: "flex-end",
      paddingRight: 30,
      top: -35,
      borderColor: "grey",
    },
  });
  export default LandingPage;
  