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
      <View style={styles.View_1164_10122}>
        <View style={styles.View_1164_10123} />
        <View style={styles.View_1164_10124} />
        <View style={styles.View_1164_10125} />
        <View style={styles.View_1164_10126} />
      </View>
      <View style={styles.View_1164_10127}>
        <Text style={styles.Text_1164_10127}>DocNow</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e97/f027/1ce98909a572d45ec974f915f4d2fd8e"
        }}
        style={styles.ImageBackground_1164_10128}
      />
      <View style={styles.View_1164_10129}>
        <Text style={styles.Text_1164_10129}>Login with FaceId</Text>
      </View>
      <View style={styles.View_1164_10130}>
        <View style={styles.View_I1164_10130_322_1107}>
          <View style={styles.View_I1164_10130_322_1109}>
            <Text style={styles.Text_I1164_10130_322_1109}>
              Username or Email
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10131}>
        <View style={styles.View_I1164_10131_322_1107}>
          <View style={styles.View_I1164_10131_322_1109}>
            <Text style={styles.Text_I1164_10131_322_1109}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10132}>
        <Text style={styles.Text_1164_10132}>Problems with login?</Text>
      </View>
      <View style={styles.View_1164_10133}>
        <Text style={styles.Text_1164_10133}>Create an account?</Text>
      </View>
      <View style={styles.View_1164_10134}>
        <View style={styles.View_I1164_10134_952_204}>
          <View style={styles.View_I1164_10134_952_204_939_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e8/005f/85fc4577d87f74d41ba4639c724a7e72"
              }}
              style={styles.ImageBackground_I1164_10134_952_204_939_324}
            />
            <View style={styles.View_I1164_10134_952_204_939_325}>
              <Text style={styles.Text_I1164_10134_952_204_939_325}>Login</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
            }}
            style={styles.ImageBackground_I1164_10134_952_204_938_3903}
          />
        </View>
      </View>
      <View style={styles.View_1164_10135}>
        <Text style={styles.Text_1164_10135}>Hi There!</Text>
      </View>
      <View style={styles.View_1164_10153}>
        <View style={styles.View_I1164_10153_18_155} />
        <View style={styles.View_I1164_10153_18_156} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10122: {
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
  View_1164_10123: {
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
  View_1164_10124: {
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
  View_1164_10125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 135, 210, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10126: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("71.31147540983606%"),
    minHeight: hp("71.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1164_10127: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("18.442622950819672%")
  },
  Text_1164_10127: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  ImageBackground_1164_10128: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%")
  },
  View_1164_10129: {
    width: wp("58.4%"),
    top: hp("77.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10129: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10130: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("54.23497267759563%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10130_322_1107: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10130_322_1109: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10130_322_1109: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10131: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.7103825136612%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10131_322_1107: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10131_322_1109: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475557%")
  },
  Text_I1164_10131_322_1109: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10132: {
    width: wp("84%"),
    top: hp("85.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10132: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10133: {
    width: wp("84%"),
    top: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10133: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10134: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10134_952_204: {
    flexGrow: 1,
    width: wp("85.86666666666667%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10134_952_204_939_323: {
    flexGrow: 1,
    width: wp("85.86666666666667%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10134_952_204_939_324: {
    width: wp("85.86666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1164_10134_952_204_939_325: {
    width: wp("77.27999674479167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.293359375%")
  },
  Text_I1164_10134_952_204_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1164_10134_952_204_938_3903: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("2.732240437158481%")
  },
  View_1164_10135: {
    width: wp("85.6%"),
    top: hp("44.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10135: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1164_10153: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("78.55191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10153_18_155: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 135, 210, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1164_10153_18_156: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    borderColor: "rgba(0, 135, 210, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
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
