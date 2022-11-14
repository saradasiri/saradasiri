// import {
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Button,
//   Pressable,
// } from "react-native";
// import axios from "axios";
// import moment from "moment";
// import Toast from "react-native-toast-message";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useState } from "react";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
// import { useFonts } from "expo-font";
// // import AppLoading from "expo-app-loading";
// import { useNavigation } from "@react-navigation/native";
// import Checkbox from "expo-checkbox";
// import Modal from "react-native-modal";
// // import TermsConditions from "../../../src/termsConditions/termsConditions";
// import { API_PATHS } from "../../../src/constants/apiPaths";

// const CompleteProfile4 = (profile3) => {
//   const navigation = useNavigation();
//   const [isNatural, setIsNatural] = useState(false);
//   const [isGeo, setIsGeo] = useState(false);
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [isFrontModalVisible, setIsFrontModalVisible] = React.useState(false);
//   const [isBehindModalVisible, setIsBehindModalVisible] = React.useState(false);
//   const [isAddressModalVisible, setIsAddressModalVisible] =
//     React.useState(false);

//   const frontDocModal = () =>
//     setIsFrontModalVisible(() => !isFrontModalVisible);
//   const behindDocModal = () =>
//     setIsBehindModalVisible(() => !isBehindModalVisible);
//   const addressDocModal = () =>
//     setIsAddressModalVisible(() => !isAddressModalVisible);

//   let [fontsLoad, error] = useFonts({
//     NunitoSans_400Regular,
//   });

//   const [isTermsConditions, setIsTermsConditions] = React.useState(false);
//   const termsDocModal = () => setIsTermsConditions(() => !isTermsConditions);

//   if (!fontsLoad) {
//     return null;
//   }

//   const docUpload = () => {
//     if (profile3.route.params.frontDoc.name) {
//       const file = {
//         uri: profile3.route.params.frontDoc.uri,
//         name: profile3.route.params.frontDoc.name,
//         type: profile3.route.params.frontDoc.mimeType,
//       };
//       const body1 = new FormData();
//       body1.append("file", file);
//       const headers = {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       };
//       axios
//         .post(
//           `https://apiforvadi.herokuapp.com/api/profile/file/upload/idFront/${profile3.route.params.email}`,
//           body1,
//           { headers: headers }
//         )
//         .then(function (response) {
//           // console.log("image upload successfully", response.data);
//         })
//         .catch((error) => {
//           // console.log("error raised", error);
//         });
//     }

//     if (profile3.route.params.behindDoc.name) {
//       const file = {
//         uri: profile3.route.params.behindDoc.uri,
//         name: profile3.route.params.behindDoc.name,
//         type: profile3.route.params.behindDoc.mimeType,
//       };
//       const body2 = new FormData();
//       body2.append("file", file);
//       const headers = {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       };
//       axios
//         .post(
//           `https://apiforvadi.herokuapp.com/api/profile/file/upload/idBackSide/${profile3.route.params.email}`,
//           body2,
//           { headers: headers }
//         )
//         .then(function (response) {
//           // console.log("image upload successfully", response.data);
//         })
//         .catch((error) => {
//           // console.log("error raised", error);
//         });
//     }

//     if (profile3.route.params.addressDoc.name) {
//       const file = {
//         uri: profile3.route.params.addressDoc.uri,
//         name: profile3.route.params.addressDoc.name,
//         type: profile3.route.params.addressDoc.mimeType,
//       };
//       const body3 = new FormData();
//       body3.append("file", file);
//       const headers = {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       };

//       axios
//         .post(
//           `https://apiforvadi.herokuapp.com/api/profile/file/upload/idAddress/${profile3.route.params.email}`,
//           body3,
//           { headers: headers }
//         )
//         .then(function (response) {
//           // console.log("image upload successfully", response.data);
//         })
//         .catch((error) => {
//           // console.log("error raised", error);
//         });
//     }
//     const login = {
//       isTokenSubscribed: profile3.route.params.isTokenSubscribed,
//       email: profile3.route.params.email,
//     };

