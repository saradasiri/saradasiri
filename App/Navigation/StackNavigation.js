import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mobile from "../Screens/Auth/mobile";
import Verify from "../Screens/Auth/VerifyOtp";
import UserName from "../Screens/Auth/userName";
import SetUpPin from "../Screens/Auth/setUpPin";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Mobile"
        screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Mobile" component={Mobile} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="UserName" component={UserName} />
        <Stack.Screen name="SetUpPin" component={SetUpPin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
