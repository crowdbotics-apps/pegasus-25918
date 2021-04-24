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
      <View style={styles.View_1164_10629}>
        <View style={styles.View_1164_10630} />
        <View style={styles.View_1164_10631} />
        <View style={styles.View_1164_10632} />
      </View>
      <View style={styles.View_1164_10689}>
        <View style={styles.View_I1164_10689_1135_8430}>
          <View style={styles.View_I1164_10689_2713_48360}>
            <View style={styles.View_I1164_10689_2713_48360_2258_579}>
              <Text style={styles.Text_I1164_10689_2713_48360_2258_579}>
                329
              </Text>
            </View>
          </View>
          <View style={styles.View_I1164_10689_1135_8432}>
            <Text style={styles.Text_I1164_10689_1135_8432}>Travel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10780}>
        <View style={styles.View_I1164_10780_1135_8434}>
          <View style={styles.View_I1164_10780_1135_8435}>
            <View style={styles.View_I1164_10780_1135_8435_2258_579}>
              <Text style={styles.Text_I1164_10780_1135_8435_2258_579}>
                329
              </Text>
            </View>
          </View>
          <View style={styles.View_I1164_10780_1135_8436}>
            <Text style={styles.Text_I1164_10780_1135_8436}>Entertainment</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10785}>
        <View style={styles.View_I1164_10785_1135_8434}>
          <View style={styles.View_I1164_10785_1135_8435}>
            <View style={styles.View_I1164_10785_1135_8435_2258_579}>
              <Text style={styles.Text_I1164_10785_1135_8435_2258_579}>
                329
              </Text>
            </View>
          </View>
          <View style={styles.View_I1164_10785_1135_8436}>
            <Text style={styles.Text_I1164_10785_1135_8436}>Security</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10790}>
        <View style={styles.View_I1164_10790_1135_8434}>
          <View style={styles.View_I1164_10790_1135_8435}>
            <View style={styles.View_I1164_10790_1135_8435_2258_579}>
              <Text style={styles.Text_I1164_10790_1135_8435_2258_579}>
                329
              </Text>
            </View>
          </View>
          <View style={styles.View_I1164_10790_1135_8436}>
            <Text style={styles.Text_I1164_10790_1135_8436}>Shopping</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10916}>
        <View style={styles.View_1164_10915}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3118/ea60/aebedbda52271a5fc8ff16836738d9db"
            }}
            style={styles.ImageBackground_1164_10913}
          />
        </View>
        <View style={styles.View_1164_10917}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef2/0346/4ab62e265402ecfe8bdb54e5ae62a20d"
            }}
            style={styles.ImageBackground_1164_10918}
          />
        </View>
        <View style={styles.View_1164_10920}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4856/cae9/0e13735b44d3bed14ca1062b62cd617a"
            }}
            style={styles.ImageBackground_1164_10921}
          />
        </View>
        <View style={styles.View_1164_10923}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d7/d1cb/01a4be003817bbd25dcc1218416b4d3c"
            }}
            style={styles.ImageBackground_1164_10924}
          />
        </View>
      </View>
      <View style={styles.View_1164_10968}>
        <Text style={styles.Text_1164_10968}>Budget</Text>
      </View>
      <View style={styles.View_1168_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001d/f7ad/45e766ff01a0d6a76991c8e18d6c8eb0"
          }}
          style={styles.ImageBackground_I1168_4_1136_8087}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71b9/35b9/1b57c54692b07be8896053bdb993201c"
          }}
          style={styles.ImageBackground_I1168_4_1136_8088}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34e8/aad7/93c2d7f0528e8d6c1c87f0d254f2e9db"
          }}
          style={styles.ImageBackground_I1168_4_1136_8092}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/096c/ccfe/7ec2ca7bb75fee32046154ff5799bb82"
          }}
          style={styles.ImageBackground_I1168_4_1136_8095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a861/a214/402271d42ff1f09f1797bcc9890b0929"
          }}
          style={styles.ImageBackground_I1168_4_1136_8096}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b337/dc40/6ff9113f40b739ab170caf6c071fbb24"
          }}
          style={styles.ImageBackground_I1168_4_1136_8097}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c77/d3ce/c0b9829ed9605983dbd1aab972bf461c"
          }}
          style={styles.ImageBackground_I1168_4_1136_8098}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8775/33e9/a5adb45a6790ce1bfbb483879aeabf2a"
          }}
          style={styles.ImageBackground_I1168_4_1136_8099}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a761/388c/74ed4aa442cc39f57280bc64f8e575f5"
          }}
          style={styles.ImageBackground_I1168_4_1136_8100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d21/700e/af8d570418cb47d677e7167d1b3feb14"
          }}
          style={styles.ImageBackground_I1168_4_1136_8101}
        />
        <View style={styles.View_I1168_4_1136_8102}>
          <View style={styles.View_I1168_4_1136_8102_2304_42548} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd6/50d1/9647f02592441586a02509022ab9b7cf"
            }}
            style={styles.ImageBackground_I1168_4_1136_8102_2304_42549}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b54/6686/15023b45c55a207ad0ba41adaf21ad59"
          }}
          style={styles.ImageBackground_I1168_4_1136_8103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a0/cbca/072ef4155ca853739da176d5c5552d4f"
          }}
          style={styles.ImageBackground_I1168_4_2376_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b54/6686/15023b45c55a207ad0ba41adaf21ad59"
          }}
          style={styles.ImageBackground_I1168_4_2376_155}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10629: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1164_10630: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10631: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10632: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10689: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.74863387978142%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_I1164_10689_1135_8430: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.0491803278688465%")
  },
  View_I1164_10689_2713_48360: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0.13661202185793542%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I1164_10689_2713_48360_2258_579: {
    flexGrow: 1,
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1164_10689_2713_48360_2258_579: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1164_10689_1135_8432: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1164_10689_1135_8432: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10780: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10780_1135_8434: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.0491803278688536%")
  },
  View_I1164_10780_1135_8435: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_I1164_10780_1135_8435_2258_579: {
    flexGrow: 1,
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1164_10780_1135_8435_2258_579: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1164_10780_1135_8436: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1164_10780_1135_8436: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10785: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.23497267759562%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10785_1135_8434: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.0491803278688536%")
  },
  View_I1164_10785_1135_8435: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_I1164_10785_1135_8435_2258_579: {
    flexGrow: 1,
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1164_10785_1135_8435_2258_579: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1164_10785_1135_8436: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1164_10785_1135_8436: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10790: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10790_1135_8434: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.0491803278688394%")
  },
  View_I1164_10790_1135_8435: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_I1164_10790_1135_8435_2258_579: {
    flexGrow: 1,
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1164_10790_1135_8435_2258_579: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1164_10790_1135_8436: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1164_10790_1135_8436: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10916: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1164_10915: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1164_10913: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666665%")
  },
  View_1164_10917: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1164_10918: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_1164_10920: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.73333333333334%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1164_10921: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  View_1164_10923: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1164_10924: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_1164_10968: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.098360655737705%")
  },
  Text_1164_10968: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1168_4: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("37.56830601092896%"),
    minHeight: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("19.53551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1168_4_1136_8087: {
    flexGrow: 1,
    width: wp("46.400000000000006%"),
    height: hp("23.54824712367657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5977213541666675%"),
    top: hp("13.974449282786885%")
  },
  ImageBackground_I1168_4_1136_8088: {
    flexGrow: 1,
    width: wp("13.37528076171875%"),
    height: hp("6.827263753922259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.107877604166667%"),
    top: hp("22.29524205942623%")
  },
  ImageBackground_I1168_4_1136_8092: {
    flexGrow: 1,
    width: wp("36.000004069010416%"),
    height: hp("18.51191911541048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("0%")
  },
  ImageBackground_I1168_4_1136_8095: {
    flexGrow: 1,
    width: wp("8.533335367838541%"),
    height: hp("4.355745888798614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.766276041666664%"),
    top: hp("0.1067281420765056%")
  },
  ImageBackground_I1168_4_1136_8096: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.439256845276212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.50110677083334%"),
    top: hp("19.841828893442624%")
  },
  ImageBackground_I1168_4_1136_8097: {
    flexGrow: 1,
    width: wp("16.266664632161458%"),
    height: hp("8.711491777597228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.4359375%"),
    top: hp("4.160262978142075%")
  },
  ImageBackground_I1168_4_1136_8098: {
    flexGrow: 1,
    width: wp("16.533335367838543%"),
    height: hp("8.303140942516222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4628906249999982%"),
    top: hp("7.1473168545081975%")
  },
  ImageBackground_I1168_4_1136_8099: {
    flexGrow: 1,
    width: wp("10.031457519531251%"),
    height: hp("5.120448336575201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.411263020833324%"),
    top: hp("6.720671106557379%")
  },
  ImageBackground_I1168_4_1136_8100: {
    flexGrow: 1,
    width: wp("5.015730794270834%"),
    height: hp("2.560223647154094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.314583333333333%"),
    top: hp("10.027642588797814%")
  },
  ImageBackground_I1168_4_1136_8101: {
    flexGrow: 1,
    width: wp("5.015728759765626%"),
    height: hp("2.560223647154094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.078645833333333%"),
    top: hp("7.1473168545081975%")
  },
  View_I1168_4_1136_8102: {
    flexGrow: 1,
    width: wp("5.015730794270834%"),
    height: hp("2.5602246894211067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.35279947916667%"),
    top: hp("22.82861594945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_4_1136_8102_2304_42548: {
    flexGrow: 1,
    width: wp("4.179775746663411%"),
    height: hp("1.4934644021623122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41796875%"),
    top: hp("0.9600196379781423%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I1168_4_1136_8102_2304_42549: {
    flexGrow: 1,
    width: wp("2.08988774617513%"),
    height: hp("0.960084258532915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4628906249999858%"),
    top: hp("0.1067281420765056%")
  },
  ImageBackground_I1168_4_1136_8103: {
    flexGrow: 1,
    width: wp("3.343819173177083%"),
    height: hp("1.7068161990473179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.27415364583333%"),
    top: hp("1.3866653859289606%")
  },
  ImageBackground_I1168_4_2376_154: {
    flexGrow: 1,
    width: wp("8.533329264322917%"),
    height: hp("4.3557443253980965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.82923177083334%"),
    top: hp("29.015913165983612%")
  },
  ImageBackground_I1168_4_2376_155: {
    flexGrow: 1,
    width: wp("3.343819173177083%"),
    height: hp("1.706816459614071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.337109375000004%"),
    top: hp("30.296117230191257%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
