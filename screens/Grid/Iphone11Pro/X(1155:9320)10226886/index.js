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
      <View style={styles.View_1155_9321}>
        <View style={styles.View_1155_9322}>
          <Text style={styles.Text_1155_9322}>roomie match</Text>
        </View>
        <View style={styles.View_1155_9323}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dccc/46ad/926dc4ad430d63ae81066011206d5b8b"
            }}
            style={styles.ImageBackground_1155_9324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c915/4fc8/98ad9ed62c266f0d8dd75f26d3edf8f4"
            }}
            style={styles.ImageBackground_1155_9325}
          />
        </View>
      </View>
      <View style={styles.View_1155_9329}>
        <View style={styles.View_I1155_9329_939_323}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c4/8d7f/8f27f95d856e5676de917a7d74894e3d"
            }}
            style={styles.ImageBackground_I1155_9329_939_324}
          />
          <View style={styles.View_I1155_9329_939_325}>
            <Text style={styles.Text_I1155_9329_939_325}>Finish</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
          }}
          style={styles.ImageBackground_I1155_9329_938_3903}
        />
      </View>
      <View style={styles.View_1155_9330}>
        <Text style={styles.Text_1155_9330}>Lease details</Text>
      </View>
      <View style={styles.View_1155_9331}>
        <Text style={styles.Text_1155_9331}>Photos</Text>
      </View>
      <View style={styles.View_1155_9332}>
        <Text style={styles.Text_1155_9332}>Available Move-in Date</Text>
      </View>
      <View style={styles.View_1155_9333}>
        <View style={styles.View_I1155_9333_572_231}>
          <View style={styles.View_I1155_9333_572_231_285_2268}>
            <View style={styles.View_I1155_9333_572_231_285_2268_327_954}>
              <View style={styles.View_I1155_9333_572_231_285_2268_572_317}>
                <Text style={styles.Text_I1155_9333_572_231_285_2268_572_317}>
                  Selected
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/e6b1/4631829703f0fc158255061a21aa8a39"
              }}
              style={styles.ImageBackground_I1155_9333_572_231_285_2268_327_956}
            />
          </View>
          <View style={styles.View_I1155_9333_572_231_285_2273}>
            <View style={styles.View_I1155_9333_572_231_285_2273_1004_5367}>
              <View style={styles.View_I1155_9333_572_231_285_2273_1004_5392}>
                <Text style={styles.Text_I1155_9333_572_231_285_2273_1004_5392}>
                  Unselected
                </Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1155_9333_572_231_285_2273_1168_1064}
              />
            </View>
          </View>
          <View style={styles.View_I1155_9333_572_231_285_2297}>
            <View style={styles.View_I1155_9333_572_231_285_2297_1004_5367}>
              <View style={styles.View_I1155_9333_572_231_285_2297_1004_5392}>
                <Text style={styles.Text_I1155_9333_572_231_285_2297_1004_5392}>
                  Unselected
                </Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1155_9333_572_231_285_2297_1168_1064}
              />
            </View>
          </View>
          <View style={styles.View_I1155_9333_572_231_285_2302}>
            <View style={styles.View_I1155_9333_572_231_285_2302_1004_5367}>
              <View style={styles.View_I1155_9333_572_231_285_2302_1004_5392}>
                <Text style={styles.Text_I1155_9333_572_231_285_2302_1004_5392}>
                  Unselected
                </Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1155_9333_572_231_285_2302_1168_1064}
              />
            </View>
          </View>
          <View style={styles.View_I1155_9333_572_231_2333_820}>
            <View style={styles.View_I1155_9333_572_231_2333_820_1004_5367}>
              <View style={styles.View_I1155_9333_572_231_2333_820_1004_5392}>
                <Text style={styles.Text_I1155_9333_572_231_2333_820_1004_5392}>
                  Unselected
                </Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1155_9333_572_231_2333_820_1168_1064}
              />
            </View>
          </View>
          <View style={styles.View_I1155_9333_572_231_2333_2861}>
            <View style={styles.View_I1155_9333_572_231_2333_2861_1004_5367}>
              <View style={styles.View_I1155_9333_572_231_2333_2861_1004_5392}>
                <Text
                  style={styles.Text_I1155_9333_572_231_2333_2861_1004_5392}
                >
                  Unselected
                </Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1155_9333_572_231_2333_2861_1168_1064}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1155_9334}>
        <View style={styles.View_I1155_9334_572_297}>
          <View style={styles.View_I1155_9334_572_297_4_758}>
            <View style={styles.View_I1155_9334_572_297_4_759}>
              <Text style={styles.Text_I1155_9334_572_297_4_759}>7</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
            }}
            style={styles.ImageBackground_I1155_9334_572_297_4_760}
          />
        </View>
        <View style={styles.View_I1155_9334_572_298}>
          <View style={styles.View_I1155_9334_572_298_285_2240}>
            <View style={styles.View_I1155_9334_572_298_285_2241}>
              <View style={styles.View_I1155_9334_572_298_572_369}>
                <Text style={styles.Text_I1155_9334_572_298_572_369}>Mon</Text>
              </View>
              <View style={styles.View_I1155_9334_572_298_285_2242}>
                <Text style={styles.Text_I1155_9334_572_298_285_2242}>8</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1155_9334_572_299}>
          <View style={styles.View_I1155_9334_572_299_285_2240}>
            <View style={styles.View_I1155_9334_572_299_285_2241}>
              <View style={styles.View_I1155_9334_572_299_572_369}>
                <Text style={styles.Text_I1155_9334_572_299_572_369}>Tue</Text>
              </View>
              <View style={styles.View_I1155_9334_572_299_285_2242}>
                <Text style={styles.Text_I1155_9334_572_299_285_2242}>9</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1155_9334_572_300}>
          <View style={styles.View_I1155_9334_572_300_285_2240}>
            <View style={styles.View_I1155_9334_572_300_285_2241}>
              <View style={styles.View_I1155_9334_572_300_572_369}>
                <Text style={styles.Text_I1155_9334_572_300_572_369}>Wed</Text>
              </View>
              <View style={styles.View_I1155_9334_572_300_285_2242}>
                <Text style={styles.Text_I1155_9334_572_300_285_2242}>10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1155_9335}>
        <View style={styles.View_1155_9336}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/284c/0d92/72699d5d5fc9e14b3e4f118b2ded0839"
            }}
            style={styles.ImageBackground_1155_9337}
          />
          <View style={styles.View_1155_9338}>
            <Text style={styles.Text_1155_9338}>Upload</Text>
          </View>
        </View>
        <View style={styles.View_1155_9339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e937/6e5b/527907b31d84adbdc5ad89a7e2c3312a"
            }}
            style={styles.ImageBackground_I1155_9339_890_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a3/1116/ed3472be56e8b6b9b378a58919d75278"
            }}
            style={styles.ImageBackground_I1155_9339_858_550}
          />
        </View>
      </View>
      <View style={styles.View_1155_9340}>
        <View style={styles.View_1155_9341}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c37/e409/df49d58d6f4b24e1de89a50ca01ea06b"
            }}
            style={styles.ImageBackground_1155_9342}
          />
          <View style={styles.View_1155_9343}>
            <Text style={styles.Text_1155_9343}>Take</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba27/ca14/2edd0b6f88eb041fabe1fdb21a89a5b8"
          }}
          style={styles.ImageBackground_1155_9344}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1155_9321: {
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
  View_1155_9322: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.079996744791671%"),
    top: hp("0%")
  },
  Text_1155_9322: {
    color: "rgba(51, 167, 125, 1)",
    fontSize: 22.200000762939453,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1155_9323: {
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
  ImageBackground_1155_9324: {
    width: wp("10.240000406901041%"),
    height: hp("5.828779772982571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1155_9325: {
    width: wp("3.4133333841959637%"),
    height: hp("1.748633905838096%"),
    top: hp("2.4771601775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.413330078125%")
  },
  View_1155_9329: {
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
  View_I1155_9329_939_323: {
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
  ImageBackground_I1155_9329_939_324: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1155_9329_939_325: {
    width: wp("78%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.333333333333334%")
  },
  Text_I1155_9329_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1155_9329_938_3903: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("2.732240437158481%")
  },
  View_1155_9330: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("24.18032786885246%")
  },
  Text_1155_9330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1155_9331: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("34.42622950819672%")
  },
  Text_1155_9331: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9332: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.551912568306015%")
  },
  Text_1155_9332: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9333: {
    width: wp("207.73333333333332%"),
    minWidth: wp("207.73333333333332%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9333_572_231: {
    flexGrow: 1,
    width: wp("207.73333333333332%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9333_572_231_285_2268: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(51, 167, 125, 1)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2268_327_954: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2268_572_317: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_285_2268_572_317: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I1155_9333_572_231_285_2268_327_956: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("6.284153005464475%")
  },
  View_I1155_9333_572_231_285_2273: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2273_1004_5367: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2273_1004_5392: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_285_2273_1004_5392: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9333_572_231_285_2273_1168_1064: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.866666666666674%"),
    top: hp("4.098360655737707%")
  },
  View_I1155_9333_572_231_285_2297: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2297_1004_5367: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2297_1004_5392: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666856%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_285_2297_1004_5392: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9333_572_231_285_2297_1168_1064: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.866666666666674%"),
    top: hp("4.098360655737707%")
  },
  View_I1155_9333_572_231_285_2302: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.93333333333334%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2302_1004_5367: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_285_2302_1004_5392: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_285_2302_1004_5392: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9333_572_231_285_2302_1168_1064: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.86666666666666%"),
    top: hp("4.098360655737707%")
  },
  View_I1155_9333_572_231_2333_820: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137.86666666666667%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_2333_820_1004_5367: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_2333_820_1004_5392: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666856%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_2333_820_1004_5392: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9333_572_231_2333_820_1168_1064: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.866666666666674%"),
    top: hp("4.098360655737707%")
  },
  View_I1155_9333_572_231_2333_2861: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.8%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_2333_2861_1004_5367: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9333_572_231_2333_2861_1004_5392: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666856%"),
    top: hp("0%")
  },
  Text_I1155_9333_572_231_2333_2861_1004_5392: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9333_572_231_2333_2861_1168_1064: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.866666666666674%"),
    top: hp("4.098360655737707%")
  },
  View_1155_9334: {
    width: wp("92.80000000000001%"),
    minWidth: wp("92.80000000000001%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("72.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9334_572_297: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(51, 167, 125, 1)",
    overflow: "hidden"
  },
  View_I1155_9334_572_297_4_758: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_297_4_759: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%")
  },
  Text_I1155_9334_572_297_4_759: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I1155_9334_572_297_4_760: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("6.284153005464475%")
  },
  View_I1155_9334_572_298: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9334_572_298_285_2240: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_298_285_2241: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_298_572_369: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0%")
  },
  Text_I1155_9334_572_298_572_369: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1155_9334_572_298_285_2242: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666675%"),
    top: hp("6.010928961748633%")
  },
  Text_I1155_9334_572_298_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9334_572_299: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9334_572_299_285_2240: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_299_285_2241: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_299_572_369: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I1155_9334_572_299_572_369: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1155_9334_572_299_285_2242: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.000000000000007%"),
    top: hp("6.010928961748633%")
  },
  Text_I1155_9334_572_299_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1155_9334_572_300: {
    flexGrow: 1,
    width: wp("22.666666666666664%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9334_572_300_285_2240: {
    flexGrow: 1,
    width: wp("22.666666666666664%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_300_285_2241: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1155_9334_572_300_572_369: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I1155_9334_572_300_572_369: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1155_9334_572_300_285_2242: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2666666666666515%"),
    top: hp("6.010928961748633%")
  },
  Text_I1155_9334_572_300_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1155_9335: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("40.57377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1155_9336: {
    width: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1155_9337: {
    width: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1155_9338: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999999%")
  },
  Text_1155_9338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9339: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666662%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1155_9339_890_43: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_I1155_9339_858_550: {
    flexGrow: 1,
    width: wp("2.933333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("1.0928961748633839%")
  },
  View_1155_9340: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("40.57377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1155_9341: {
    width: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1155_9342: {
    width: wp("41.06666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1155_9343: {
    width: wp("12.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333341%")
  },
  Text_1155_9343: {
    color: "rgba(51, 167, 125, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1155_9344: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
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