//     navigation.navigate("funding", login);
//   };

//   const handleFormSubmit = () => {
//     const profile4 = {
//       range: profile3.route.params.range,
//       lower: profile3.route.params.lower,
//       upper: profile3.route.params.upper,
//       fundAmount: Number(profile3.route.params.fund),
//       firstName: profile3.route.params.firstName,
//       lastName: profile3.route.params.secondName,
//       fullName: profile3.route.params.name,
//       dateOfBirth: profile3.route.params.dateISO,
//       nationality: profile3.route.params.nationality,
//       countryCode: profile3.route.params.countryCode,
//       countryOfBirth: profile3.route.params.countryBirth,
//       cURP: profile3.route.params.curp ? Number(profile3.route.params.curp) : 0,
//       rFC: profile3.route.params.rfc ? Number(profile3.route.params.rfc) : 0,
//       phoneNumber: Number(profile3.route.params.phone),
//       tax: profile3.route.params.tax ? Number(profile3.route.params.tax) : 0,
//       occupation: profile3.route.params.occupation
//         ? profile3.route.params.occupation
//         : " ",
//       // age: profile3.route.params.age,
//       // homeAddress: " ",
//       street: profile3.route.params.street,
//       exterior: profile3.route.params.exterior,
//       interior: profile3.route.params.inside,
//       postalCode: Number(profile3.route.params.postalCode),
//       colony: profile3.route.params.colony,
//       muncipiality: profile3.route.params.municipality,
//       state: profile3.route.params.state,
//       documentNo:
//         profile3.route.params.range === "$0 - $9,999"
//           ? " "
//           : profile3.route.params.documentNo
//           ? profile3.route.params.documentNo
//           : " ",
//       isGeo: isGeo.toString(),
//       isEmailVerified: true,
//       isProfileCompleted: true,
//     };

//     const login = {
//       isTokenSubscribed: "true",
//       email: "vikashchandra458@gmail.com",
//     };
//     navigation.navigate("walletHome", login);

//     // console.log(profile4);
//     // axios
//     //   .post(API_PATHS.CREATE_PROFILE + profile3.route.params.email, profile4)
//     //   .then((res) => {
//     //     // console.log(res.data.message);
//     //     if (res.data.message) {
//     //       Toast.show({
//     //         type: "info",
//     //         text1: res.data.message,
//     //       });
//     //       docUpload();
//     //     }
//     //   })
//     //   .catch((err) => {
//     //     // console.log(err.message);
//     //     if (err.message) {
//     //       Toast.show({
//     //         type: "info",
//     //         text1: err.message,
//     //       });
//     //     }
//     //   });
//   };

//   return (
//     <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View>
//           <StatusBar style="auto" />
//           <Image
//             style={styles.Logo}
//             source={require("../../../assets/vlogo.png")}
//           />
//           <Text>{profile3.route.params.range === "$0 - $9,999"}</Text>

//           {profile3.route.params.range === "$0 - $9,999" ? (
//             <View style={styles.tab}>
//               <View
//                 style={[
//                   styles.tab1,
//                   { marginLeft: 0, backgroundColor: "#D9D9D9" },
//                 ]}
//               >
//               <Text>1</Text>
//               </View>

//               <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
//                 <Text>2</Text>
//               </View>

//               <View style={[styles.tab1, { backgroundColor: "#00BFFF" }]}>
//                 <Text>3</Text>
//               </View>
//             </View>
//           ) : (
//             <View style={styles.tab}>
//               <View
//                 style={[
//                   styles.tab1,
//                   { marginLeft: 0, backgroundColor: "#D9D9D9" },
//                 ]}
//               >
//                 <Text>1</Text>
//               </View>

//               <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
//                 <Text>2</Text>
//               </View>

//               <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
//                 <Text>3</Text>
//               </View>

