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
      <View style={styles.View_3004_741}>
        <View style={styles.View_3004_742}>
          <View style={styles.View_3004_743}>
            <Text style={styles.Text_3004_743}>Search Results</Text>
          </View>
          <View style={styles.View_3004_744}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4904/8ae1/eb67ac5563e563fca60acad16398d1b0"
              }}
              style={styles.ImageBackground_3004_745}
            />
            <View style={styles.View_3004_746}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70d2/2a0d/9893c2416af7a4e8b90cf216a4a3d834"
                }}
                style={styles.ImageBackground_3004_747}
              />
              <View style={styles.View_3004_748}>
                <Text style={styles.Text_3004_748}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_749}>
        <View style={styles.View_I3004_749_2784_33798}>
          <View style={styles.View_I3004_749_2784_33799} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I3004_749_2784_33800}
          />
          <View style={styles.View_I3004_749_2784_33801} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_I3004_749_2784_33802}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I3004_749_2784_33806}
        />
        <View style={styles.View_I3004_749_2784_33811}>
          <View style={styles.View_I3004_749_2784_33812}>
            <Text style={styles.Text_I3004_749_2784_33812}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_750}>
        <View style={styles.View_3004_751}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8804/5836/da4ca8d17b665791ac19584d4591bd01"
            }}
            style={styles.ImageBackground_3004_752}
          />
          <View style={styles.View_3004_753}>
            <View style={styles.View_I3004_753_2780_34423} />
            <View style={styles.View_I3004_753_2780_34424} />
            <View style={styles.View_I3004_753_2780_34425} />
            <View style={styles.View_I3004_753_2780_34426} />
          </View>
          <View style={styles.View_3004_754}>
            <View style={styles.View_I3004_754_2780_35332} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bf9/8d17/92c9a3fb2e50a6203f06bb55d94d9c34"
              }}
              style={styles.ImageBackground_I3004_754_2780_35333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d49/0708/b4212713a3790280ee32c33a51bcd755"
              }}
              style={styles.ImageBackground_I3004_754_2780_35334}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc62/5d50/737347732ba37abb0afb958fc02e7999"
            }}
            style={styles.ImageBackground_3004_755}
          />
        </View>
      </View>
      <View style={styles.View_3004_756}>
        <View style={styles.View_I3004_756_2784_33817} />
      </View>
      <View style={styles.View_3004_757}>
        <View style={styles.View_3004_758} />
        <View style={styles.View_3004_759}>
          <Text style={styles.Text_3004_759}>Label</Text>
        </View>
        <View style={styles.View_3004_760}>
          <Text style={styles.Text_3004_760}>Label</Text>
        </View>
        <View style={styles.View_3004_761}>
          <Text style={styles.Text_3004_761}>Label</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3004_741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3004_742: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    overflow: "hidden"
  },
  View_3004_743: {
    flexGrow: 1,
    width: wp("68.26666666666667%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_3004_743: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3004_744: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3004_745: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
  },
  View_3004_746: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3004_747: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3004_748: {
    width: wp("17.333333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_3004_748: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_749: {
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
  View_I3004_749_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3004_749_2784_33799: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I3004_749_2784_33800: {
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
  View_I3004_749_2784_33801: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I3004_749_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3004_749_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3004_749_2784_33811: {
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
  View_I3004_749_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3004_749_2784_33812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3004_750: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_751: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3004_752: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3004_753: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_753_2780_34423: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("0.1366120218579283%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_I3004_753_2780_34424: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000007%"),
    top: hp("0.1366120218579283%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_I3004_753_2780_34425: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("2.0491803278688536%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_I3004_753_2780_34426: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000007%"),
    top: hp("2.0491803278688536%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_3004_754: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3004_754_2780_35332: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("1.3661202185792263%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3004_754_2780_35333: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%"),
    top: hp("0.8196721311475272%")
  },
  ImageBackground_I3004_754_2780_35334: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_3004_755: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
  },
  View_3004_756: {
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
  View_I3004_756_2784_33817: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_3004_757: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_3004_758: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0.5464480874316955%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_759: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("1.092896174863391%")
  },
  Text_3004_759: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_760: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("1.092896174863391%")
  },
  Text_3004_760: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_761: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("1.092896174863391%")
  },
  Text_3004_761: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
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
