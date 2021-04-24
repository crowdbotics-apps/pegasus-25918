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
      <View style={styles.View_3002_31080}>
        <View style={styles.View_3002_31059} />
        <View style={styles.View_3002_31081}>
          <View style={styles.View_3002_31082}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd0/1c1a/60e25fc517c3703e9f3312a5fbe1cadd"
              }}
              style={styles.ImageBackground_I3002_31082_2358_24622}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3002_31085} />
      <View style={styles.View_3002_30965}>
        <View style={styles.View_I3002_30965_2784_33798}>
          <View style={styles.View_I3002_30965_2784_33799} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I3002_30965_2784_33800}
          />
          <View style={styles.View_I3002_30965_2784_33801} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_I3002_30965_2784_33802}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I3002_30965_2784_33806}
        />
        <View style={styles.View_I3002_30965_2784_33811}>
          <View style={styles.View_I3002_30965_2784_33812}>
            <Text style={styles.Text_I3002_30965_2784_33812}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30966}>
        <View style={styles.View_3002_30968}>
          <View style={styles.View_3002_30969} />
        </View>
      </View>
      <View style={styles.View_3002_30974}>
        <View style={styles.View_3002_30976}>
          <View style={styles.View_3002_30977} />
        </View>
      </View>
      <View style={styles.View_3002_30978}>
        <View style={styles.View_3002_30980}>
          <View style={styles.View_3002_30981} />
        </View>
      </View>
      <View style={styles.View_3004_215}>
        <View style={styles.View_3004_216}>
          <View style={styles.View_3004_217} />
          <View style={styles.View_3004_218}>
            <View style={styles.View_3004_219}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7687/4501/961e582f4ff6acdd85acc9721415ade8"
                }}
                style={styles.ImageBackground_I3004_219_2358_24624}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3004_220}>
          <View style={styles.View_3004_221}>
            <Text style={styles.Text_3004_221}>DineSoft</Text>
          </View>
          <View style={styles.View_3004_222}>
            <Text style={styles.Text_3004_222}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_223}>
        <View style={styles.View_3004_224}>
          <View style={styles.View_3004_225} />
          <View style={styles.View_3004_226}>
            <View style={styles.View_3004_227}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/228f/5630/f991af830dff0ddfa0a97e67eb45a3ad"
                }}
                style={styles.ImageBackground_I3004_227_2358_24611}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3004_228}>
          <View style={styles.View_3004_229}>
            <Text style={styles.Text_3004_229}>Space Title</Text>
          </View>
          <View style={styles.View_3004_230}>
            <Text style={styles.Text_3004_230}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30982}>
        <View style={styles.View_I3002_30982_2973_4520}>
          <View style={styles.View_I3002_30982_2973_4521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d497/9693/26830d60bf0e0225ed03d73fa225bc5e"
              }}
              style={styles.ImageBackground_I3002_30982_2973_4522}
            />
            <View style={styles.View_I3002_30982_2973_4523}>
              <Text style={styles.Text_I3002_30982_2973_4523}>Explore</Text>
            </View>
          </View>
          <View style={styles.View_I3002_30982_2973_4524}>
            <View style={styles.View_I3002_30982_2973_4525}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c17/629d/950688fe69f20bd0d03d8e7ee92e4191"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33963}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b94/b74b/47596fd7665566d5a8032dc39ea3d55d"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/121c/235a/776e9f2c21314882d755ca6db350fbad"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/121c/235a/776e9f2c21314882d755ca6db350fbad"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/121c/235a/776e9f2c21314882d755ca6db350fbad"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33967}
              />
              <View style={styles.View_I3002_30982_2973_4525_2780_33968} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/3ddf/6d2b1c340dcfff291496fab8d4325e3d"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33969}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33970}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33971}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33972}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33973}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33974}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b17/a624/b63b214f86617fffc94f588bc025d6fd"
                }}
                style={styles.ImageBackground_I3002_30982_2973_4525_2780_33975}
              />
            </View>
            <View style={styles.View_I3002_30982_2973_4526}>
              <Text style={styles.Text_I3002_30982_2973_4526}>Spaces</Text>
            </View>
          </View>
          <View style={styles.View_I3002_30982_2973_4527}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7df/160a/90fe759cdd41a23b761b8037e4883f0b"
              }}
              style={styles.ImageBackground_I3002_30982_2973_4528}
            />
            <View style={styles.View_I3002_30982_2973_4529}>
              <Text style={styles.Text_I3002_30982_2973_4529}>Inbox</Text>
            </View>
          </View>
          <View style={styles.View_I3002_30982_2973_4530}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b2e/1c32/8b646af7802291117ebf9217f160ce0d"
              }}
              style={styles.ImageBackground_I3002_30982_2973_4531}
            />
            <View style={styles.View_I3002_30982_2973_4532}>
              <Text style={styles.Text_I3002_30982_2973_4532}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_0}>
        <View style={styles.View_I3004_0_3002_31191} />
        <View style={styles.View_I3004_0_3002_31192}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b41/5723/a0c76089d18094ac65fa5f05b44b2dec"
            }}
            style={styles.ImageBackground_I3004_0_3002_31193}
          />
          <View style={styles.View_I3004_0_3002_31194}>
            <Text style={styles.Text_I3004_0_3002_31194}>
              Where are we going?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_31060}>
        <View style={styles.View_3004_103}>
          <View style={styles.View_3002_31061} />
          <View style={styles.View_3004_104}>
            <View style={styles.View_3004_105}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a33/b59d/58ceeeec544f1dad928671cb16799897"
                }}
                style={styles.ImageBackground_I3004_105_2358_24607}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3002_31062}>
          <View style={styles.View_3002_31063}>
            <Text style={styles.Text_3002_31063}>Work &amp; Go</Text>
          </View>
          <View style={styles.View_3002_31064}>
            <Text style={styles.Text_3002_31064}>Downtown LA</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_30983}>
        <View style={styles.View_I3002_30983_2784_33817} />
      </View>
      <View style={styles.View_3004_107}>
        <View style={styles.View_3004_108}>
          <View style={styles.View_3004_109} />
          <View style={styles.View_3004_110}>
            <View style={styles.View_3004_111}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7687/4501/961e582f4ff6acdd85acc9721415ade8"
                }}
                style={styles.ImageBackground_I3004_111_2358_24624}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3004_112}>
          <View style={styles.View_3004_113}>
            <Text style={styles.Text_3004_113}>Fast Space</Text>
          </View>
          <View style={styles.View_3004_114}>
            <Text style={styles.Text_3004_114}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_172}>
        <View style={styles.View_3004_173}>
          <View style={styles.View_3004_174} />
          <View style={styles.View_3004_175}>
            <View style={styles.View_3004_176}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/d037/d5ea64ff1ac2d06a5aab9f61be20ce1d"
                }}
                style={styles.ImageBackground_I3004_176_2358_24620}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3004_177}>
          <View style={styles.View_3004_178}>
            <Text style={styles.Text_3004_178}>Air Title</Text>
          </View>
          <View style={styles.View_3004_179}>
            <Text style={styles.Text_3004_179}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_180}>
        <View style={styles.View_3004_181}>
          <View style={styles.View_3004_182} />
          <View style={styles.View_3004_183}>
            <View style={styles.View_3004_184}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/228f/5630/f991af830dff0ddfa0a97e67eb45a3ad"
                }}
                style={styles.ImageBackground_I3004_184_2358_24611}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3004_185}>
          <View style={styles.View_3004_186}>
            <Text style={styles.Text_3004_186}>Bud Title</Text>
          </View>
          <View style={styles.View_3004_187}>
            <Text style={styles.Text_3004_187}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3002_31086}>
        <Text style={styles.Text_3002_31086}>
          Locate your next remote workplace.
        </Text>
      </View>
      <View style={styles.View_3002_31089}>
        <View style={styles.View_I3002_31089_2151_15007}>
          <Text style={styles.Text_I3002_31089_2151_15007}>Explore Stays</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1200/4e46/395e8f250c775184a0879da2b58a0ac6"
          }}
          style={styles.ImageBackground_I3002_31089_2151_15008}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3002_31080: {
    width: wp("125.86666666666666%"),
    minWidth: wp("125.86666666666666%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.533333333333333%"),
    top: hp("-0.1366120218579235%")
  },
  View_3002_31059: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63.387978142076506%"),
    minHeight: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3002_31081: {
    width: wp("125.86666666666666%"),
    minWidth: wp("125.86666666666666%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_31082: {
    width: wp("125.86666666666666%"),
    minWidth: wp("125.86666666666666%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3002_31082_2358_24622: {
    flexGrow: 1,
    width: wp("143.38595377604167%"),
    height: hp("97.94122247748037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0205403645833329%"),
    top: hp("-14.116130891393443%"),
    resizeMode: "cover"
  },
  View_3002_31085: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579235%")
  },
  View_3002_30965: {
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
  View_I3002_30965_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3002_30965_2784_33799: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I3002_30965_2784_33800: {
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
  View_I3002_30965_2784_33801: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I3002_30965_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3002_30965_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3002_30965_2784_33811: {
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
  View_I3002_30965_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3002_30965_2784_33812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3002_30966: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133268229166667%"),
    top: hp("81.28415300546447%")
  },
  View_3002_30968: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30969: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3002_30974: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.99993489583333%"),
    top: hp("81.9672131147541%")
  },
  View_3002_30976: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30977: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3002_30978: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.2666015625%"),
    top: hp("81.9672131147541%")
  },
  View_3002_30980: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3002_30981: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3004_215: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_216: {
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
  View_3004_217: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_218: {
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
  View_3004_219: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_219_2358_24624: {
    flexGrow: 1,
    width: wp("42.73951009114583%"),
    height: hp("21.35098149867657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.921712239583333%"),
    top: hp("-0.1990479849726654%"),
    resizeMode: "cover"
  },
  View_3004_220: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_221: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_221: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_222: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3004_222: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_223: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_224: {
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
  View_3004_225: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_226: {
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
  View_3004_227: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_227_2358_24611: {
    flexGrow: 1,
    width: wp("58.77152913411459%"),
    height: hp("29.510412580979978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.368684895833326%"),
    top: hp("-7.192676314890704%"),
    resizeMode: "cover"
  },
  View_3004_228: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_229: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_229: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_230: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3004_230: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_30982: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I3002_30982_2973_4520: {
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
  View_I3002_30982_2973_4521: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3002_30982_2973_4522: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_I3002_30982_2973_4523: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3002_30982_2973_4523: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3002_30982_2973_4524: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.311116536458336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3002_30982_2973_4525: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3002_30982_2973_4525_2780_33963: {
    flexGrow: 1,
    width: wp("3.422222137451172%"),
    height: hp("2.755009541746046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24444986979166572%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33964: {
    flexGrow: 1,
    width: wp("0.977777608235677%"),
    height: hp("0.5009103993900487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666686%"),
    top: hp("2.379237107240442%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33965: {
    flexGrow: 1,
    width: wp("0.9777770996093751%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644449869791664%"),
    top: hp("1.7532765539617685%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33966: {
    flexGrow: 1,
    width: wp("0.9777770996093751%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644449869791664%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33967: {
    flexGrow: 1,
    width: wp("0.9777770996093751%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644449869791664%"),
    top: hp("2.254098360655732%")
  },
  View_I3002_30982_2973_4525_2780_33968: {
    flexGrow: 1,
    width: wp("1.955555216471354%"),
    height: hp("2.2540983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6666666666666643%"),
    top: hp("0.6262273736338813%"),
    borderColor: "rgba(110, 113, 145, 1)",
    borderWidth: 2
  },
  ImageBackground_I3002_30982_2973_4525_2780_33969: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644449869791664%"),
    top: hp("0%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33970: {
    flexGrow: 1,
    width: wp("0.7333332697550455%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.977783203125%"),
    top: hp("1.8784153005464503%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33971: {
    flexGrow: 1,
    width: wp("0.7333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.200000000000003%"),
    top: hp("1.8784153005464503%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33972: {
    flexGrow: 1,
    width: wp("0.7333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.200000000000003%"),
    top: hp("0.8765048668032875%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33973: {
    flexGrow: 1,
    width: wp("0.7333332697550455%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.977783203125%"),
    top: hp("0.8765048668032875%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33974: {
    flexGrow: 1,
    width: wp("0.7333332697550455%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.977783203125%"),
    top: hp("1.3775934938524586%")
  },
  ImageBackground_I3002_30982_2973_4525_2780_33975: {
    flexGrow: 1,
    width: wp("0.7333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.200000000000003%"),
    top: hp("1.3775934938524586%")
  },
  View_I3002_30982_2973_4526: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3002_30982_2973_4526: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3002_30982_2973_4527: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.88889973958334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3002_30982_2973_4528: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I3002_30982_2973_4529: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3002_30982_2973_4529: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3002_30982_2973_4530: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3002_30982_2973_4531: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_I3002_30982_2973_4532: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3002_30982_2973_4532: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_0: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_0_3002_31191: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I3004_0_3002_31192: {
    flexGrow: 1,
    width: wp("57.86666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_I3004_0_3002_31193: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3004_0_3002_31194: {
    width: wp("51.46666666666667%"),
    minWidth: wp("51.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0%")
  },
  Text_I3004_0_3002_31194: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_31060: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_103: {
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
  View_3002_31061: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_104: {
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
  View_3004_105: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_105_2358_24607: {
    flexGrow: 1,
    width: wp("33.271183268229166%"),
    height: hp("33.433762013586495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1316731770833335%"),
    top: hp("-1.8762807377049242%"),
    resizeMode: "cover"
  },
  View_3002_31062: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3002_31063: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3002_31063: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3002_31064: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3002_31064: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_30983: {
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
  View_I3002_30983_2784_33817: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_3004_107: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_108: {
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
  View_3004_109: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_110: {
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
  View_3004_111: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_111_2358_24624: {
    flexGrow: 1,
    width: wp("42.73951009114583%"),
    height: hp("21.35098149867657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.921712239583333%"),
    top: hp("-0.1990479849726654%"),
    resizeMode: "cover"
  },
  View_3004_112: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_113: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_113: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_114: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_114: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_172: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_173: {
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
  View_3004_174: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_175: {
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
  View_3004_176: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_176_2358_24620: {
    flexGrow: 1,
    width: wp("30.17794392903646%"),
    height: hp("34.11608211329726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5843424479166686%"),
    top: hp("-0.2558807206284186%"),
    resizeMode: "cover"
  },
  View_3004_177: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_178: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_178: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_179: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_179: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_180: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_181: {
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
  View_3004_182: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_183: {
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
  View_3004_184: {
    width: wp("27.91459757486979%"),
    minWidth: wp("27.91459757486979%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3004_184_2358_24611: {
    flexGrow: 1,
    width: wp("58.77152913411459%"),
    height: hp("29.510412580979978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.368684895833326%"),
    top: hp("-7.19267631489069%"),
    resizeMode: "cover"
  },
  View_3004_185: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_186: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_186: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_187: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_187: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3002_31086: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.737704918032787%")
  },
  Text_3002_31086: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3002_31089: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3002_31089_2151_15007: {
    flexGrow: 1,
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("1.6393442622950758%")
  },
  Text_I3002_31089_2151_15007: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I3002_31089_2151_15008: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("2.0491803278688465%")
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