//               <View style={[styles.tab1, { backgroundColor: "#00BFFF" }]}>
//                 <Text>4</Text>
//               </View>
//             </View>
//           )}

//           {profile3.route.params.range === "$0 - $9,999" ? (
//             <View style={[styles.dottedline, { width: 120, left: 90 }]}></View>
//           ) : (
//             <View style={styles.dottedline}></View>
//           )}

//           <View>
//             <Text style={styles.Label}>Confirmation</Text>
//           </View>

//           <View style={{ paddingTop: 40 }}>
//             <Text style={[styles.text, { color: "#33B7B0", top: 30 }]}>
//               Investment
//             </Text>
//             <View
//               style={[
//                 styles.inputStyle,
//                 {
//                   borderColor: "#33B7B0",
//                 },
//               ]}
//             >
//               <View style={[styles.totalText, { marginTop: 20 }]}>
//                 <Text style={styles.personalText}>Selected Range :</Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.range}
//                 </Text>
//               </View>

//               <View style={[styles.totalText, { marginBottom: 20 }]}>
//                 <Text style={styles.personalText}>Monthly Investment :</Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.fund}
//                 </Text>
//               </View>
//             </View>
//           </View>

//           <View>
//             <Text style={[styles.text, { color: "#33B7B0" }]}>
//               Personal Data
//             </Text>
//             <View
//               style={[
//                 styles.inputStyle,
//                 {
//                   borderColor: "#33B7B0",
//                 },
//               ]}
//             >
//               <View style={[styles.totalText, { marginTop: 20 }]}>
//                 <Text style={styles.personalText}>First Name : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.firstName}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Last Name : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.secondName}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Full Name : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.name}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Date of Birth : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.birth}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Country Of Birth : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.countryBirth}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>nationality : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.nationality}
//                 </Text>
//               </View>

//               {profile3.route.params.curp ? (
//                 <View style={styles.totalText}>
//                   <Text style={styles.personalText}>CURP : </Text>
//                   <Text
//                     style={styles.displayText}
//                     numberOfLines={1}
//                     ellipsizeMode={"tail"}
//                   >
//                     {profile3.route.params.curp}{" "}
//                   </Text>
//                 </View>
//               ) : null}

//               {profile3.route.params.rfc ? (
//                 <View style={styles.totalText}>
//                   <Text style={styles.personalText}>RFC : </Text>
//                   <Text
//                     style={styles.displayText}
//                     numberOfLines={1}
//                     ellipsizeMode={"tail"}
//                   >
//                     {profile3.route.params.rfc}
//                   </Text>
//                 </View>
//               ) : null}

//               {profile3.route.params.tax ? (
//                 <View style={styles.totalText}>
//                   <Text style={styles.personalText}>Tax ID : </Text>
//                   <Text
//                     style={styles.displayText}
//                     numberOfLines={1}
//                     ellipsizeMode={"tail"}
//                   >
//                     {profile3.route.params.tax}
//                   </Text>
//                 </View>
//               ) : null}

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Phone Number : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.phone}
//                 </Text>
//               </View>

//               {profile3.route.params.occupation ? (
//                 <View style={styles.totalText}>
//                   <Text style={styles.personalText}>Occupation : </Text>
//                   <Text
//                     style={styles.displayText}
//                     numberOfLines={1}
//                     ellipsizeMode={"tail"}
//                   >
//                     {profile3.route.params.occupation}
//                   </Text>
//                 </View>
//               ) : null}

//               <View style={[styles.totalText, { marginBottom: 20 }]}></View>
//             </View>
//           </View>

//           <View>
//             <Text style={[styles.text, { color: "#33B7B0" }]}>Address</Text>
//             <View
//               style={[
//                 styles.inputStyle,
//                 {
//                   borderColor: "#33B7B0",
//                 },
//               ]}
//             >
//               <View style={[styles.totalText, { marginTop: 20 }]}>
//                 <Text style={styles.personalText}>Street : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.street}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>No. Exterior : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.inside}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>No. Inside : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.inside}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Postal Code : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.postalCode}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Colony : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.colony}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>Municipality : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.municipality}
//                 </Text>
//               </View>

