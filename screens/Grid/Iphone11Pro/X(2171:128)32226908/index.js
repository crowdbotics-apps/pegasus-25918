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
      <View style={styles.View_2171_139} />
      <View style={styles.View_2171_140}>
        <View style={styles.View_I2171_140_1147_7817}>
          <View style={styles.View_I2171_140_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2171_141}>
        <View style={styles.View_2171_142}>
          <View style={styles.View_2171_143}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/8f16/a97c4dbaca760dccb889dc1557d053c8"
              }}
              style={styles.ImageBackground_I2171_143_1198_350}
            />
          </View>
          <View style={styles.View_2171_144}>
            <Text style={styles.Text_2171_144}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2171_145}>
          <View style={styles.View_2171_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb8/82ca/e9ffda7aa524d8b4b41dee95c2bf2fc6"
              }}
              style={styles.ImageBackground_I2171_146_1198_537}
            />
          </View>
          <View style={styles.View_2171_147}>
            <Text style={styles.Text_2171_147}>Trade</Text>
          </View>
        </View>
        <View style={styles.View_2171_148}>
          <View style={styles.View_2171_149}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e13c/8465/fd206caa8451d209f78b63d6609fdccb"
              }}
              style={styles.ImageBackground_I2171_149_1198_1409}
            />
          </View>
          <View style={styles.View_2171_150}>
            <Text style={styles.Text_2171_150}>Prices</Text>
          </View>
        </View>
        <View style={styles.View_2171_151}>
          <View style={styles.View_2171_152}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
              }}
              style={styles.ImageBackground_I2171_152_1198_1227}
            />
          </View>
          <View style={styles.View_2171_153}>
            <Text style={styles.Text_2171_153}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2171_154}>
        <View style={styles.View_I2171_154_1147_7797}>
          <View style={styles.View_I2171_154_1147_7797_1147_7781}>
            <View style={styles.View_I2171_154_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2171_154_1147_7797_1147_7783}
            />
            <View style={styles.View_I2171_154_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2171_154_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2171_154_1147_7797_1147_7789}
          />
          <View style={styles.View_I2171_154_1147_7797_1147_7794}>
            <View style={styles.View_I2171_154_1147_7797_1147_7795}>
              <Text style={styles.Text_I2171_154_1147_7797_1147_7795}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2171_155}>
        <Text style={styles.Text_2171_155}>Bitcoin</Text>
      </View>
      <View style={styles.View_2171_156}>
        <Text style={styles.Text_2171_156}>23,988.00</Text>
      </View>
      <View style={styles.View_2176_286}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce0/2327/712c8e663c956cdb94d56ecde8ff7460"
          }}
          style={styles.ImageBackground_2176_287}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/404d/71c33909e10a125d0ab2a23f3eedb9e6"
          }}
          style={styles.ImageBackground_2176_301}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed9d/1067/25daa5245b8127b53ff3278799d622be"
          }}
          style={styles.ImageBackground_2176_302}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ca3/f4d1/2ee4777762bb1ad397ca63324363692c"
          }}
          style={styles.ImageBackground_2176_303}
        />
        <View style={styles.View_2176_307}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25e9/76df/e9b75dd3c9a7dd94b2303823d6ad62d6"
            }}
            style={styles.ImageBackground_2176_308}
          />
          <View style={styles.View_2176_309}>
            <View style={styles.View_2176_310}>
              <Text style={styles.Text_2176_310}>Price</Text>
            </View>
            <View style={styles.View_2176_311}>
              <Text style={styles.Text_2176_311}>22,967.13</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2176_312}>
          <View style={styles.View_2176_313}>
            <Text style={styles.Text_2176_313}>5,000</Text>
          </View>
          <View style={styles.View_2176_314}>
            <Text style={styles.Text_2176_314}>4,000</Text>
          </View>
          <View style={styles.View_2176_315}>
            <Text style={styles.Text_2176_315}>3,000</Text>
          </View>
          <View style={styles.View_2176_316}>
            <Text style={styles.Text_2176_316}>2,000</Text>
          </View>
          <View style={styles.View_2176_317}>
            <Text style={styles.Text_2176_317}>1,000</Text>
          </View>
          <View style={styles.View_2176_318}>
            <Text style={styles.Text_2176_318}>0</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2180_61}>
        <Text style={styles.Text_2180_61}>+13.47%</Text>
      </View>
      <View style={styles.View_2182_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f35/a26a/2f12f14dcd4700f24aeb7e99c402fdd4"
          }}
          style={styles.ImageBackground_I2182_1_1198_530}
        />
      </View>
      <View style={styles.View_2180_65}>
        <View style={styles.View_2180_66} />
        <View style={styles.View_2180_68}>
          <Text style={styles.Text_2180_68}>This Week</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
          }}
          style={styles.ImageBackground_2180_71}
        />
      </View>
      <View style={styles.View_2180_87}>
        <View style={styles.View_2180_80}>
          <Text style={styles.Text_2180_80}>SUN</Text>
        </View>
        <View style={styles.View_2180_81}>
          <Text style={styles.Text_2180_81}>MON</Text>
        </View>
        <View style={styles.View_2180_82}>
          <Text style={styles.Text_2180_82}>TUE</Text>
        </View>
        <View style={styles.View_2180_83}>
          <Text style={styles.Text_2180_83}>WED</Text>
        </View>
        <View style={styles.View_2180_84}>
          <Text style={styles.Text_2180_84}>THR</Text>
        </View>
        <View style={styles.View_2180_85}>
          <Text style={styles.Text_2180_85}>FRI</Text>
        </View>
        <View style={styles.View_2180_86}>
          <Text style={styles.Text_2180_86}>SAT</Text>
        </View>
      </View>
      <View style={styles.View_2182_53}>
        <View style={styles.View_2182_5}>
          <View style={styles.View_I2182_5_1004_5090}>
            <View style={styles.View_I2182_5_1004_5092}>
              <Text style={styles.Text_I2182_5_1004_5092}>Stats</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
            }}
            style={styles.ImageBackground_I2182_5_1004_5093}
          />
        </View>
        <View style={styles.View_2182_14}>
          <View style={styles.View_I2182_14_1004_5416}>
            <View style={styles.View_I2182_14_1004_5418}>
              <Text style={styles.Text_I2182_14_1004_5418}>Depth</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_14_1171_10944}
            />
          </View>
        </View>
        <View style={styles.View_2182_19}>
          <View style={styles.View_I2182_19_1004_5416}>
            <View style={styles.View_I2182_19_1004_5418}>
              <Text style={styles.Text_I2182_19_1004_5418}>History</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_19_1171_10944}
            />
          </View>
        </View>
        <View style={styles.View_2182_30}>
          <View style={styles.View_I2182_30_1004_5416}>
            <View style={styles.View_I2182_30_1004_5418}>
              <Text style={styles.Text_I2182_30_1004_5418}>News</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_30_1171_10944}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2182_60}>
        <Text style={styles.Text_2182_60}>Circulating supply</Text>
      </View>
      <View style={styles.View_2182_61}>
        <Text style={styles.Text_2182_61}>18.6 Million</Text>
      </View>
      <View style={styles.View_2182_62}>
        <Text style={styles.Text_2182_62}>All-time high</Text>
      </View>
      <View style={styles.View_2182_63}>
        <Text style={styles.Text_2182_63}>$24,194.82</Text>
      </View>
      <View style={styles.View_2182_52} />
      <View style={styles.View_2182_54}>
        <Text style={styles.Text_2182_54}>Market cap</Text>
      </View>
      <View style={styles.View_2182_55}>
        <Text style={styles.Text_2182_55}>$433.7 Billion</Text>
      </View>
      <View style={styles.View_2182_56}>
        <Text style={styles.Text_2182_56}>Volume</Text>
      </View>
      <View style={styles.View_2182_57}>
        <Text style={styles.Text_2182_57}>$42.9 Billion</Text>
      </View>
      <View style={styles.View_2182_36}>
        <View style={styles.View_2182_37}>
          <Text style={styles.Text_2182_37}>TRADE</Text>
        </View>
      </View>
      <View style={styles.View_2182_38}>
        <View style={styles.View_2182_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/249d/5fc3/8098124e2266d04d64f60c4e267b7277"
            }}
            style={styles.ImageBackground_I2182_48_1198_537}
          />
        </View>
      </View>
      <View style={styles.View_2182_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deed/1c4f/c06efff607504f7a4be7ede0b68fdc3a"
          }}
          style={styles.ImageBackground_2182_42}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2171_139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2171_140: {
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
  View_I2171_140_1147_7817: {
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
  View_I2171_140_1147_7817_1147_7815: {
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
  View_2171_141: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_142: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_143: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.933333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_143_1198_350: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_144: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_144: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_145: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_146: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_146_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_147: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_147: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_148: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_149: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_149_1198_1409: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_150: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_150: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_151: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_152: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_152_1198_1227: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_153: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_153: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_154: {
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
  View_I2171_154_1147_7797: {
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
  View_I2171_154_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2171_154_1147_7797_1147_7782: {
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
  ImageBackground_I2171_154_1147_7797_1147_7783: {
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
  View_I2171_154_1147_7797_1147_7784: {
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
  ImageBackground_I2171_154_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2171_154_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2171_154_1147_7797_1147_7794: {
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
  View_I2171_154_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2171_154_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2171_155: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%")
  },
  Text_2171_155: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2171_156: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.114754098360656%")
  },
  Text_2171_156: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2176_286: {
    width: wp("146.13331705729166%"),
    minWidth: wp("146.13331705729166%"),
    height: hp("35.095073095436305%"),
    minHeight: hp("35.095073095436305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31.466666666666665%"),
    top: hp("18.0327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2176_287: {
    width: wp("222.40000000000003%"),
    height: hp("39.61748633879781%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.39999999999999%")
  },
  ImageBackground_2176_301: {
    width: wp("222.40000000000003%"),
    height: hp("28.415300546448087%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.39999999999999%")
  },
  ImageBackground_2176_302: {
    width: wp("0.0000015636941194922353%"),
    height: hp("18.326408094395706%"),
    top: hp("13.489903517759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.09114583333333%")
  },
  ImageBackground_2176_303: {
    width: wp("6.439167277018229%"),
    height: hp("3.29875372798065%"),
    top: hp("11.733425119535521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.78212890625%")
  },
  View_2176_307: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("7.965254653346994%"),
    minHeight: hp("7.965254653346994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("2.595628415300549%")
  },
  ImageBackground_2176_308: {
    width: wp("3.874407958984375%"),
    height: hp("1.2802219130302388%"),
    top: hp("6.684917178961744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.472884114583337%")
  },
  View_2176_309: {
    width: wp("26.666666666666668%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2176_310: {
    width: wp("9.787723795572917%"),
    top: hp("0.655844433060107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.439485677083333%")
  },
  Text_2176_310: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10.494965553283691,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5857015252113342,
    textTransform: "none"
  },
  View_2176_311: {
    width: wp("18.133333333333333%"),
    top: hp("2.8960681352459012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  Text_2176_311: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11.056836128234863,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5857015252113342,
    textTransform: "none"
  },
  View_2176_312: {
    width: wp("18.91407470703125%"),
    minWidth: wp("18.91407470703125%"),
    height: hp("27.34280153701866%"),
    minHeight: hp("27.34280153701866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.09956668374317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2176_313: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.723697916666666%"),
    top: hp("0%")
  },
  Text_2176_313: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2176_314: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.723697916666666%"),
    top: hp("5.1680434596994544%")
  },
  Text_2176_314: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2176_315: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.990364583333328%"),
    top: hp("10.336086919398905%")
  },
  Text_2176_315: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2176_316: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.990364583333328%"),
    top: hp("15.50413037909836%")
  },
  Text_2176_316: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2176_317: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.523697916666666%"),
    top: hp("20.672173838797814%")
  },
  Text_2176_317: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2176_318: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.323697916666664%"),
    top: hp("25.839950478142075%")
  },
  Text_2176_318: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 7.390451431274414,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16768664121627808,
    textTransform: "none"
  },
  View_2180_61: {
    width: wp("17.866666666666667%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%")
  },
  Text_2180_61: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2182_1: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_1_1198_530: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2180_65: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.666666666666664%"),
    top: hp("7.650273224043716%")
  },
  View_2180_66: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_2180_68: {
    width: wp("18.4%"),
    top: hp("0.8196721311475406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%")
  },
  Text_2180_68: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2180_71: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("2.1857923497267757%")
  },
  View_2180_87: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("53.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2180_80: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333327%"),
    top: hp("0%")
  },
  Text_2180_80: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_81: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.533333333333333%"),
    top: hp("0%")
  },
  Text_2180_81: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_82: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.46666666666666%"),
    top: hp("0%")
  },
  Text_2180_82: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_83: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.26666666666666%"),
    top: hp("0%")
  },
  Text_2180_83: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_84: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.666666666666664%"),
    top: hp("0%")
  },
  Text_2180_84: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_85: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  Text_2180_85: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2180_86: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.46666666666667%"),
    top: hp("0%")
  },
  Text_2180_86: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_53: {
    width: wp("99.73333333333333%"),
    minWidth: wp("99.73333333333333%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_5: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_5_1004_5090: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_5_1004_5092: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0%")
  },
  Text_I2182_5_1004_5092: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I2182_5_1004_5093: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.466666666666665%"),
    top: hp("6.284153005464468%")
  },
  View_2182_14: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.35556640625%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_14_1004_5416: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_14_1004_5418: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0%")
  },
  Text_I2182_14_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_14_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.06666666666667%"),
    top: hp("4.098360655737693%")
  },
  View_2182_19: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.311100260416666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_19_1004_5416: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_19_1004_5418: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0%")
  },
  Text_I2182_19_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_19_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4.098360655737693%")
  },
  View_2182_30: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_30_1004_5416: {
    flexGrow: 1,
    width: wp("15.2%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_30_1004_5418: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I2182_30_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_30_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.533333333333331%"),
    top: hp("4.098360655737693%")
  },
  View_2182_60: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("79.78142076502732%")
  },
  Text_2182_60: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_61: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    top: hp("79.78142076502732%")
  },
  Text_2182_61: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_62: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("84.42622950819673%")
  },
  Text_2182_62: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_63: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("84.42622950819673%")
  },
  Text_2182_63: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.20218579234972%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2182_54: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.49180327868852%")
  },
  Text_2182_54: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_55: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("70.49180327868852%")
  },
  Text_2182_55: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_56: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("75.13661202185791%")
  },
  Text_2182_56: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_57: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("75.13661202185791%")
  },
  Text_2182_57: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2182_36: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_37: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("1.3661202185792405%")
  },
  Text_2182_37: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2182_38: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_48: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_48_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_40: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(242, 242, 148, 1)"
  },
  ImageBackground_2182_42: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
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
