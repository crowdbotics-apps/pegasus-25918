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
      <View style={styles.View_2167_271}>
        <View style={styles.View_2167_272}>
          <View style={styles.View_2167_273}>
            <View style={styles.View_2167_274}>
              <Text style={styles.Text_2167_274}>Dogecoin</Text>
            </View>
            <View style={styles.View_2167_275}>
              <Text style={styles.Text_2167_275}>.01</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f26/669b/aab99d53ab3b77380e51681d0013d4d4"
            }}
            style={styles.ImageBackground_2167_279}
          />
          <View style={styles.View_2167_276}>
            <View style={styles.View_2167_277}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f35/a26a/2f12f14dcd4700f24aeb7e99c402fdd4"
                }}
                style={styles.ImageBackground_I2167_277_1198_530}
              />
            </View>
            <View style={styles.View_2167_278}>
              <Text style={styles.Text_2167_278}>+2.20%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2163_388} />
      <View style={styles.View_2163_9}>
        <View style={styles.View_I2163_9_1147_7817}>
          <View style={styles.View_I2163_9_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2163_361}>
        <View style={styles.View_2163_349}>
          <View style={styles.View_2163_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/8f16/a97c4dbaca760dccb889dc1557d053c8"
              }}
              style={styles.ImageBackground_I2163_350_1198_350}
            />
          </View>
          <View style={styles.View_2163_351}>
            <Text style={styles.Text_2163_351}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2163_343}>
          <View style={styles.View_2163_344}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb8/82ca/e9ffda7aa524d8b4b41dee95c2bf2fc6"
              }}
              style={styles.ImageBackground_I2163_344_1198_537}
            />
          </View>
          <View style={styles.View_2163_345}>
            <Text style={styles.Text_2163_345}>Trade</Text>
          </View>
        </View>
        <View style={styles.View_2163_337}>
          <View style={styles.View_2163_338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e13c/8465/fd206caa8451d209f78b63d6609fdccb"
              }}
              style={styles.ImageBackground_I2163_338_1198_1409}
            />
          </View>
          <View style={styles.View_2163_339}>
            <Text style={styles.Text_2163_339}>Prices</Text>
          </View>
        </View>
        <View style={styles.View_2163_336}>
          <View style={styles.View_2163_73}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
              }}
              style={styles.ImageBackground_I2163_73_1198_1227}
            />
          </View>
          <View style={styles.View_2163_329}>
            <Text style={styles.Text_2163_329}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2163_29}>
        <View style={styles.View_I2163_29_1147_7797}>
          <View style={styles.View_I2163_29_1147_7797_1147_7781}>
            <View style={styles.View_I2163_29_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2163_29_1147_7797_1147_7783}
            />
            <View style={styles.View_I2163_29_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2163_29_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2163_29_1147_7797_1147_7789}
          />
          <View style={styles.View_I2163_29_1147_7797_1147_7794}>
            <View style={styles.View_I2163_29_1147_7797_1147_7795}>
              <Text style={styles.Text_I2163_29_1147_7797_1147_7795}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2163_322}>
        <Text style={styles.Text_2163_322}>Prices</Text>
      </View>
      <View style={styles.View_2163_625}>
        <Text style={styles.Text_2163_625}>EXPLORE ASSETS</Text>
      </View>
      <View style={styles.View_2163_626}>
        <Text style={styles.Text_2163_626}>FAVORITES</Text>
      </View>
      <View style={styles.View_2163_703}>
        <View style={styles.View_2163_731}>
          <View style={styles.View_2163_729}>
            <View style={styles.View_2163_706}>
              <Text style={styles.Text_2163_706}>Ethereum</Text>
            </View>
            <View style={styles.View_2163_707}>
              <Text style={styles.Text_2163_707}>621.28</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7570/bb98/c619161dd48e5fc34ae4a3e0ec9cc7af"
            }}
            style={styles.ImageBackground_2163_734}
          />
          <View style={styles.View_2163_730}>
            <View style={styles.View_2163_709}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f35/a26a/2f12f14dcd4700f24aeb7e99c402fdd4"
                }}
                style={styles.ImageBackground_I2163_709_1198_530}
              />
            </View>
            <View style={styles.View_2163_708}>
              <Text style={styles.Text_2163_708}>+7.29%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_26}>
        <View style={styles.View_2167_27}>
          <View style={styles.View_2167_28}>
            <Text style={styles.Text_2167_28}>Polkadot</Text>
          </View>
          <View style={styles.View_2167_29}>
            <Text style={styles.Text_2167_29}>5.76</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ebd/8681/9845289bb23417b775f8c963ff8566d7"
          }}
          style={styles.ImageBackground_2167_33}
        />
        <View style={styles.View_2167_30}>
          <View style={styles.View_2167_31}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2dd/e2d7/966d6948a97434bfa754e662c5b828e3"
              }}
              style={styles.ImageBackground_I2167_31_1198_531}
            />
          </View>
          <View style={styles.View_2167_32}>
            <Text style={styles.Text_2167_32}>+2.15%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_40}>
        <View style={styles.View_2167_41}>
          <View style={styles.View_2167_42}>
            <View style={styles.View_2167_43}>
              <Text style={styles.Text_2167_43}>Solana</Text>
            </View>
            <View style={styles.View_2167_44}>
              <Text style={styles.Text_2167_44}>1.89</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c61d/1603/eab8960be50095960b64206fac2b76a3"
            }}
            style={styles.ImageBackground_2167_48}
          />
          <View style={styles.View_2167_45}>
            <View style={styles.View_2167_46}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f35/a26a/2f12f14dcd4700f24aeb7e99c402fdd4"
                }}
                style={styles.ImageBackground_I2167_46_1198_530}
              />
            </View>
            <View style={styles.View_2167_47}>
              <Text style={styles.Text_2167_47}>+16.91%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_258}>
        <View style={styles.View_2167_259}>
          <View style={styles.View_2167_260}>
            <View style={styles.View_2167_261}>
              <Text style={styles.Text_2167_261}>Cardano</Text>
            </View>
            <View style={styles.View_2167_262}>
              <Text style={styles.Text_2167_262}>.17</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2887/78e8/6b630227e9044ed095e94760416d9e18"
            }}
            style={styles.ImageBackground_2167_266}
          />
          <View style={styles.View_2167_263}>
            <View style={styles.View_2167_264}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2dd/e2d7/966d6948a97434bfa754e662c5b828e3"
                }}
                style={styles.ImageBackground_I2167_264_1198_531}
              />
            </View>
            <View style={styles.View_2167_265}>
              <Text style={styles.Text_2167_265}>+4.91%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2163_771}>
        <View style={styles.View_2163_772}>
          <View style={styles.View_2163_773}>
            <View style={styles.View_2163_774}>
              <Text style={styles.Text_2163_774}>Bitcoin</Text>
            </View>
            <View style={styles.View_2163_775}>
              <Text style={styles.Text_2163_775}>26,667.12</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a1b/a366/c00df5ab8180586a008d70cb024921d0"
            }}
            style={styles.ImageBackground_2163_779}
          />
          <View style={styles.View_2163_776}>
            <View style={styles.View_2163_777}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f35/a26a/2f12f14dcd4700f24aeb7e99c402fdd4"
                }}
                style={styles.ImageBackground_I2163_777_1198_530}
              />
            </View>
            <View style={styles.View_2163_778}>
              <Text style={styles.Text_2163_778}>+13.47%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_235}>
        <View style={styles.View_I2167_235_1045_7055}>
          <View style={styles.View_I2167_235_1045_7057}>
            <Text style={styles.Text_I2167_235_1045_7057}>Search Tokens</Text>
          </View>
        </View>
        <View style={styles.View_I2167_235_1045_7058}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc62/5d50/737347732ba37abb0afb958fc02e7999"
            }}
            style={styles.ImageBackground_I2167_235_1045_7059}
          />
        </View>
      </View>
      <View style={styles.View_2167_299}>
        <View style={styles.View_2167_300}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d3/5ac6/09c075c91c59d81a09c0c04b70f67640"
            }}
            style={styles.ImageBackground_I2167_300_1198_2088}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d446/774c/9c1dfa99ad5e48293d186fc54a19fc07"
          }}
          style={styles.ImageBackground_2167_301}
        />
      </View>
      <View style={styles.View_2167_324}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_316}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_318}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_320}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_322}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2167_271: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.58469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_272: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_273: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_274: {
    width: wp("17.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_274: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_275: {
    width: wp("9.6%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_275: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2167_279: {
    width: wp("38.666666666666664%"),
    height: hp("5.601092896174864%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%")
  },
  View_2167_276: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("0.20491803278689247%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_277: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_277_1198_530: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_278: {
    width: wp("16%"),
    top: hp("4.234972677595621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_2167_278: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2163_388: {
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
  View_2163_9: {
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
  View_I2163_9_1147_7817: {
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
  View_I2163_9_1147_7817_1147_7815: {
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
  View_2163_361: {
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
  View_2163_349: {
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
  View_2163_350: {
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
  ImageBackground_I2163_350_1198_350: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_351: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2163_351: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2163_343: {
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
  View_2163_344: {
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
  ImageBackground_I2163_344_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_345: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2163_345: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2163_337: {
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
  View_2163_338: {
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
  ImageBackground_I2163_338_1198_1409: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_339: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2163_339: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2163_336: {
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
  View_2163_73: {
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
  ImageBackground_I2163_73_1198_1227: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_329: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2163_329: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2163_29: {
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
  View_I2163_29_1147_7797: {
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
  View_I2163_29_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2163_29_1147_7797_1147_7782: {
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
  ImageBackground_I2163_29_1147_7797_1147_7783: {
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
  View_I2163_29_1147_7797_1147_7784: {
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
  ImageBackground_I2163_29_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2163_29_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2163_29_1147_7797_1147_7794: {
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
  View_I2163_29_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2163_29_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2163_322: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%")
  },
  Text_2163_322: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2163_625: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.530054644808743%")
  },
  Text_2163_625: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2163_626: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("31.967213114754102%")
  },
  Text_2163_626: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2163_703: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("50.27322404371585%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_731: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_729: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_706: {
    width: wp("17.599999999999998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2163_706: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2163_707: {
    width: wp("24.266666666666666%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2163_707: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2163_734: {
    width: wp("34.13333333333333%"),
    height: hp("4.419331993561625%"),
    top: hp("2.4352693818305937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%")
  },
  View_2163_730: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("0.20491803278687826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_709: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2163_709_1198_530: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_708: {
    width: wp("16%"),
    top: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2163_708: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2167_26: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("62.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_27: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_28: {
    width: wp("16.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_28: {
    color: "rgba(255, 93, 161, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_29: {
    width: wp("16.8%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_29: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2167_33: {
    width: wp("39.46666666666667%"),
    height: hp("2.7300712189387752%"),
    top: hp("3.2797558060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%")
  },
  View_2167_30: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("0.20491803278687826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_31: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_31_1198_531: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_32: {
    width: wp("15.2%"),
    top: hp("4.234972677595643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%")
  },
  Text_2167_32: {
    color: "rgba(255, 93, 161, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2167_40: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_41: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_42: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_43: {
    width: wp("12.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_43: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_44: {
    width: wp("14.933333333333335%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_44: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2167_48: {
    width: wp("41.06666666666667%"),
    height: hp("5.601092896174864%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%")
  },
  View_2167_45: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("0.20491803278687826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_46: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_46_1198_530: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_47: {
    width: wp("17.066666666666666%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%")
  },
  Text_2167_47: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2167_258: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("85.38251366120218%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_259: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_260: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_261: {
    width: wp("16.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_261: {
    color: "rgba(255, 93, 161, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_262: {
    width: wp("9.066666666666666%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_262: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2167_266: {
    width: wp("40%"),
    height: hp("5.601092896174864%"),
    top: hp("1.8442622950819754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66666666666667%")
  },
  View_2167_263: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("0.20491803278689247%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_264: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_264_1198_531: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_265: {
    width: wp("15.466666666666667%"),
    top: hp("4.234972677595621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  Text_2167_265: {
    color: "rgba(255, 93, 161, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2163_771: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("37.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_772: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_773: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_774: {
    width: wp("12.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2163_774: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2163_775: {
    width: wp("35.733333333333334%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2163_775: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2163_779: {
    width: wp("21.6%"),
    height: hp("5.191256830601093%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%")
  },
  View_2163_776: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("0.20491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2163_777: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2163_777_1198_530: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2163_778: {
    width: wp("17.866666666666667%"),
    top: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7999999999999972%")
  },
  Text_2163_778: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_2167_235: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("21.44808743169399%"),
    backgroundColor: "rgba(22, 31, 54, 1)"
  },
  View_I2167_235_1045_7055: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.0928961748633874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2167_235_1045_7057: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147545%")
  },
  Text_I2167_235_1045_7057: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2167_235_1045_7058: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475379%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_235_1045_7059: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2167_299: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("7.650273224043716%")
  },
  View_2167_300: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_300_1198_2088: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2167_301: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_2167_324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.36065573770492%")
  },
  ImageBackground_2167_314: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2167_316: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("12.158469945355186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2167_318: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("24.316939890710387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2167_320: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2167_322: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
