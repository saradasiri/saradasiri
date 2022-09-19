import LoginProcess from "./views/login/loginProcess";
import IntroSlides from "./views/introSlides";
import LandingPage from "./views/landingPage/landingPage"
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ConfirmEmailProcess from "./views/register/confirmEmail/confirmEmailProcess";
import SetPasswordProcess from "./views/register/setPassword/setPasswordProcess";
import VerifyOTP from "./views/register/verifyOTP/verifyOTP";
import SetUpPin from "./views/register/setUpPin/setUpPin";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="introSlides">
      <Stack.Screen
          name="introSlides"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#F2F6FF'
            },
            headerTitle: "",
          }}
          component={IntroSlides}
        />
        <Stack.Screen
          name="landingPage"
          options={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: '#F2F6FF'
            // },
            // headerTitle: "",
          }}
          component={LandingPage}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F2F6FF'
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
              backgroundColor: '#F2F6FF'
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
              backgroundColor: '#F2F6FF'
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
              backgroundColor: '#F2F6FF'
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
              backgroundColor: '#F2F6FF'
            },
            ...TransitionPresets.SlideFromRightIOS,
            headerTitle: "",
          }}
          component={SetUpPin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
