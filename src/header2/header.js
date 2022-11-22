import { Menu, Divider, Provider } from "react-native-paper";
import React from "react";
import { View, Image,TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import onClickOutside from 'react-onclickoutside'
import { MaterialIcons } from '@expo/vector-icons';


export default function Header() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  
  const closeMenu = () => setVisible(false);

  const navigation = useNavigation();
  // BellMenu.handleClickOutside = () => setVisible(false);

  return (
    <Provider style={{ backgroundColor:'grey' }}>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Menu
          style={{top:60, width:150, left:122}}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <View style={{ flexDirection: "row", top: -40, }}>
              <Image
                style={{ left: -100 }}
                source={require("../../assets/menuLogo.png")}
              />
              <TouchableOpacity
                style={{ right: 10, top: 5 }}
                onPress={() => {openMenu()}}
              >
                <MaterialIcons name="menu-open" size={24} color="black" />
              </TouchableOpacity>
            </View>
          }
        >
          <Menu.Item onPress={() => {navigation.navigate('walletHome')}} title="Wallet" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Logout" />
          {/* <Divider /> */}
          {/* <Menu.Item onPress={() => {}} title="Nosotros" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Blog" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Enter my account" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Acquire Vadi Tokens" /> */}
        </Menu>
      </View>
    </Provider>
  );
}

