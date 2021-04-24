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
      <View style={styles.View_3001_87}>
        <View style={styles.View_I3001_87_2784_33814}>
          <View style={styles.View_I3001_87_2784_33814_2784_33798}>
            <View style={styles.View_I3001_87_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3001_87_2784_33814_2784_33800}
            />
            <View style={styles.View_I3001_87_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3001_87_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3001_87_2784_33814_2784_33806}
          />
          <View style={styles.View_I3001_87_2784_33814_2784_33811}>
            <View style={styles.View_I3001_87_2784_33814_2784_33812}>
              <Text style={styles.Text_I3001_87_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_792}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdfa/7a37/74d8a4a7bfb45d1cdc4ac3da71471576"
          }}
          style={styles.ImageBackground_I3004_792_2978_30748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431d/8c58/08c2e013ac15190749543e5cd817974e"
          }}
          style={styles.ImageBackground_I3004_792_2978_30755}
        />
        <View style={styles.View_I3004_792_2978_31611}>
          <View style={styles.View_I3004_792_2978_31614}>
            <View style={styles.View_I3004_792_2978_31615} />
          </View>
        </View>
        <View style={styles.View_I3004_792_2978_30762}>
          <View style={styles.View_I3004_792_2978_30763}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4e9/2b6e/3b5934d1b3c5cdb32248b56222a14b80"
              }}
              style={styles.ImageBackground_I3004_792_2978_30764}
            />
            <View style={styles.View_I3004_792_2978_30765}>
              <Text style={styles.Text_I3004_792_2978_30765}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30766}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f45a/aa31/785524fd1ba90cb32cfd8031c63d8ff4"
              }}
              style={styles.ImageBackground_I3004_792_2978_30767}
            />
            <View style={styles.View_I3004_792_2978_30768}>
              <Text style={styles.Text_I3004_792_2978_30768}>space</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30769}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d948/3b6c/766226e586f3935ec769f41c22e6bf8f"
              }}
              style={styles.ImageBackground_I3004_792_2978_30770}
            />
            <View style={styles.View_I3004_792_2978_30771}>
              <Text style={styles.Text_I3004_792_2978_30771}>123</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30772}>
            <View style={styles.View_I3004_792_2978_30773}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9e4/4387/62f1e7440a8c12d7c11cfce29263ca84"
                }}
                style={styles.ImageBackground_I3004_792_2978_30774}
              />
              <View style={styles.View_I3004_792_2978_30775}>
                <Text style={styles.Text_I3004_792_2978_30775}> </Text>
              </View>
            </View>
            <View style={styles.View_I3004_792_2978_30776}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I3004_792_2978_30777}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1de7/f6a0/da8c31abc5d613bdffbb8630a1e6e0d8"
                }}
                style={styles.ImageBackground_I3004_792_2978_30780}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_I3004_792_2978_30781}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_I3004_792_2978_30782}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_I3004_792_2978_30783}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_I3004_792_2978_30784}
              />
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30785}>
            <View style={styles.View_I3004_792_2978_30786}>
              <View style={styles.View_I3004_792_2978_30787} />
              <View style={styles.View_I3004_792_2978_30788}>
                <Text style={styles.Text_I3004_792_2978_30788}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d10b/95e5/4715036c657b939e267948e3b619c422"
              }}
              style={styles.ImageBackground_I3004_792_2978_30789}
            />
          </View>
          <View style={styles.View_I3004_792_2978_30790}>
            <View style={styles.View_I3004_792_2978_30791} />
            <View style={styles.View_I3004_792_2978_30792}>
              <Text style={styles.Text_I3004_792_2978_30792}>M</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30793}>
            <View style={styles.View_I3004_792_2978_30794} />
            <View style={styles.View_I3004_792_2978_30795}>
              <Text style={styles.Text_I3004_792_2978_30795}>N</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30796}>
            <View style={styles.View_I3004_792_2978_30797} />
            <View style={styles.View_I3004_792_2978_30798}>
              <Text style={styles.Text_I3004_792_2978_30798}>B</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30799}>
            <View style={styles.View_I3004_792_2978_30800} />
            <View style={styles.View_I3004_792_2978_30801}>
              <Text style={styles.Text_I3004_792_2978_30801}>V</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30802}>
            <View style={styles.View_I3004_792_2978_30803} />
            <View style={styles.View_I3004_792_2978_30804}>
              <Text style={styles.Text_I3004_792_2978_30804}>C</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30805}>
            <View style={styles.View_I3004_792_2978_30806} />
            <View style={styles.View_I3004_792_2978_30807}>
              <Text style={styles.Text_I3004_792_2978_30807}>X</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30808}>
            <View style={styles.View_I3004_792_2978_30809} />
            <View style={styles.View_I3004_792_2978_30810}>
              <Text style={styles.Text_I3004_792_2978_30810}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30811}>
            <View style={styles.View_I3004_792_2978_30812} />
            <View style={styles.View_I3004_792_2978_30813}>
              <Text style={styles.Text_I3004_792_2978_30813}>L</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30814}>
            <View style={styles.View_I3004_792_2978_30815} />
            <View style={styles.View_I3004_792_2978_30816}>
              <Text style={styles.Text_I3004_792_2978_30816}>K</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30817}>
            <View style={styles.View_I3004_792_2978_30818} />
            <View style={styles.View_I3004_792_2978_30819}>
              <Text style={styles.Text_I3004_792_2978_30819}>J</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30820}>
            <View style={styles.View_I3004_792_2978_30821} />
            <View style={styles.View_I3004_792_2978_30822}>
              <Text style={styles.Text_I3004_792_2978_30822}>H</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30823}>
            <View style={styles.View_I3004_792_2978_30824} />
            <View style={styles.View_I3004_792_2978_30825}>
              <Text style={styles.Text_I3004_792_2978_30825}>G</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30826}>
            <View style={styles.View_I3004_792_2978_30827} />
            <View style={styles.View_I3004_792_2978_30828}>
              <Text style={styles.Text_I3004_792_2978_30828}>F</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30829}>
            <View style={styles.View_I3004_792_2978_30830} />
            <View style={styles.View_I3004_792_2978_30831}>
              <Text style={styles.Text_I3004_792_2978_30831}>D</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30832}>
            <View style={styles.View_I3004_792_2978_30833} />
            <View style={styles.View_I3004_792_2978_30834}>
              <Text style={styles.Text_I3004_792_2978_30834}>S</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30835}>
            <View style={styles.View_I3004_792_2978_30836} />
            <View style={styles.View_I3004_792_2978_30837}>
              <Text style={styles.Text_I3004_792_2978_30837}>A</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30838}>
            <View style={styles.View_I3004_792_2978_30839} />
            <View style={styles.View_I3004_792_2978_30840}>
              <Text style={styles.Text_I3004_792_2978_30840}>P</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30841}>
            <View style={styles.View_I3004_792_2978_30842} />
            <View style={styles.View_I3004_792_2978_30843}>
              <Text style={styles.Text_I3004_792_2978_30843}>O</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30844}>
            <View style={styles.View_I3004_792_2978_30845} />
            <View style={styles.View_I3004_792_2978_30846}>
              <Text style={styles.Text_I3004_792_2978_30846}>I</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30847}>
            <View style={styles.View_I3004_792_2978_30848} />
            <View style={styles.View_I3004_792_2978_30849}>
              <Text style={styles.Text_I3004_792_2978_30849}>U</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30850}>
            <View style={styles.View_I3004_792_2978_30851} />
            <View style={styles.View_I3004_792_2978_30852}>
              <Text style={styles.Text_I3004_792_2978_30852}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30853}>
            <View style={styles.View_I3004_792_2978_30854} />
            <View style={styles.View_I3004_792_2978_30855}>
              <Text style={styles.Text_I3004_792_2978_30855}>T</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30856}>
            <View style={styles.View_I3004_792_2978_30857} />
            <View style={styles.View_I3004_792_2978_30858}>
              <Text style={styles.Text_I3004_792_2978_30858}>R</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30859}>
            <View style={styles.View_I3004_792_2978_30860} />
            <View style={styles.View_I3004_792_2978_30861}>
              <Text style={styles.Text_I3004_792_2978_30861}>E</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30862}>
            <View style={styles.View_I3004_792_2978_30863} />
            <View style={styles.View_I3004_792_2978_30864}>
              <Text style={styles.Text_I3004_792_2978_30864}>W</Text>
            </View>
          </View>
          <View style={styles.View_I3004_792_2978_30865}>
            <View style={styles.View_I3004_792_2978_30866} />
            <View style={styles.View_I3004_792_2978_30867}>
              <Text style={styles.Text_I3004_792_2978_30867}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3137_33767}>
        <View style={styles.View_3137_33768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33769}
          />
          <View style={styles.View_3137_33770}>
            <Text style={styles.Text_3137_33770}>Sam Smith</Text>
          </View>
        </View>
        <View style={styles.View_3137_33771}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33772}
          />
          <View style={styles.View_3137_33773}>
            <Text style={styles.Text_3137_33773}>Sam Peters</Text>
          </View>
        </View>
        <View style={styles.View_3137_33774}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33775}
          />
          <View style={styles.View_3137_33776}>
            <Text style={styles.Text_3137_33776}>James Samsung</Text>
          </View>
        </View>
        <View style={styles.View_3137_33777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33778}
          />
          <View style={styles.View_3137_33779}>
            <Text style={styles.Text_3137_33779}>Sam West</Text>
          </View>
        </View>
        <View style={styles.View_3137_33780}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33781}
          />
          <View style={styles.View_3137_33782}>
            <Text style={styles.Text_3137_33782}>Sammy Smith</Text>
          </View>
        </View>
        <View style={styles.View_3137_33783}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33784}
          />
          <View style={styles.View_3137_33785}>
            <Text style={styles.Text_3137_33785}>Sam Paul</Text>
          </View>
        </View>
        <View style={styles.View_3137_33786}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33787}
          />
          <View style={styles.View_3137_33788}>
            <Text style={styles.Text_3137_33788}>Kelly Samie</Text>
          </View>
        </View>
        <View style={styles.View_3137_33789}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b90/6e00/cb25f8ef19d57f1620864d20eae712ff"
            }}
            style={styles.ImageBackground_3137_33790}
          />
          <View style={styles.View_3137_33791}>
            <Text style={styles.Text_3137_33791}>Sam Lane</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3005_31280}>
        <View style={styles.View_I3005_31280_3005_31231}>
          <View style={styles.View_I3005_31280_3005_31230}>
            <View style={styles.View_I3005_31280_3002_31179} />
            <View style={styles.View_I3005_31280_3002_31180}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b41/5723/a0c76089d18094ac65fa5f05b44b2dec"
                }}
                style={styles.ImageBackground_I3005_31280_3002_31181}
              />
              <View style={styles.View_I3005_31280_3002_31182}>
                <Text style={styles.Text_I3005_31280_3002_31182}>Sam |</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dab/743c/5057803bd97ffd6cf32e6a4eaeec5f88"
              }}
              style={styles.ImageBackground_I3005_31280_3005_31225}
            />
          </View>
          <View style={styles.View_I3005_31280_3005_31224}>
            <Text style={styles.Text_I3005_31280_3005_31224}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3001_87: {
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
  View_I3001_87_2784_33814: {
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
  View_I3001_87_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3001_87_2784_33814_2784_33799: {
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
  ImageBackground_I3001_87_2784_33814_2784_33800: {
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
  View_I3001_87_2784_33814_2784_33801: {
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
  ImageBackground_I3001_87_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3001_87_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3001_87_2784_33814_2784_33811: {
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
  View_I3001_87_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3001_87_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3004_792: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  ImageBackground_I3004_792_2978_30748: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3.4149435699963178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_I3004_792_2978_30755: {
    flexGrow: 1,
    width: wp("7.066666666666667%"),
    height: hp("3.6202185792349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("32.78688524590166%")
  },
  View_I3004_792_2978_31611: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_31614: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_31615: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I3004_792_2978_30762: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("27.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I3004_792_2978_30763: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3004_792_2978_30764: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3004_792_2978_30765: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3004_792_2978_30765: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3004_792_2978_30766: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3004_792_2978_30767: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3004_792_2978_30768: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3004_792_2978_30768: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3004_792_2978_30769: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3004_792_2978_30770: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3004_792_2978_30771: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3004_792_2978_30771: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3004_792_2978_30772: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_I3004_792_2978_30773: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3004_792_2978_30774: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3004_792_2978_30775: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3004_792_2978_30775: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I3004_792_2978_30776: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("1.7295295423497379%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.575976562500003%")
  },
  ImageBackground_I3004_792_2978_30777: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3004_792_2978_30780: {
    width: wp("1.7841803232828777%"),
    height: hp("0.9131669998168945%"),
    top: hp("0.7033384562841434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613281249999915%")
  },
  ImageBackground_I3004_792_2978_30781: {
    width: wp("0.3007041931152344%"),
    height: hp("0.15417674525839384%"),
    top: hp("0.6798582650273204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287044270833334%")
  },
  ImageBackground_I3004_792_2978_30782: {
    width: wp("0.30211896896362306%"),
    height: hp("0.15477867074351492%"),
    top: hp("1.4832543545081904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.71731770833334%")
  },
  ImageBackground_I3004_792_2978_30783: {
    width: wp("0.30095300674438474%"),
    height: hp("0.15404927925985368%"),
    top: hp("1.4840548155737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289713541666657%")
  },
  ImageBackground_I3004_792_2978_30784: {
    width: wp("0.3021279652913411%"),
    height: hp("0.1547740619690692%"),
    top: hp("0.6798582650273204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.72018229166666%")
  },
  View_I3004_792_2978_30785: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3004_792_2978_30786: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30787: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30788: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.439973958333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30788: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I3004_792_2978_30789: {
    width: wp("5.034666442871093%"),
    height: hp("2.2481243467070366%"),
    top: hp("1.6665599385245997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1093098958333334%")
  },
  View_I3004_792_2978_30790: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30791: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30792: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4399739583333258%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30792: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30793: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30794: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30795: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666714%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30795: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30796: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30797: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30798: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.23997395833333%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30798: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30799: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30800: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30801: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666643%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30801: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30802: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30803: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30804: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666643%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30804: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30805: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30806: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30807: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666679%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30807: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30808: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30809: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30810: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.239973958333332%"),
    top: hp("1.092896174863398%")
  },
  Text_I3004_792_2978_30810: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30811: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30812: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30813: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5066406249999886%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30813: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30814: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30815: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30816: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.239973958333337%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30816: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30817: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30818: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30819: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.506640625000003%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30819: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30820: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30821: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30822: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666714%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30822: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30823: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30824: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30825: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666643%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30825: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30826: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30827: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30828: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.506640625000003%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30828: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30829: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30830: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30831: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666679%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30831: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30832: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30833: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30834: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.239973958333332%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30834: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30835: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30836: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30837: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.973307291666667%"),
    top: hp("1.0928961748633697%")
  },
  Text_I3004_792_2978_30837: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30838: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30839: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30840: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2399739583333513%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30840: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30841: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30842: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30843: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7066406249999915%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30843: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30844: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30845: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30846: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.306640625%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30846: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30847: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30848: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30849: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9733072916666714%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30849: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30850: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30851: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30852: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.23997395833333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30852: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30853: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30854: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30855: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.239973958333337%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30855: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30856: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30857: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30858: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.239973958333337%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30858: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30859: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30860: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30861: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2399739583333336%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30861: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30862: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30863: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30864: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1733072916666654%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30864: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I3004_792_2978_30865: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_792_2978_30866: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_I3004_792_2978_30867: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7066406249999997%"),
    top: hp("1.0928961748633839%")
  },
  Text_I3004_792_2978_30867: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_3137_33767: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("41.53005464480874%"),
    minHeight: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.683060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3137_33768: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33769: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33770: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33770: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33771: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33772: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33773: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33773: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33774: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33775: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33776: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33776: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33777: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.393442622950825%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33778: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33779: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33779: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33780: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33781: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33782: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33782: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33783: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33784: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33785: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33785: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33786: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33787: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33788: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33788: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3137_33789: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021859%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3137_33790: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3137_33791: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0%")
  },
  Text_3137_33791: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3005_31280: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3005_31280_3005_31231: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3005_31280_3005_31230: {
    width: wp("69.6%"),
    minWidth: wp("69.6%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3005_31280_3002_31179: {
    width: wp("69.6%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I3005_31280_3002_31180: {
    width: wp("23.28888753255208%"),
    minWidth: wp("23.28888753255208%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.234375%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3005_31280_3002_31181: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3005_31280_3002_31182: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999997%"),
    top: hp("0%")
  },
  Text_I3005_31280_3002_31182: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I3005_31280_3005_31225: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%")
  },
  View_I3005_31280_3005_31224: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333332%"),
    top: hp("1.0928961748633874%")
  },
  Text_I3005_31280_3005_31224: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
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
