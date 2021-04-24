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
      <View style={styles.View_2167_358}>
        <View style={styles.View_2167_360}>
          <View style={styles.View_2167_361}>
            <Text style={styles.Text_2167_361}>Cardano</Text>
          </View>
          <View style={styles.View_2167_362}>
            <Text style={styles.Text_2167_362}>Sales</Text>
          </View>
        </View>
        <View style={styles.View_2167_363}>
          <View style={styles.View_2167_364}>
            <Text style={styles.Text_2167_364}>$273.00</Text>
          </View>
          <View style={styles.View_2167_365}>
            <Text style={styles.Text_2167_365}>Sales</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_366}
        />
        <View style={styles.View_2732_37105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ce3/9a49/1e8b2668260188a88c3ccbe5f74b7e25"
            }}
            style={styles.ImageBackground_I2732_37105_2180_1}
          />
          <View style={styles.View_I2732_37105_2180_2}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11fc/3fcb/b46925355df03015272ca55c1a9ecc9c"
              }}
              style={styles.ImageBackground_I2732_37105_2180_3}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2167_512} />
      <View style={styles.View_2167_513}>
        <View style={styles.View_2167_514}>
          <View style={styles.View_2167_515}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1531/1dcd/498821213b9ac79fea753b8d3363a54c"
              }}
              style={styles.ImageBackground_I2167_515_1198_350}
            />
          </View>
          <View style={styles.View_2167_516}>
            <Text style={styles.Text_2167_516}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2167_517}>
          <View style={styles.View_2167_518}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb8/82ca/e9ffda7aa524d8b4b41dee95c2bf2fc6"
              }}
              style={styles.ImageBackground_I2167_518_1198_537}
            />
          </View>
          <View style={styles.View_2167_519}>
            <Text style={styles.Text_2167_519}>Trade</Text>
          </View>
        </View>
        <View style={styles.View_2167_520}>
          <View style={styles.View_2167_521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da8c/32e9/2a7a0c704c795e7fa7805f407f2f2a2b"
              }}
              style={styles.ImageBackground_I2167_521_1198_1409}
            />
          </View>
          <View style={styles.View_2167_522}>
            <Text style={styles.Text_2167_522}>Prices</Text>
          </View>
        </View>
        <View style={styles.View_2167_523}>
          <View style={styles.View_2167_524}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
              }}
              style={styles.ImageBackground_I2167_524_1198_1227}
            />
          </View>
          <View style={styles.View_2167_525}>
            <Text style={styles.Text_2167_525}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_55}>
        <View style={styles.View_I2167_55_1147_7817}>
          <View style={styles.View_I2167_55_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2167_72}>
        <View style={styles.View_I2167_72_1147_7797}>
          <View style={styles.View_I2167_72_1147_7797_1147_7781}>
            <View style={styles.View_I2167_72_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2167_72_1147_7797_1147_7783}
            />
            <View style={styles.View_I2167_72_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2167_72_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2167_72_1147_7797_1147_7789}
          />
          <View style={styles.View_I2167_72_1147_7797_1147_7794}>
            <View style={styles.View_I2167_72_1147_7797_1147_7795}>
              <Text style={styles.Text_I2167_72_1147_7797_1147_7795}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2167_74}>
        <Text style={styles.Text_2167_74}>MARGIN</Text>
      </View>
      <View style={styles.View_2167_75}>
        <Text style={styles.Text_2167_75}>Health Score</Text>
      </View>
      <View style={styles.View_2180_48}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab7/6904/08d0d4095836b2dce2ebd20b77ae24e1"
          }}
          style={styles.ImageBackground_I2180_48_1198_713}
        />
      </View>
      <View style={styles.View_2167_76}>
        <Text style={styles.Text_2167_76}>WALLETS</Text>
      </View>
      <View style={styles.View_2167_77}>
        <Text style={styles.Text_2167_77}>$27,928.39</Text>
      </View>
      <View style={styles.View_2167_78}>
        <Text style={styles.Text_2167_78}>$81,283.84</Text>
      </View>
      <View style={styles.View_2167_79}>
        <View style={styles.View_2167_80}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b34/eb72/7b75d7b63662e686c54b3a210715bca2"
            }}
            style={styles.ImageBackground_I2167_80_1198_528}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d867/c0de/493dd53e833d738aeff3a5d4d9636d87"
          }}
          style={styles.ImageBackground_2167_81}
        />
      </View>
      <View style={styles.View_2167_82}>
        <View style={styles.View_2167_83}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431a/9ed6/985a867d1a0567c5034153d043c7f6dc"
            }}
            style={styles.ImageBackground_I2167_83_1198_527}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d867/c0de/493dd53e833d738aeff3a5d4d9636d87"
          }}
          style={styles.ImageBackground_2167_84}
        />
      </View>
      <View style={styles.View_2167_132}>
        <View style={styles.View_I2167_132_541_3473}>
          <Text style={styles.Text_I2167_132_541_3473}>excellent - 99%</Text>
        </View>
      </View>
      <View style={styles.View_2167_290}>
        <Text style={styles.Text_2167_290}>Portfolio</Text>
      </View>
      <View style={styles.View_2167_325}>
        <View style={styles.View_2176_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb54/d96c/0006927bfadee346ad183a697d1768a9"
            }}
            style={styles.ImageBackground_I2176_40_2175_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8060/4c94/ed31b0ba45205bc94d70edfa88693b9c"
            }}
            style={styles.ImageBackground_I2176_40_2175_61}
          />
        </View>
        <View style={styles.View_2167_308}>
          <View style={styles.View_2167_307}>
            <Text style={styles.Text_2167_307}>Bitcoin</Text>
          </View>
          <View style={styles.View_2167_306}>
            <Text style={styles.Text_2167_306}>BTC</Text>
          </View>
        </View>
        <View style={styles.View_2167_309}>
          <View style={styles.View_2167_310}>
            <Text style={styles.Text_2167_310}>$20,273.00</Text>
          </View>
          <View style={styles.View_2167_311}>
            <Text style={styles.Text_2167_311}>.93</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_326}
        />
      </View>
      <View style={styles.View_2167_368}>
        <View style={styles.View_2167_370}>
          <View style={styles.View_2167_371}>
            <Text style={styles.Text_2167_371}>US Dollar</Text>
          </View>
          <View style={styles.View_2167_372}>
            <Text style={styles.Text_2167_372}>USDC</Text>
          </View>
        </View>
        <View style={styles.View_2167_373}>
          <View style={styles.View_2167_374}>
            <Text style={styles.Text_2167_374}>$1,726.00</Text>
          </View>
          <View style={styles.View_2167_375}>
            <Text style={styles.Text_2167_375}>$1,726.00</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e8d/cacd/e6fa66e6d6d9e2047bb99875679a8777"
          }}
          style={styles.ImageBackground_2732_37101}
        />
      </View>
      <View style={styles.View_2167_328}>
        <View style={styles.View_2167_330}>
          <View style={styles.View_2167_331}>
            <Text style={styles.Text_2167_331}>Ethereum</Text>
          </View>
          <View style={styles.View_2167_332}>
            <Text style={styles.Text_2167_332}>ETH</Text>
          </View>
        </View>
        <View style={styles.View_2167_333}>
          <View style={styles.View_2167_334}>
            <Text style={styles.Text_2167_334}>$1,673.00</Text>
          </View>
          <View style={styles.View_2167_335}>
            <Text style={styles.Text_2167_335}>2.873</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_336}
        />
        <View style={styles.View_2732_37092}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4acc/5d66/048339ea20569989554ab387f678b8fa"
            }}
            style={styles.ImageBackground_I2732_37092_2176_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4730/d3e1/c11857c3899bc18a494d3a87bed84120"
            }}
            style={styles.ImageBackground_I2732_37092_2176_57}
          />
        </View>
      </View>
      <View style={styles.View_2167_338}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e87/286c/6586e528bbb66eb4ffe04a74c351d363"
          }}
          style={styles.ImageBackground_2167_339}
        />
        <View style={styles.View_2176_73}>
          <View style={styles.View_2176_74}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5afe/7071/2ab4fca3b1e4023a580f574dec1ebc3e"
              }}
              style={styles.ImageBackground_2176_75}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecaf/06c9/359c66d9e27691d40828548b4f971c85"
            }}
            style={styles.ImageBackground_2176_77}
          />
        </View>
        <View style={styles.View_2167_340}>
          <View style={styles.View_2167_341}>
            <Text style={styles.Text_2167_341}>Pokadot</Text>
          </View>
          <View style={styles.View_2167_342}>
            <Text style={styles.Text_2167_342}>DOT</Text>
          </View>
        </View>
        <View style={styles.View_2167_343}>
          <View style={styles.View_2167_344}>
            <Text style={styles.Text_2167_344}>$573.00</Text>
          </View>
          <View style={styles.View_2167_345}>
            <Text style={styles.Text_2167_345}>100</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_346}
        />
      </View>
      <View style={styles.View_2167_348}>
        <View style={styles.View_2167_350}>
          <View style={styles.View_2167_351}>
            <Text style={styles.Text_2167_351}>Solana</Text>
          </View>
          <View style={styles.View_2167_352}>
            <Text style={styles.Text_2167_352}>SOL</Text>
          </View>
        </View>
        <View style={styles.View_2167_353}>
          <View style={styles.View_2167_354}>
            <Text style={styles.Text_2167_354}>$3,463.00</Text>
          </View>
          <View style={styles.View_2167_355}>
            <Text style={styles.Text_2167_355}>2,500</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4786/a680/3e76fdebc1fda0e5a2f7bc337266df38"
          }}
          style={styles.ImageBackground_2167_356}
        />
      </View>
      <View style={styles.View_2176_64}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c021/6ea6/915dd099bf8088c664ac16e5a2851136"
          }}
          style={styles.ImageBackground_2176_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f89b/091e/15ade09fabb68fa26541082071ad0da6"
          }}
          style={styles.ImageBackground_2176_66}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2167_358: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("97.1311475409836%")
  },
  View_2167_360: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_361: {
    width: wp("19.466666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_361: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_362: {
    width: wp("9.866666666666667%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_362: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_363: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_364: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_364: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_365: {
    width: wp("9.866666666666667%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%")
  },
  Text_2167_365: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_366: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2732_37105: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2732_37105_2180_1: {
    flexGrow: 1,
    width: wp("12.732480875651042%"),
    height: hp("6.522826939984097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03280181884765554%"),
    top: hp("0.017343323087416707%")
  },
  View_I2732_37105_2180_2: {
    flexGrow: 1,
    width: wp("7.384640502929687%"),
    height: hp("3.5309301699445546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.953846232096354%"),
    top: hp("1.5131382342896131%")
  },
  ImageBackground_I2732_37105_2180_3: {
    width: wp("7.384640502929687%"),
    height: hp("3.5309301699445546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2167_512: {
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
  View_2167_513: {
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
  View_2167_514: {
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
  View_2167_515: {
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
  ImageBackground_I2167_515_1198_350: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_516: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2167_516: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2167_517: {
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
  View_2167_518: {
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
  ImageBackground_I2167_518_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_519: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2167_519: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2167_520: {
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
  View_2167_521: {
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
  ImageBackground_I2167_521_1198_1409: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_522: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2167_522: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2167_523: {
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
  View_2167_524: {
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
  ImageBackground_I2167_524_1198_1227: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_525: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2167_525: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2167_55: {
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
  View_I2167_55_1147_7817: {
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
  View_I2167_55_1147_7817_1147_7815: {
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
  View_2167_72: {
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
  View_I2167_72_1147_7797: {
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
  View_I2167_72_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.368030652322404%")
  },
  View_I2167_72_1147_7797_1147_7782: {
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
  ImageBackground_I2167_72_1147_7797_1147_7783: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5008218066939891%")
  },
  View_I2167_72_1147_7797_1147_7784: {
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
  ImageBackground_I2167_72_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2167_72_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2167_72_1147_7797_1147_7794: {
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
  View_I2167_72_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2167_72_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2167_74: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.530054644808743%")
  },
  Text_2167_74: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_75: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.26775956284153%")
  },
  Text_2167_75: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2180_48: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2180_48_1198_713: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_76: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("31.967213114754102%")
  },
  Text_2167_76: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_77: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("31.967213114754102%")
  },
  Text_2167_77: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_78: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("16.530054644808743%")
  },
  Text_2167_78: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_79: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("7.103825136612022%")
  },
  View_2167_80: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("1.0928961748633874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_80_1198_528: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2167_81: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_82: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("7.103825136612022%")
  },
  View_2167_83: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.0928961748633874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2167_83_1198_527: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2167_84: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2167_132: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.46666666666666%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2167_132_541_3473: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2167_132_541_3473: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "uppercase"
  },
  View_2167_290: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%")
  },
  Text_2167_290: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2167_325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("51.229508196721305%")
  },
  View_2176_40: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2176_40_2175_60: {
    flexGrow: 1,
    width: wp("12.7985595703125%"),
    height: hp("6.557409880591221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0006368001302075044%"),
    top: hp("0%")
  },
  ImageBackground_I2176_40_2175_61: {
    flexGrow: 1,
    width: wp("4.1537233988444004%"),
    height: hp("2.8167607354336095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.184614308675129%"),
    top: hp("1.7655502903005598%")
  },
  View_2167_308: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_307: {
    width: wp("15.733333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_307: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_306: {
    width: wp("7.199999999999999%"),
    top: hp("3.278688524590173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_306: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_309: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_310: {
    width: wp("24.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_310: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_311: {
    width: wp("5.333333333333334%"),
    top: hp("3.5519125683060153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%")
  },
  Text_2167_311: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_326: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2167_368: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("39.75409836065574%")
  },
  View_2167_370: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_371: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_371: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_372: {
    width: wp("9.866666666666667%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_372: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_373: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_374: {
    width: wp("21.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_374: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_375: {
    width: wp("16.266666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%")
  },
  Text_2167_375: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_376: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2732_37101: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_2167_328: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("62.704918032786885%")
  },
  View_2167_330: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_331: {
    width: wp("21.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_331: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_332: {
    width: wp("6.4%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_332: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_333: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_334: {
    width: wp("21.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_334: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_335: {
    width: wp("9.333333333333334%"),
    top: hp("3.5519125683060153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%")
  },
  Text_2167_335: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_336: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2732_37092: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2732_37092_2176_56: {
    flexGrow: 1,
    width: wp("12.732480875651042%"),
    height: hp("6.522826939984097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03280181884765554%"),
    top: hp("0.017343323087438023%")
  },
  ImageBackground_I2732_37092_2176_57: {
    flexGrow: 1,
    width: wp("3.6016133626302085%"),
    height: hp("3.130283251486189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.578472900390625%"),
    top: hp("1.7655502903005456%")
  },
  View_2167_338: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("74.18032786885246%")
  },
  ImageBackground_2167_339: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%"),
    top: hp("0.2732240437158424%")
  },
  View_2176_73: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2176_74: {
    width: wp("4.743528238932291%"),
    height: hp("3.163466427495571%"),
    top: hp("1.1153090846994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.961576080322266%")
  },
  ImageBackground_2176_75: {
    width: wp("4.743528238932291%"),
    height: hp("3.163466427495571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2176_77: {
    width: wp("0.7948689778645833%"),
    height: hp("0.4072072076015785%"),
    top: hp("3.907584101775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.023731486002604%")
  },
  View_2167_340: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_341: {
    width: wp("18.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_341: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_342: {
    width: wp("7.466666666666668%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_342: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_343: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_344: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_344: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_345: {
    width: wp("5.866666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%")
  },
  Text_2167_345: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_346: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2167_348: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("85.65573770491804%")
  },
  View_2167_350: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_351: {
    width: wp("15.466666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_351: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_352: {
    width: wp("6.666666666666667%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_352: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2167_353: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2167_354: {
    width: wp("21.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2167_354: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontFamily: "RobotoMono-Regular",
    textAlign: "right",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2167_355: {
    width: wp("9.866666666666667%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  Text_2167_355: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2167_356: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2176_64: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("85.65573770491804%")
  },
  ImageBackground_2176_65: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2176_66: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%")
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
