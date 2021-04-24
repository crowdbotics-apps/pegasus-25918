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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0e/192e/af209fff129d35f85e530bf604216f88"
        }}
        style={styles.ImageBackground_1155_9346}
      />
      <View style={styles.View_1155_9347} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e923/cee0/cff81db78864ecc04db94c5c46f71d02"
        }}
        style={styles.ImageBackground_1155_9348}
      />
      <View style={styles.View_1155_9349} />
      <View style={styles.View_1155_9350}>
        <View style={styles.View_1155_9351}>
          <Text style={styles.Text_1155_9351}>roomie match</Text>
        </View>
        <View style={styles.View_1155_9352}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f5/ed03/6bbdc115b8f2cbeaea392f5c8e222ace"
            }}
            style={styles.ImageBackground_1155_9353}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/792d/b632/904d27bf8c0c605bca23673cfb948d16"
            }}
            style={styles.ImageBackground_1155_9354}
          />
        </View>
      </View>
      <View style={styles.View_1155_9358}>
        <View style={styles.View_1155_9359}>
          <View style={styles.View_I1155_9359_322_1107}>
            <View style={styles.View_I1155_9359_322_1109}>
              <Text style={styles.Text_I1155_9359_322_1109}>Username</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1155_9360}>
          <View style={styles.View_I1155_9360_322_1107}>
            <View style={styles.View_I1155_9360_322_1109}>
              <Text style={styles.Text_I1155_9360_322_1109}>Password</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1155_9361}>
        <View style={styles.View_I1155_9361_939_323}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c4/8d7f/8f27f95d856e5676de917a7d74894e3d"
            }}
            style={styles.ImageBackground_I1155_9361_939_324}
          />
          <View style={styles.View_I1155_9361_939_325}>
            <Text style={styles.Text_I1155_9361_939_325}>Login</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
          }}
          style={styles.ImageBackground_I1155_9361_938_3903}
        />
      </View>
      <View style={styles.View_1155_9362}>
        <View style={styles.View_1155_9363}>
          <View style={styles.View_I1155_9363_18_175} />
          <View style={styles.View_I1155_9363_18_176} />
        </View>
        <View style={styles.View_1155_9364}>
          <Text style={styles.Text_1155_9364}>Login with FaceId?</Text>
        </View>
      </View>
      <View style={styles.View_1155_9365}>
        <Text style={styles.Text_1155_9365}>Login</Text>
      </View>
      <View style={styles.View_1155_9366}>
        <Text style={styles.Text_1155_9366}>Problems logging in?</Text>
      </View>
      <View style={styles.View_1155_9367}>
        <Text style={styles.Text_1155_9367}>Sign up for an account</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1155_9346: {
    width: wp("324.53333333333336%"),
    minWidth: wp("324.53333333333336%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-112.26666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1155_9347: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1155_9348: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1155_9349: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("78.27868852459017%"),
    minHeight: hp("78.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.650273224043715%")
  },
  View_1155_9350: {
    width: wp("59.199999999999996%"),
    minWidth: wp("59.199999999999996%"),
    height: hp("9.783184072359012%"),
    minHeight: hp("9.783184072359012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("11.475409836065573%")
  },
  View_1155_9351: {
    width: wp("38.19355061848959%"),
    minWidth: wp("38.19355061848959%"),
    minHeight: hp("9.783184072359012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.0064453125%"),
    top: hp("0%")
  },
  Text_1155_9351: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32.58064651489258,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1155_9352: {
    width: wp("15.277421061197916%"),
    minWidth: wp("15.277421061197916%"),
    height: hp("8.696163677778399%"),
    minHeight: hp("8.696163677778399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.32605447404371724%")
  },
  ImageBackground_1155_9353: {
    width: wp("15.277421061197916%"),
    height: hp("8.696163677778399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1155_9354: {
    width: wp("5.0924733479817705%"),
    height: hp("2.608849051220169%"),
    top: hp("3.6959955601092904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.092464192708334%")
  },
  View_1155_9358: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("43.98907103825137%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1155_9359: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1155_9359_322_1107: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9359_322_1109: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1155_9359_322_1109: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9360: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633881%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1155_9360_322_1107: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9360_322_1109: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1155_9360_322_1109: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9361: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9361_939_323: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1155_9361_939_324: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1155_9361_939_325: {
    width: wp("78%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.333333333333334%")
  },
  Text_I1155_9361_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1155_9361_938_3903: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("2.732240437158481%")
  },
  View_1155_9362: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.84699453551912%")
  },
  View_1155_9363: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9363_18_175: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1155_9363_18_176: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(217, 219, 233, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1155_9364: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1155_9364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9365: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("34.69945355191257%")
  },
  Text_1155_9365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1155_9366: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("86.74863387978142%")
  },
  Text_1155_9366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Lato-Regular",
    textAlign: "center",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9367: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("98.36065573770492%")
  },
  Text_1155_9367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Lato-Regular",
    textAlign: "center",
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
