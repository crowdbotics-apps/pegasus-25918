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
      <View style={styles.View_3023_347}>
        <View style={styles.View_3023_348} />
        <View style={styles.View_3023_349}>
          <View style={styles.View_3023_350}>
            <Text style={styles.Text_3023_350}>Main Title</Text>
          </View>
          <View style={styles.View_3023_351}>
            <Text style={styles.Text_3023_351}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_2}>
        <View style={styles.View_I3023_2_2973_1730}>
          <View style={styles.View_I3023_2_2973_1731}>
            <View style={styles.View_I3023_2_2973_1732}>
              <View style={styles.View_I3023_2_2973_1732_2998_2033} />
              <View style={styles.View_I3023_2_2973_1732_2998_2034} />
              <View style={styles.View_I3023_2_2973_1732_2998_2035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd6/870d/86e05051fce09f82fe66306f6139a901"
                }}
                style={styles.ImageBackground_I3023_2_2973_1732_2998_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/e04e/5f6dc2d02abb16b97efcc2641e166e2c"
                }}
                style={styles.ImageBackground_I3023_2_2973_1732_2998_2037}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f8/efa3/25f6422b77562cb5cfaafcbb7914c9e3"
                }}
                style={styles.ImageBackground_I3023_2_2973_1732_2998_2038}
              />
            </View>
            <View style={styles.View_I3023_2_2973_1733}>
              <Text style={styles.Text_I3023_2_2973_1733}>Listen</Text>
            </View>
          </View>
          <View style={styles.View_I3023_2_2973_1734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ce/f667/e5ea761555472e58addee1de75928225"
              }}
              style={styles.ImageBackground_I3023_2_2973_1735}
            />
            <View style={styles.View_I3023_2_2973_1736}>
              <Text style={styles.Text_I3023_2_2973_1736}>Browse</Text>
            </View>
          </View>
          <View style={styles.View_I3023_2_2973_1737}>
            <View style={styles.View_I3023_2_2973_1738}>
              <View style={styles.View_I3023_2_2973_1738_2998_2046} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d868/9787/f9322081b36e92f5af25c7d1863376a9"
                }}
                style={styles.ImageBackground_I3023_2_2973_1738_2998_2047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/e0af/7517c3738531c43dc8a73996a46df33a"
                }}
                style={styles.ImageBackground_I3023_2_2973_1738_2998_2048}
              />
            </View>
            <View style={styles.View_I3023_2_2973_1739}>
              <Text style={styles.Text_I3023_2_2973_1739}>Library</Text>
            </View>
          </View>
          <View style={styles.View_I3023_2_2973_1753}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9327/b6f6/36b4dd127e5358d8e50c15b0c6a996ac"
              }}
              style={styles.ImageBackground_I3023_2_2973_1754}
            />
            <View style={styles.View_I3023_2_2973_1755}>
              <Text style={styles.Text_I3023_2_2973_1755}>Books</Text>
            </View>
          </View>
          <View style={styles.View_I3023_2_2973_1740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bda/5445/ee940766685df2247fb14717c92e4f48"
              }}
              style={styles.ImageBackground_I3023_2_2973_1741}
            />
            <View style={styles.View_I3023_2_2973_1742}>
              <Text style={styles.Text_I3023_2_2973_1742}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_3}>
        <View style={styles.View_I3023_3_2784_33814}>
          <View style={styles.View_I3023_3_2784_33814_2784_33798}>
            <View style={styles.View_I3023_3_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I3023_3_2784_33814_2784_33800}
            />
            <View style={styles.View_I3023_3_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I3023_3_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I3023_3_2784_33814_2784_33806}
          />
          <View style={styles.View_I3023_3_2784_33814_2784_33811}>
            <View style={styles.View_I3023_3_2784_33814_2784_33812}>
              <Text style={styles.Text_I3023_3_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_4}>
        <View style={styles.View_I3023_4_2784_33819}>
          <View style={styles.View_I3023_4_2784_33819_2784_33817} />
        </View>
      </View>
      <View style={styles.View_3023_20}>
        <View style={styles.View_3023_21} />
        <View style={styles.View_3023_22}>
          <View style={styles.View_3023_23}>
            <Text style={styles.Text_3023_23}>Main Title</Text>
          </View>
          <View style={styles.View_3023_24}>
            <Text style={styles.Text_3023_24}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_26}>
        <View style={styles.View_3023_27} />
        <View style={styles.View_3023_28}>
          <View style={styles.View_3023_29}>
            <Text style={styles.Text_3023_29}>Main Title</Text>
          </View>
          <View style={styles.View_3023_30}>
            <Text style={styles.Text_3023_30}>Meta Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_102}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5d1a/bcaf85e3bbfd416f7a506fad094354bd"
          }}
          style={styles.ImageBackground_I3023_102_2970_51}
        />
        <View style={styles.View_I3023_102_2970_52}>
          <Text text="" style={styles.Text_I3023_102_2970_52} />
        </View>
        <View style={styles.View_I3023_102_2970_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8fb/fcfd/a251e29a86900a1935153e834101d75f"
            }}
            style={styles.ImageBackground_I3023_102_2970_76}
          />
          <View style={styles.View_I3023_102_2970_77}>
            <Text style={styles.Text_I3023_102_2970_77}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_113}>
        <View style={styles.View_I3023_113_2326_429}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2ef/7369/4def3a65f9c9a4a205ccce78c8a77f3d"
            }}
            style={styles.ImageBackground_I3023_113_2326_429_2326_1955}
          />
          <View style={styles.View_I3023_113_2326_429_2326_1956}>
            <View style={styles.View_I3023_113_2326_429_2326_1958} />
            <View style={styles.View_I3023_113_2326_429_2326_1959}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/605f/f3d9/fd32b430f74e1b43fece4cabe8ef60a2"
                }}
                style={
                  styles.ImageBackground_I3023_113_2326_429_2326_1959_2209_12106
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I3023_113_2326_430}>
          <View style={styles.View_I3023_113_2326_431}>
            <Text style={styles.Text_I3023_113_2326_431}>Pablo Zulauf</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_335}>
        <View style={styles.View_3023_274}>
          <View style={styles.View_3023_222}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff4c/205a/1d957ccee41efaba22925f9ac099d399"
              }}
              style={styles.ImageBackground_I3023_222_1033_6818}
            />
            <View style={styles.View_I3023_222_1033_6819}>
              <Text style={styles.Text_I3023_222_1033_6819}>Chat</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3023_275}>
          <View style={styles.View_3023_276}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7963/d8f5/be3d7e54ebe7850c3dc27c1fdf2e4c2f"
              }}
              style={styles.ImageBackground_I3023_276_1033_6818}
            />
            <View style={styles.View_I3023_276_1033_6819}>
              <Text style={styles.Text_I3023_276_1033_6819}>Call</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3023_289}>
          <View style={styles.View_3023_290}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6db/b184/9c40b0c6de107767e715bd77cf7efc1a"
              }}
              style={styles.ImageBackground_I3023_290_1033_6818}
            />
            <View style={styles.View_I3023_290_1033_6819}>
              <Text style={styles.Text_I3023_290_1033_6819}>Video</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3023_303}>
          <View style={styles.View_3023_304}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51b1/d06b/2ad7df9fc34ef3ce0a58c5a60486b5b9"
              }}
              style={styles.ImageBackground_I3023_304_1033_6818}
            />
            <View style={styles.View_I3023_304_1033_6819}>
              <Text style={styles.Text_I3023_304_1033_6819}>Mail</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3023_317}>
        <View style={styles.View_I3023_317_2973_4978} />
        <View style={styles.View_I3023_317_2973_4979}>
          <Text style={styles.Text_I3023_317_2973_4979}>Posts</Text>
        </View>
        <View style={styles.View_I3023_317_2973_4980}>
          <Text style={styles.Text_I3023_317_2973_4980}>Videos</Text>
        </View>
        <View style={styles.View_I3023_317_2973_4981}>
          <Text style={styles.Text_I3023_317_2973_4981}>Photos</Text>
        </View>
      </View>
      <View style={styles.View_3023_336}>
        <Text style={styles.Text_3023_336}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3023_347: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("92.34972677595628%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_348: {
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
  View_3023_349: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_350: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3023_350: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_351: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_3023_351: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3023_2: {
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
  View_I3023_2_2973_1730: {
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
  View_I3023_2_2973_1731: {
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
  View_I3023_2_2973_1732: {
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
  View_I3023_2_2973_1732_2998_2033: {
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
  View_I3023_2_2973_1732_2998_2034: {
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
  View_I3023_2_2973_1732_2998_2035: {
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
  ImageBackground_I3023_2_2973_1732_2998_2036: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("0.3756831903926662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777343749999982%"),
    top: hp("1.2521879269125833%")
  },
  ImageBackground_I3023_2_2973_1732_2998_2037: {
    flexGrow: 1,
    width: wp("1.222222391764323%"),
    height: hp("1.3775045103062697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("0.12513874658471025%")
  },
  ImageBackground_I3023_2_2973_1732_2998_2038: {
    flexGrow: 1,
    width: wp("2.4444440205891924%"),
    height: hp("1.6279599705680472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1777343749999982%"),
    top: hp("0.6262273736338813%")
  },
  View_I3023_2_2973_1733: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3023_2_2973_1733: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_2_2973_1734: {
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
  ImageBackground_I3023_2_2973_1735: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.600000000000005%")
  },
  View_I3023_2_2973_1736: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3023_2_2973_1736: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_2_2973_1737: {
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
  View_I3023_2_2973_1738: {
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
  View_I3023_2_2973_1738_2998_2046: {
    flexGrow: 1,
    width: wp("5.377777608235677%"),
    height: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24440104166666288%"),
    top: hp("1.2521879269125833%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3023_2_2973_1738_2998_2047: {
    flexGrow: 1,
    width: wp("3.422222646077474%"),
    height: hp("0.5635244598805579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2222656249999915%"),
    top: hp("0.6886633367486468%")
  },
  ImageBackground_I3023_2_2973_1738_2998_2048: {
    flexGrow: 1,
    width: wp("1.9555555979410808%"),
    height: hp("0.43829692517473395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555989583333329%"),
    top: hp("0.2505443135245855%")
  },
  View_I3023_2_2973_1739: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3023_2_2973_1739: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_2_2973_1753: {
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
  ImageBackground_I3023_2_2973_1754: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_I3023_2_2973_1755: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3023_2_2973_1755: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_2_2973_1740: {
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
  ImageBackground_I3023_2_2973_1741: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  View_I3023_2_2973_1742: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.27868852459018%")
  },
  Text_I3023_2_2973_1742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3023_3: {
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
  View_I3023_3_2784_33814: {
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
  View_I3023_3_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68880208333333%"),
    top: hp("2.368030652322404%")
  },
  View_I3023_3_2784_33814_2784_33799: {
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
  ImageBackground_I3023_3_2784_33814_2784_33800: {
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
  View_I3023_3_2784_33814_2784_33801: {
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
  ImageBackground_I3023_3_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I3023_3_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I3023_3_2784_33814_2784_33811: {
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
  View_I3023_3_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I3023_3_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3023_4: {
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
  View_I3023_4_2784_33819: {
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
  View_I3023_4_2784_33819_2784_33817: {
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
  View_3023_20: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_21: {
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
  View_3023_22: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_23: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3023_23: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_24: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3023_24: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3023_26: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("81.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_27: {
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
  View_3023_28: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33333333333333%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_29: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3023_29: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_30: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%")
  },
  Text_3023_30: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3023_102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I3023_102_2970_51: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("1.3661202185792352%")
  },
  View_I3023_102_2970_52: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("1.3661202185792352%")
  },
  Text_I3023_102_2970_52: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I3023_102_2970_75: {
    flexGrow: 1,
    width: wp("20.266666666666666%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_102_2970_76: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3023_102_2970_77: {
    width: wp("11.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I3023_102_2970_77: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_113: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3023_113_2326_429: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_113_2326_429_2326_1955: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3023_113_2326_429_2326_1956: {
    flexGrow: 1,
    width: wp("29.25714111328125%"),
    height: hp("14.98828950475474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4381510416666714%"),
    top: hp("1.2489860826502746%")
  },
  View_I3023_113_2326_429_2326_1958: {
    width: wp("29.25714111328125%"),
    height: hp("14.98828950475474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_I3023_113_2326_429_2326_1959: {
    width: wp("29.25714111328125%"),
    height: hp("14.98828950475474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I3023_113_2326_429_2326_1959_2209_12106: {
    flexGrow: 1,
    width: wp("98.05713704427083%"),
    height: hp("33.48946076273266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-35.2%"),
    top: hp("-6.11819074453552%"),
    resizeMode: "cover"
  },
  View_I3023_113_2326_430: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.852459016393446%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3023_113_2326_431: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("-1.366120218579237%")
  },
  Text_I3023_113_2326_431: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_335: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("46.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3023_274: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3023_222: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_222_1033_6818: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%")
  },
  View_I3023_222_1033_6819: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  Text_I3023_222_1033_6819: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_275: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.11106770833333%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3023_276: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_276_1033_6818: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2000000000000028%"),
    top: hp("0%")
  },
  View_I3023_276_1033_6819: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  Text_I3023_276_1033_6819: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_289: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.35559895833334%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3023_290: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_290_1033_6818: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0666666666666558%"),
    top: hp("0%")
  },
  View_I3023_290_1033_6819: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  Text_I3023_290_1033_6819: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_303: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_3023_304: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3023_304_1033_6818: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666686%"),
    top: hp("0%")
  },
  View_I3023_304_1033_6819: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  Text_I3023_304_1033_6819: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_3023_317: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("61.74863387978142%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_I3023_317_2973_4978: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I3023_317_2973_4979: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("1.092896174863391%")
  },
  Text_I3023_317_2973_4979: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_317_2973_4980: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("1.092896174863391%")
  },
  Text_I3023_317_2973_4980: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I3023_317_2973_4981: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("1.092896174863391%")
  },
  Text_I3023_317_2973_4981: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3023_336: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("34.15300546448087%")
  },
  Text_3023_336: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
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
