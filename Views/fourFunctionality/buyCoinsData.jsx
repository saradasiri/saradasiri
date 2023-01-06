import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { API_PATHS } from "../../src/constants/apiPaths";
import CyptoDetails from "../../src/cyptoDetails";
const screenWidth = Dimensions.get("window").width;
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import moment from "moment";
import globalStyles from "../../globalStyles";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const About = () => (
  <View style={{ flex: 1 }}>
    <CyptoDetails />
  </View>
);

const News = (data) => (
  <View style={{ flex: 1 }}>
    <Text>World</Text>
  </View>
);

const BuyCoinsData = (obj) => {
  const navigation = useNavigation();
  const [name, setName] = useState(obj.route.params.name);
  const [total, setTotal] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  useEffect(() => {
    setLoaded(true);
  });
  useEffect(() => {
    const today = Math.round(new Date() / 1000);
    const previous7day = Math.round(
      new Date().setDate(new Date().getDate() - 7) / 1000
    );
    axios
      .get(
        `https://vadi.ixiono.tech/api/coins/pricegraph?id=${obj.route.params.id}&from=${previous7day}&to=${today}`
      )
      .then((res) => {
        const col = [];
        if (res.data.prices) {
          res.data.prices.map((item) => {
            col.push(item[1]);
            return col;
          });

          setTotal(col);
        }
      });
  }, [loaded]);
  const days = [
    moment().add(6, "days").format("ddd"),
    moment().add(5, "days").format("ddd"),
    moment().add(4, "days").format("ddd"),
    moment().add(3, "days").format("ddd"),
    moment().add(2, "days").format("ddd"),
    moment().add(1, "days").format("ddd"),
    moment().format("ddd"),
  ];

  const data = {
    labels: days,
    datasets: [
      {
        data: total.length != 0 ? total : [0],
      },
    ],
  };
  const renderScene = SceneMap({
    about: About,
    news: News,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "about", title: `About ${name}` },
    { key: "news", title: "News" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={"#2D0052"}
      inactiveColor={"rgba(18, 3, 58, 0.4)"}
      style={{ marginTop: 25, backgroundColor: "white" }}
    />
  );

  const initialLayout = {
    height: 0,
    width: Dimensions.get("window").width,
  };
  return (
    <>
      <ScrollView>
        <StatusBar style="auto" />
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
              // marginLeft: 15,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("profile");
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/image.png")}
              />
            </TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/scan.png")}
            />
          </View>

          <View
            style={{
              color: "#fff",
              marginTop: 70,
              fontWeight: "700",
              flexDirection: "row",

              marginLeft: 30,
            }}
          >
            <Image
              source={{ uri: obj.route.params.symbol }}
              style={{ height: 45, width: 45 }}
            />
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 24,
                fontFamily: "NunitoSans_400Regular",
                marginLeft: 15,
                fontWeight: "700",
              }}
            >
              {name}
            </Text>
          </View>
        </View>
        {/* <View
        style={{
          alignSelf: "center",
          backgroundColor: "#fff",
          marginHorizontal: 20,
          ...styles.shadow,
          borderRadius: 20,
          width: wp("86%"),
          justifyContent: "center",
          top: -80,
          backgroundColor: "white",
          height: 100,
        }}
      ></View> */}

        <LineChart
          onDataPointClick={(data) => {
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;
            isSamePoint
              ? setTooltipPos((previousState) => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
          data={data}
          width={Dimensions.get("window").width * 0.95}
          height={200}
          // withVerticalLabels={false}
          withHorizontalLabelsLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          // withShadow={false}
          // withOuterLines={false}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          // yAxisInterval={1} // optional, defaults to 1
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <Rect
                    x={tooltipPos.x - 80}
                    y={tooltipPos.y + 10}
                    width="50%"
                    height="30"
                    fill="black"
                  />
                  <TextSVG
                    x={tooltipPos.x + 5}
                    y={tooltipPos.y + 30}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {tooltipPos.value}
                  </TextSVG>
                </Svg>
              </View>
            ) : null;
          }}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            propsForVerticalLabels: {
              paddingLeft: 50,
            },
            propsForLabels: {
              fontSize: "16",
            },
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(141, 0, 255, 1)`,
            labelColor: (opacity = 1) => `rgba(18, 3, 58, 0.4)`,
            style: {
              borderRadius: 16,
              alignSelf: "center",
            },
            propsForDots: {
              r: "1",
              strokeWidth: "1",
              stroke: "blue",
            },
            propsForBackgroundLines: {
              stroke: "#ffffff",
            },
          }}
          bezier
          verticalLabelRotation={1}
          style={{
            // marginVertical: 8,
            borderRadius: 16,
            paddingRight: 10,
            paddingLeft: 10,
            top: -80,
            elevation: 5,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            backgroundColor: "#8D00FF",
            width: "90%",
            marginHorizontal: "5%",
            borderRadius: 10,
            marginTop: -60,
            marginBottom:-5
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#fff",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Image
              style={{
                width: 15,
                // height: 25,
                backgroundColor: "#fff",
                alignSelf: "center",
                justifyContent: "center",
              }}
              source={require("../../assets/swap2.png")}
            />
          </View>
          <Text
            style={[
              globalStyles.text,
              {
                alignSelf: "center",
                textAlign: "center",
                fontFamily: "NunitoSans_400Regular",
                color: "#fff",
              },
            ]}
          >
            Switch To USD
          </Text>
          <Text></Text>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          // initialLayout={{ height: 1500 }}
          renderTabBar={renderTabBar}
          style={{ height: 600 }}
        />
      </ScrollView>
    </>
  );
};

export default BuyCoinsData;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 10,
  },
});
