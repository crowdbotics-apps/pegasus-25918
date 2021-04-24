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
      <View style={styles.View_3004_661} />
      <View style={styles.View_3004_540}>
        <View style={styles.View_I3004_540_2973_1730}>
          <View style={styles.View_I3004_540_2973_1731}>
            <View style={styles.View_I3004_540_2973_1732}>
              <View style={styles.View_I3004_540_2973_1732_2998_2033} />
              <View style={styles.View_I3004_540_2973_1732_2998_2034} />
              <View style={styles.View_I3004_540_2973_1732_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd6/870d/86e05051fce09f82fe66306f6139a901"
                }}
                style={styles.ImageBackground_I3004_540_2973_1732_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/e04e/5f6dc2d02abb16b97efcc2641e166e2c"
                }}
                style={styles.ImageBackground_I3004_540_2973_1732_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f8/efa3/25f6422b77562cb5cfaafcbb7914c9e3"
                }}
                style={styles.ImageBackground_I3004_540_2973_1732_2998_2038}
              />
            </View>
            <View style={styles.View_I3004_540_2973_1733}>
              <Text style={styles.Text_I3004_540_2973_1733}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3004_540_2973_1734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ce/f667/e5ea761555472e58addee1de75928225"
              }}
              style={styles.ImageBackground_I3004_540_2973_1735}
            />
            <View style={styles.View_I3004_540_2973_1736}>
              <Text style={styles.Text_I3004_540_2973_1736}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3004_540_2973_1737}>
            <View style={styles.View_I3004_540_2973_1738}>
              <View style={styles.View_I3004_540_2973_1738_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d868/9787/f9322081b36e92f5af25c7d1863376a9"
                }}
                style={styles.ImageBackground_I3004_540_2973_1738_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/e0af/7517c3738531c43dc8a73996a46df33a"
                }}
                style={styles.ImageBackground_I3004_540_2973_1738_2998_2048}
              />
            </View>
            <View style={styles.View_I3004_540_2973_1739}>
              <Text style={styles.Text_I3004_540_2973_1739}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3004_540_2973_1753}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/b6f6/36b4dd127e5358d8e50c15b0c6a996ac"
              }}
              style={styles.ImageBackground_I3004_540_2973_1754}
            />
            <View style={styles.View_I3004_540_2973_1755}>
              <Text style={styles.Text_I3004_540_2973_1755}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3004_540_2973_1740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bda/5445/ee940766685df2247fb14717c92e4f48"
              }}
              style={styles.ImageBackground_I3004_540_2973_1741}
            />
            <View style={styles.View_I3004_540_2973_1742}>
              <Text style={styles.Text_I3004_540_2973_1742}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_541}>
        <View style={styles.View_I3004_541_2784_33814}>
          <View style={styles.View_I3004_541_2784_33814_2784_33798}>
            <View style={styles.View_I3004_541_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3004_541_2784_33814_2784_33800}
            />
            <View style={styles.View_I3004_541_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3004_541_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3004_541_2784_33814_2784_33806}
          />
          <View style={styles.View_I3004_541_2784_33814_2784_33811}>
            <View style={styles.View_I3004_541_2784_33814_2784_33812}>
              <Text style={styles.Text_I3004_541_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_542}>
        <View style={styles.View_I3004_542_2784_33819}>
          <View style={styles.View_I3004_542_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_3004_662}>
        <View style={styles.View_3004_663} />
        <View style={styles.View_3004_664}>
          <View style={styles.View_3004_665}>
            <Text style={styles.Text_3004_665}>Main Title</Text>
          </View>
          <View style={styles.View_3004_666}>
            <Text style={styles.Text_3004_666}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_667}>
        <View style={styles.View_3004_668} />
        <View style={styles.View_3004_669}>
          <View style={styles.View_3004_670}>
            <Text style={styles.Text_3004_670}>Main Title</Text>
          </View>
          <View style={styles.View_3004_671}>
            <Text style={styles.Text_3004_671}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_672}>
        <View style={styles.View_3004_673} />
        <View style={styles.View_3004_674}>
          <View style={styles.View_3004_675}>
            <Text style={styles.Text_3004_675}>Main Title</Text>
          </View>
          <View style={styles.View_3004_676}>
            <Text style={styles.Text_3004_676}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_677}>
        <View style={styles.View_3004_678} />
        <View style={styles.View_3004_679}>
          <View style={styles.View_3004_680}>
            <Text style={styles.Text_3004_680}>Main Title</Text>
          </View>
          <View style={styles.View_3004_681}>
            <Text style={styles.Text_3004_681}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3005_31137}>
        <View style={styles.View_3005_31138} />
        <View style={styles.View_3005_31139}>
          <View style={styles.View_3005_31140}>
            <Text style={styles.Text_3005_31140}>Main Title</Text>
          </View>
          <View style={styles.View_3005_31141}>
            <Text style={styles.Text_3005_31141}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3005_31142}>
        <View style={styles.View_3005_31143} />
        <View style={styles.View_3005_31144}>
          <View style={styles.View_3005_31145}>
            <Text style={styles.Text_3005_31145}>Main Title</Text>
          </View>
          <View style={styles.View_3005_31146}>
            <Text style={styles.Text_3005_31146}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3005_31120}>
        <View style={styles.View_I3005_31120_3002_31191} />
        <View style={styles.View_I3005_31120_3002_31192}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b41/5723/a0c76089d18094ac65fa5f05b44b2dec"
            }}
            style={styles.ImageBackground_I3005_31120_3002_31193}
          />
          <View style={styles.View_I3005_31120_3002_31194}>
            <Text style={styles.Text_I3005_31120_3002_31194}>
              Where are we going?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3005_31121}>
        <Text style={styles.Text_3005_31121}>
          Locate your next remote workplace.
        </Text>
      </View>
      <View style={styles.View_3005_31122}>
        <View style={styles.View_I3005_31122_2151_15007}>
          <Text style={styles.Text_I3005_31122_2151_15007}>Explore Stays</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1200/4e46/395e8f250c775184a0879da2b58a0ac6"
          }}
          style={styles.ImageBackground_I3005_31122_2151_15008}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3004_661: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63.387978142076506%"),
    minHeight: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3004_540: {
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
  View_I3004_540_2973_1730: {
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
  View_I3004_540_2973_1731: {
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
  View_I3004_540_2973_1732: {
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
  View_I3004_540_2973_1732_2998_2033: {
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
  View_I3004_540_2973_1732_2998_2034: {
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
  View_I3004_540_2973_1732_2998_2035: {
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
  ImageBackground_I3004_540_2973_1732_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3004_540_2973_1732_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3004_540_2973_1732_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("0.6262273736338813%")
  },
  View_I3004_540_2973_1733: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_540_2973_1733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_540_2973_1734: {
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
  ImageBackground_I3004_540_2973_1735: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.600000000000005%")
  },
  View_I3004_540_2973_1736: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_540_2973_1736: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_540_2973_1737: {
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
  View_I3004_540_2973_1738: {
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
  View_I3004_540_2973_1738_2998_2046: {
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
  ImageBackground_I3004_540_2973_1738_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222005208333329%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3004_540_2973_1738_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.95553385416666%"),
    top: hp("0.2505443135245855%")
  },
  View_I3004_540_2973_1739: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_540_2973_1739: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_540_2973_1753: {
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
  ImageBackground_I3004_540_2973_1754: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_I3004_540_2973_1755: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_540_2973_1755: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_540_2973_1740: {
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
  ImageBackground_I3004_540_2973_1741: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3004_540_2973_1742: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_540_2973_1742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_541: {
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
  View_I3004_541_2784_33814: {
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
  View_I3004_541_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3004_541_2784_33814_2784_33799: {
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
  ImageBackground_I3004_541_2784_33814_2784_33800: {
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
  View_I3004_541_2784_33814_2784_33801: {
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
  ImageBackground_I3004_541_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3004_541_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3004_541_2784_33814_2784_33811: {
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
  View_I3004_541_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3004_541_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3004_542: {
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
  View_I3004_542_2784_33819: {
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
  View_I3004_542_2784_33819_2784_33817: {
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
  View_3004_662: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_663: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_664: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_665: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_665: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_666: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_666: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_667: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_668: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_669: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_670: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_670: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_671: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_671: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_672: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_673: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_674: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_675: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_675: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_676: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_676: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_677: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_678: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_679: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_680: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_680: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_681: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_681: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3005_31137: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3005_31138: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3005_31139: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3005_31140: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3005_31140: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3005_31141: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3005_31141: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3005_31142: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3005_31143: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3005_31144: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3005_31145: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3005_31145: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3005_31146: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3005_31146: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3005_31120: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3005_31120_3002_31191: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I3005_31120_3002_31192: {
    flexGrow: 1,
    width: wp("57.86666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_I3005_31120_3002_31193: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3005_31120_3002_31194: {
    width: wp("51.46666666666667%"),
    minWidth: wp("51.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0%")
  },
  Text_I3005_31120_3002_31194: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3005_31121: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.737704918032787%")
  },
  Text_3005_31121: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3005_31122: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3005_31122_2151_15007: {
    flexGrow: 1,
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("1.6393442622950758%")
  },
  Text_I3005_31122_2151_15007: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I3005_31122_2151_15008: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("2.0491803278688465%")
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