//               <View style={styles.totalText}>
//                 <Text style={styles.personalText}>State : </Text>
//                 <Text
//                   style={styles.displayText}
//                   numberOfLines={1}
//                   ellipsizeMode={"tail"}
//                 >
//                   {profile3.route.params.state}
//                 </Text>
//               </View>

//               <View style={[styles.totalText, { marginBottom: 20 }]}></View>
//             </View>
//           </View>

//           {profile3.route.params.range === "$0 - $9,999" ? null : (
//             <View>
//               <Text style={[styles.text, { color: "#33B7B0" }]}>Documents</Text>
//               <View
//                 style={[
//                   styles.inputStyle,
//                   {
//                     borderColor: "#33B7B0",
//                   },
//                 ]}
//               >
//                 <View style={[styles.totalText, { marginTop: 20 }]}>
//                   <Text style={styles.personalText}>
//                     {profile3.route.params.nationality === "MX"
//                       ? "Official ID front : "
//                       : "Valid Passport : "}
//                   </Text>
//                   <Pressable onPress={frontDocModal}>
//                     <Text
//                       style={[styles.displayText, { width: 150 }]}
//                       numberOfLines={1}
//                       ellipsizeMode={"middle"}
//                     >
//                       {profile3.route.params.frontDoc.name}
//                     </Text>
//                   </Pressable>
//                   <Modal
//                     isVisible={isFrontModalVisible}
//                     style={styles.modalContainer}
//                   >
//                     <Image
//                       style={styles.image}
//                       source={profile3.route.params.frontDoc}
//                     />
//                     <Pressable
//                       style={styles.modalButton}
//                       onPress={frontDocModal}
//                     >
//                       <LinearGradient
//                         start={{ x: 0, y: 0 }}
//                         end={{ x: 1, y: 0 }}
//                         colors={["#4E68E1", "#33B9AF"]}
//                         width={250}
//                         height={50}
//                         style={[{ borderRadius: 100 }]}
//                       >
//                         <Text style={styles.buttonText}>Close</Text>
//                       </LinearGradient>
//                     </Pressable>
//                   </Modal>
//                 </View>

//                 {profile3.route.params.behindDoc.name ? (
//                   <View style={styles.totalText}>
//                     <Text style={styles.personalText}>
//                       Official ID Behind :
//                     </Text>
//                     <Pressable onPress={behindDocModal}>
//                       <Text
//                         style={[styles.displayText, { width: 150 }]}
//                         numberOfLines={1}
//                         ellipsizeMode={"middle"}
//                       >
//                         {profile3.route.params.behindDoc.name}
//                       </Text>
//                     </Pressable>
//                     <Modal
//                       isVisible={isBehindModalVisible}
//                       style={styles.modalContainer}
//                     >
//                       <Image
//                         style={styles.image}
//                         source={profile3.route.params.behindDoc}
//                       />
//                       <Pressable
//                         style={styles.modalButton}
//                         onPress={behindDocModal}
//                       >
//                         <LinearGradient
//                           start={{ x: 0, y: 0 }}
//                           end={{ x: 1, y: 0 }}
//                           colors={["#4E68E1", "#33B9AF"]}
//                           width={250}
//                           height={50}
//                           style={[{ borderRadius: 100 }]}
//                         >
//                           <Text style={styles.buttonText}>Close</Text>
//                         </LinearGradient>
//                       </Pressable>
//                     </Modal>
//                   </View>
//                 ) : null}

//                 <View style={styles.totalText}>
//                   <Text style={styles.personalText}>
//                     {profile3.route.params.nationality === "MX"
//                       ? "Identification number : "
//                       : "Passport Number : "}
//                   </Text>
//                   <Text
//                     style={[styles.displayText, { width: 150 }]}
//                     numberOfLines={1}
//                     ellipsizeMode={"middle"}
//                   >
//                     {profile3.route.params.documentNo}
//                   </Text>
//                 </View>

