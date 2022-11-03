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
import FundingProcess from "./views/funding/fundingProcess";
import MobileVerify from "./views/registerLevel1";
import MobileInput from "./views/mobileInput";
import VerifyMobile from "./views/verifyMobileOtp";
import AccountLevel from "./views/accountLevel/accountLevel";
import CompleteProfileProcess1 from "./views/completeProfile/completeProfile1/completeProfileProcess1";
import CompleteProfileProcess2 from "./views/completeProfile/completeProfile2/completeProfileProcess2";
import CompleteProfileProcess3 from "./views/completeProfile/completeProfile3/completeProfileProcess3";
import CompleteProfile4 from "./views/completeProfile/completeProfile4/completeProfile4";
import WalletHome from "./views/walletHome/walletHome";
import RegisterLevel1 from "./views/registerLevel1";
import SetWalletPin from "./views/setWalletPin";
import HomePage from "./views/homePage";
import RegisterSuccess from "./views/registerSuccess";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="registerSuccess">
        <Stack.Screen
          name="homepage"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={HomePage}
        />
        <Stack.Screen
          name="registerSuccess"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={RegisterSuccess}
        />
        <Stack.Screen
          name="introSlides"
          options={{
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={IntroSlides}
        />
        <Stack.Screen
          name="registerLevel1"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={RegisterLevel1}
        />
        <Stack.Screen
          name="SetUpPin"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={SetWalletPin}
        />
        <Stack.Screen
          name="verifyMobileOtp"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={VerifyMobile}
        />
        <Stack.Screen
          name="mobileotp"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={MobileInput}
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
              backgroundColor: "white",
            },
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerTitle: "",
          }}
          component={LoginProcess}
        />

        <Stack.Screen
          name="confirmEmail"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "white",
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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

        <Stack.Screen
          name="walletHome"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={WalletHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
