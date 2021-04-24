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
      <View style={styles.View_1164_10280}>
        <View style={styles.View_1164_10281} />
        <View style={styles.View_1164_10282} />
        <View style={styles.View_1164_10283} />
        <View style={styles.View_1164_10284}>
          <Text style={styles.Text_1164_10284}>Your Symptoms</Text>
        </View>
        <View style={styles.View_1164_10285}>
          <Text style={styles.Text_1164_10285}>
            What symptoms have you been experiencing?
          </Text>
        </View>
      </View>
      <View style={styles.View_1164_10296}>
        <View style={styles.View_I1164_10296_940_4583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a66/b115/fdd128d4a287fbf7a0d840fb1010374f"
            }}
            style={styles.ImageBackground_I1164_10296_940_4584}
          />
          <View style={styles.View_I1164_10296_940_4585}>
            <Text style={styles.Text_I1164_10296_940_4585}>Continue</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10297}>
        <View style={styles.View_I1164_10297_939_819}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I1164_10297_939_819_100_657}
          />
          <View style={styles.View_I1164_10297_939_819_100_658}>
            <Text style={styles.Text_I1164_10297_939_819_100_658}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10345}>
        <View style={styles.View_1164_10336}>
          <View style={styles.View_I1164_10336_527_356}>
            <View style={styles.View_I1164_10336_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1164_10339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f5/ff67/a0f1e6f8a861c9b1ac3689565db88372"
            }}
            style={styles.ImageBackground_I1164_10339_99_1478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/75df/4389696349233c41e94a261fb7ad3c03"
            }}
            style={styles.ImageBackground_I1164_10339_245_0}
          />
        </View>
        <View style={styles.View_1164_10344}>
          <Text style={styles.Text_1164_10344}>Headache</Text>
        </View>
      </View>
      <View style={styles.View_1164_10346}>
        <View style={styles.View_1164_10347}>
          <View style={styles.View_I1164_10347_527_356}>
            <View style={styles.View_I1164_10347_527_356_4_227} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/1150/d0855424407a334de404a40eeb84b492"
          }}
          style={styles.ImageBackground_1164_10348}
        />
        <View style={styles.View_1164_10349}>
          <Text style={styles.Text_1164_10349}>Sore Throat</Text>
        </View>
      </View>
      <View style={styles.View_1164_10355}>
        <View style={styles.View_1164_10356}>
          <View style={styles.View_I1164_10356_527_356}>
            <View style={styles.View_I1164_10356_527_356_4_227} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/1150/d0855424407a334de404a40eeb84b492"
          }}
          style={styles.ImageBackground_1164_10357}
        />
        <View style={styles.View_1164_10358}>
          <Text style={styles.Text_1164_10358}>Joint Pain</Text>
        </View>
      </View>
      <View style={styles.View_1164_10359}>
        <View style={styles.View_1164_10360}>
          <View style={styles.View_I1164_10360_527_356}>
            <View style={styles.View_I1164_10360_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1164_10361}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f5/ff67/a0f1e6f8a861c9b1ac3689565db88372"
            }}
            style={styles.ImageBackground_I1164_10361_99_1478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/75df/4389696349233c41e94a261fb7ad3c03"
            }}
            style={styles.ImageBackground_I1164_10361_245_0}
          />
        </View>
        <View style={styles.View_1164_10362}>
          <Text style={styles.Text_1164_10362}>Nausea</Text>
        </View>
      </View>
      <View style={styles.View_1164_10391}>
        <View style={styles.View_1164_10392}>
          <View style={styles.View_I1164_10392_527_356}>
            <View style={styles.View_I1164_10392_527_356_4_227} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/1150/d0855424407a334de404a40eeb84b492"
          }}
          style={styles.ImageBackground_1164_10393}
        />
        <View style={styles.View_1164_10394}>
          <Text style={styles.Text_1164_10394}>Fever</Text>
        </View>
      </View>
      <View style={styles.View_1164_10395}>
        <View style={styles.View_1164_10396}>
          <View style={styles.View_I1164_10396_527_356}>
            <View style={styles.View_I1164_10396_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1164_10397}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f5/ff67/a0f1e6f8a861c9b1ac3689565db88372"
            }}
            style={styles.ImageBackground_I1164_10397_99_1478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/75df/4389696349233c41e94a261fb7ad3c03"
            }}
            style={styles.ImageBackground_I1164_10397_245_0}
          />
        </View>
        <View style={styles.View_1164_10398}>
          <Text style={styles.Text_1164_10398}>Cough</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10280: {
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
  View_1164_10281: {
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
  View_1164_10282: {
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
  View_1164_10283: {
    width: wp("100%"),
    minWidth: wp("100%"),
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
  View_1164_10284: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("6.830601092896176%")
  },
  Text_1164_10284: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1164_10285: {
    width: wp("79.73333333333333%"),
    top: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  Text_1164_10285: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10296: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10296_940_4583: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10296_940_4584: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1164_10296_940_4585: {
    width: wp("37.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.066666666666677%")
  },
  Text_I1164_10296_940_4585: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10297: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10297_939_819: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10297_939_819_100_657: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1164_10297_939_819_100_658: {
    flexGrow: 1,
    width: wp("37.439998372395834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0800130208333343%"),
    top: hp("0%")
  },
  Text_I1164_10297_939_819_100_658: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10345: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.191256830601095%")
  },
  View_1164_10336: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10336_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10336_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1164_10339: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10339_99_1478: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10339_245_0: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.639344262295083%")
  },
  View_1164_10344: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  Text_1164_10344: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1164_10346: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("30.191256830601095%")
  },
  View_1164_10347: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10347_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10347_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  ImageBackground_1164_10348: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("4.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333334%")
  },
  View_1164_10349: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%")
  },
  Text_1164_10349: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1164_10355: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("50.13661202185792%")
  },
  View_1164_10356: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10356_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10356_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  ImageBackground_1164_10357: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  View_1164_10358: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  Text_1164_10358: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1164_10359: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("50.13661202185792%")
  },
  View_1164_10360: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10360_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10360_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1164_10361: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333334%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10361_99_1478: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10361_245_0: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.639344262295083%")
  },
  View_1164_10362: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%")
  },
  Text_1164_10362: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1164_10391: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.08196721311475%")
  },
  View_1164_10392: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10392_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10392_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  ImageBackground_1164_10393: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  View_1164_10394: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  Text_1164_10394: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1164_10395: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("70.08196721311475%")
  },
  View_1164_10396: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10396_527_356: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10396_527_356_4_227: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1164_10397: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333334%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10397_99_1478: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10397_245_0: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.639344262295083%")
  },
  View_1164_10398: {
    width: wp("40.53333333333333%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%")
  },
  Text_1164_10398: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 10,
    fontWeight: "600",
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
