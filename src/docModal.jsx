import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import globalStyles from "../globalStyles";

const DocModal = ({ visible, doc, func }) => {
  return (
    <View>
      <Modal isVisible={visible} style={styles.modalContainer}>
        <Image style={styles.image} source={{ uri: doc.uri }} />
        <Pressable style={[globalStyles.button,{marginTop:20}]} onPress={func}>
            <Text style={globalStyles.buttonText}>Close</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

export default DocModal;

const styles = StyleSheet.create({
  image: {
    height: 650,
    width: 322,
    resizeMode: "stretch",
  },
  modalContainer: {
    width: 322,
    height: 500,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 18,
    paddingTop: 16,
    textAlign: "left",
    left: 20,
  },
});
