import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// import "react-native-gesture-handler";
import LoginProcess from "./views/login/loginProcess";
import IntroSlides from "./views/introSlides";
import LandingPage from "./views/landingPage/landingPage";
import ConfirmEmailProcess from "./views/register/confirmEmail/confirmEmailProcess";
import SetPasswordProcess from "./views/register/setPassword/setPasswordProcess";
import VerifyOTP from "./views/register/verifyOTP/verifyOTP";
import SetUpPin from "./views/register/setUpPin/setUpPin";
import AccountLevel from "./views/accountLevel/accountLevel";
import CompleteProfileProcess1 from "./views/completeProfile/completeProfile1/completeProfileProcess1";
import CompleteProfileProcess2 from "./views/completeProfile/completeProfile2/completeProfileProcess2";
import CompleteProfileProcess3 from "./views/completeProfile/completeProfile3/completeProfileProcess3";
import CompleteProfile4 from "./views/completeProfile/completeProfile4/completeProfile4";
import FundingProcess from "./views/funding/fundingProcess"

export default function App() {
  const Stack = createStackNavigator();
  return (
  <NavigationContainer theme={{ colors: { background: "#270041" } }}>
      <Stack.Navigator initialRouteName="introSlides">
        <Stack.Screen
          name="introSlides"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={IntroSlides}
        />
        <Stack.Screen
          name="landingPage"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          component={LandingPage}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={LoginProcess}
        />
        <Stack.Screen
          name="confirmEmail"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerTitle: "",
          }}
          component={ConfirmEmailProcess}
        />
        <Stack.Screen
          name="setPassword"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={SetPasswordProcess}
        />
        <Stack.Screen
          name="verifyOTP"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={VerifyOTP}
        />
        <Stack.Screen
          name="setUpPin"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={SetUpPin}
        />
        <Stack.Screen
          name="accountLevel"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={AccountLevel}
        />
         <Stack.Screen
          name="completeProfile1"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={CompleteProfileProcess1}
        /> 
        <Stack.Screen
        name="completeProfile2"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#F2F6FF",
          },
          ...TransitionPresets.SlideFromRightIOS,
          headerTitle: "",
        }}
        component={CompleteProfileProcess2}
      />
       <Stack.Screen
        name="completeProfile3"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#F2F6FF",
          },
          ...TransitionPresets.SlideFromRightIOS,
          headerTitle: "",
        }}
        component={CompleteProfileProcess3}
      />
       <Stack.Screen
        name="completeProfile4"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#F2F6FF",
          },
          ...TransitionPresets.SlideFromRightIOS,
          headerTitle: "",
        }}
        component={CompleteProfile4}
      />

      
<Stack.Screen
        name="funding"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#F2F6FF",
          },
          ...TransitionPresets.SlideFromRightIOS,
          headerTitle: "",
        }}
        component={FundingProcess}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}