import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import LoginProcess from "./views/login/loginProcess";
import IntroSlides from "./views/introSlides";
import ConfirmEmailProcess from "./views/register/confirmEmail/confirmEmailProcess";
import SetPasswordProcess from "./views/register/setPassword/setPasswordProcess";
import VerifyOTP from "./views/register/verifyOTP/verifyOTP";
import SetUpPin from "./views/register/setUpPin/setUpPin";
// import "react-native-gesture-handler";
// import LandingPage from "./views/landingPage/landingPage";
import FundingProcess from "./views/funding/fundingProcess";
// import MobileVerify from "./views/registerLevel1";
// import MobileInput from "./views/mobileInput";
// import VerifyMobile from "./views/verifyMobileOtp";
import AccountLevel from "./views/accountLevel/accountLevel";
import CompleteProfileProcess1 from "./views/completeProfile/completeProfile1/completeProfileProcess1";
import CompleteProfileProcess2 from "./views/completeProfile/completeProfile2/completeProfileProcess2";
import CompleteProfileProcess3 from "./views/completeProfile/completeProfile3/completeProfileProcess3";
import CompleteProfile4 from "./views/completeProfile/completeProfile4/completeProfile4";
// import RegisterLevel1 from "./views/registerLevel1";
// import SetWalletPin from "./views/setWalletPin";
import WalletHome from "./views/walletHome/walletHome";
import HomePage from "./views/homePage";
import JoinVadi from "./views/joinVadi";
import RegisterSuccess from "./views/registerSuccess";
import BalancePage from "./views/walletHome/balancePage";
import BalancePage1 from "./views/walletHome/balancePage1";
import { Text } from "react-native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import PaymentProcess from "./views/payment/paymentProcess";
import Header from "./src/header2/header";
function BellMenu() {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  return (
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
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="homepage"
        screenOptions={{ headerTitle: "", headerShown: false }}
      >
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="joinVadi" component={JoinVadi} />
        <Stack.Screen name="registerSuccess" component={RegisterSuccess} />
        <Stack.Screen name="introSlides" component={IntroSlides} />
        <Stack.Screen
          name="balancePage"
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          component={BalancePage}
        />
        <Stack.Screen
          name="balancePage1"
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          component={BalancePage1}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "white" },
            ...TransitionPresets.SlideFromRightIOS,
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={LoginProcess}
        />
        <Stack.Screen
          name="confirmEmail"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "white" },
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={ConfirmEmailProcess}
        />
        <Stack.Screen
          name="setPassword"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "white" },
            ...TransitionPresets.SlideFromRightIOS,
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={SetPasswordProcess}
        />
        <Stack.Screen
          name="verifyOTP"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "white" },
            ...TransitionPresets.SlideFromRightIOS,
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={VerifyOTP}
        />
        <Stack.Screen
          name="setUpPin"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#F2F6FF" },
            ...TransitionPresets.SlideFromRightIOS,
            headerRight: (props) => <BellMenu {...props} />,
          }}
          component={SetUpPin}
        />
        <Stack.Screen
          name="walletHome"
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          component={WalletHome}
        />
        <Stack.Screen name="accountLevel" component={AccountLevel} />
        <Stack.Screen
          name="completeProfile1"
          component={CompleteProfileProcess1}
        />
        <Stack.Screen
          name="completeProfile2"
          component={CompleteProfileProcess2}
        />
        <Stack.Screen
          name="completeProfile3"
          component={CompleteProfileProcess3}
        />
        <Stack.Screen name="completeProfile4" component={CompleteProfile4} />
        <Stack.Screen
          name="funding"
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: "true",
            headerRight: (props) => <Header {...props} />,
          }}
          component={FundingProcess}
        />

        <Stack.Screen
          name="payment"
          component={PaymentProcess}
          options={{
            headerShown: "true",
            unmountOnBlur: true,
            headerRight: (props) => <Header {...props} />,
            headerTransparent: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
