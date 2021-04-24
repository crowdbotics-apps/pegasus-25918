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
      <View style={styles.View_1164_10156}>
        <View style={styles.View_1164_10157} />
        <View style={styles.View_1164_10158} />
        <View style={styles.View_1164_10159} />
        <View style={styles.View_1164_10160}>
          <Text style={styles.Text_1164_10160}>Medical History</Text>
        </View>
        <View style={styles.View_1164_10161}>
          <Text style={styles.Text_1164_10161}>
            Please take a moment to add personal details.
          </Text>
        </View>
      </View>
      <View style={styles.View_1164_10166}>
        <View style={styles.View_I1164_10166_322_1358}>
          <View style={styles.View_I1164_10166_322_1360}>
            <Text style={styles.Text_I1164_10166_322_1360}>
              Height (feet, inches)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10176}>
        <View style={styles.View_I1164_10176_322_1358}>
          <View style={styles.View_I1164_10176_322_1360}>
            <Text style={styles.Text_I1164_10176_322_1360}>Weight (lbs)</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10181}>
        <View style={styles.View_I1164_10181_322_1358}>
          <View style={styles.View_I1164_10181_322_1360}>
            <Text style={styles.Text_I1164_10181_322_1360}>Medication(s)</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10186}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2d0/19bd/4b5de5ce26c1e454f4b4f46247237de2"
          }}
          style={styles.ImageBackground_I1164_10186_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000b/fea7/f91e68d9bdffc3f352a54626d7deec8f"
          }}
          style={styles.ImageBackground_I1164_10186_478_381}
        />
      </View>
      <View style={styles.View_1164_10204}>
        <View style={styles.View_I1164_10204_322_1358}>
          <View style={styles.View_I1164_10204_322_1360}>
            <Text style={styles.Text_I1164_10204_322_1360}>Allergy(s)</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10214}>
        <Text style={styles.Text_1164_10214}>Do you smoke?</Text>
      </View>
      <View style={styles.View_1164_10215}>
        <View style={styles.View_I1164_10215_18_175} />
        <View style={styles.View_I1164_10215_18_176} />
      </View>
      <View style={styles.View_1164_10275}>
        <Text style={styles.Text_1164_10275}>Are your active?</Text>
      </View>
      <View style={styles.View_1164_10276}>
        <View style={styles.View_I1164_10276_18_175} />
        <View style={styles.View_I1164_10276_18_176} />
      </View>
      <View style={styles.View_1164_10205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2d0/19bd/4b5de5ce26c1e454f4b4f46247237de2"
          }}
          style={styles.ImageBackground_I1164_10205_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000b/fea7/f91e68d9bdffc3f352a54626d7deec8f"
          }}
          style={styles.ImageBackground_I1164_10205_478_381}
        />
      </View>
      <View style={styles.View_1164_10233}>
        <View style={styles.View_I1164_10233_940_4583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a66/b115/fdd128d4a287fbf7a0d840fb1010374f"
            }}
            style={styles.ImageBackground_I1164_10233_940_4584}
          />
          <View style={styles.View_I1164_10233_940_4585}>
            <Text style={styles.Text_I1164_10233_940_4585}>Continue</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_10259}>
        <View style={styles.View_I1164_10259_939_819}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I1164_10259_939_819_100_657}
          />
          <View style={styles.View_I1164_10259_939_819_100_658}>
            <Text style={styles.Text_I1164_10259_939_819_100_658}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10156: {
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
  View_1164_10157: {
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
  View_1164_10158: {
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
  View_1164_10159: {
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
  View_1164_10160: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("6.830601092896176%")
  },
  Text_1164_10160: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1164_10161: {
    width: wp("79.73333333333333%"),
    top: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  Text_1164_10161: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10166: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.191256830601095%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10166_322_1358: {
    flexGrow: 1,
    width: wp("44.53333333333334%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10166_322_1360: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147545%")
  },
  Text_I1164_10166_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10176: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.57377049180328%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10176_322_1358: {
    flexGrow: 1,
    width: wp("26.93333333333333%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10176_322_1360: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10176_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10181: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10181_322_1358: {
    flexGrow: 1,
    width: wp("30.666666666666664%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10181_322_1360: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10181_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10186: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10186_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10186_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26666666666668%"),
    top: hp("2.185792349726782%")
  },
  View_1164_10204: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("62.704918032786885%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_10204_322_1358: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10204_322_1360: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_10204_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10214: {
    width: wp("58.4%"),
    top: hp("73.63387978142076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10214: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10215: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10215_18_175: {
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
  View_I1164_10215_18_176: {
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
  View_1164_10275: {
    width: wp("58.4%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  Text_1164_10275: {
    color: "rgba(104, 137, 144, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10276: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10276_18_175: {
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
  View_I1164_10276_18_176: {
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
  View_1164_10205: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("62.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10205_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10205_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26666666666668%"),
    top: hp("2.185792349726775%")
  },
  View_1164_10233: {
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
  View_I1164_10233_940_4583: {
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
  ImageBackground_I1164_10233_940_4584: {
    width: wp("41.333333333333336%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1164_10233_940_4585: {
    width: wp("37.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.066666666666677%")
  },
  Text_I1164_10233_940_4585: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_10259: {
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
  View_I1164_10259_939_819: {
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
  View_I1164_10259_939_819_100_657: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1164_10259_939_819_100_658: {
    flexGrow: 1,
    width: wp("37.439998372395834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0800130208333343%"),
    top: hp("0%")
  },
  Text_I1164_10259_939_819_100_658: {
    color: "rgba(0, 135, 210, 1)",
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
