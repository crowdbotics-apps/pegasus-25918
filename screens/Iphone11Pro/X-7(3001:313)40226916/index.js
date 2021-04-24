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
      <View style={styles.View_3001_458}>
        <View style={styles.View_3001_343} />
        <View style={styles.View_3001_461}>
          <View style={styles.View_3001_459}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/58df/150650c7b854e6b745ccd7fa846516ef"
              }}
              style={styles.ImageBackground_I3001_459_2216_724}
            />
          </View>
        </View>
        <View style={styles.View_3003_9}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e2/3c2f/1f036c4bc09f041467e70ee713259851"
            }}
            style={styles.ImageBackground_3003_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c8c/2de6/1a3610554e2fa7580cfa3c996935681f"
            }}
            style={styles.ImageBackground_3003_11}
          />
        </View>
      </View>
      <View style={styles.View_3001_492}>
        <View style={styles.View_3001_493} />
        <View style={styles.View_3001_494}>
          <View style={styles.View_3001_495}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ed/512e/84ec09d910a98d338081bbdaf3110913"
              }}
              style={styles.ImageBackground_I3001_495_2216_439}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_511}>
        <View style={styles.View_3001_512} />
        <View style={styles.View_3001_513}>
          <View style={styles.View_3001_514}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ec/ae4b/033938a62cac0f2c1f7694ffb742b5da"
              }}
              style={styles.ImageBackground_I3001_514_2216_435}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_518}>
        <View style={styles.View_3001_519} />
        <View style={styles.View_3001_520}>
          <View style={styles.View_3001_521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c6/8088/027430021869838b5f84a6be801d71c1"
              }}
              style={styles.ImageBackground_I3001_521_2216_463}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_481}>
        <View style={styles.View_3001_344} />
        <View style={styles.View_3001_484}>
          <View style={styles.View_3001_482}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0e/5b6b/ffe15bf15c7681566955f4322763a74b"
              }}
              style={styles.ImageBackground_I3001_482_2216_467}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_487}>
        <View style={styles.View_3001_488} />
        <View style={styles.View_3001_489}>
          <View style={styles.View_3001_490}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791a/066b/acd972f9c64ab979a47aa1b0da00cc87"
              }}
              style={styles.ImageBackground_I3001_490_2216_476}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_346} />
      <View style={styles.View_3001_355} />
      <View style={styles.View_3001_356} />
      <View style={styles.View_3001_357} />
      <View style={styles.View_3001_358} />
      <View style={styles.View_3001_359}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14f0/41fe/f540e2668d6199f2bb6b0c1f03b4e64e"
          }}
          style={styles.ImageBackground_I3001_359_2998_2144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d94/82c0/0c7173b4f2ec195ecedb2227bebd9ee8"
          }}
          style={styles.ImageBackground_I3001_359_2998_2145}
        />
      </View>
      <View style={styles.View_3001_360}>
        <Text style={styles.Text_3001_360}>Recommendations</Text>
      </View>
      <View style={styles.View_3001_361}>
        <Text style={styles.Text_3001_361}>Latest Releases</Text>
      </View>
      <View style={styles.View_3001_321}>
        <View style={styles.View_I3001_321_2784_33814}>
          <View style={styles.View_I3001_321_2784_33814_2784_33798}>
            <View style={styles.View_I3001_321_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3001_321_2784_33814_2784_33800}
            />
            <View style={styles.View_I3001_321_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3001_321_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3001_321_2784_33814_2784_33806}
          />
          <View style={styles.View_I3001_321_2784_33814_2784_33811}>
            <View style={styles.View_I3001_321_2784_33814_2784_33812}>
              <Text style={styles.Text_I3001_321_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3001_552}>
        <View style={styles.View_3001_553} />
        <View style={styles.View_3001_554}>
          <View style={styles.View_3001_555}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f57f/981c/5c15e6f6e2e84e536fce81e2adf53b80"
              }}
              style={styles.ImageBackground_I3001_555_2358_24611}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_556}>
        <View style={styles.View_3001_557} />
        <View style={styles.View_3001_558}>
          <View style={styles.View_3001_559}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0905/4fad/1f40117ccadbbd4893a96f4b849eca20"
              }}
              style={styles.ImageBackground_I3001_559_2358_24601}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_560}>
        <View style={styles.View_3001_561} />
        <View style={styles.View_3001_562}>
          <View style={styles.View_3001_563}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100a/cc59/324f912c09397ad0cde6577f7201f1d5"
              }}
              style={styles.ImageBackground_I3001_563_2358_24622}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_564}>
        <View style={styles.View_3001_565} />
        <View style={styles.View_3001_566}>
          <View style={styles.View_3001_567}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/009c/ecea/7243528859fc3b43bbe7ea87359ed468"
              }}
              style={styles.ImageBackground_I3001_567_2358_24607}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3001_417}>
        <View style={styles.View_I3001_417_2973_4569}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/3c3c/23e36443e1a5f37fe233d2888f822a2c"
            }}
            style={styles.ImageBackground_I3001_417_2973_4570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4084/eab3/05bb1d2642945bc73431a24b5f5c1b4b"
            }}
            style={styles.ImageBackground_I3001_417_2973_4571}
          />
          <View style={styles.View_I3001_417_2973_4572}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2f/795e/9a4ca90d01bd12fc75fc4c85b9f6929f"
              }}
              style={styles.ImageBackground_I3001_417_2973_4572_2998_2591}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a3/15b9/714fec3ee2b84bd27f410decfc532a38"
              }}
              style={styles.ImageBackground_I3001_417_2973_4572_2998_2592}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
            }}
            style={styles.ImageBackground_I3001_417_2973_4573}
          />
        </View>
      </View>
      <View style={styles.View_3001_322}>
        <View style={styles.View_I3001_322_2784_33817} />
      </View>
      <View style={styles.View_3001_369}>
        <View style={styles.View_I3001_369_1158_9501}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae0/ac8c/c9796a68f68833483e53f87aaa89b226"
            }}
            style={styles.ImageBackground_I3001_369_1158_9502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560a/f7bf/337d6ec90b3079f9e2324be705bbeb9c"
            }}
            style={styles.ImageBackground_I3001_369_1158_9509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ca/57c6/9a9b6a1f112141bef91b3b633d76d729"
            }}
            style={styles.ImageBackground_I3001_369_1158_9510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99aa/9a72/b1ce9135ae09b5f0aec350fc4365de86"
            }}
            style={styles.ImageBackground_I3001_369_1158_9511}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/235d/e174/d0afb60b1a6beeb6f3d4c496462224a9"
        }}
        style={styles.ImageBackground_3001_595}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/86b8/4e55a16698f15026667cf517a76f48c2"
        }}
        style={styles.ImageBackground_3001_601}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/90c3/011c160730f8d5c6776e35343eda86da"
        }}
        style={styles.ImageBackground_3001_593}
      />
      <View style={styles.View_3001_597}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f4/7914/470732f09c791f9be2c181175cb2d91f"
          }}
          style={styles.ImageBackground_I3001_597_2780_36545}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d3/e2df/bf96659eaa80fad6b41fc0876757a170"
        }}
        style={styles.ImageBackground_3001_591}
      />
      <View style={styles.View_3001_735}>
        <View style={styles.View_3001_736} />
        <View style={styles.View_3001_737}>
          <View style={styles.View_3001_738}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2d7/b070/c2e6872c87fe6c4c4f9f3353fdc0df1b"
              }}
              style={styles.ImageBackground_I3001_738_2216_440}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3001_458: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.071038251366119%")
  },
  View_3001_343: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_461: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_459: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_459_2216_724: {
    flexGrow: 1,
    width: wp("179.16033528645835%"),
    height: hp("68.82257513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43.90403645833333%"),
    top: hp("-10.99059725068306%"),
    resizeMode: "cover"
  },
  View_3003_9: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("9.699453551912569%")
  },
  ImageBackground_3003_10: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3003_11: {
    width: wp("8.533334350585937%"),
    height: hp("4.3715852205870585%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.66673177083333%")
  },
  View_3001_492: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("56.14754098360656%")
  },
  View_3001_493: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_494: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_495: {
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
  ImageBackground_I3001_495_2216_439: {
    flexGrow: 1,
    width: wp("53.036336263020836%"),
    height: hp("26.407956816459617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.269335937500001%"),
    top: hp("-2.456881830601098%"),
    resizeMode: "cover"
  },
  View_3001_511: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("56.14754098360656%")
  },
  View_3001_512: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_513: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_514: {
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
  ImageBackground_I3001_514_2216_435: {
    flexGrow: 1,
    width: wp("28.71712646484375%"),
    height: hp("27.03415083754909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.38382161458332575%"),
    top: hp("-5.670733008879786%"),
    resizeMode: "cover"
  },
  View_3001_518: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("56.14754098360656%")
  },
  View_3001_519: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_520: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_521: {
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
  ImageBackground_I3001_521_2216_463: {
    flexGrow: 1,
    width: wp("30.090665690104167%"),
    height: hp("22.67827935557548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.00533854166666%"),
    top: hp("-1.0096482240437155%"),
    resizeMode: "cover"
  },
  View_3001_481: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.73333333333333%"),
    top: hp("15.300546448087433%")
  },
  View_3001_344: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_484: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_482: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_482_2216_467: {
    flexGrow: 1,
    width: wp("152.5%"),
    height: hp("52.06198353584999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-25.749967447916674%"),
    top: hp("-0.4250448258196722%"),
    resizeMode: "cover"
  },
  View_3001_487: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-76.8%"),
    top: hp("15.300546448087433%")
  },
  View_3001_488: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_489: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_490: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3001_490_2216_476: {
    flexGrow: 1,
    width: wp("243.75%"),
    height: hp("83.24795081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-71.875%"),
    top: hp("-15.986274760928962%"),
    resizeMode: "cover"
  },
  View_3001_346: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("42.21311475409836%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_355: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("42.21311475409836%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_356: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("42.21311475409836%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_357: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("42.21311475409836%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_358: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("42.21311475409836%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_359: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_359_2998_2144: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("2.2540983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07148437499999716%"),
    top: hp("0.3756830601092904%")
  },
  ImageBackground_I3001_359_2998_2145: {
    flexGrow: 1,
    width: wp("3.2075319925944012%"),
    height: hp("1.6432028650586072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5262695312499943%"),
    top: hp("1.2263063524590159%")
  },
  View_3001_360: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("52.04918032786885%")
  },
  Text_3001_360: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3001_361: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("78.00546448087432%")
  },
  Text_3001_361: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3001_321: {
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
  View_I3001_321_2784_33814: {
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
  View_I3001_321_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I3001_321_2784_33814_2784_33799: {
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
  ImageBackground_I3001_321_2784_33814_2784_33800: {
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
  View_I3001_321_2784_33814_2784_33801: {
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
  ImageBackground_I3001_321_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3001_321_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3001_321_2784_33814_2784_33811: {
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
  View_I3001_321_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3001_321_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3001_552: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("82.10382513661202%")
  },
  View_3001_553: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_554: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_555: {
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
  ImageBackground_I3001_555_2358_24611: {
    flexGrow: 1,
    width: wp("60.07421875%"),
    height: hp("30.085291627977718%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.90882161458333%"),
    top: hp("-7.333023821721312%"),
    resizeMode: "cover"
  },
  View_3001_556: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("82.10382513661202%")
  },
  View_3001_557: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_558: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_559: {
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
  ImageBackground_I3001_559_2358_24601: {
    flexGrow: 1,
    width: wp("30.17794392903646%"),
    height: hp("34.11609045143336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1316731770833286%"),
    top: hp("-6.112587517076506%"),
    resizeMode: "cover"
  },
  View_3001_560: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("82.10382513661202%")
  },
  View_3001_561: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_562: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_563: {
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
  ImageBackground_I3001_563_2358_24622: {
    flexGrow: 1,
    width: wp("31.593513997395835%"),
    height: hp("31.747903459059085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.22486979166666288%"),
    top: hp("-4.575702271174862%"),
    resizeMode: "cover"
  },
  View_3001_564: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("82.10382513661202%")
  },
  View_3001_565: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_566: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_567: {
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
  ImageBackground_I3001_567_2358_24607: {
    flexGrow: 1,
    width: wp("33.271183268229166%"),
    height: hp("33.433762013586495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1316731770833286%"),
    top: hp("-1.876280737704917%"),
    resizeMode: "cover"
  },
  View_3001_417: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_I3001_417_2973_4569: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_417_2973_4570: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3001_417_2973_4571: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  View_I3001_417_2973_4572: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_417_2973_4572_2998_2591: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I3001_417_2973_4572_2998_2592: {
    flexGrow: 1,
    width: wp("2.933333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_I3001_417_2973_4573: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
  },
  View_3001_322: {
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
  View_I3001_322_2784_33817: {
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
  View_3001_369: {
    width: wp("11.9998779296875%"),
    minWidth: wp("11.9998779296875%"),
    height: hp("4.4179165949586965%"),
    minHeight: hp("4.4179165949586965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.00013020833333%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3001_369_1158_9501: {
    flexGrow: 1,
    width: wp("11.9998779296875%"),
    height: hp("4.4179165949586965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3001_369_1158_9502: {
    width: wp("7.342057291666666%"),
    height: hp("3.4546648869748973%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.657812500000006%")
  },
  ImageBackground_I3001_369_1158_9509: {
    width: wp("7.3421778361002605%"),
    height: hp("3.9931174835872127%"),
    top: hp("0.4247780054644812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I3001_369_1158_9510: {
    width: wp("4.998930358886719%"),
    height: hp("2.718718325505491%"),
    top: hp("0.7647071379781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9680989583333357%")
  },
  ImageBackground_I3001_369_1158_9511: {
    width: wp("3.280548350016276%"),
    height: hp("1.7841590558244882%"),
    top: hp("2.378970286885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4059244791666714%")
  },
  ImageBackground_3001_595: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%")
  },
  ImageBackground_3001_601: {
    width: wp("6.4%"),
    height: hp("1.8386959378185168%"),
    top: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%")
  },
  ImageBackground_3001_593: {
    width: wp("6.4%"),
    height: hp("2.530547439074907%"),
    top: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%")
  },
  View_3001_597: {
    width: wp("5.74622548421224%"),
    minWidth: wp("5.74622548421224%"),
    height: hp("3.278690087990683%"),
    minHeight: hp("3.278690087990683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3001_597_2780_36545: {
    flexGrow: 1,
    width: wp("5.74622548421224%"),
    height: hp("3.278690087990683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3001_591: {
    width: wp("6.4%"),
    height: hp("2.336065625883842%"),
    top: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%")
  },
  View_3001_735: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("56.14754098360656%")
  },
  View_3001_736: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3001_737: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3001_738: {
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
  ImageBackground_I3001_738_2216_440: {
    flexGrow: 1,
    width: wp("27.91459757486979%"),
    height: hp("26.297805869514175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-4.329693903688529%"),
    resizeMode: "cover"
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
