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
      <View style={styles.View_1167_36}>
        <View style={styles.View_1167_37} />
        <View style={styles.View_1167_38} />
        <View style={styles.View_1167_39} />
      </View>
      <View style={styles.View_1167_54}>
        <Text style={styles.Text_1167_54}>Payment</Text>
      </View>
      <View style={styles.View_1167_230}>
        <Text style={styles.Text_1167_230}>Amount to send</Text>
      </View>
      <View style={styles.View_1168_2}>
        <Text style={styles.Text_1168_2}>Cancel</Text>
      </View>
      <View style={styles.View_1167_113}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/711a/f06f/8be243577cef38c3fb210294f8e2f90a"
          }}
          style={styles.ImageBackground_I1167_113_939_327}
        />
        <View style={styles.View_I1167_113_939_328}>
          <Text style={styles.Text_I1167_113_939_328}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_1167_137}>
        <View style={styles.View_I1167_137_1033_6294}>
          <Text style={styles.Text_I1167_137_1033_6294}>1</Text>
        </View>
        <View style={styles.View_I1167_137_2333_2318}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f6/1356/33693f91f0f3cd209549eb50cef29307"
            }}
            style={styles.ImageBackground_I1167_137_1033_6295}
          />
          <View style={styles.View_I1167_137_1033_6299}>
            <Text style={styles.Text_I1167_137_1033_6299}>5</Text>
          </View>
        </View>
        <View style={styles.View_I1167_137_1033_6296}>
          <Text style={styles.Text_I1167_137_1033_6296}>2</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6297}>
          <Text style={styles.Text_I1167_137_1033_6297}>3</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6298}>
          <Text style={styles.Text_I1167_137_1033_6298}>4</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6300}>
          <Text style={styles.Text_I1167_137_1033_6300}>6</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6301}>
          <Text style={styles.Text_I1167_137_1033_6301}>7</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6302}>
          <Text style={styles.Text_I1167_137_1033_6302}>8</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6303}>
          <Text style={styles.Text_I1167_137_1033_6303}>9</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6304}>
          <Text style={styles.Text_I1167_137_1033_6304}>•</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6305}>
          <Text style={styles.Text_I1167_137_1033_6305}>0</Text>
        </View>
        <View style={styles.View_I1167_137_1033_6306}>
          <View style={styles.View_I1167_137_1033_6306_1198_164}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca52/71c7/d62d47712345d9e1a11ed37de8df796b"
              }}
              style={
                styles.ImageBackground_I1167_137_1033_6306_1198_164_1113_6826
              }
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ef/1ff2/fdd0a572945f2ffdfb02e46598f7e766"
              }}
              style={
                styles.ImageBackground_I1167_137_1033_6306_1198_164_1113_6827
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1168_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cd7/2df5/59760e4b49fb7244042df3575679de2c"
          }}
          style={styles.ImageBackground_1167_228}
        />
        <View style={styles.View_1167_231}>
          <Text style={styles.Text_1167_231}>2,1475.41</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f20/7a1f/5f76edf31dd7644650f5453a91061644"
          }}
          style={styles.ImageBackground_1167_232}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1167_36: {
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
  View_1167_37: {
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
  View_1167_38: {
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
  View_1167_39: {
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
  View_1167_54: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.098360655737705%")
  },
  Text_1167_54: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1167_230: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.120218579234972%")
  },
  Text_1167_230: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1168_2: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.72131147540983%")
  },
  Text_1168_2: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1167_113: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("85.79234972677595%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1167_113_939_327: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1167_113_939_328: {
    flexGrow: 1,
    width: wp("78.47999674479166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.360026041666666%"),
    top: hp("0%")
  },
  Text_I1167_113_939_328: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1167_137: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("38.9344262295082%"),
    minHeight: hp("38.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("43.98907103825137%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1167_137_1033_6294: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1167_137_1033_6294: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_2333_2318: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333338%"),
    top: hp("9.699453551912569%")
  },
  ImageBackground_I1167_137_1033_6295: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1167_137_1033_6299: {
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1167_137_1033_6299: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6296: {
    flexGrow: 1,
    width: wp("16.681589762369793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.19251302083333%"),
    top: hp("0%")
  },
  Text_I1167_137_1033_6296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6297: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.38509114583333%"),
    top: hp("0%")
  },
  Text_I1167_137_1033_6297: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6298: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.883292776639344%")
  },
  Text_I1167_137_1033_6298: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6300: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.38509114583333%"),
    top: hp("9.883292776639344%")
  },
  Text_I1167_137_1033_6300: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6301: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.766585553278688%")
  },
  Text_I1167_137_1033_6301: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6302: {
    flexGrow: 1,
    width: wp("16.681589762369793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.19251302083333%"),
    top: hp("19.766585553278688%")
  },
  Text_I1167_137_1033_6302: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6303: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.38509114583333%"),
    top: hp("19.766585553278688%")
  },
  Text_I1167_137_1033_6303: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6304: {
    flexGrow: 1,
    width: wp("16.68158772786458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.650145150273218%")
  },
  Text_I1167_137_1033_6304: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6305: {
    flexGrow: 1,
    width: wp("16.681589762369793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.19251302083333%"),
    top: hp("29.650145150273218%")
  },
  Text_I1167_137_1033_6305: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1167_137_1033_6306: {
    flexGrow: 1,
    width: wp("9.36510009765625%"),
    height: hp("4.791930985581027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.89700520833333%"),
    top: hp("30.997854764344254%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1167_137_1033_6306_1198_164: {
    flexGrow: 1,
    width: wp("9.36510009765625%"),
    height: hp("4.791930985581027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1167_137_1033_6306_1198_164_1113_6826: {
    flexGrow: 1,
    width: wp("8.974887084960939%"),
    height: hp("3.593948239185771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5990116974043787%")
  },
  ImageBackground_I1167_137_1033_6306_1198_164_1113_6827: {
    flexGrow: 1,
    width: wp("2.3412750244140623%"),
    height: hp("1.1979827463952568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.902148437500017%"),
    top: hp("1.7970350922131217%")
  },
  View_1168_3: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.562845699122695%"),
    minHeight: hp("9.562845699122695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("27.322404371584703%")
  },
  ImageBackground_1167_228: {
    width: wp("87.2%"),
    height: hp("0.0000039053618005550686%"),
    top: hp("9.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1167_231: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.800000000000004%"),
    top: hp("0%")
  },
  Text_1167_231: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  ImageBackground_1167_232: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
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
