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
      <View style={styles.View_1155_9184}>
        <View style={styles.View_1155_9185}>
          <Text style={styles.Text_1155_9185}>roomie match</Text>
        </View>
        <View style={styles.View_1155_9186}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dccc/46ad/926dc4ad430d63ae81066011206d5b8b"
            }}
            style={styles.ImageBackground_1155_9187}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c915/4fc8/98ad9ed62c266f0d8dd75f26d3edf8f4"
            }}
            style={styles.ImageBackground_1155_9188}
          />
        </View>
      </View>
      <View style={styles.View_1155_9192}>
        <Text style={styles.Text_1155_9192}>I am currently</Text>
      </View>
      <View style={styles.View_1155_9193}>
        <View style={styles.View_1155_9194} />
        <View style={styles.View_1155_9195}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5c/5558/79a97107b5e27db8d21a676576adfcff"
            }}
            style={styles.ImageBackground_I1155_9195_890_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c295/36eb/072ef5d7e702363a9219d1c58aac13af"
            }}
            style={styles.ImageBackground_I1155_9195_890_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0619/b40e/f3ac89977e5e5f92652eec797931bcdc"
            }}
            style={styles.ImageBackground_I1155_9195_890_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89a7/3cdc/bcf39b38a7b2c567c08497abfeb01f12"
            }}
            style={styles.ImageBackground_I1155_9195_890_102}
          />
        </View>
        <View style={styles.View_1155_9196}>
          <Text style={styles.Text_1155_9196}>Renting a room</Text>
        </View>
      </View>
      <View style={styles.View_1155_9197}>
        <View style={styles.View_1155_9198} />
        <View style={styles.View_1155_9199}>
          <Text style={styles.Text_1155_9199}>Looking for a place</Text>
        </View>
      </View>
      <View style={styles.View_1155_9200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/705a/f752/f086f9002f1b9aa49cba9ebf355deb29"
          }}
          style={styles.ImageBackground_I1155_9200_890_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5409/0839/ed7d62327d6f2913cf6786a73905fbc8"
          }}
          style={styles.ImageBackground_I1155_9200_890_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c577/7e11/0bd9fe7cdcf95fe7500390f633355474"
          }}
          style={styles.ImageBackground_I1155_9200_890_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c577/7e11/0bd9fe7cdcf95fe7500390f633355474"
          }}
          style={styles.ImageBackground_I1155_9200_890_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c577/7e11/0bd9fe7cdcf95fe7500390f633355474"
          }}
          style={styles.ImageBackground_I1155_9200_890_69}
        />
        <View style={styles.View_I1155_9200_890_70} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/675a/9f6f/a4866f11cfb32e5974e8742ac0b9175d"
          }}
          style={styles.ImageBackground_I1155_9200_890_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_73}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a0/6877/a278ef7f7be4b95d20f4773e94a684a4"
          }}
          style={styles.ImageBackground_I1155_9200_890_77}
        />
      </View>
      <View style={styles.View_1155_9201}>
        <View style={styles.View_I1155_9201_939_323}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c4/8d7f/8f27f95d856e5676de917a7d74894e3d"
            }}
            style={styles.ImageBackground_I1155_9201_939_324}
          />
          <View style={styles.View_I1155_9201_939_325}>
            <Text style={styles.Text_I1155_9201_939_325}>Next</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
          }}
          style={styles.ImageBackground_I1155_9201_938_3903}
        />
      </View>
      <View style={styles.View_1155_9202}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
          }}
          style={styles.ImageBackground_I1155_9202_99_1478}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2625/7ee2/11cae5d716a1e6dcc6b52ea45eefa96e"
          }}
          style={styles.ImageBackground_I1155_9202_245_0}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23db/c83f/280ece87ee9083103ce95a7f33a22c0e"
        }}
        style={styles.ImageBackground_1155_9203}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1155_9184: {
    width: wp("39.68000081380209%"),
    minWidth: wp("39.68000081380209%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("7.650273224043716%")
  },
  View_1155_9185: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.079996744791671%"),
    top: hp("0%")
  },
  Text_1155_9185: {
    color: "rgba(51, 167, 125, 1)",
    fontSize: 22.200000762939453,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1155_9186: {
    width: wp("10.240000406901041%"),
    minWidth: wp("10.240000406901041%"),
    height: hp("5.828779772982571%"),
    minHeight: hp("5.828779772982571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21852587090163933%")
  },
  ImageBackground_1155_9187: {
    width: wp("10.240000406901041%"),
    height: hp("5.828779772982571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1155_9188: {
    width: wp("3.4133333841959637%"),
    height: hp("1.748633905838096%"),
    top: hp("2.4771601775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.413330078125%")
  },
  View_1155_9192: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("24.18032786885246%")
  },
  Text_1155_9192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1155_9193: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("64.20765027322405%")
  },
  View_1155_9194: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 167, 125, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_1155_9195: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("4.9180327868852345%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1155_9195_890_99: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.40983606557378494%")
  },
  ImageBackground_I1155_9195_890_100: {
    flexGrow: 1,
    width: wp("1.3333333333333335%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333307%"),
    top: hp("0.8196721311475557%")
  },
  ImageBackground_I1155_9195_890_101: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("1.639344262295097%")
  },
  ImageBackground_I1155_9195_890_102: {
    flexGrow: 1,
    width: wp("2.5233500162760416%"),
    height: hp("0.8196721962892293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3433186848958343%"),
    top: hp("1.9125683060109395%")
  },
  View_1155_9196: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("10.245901639344254%")
  },
  Text_1155_9196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9197: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("64.20765027322405%")
  },
  View_1155_9198: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(217, 219, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_1155_9199: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000007%"),
    top: hp("10.245901639344254%")
  },
  Text_1155_9199: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9200: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%"),
    top: hp("69.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1155_9200_890_65: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("3.0054647414410702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.13661202185794252%")
  },
  ImageBackground_I1155_9200_890_66: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("2.5956284153005527%")
  },
  ImageBackground_I1155_9200_890_67: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.9125683060109395%")
  },
  ImageBackground_I1155_9200_890_68: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.3661202185792405%")
  },
  ImageBackground_I1155_9200_890_69: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.4590163934426386%")
  },
  View_I1155_9200_890_70: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000014%"),
    top: hp("0.6830601092896273%"),
    borderColor: "rgba(51, 167, 125, 1)",
    borderWidth: 2
  },
  ImageBackground_I1155_9200_890_71: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("0%")
  },
  ImageBackground_I1155_9200_890_72: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("2.0491803278688536%")
  },
  ImageBackground_I1155_9200_890_73: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("2.0491803278688536%")
  },
  ImageBackground_I1155_9200_890_74: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_I1155_9200_890_75: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_I1155_9200_890_76: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_I1155_9200_890_77: {
    flexGrow: 1,
    width: wp("0.8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.5027322404371546%")
  },
  View_1155_9201: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9201_939_323: {
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
  ImageBackground_I1155_9201_939_324: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1155_9201_939_325: {
    width: wp("78%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.333333333333334%")
  },
  Text_I1155_9201_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1155_9201_938_3903: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("2.732240437158481%")
  },
  View_1155_9202: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("65.84699453551912%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1155_9202_99_1478: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1155_9202_245_0: {
    flexGrow: 1,
    width: wp("2.6%"),
    height: hp("0.9989754098360657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.166666666666668%"),
    top: hp("1.3319672131147655%")
  },
  ImageBackground_1155_9203: {
    width: wp("47.73333740234375%"),
    height: hp("18.442637542557847%"),
    top: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%")
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
