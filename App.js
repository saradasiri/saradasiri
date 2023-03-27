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
import { Text, Image, StatusBar } from "react-native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import CoinDetails from "./views/coinDetails/coinDetails";
import { Store } from "./src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bank from "./views/bank";
import Plus from "./views/plus";
import ProfileProcess from "./views/profile/profileProcess";
import Convert from "./views/fourFunctionality/convert";
import ConvertProcess from "./views/fourFunctionality/convertProcess";
import BuyCoinsData from "./views/fourFunctionality/buyCoinsData";
import AddFund from "./views/fourFunctionality/addFund";
import PaymentGateway from "./views/paymentScreens/paymentGateway";
import Checkout from "./views/paymentScreens/checkout";
import PaymentPage from "./views/paymentScreens/paymentPage";
import PaymentStatus from "./views/paymentScreens/paymentStatus";
import SellCoin from "./views/fourFunctionality/sellCoin";
import StackExchange from "./views/fourFunctionality/stackExchange";
import QrCode from "./views/fourFunctionality/qrCode";
import Refferal from "./views/fourFunctionality/refferal";
// import Logout from "./src/logout";
const Tab = createBottomTabNavigator();
function MyTabs() {
  const userEmail = AsyncStorage.getItem("@userEmail");
  return (
    <>
    <StatusBar backgroundColor={"black"} />
      {userEmail != null ? (
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
              backBehavior: "none",
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
            component={AddFund}
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
            name="functions"
            component={ConvertProcess}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ tintColor }) => (
                <Image
                  style={{
                    alignSelf: "center",
                    width: 64,
                    height: 64,
                    top: -10,
                  }}
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
          <Tab.Screen
            name="buycoinsdata"
            component={BuyCoinsData}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="paymentGateway"
            component={PaymentGateway}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="checkout"
            component={Checkout}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="paymentPage"
            component={PaymentPage}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="sellcoin"
            component={SellCoin}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="stackexchange"
            component={StackExchange}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="qrCode"
            component={QrCode}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="refferal"
            component={Refferal}
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
        </Tab.Navigator>
      ) : null}
    </>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
    <StatusBar backgroundColor={"black"} />
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="homepage"
          screenOptions={{ headerTitle: "", headerShown: false }}
        >
          <Stack.Screen name="tabs" component={MyTabs} />
          <Stack.Screen name="paymentStatus" component={PaymentStatus} />
          <Stack.Screen
            name="plus"
            component={Plus}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "white" },
              ...TransitionPresets.SlideFromRightIOS,
              headerRight: (props) => <BellMenu {...props} />,
            }}
          />
          {/* <Stack.Screen name="logout" component={Logout} /> */}
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
