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
import JoinVadi from "./views/joinVadi";
import RegisterSuccess from "./views/registerSuccess";
import BalancePage from "./views/walletHome/balancePage";
import BalancePage1 from "./views/walletHome/balancePage1";
import WalletPage from "./views/walletHome/walletPage";
import { Text } from "react-native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
function BellMenu() {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
    <>
      <Text
        style={{
          fontSize: 14,
          left: -270,
          color: "#8D00FF",
          fontFamily: "NunitoSans_400Regular",
        }}
      >
        Volver
      </Text>
    </>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homepage">
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
          name="walletPage"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={WalletPage}
        />
        <Stack.Screen
          name="balancePage"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={BalancePage}
        />
        <Stack.Screen
          name="balancePage1"
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={BalancePage1}
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
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={IntroSlides}
        />
        {/* <Stack.Screen
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
        /> */}
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "white",
            },
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerTitle: "",
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={LoginProcess}
        />
        <Stack.Screen
          name="joinVadi"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F2F6FF",
            },
            headerTitle: "",
          }}
          component={JoinVadi}
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
            headerRight: (props) => <BellMenu {...props} />,
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
            headerRight: (props) => <BellMenu {...props} />,
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
            headerRight: (props) => <BellMenu {...props} />,
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
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={SetUpPin}
        />
        {/* <Stack.Screen
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
        /> */}

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
