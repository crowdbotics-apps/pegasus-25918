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
      <View style={styles.View_2198_34} />
      <View style={styles.View_2198_35}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ada7/9005/64f311077ec5df27077446336eb97643"
          }}
          style={styles.ImageBackground_I2198_35_1198_1062}
        />
      </View>
      <View style={styles.View_2198_39}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1185/862f/5916ddb79bbbb38cc817b5b72eb0adc8"
          }}
          style={styles.ImageBackground_I2198_39_1198_1054}
        />
      </View>
      <View style={styles.View_1680_12802}>
        <View style={styles.View_I1680_12802_1147_7817}>
          <View style={styles.View_I1680_12802_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_1680_12803}>
        <View style={styles.View_I1680_12803_1147_7797}>
          <View style={styles.View_I1680_12803_1147_7797_1147_7781}>
            <View style={styles.View_I1680_12803_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I1680_12803_1147_7797_1147_7783}
            />
            <View style={styles.View_I1680_12803_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I1680_12803_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I1680_12803_1147_7797_1147_7789}
          />
          <View style={styles.View_I1680_12803_1147_7797_1147_7794}>
            <View style={styles.View_I1680_12803_1147_7797_1147_7795}>
              <Text style={styles.Text_I1680_12803_1147_7797_1147_7795}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ec/afe2/44aeaba536b062264b1ce2830b8ab235"
        }}
        style={styles.ImageBackground_1680_12804}
      />
      <View style={styles.View_1680_12805}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baff/0721/cd0c6ee41966948cbb8e64e89d4e26e0"
          }}
          style={styles.ImageBackground_I1680_12805_890_368}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a5/fd1b/9302e2c9621085bcf25c25bd34c49f85"
        }}
        style={styles.ImageBackground_1680_12809}
      />
      <View style={styles.View_2198_0}>
        <View style={styles.View_I2198_0_1045_7055}>
          <View style={styles.View_I2198_0_1045_7057}>
            <Text style={styles.Text_I2198_0_1045_7057}>Search Email</Text>
          </View>
        </View>
        <View style={styles.View_I2198_0_1045_7058}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/291f/ad5c/f308d5994f1fd58ce49c56c42405b0c5"
            }}
            style={styles.ImageBackground_I2198_0_1045_7059}
          />
        </View>
      </View>
      <View style={styles.View_2198_23}>
        <View style={styles.View_I2198_23_103_657}>
          <View style={styles.View_I2198_23_103_656} />
          <View style={styles.View_I2198_23_103_645}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/69de/c137cfd116f26bbe1119c22c52b112b0"
              }}
              style={styles.ImageBackground_I2198_23_103_645_2327_25556}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2198_33}>
        <Text style={styles.Text_2198_33}>All INBOXES</Text>
      </View>
      <View style={styles.View_2198_43}>
        <Text style={styles.Text_2198_43}>Mail</Text>
      </View>
      <View style={styles.View_2198_44}>
        <Text style={styles.Text_2198_44}>Chat</Text>
      </View>
      <View style={styles.View_2200_12}>
        <View style={styles.View_2198_62}>
          <View style={styles.View_I2198_62_919_295} />
          <View style={styles.View_I2198_62_919_296}>
            <Text style={styles.Text_I2198_62_919_296}>AC</Text>
          </View>
        </View>
        <View style={styles.View_2198_72}>
          <Text style={styles.Text_2198_72}>Acme Corp.</Text>
        </View>
        <View style={styles.View_2198_75}>
          <Text style={styles.Text_2198_75}>6:05 PM</Text>
        </View>
        <View style={styles.View_2198_73}>
          <Text style={styles.Text_2198_73}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2198_74}>
          <Text style={styles.Text_2198_74}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2198_76}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2198_76_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_13}>
        <View style={styles.View_2200_14}>
          <View style={styles.View_I2200_14_919_295} />
          <View style={styles.View_I2200_14_919_296}>
            <Text style={styles.Text_I2200_14_919_296}>D</Text>
          </View>
        </View>
        <View style={styles.View_2200_15}>
          <Text style={styles.Text_2200_15}>Dingo Org.</Text>
        </View>
        <View style={styles.View_2200_16}>
          <Text style={styles.Text_2200_16}>12:05 AM</Text>
        </View>
        <View style={styles.View_2200_17}>
          <Text style={styles.Text_2200_17}>
            🔥 Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2200_18}>
          <Text style={styles.Text_2200_18}>Ut ad minim veniam...</Text>
        </View>
        <View style={styles.View_2200_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_19_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_27}>
        <View style={styles.View_2200_28}>
          <View style={styles.View_I2200_28_919_295} />
          <View style={styles.View_I2200_28_919_296}>
            <Text style={styles.Text_I2200_28_919_296}>O</Text>
          </View>
        </View>
        <View style={styles.View_2200_29}>
          <Text style={styles.Text_2200_29}>Omita</Text>
        </View>
        <View style={styles.View_2200_30}>
          <Text style={styles.Text_2200_30}>1:05 PM</Text>
        </View>
        <View style={styles.View_2200_31}>
          <Text style={styles.Text_2200_31}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2200_32}>
          <Text style={styles.Text_2200_32}>Ut enim minim veniam...</Text>
        </View>
        <View style={styles.View_2200_33}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_33_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_41}>
        <View style={styles.View_2200_42}>
          <View style={styles.View_I2200_42_919_295} />
          <View style={styles.View_I2200_42_919_296}>
            <Text style={styles.Text_I2200_42_919_296}>B</Text>
          </View>
        </View>
        <View style={styles.View_2200_43}>
          <Text style={styles.Text_2200_43}>Boat Cleaning</Text>
        </View>
        <View style={styles.View_2200_44}>
          <Text style={styles.Text_2200_44}>2:25 PM</Text>
        </View>
        <View style={styles.View_2200_45}>
          <Text style={styles.Text_2200_45}>Reprehenderit in voluptate...</Text>
        </View>
        <View style={styles.View_2200_46}>
          <Text style={styles.Text_2200_46}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2200_47}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_47_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_55}>
        <View style={styles.View_2200_56}>
          <View style={styles.View_I2200_56_919_295} />
          <View style={styles.View_I2200_56_919_296}>
            <Text style={styles.Text_I2200_56_919_296}>NP</Text>
          </View>
        </View>
        <View style={styles.View_2200_57}>
          <Text style={styles.Text_2200_57}>Nordic</Text>
        </View>
        <View style={styles.View_2200_58}>
          <Text style={styles.Text_2200_58}>3:05 PM</Text>
        </View>
        <View style={styles.View_2200_59}>
          <Text style={styles.Text_2200_59}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2200_60}>
          <Text style={styles.Text_2200_60}>Ut enim ad veniam...</Text>
        </View>
        <View style={styles.View_2200_61}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_61_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_69}>
        <View style={styles.View_2200_70}>
          <View style={styles.View_I2200_70_919_295} />
          <View style={styles.View_I2200_70_919_296}>
            <Text style={styles.Text_I2200_70_919_296}>S</Text>
          </View>
        </View>
        <View style={styles.View_2200_71}>
          <Text style={styles.Text_2200_71}>Siren</Text>
        </View>
        <View style={styles.View_2200_72}>
          <Text style={styles.Text_2200_72}>9:44 PM</Text>
        </View>
        <View style={styles.View_2200_73}>
          <Text style={styles.Text_2200_73}>
            🎹 Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2200_74}>
          <Text style={styles.Text_2200_74}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2200_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_75_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_83}>
        <View style={styles.View_2200_84}>
          <View style={styles.View_I2200_84_103_657}>
            <View style={styles.View_I2200_84_103_656} />
            <View style={styles.View_I2200_84_103_645}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bb8/5f53/23224190ad1324dee1b333d66a224929"
                }}
                style={styles.ImageBackground_I2200_84_103_645_2327_25556}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2200_85}>
          <Text style={styles.Text_2200_85}>Jane Doe</Text>
        </View>
        <View style={styles.View_2200_86}>
          <Text style={styles.Text_2200_86}>11:28 PM</Text>
        </View>
        <View style={styles.View_2200_87}>
          <Text style={styles.Text_2200_87}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2200_88}>
          <Text style={styles.Text_2200_88}>Ut enim veniam...</Text>
        </View>
        <View style={styles.View_2200_89}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_89_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_97}>
        <View style={styles.View_2200_98}>
          <View style={styles.View_I2200_98_919_295} />
          <View style={styles.View_I2200_98_919_296}>
            <Text style={styles.Text_I2200_98_919_296}>e</Text>
          </View>
        </View>
        <View style={styles.View_2200_99}>
          <Text style={styles.Text_2200_99}>epay</Text>
        </View>
        <View style={styles.View_2200_100}>
          <Text style={styles.Text_2200_100}>9:12 AM</Text>
        </View>
        <View style={styles.View_2200_101}>
          <Text style={styles.Text_2200_101}>
            Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2200_102}>
          <Text style={styles.Text_2200_102}>Ut enim ad minim...</Text>
        </View>
        <View style={styles.View_2200_103}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2200_103_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2200_342}>
        <View style={styles.View_I2200_342_2151_14601}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5d1a/bcaf85e3bbfd416f7a506fad094354bd"
            }}
            style={styles.ImageBackground_I2200_342_2151_14601_1198_165}
          />
        </View>
        <View style={styles.View_I2200_342_2151_14602}>
          <Text style={styles.Text_I2200_342_2151_14602}>Compose</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2198_34: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(33, 38, 53, 1)"
  },
  View_2198_35: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2198_35_1198_1062: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2198_39: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2198_39_1198_1054: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1680_12802: {
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
  View_I1680_12802_1147_7817: {
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
  View_I1680_12802_1147_7817_1147_7815: {
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
  View_1680_12803: {
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
  View_I1680_12803_1147_7797: {
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
  View_I1680_12803_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I1680_12803_1147_7797_1147_7782: {
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
  ImageBackground_I1680_12803_1147_7797_1147_7783: {
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
  View_I1680_12803_1147_7797_1147_7784: {
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
  ImageBackground_I1680_12803_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I1680_12803_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I1680_12803_1147_7797_1147_7794: {
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
  View_I1680_12803_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I1680_12803_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_1680_12804: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_1680_12805: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1680_12805_890_368: {
    flexGrow: 1,
    width: wp("5.924825032552084%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23756510416666288%"),
    top: hp("0.12167008196721163%")
  },
  ImageBackground_1680_12809: {
    width: wp("0%"),
    height: hp("4.098360655737705%"),
    top: hp("94.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_2198_0: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.786885245901639%"),
    backgroundColor: "rgba(33, 38, 53, 1)"
  },
  View_I2198_0_1045_7055: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2198_0_1045_7057: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475397%")
  },
  Text_I2198_0_1045_7057: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2198_0_1045_7058: {
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
  ImageBackground_I2198_0_1045_7059: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2198_23: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2198_23_103_657: {
    flexGrow: 1,
    width: wp("9.142856852213542%"),
    height: hp("4.683840600519233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7619140624999972%"),
    top: hp("0.39035817964480835%")
  },
  View_I2198_23_103_656: {
    width: wp("9.142856852213542%"),
    height: hp("4.683840600519233%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 512,
    borderTopRightRadius: 512,
    borderBottomLeftRadius: 512,
    borderBottomRightRadius: 512
  },
  View_I2198_23_103_645: {
    width: wp("9.142856852213542%"),
    height: hp("4.683840600519233%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2198_23_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("20.375%"),
    height: hp("15.643294912869813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.428580729166669%"),
    top: hp("-2.268773480191257%"),
    resizeMode: "cover"
  },
  View_2198_33: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17.759562841530055%")
  },
  Text_2198_33: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_43: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("104.0983606557377%")
  },
  Text_2198_43: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_44: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("104.0983606557377%")
  },
  Text_2198_44: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_12: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("24.453551912568305%")
  },
  View_2198_62: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2198_62_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.46826972336065253%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2198_62_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2198_62_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_72: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2198_72: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_75: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2198_75: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_73: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.00546448087432%")
  },
  Text_2198_73: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_74: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2198_74: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2198_76: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2198_76_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_13: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("33.46994535519126%")
  },
  View_2200_14: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_14_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(255, 93, 161, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_14_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.3418822575136673%")
  },
  Text_I2200_14_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_15: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_15: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_16: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_2200_16: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_17: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743163%")
  },
  Text_2200_17: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_18: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2200_18: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_19: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_19_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_27: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("42.48633879781421%")
  },
  View_2200_28: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_28_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606561%"),
    backgroundColor: "rgba(6, 62, 249, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_28_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2200_28_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_29: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_29: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_30: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("0.4098360655737636%")
  },
  Text_2200_30: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_31: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2200_31: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_32: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.4644808743169335%")
  },
  Text_2200_32: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_33: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_33_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_41: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("51.502732240437155%")
  },
  View_2200_42: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_42_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606419%"),
    backgroundColor: "rgba(238, 238, 44, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_42_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2200_42_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_43: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_43: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_44: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%"),
    top: hp("0.40983606557377783%")
  },
  Text_2200_44: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_45: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743234%")
  },
  Text_2200_45: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_46: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316948%")
  },
  Text_2200_46: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_47: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_47_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_55: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("60.5191256830601%")
  },
  View_2200_56: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_56_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606561%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_56_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2200_56_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_57: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_57: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_58: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%"),
    top: hp("0.40983606557377783%")
  },
  Text_2200_58: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_59: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743234%")
  },
  Text_2200_59: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_60: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2200_60: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_61: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_61_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_69: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("69.53551912568307%")
  },
  View_2200_70: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_70_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_70_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2200_70_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_71: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_71: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_72: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2200_72: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_73: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2200_73: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_74: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.4644808743169335%")
  },
  Text_2200_74: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_75: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_75_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_83: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("78.55191256830601%")
  },
  View_2200_84: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_84_103_657: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606632%")
  },
  View_I2200_84_103_656: {
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 512,
    borderTopRightRadius: 512,
    borderBottomLeftRadius: 512,
    borderBottomRightRadius: 512
  },
  View_I2200_84_103_645: {
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2200_84_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("24.449995930989584%"),
    height: hp("18.77195431235058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.914290364583334%"),
    top: hp("-2.722368084016395%"),
    resizeMode: "cover"
  },
  View_2200_85: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_85: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_86: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2200_86: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_87: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2200_87: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_88: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316948%")
  },
  Text_2200_88: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_89: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_89_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_97: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("87.56830601092896%")
  },
  View_2200_98: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2200_98_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(255, 93, 161, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2200_98_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142903645833327%"),
    top: hp("2.34188225751366%")
  },
  Text_I2200_98_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_99: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2200_99: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_100: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_2200_100: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_101: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2200_101: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_102: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.737704918032776%")
  },
  Text_2200_102: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2200_103: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_103_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2200_342: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.8%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(33, 38, 53, 1)"
  },
  View_I2200_342_2151_14601: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2200_342_2151_14601_1198_165: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2200_342_2151_14602: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2.185792349726782%")
  },
  Text_I2200_342_2151_14602: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
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
