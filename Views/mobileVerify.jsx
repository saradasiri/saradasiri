import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { getfontSize, getHeight, getWidth } from "../src/Dimentions/DImentions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import globalStyles from "../globalStyles";

const MobileVerify = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const pressSubmitAction = () => {
    props.navigation.navigate("SetUpPin");
  };

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        globalStyles.flex_1,
        { paddingTop:100,  backgroundColor:"#fff" },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[
            globalStyles.BeginText,
            { fontFamily: "NunitoSans_400Regular" , color:"#483D8B"},
          ]}
        >
          ¡Hola de nuevo!
        </Text>
        <Text
          style={[
            globalStyles.Text_Private_1,
            {
              fontFamily: "NunitoSans_400Regular",
              textAlign: "center",
              marginTop: getHeight(35),
            },
          ]}
        >
          Inicia sesión
        </Text>
        <View style={styles.container}>
          <View style={globalStyles.PhoneInput}>
            <TextInput
              style={globalStyles.inputText}
              placeholder="Usuario"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
          </View>
          <View style={[globalStyles.PhoneInput, { marginTop: getHeight(30) }]}>
            <TextInput
              style={globalStyles.inputText}
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: getHeight(30),
          }}
        >
          <TouchableOpacity>
            <Text style={{color:"#483D8B"}}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressSubmitAction()}>
            <View
              style={{
                height: 55,
                width: 55,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/BG.png")}
                style={{ height: 50, width: 50 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <Image
                    source={require("../assets/RightIcon.png")}
                    style={{
                      alignSelf: "center",
                      marginBottom: getHeight(20),
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default MobileVerify;

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(60),
  },
});