//                 {profile3.route.params.addressDoc.name ? (
//                   <View style={styles.totalText}>
//                     <Text style={styles.personalText}>Proof of address : </Text>
//                     <Pressable onPress={addressDocModal}>
//                       <Text
//                         style={[styles.displayText, { width: 150 }]}
//                         numberOfLines={1}
//                         ellipsizeMode={"middle"}
//                       >
//                         {profile3.route.params.addressDoc.name}
//                       </Text>
//                     </Pressable>
//                     <Modal
//                       isVisible={isAddressModalVisible}
//                       style={styles.modalContainer}
//                     >
//                       <Image
//                         style={styles.image}
//                         source={profile3.route.params.addressDoc}
//                       />
//                       <Pressable
//                         style={styles.modalButton}
//                         onPress={addressDocModal}
//                       >
//                         <LinearGradient
//                           start={{ x: 0, y: 0 }}
//                           end={{ x: 1, y: 0 }}
//                           colors={["#4E68E1", "#33B9AF"]}
//                           width={250}
//                           height={50}
//                           style={[{ borderRadius: 100 }]}
//                         >
//                           <Text style={styles.buttonText}>Close</Text>
//                         </LinearGradient>
//                       </Pressable>
//                     </Modal>
//                   </View>
//                 ) : null}

//                 <View style={[styles.totalText, { marginBottom: 20 }]}></View>
//               </View>
//             </View>
//           )}

//           <View style={styles.agreement}>
//             <Checkbox
//               style={styles.checkbox}
//               value={isNatural}
//               onValueChange={setIsNatural}
//               color={isNatural ? "#33B7B0" : undefined}
//             />
//             {/* <TouchableOpacity> */}
//             <Text style={styles.agreementText}>
//               I confirm that I am a natural person acting on my own account.
//             </Text>
//             {/* </TouchableOpacity> */}
//           </View>

//           <View style={styles.agreement}>
//             <Checkbox
//               style={styles.checkbox}
//               value={isGeo}
//               onValueChange={setIsGeo}
//               color={isGeo ? "#33B7B0" : undefined}
//             />
//             {/* <TouchableOpacity> */}
//             <Text style={styles.agreementText}>
//               I authorize my geolocation to be stored.
//             </Text>
//             {/* </TouchableOpacity> */}
//           </View>

//           <View style={styles.agreement}>
//             <Checkbox
//               style={styles.checkbox}
//               value={isAccepted}
//               onValueChange={setIsAccepted}
//               color={isAccepted ? "#33B7B0" : undefined}
//             />
//             <View style={{ flexDirection: "row" }}>
//               <Text style={styles.agreementText}>
//                 I have read and accept the
//                 <Pressable onPress={termsDocModal}>
//                   <Text style={{ textDecorationLine: "underline" }}>
//                     Terms and Conditions.
//                   </Text>
//                 </Pressable>
//               </Text>
//             </View>
//             <Modal
//               isVisible={isTermsConditions}
//               style={[styles.modalContainer, { backgroundColor: "white" }]}
//             >
//               <Text
//                 style={[
//                   styles.modalLevel,
//                   {
//                     fontSize: 19,
//                     fontWeight: "bold",
//                     marginBottom: 20,
//                     marginTop: 20,
//                   },
//                 ]}
//               >
//                 Términos y Condiciones de Uso de
//               </Text>
//               <ScrollView>
//                 <Text style={[styles.modalLevel, { width: 300, fontSize: 11 }]}>
//                   {/* <TermsConditions /> */}
//                 </Text>
//               </ScrollView>
//               <Pressable
//                 style={[
//                   styles.modalButton,
//                   { marginBottom: 20, marginTop: 20 },
//                 ]}
//                 onPress={() => {
//                   setIsAccepted(true);
//                   termsDocModal();
//                 }}
//               >
//                 <LinearGradient
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   colors={["#4E68E1", "#33B9AF"]}
//                   width={250}
//                   height={50}
//                   style={[{ borderRadius: 100 }]}
//                 >
//                   <Text style={styles.buttonText}>Accept</Text>
//                 </LinearGradient>
//               </Pressable>
//             </Modal>
//           </View>

