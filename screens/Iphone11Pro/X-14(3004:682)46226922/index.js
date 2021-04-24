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
      <View style={styles.View_3005_31419}>
        <View style={styles.View_I3005_31419_2973_1730}>
          <View style={styles.View_I3005_31419_2973_1731}>
            <View style={styles.View_I3005_31419_2973_1732}>
              <View style={styles.View_I3005_31419_2973_1732_2998_2033} />
              <View style={styles.View_I3005_31419_2973_1732_2998_2034} />
              <View style={styles.View_I3005_31419_2973_1732_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd6/870d/86e05051fce09f82fe66306f6139a901"
                }}
                style={styles.ImageBackground_I3005_31419_2973_1732_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/e04e/5f6dc2d02abb16b97efcc2641e166e2c"
                }}
                style={styles.ImageBackground_I3005_31419_2973_1732_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f8/efa3/25f6422b77562cb5cfaafcbb7914c9e3"
                }}
                style={styles.ImageBackground_I3005_31419_2973_1732_2998_2038}
              />
            </View>
            <View style={styles.View_I3005_31419_2973_1733}>
              <Text style={styles.Text_I3005_31419_2973_1733}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3005_31419_2973_1734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ce/f667/e5ea761555472e58addee1de75928225"
              }}
              style={styles.ImageBackground_I3005_31419_2973_1735}
            />
            <View style={styles.View_I3005_31419_2973_1736}>
              <Text style={styles.Text_I3005_31419_2973_1736}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3005_31419_2973_1737}>
            <View style={styles.View_I3005_31419_2973_1738}>
              <View style={styles.View_I3005_31419_2973_1738_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d868/9787/f9322081b36e92f5af25c7d1863376a9"
                }}
                style={styles.ImageBackground_I3005_31419_2973_1738_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/e0af/7517c3738531c43dc8a73996a46df33a"
                }}
                style={styles.ImageBackground_I3005_31419_2973_1738_2998_2048}
              />
            </View>
            <View style={styles.View_I3005_31419_2973_1739}>
              <Text style={styles.Text_I3005_31419_2973_1739}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3005_31419_2973_1753}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/b6f6/36b4dd127e5358d8e50c15b0c6a996ac"
              }}
              style={styles.ImageBackground_I3005_31419_2973_1754}
            />
            <View style={styles.View_I3005_31419_2973_1755}>
              <Text style={styles.Text_I3005_31419_2973_1755}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3005_31419_2973_1740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bda/5445/ee940766685df2247fb14717c92e4f48"
              }}
              style={styles.ImageBackground_I3005_31419_2973_1741}
            />
            <View style={styles.View_I3005_31419_2973_1742}>
              <Text style={styles.Text_I3005_31419_2973_1742}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_690}>
        <View style={styles.View_I3004_690_2784_33814}>
          <View style={styles.View_I3004_690_2784_33814_2784_33798}>
            <View style={styles.View_I3004_690_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3004_690_2784_33814_2784_33800}
            />
            <View style={styles.View_I3004_690_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3004_690_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3004_690_2784_33814_2784_33806}
          />
          <View style={styles.View_I3004_690_2784_33814_2784_33811}>
            <View style={styles.View_I3004_690_2784_33814_2784_33812}>
              <Text style={styles.Text_I3004_690_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_691}>
        <View style={styles.View_I3004_691_2784_33819}>
          <View style={styles.View_I3004_691_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_3004_726} />
      <View style={styles.View_3004_727} />
      <View style={styles.View_3004_728} />
      <View style={styles.View_3004_729}>
        <View style={styles.View_3004_730}>
          <View style={styles.View_3004_731}>
            <Text style={styles.Text_3004_731}>Meta Info</Text>
          </View>
          <View style={styles.View_3004_732}>
            <Text style={styles.Text_3004_732}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor.
            </Text>
          </View>
        </View>
        <View style={styles.View_3004_733} />
      </View>
      <View style={styles.View_3004_734}>
        <View style={styles.View_3004_735}>
          <View style={styles.View_3004_736}>
            <Text style={styles.Text_3004_736}>Meta Info</Text>
          </View>
          <View style={styles.View_3004_737}>
            <Text style={styles.Text_3004_737}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor.
            </Text>
          </View>
        </View>
        <View style={styles.View_3004_738} />
      </View>
      <View style={styles.View_3004_739}>
        <Text style={styles.Text_3004_739}>Newly Added</Text>
      </View>
      <View style={styles.View_3005_31416}>
        <View style={styles.View_3005_31417}>
          <Text style={styles.Text_3005_31417}>Big Title</Text>
        </View>
        <View style={styles.View_3005_31418}>
          <Text style={styles.Text_3005_31418}>See All</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3005_31419: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_I3005_31419_2973_1730: {
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
  View_I3005_31419_2973_1731: {
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
  View_I3005_31419_2973_1732: {
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
  View_I3005_31419_2973_1732_2998_2033: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24446614583333215%"),
    top: hp("1.5027322404371546%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3005_31419_2973_1732_2998_2034: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261382598043139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555338541666654%"),
    top: hp("2.254098360655732%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3005_31419_2973_1732_2998_2035: {
    flexGrow: 1,
    width: wp("1.2222218831380207%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.399999999999997%"),
    top: hp("2.0035540471311606%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I3005_31419_2973_1732_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3005_31419_2973_1732_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3005_31419_2973_1732_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("0.6262273736338813%")
  },
  View_I3005_31419_2973_1733: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3005_31419_2973_1733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3005_31419_2973_1734: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3005_31419_2973_1735: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.600000000000005%")
  },
  View_I3005_31419_2973_1736: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3005_31419_2973_1736: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3005_31419_2973_1737: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3005_31419_2973_1738: {
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
  View_I3005_31419_2973_1738_2998_2046: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2444661458333286%"),
    top: hp("1.2521879269125833%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3005_31419_2973_1738_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222005208333329%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3005_31419_2973_1738_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.95553385416666%"),
    top: hp("0.2505443135245855%")
  },
  View_I3005_31419_2973_1739: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3005_31419_2973_1739: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3005_31419_2973_1753: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3005_31419_2973_1754: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_I3005_31419_2973_1755: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3005_31419_2973_1755: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3005_31419_2973_1740: {
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
  ImageBackground_I3005_31419_2973_1741: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3005_31419_2973_1742: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3005_31419_2973_1742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_690: {
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
  View_I3004_690_2784_33814: {
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
  View_I3004_690_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3004_690_2784_33814_2784_33799: {
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
  ImageBackground_I3004_690_2784_33814_2784_33800: {
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
  View_I3004_690_2784_33814_2784_33801: {
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
  ImageBackground_I3004_690_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3004_690_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3004_690_2784_33814_2784_33811: {
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
  View_I3004_690_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3004_690_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3004_691: {
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
  View_I3004_691_2784_33819: {
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
  View_I3004_691_2784_33819_2784_33817: {
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
  View_3004_726: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.18032786885246%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_727: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%"),
    top: hp("74.18032786885246%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_728: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("74.18032786885246%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_729: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("45.62841530054645%"),
    minHeight: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.666666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_730: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_731: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_731: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "none"
  },
  View_3004_732: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  Text_3004_732: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_3004_733: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_734: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("45.62841530054645%"),
    minHeight: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93333333333334%"),
    top: hp("16.666666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_735: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_736: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_736: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "none"
  },
  View_3004_737: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  Text_3004_737: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_3004_738: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_739: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.44262295081968%")
  },
  Text_3004_739: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.9999998807907104,
    textTransform: "none"
  },
  View_3005_31416: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3005_31417: {
    width: wp("41.46666666666667%"),
    minWidth: wp("41.46666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3005_31417: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3005_31418: {
    width: wp("41.46666666666667%"),
    minWidth: wp("41.46666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.733333333333334%"),
    top: hp("0%")
  },
  Text_3005_31418: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
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
