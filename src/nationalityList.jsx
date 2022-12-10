import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import nationality from "./nationality.json";
import globalStyles from "../globalStyles";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";

const NationalityList = ({ setOpened, func, flag }) => {
  // const [isLodaed, setLoaded] = useState(false);
  const [data, setData] = useState(nationality);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(nationality);
  // useEffect(() => {
  //   setLoaded(true);
  // });
  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.com/v2/all`)
  //     .then((res) => {
  //       setData(res.data);
  //       setFilteredDataSource(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [isLodaed]);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.nationality
          ? item.nationality.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };
  return (
    <Modal isVisible={true} style={styles.modalContainer}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={globalStyles.MainContainer}>
          <View style={{ flexDirection: "row", justifyContent:'center' }}> 
          <TouchableOpacity
            onPress={() => {
              setOpened(false);
            }}
          >
            <Image
              style={{  height: 40, top:15 }}
              source={require("../assets/close.png")}
            />
          </TouchableOpacity>
          <TextInput
            style={[
              globalStyles.inputStyle,
              { marginTop: 10, marginBottom: 10, width:'80%' },
            ]}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          /></View>
          {filteredDataSource.map((item) => {
            return (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                  borderColor: "rgba(128,128,128,0.25)",
                  marginBottom: 20,
                  width: "95%",
                  alignSelf: "center",
                  paddingLeft: -5,
                }}
                key={item.name}
                onPress={() => {
                  func(item.nationality);
                  flag(item.image);
                  setOpened(false);
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 25, height: 25, marginLeft: 20 }}
                      source={{ uri: item.image }}
                    />
                    <Text
                      style={{
                        marginLeft: 15,
                        fontFamily: "NunitoSans_400Regular",
                        fontSize: 16,
                      }}
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                    >
                      {item.nationality}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </Modal>
  );
};

export default NationalityList;

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
});
