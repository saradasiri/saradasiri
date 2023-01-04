import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addCyptoName } from "./redux/actions";

const Listitem = ({ image, change, title, symbol, price , key}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  const handleClick =(title, image)=>{
    dispatch(addCyptoName(title));
    const obj ={
      name:title,
      symbol:image
    }
    navigation.navigate('buycoinsdata',obj)
  }
  const priceChange = change.toString().includes('-') ? 'red': 'green'
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "rgba(128,128,128,0.25)",
        marginBottom:20
      }}
      key={key}
      onPress={()=>{change !=="" ? handleClick(title, image): null}}
    >
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{uri : image}} style={styles.Image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right Side */}

        <View style={styles.rightWrapper}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/vect.png")}
              width={25}
              height={25}
              style={{marginTop:10, marginRight:10}}
            />
            <Text
              style={[styles.title, { color: "#2D0052", fontWeight: "bold",top:10  }]}
            >
              {" "}
             $ {price}
            </Text>
          </View>
          <Text style={[styles.subtitle, { color: priceChange,top:-10 }]}>
            {change}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Listitem;

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 0,
    // marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",  
  },
  Image: {
    height: 45,
    width: 45,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 14,
    color: "#2D0052",
    fontWeight: "700",
    fontFamily: "NunitoSans_400Regular",
  },
  subtitle: {
    fontSize: 14,
    color: "#8D00FF",
    marginTop: 4,
    fontFamily: "NunitoSans_400Regular",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
