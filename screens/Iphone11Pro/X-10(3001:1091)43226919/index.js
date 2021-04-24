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
      <View style={styles.View_3001_1102}>
        <View style={styles.View_I3001_1102_2973_290}>
          <View style={styles.View_I3001_1102_2973_291} />
          <View style={styles.View_I3001_1102_2973_292}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa9b/9161/a9bdeb0f928e6af3bbee393be82a68ba"
              }}
              style={styles.ImageBackground_I3001_1102_2973_293}
            />
            <View style={styles.View_I3001_1102_2973_294}>
              <Text style={styles.Text_I3001_1102_2973_294}>Search</Text>
            </View>
          </View>
          <View style={styles.View_I3001_1102_2973_295}>
            <View style={styles.View_I3001_1102_2973_295_2780_33589} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d5/c8f3/5a73c83f0c98827d5de1f1a5cf41b20f"
              }}
              style={styles.ImageBackground_I3001_1102_2973_295_2780_33590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc3e/a4d7/f0731cdf7f29b39ab05ed69439a3c23e"
              }}
              style={styles.ImageBackground_I3001_1102_2973_295_2780_33591}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f921/5b26/992b01d91d10858a8aa4a1dc910adf10"
              }}
              style={styles.ImageBackground_I3001_1102_2973_295_2780_33592}
            />
          </View>
        </View>
        <View style={styles.View_I3001_1102_2970_670}>
          <Text style={styles.Text_I3001_1102_2970_670}>Top Podcasts</Text>
        </View>
        <View style={styles.View_I3001_1102_2970_676}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8fb/fcfd/a251e29a86900a1935153e834101d75f"
            }}
            style={styles.ImageBackground_I3001_1102_2970_677}
          />
          <View style={styles.View_I3001_1102_2970_678}>
            <Text style={styles.Text_I3001_1102_2970_678}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_1092}>
        <View style={styles.View_I3001_1092_2784_33814}>
          <View style={styles.View_I3001_1092_2784_33814_2784_33798}>
            <View style={styles.View_I3001_1092_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3001_1092_2784_33814_2784_33800}
            />
            <View style={styles.View_I3001_1092_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3001_1092_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3001_1092_2784_33814_2784_33806}
          />
          <View style={styles.View_I3001_1092_2784_33814_2784_33811}>
            <View style={styles.View_I3001_1092_2784_33814_2784_33812}>
              <Text style={styles.Text_I3001_1092_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30846}>
        <View style={styles.View_3002_30908}>
          <View style={styles.View_3002_30847} />
          <View style={styles.View_3002_30909}>
            <View style={styles.View_3002_30910}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aba/ec4d/8895e6050857bc94404b1821c4ecd2b2"
                }}
                style={styles.ImageBackground_I3002_30910_2209_12123}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30848}>
          <View style={styles.View_3002_30849}>
            <Text style={styles.Text_3002_30849}>Main Title</Text>
          </View>
          <View style={styles.View_3002_30850}>
            <Text style={styles.Text_3002_30850}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3002_30851}>
          <View style={styles.View_I3002_30851_2151_16009}>
            <Text style={styles.Text_I3002_30851_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30852}>
        <View style={styles.View_3002_30917}>
          <View style={styles.View_3002_30853} />
          <View style={styles.View_3002_30918}>
            <View style={styles.View_3002_30919}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5df/bcf3/491b2368879e3764a53188d450057a09"
                }}
                style={styles.ImageBackground_I3002_30919_2209_12108}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30854}>
          <View style={styles.View_3002_30855}>
            <Text style={styles.Text_3002_30855}>Main Title</Text>
          </View>
          <View style={styles.View_3002_30856}>
            <Text style={styles.Text_3002_30856}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3002_30857}>
          <View style={styles.View_I3002_30857_2151_16009}>
            <Text style={styles.Text_I3002_30857_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30858}>
        <View style={styles.View_3002_30926}>
          <View style={styles.View_3002_30859} />
          <View style={styles.View_3002_30927}>
            <View style={styles.View_3002_30928}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54d/7299/62fb21d2b0c704e4c871d986c3c15afb"
                }}
                style={styles.ImageBackground_I3002_30928_2209_12133}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30860}>
          <View style={styles.View_3002_30861}>
            <Text style={styles.Text_3002_30861}>Main Title</Text>
          </View>
          <View style={styles.View_3002_30862}>
            <Text style={styles.Text_3002_30862}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3002_30863}>
          <View style={styles.View_I3002_30863_2151_16009}>
            <Text style={styles.Text_I3002_30863_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_1145}>
        <View style={styles.View_I3001_1145_2973_1730}>
          <View style={styles.View_I3001_1145_2973_1731}>
            <View style={styles.View_I3001_1145_2973_1732}>
              <View style={styles.View_I3001_1145_2973_1732_2998_2033} />
              <View style={styles.View_I3001_1145_2973_1732_2998_2034} />
              <View style={styles.View_I3001_1145_2973_1732_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd6/870d/86e05051fce09f82fe66306f6139a901"
                }}
                style={styles.ImageBackground_I3001_1145_2973_1732_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/e04e/5f6dc2d02abb16b97efcc2641e166e2c"
                }}
                style={styles.ImageBackground_I3001_1145_2973_1732_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f8/efa3/25f6422b77562cb5cfaafcbb7914c9e3"
                }}
                style={styles.ImageBackground_I3001_1145_2973_1732_2998_2038}
              />
            </View>
            <View style={styles.View_I3001_1145_2973_1733}>
              <Text style={styles.Text_I3001_1145_2973_1733}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3001_1145_2973_1734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ce/f667/e5ea761555472e58addee1de75928225"
              }}
              style={styles.ImageBackground_I3001_1145_2973_1735}
            />
            <View style={styles.View_I3001_1145_2973_1736}>
              <Text style={styles.Text_I3001_1145_2973_1736}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3001_1145_2973_1737}>
            <View style={styles.View_I3001_1145_2973_1738}>
              <View style={styles.View_I3001_1145_2973_1738_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb93/c545/64f94977550beac44f1a5a89d8f34b0e"
                }}
                style={styles.ImageBackground_I3001_1145_2973_1738_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d4/e000/3e3a470e2b921be42a164efcca339533"
                }}
                style={styles.ImageBackground_I3001_1145_2973_1738_2998_2048}
              />
            </View>
            <View style={styles.View_I3001_1145_2973_1739}>
              <Text style={styles.Text_I3001_1145_2973_1739}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3001_1145_2973_1753}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/b6f6/36b4dd127e5358d8e50c15b0c6a996ac"
              }}
              style={styles.ImageBackground_I3001_1145_2973_1754}
            />
            <View style={styles.View_I3001_1145_2973_1755}>
              <Text style={styles.Text_I3001_1145_2973_1755}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3001_1145_2973_1740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bda/5445/ee940766685df2247fb14717c92e4f48"
              }}
              style={styles.ImageBackground_I3001_1145_2973_1741}
            />
            <View style={styles.View_I3001_1145_2973_1742}>
              <Text style={styles.Text_I3001_1145_2973_1742}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_1146}>
        <View style={styles.View_I3001_1146_2784_33819}>
          <View style={styles.View_I3001_1146_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_3002_30812}>
        <View style={styles.View_3002_30885}>
          <View style={styles.View_3002_30813} />
          <View style={styles.View_3002_30888}>
            <View style={styles.View_3002_30886}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8ab/0e30/98798364b3f968cc02e47009112f0964"
                }}
                style={styles.ImageBackground_I3002_30886_2327_25556}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30814}>
          <View style={styles.View_3002_30815}>
            <Text style={styles.Text_3002_30815}>Title</Text>
          </View>
          <View style={styles.View_3002_30816}>
            <Text style={styles.Text_3002_30816}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30797}>
        <View style={styles.View_3002_30889}>
          <View style={styles.View_3002_30798} />
          <View style={styles.View_3002_30890}>
            <View style={styles.View_3002_30891}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7266/6165/681c18071bf97e32998598ec715e6f65"
                }}
                style={styles.ImageBackground_I3002_30891_2209_12119}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30799}>
          <View style={styles.View_3002_30800}>
            <Text style={styles.Text_3002_30800}>Title</Text>
          </View>
          <View style={styles.View_3002_30801}>
            <Text style={styles.Text_3002_30801}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30897}>
        <View style={styles.View_3002_30898}>
          <View style={styles.View_3002_30899} />
          <View style={styles.View_3002_30900}>
            <View style={styles.View_3002_30901}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d55/841c/eb45d4de2c8b47a6cccf048330fb9444"
                }}
                style={styles.ImageBackground_I3002_30901_2209_12117}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_30902}>
          <View style={styles.View_3002_30903}>
            <Text style={styles.Text_3002_30903}>Title</Text>
          </View>
          <View style={styles.View_3002_30904}>
            <Text style={styles.Text_3002_30904}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30881}>
        <View style={styles.View_3002_30882}>
          <Text style={styles.Text_3002_30882}>Suggested</Text>
        </View>
        <View style={styles.View_3002_30883}>
          <Text style={styles.Text_3002_30883}>See All</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3001_1102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I3001_1102_2973_290: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("23.08743169398907%")
  },
  View_I3001_1102_2973_291: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I3001_1102_2973_292: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.8196721311475379%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_1102_2973_293: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.819672131147545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3001_1102_2973_294: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0%")
  },
  Text_I3001_1102_2973_294: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I3001_1102_2973_295: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_1102_2973_295_2780_33589: {
    flexGrow: 1,
    width: wp("1.4222222646077474%"),
    height: hp("1.275045493912827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4222005208333286%"),
    top: hp("0.09098574112021751%"),
    borderColor: "rgba(217, 219, 233, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  ImageBackground_I3001_1102_2973_295_2780_33590: {
    flexGrow: 1,
    width: wp("2.8444442749023438%"),
    height: hp("0.8652094934807449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328125000114%"),
    top: hp("0.8652984118852451%")
  },
  ImageBackground_I3001_1102_2973_295_2780_33591: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.3642986380988783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.7303300034153004%")
  },
  ImageBackground_I3001_1102_2973_295_2780_33592: {
    flexGrow: 1,
    width: wp("1.4222222646077474%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4222005208333286%"),
    top: hp("2.0948066086065573%")
  },
  View_I3001_1102_2970_670: {
    flexGrow: 1,
    width: wp("61.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_I3001_1102_2970_670: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_I3001_1102_2970_676: {
    flexGrow: 1,
    width: wp("20.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_1102_2970_677: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3001_1102_2970_678: {
    width: wp("11.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3001_1102_2970_678: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_1092: {
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
  View_I3001_1092_2784_33814: {
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
  View_I3001_1092_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3001_1092_2784_33814_2784_33799: {
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
  ImageBackground_I3001_1092_2784_33814_2784_33800: {
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
  View_I3001_1092_2784_33814_2784_33801: {
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
  ImageBackground_I3001_1092_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3001_1092_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3001_1092_2784_33814_2784_33811: {
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
  View_I3001_1092_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3001_1092_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3002_30846: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30908: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30847: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3002_30909: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30910: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30910_2209_12123: {
    flexGrow: 1,
    width: wp("40.416666666666664%"),
    height: hp("31.057889344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.445833333333333%"),
    top: hp("-5.0210254439890605%"),
    resizeMode: "cover"
  },
  View_3002_30848: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30849: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30849: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30850: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3002_30850: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_30851: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3002_30851_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3002_30851_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30852: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30917: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30853: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3002_30918: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30919: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30919_2209_12108: {
    flexGrow: 1,
    width: wp("53.95625%"),
    height: hp("18.42768101092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17.278125%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3002_30854: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30855: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30855: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30856: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3002_30856: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_30857: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3002_30857_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%"),
    top: hp("2.185792349726782%")
  },
  Text_I3002_30857_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30858: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30926: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30859: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3002_30927: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30928: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30928_2209_12133: {
    flexGrow: 1,
    width: wp("41.528124999999996%"),
    height: hp("31.91198130122951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.4265625%"),
    top: hp("-7.76447233606558%"),
    resizeMode: "cover"
  },
  View_3002_30860: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.956284153005484%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30861: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30861: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30862: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3002_30862: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_30863: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3002_30863_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%"),
    top: hp("2.185792349726782%")
  },
  Text_I3002_30863_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3001_1145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_I3001_1145_2973_1730: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_1145_2973_1731: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_1145_2973_1732: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_1145_2973_1732_2998_2033: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24446614583333215%"),
    top: hp("1.5027322404371546%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3001_1145_2973_1732_2998_2034: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261382598043139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555338541666654%"),
    top: hp("2.254098360655732%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3001_1145_2973_1732_2998_2035: {
    flexGrow: 1,
    width: wp("1.2222218831380207%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.399999999999997%"),
    top: hp("2.0035540471311606%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I3001_1145_2973_1732_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3001_1145_2973_1732_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3001_1145_2973_1732_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777994791666657%"),
    top: hp("0.6262273736338813%")
  },
  View_I3001_1145_2973_1733: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_1145_2973_1733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_1145_2973_1734: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_1145_2973_1735: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.600000000000005%")
  },
  View_I3001_1145_2973_1736: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_1145_2973_1736: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_1145_2973_1737: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_1145_2973_1738: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3001_1145_2973_1738_2998_2046: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2444661458333286%"),
    top: hp("1.2521879269125833%"),
    borderColor: "rgba(193, 156, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3001_1145_2973_1738_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222005208333329%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3001_1145_2973_1738_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.95553385416666%"),
    top: hp("0.2505443135245855%")
  },
  View_I3001_1145_2973_1739: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_1145_2973_1739: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_1145_2973_1753: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_1145_2973_1754: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_I3001_1145_2973_1755: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_1145_2973_1755: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3001_1145_2973_1740: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_1145_2973_1741: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3001_1145_2973_1742: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3001_1145_2973_1742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3001_1146: {
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
  View_I3001_1146_2784_33819: {
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
  View_I3001_1146_2784_33819_2784_33817: {
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
  View_3002_30812: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("37.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30885: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30813: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3002_30888: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30886: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30886_2327_25556: {
    flexGrow: 1,
    width: wp("108.15729166666668%"),
    height: hp("83.03983094262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39.43333333333334%"),
    top: hp("-12.043203551912569%"),
    resizeMode: "cover"
  },
  View_3002_30814: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30815: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30815: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30816: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%")
  },
  Text_3002_30816: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30797: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("37.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30889: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30798: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3002_30890: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30891: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("25.273224043715846%"),
    minHeight: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30891_2209_12119: {
    flexGrow: 1,
    width: wp("52.03124999999999%"),
    height: hp("39.98303022540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.6015625%"),
    top: hp("-1.431491205601084%"),
    resizeMode: "cover"
  },
  View_3002_30799: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30800: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30800: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30801: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%")
  },
  Text_3002_30801: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30897: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.13333333333333%"),
    top: hp("37.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30898: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30899: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3002_30900: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30901: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("25.273224043715846%"),
    minHeight: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3002_30901_2209_12117: {
    flexGrow: 1,
    width: wp("140.04505208333333%"),
    height: hp("96.15852897935878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.98177083333333%"),
    top: hp("-16.091935621584696%"),
    resizeMode: "cover"
  },
  View_3002_30902: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30903: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30903: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30904: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%")
  },
  Text_3002_30904: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_30881: {
    width: wp("87.06666666666666%"),
    minWidth: wp("87.06666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_30882: {
    width: wp("72.13333333333334%"),
    minWidth: wp("72.13333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_30882: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3002_30883: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.13333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_3002_30883: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
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
