import LoginProcess from "./views/login/loginProcess";
import IntroSlides from "./views/introSlides";
import LandingPage from "./views/landingPage/landingPage"
// import Register from './Components/Register';
// import Verification from './Components/Verification/Verification';
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ConfirmEmail from "./views/register/confirmEmail/confirmEmail";

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
          component={ConfirmEmail}
        />
        {/* <Stack.Screen name='Register'   options={{
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}component={Register}/> */}
        {/* <Stack.Screen name='Verification' options={{ headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,}} component={Verification}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
