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
      <View style={styles.View_1168_315}>
        <View style={styles.View_1168_316} />
        <View style={styles.View_1168_317} />
        <View style={styles.View_1168_318} />
      </View>
      <View style={styles.View_1168_319}>
        <View style={styles.View_I1168_319_1168_778}>
          <View style={styles.View_I1168_319_1168_779}>
            <View style={styles.View_I1168_319_1168_779_547_970}>
              <Text style={styles.Text_I1168_319_1168_779_547_970}>
                - $ 38.67
              </Text>
            </View>
          </View>
          <View style={styles.View_I1168_319_1168_780}>
            <View style={styles.View_I1168_319_1168_781}>
              <Text style={styles.Text_I1168_319_1168_781}>Tea &amp; Jam</Text>
            </View>
            <View style={styles.View_I1168_319_1168_782}>
              <Text style={styles.Text_I1168_319_1168_782}>
                22 Apr, 8:32 am
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1168_320}>
        <View style={styles.View_I1168_320_1168_778}>
          <View style={styles.View_I1168_320_1168_779}>
            <View style={styles.View_I1168_320_1168_779_547_970}>
              <Text style={styles.Text_I1168_320_1168_779_547_970}>
                - $ 38.67
              </Text>
            </View>
          </View>
          <View style={styles.View_I1168_320_1168_780}>
            <View style={styles.View_I1168_320_1168_781}>
              <Text style={styles.Text_I1168_320_1168_781}>Local Roots</Text>
            </View>
            <View style={styles.View_I1168_320_1168_782}>
              <Text style={styles.Text_I1168_320_1168_782}>
                18 Apr, 6:26 pm
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1168_321}>
        <View style={styles.View_I1168_321_1168_778}>
          <View style={styles.View_I1168_321_1168_779}>
            <View style={styles.View_I1168_321_1168_779_547_970}>
              <Text style={styles.Text_I1168_321_1168_779_547_970}>
                - $ 21.21
              </Text>
            </View>
          </View>
          <View style={styles.View_I1168_321_1168_780}>
            <View style={styles.View_I1168_321_1168_781}>
              <Text style={styles.Text_I1168_321_1168_781}>Gas</Text>
            </View>
            <View style={styles.View_I1168_321_1168_782}>
              <Text style={styles.Text_I1168_321_1168_782}>
                17 Apr, 11:08 am
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1168_322}>
        <View style={styles.View_I1168_322_1168_778}>
          <View style={styles.View_I1168_322_1168_779}>
            <View style={styles.View_I1168_322_1168_779_547_970}>
              <Text style={styles.Text_I1168_322_1168_779_547_970}>
                - $ 83.01
              </Text>
            </View>
          </View>
          <View style={styles.View_I1168_322_1168_780}>
            <View style={styles.View_I1168_322_1168_781}>
              <Text style={styles.Text_I1168_322_1168_781}>Kroger</Text>
            </View>
            <View style={styles.View_I1168_322_1168_782}>
              <Text style={styles.Text_I1168_322_1168_782}>
                02 Jun, 2:29 pm
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1168_323}>
        <View style={styles.View_1168_324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3118/ea60/aebedbda52271a5fc8ff16836738d9db"
            }}
            style={styles.ImageBackground_1168_325}
          />
        </View>
        <View style={styles.View_1168_326}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/043e/495d/4fbcef91444497456f3805bc469689d0"
            }}
            style={styles.ImageBackground_1168_327}
          />
        </View>
        <View style={styles.View_1168_328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cf5/88d3/e41e76a31c5744af06c256f89130d6d9"
            }}
            style={styles.ImageBackground_1168_329}
          />
        </View>
        <View style={styles.View_1168_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d7/d1cb/01a4be003817bbd25dcc1218416b4d3c"
            }}
            style={styles.ImageBackground_1168_331}
          />
        </View>
      </View>
      <View style={styles.View_1168_332}>
        <Text style={styles.Text_1168_332}>Accounts</Text>
      </View>
      <View style={styles.View_1178_1299}>
        <View style={styles.View_I1178_1299_825_4395}>
          <View style={styles.View_I1178_1299_825_4395_527_355}>
            <View style={styles.View_I1178_1299_825_4395_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I1178_1299_825_4396}>
          <View style={styles.View_I1178_1299_825_4396_1129_318} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca8/c965/88244a88c4ea2aa8ca90b3b71749fa80"
            }}
            style={styles.ImageBackground_I1178_1299_825_4396_1129_319}
          />
        </View>
        <View style={styles.View_I1178_1299_825_4397}>
          <Text style={styles.Text_I1178_1299_825_4397}>•••• 6789</Text>
        </View>
        <View style={styles.View_I1178_1299_825_4398}>
          <Text style={styles.Text_I1178_1299_825_4398}>Jane Walker</Text>
        </View>
        <View style={styles.View_I1178_1299_825_4399}>
          <Text style={styles.Text_I1178_1299_825_4399}>Debit</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/f640/e4a3001ebd29cce8d7f75db55b2c84d2"
          }}
          style={styles.ImageBackground_I1178_1299_825_4400}
        />
        <View style={styles.View_I1178_1299_825_4401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12b5/6990/35274fa74e7e75a7cbb058e1c4bfdfbc"
            }}
            style={styles.ImageBackground_I1178_1299_825_4401_611_341}
          />
        </View>
      </View>
      <View style={styles.View_1168_498}>
        <View style={styles.View_I1168_498_825_4350}>
          <View style={styles.View_I1168_498_825_4350_527_355}>
            <View style={styles.View_I1168_498_825_4350_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I1168_498_825_4351}>
          <View style={styles.View_I1168_498_825_4351_1129_318} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca8/c965/88244a88c4ea2aa8ca90b3b71749fa80"
            }}
            style={styles.ImageBackground_I1168_498_825_4351_1129_319}
          />
        </View>
        <View style={styles.View_I1168_498_825_4352}>
          <Text style={styles.Text_I1168_498_825_4352}>•••• 6789</Text>
        </View>
        <View style={styles.View_I1168_498_825_4353}>
          <Text style={styles.Text_I1168_498_825_4353}>Jane Walker</Text>
        </View>
        <View style={styles.View_I1168_498_825_4354}>
          <Text style={styles.Text_I1168_498_825_4354}>Credit</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2473/295d/c8804fc0ca4ea29d7eb2f683709ee6c7"
          }}
          style={styles.ImageBackground_I1168_498_825_4355}
        />
        <View style={styles.View_I1168_498_825_4356}>
          <View style={styles.View_I1168_498_825_4356_611_301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdbb/d447/6b1e48f4d6998aac4585dcda27044887"
              }}
              style={styles.ImageBackground_I1168_498_825_4356_611_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c87/eba1/0ab3821d75c87686047cb67e1ca001b7"
              }}
              style={styles.ImageBackground_I1168_498_825_4356_611_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd9/c071/7329eb9a5e435077bf4cc06634700c4d"
              }}
              style={styles.ImageBackground_I1168_498_825_4356_611_308}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1168_872}>
        <Text style={styles.Text_1168_872}>Add New</Text>
      </View>
      <View style={styles.View_1168_671}>
        <View style={styles.View_I1168_671_1045_7055}>
          <View style={styles.View_I1168_671_1045_7057}>
            <Text style={styles.Text_I1168_671_1045_7057}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I1168_671_1045_7058}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4470/030c/30ab3efce778506b3d6312b7138f5cfc"
            }}
            style={styles.ImageBackground_I1168_671_1045_7059}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df2/5098/58722ea5e9f04b5c9a9040180d3c992a"
        }}
        style={styles.ImageBackground_1168_683}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1168_315: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1168_316: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1168_317: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1168_318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1168_319: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_319_1168_778: {
    flexGrow: 1,
    width: wp("87.14052734375%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.229508196721305%")
  },
  View_I1168_319_1168_779: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.80716145833333%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_319_1168_779_547_970: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.9562841530054627%")
  },
  Text_I1168_319_1168_779_547_970: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_319_1168_780: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_319_1168_781: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1168_319_1168_781: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_319_1168_782: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%")
  },
  Text_I1168_319_1168_782: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1168_320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_320_1168_778: {
    flexGrow: 1,
    width: wp("87.14052734375%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.2295081967213122%")
  },
  View_I1168_320_1168_779: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.80716145833333%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_320_1168_779_547_970: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.9562841530054698%")
  },
  Text_I1168_320_1168_779_547_970: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_320_1168_780: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_320_1168_781: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1168_320_1168_781: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_320_1168_782: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_I1168_320_1168_782: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1168_321: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.23497267759562%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_321_1168_778: {
    flexGrow: 1,
    width: wp("87.14052734375%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.2295081967213122%")
  },
  View_I1168_321_1168_779: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.20716145833333%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_321_1168_779_547_970: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.9562841530054698%")
  },
  Text_I1168_321_1168_779_547_970: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_321_1168_780: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_321_1168_781: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1168_321_1168_781: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_321_1168_782: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_I1168_321_1168_782: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1168_322: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_322_1168_778: {
    flexGrow: 1,
    width: wp("87.14052734375%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.2295081967213122%")
  },
  View_I1168_322_1168_779: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.60716145833333%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_322_1168_779_547_970: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.9562841530054556%")
  },
  Text_I1168_322_1168_779_547_970: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_322_1168_780: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_322_1168_781: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1168_322_1168_781: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_322_1168_782: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%")
  },
  Text_I1168_322_1168_782: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1168_323: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1168_324: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1168_325: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666665%")
  },
  View_1168_326: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1168_327: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_1168_328: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.73333333333334%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1168_329: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  View_1168_330: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1168_331: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_1168_332: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.098360655737705%")
  },
  Text_1168_332: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1178_1299: {
    width: wp("64.28571370442708%"),
    minWidth: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1178_1299_825_4395: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1178_1299_825_4395_527_355: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1178_1299_825_4395_527_355_4_229: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 234, 161, 1)",
    borderTopLeftRadius: 8.571428298950195,
    borderTopRightRadius: 8.571428298950195,
    borderBottomLeftRadius: 8.571428298950195,
    borderBottomRightRadius: 8.571428298950195
  },
  View_I1178_1299_825_4396: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("3.2201404779986604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7142578125%"),
    top: hp("6.001056608606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1178_1299_825_4396_1129_318: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("3.2201404779986604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 249, 239, 1)",
    borderColor: "rgba(244, 183, 64, 1)",
    borderWidth: 1.6071428060531616,
    borderTopLeftRadius: 4.285714149475098,
    borderTopRightRadius: 4.285714149475098,
    borderBottomLeftRadius: 4.285714149475098,
    borderBottomRightRadius: 4.285714149475098
  },
  ImageBackground_I1178_1299_825_4396_1129_319: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("2.4151054236406835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006510416666749563%"),
    top: hp("0.4026319159836085%")
  },
  View_I1178_1299_825_4397: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.00000000000001%"),
    top: hp("5.122950819672134%")
  },
  Text_I1178_1299_825_4397: {
    color: "rgba(10, 114, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1178_1299_825_4398: {
    flexGrow: 1,
    width: wp("26.85714111328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7142578125%"),
    top: hp("12.880485826502735%")
  },
  Text_I1178_1299_825_4398: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1178_1299_825_4399: {
    flexGrow: 1,
    width: wp("26.85714111328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.7142578125%"),
    top: hp("0.4391863046448101%")
  },
  Text_I1178_1299_825_4399: {
    color: "rgba(10, 114, 119, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I1178_1299_825_4400: {
    flexGrow: 1,
    width: wp("5.714285278320313%"),
    height: hp("2.927400245041144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.714322916666669%"),
    top: hp("6.147540983606557%")
  },
  View_I1178_1299_825_4401: {
    flexGrow: 1,
    width: wp("18.738096110026042%"),
    height: hp("6.776070725070975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.85716145833333%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1178_1299_825_4401_611_341: {
    flexGrow: 1,
    width: wp("13.11666768391927%"),
    height: hp("2.2076294070384543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.645312500000003%"),
    top: hp("2.2871840846994544%")
  },
  View_1168_498: {
    width: wp("64.28571370442708%"),
    minWidth: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_498_825_4350: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_498_825_4350_527_355: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_498_825_4350_527_355_4_229: {
    flexGrow: 1,
    width: wp("64.28571370442708%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(19, 153, 160, 1)",
    borderTopLeftRadius: 8.571428298950195,
    borderTopRightRadius: 8.571428298950195,
    borderBottomLeftRadius: 8.571428298950195,
    borderBottomRightRadius: 8.571428298950195
  },
  View_I1168_498_825_4351: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("3.2201404779986604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.714257812499994%"),
    top: hp("6.001056608606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_498_825_4351_1129_318: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("3.2201404779986604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 249, 239, 1)",
    borderColor: "rgba(244, 183, 64, 1)",
    borderWidth: 1.6071428060531616,
    borderTopLeftRadius: 4.285714149475098,
    borderTopRightRadius: 4.285714149475098,
    borderBottomLeftRadius: 4.285714149475098,
    borderBottomRightRadius: 4.285714149475098
  },
  ImageBackground_I1168_498_825_4351_1129_319: {
    flexGrow: 1,
    width: wp("7.8571426391601555%"),
    height: hp("2.4151054236406835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006510416667993013%"),
    top: hp("0.4026319159836085%")
  },
  View_I1168_498_825_4352: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("5.122950819672134%")
  },
  Text_I1168_498_825_4352: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_498_825_4353: {
    flexGrow: 1,
    width: wp("26.85714111328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.714257812499994%"),
    top: hp("12.880485826502735%")
  },
  Text_I1168_498_825_4353: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1168_498_825_4354: {
    flexGrow: 1,
    width: wp("26.85714111328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.714257812499994%"),
    top: hp("0.7318882342896202%")
  },
  Text_I1168_498_825_4354: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I1168_498_825_4355: {
    flexGrow: 1,
    width: wp("5.714285278320313%"),
    height: hp("2.927400245041144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.714322916666674%"),
    top: hp("6.147540983606557%")
  },
  View_I1168_498_825_4356: {
    flexGrow: 1,
    width: wp("18.738096110026042%"),
    height: hp("6.776070725070975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.85716145833332%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_498_825_4356_611_301: {
    flexGrow: 1,
    width: wp("12.321944173177084%"),
    height: hp("3.7833831349357228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3067057291666657%"),
    top: hp("1.4202847506830594%")
  },
  ImageBackground_I1168_498_825_4356_611_302: {
    width: wp("12.321944173177084%"),
    height: hp("3.7833445710562614%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1168_498_825_4356_611_305: {
    width: wp("6.160960896809896%"),
    height: hp("3.7833060071768%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.160937500000017%")
  },
  ImageBackground_I1168_498_825_4356_611_308: {
    width: wp("2.6259521484375%"),
    height: hp("2.8795114631861285%"),
    top: hp("0.4519936816939918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.847981770833343%")
  },
  View_1168_872: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.021857923497267%")
  },
  Text_1168_872: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1168_671: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("49.31693989071038%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_I1168_671_1045_7055: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1168_671_1045_7057: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1168_671_1045_7057: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1168_671_1045_7058: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1168_671_1045_7059: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  ImageBackground_1168_683: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%")
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
