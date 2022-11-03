import { KeyboardAvoidingViewComponent, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BalancePage = () => {
    const image1 =
      "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";
  return (
    <KeyboardAvoidingViewComponent>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#270041",
            width: "100%",
            top: 0,
            height: 300,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              justifyContent: "space-between",
              top: 50,
              paddingBottom: 10,
              marginLeft: 15,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: image1 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
              }}
            />
            <MaterialCommunityIcons
              name="code-brackets"
              size={34}
              color="white"
            />
          </View>
          <Text
            style={{
              color: "#fff",
              marginTop: 10,
              justifyContent: "center",
              textAlign: "center",
              top: 50,
              fontSize: 24,
            }}
          >
            ¡Hola Hermenegildo!
          </Text>
          <Text
            style={{
              color: "#fff",
              marginTop: 10,
              justifyContent: "center",
              textAlign: "center",
              top: 50,
              fontSize: 18,
            }}
          >
            ¿Qué quieres hacer hoy?
          </Text>
          <View
            style={{
              marginTop: 70,
              paddingLeft: 30,
              marginHorizontal: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={[
                "#46F2FB",
                "#62F2F2",
                "#5DFF3F",
                "#5DFF3F",
                "#8D00FF",
                "#8D00FF",
              ]}
              style={{ borderRadius: 5 }}
            >
              <Pressable style={styles.circleGradient}>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 16,
                    paddingTop: 10,
                  }}
                >
                  Depositar
                </Text>
              </Pressable>
            </LinearGradient>
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={[
                "#46F2FB",
                "#62F2F2",
                "#5DFF3F",
                "#5DFF3F",
                "#8D00FF",
                "#8D00FF",
              ]}
              style={{ borderRadius: 5 }}
            >
              <Pressable style={styles.circleGradient}>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 16,
                    paddingTop: 10,
                  }}
                >
                  Comprar
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingViewComponent>
  );
}

export default BalancePage

const styles = StyleSheet.create({})