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
      <View style={styles.View_3001_907}>
        <View style={styles.View_I3001_907_2784_33814}>
          <View style={styles.View_I3001_907_2784_33814_2784_33798}>
            <View style={styles.View_I3001_907_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3001_907_2784_33814_2784_33800}
            />
            <View style={styles.View_I3001_907_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3001_907_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3001_907_2784_33814_2784_33806}
          />
          <View style={styles.View_I3001_907_2784_33814_2784_33811}>
            <View style={styles.View_I3001_907_2784_33814_2784_33812}>
              <Text style={styles.Text_I3001_907_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_908}>
        <View style={styles.View_3001_909}>
          <View style={styles.View_3001_910} />
          <View style={styles.View_3001_911}>
            <View style={styles.View_3001_912}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1578/e40f/efb64552b1e808ecfb2bd71c72912b12"
                }}
                style={styles.ImageBackground_I3001_912_2216_441}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_913}>
          <View style={styles.View_3001_914}>
            <Text style={styles.Text_3001_914}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_915}>
            <Text style={styles.Text_3001_915}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_916}>
        <Text style={styles.Text_3001_916}>All Albums</Text>
      </View>
      <View style={styles.View_3001_917}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5308/91cd/9940db6abaf97f87343cad356160d71f"
          }}
          style={styles.ImageBackground_I3001_917_2970_111}
        />
        <View style={styles.View_I3001_917_2970_113}>
          <Text style={styles.Text_I3001_917_2970_113}>Library</Text>
        </View>
        <View style={styles.View_I3001_917_2970_116}>
          <Text style={styles.Text_I3001_917_2970_116}>Edit</Text>
        </View>
      </View>
      <View style={styles.View_3001_918}>
        <View style={styles.View_I3001_918_2973_4970}>
          <Text style={styles.Text_I3001_918_2973_4970}>Downloaded</Text>
        </View>
        <View style={styles.View_I3001_918_2973_4971} />
        <View style={styles.View_I3001_918_2973_4972}>
          <Text style={styles.Text_I3001_918_2973_4972}>Stream</Text>
        </View>
      </View>
      <View style={styles.View_3001_919}>
        <View style={styles.View_3001_920}>
          <View style={styles.View_3001_921} />
          <View style={styles.View_3001_922}>
            <View style={styles.View_3001_923}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f755/41ab/7d7bac2e0e0a1842b32e74a4179929ed"
                }}
                style={styles.ImageBackground_I3001_923_2209_12112}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_924}>
          <View style={styles.View_3001_925}>
            <Text style={styles.Text_3001_925}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_926}>
            <Text style={styles.Text_3001_926}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_927}>
        <View style={styles.View_3001_928}>
          <View style={styles.View_3001_929} />
          <View style={styles.View_3001_930}>
            <View style={styles.View_3001_931}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a7c/2480/074e3eeaca478e9d0aaf324ae054ab96"
                }}
                style={styles.ImageBackground_I3001_931_2209_12098}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_932}>
          <View style={styles.View_3001_933}>
            <Text style={styles.Text_3001_933}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_934}>
            <Text style={styles.Text_3001_934}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_935}>
        <Text style={styles.Text_3001_935}>New Releases</Text>
      </View>
      <View style={styles.View_3001_936}>
        <View style={styles.View_3001_937}>
          <View style={styles.View_3001_938} />
          <View style={styles.View_3001_939}>
            <View style={styles.View_3001_940}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81c6/312f/1be6b708b2c61c0478d24d4865279aa1"
                }}
                style={styles.ImageBackground_I3001_940_2358_24601}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_941}>
          <View style={styles.View_3001_942}>
            <Text style={styles.Text_3001_942}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_943}>
            <Text style={styles.Text_3001_943}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_944}>
        <View style={styles.View_3001_945}>
          <View style={styles.View_3001_946} />
          <View style={styles.View_3001_947}>
            <View style={styles.View_3001_948}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c985/5583/835e5687c3541d41b3e6cfd1a8a7d778"
                }}
                style={styles.ImageBackground_I3001_948_2358_24611}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_949}>
          <View style={styles.View_3001_950}>
            <Text style={styles.Text_3001_950}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_951}>
            <Text style={styles.Text_3001_951}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_952}>
        <View style={styles.View_3001_953}>
          <View style={styles.View_3001_954} />
          <View style={styles.View_3001_955}>
            <View style={styles.View_3001_956}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a7/9393/bf475ea8d626299a22c95cbf8fd1fc73"
                }}
                style={styles.ImageBackground_I3001_956_2358_24611}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3001_957}>
          <View style={styles.View_3001_958}>
            <Text style={styles.Text_3001_958}>Amet minim mo...</Text>
          </View>
          <View style={styles.View_3001_959}>
            <Text style={styles.Text_3001_959}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_960}>
        <View style={styles.View_I3001_960_2973_1034}>
          <View style={styles.View_I3001_960_2973_1702}>
            <View style={styles.View_I3001_960_2973_1035}>
              <View style={styles.View_I3001_960_2973_1035_2998_2033} />
              <View style={styles.View_I3001_960_2973_1035_2998_2034} />
              <View style={styles.View_I3001_960_2973_1035_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de24/06f5/e0f77d9b026a8cc9d261477d77b4fbe8"
                }}
                style={styles.ImageBackground_I3001_960_2973_1035_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4507/b9e0/814e4b85ba45cac7b3478651108f6237"
                }}
                style={styles.ImageBackground_I3001_960_2973_1035_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4483/9a6e/914b3cf693a7ade63a68de751520c514"
                }}
                style={styles.ImageBackground_I3001_960_2973_1035_2998_2038}
              />
            </View>
            <View style={styles.View_I3001_960_2973_1701}>
              <Text style={styles.Text_I3001_960_2973_1701}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3001_960_2973_1703}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a0b/2c34/9082d7db62363eb6fbc3bcc529cabd98"
              }}
              style={styles.ImageBackground_I3001_960_2973_1704}
            />
            <View style={styles.View_I3001_960_2973_1705}>
              <Text style={styles.Text_I3001_960_2973_1705}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3001_960_2973_1711}>
            <View style={styles.View_I3001_960_2973_1712}>
              <View style={styles.View_I3001_960_2973_1712_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e085/899b/a00d108a47a5246bbbd6aeb0dd182391"
                }}
                style={styles.ImageBackground_I3001_960_2973_1712_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d07/bb96/db6216399e5ce684af3722d36bd660a9"
                }}
                style={styles.ImageBackground_I3001_960_2973_1712_2998_2048}
              />
            </View>
            <View style={styles.View_I3001_960_2973_1713}>
              <Text style={styles.Text_I3001_960_2973_1713}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3001_960_2973_1721}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53f6/a4eb/1e50386fa7bf9bf6e78099ad57c863da"
              }}
              style={styles.ImageBackground_I3001_960_2973_1722}
            />
            <View style={styles.View_I3001_960_2973_1723}>
              <Text style={styles.Text_I3001_960_2973_1723}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_961}>
        <View style={styles.View_I3001_961_2784_33819}>
          <View style={styles.View_I3001_961_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3001_907: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_907_2784_33814: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_907_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3001_907_2784_33814_2784_33799: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I3001_907_2784_33814_2784_33800: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5008218066939891%")
  },
  View_I3001_907_2784_33814_2784_33801: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I3001_907_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3001_907_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3001_907_2784_33814_2784_33811: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_907_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3001_907_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3001_908: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_909: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_910: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_911: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_912: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_912_2216_441: {
    flexGrow: 1,
    width: wp("47.260982259114584%"),
    height: hp("35.519980342010335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5586588541666666%"),
    top: hp("-0.02668203551912285%"),
    resizeMode: "cover"
  },
  View_3001_913: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_914: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_914: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_915: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_915: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_916: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("60.65573770491803%")
  },
  Text_3001_916: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3001_917: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_917_2970_111: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("1.3661202185792343%")
  },
  View_I3001_917_2970_113: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("1.3661202185792343%")
  },
  Text_I3001_917_2970_113: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I3001_917_2970_116: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633883%")
  },
  Text_I3001_917_2970_116: {
    color: "rgba(254, 103, 178, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_918: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.754098360655737%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_I3001_918_2973_4970: {
    flexGrow: 1,
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.82701822916666%"),
    top: hp("1.0928961748633892%")
  },
  Text_I3001_918_2973_4970: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_918_2973_4971: {
    flexGrow: 1,
    width: wp("44.4%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("0.5464480874316955%"),
    backgroundColor: "rgba(254, 1, 127, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3001_918_2973_4972: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.091927083333333%"),
    top: hp("1.0928961748633892%")
  },
  Text_I3001_918_2973_4972: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3001_919: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_920: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_921: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_922: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_923: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3001_923_2209_12112: {
    flexGrow: 1,
    width: wp("225.971875%"),
    height: hp("254.75073642418033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-88.63177083333333%"),
    top: hp("-54.715516137295076%"),
    resizeMode: "cover"
  },
  View_3001_924: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_925: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_925: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_926: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_926: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_927: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_928: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_929: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_930: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_931: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3001_931_2209_12098: {
    flexGrow: 1,
    width: wp("89.46168619791666%"),
    height: hp("47.29784772695739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-26.354687499999997%"),
    top: hp("-4.510598104508201%"),
    resizeMode: "cover"
  },
  View_3001_932: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_933: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_933: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_934: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_934: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_935: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("23.497267759562842%")
  },
  Text_3001_935: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3001_936: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_937: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_938: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_939: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_940: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_940_2358_24601: {
    flexGrow: 1,
    width: wp("48.14414876302083%"),
    height: hp("54.275596076673494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.80540364583333%"),
    top: hp("-9.724267844945357%"),
    resizeMode: "cover"
  },
  View_3001_941: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_942: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_942: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_943: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_943: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_944: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("97.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_945: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_946: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_947: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_948: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_948_2358_24611: {
    flexGrow: 1,
    width: wp("93.76070963541666%"),
    height: hp("46.948383935813695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.876399739583334%"),
    top: hp("-11.443124573087445%"),
    resizeMode: "cover"
  },
  View_3001_949: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_950: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_950: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_951: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_951: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_952: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("97.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_953: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_954: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_955: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_956: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_956_2358_24611: {
    flexGrow: 1,
    width: wp("93.76070963541666%"),
    height: hp("46.948383935813695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.876399739583334%"),
    top: hp("-11.443124573087445%"),
    resizeMode: "cover"
  },
  View_3001_957: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3001_958: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3001_958: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_959: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_3001_959: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(228, 1, 115, 1)"
  },
  View_I3001_960_2973_1034: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_960_2973_1702: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_960_2973_1035: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_960_2973_1035_2998_2033: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2444335937499993%"),
    top: hp("1.5027322404371546%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3001_960_2973_1035_2998_2034: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261382598043139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555664062499982%"),
    top: hp("2.254098360655732%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3001_960_2973_1035_2998_2035: {
    flexGrow: 1,
    width: wp("1.2222218831380207%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.399999999999997%"),
    top: hp("2.0035540471311606%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I3001_960_2973_1035_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177766927083333%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3001_960_2973_1035_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3001_960_2973_1035_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177766927083333%"),
    top: hp("0.6262273736338813%")
  },
  View_I3001_960_2973_1701: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_960_2973_1701: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_960_2973_1703: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.288899739583336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_960_2973_1704: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6000000000000014%")
  },
  View_I3001_960_2973_1705: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_960_2973_1705: {
    color: "rgba(255, 153, 204, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_960_2973_1711: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.244433593749996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_960_2973_1712: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3001_960_2973_1712_2998_2046: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24443359375000995%"),
    top: hp("1.2521879269125833%"),
    borderColor: "rgba(255, 153, 204, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3001_960_2973_1712_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222330729166728%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3001_960_2973_1712_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.95556640625%"),
    top: hp("0.2505443135245855%")
  },
  View_I3001_960_2973_1713: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_960_2973_1713: {
    color: "rgba(255, 153, 204, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_960_2973_1721: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_960_2973_1722: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3001_960_2973_1723: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_960_2973_1723: {
    color: "rgba(255, 153, 204, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3001_961: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_961_2784_33819: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_961_2784_33819_2784_33817: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
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
