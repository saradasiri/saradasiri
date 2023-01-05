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
import AccountLevel from "./views/accountLevel/accountLevel";
import CompleteProfileProcess1 from "./views/completeProfile/completeProfile1/completeProfileProcess1";
import CompleteProfileProcess2 from "./views/completeProfile/completeProfile2/completeProfileProcess2";
import CompleteProfileProcess3 from "./views/completeProfile/completeProfile3/completeProfileProcess3";
import CompleteProfile4 from "./views/completeProfile/completeProfile4/completeProfile4";
import WalletHome from "./views/walletHome/walletHome";
import HomePage from "./views/homePage";
import JoinVadi from "./views/joinVadi";
import RegisterSuccess from "./views/registerSuccess";
import BalancePage from "./views/walletHome/balancePage";
import BalancePage1 from "./views/walletHome/balancePage1";
import { Text, Image } from "react-native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import CoinDetails from "./views/coinDetails/coinDetails";
import { Store } from "./src/redux/store";

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

function ConvertTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="keypad"
      screenOptions={{
        headerShown: false,
        headerTitle: "",
      }}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          top: -580,
          justifyContent: "space-between",
          width: 0,
          height:0,
          backgroundColor: "#ffffff",
          elevation: 0,
        },
      }}
      
    >
      <Tab.Screen
        name="keypad"
        component={ConvertProcess}
        options={{
          tabBarIcon: ({ focused }) => {
            // const image = focused
            //   ? require("./assets/homeButton2.png")
            //   : require("./assets/homeButton.png");
            return (
              <Text
                style={{
                  backgroundColor: focused ? "#2D0052" : "white",
                  width: 120,
                  height: 45,
                  borderRadius: 10,
                  textAlign: "center",
                  color: focused ? "white" : "#2D0052",
                  borderWidth: 1,
                  borderColor: "#ECECEC",
                  padding: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Convert
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="bank"
        component={Bank}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text
              style={{
                backgroundColor: focused ? "#2D0052" : "white",
                color: focused ? "white" : "#2D0052",
                width: 120,
                height: 45,
                borderRadius: 10,
                textAlign: "center",
                borderWidth: 1,
                borderColor: "#ECECEC",
                padding: 10,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Limit
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bank from "./views/bank";
import Plus from "./views/plus";
import ProfileProcess from "./views/profile/profileProcess";
import Convert from "./views/fourFunctionality/convert";
import ConvertProcess from "./views/fourFunctionality/convertProcess";
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="walletHome"
      screenOptions={{
        headerShown: false,
        headerTitle: "",
      }}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          height: 100,
          bottom: 50,
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#ffffff",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="walletHome"
        component={WalletHome}
        options={{
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require("./assets/homeButton2.png")
              : require("./assets/homeButton.png");
            return <Image source={image} style={{ width: 24 }} />;
          },
        }}
      />
      <Tab.Screen
        name="bank"
        component={Bank}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ alignSelf: "center", width: 25, height: 22 }}
              source={require("./assets/exchange.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={ConvertTabs}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ alignSelf: "center", width: 64, height: 64, top: -10 }}
              source={require("./assets/plus.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="balancePage"
        component={BalancePage}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ alignSelf: "center", width: 25, height: 22 }}
              source={require("./assets/graph.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="balancePage1"
        component={BalancePage1}
        options={{
          tabBarIcon: ({ focused }) => {
            const image = focused
              ? require("./assets/wallet2.png")
              : require("./assets/wallet.png");
            return <Image source={image} style={{ width: 28 }} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileProcess}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="coinDetails"
          screenOptions={{ headerTitle: "", headerShown: false }}
        >
          <Stack.Screen name="convertTabs" component={ConvertTabs} />
          <Stack.Screen name="tabs" component={MyTabs} />
          <Stack.Screen name="convert" component={Convert} />
          <Stack.Screen name="homepage" component={HomePage} />
          <Stack.Screen name="joinVadi" component={JoinVadi} />
          <Stack.Screen name="registerSuccess" component={RegisterSuccess} />
          <Stack.Screen name="introSlides" component={IntroSlides} />
          <Stack.Screen name="coinDetails" component={CoinDetails} />
          {/* <Stack.Screen
            name="balancePage"
            options={{ ...TransitionPresets.SlideFromRightIOS }}
            component={BalancePage}
          />
          <Stack.Screen
            name="balancePage1"
            options={{ ...TransitionPresets.SlideFromRightIOS }}
            component={BalancePage1}
          /> */}
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
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            component={SetUpPin}
          />
          {/* <Stack.Screen
            name="walletHome"
            options={{ ...TransitionPresets.SlideFromRightIOS }}
            component={WalletHome}
          /> */}
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            name="accountLevel"
            component={AccountLevel}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            name="completeProfile1"
            component={CompleteProfileProcess1}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            name="completeProfile2"
            component={CompleteProfileProcess2}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            name="completeProfile3"
            component={CompleteProfileProcess3}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
            name="completeProfile4"
            component={CompleteProfile4}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
