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
      <View style={styles.View_3004_358}>
        <View style={styles.View_3004_359} />
        <View style={styles.View_3004_360}>
          <View style={styles.View_3004_361}>
            <Text style={styles.Text_3004_361}>Title</Text>
          </View>
          <View style={styles.View_3004_362}>
            <Text style={styles.Text_3004_362}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_363}>
        <View style={styles.View_3004_364} />
        <View style={styles.View_3004_365}>
          <View style={styles.View_3004_366}>
            <Text style={styles.Text_3004_366}>Title</Text>
          </View>
          <View style={styles.View_3004_367}>
            <Text style={styles.Text_3004_367}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_368}>
        <View style={styles.View_3004_369} />
        <View style={styles.View_3004_370}>
          <View style={styles.View_3004_371}>
            <Text style={styles.Text_3004_371}>Title</Text>
          </View>
          <View style={styles.View_3004_372}>
            <Text style={styles.Text_3004_372}>Meta info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_373}>
        <View style={styles.View_3004_374} />
        <View style={styles.View_3004_375}>
          <View style={styles.View_3004_376}>
            <Text style={styles.Text_3004_376}>Main Title</Text>
          </View>
          <View style={styles.View_3004_377}>
            <Text style={styles.Text_3004_377}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3004_378}>
          <View style={styles.View_I3004_378_2151_16009}>
            <Text style={styles.Text_I3004_378_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_379}>
        <View style={styles.View_3004_380} />
        <View style={styles.View_3004_381}>
          <View style={styles.View_3004_382}>
            <Text style={styles.Text_3004_382}>Main Title</Text>
          </View>
          <View style={styles.View_3004_383}>
            <Text style={styles.Text_3004_383}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3004_384}>
          <View style={styles.View_I3004_384_2151_16009}>
            <Text style={styles.Text_I3004_384_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_385}>
        <View style={styles.View_3004_386} />
        <View style={styles.View_3004_387}>
          <View style={styles.View_3004_388}>
            <Text style={styles.Text_3004_388}>Main Title</Text>
          </View>
          <View style={styles.View_3004_389}>
            <Text style={styles.Text_3004_389}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3004_390}>
          <View style={styles.View_I3004_390_2151_16009}>
            <Text style={styles.Text_I3004_390_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_391}>
        <View style={styles.View_3004_392} />
        <View style={styles.View_3004_393}>
          <View style={styles.View_3004_394}>
            <Text style={styles.Text_3004_394}>Main Title</Text>
          </View>
          <View style={styles.View_3004_395}>
            <Text style={styles.Text_3004_395}>Meta Info</Text>
          </View>
        </View>
        <View style={styles.View_3004_396}>
          <View style={styles.View_I3004_396_2151_16009}>
            <Text style={styles.Text_I3004_396_2151_16009}>Add</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_397}>
        <View style={styles.View_3004_398}>
          <Text style={styles.Text_3004_398}>Popular</Text>
        </View>
        <View style={styles.View_3004_399}>
          <Text style={styles.Text_3004_399}>See All</Text>
        </View>
      </View>
      <View style={styles.View_3004_400}>
        <View style={styles.View_3004_401}>
          <Text style={styles.Text_3004_401}>New Releases</Text>
        </View>
        <View style={styles.View_3004_402}>
          <Text style={styles.Text_3004_402}>See All</Text>
        </View>
      </View>
      <View style={styles.View_3004_407}>
        <View style={styles.View_I3004_407_2973_1730}>
          <View style={styles.View_I3004_407_2973_1731}>
            <View style={styles.View_I3004_407_2973_1732}>
              <View style={styles.View_I3004_407_2973_1732_2998_2033} />
              <View style={styles.View_I3004_407_2973_1732_2998_2034} />
              <View style={styles.View_I3004_407_2973_1732_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd6/870d/86e05051fce09f82fe66306f6139a901"
                }}
                style={styles.ImageBackground_I3004_407_2973_1732_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/e04e/5f6dc2d02abb16b97efcc2641e166e2c"
                }}
                style={styles.ImageBackground_I3004_407_2973_1732_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f8/efa3/25f6422b77562cb5cfaafcbb7914c9e3"
                }}
                style={styles.ImageBackground_I3004_407_2973_1732_2998_2038}
              />
            </View>
            <View style={styles.View_I3004_407_2973_1733}>
              <Text style={styles.Text_I3004_407_2973_1733}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3004_407_2973_1734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857b/dd94/eed6cf8cd1f63f2e800596e362e78043"
              }}
              style={styles.ImageBackground_I3004_407_2973_1735}
            />
            <View style={styles.View_I3004_407_2973_1736}>
              <Text style={styles.Text_I3004_407_2973_1736}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3004_407_2973_1737}>
            <View style={styles.View_I3004_407_2973_1738}>
              <View style={styles.View_I3004_407_2973_1738_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8787/941c/3010a920490ceb032cf9243f6f6c9aa1"
                }}
                style={styles.ImageBackground_I3004_407_2973_1738_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9660/ee6a/3b1faadde4f4b975fca288f5905cdb17"
                }}
                style={styles.ImageBackground_I3004_407_2973_1738_2998_2048}
              />
            </View>
            <View style={styles.View_I3004_407_2973_1739}>
              <Text style={styles.Text_I3004_407_2973_1739}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3004_407_2973_1753}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/b6f6/36b4dd127e5358d8e50c15b0c6a996ac"
              }}
              style={styles.ImageBackground_I3004_407_2973_1754}
            />
            <View style={styles.View_I3004_407_2973_1755}>
              <Text style={styles.Text_I3004_407_2973_1755}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3004_407_2973_1740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bda/5445/ee940766685df2247fb14717c92e4f48"
              }}
              style={styles.ImageBackground_I3004_407_2973_1741}
            />
            <View style={styles.View_I3004_407_2973_1742}>
              <Text style={styles.Text_I3004_407_2973_1742}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_336}>
        <View style={styles.View_I3004_336_2784_33814}>
          <View style={styles.View_I3004_336_2784_33814_2784_33798}>
            <View style={styles.View_I3004_336_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3004_336_2784_33814_2784_33800}
            />
            <View style={styles.View_I3004_336_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3004_336_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3004_336_2784_33814_2784_33806}
          />
          <View style={styles.View_I3004_336_2784_33814_2784_33811}>
            <View style={styles.View_I3004_336_2784_33814_2784_33812}>
              <Text style={styles.Text_I3004_336_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3004_337}>
        <View style={styles.View_I3004_337_2784_33819}>
          <View style={styles.View_I3004_337_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3004_358: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_359: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_360: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_361: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_361: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_362: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901587%")
  },
  Text_3004_362: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_363: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.13333333333333%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_364: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_365: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_366: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_366: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_367: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901587%")
  },
  Text_3004_367: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_368: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_369: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3004_370: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_371: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_371: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_372: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901587%")
  },
  Text_3004_372: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_373: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.00546448087432%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_374: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_375: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_376: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_376: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_377: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_377: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_378: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_378_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3004_378_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_379: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("63.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_380: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_381: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_382: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_382: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_383: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_383: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_384: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_384_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3004_384_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_385: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_386: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_387: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_388: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_388: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_389: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3004_389: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_390: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_390_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3004_390_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_391: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("85.79234972677595%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_392: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3004_393: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_394: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_394: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_395: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3004_395: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_396: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3004_396_2151_16009: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("2.1857923497267677%")
  },
  Text_I3004_396_2151_16009: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_397: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_398: {
    width: wp("66.93333333333334%"),
    minWidth: wp("66.93333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_398: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3004_399: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("0.6830601092896202%")
  },
  Text_3004_399: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_400: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3004_401: {
    width: wp("66.93333333333334%"),
    minWidth: wp("66.93333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3004_401: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_3004_402: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("0.6830601092896158%")
  },
  Text_3004_402: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3004_407: {
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
  View_I3004_407_2973_1730: {
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
  View_I3004_407_2973_1731: {
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
  View_I3004_407_2973_1732: {
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
  View_I3004_407_2973_1732_2998_2033: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261383900876905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24440104166666643%"),
    top: hp("1.5027322404371546%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3004_407_2973_1732_2998_2034: {
    flexGrow: 1,
    width: wp("1.2222222646077474%"),
    height: hp("0.6261382598043139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555989583333329%"),
    top: hp("2.254098360655732%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I3004_407_2973_1732_2998_2035: {
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
  ImageBackground_I3004_407_2973_1732_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777343749999982%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3004_407_2973_1732_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3004_407_2973_1732_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777343749999982%"),
    top: hp("0.6262273736338813%")
  },
  View_I3004_407_2973_1733: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_407_2973_1733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_407_2973_1734: {
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
  ImageBackground_I3004_407_2973_1735: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.600000000000005%")
  },
  View_I3004_407_2973_1736: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_407_2973_1736: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_407_2973_1737: {
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
  View_I3004_407_2973_1738: {
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
  View_I3004_407_2973_1738_2998_2046: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24440104166666288%"),
    top: hp("1.2521879269125833%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3004_407_2973_1738_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222656249999915%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3004_407_2973_1738_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555989583333329%"),
    top: hp("0.2505443135245855%")
  },
  View_I3004_407_2973_1739: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_407_2973_1739: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_407_2973_1753: {
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
  ImageBackground_I3004_407_2973_1754: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_I3004_407_2973_1755: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_407_2973_1755: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3004_407_2973_1740: {
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
  ImageBackground_I3004_407_2973_1741: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3004_407_2973_1742: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3004_407_2973_1742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3004_336: {
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
  View_I3004_336_2784_33814: {
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
  View_I3004_336_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68880208333333%"),
    top: hp("2.368030652322404%")
  },
  View_I3004_336_2784_33814_2784_33799: {
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
  ImageBackground_I3004_336_2784_33814_2784_33800: {
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
  View_I3004_336_2784_33814_2784_33801: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I3004_336_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3004_336_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3004_336_2784_33814_2784_33811: {
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
  View_I3004_336_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3004_336_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3004_337: {
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
  View_I3004_337_2784_33819: {
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
  View_I3004_337_2784_33819_2784_33817: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