//           <View style={{ marginBottom: 50, left: 9 }}>
//             <TouchableOpacity
//               // disabled={!(isAccepted && isNatural && isGeo)}
//               onPress={() => {
//                 handleFormSubmit();
//                 // isAccepted && isNatural && isGeo
//                 //   ? handleFormSubmit()
//                 //   : Alert.alert(
//                 //       "Please agree the terms and Condition to proceed"
//                 //     );
//               }}
//             >
//               <View style={styles.button}>
//                 <Text style={styles.buttonText}>Confirm</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   MainContainer: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#F2F6FF",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   Logo: {
//     height: 50,
//     width: 180,
//     marginTop: 20,
//     alignSelf: "center",
//     marginBottom: 25,
//   },
//   tab: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   tab1: {
//     width: 35,
//     height: 35,
//     marginLeft: 30,
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   dottedline: {
//     borderColor: "#33B7B0",
//     borderStyle: "dotted",
//     borderWidth: 0.5,
//     width: 190,
//     zIndex: -1,
//     left: 69,
//     top: -17,
//   },
//   Label: {
//     marginTop: 20,
//     fontWeight: "400",
//     fontSize: 24,
//     lineHeight: 27,
//     textAlign: "center",
//   },
//   button: {
//     height: 50,
//     width: 322,
//     borderRadius: 5,
//     backgroundColor: "#2D0052",
//     alignSelf: "center",
//     borderBottomRightRadius: 0,
//     borderBottomLeftRadius: 0,
//   },
//   totalText: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     alignContent: "center",
//     borderColor: "#B9B9B9",
//     borderWidth: 0.3,
//     left: -11,
//     paddingLeft: 6,
//     paddingRight: 6,
//   },
//   personalText: {
//     lineHeight: 27,
//     color: "#4E68E1",
//     fontFamily: "NunitoSans_400Regular",
//   },
//   displayText: {
//     left: 10,
//     width: 155,
//     lineHeight: 27,
//     color: "black",
//     fontSize: 16,
//     fontFamily: "NunitoSans_400Regular",
//   },
//   agreement: {
//     left: 15,
//     display: "flex",
//     flexDirection: "row",
//     fontFamily: "NunitoSans_400Regular",
//     marginBottom: 30,
//   },
//   checkbox: {
//     borderColor: "#33B7B0",
//     opacity: 0.8,
//     width: 20,
//     height: 20,
//     borderRadius: 6,
//   },
//   agreementText: {
//     top: -3,
//     paddingLeft: 16,
//     width: 290,
//   },
//   buttonText: {
//     textAlign: "center",
//     alignContent: "center",
//     paddingTop: 10,
//     color: "#ffff",
//     fontFamily: "NunitoSans_400Regular",
//     fontSize: 20,
//   },
//   text: {
//     position: "absolute",
//     top: -10,
//     left: 15,
//     zIndex: 90,
//     fontFamily: "NunitoSans_400Regular",
//     backgroundColor: "#F2F6FF",
//     paddingHorizontal: 20,
//     fontSize: 16,
//   },
//   inputStyle: {
//     borderStyle: "dotted",
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 5,
//     paddingTop: 5,
//     paddingLeft: 30,
//     marginBottom: 40,
//   },
//   image: {
//     width: 300,
//     height: 600,
//     resizeMode: "stretch",
//   },
//   modalButton: {
//     borderRadius: 100,
//     textAlign: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//     marginBottom: 50,
//   },
//   modalContainer: {
//     width: 322,
//     height: 500,
//     alignItems: "center",
//     alignSelf: "center",
//     borderRadius: 20,
//   },
// });
// export default CompleteProfile4;
