import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1156_11334}>
        <View style={styles.View_1156_11333}>
          <View style={styles.View_1156_11332} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e68f/88ec/fd3dfc877eceffa42b230eaa7b20fbba"
            }}
            style={styles.ImageBackground_1154_9156}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cb/a4a2/9e66addacdd503e7d53775ed2178dd2d"
          }}
          style={styles.ImageBackground_1154_9212}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dca/58e8/524ce2b55aebaaed10ba6a04fe651d69"
        }}
        style={styles.ImageBackground_1154_9213}
      />
      <View style={styles.View_1154_9185}>
        <View style={styles.View_I1154_9185_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693d/6931/566514351223d8a4c854e179d168488c"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d92/8ff1/1c0c1b4ef2373162d2edbb93fb0d8371"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddcd/7ace/cfa3e6b5cfb98eee114922dab86d3bd8"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e19/b2a7/32ad5bcc10e7ca83ce8b1e7188153124"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/948e/07e2/8d1f5dcbecfddd2633208cb8db3cf9e9"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee6c/7408/c012230e6c3b4859ce37aa32f8bb2eba"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6591}
          />
          <View style={styles.View_I1154_9185_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca4/3d1e/d1a04639187f50f0d7256cf3c81c8ca8"
              }}
              style={styles.ImageBackground_I1154_9185_1124_6593}
            />
            <View style={styles.View_I1154_9185_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f782/af7c/7d7fd2670d75a413e3d184e5ef337e75"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6595}
          />
        </View>
        <View style={styles.View_I1154_9185_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de09/7fde/6ffbf1f3cc910d015d129e60c3f9558d"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffbd/802c/44e49254144b7480952c8a2dd2bb7a34"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ef/8b21/9a95949d53828fabe9c304e37addcfc4"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c0c/a799/3e56aa43b8ba9d1af2b42987364983ab"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e10/6293/903347c1e123784d0327ba226673d6e1"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa22/98d8/88ce8a186ecce5fd7e06be5c0de0e23a"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6604}
          />
          <View style={styles.View_I1154_9185_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dd3/24be/d7ad6402c33fc6b81bd8d33040fd3e5f"
              }}
              style={styles.ImageBackground_I1154_9185_1124_6606}
            />
            <View style={styles.View_I1154_9185_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe22/a050/8f7896719ebca73fa3f14dc3c643d943"
            }}
            style={styles.ImageBackground_I1154_9185_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_1154_9230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e09/6db5/ca08ffe0fe929f17767b74bc497926af"
          }}
          style={styles.ImageBackground_I1154_9230_919_98}
        />
        <View style={styles.View_I1154_9230_919_100}>
          <View style={styles.View_I1154_9230_919_102} />
          <View style={styles.View_I1154_9230_919_103}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/674f/4cfb/e49b6457581a1e10d118b045586a185b"
              }}
              style={styles.ImageBackground_I1154_9230_919_103_2327_25556}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c9/6a1f/b4c6e4984c8e4b727a43a6af0abc08ed"
        }}
        style={styles.ImageBackground_1154_9295}
      />
      <View style={styles.View_1156_9332} />
      <View style={styles.View_1156_9368}>
        <Text style={styles.Text_1156_9368}>Arrives in 6 minutes</Text>
      </View>
      <View style={styles.View_1156_9566}>
        <Text style={styles.Text_1156_9566}>TO YOUR LOCATION</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b43/43c0/ae6e5edc99b43cd8d08cb621345dde95"
        }}
        style={styles.ImageBackground_1156_9470}
      />
      <View style={styles.View_1156_9473}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166c/90e7/ac25858e33b8caa1b721045c6aad4052"
          }}
          style={styles.ImageBackground_1156_9372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5f7/7907/427407e438e28d757183534584020414"
          }}
          style={styles.ImageBackground_1154_9294}
        />
        <View style={styles.View_1156_9334}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8406/77f5/92a89222b1dbb0ad725f279acdf0985e"
            }}
            style={styles.ImageBackground_I1156_9334_924_3892}
          />
          <View style={styles.View_I1156_9334_924_3893}>
            <View style={styles.View_I1156_9334_924_3895} />
            <View style={styles.View_I1156_9334_924_3896}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21ed/c774/648545e3f0b50ea8c62a8547d4fac545"
                }}
                style={styles.ImageBackground_I1156_9334_924_3896_2327_25556}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1156_9365}>
          <Text style={styles.Text_1156_9365}>YOUR DRIVER</Text>
        </View>
        <View style={styles.View_1156_9366}>
          <Text style={styles.Text_1156_9366}>Daevion Wells</Text>
        </View>
        <View style={styles.View_1156_9367}>
          <Text style={styles.Text_1156_9367}>
            2014 Ford Focus Metallic Blue
          </Text>
        </View>
        <View style={styles.View_1156_9373}>
          <Text style={styles.Text_1156_9373}>2 YEAR VETERAN</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1156_11334: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1156_11333: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1156_11332: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1154_9156: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1154_9212: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1154_9213: {
    width: wp("47.34299516908212%"),
    minWidth: wp("47.34299516908212%"),
    height: hp("29.439890710382517%"),
    minHeight: hp("29.439890710382517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("45.21857923497268%")
  },
  View_1154_9185: {
    width: wp("18.177106184659948%"),
    minWidth: wp("18.177106184659948%"),
    height: hp("7.978954210958846%"),
    minHeight: hp("7.978954210958846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.942028985507244%"),
    top: hp("71.72131147540983%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1154_9185_1124_6583: {
    flexGrow: 1,
    width: wp("16.50288346884907%"),
    height: hp("6.075394218736659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1154_9185_1124_6584: {
    width: wp("16.35246645425253%"),
    height: hp("5.904371230328669%"),
    top: hp("0.17103184767759672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1503764719202909%")
  },
  ImageBackground_I1154_9185_1124_6585: {
    width: wp("16.35246645425253%"),
    height: hp("5.904371230328669%"),
    top: hp("0.17103184767759672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1503764719202909%")
  },
  ImageBackground_I1154_9185_1124_6588: {
    width: wp("6.358724861329304%"),
    height: hp("2.041738671683223%"),
    top: hp("1.934447575136602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6019587862318847%")
  },
  ImageBackground_I1154_9185_1124_6589: {
    width: wp("1.4326396195784858%"),
    height: hp("0.7266213985088744%"),
    top: hp("1.400006403688522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.798262001811596%")
  },
  ImageBackground_I1154_9185_1124_6590: {
    width: wp("1.8427244131115899%"),
    height: hp("1.1082943671388052%"),
    top: hp("4.137583247950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4608006868961372%")
  },
  ImageBackground_I1154_9185_1124_6591: {
    width: wp("1.9583718212330399%"),
    height: hp("1.070607555368559%"),
    top: hp("0.4573300887978178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.509940179649762%")
  },
  View_I1154_9185_1124_6592: {
    width: wp("3.241335136303003%"),
    height: hp("1.6552457392541435%"),
    top: hp("4.012177681010925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.255411194142516%")
  },
  ImageBackground_I1154_9185_1124_6593: {
    width: wp("4.013979722912185%"),
    height: hp("2.533728698563706%"),
    top: hp("-0.0005336407103726515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0005897116545909853%")
  },
  View_I1154_9185_1124_6594: {
    width: wp("23.517171887383945%"),
    height: hp("9.088059722400102%"),
    top: hp("-2.609236253415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.601520040760871%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1154_9185_1124_6595: {
    width: wp("8.677937788663854%"),
    height: hp("3.438027439221658%"),
    top: hp("1.6174649931694063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.134232525664254%")
  },
  View_I1154_9185_1124_6596: {
    flexGrow: 1,
    width: wp("16.50288346884907%"),
    height: hp("6.075394218736659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6743093297101463%"),
    top: hp("1.9034964139344197%")
  },
  ImageBackground_I1154_9185_1124_6597: {
    width: wp("16.35246645425253%"),
    height: hp("5.904371230328669%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1154_9185_1124_6598: {
    width: wp("16.35246645425253%"),
    height: hp("5.904371230328669%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1154_9185_1124_6601: {
    width: wp("6.3587253220415345%"),
    height: hp("2.041738932249976%"),
    top: hp("2.729572233606561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.30135680857488%")
  },
  ImageBackground_I1154_9185_1124_6602: {
    width: wp("1.4326395044004283%"),
    height: hp("0.7266213333671862%"),
    top: hp("2.8736552254098484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.09433027626812%")
  },
  ImageBackground_I1154_9185_1124_6603: {
    width: wp("1.8427244131115899%"),
    height: hp("1.1082943671388052%"),
    top: hp("4.583973702185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8534307065217384%")
  },
  ImageBackground_I1154_9185_1124_6604: {
    width: wp("1.9583718212330399%"),
    height: hp("1.070607555368559%"),
    top: hp("0.9223979678961882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.919082125603865%")
  },
  View_I1154_9185_1124_6605: {
    width: wp("3.2413353666591185%"),
    height: hp("1.6552459998208968%"),
    top: hp("3.0964502219945444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4499830163043477%")
  },
  ImageBackground_I1154_9185_1124_6606: {
    width: wp("4.013980183624415%"),
    height: hp("2.533728959130459%"),
    top: hp("-0.8778389685792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7720504981884027%")
  },
  View_I1154_9185_1124_6607: {
    width: wp("23.517171887383945%"),
    height: hp("9.088059722400102%"),
    top: hp("-6.881563780737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.35904476147343%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1154_9185_1124_6608: {
    width: wp("8.677937788663854%"),
    height: hp("3.4380276997884116%"),
    top: hp("1.0381980020491852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.624721656099034%")
  },
  View_1154_9230: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1154_9230_919_98: {
    flexGrow: 1,
    width: wp("14.975845410628018%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1154_9230_919_100: {
    flexGrow: 1,
    width: wp("12.836437870338917%"),
    height: hp("7.259952566011356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0697369414251199%"),
    top: hp("0.6048817452185808%")
  },
  View_I1154_9230_919_102: {
    width: wp("12.836437870338917%"),
    height: hp("7.259952566011356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_I1154_9230_919_103: {
    width: wp("12.836437870338917%"),
    height: hp("7.259952566011356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I1154_9230_919_103_2327_25556: {
    flexGrow: 1,
    width: wp("28.60620102444709%"),
    height: hp("24.24710800087517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.42964032306763%"),
    top: hp("-3.516425461065574%"),
    resizeMode: "cover"
  },
  ImageBackground_1154_9295: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618358%"),
    top: hp("41.80327868852459%")
  },
  View_1156_9332: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("119.80874316939891%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_1156_9368: {
    width: wp("47.10144927536232%"),
    minWidth: wp("47.10144927536232%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%"),
    top: hp("9.836065573770492%")
  },
  Text_1156_9368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_1156_9566: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%"),
    top: hp("22.6775956284153%")
  },
  Text_1156_9566: {
    color: "rgba(185, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  ImageBackground_1156_9470: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.42995169082126%")
  },
  View_1156_9473: {
    width: wp("87.92270531400966%"),
    minWidth: wp("87.92270531400966%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("93.98907103825137%")
  },
  ImageBackground_1156_9372: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("14.207650273224047%")
  },
  ImageBackground_1154_9294: {
    width: wp("87.92270531400966%"),
    minWidth: wp("87.92270531400966%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1156_9334: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1156_9334_924_3892: {
    flexGrow: 1,
    width: wp("19.737750435796915%"),
    height: hp("11.163153934999894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7591947841183568%"),
    top: hp("0.42931395150272067%")
  },
  View_I1156_9334_924_3893: {
    flexGrow: 1,
    width: wp("18.21946222425083%"),
    height: hp("10.304449946502519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.518271625905797%"),
    top: hp("0.8586279030054556%")
  },
  View_I1156_9334_924_3895: {
    width: wp("18.21946222425083%"),
    height: hp("10.304449946502519%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I1156_9334_924_3896: {
    width: wp("18.21946222425083%"),
    height: hp("10.304449946502519%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I1156_9334_924_3896_2327_25556: {
    flexGrow: 1,
    width: wp("40.602355072463766%"),
    height: hp("34.41525443655545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.80329578049517%"),
    top: hp("-4.991141564207652%"),
    resizeMode: "cover"
  },
  View_1156_9365: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("2.5956284153005527%")
  },
  Text_1156_9365: {
    color: "rgba(185, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1156_9366: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("4.508196721311478%")
  },
  Text_1156_9366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_1156_9367: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("9.016393442622942%")
  },
  Text_1156_9367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_1156_9373: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.04830917874396%"),
    top: hp("17.759562841530055%")
  },
  Text_1156_9373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
