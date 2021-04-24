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
      <View style={styles.View_2171_290} />
      <View style={styles.View_2171_291}>
        <View style={styles.View_2171_292}>
          <View style={styles.View_2171_293}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/8f16/a97c4dbaca760dccb889dc1557d053c8"
              }}
              style={styles.ImageBackground_I2171_293_1198_350}
            />
          </View>
          <View style={styles.View_2171_294}>
            <Text style={styles.Text_2171_294}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2171_295}>
          <View style={styles.View_2171_296}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520c/5849/b3bfa30116f2851a390f277509404e4e"
              }}
              style={styles.ImageBackground_I2171_296_1198_537}
            />
          </View>
          <View style={styles.View_2171_297}>
            <Text style={styles.Text_2171_297}>Trade</Text>
          </View>
        </View>
        <View style={styles.View_2171_298}>
          <View style={styles.View_2171_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da8c/32e9/2a7a0c704c795e7fa7805f407f2f2a2b"
              }}
              style={styles.ImageBackground_I2171_299_1198_1409}
            />
          </View>
          <View style={styles.View_2171_300}>
            <Text style={styles.Text_2171_300}>Prices</Text>
          </View>
        </View>
        <View style={styles.View_2171_301}>
          <View style={styles.View_2171_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
              }}
              style={styles.ImageBackground_I2171_302_1198_1227}
            />
          </View>
          <View style={styles.View_2171_303}>
            <Text style={styles.Text_2171_303}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2171_304}>
        <View style={styles.View_I2171_304_1147_7817}>
          <View style={styles.View_I2171_304_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2171_305}>
        <View style={styles.View_I2171_305_1147_7797}>
          <View style={styles.View_I2171_305_1147_7797_1147_7781}>
            <View style={styles.View_I2171_305_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2171_305_1147_7797_1147_7783}
            />
            <View style={styles.View_I2171_305_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2171_305_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2171_305_1147_7797_1147_7789}
          />
          <View style={styles.View_I2171_305_1147_7797_1147_7794}>
            <View style={styles.View_I2171_305_1147_7797_1147_7795}>
              <Text style={styles.Text_I2171_305_1147_7797_1147_7795}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2171_318}>
        <Text style={styles.Text_2171_318}>Trade</Text>
      </View>
      <View style={styles.View_2175_142}>
        <View style={styles.View_2173_81} />
        <View style={styles.View_2175_169} />
        <View style={styles.View_2732_37082}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eae4/95ad/e3806a7a67c7ade52d208f4cba096a93"
            }}
            style={styles.ImageBackground_I2732_37082_2175_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f0/6093/12bf4bdd204d8659f94973e65899835f"
            }}
            style={styles.ImageBackground_I2732_37082_2175_61}
          />
        </View>
        <View style={styles.View_2173_84}>
          <View style={styles.View_2173_85}>
            <Text style={styles.Text_2173_85}>BTC</Text>
          </View>
          <View style={styles.View_2176_0}>
            <Text style={styles.Text_2176_0}>Bitcoin</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
          }}
          style={styles.ImageBackground_2175_57}
        />
        <View style={styles.View_2175_171} />
        <View style={styles.View_2175_174}>
          <Text style={styles.Text_2175_174}>0.52</Text>
        </View>
      </View>
      <View style={styles.View_2175_177}>
        <View style={styles.View_2175_178} />
        <View style={styles.View_2176_2}>
          <View style={styles.View_2176_3}>
            <Text style={styles.Text_2176_3}>SOL</Text>
          </View>
          <View style={styles.View_2176_4}>
            <Text style={styles.Text_2176_4}>Solana</Text>
          </View>
        </View>
        <View style={styles.View_2175_180} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
          }}
          style={styles.ImageBackground_2175_184}
        />
        <View style={styles.View_2175_185} />
        <View style={styles.View_2175_186}>
          <Text style={styles.Text_2175_186}>7,957.00</Text>
        </View>
        <View style={styles.View_2732_37088}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d78/57ba/0defc2e04b8a2148f0322216a701087b"
            }}
            style={styles.ImageBackground_2732_37089}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f2/0922/f020e819362051f723fd9079bd751a50"
            }}
            style={styles.ImageBackground_2732_37090}
          />
        </View>
      </View>
      <View style={styles.View_2175_175}>
        <Text style={styles.Text_2175_175}>TRADE FROM MY</Text>
      </View>
      <View style={styles.View_2176_19}>
        <Text style={styles.Text_2176_19}>Ledger Nano v2</Text>
      </View>
      <View style={styles.View_2175_176}>
        <Text style={styles.Text_2175_176}>EXCHANGE FOR</Text>
      </View>
      <View style={styles.View_2176_5}>
        <Text style={styles.Text_2176_5}>Fees</Text>
      </View>
      <View style={styles.View_2176_6}>
        <Text style={styles.Text_2176_6}>$1.23</Text>
      </View>
      <View style={styles.View_2176_7}>
        <Text style={styles.Text_2176_7}>Total</Text>
      </View>
      <View style={styles.View_2176_8}>
        <Text style={styles.Text_2176_8}>10,482.48</Text>
      </View>
      <View style={styles.View_2176_15}>
        <Text style={styles.Text_2176_15}>Liquid Buying Power</Text>
      </View>
      <View style={styles.View_2176_16}>
        <Text style={styles.Text_2176_16}>$15,394.39</Text>
      </View>
      <View style={styles.View_2176_17}>
        <Text style={styles.Text_2176_17}>Margin Buying Power</Text>
      </View>
      <View style={styles.View_2176_18}>
        <Text style={styles.Text_2176_18}>$46,183.17</Text>
      </View>
      <View style={styles.View_2176_23}>
        <View style={styles.View_I2176_23_541_3473}>
          <Text style={styles.Text_I2176_23_541_3473}>99%</Text>
        </View>
      </View>
      <View style={styles.View_2176_12}>
        <View style={styles.View_2176_13}>
          <Text style={styles.Text_2176_13}>CONFIRM TRADE</Text>
        </View>
      </View>
      <View style={styles.View_2176_20}>
        <Text style={styles.Text_2176_20}>ACCOUNT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
        }}
        style={styles.ImageBackground_2176_21}
      />
      <View style={styles.View_2180_38}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab7/6904/08d0d4095836b2dce2ebd20b77ae24e1"
          }}
          style={styles.ImageBackground_I2180_38_1198_713}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2171_290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2171_291: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_292: {
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
  View_2171_293: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9333333333333345%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_293_1198_350: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_294: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_294: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_295: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_296: {
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
  ImageBackground_I2171_296_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_297: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_297: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_298: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.33333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_299: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_299_1198_1409: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_300: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_300: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_301: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2171_302: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2171_302_1198_1227: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2171_303: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2171_303: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2171_304: {
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
  View_I2171_304_1147_7817: {
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
  View_I2171_304_1147_7817_1147_7815: {
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
  View_2171_305: {
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
  View_I2171_305_1147_7797: {
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
  View_I2171_305_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2171_305_1147_7797_1147_7782: {
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
  ImageBackground_I2171_305_1147_7797_1147_7783: {
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
  View_I2171_305_1147_7797_1147_7784: {
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
  ImageBackground_I2171_305_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2171_305_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2171_305_1147_7797_1147_7794: {
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
  View_I2171_305_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2171_305_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2171_318: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%")
  },
  Text_2171_318: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2175_142: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.994535519125684%")
  },
  View_2173_81: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12
  },
  View_2175_169: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 0
  },
  View_2732_37082: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2732_37082_2175_60: {
    flexGrow: 1,
    width: wp("8.532373046875%"),
    height: hp("4.371606587060814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000423177083330728%"),
    top: hp("0%")
  },
  ImageBackground_I2732_37082_2175_61: {
    flexGrow: 1,
    width: wp("2.7691490173339846%"),
    height: hp("1.8778407508558261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.789746093749999%"),
    top: hp("1.1769445867486326%")
  },
  View_2173_84: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2173_85: {
    width: wp("7.199999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2173_85: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_0: {
    width: wp("12.266666666666666%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2176_0: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2175_57: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("2.7322404371584668%")
  },
  View_2175_171: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(42, 58, 103, 1)"
  },
  View_2175_174: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("2.7322404371584668%")
  },
  Text_2175_174: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 13,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2175_177: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("64.48087431693989%")
  },
  View_2175_178: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12
  },
  View_2176_2: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("1.7759562841530112%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2176_3: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2176_3: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_4: {
    width: wp("12.533333333333333%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2176_4: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2175_180: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 0
  },
  ImageBackground_2175_184: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("2.7322404371584668%")
  },
  View_2175_185: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(42, 58, 103, 1)"
  },
  View_2175_186: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("2.7322404371584668%")
  },
  Text_2175_186: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 13,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2732_37088: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1857923497267677%")
  },
  ImageBackground_2732_37089: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2732_37090: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%")
  },
  View_2175_175: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("41.80327868852459%")
  },
  Text_2175_175: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_19: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.76502732240437%")
  },
  Text_2176_19: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2175_176: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("59.2896174863388%")
  },
  Text_2175_176: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_5: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("77.04918032786885%")
  },
  Text_2176_5: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_6: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.6%"),
    top: hp("77.04918032786885%")
  },
  Text_2176_6: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_7: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("81.69398907103826%")
  },
  Text_2176_7: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_8: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("81.69398907103826%")
  },
  Text_2176_8: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_15: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("26.912568306010932%")
  },
  Text_2176_15: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_16: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("26.912568306010932%")
  },
  Text_2176_16: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_17: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("31.557377049180328%")
  },
  Text_2176_17: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_18: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("31.557377049180328%")
  },
  Text_2176_18: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2176_23: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2176_23_541_3473: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2176_23_541_3473: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "uppercase"
  },
  View_2176_12: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2176_13: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.866666666666667%"),
    top: hp("1.3661202185792405%")
  },
  Text_2176_13: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2176_20: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("16.530054644808743%")
  },
  Text_2176_20: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2176_21: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2180_38: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("77.59562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2180_38_1198_713: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
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
