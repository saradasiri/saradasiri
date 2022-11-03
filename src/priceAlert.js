import React from 'react'
import {Text ,View, TouchableOpacity,Image ,StyleSheet} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const PriceAlert = ({customContainerStyle})  => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#8D00FF",
        marginHorizontal: 40,
        paddingVertical: 50,
        paddingHorizontal: 10,
        // backgroundColor :"#fff",
        ...customContainerStyle,
        ...styles.shadow,
        borderRadius: 20,
        justifyContent: "center",
      }}
    >
      {/* <Image source={require("../assets/bar-chart.png")}/> */}
      <View style={{ marginLeft: 10, borderRadius: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
                      color: "#fff",
                      marginTop: -10,
            marginBottom:10,
                      textAlign: "center",
            
          }}
        >
          Desbloquea todas las funciones de Vadi.
        </Text>
        <Text style={{ marginTop:5,justifyContent:"center",textAlign:"center",color:"#fff",lineHeight:25}}>
          Valida tu identidad para que puedas ver todas las funciones del
          marketplace.
        </Text>
      </View>
     
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : "#000",
        shadowOffset : {
            width : 0,
            height : 4
        },
        shadowOpacity :0.30,
        shadowRadius : 4.65,
        elevation :8
    }
})
export default PriceAlert
