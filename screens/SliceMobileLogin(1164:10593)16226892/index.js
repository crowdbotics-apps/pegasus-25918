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
      <View style={styles.View_1164_10594}>
        <View style={styles.View_1164_10595} />
        <View style={styles.View_1164_10596} />
        <View style={styles.View_1164_10597} />
        <View style={styles.View_1164_10598} />
      </View>
      <View style={styles.View_1164_10601}>
        <Text style={styles.Text_1164_10601}>Login with FaceId</Text>
      </View>
      <View style={styles.View_1164_10602}>
        <View style={styles.View_I1164_10602_322_1358}>
          <View style={styles.View_I1164_10602_322_1360}>
            <Text style={styles.Text_I1164_10602_322_1360}>
              Username or Email
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10603}>
        <View style={styles.View_I1164_10603_322_1358}>
          <View style={styles.View_I1164_10603_322_1360}>
            <Text style={styles.Text_I1164_10603_322_1360}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1168_62}>
        <View style={styles.View_I1168_62_322_1358}>
          <View style={styles.View_I1168_62_322_1360}>
            <Text style={styles.Text_I1168_62_322_1360}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10604}>
        <Text style={styles.Text_1164_10604}>Problems with login?</Text>
      </View>
      <View style={styles.View_1164_10606}>
        <View style={styles.View_I1164_10606_952_204}>
          <View style={styles.View_I1164_10606_952_204_939_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a633/1cf9/c6f299659ce2101d444a29a9853a8e71"
              }}
              style={styles.ImageBackground_I1164_10606_952_204_939_324}
            />
            <View style={styles.View_I1164_10606_952_204_939_325}>
              <Text style={styles.Text_I1164_10606_952_204_939_325}>Login</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
            }}
            style={styles.ImageBackground_I1164_10606_952_204_938_3903}
          />
        </View>
      </View>
      <View style={styles.View_1164_10607}>
        <Text style={styles.Text_1164_10607}>Hello again!</Text>
      </View>
      <View style={styles.View_1164_10608}>
        <View style={styles.View_I1164_10608_18_175} />
        <View style={styles.View_I1164_10608_18_176} />
      </View>
      <View style={styles.View_1168_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ba9/6ede/fb79c2ac0afcb1d340ade809cf36969b"
          }}
          style={styles.ImageBackground_I1168_46_478_380}
        />
        <View style={styles.View_I1168_46_478_381}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d21c/2033/760426e8e0805e05d55133c0b17ab36d"
            }}
            style={styles.ImageBackground_I1168_46_478_381_1113_6780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f127/ed64/4c78018cddebbd71821a7bd7d8e7ef70"
            }}
            style={styles.ImageBackground_I1168_46_478_381_1113_6781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbde/eb4a/7ce56aab69e900766243a93a313fca63"
            }}
            style={styles.ImageBackground_I1168_46_478_381_1113_6783}
          />
        </View>
      </View>
      <View style={styles.View_1332_0}>
        <View style={styles.View_1332_1}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba1/6b8e/1e5b8e6d141892aadd5bdbb128586ce6"
            }}
            style={styles.ImageBackground_1332_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515b/bd62/e12ec1c44d21091b73dbf25afbdf125d"
            }}
            style={styles.ImageBackground_1332_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f72/6406/c08f996cc9d7648f9f71b39cf444265f"
            }}
            style={styles.ImageBackground_1332_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2489/c750/c70968bb6b983070e5caf822c974f7c2"
            }}
            style={styles.ImageBackground_1332_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2047/cfdd/bd8286d17f7acd40d6279a1238ce86bf"
            }}
            style={styles.ImageBackground_1332_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e7d/3511/2f3287f538324768b82969c3310f5bdd"
            }}
            style={styles.ImageBackground_1332_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00b9/42e8/28fb3a7de35a65af2af84bf124d3bb53"
            }}
            style={styles.ImageBackground_1332_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d659/a2a5/a2ac45664e8c48593e196a1d9bca476e"
            }}
            style={styles.ImageBackground_1332_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0093/3d97/0bfa08f0710955d4a600a15f12ed8938"
            }}
            style={styles.ImageBackground_1332_16}
          />
        </View>
      </View>
      <View style={styles.View_1332_18}>
        <Text style={styles.Text_1332_18}>Create an account?</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10594: {
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
  View_1164_10595: {
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
  View_1164_10596: {
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
  View_1164_10597: {
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
  View_1164_10598: {
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
  View_1164_10601: {
    width: wp("58.4%"),
    top: hp("77.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10601: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10602: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("54.23497267759563%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10602_322_1358: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10602_322_1360: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10602_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10603: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.1639344262295%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10603_322_1358: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10603_322_1360: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10603_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1168_62: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.1639344262295%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1168_62_322_1358: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_62_322_1360: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1168_62_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10604: {
    width: wp("84%"),
    top: hp("85.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10604: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10606: {
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
  View_I1164_10606_952_204: {
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
  View_I1164_10606_952_204_939_323: {
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
  ImageBackground_I1164_10606_952_204_939_324: {
    width: wp("85.86666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1164_10606_952_204_939_325: {
    width: wp("77.27999674479167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.293359375%")
  },
  Text_I1164_10606_952_204_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1164_10606_952_204_938_3903: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("2.732240437158481%")
  },
  View_1164_10607: {
    width: wp("85.6%"),
    top: hp("44.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10607: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1164_10608: {
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
  View_I1164_10608_18_175: {
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
  View_I1164_10608_18_176: {
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
  View_1168_46: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("65.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1168_46_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1168_46_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1168_46_478_381_1113_6780: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5145833333333485%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I1168_46_478_381_1113_6781: {
    flexGrow: 1,
    width: wp("6.229209391276042%"),
    height: hp("2.3825551642746223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5621904883879694%")
  },
  ImageBackground_I1168_46_478_381_1113_6783: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3145833333333456%"),
    top: hp("1.3055519979508148%")
  },
  View_1332_0: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    height: hp("16.7964153602475%"),
    minHeight: hp("16.7964153602475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("8.60655737704918%")
  },
  View_1332_1: {
    width: wp("29.599999999999998%"),
    height: hp("16.7964153602475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1332_2: {
    width: wp("27.242409261067706%"),
    height: hp("11.756183019752712%"),
    top: hp("5.040236509562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1332_3: {
    width: wp("26.869462076822913%"),
    height: hp("8.313604261054367%"),
    top: hp("5.040503329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1332_5: {
    width: wp("27.249491373697914%"),
    height: hp("11.756915733462474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3505208333333414%")
  },
  ImageBackground_1332_6: {
    width: wp("24.94765828450521%"),
    height: hp("8.306399590330697%"),
    top: hp("5.040503329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.022135416666671404%")
  },
  ImageBackground_1332_8: {
    width: wp("24.950372314453126%"),
    height: hp("8.306401153731215%"),
    top: hp("3.450520833333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62623697916667%")
  },
  ImageBackground_1332_10: {
    width: wp("22.683428955078124%"),
    height: hp("6.663936344000811%"),
    top: hp("9.177019296448089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.69264322916667%")
  },
  ImageBackground_1332_12: {
    width: wp("22.44505615234375%"),
    height: hp("5.37024847145289%"),
    top: hp("0.9565509733606561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.461848958333341%")
  },
  ImageBackground_1332_14: {
    width: wp("27.23350626627604%"),
    height: hp("7.356258037963199%"),
    top: hp("9.440104166666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1332_16: {
    width: wp("26.32379353841146%"),
    height: hp("5.289292986927137%"),
    top: hp("0.001067281420764843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0569661458333357%")
  },
  View_1332_18: {
    width: wp("84%"),
    top: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1332_18: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
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
