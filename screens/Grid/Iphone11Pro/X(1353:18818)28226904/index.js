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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ecd/2ae7/882233b2584b3c84f77371a8677dc365"
        }}
        style={styles.ImageBackground_1353_18819}
      />
      <View style={styles.View_1353_18820} />
      <View style={styles.View_1353_18821}>
        <View style={styles.View_I1353_18821_1147_7817}>
          <View style={styles.View_I1353_18821_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_1353_18822}>
        <View style={styles.View_I1353_18822_1147_7797}>
          <View style={styles.View_I1353_18822_1147_7797_1147_7781}>
            <View style={styles.View_I1353_18822_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I1353_18822_1147_7797_1147_7783}
            />
            <View style={styles.View_I1353_18822_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I1353_18822_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I1353_18822_1147_7797_1147_7789}
          />
          <View style={styles.View_I1353_18822_1147_7797_1147_7794}>
            <View style={styles.View_I1353_18822_1147_7797_1147_7795}>
              <Text style={styles.Text_I1353_18822_1147_7797_1147_7795}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/1d13/834313a41b82aa6e9dd077d1baf22ef1"
        }}
        style={styles.ImageBackground_1353_18823}
      />
      <View style={styles.View_1353_18824}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/8b0b/f0d9bbcfe396738cc3308c9aea6a07c6"
          }}
          style={styles.ImageBackground_I1353_18824_890_368}
        />
      </View>
      <View style={styles.View_1353_18825}>
        <Text style={styles.Text_1353_18825}>ShareRide</Text>
      </View>
      <View style={styles.View_1353_18826}>
        <View style={styles.View_I1353_18826_612_46}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b36/9057/612df5ed3c2b6df92fcfd19bc29e1aae"
            }}
            style={styles.ImageBackground_I1353_18826_612_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/598d/618a/fc5c7ff5ebe640ca46fa310a342a70f3"
            }}
            style={styles.ImageBackground_I1353_18826_612_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ee/eda1/44803fb5b1fda3bf13e2c68bd111dc49"
            }}
            style={styles.ImageBackground_I1353_18826_612_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd35/ae21/1100276b730900cae849f2722e59342b"
            }}
            style={styles.ImageBackground_I1353_18826_612_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df11/6bb7/00d1f4f2a3ae7387412ad28083ce27db"
            }}
            style={styles.ImageBackground_I1353_18826_612_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c9c/6e34/d39075a42f0ed5aa7ec237231243a6c8"
            }}
            style={styles.ImageBackground_I1353_18826_612_54}
          />
          <View style={styles.View_I1353_18826_612_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690a/5cdd/c704e5bfa80d0ce77354eb5200684d43"
              }}
              style={styles.ImageBackground_I1353_18826_612_56}
            />
            <View style={styles.View_I1353_18826_612_57} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8586/6ca8/635ef5ac65173479345757ef77f1539c"
            }}
            style={styles.ImageBackground_I1353_18826_612_58}
          />
        </View>
        <View style={styles.View_I1353_18826_612_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/256b/1acd/de81798287502acb1ca85142d82f6289"
            }}
            style={styles.ImageBackground_I1353_18826_612_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/108d/2a2c/e689cac6d7c409842c415d405f900844"
            }}
            style={styles.ImageBackground_I1353_18826_612_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4fc/561e/aa1c55240c36bf460190d6e22adbbe5f"
            }}
            style={styles.ImageBackground_I1353_18826_612_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a217/60e9/65df25fbf93c06cab2e8c088fd63837d"
            }}
            style={styles.ImageBackground_I1353_18826_612_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d1a/cb55/10029849a8c34da888137d87ec93bcde"
            }}
            style={styles.ImageBackground_I1353_18826_612_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/bf7a/3f6d16da3df1a5f22267b38932eaca6b"
            }}
            style={styles.ImageBackground_I1353_18826_612_67}
          />
          <View style={styles.View_I1353_18826_612_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d159/7457/2bcedc71f4d1159feff9ca1f2b68a4a3"
              }}
              style={styles.ImageBackground_I1353_18826_612_69}
            />
            <View style={styles.View_I1353_18826_612_70} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21de/c50c/6224f64820159a87a23841faa625a311"
            }}
            style={styles.ImageBackground_I1353_18826_612_71}
          />
        </View>
      </View>
      <View style={styles.View_1353_18827}>
        <View style={styles.View_I1353_18827_612_46}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/149d/d2ac/8180edaefcb9558197b674db5eee7470"
            }}
            style={styles.ImageBackground_I1353_18827_612_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33b/3323/a8747e2871d5b2024abe9786bfd96ea3"
            }}
            style={styles.ImageBackground_I1353_18827_612_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69a/7f46/872b09ba3f6d4f7af7652b4d621287d6"
            }}
            style={styles.ImageBackground_I1353_18827_612_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b04/97e0/fc92d54b2dcd0a6c25e36439d3b36762"
            }}
            style={styles.ImageBackground_I1353_18827_612_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd2d/f30b/8a1939d9706886292391a597b2aeddf7"
            }}
            style={styles.ImageBackground_I1353_18827_612_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a52b/586e/2f8c341ed67f75e6e359f302c4b1a1a8"
            }}
            style={styles.ImageBackground_I1353_18827_612_54}
          />
          <View style={styles.View_I1353_18827_612_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef5/dd48/aa9f94078d78ac6631901bbf6a6d7d60"
              }}
              style={styles.ImageBackground_I1353_18827_612_56}
            />
            <View style={styles.View_I1353_18827_612_57} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038b/748b/5285656a02c619356eae93db8578e1cd"
            }}
            style={styles.ImageBackground_I1353_18827_612_58}
          />
        </View>
        <View style={styles.View_I1353_18827_612_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9285/9e07/b8ac8efb2ba278a1073dc18189200f9a"
            }}
            style={styles.ImageBackground_I1353_18827_612_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/797c/9a6e/815805ee9793c7105cb827bb1ada2f88"
            }}
            style={styles.ImageBackground_I1353_18827_612_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/7913/2d3fd6a22dc9ea0be4a13309f1095130"
            }}
            style={styles.ImageBackground_I1353_18827_612_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc39/2d25/4348f8c0583bc0903c410ce139ca1768"
            }}
            style={styles.ImageBackground_I1353_18827_612_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84a/7354/f078b90b69fedf9d9ed986b99299ebca"
            }}
            style={styles.ImageBackground_I1353_18827_612_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/083f/49d6/09c39833e7e3241781434e86ac3b06ef"
            }}
            style={styles.ImageBackground_I1353_18827_612_67}
          />
          <View style={styles.View_I1353_18827_612_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34de/170e/d66cba6ef1c6279e8083b269e86af11c"
              }}
              style={styles.ImageBackground_I1353_18827_612_69}
            />
            <View style={styles.View_I1353_18827_612_70} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e6c/c46f/5291e0eb2f101870a5f4e1a0a2482a3a"
            }}
            style={styles.ImageBackground_I1353_18827_612_71}
          />
        </View>
      </View>
      <View style={styles.View_1353_18828}>
        <View style={styles.View_I1353_18828_1124_6629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0faa/8178/5e70c204cec1287808a00e6b0541cc3c"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6630}
          />
          <View style={styles.View_I1353_18828_1124_6631}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b14/428f/dcca4fccfbf1637c746c3d83fe237056"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8334/abe2/95380c78084e7a733a29abd15da90fa7"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f59/76f6/b18084b2efa411fec65b1deeb1bd6e5f"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e73/e1dd/e55f35ba0f8e07b4de87a78e1a81f3ac"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af8/6c56/27bcc1639c1f1cc0d068994b46d35657"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6638}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1700/cf01/c077734d9b81a1cb66155b02c976f94d"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ff/a460/20753928047c29c99f3dbbfba40e7822"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b73/b6df/b119c5add40edc8a7ede1145560fd3c8"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6641}
          />
        </View>
        <View style={styles.View_I1353_18828_1124_6642}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd8f/af3a/1956ba89f21f8bfdf1b7ae8f14f3d84d"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6643}
          />
          <View style={styles.View_I1353_18828_1124_6644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9883/0418/59d72231ac97ae2811fdd9ae00bcd390"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de5/9ce6/cf2f80e05e38f8b1711587e389a4e5de"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d303/d1d1/1504da8c939cec2ac48d0eb4373b5d72"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea87/47b5/f5e0312261b3973a7cc8a7f27362d7eb"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6648}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7528/d2ce/422450c8808eeeb5c798bacbb989d9d0"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6651}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f13/9a1b/1f3d013edc548f6079036226ef4ea08d"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9354/7259/95ab546ed21d235dfa20cbd58fda99db"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6653}
          />
          <View style={styles.View_I1353_18828_1124_6654}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5940/29ed/7b1539b1a6dea96f3de3084f6668b2c4"
              }}
              style={styles.ImageBackground_I1353_18828_1124_6655}
            />
            <View style={styles.View_I1353_18828_1124_6656} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a8/ec56/adb1182383023a9237017ee29c310575"
            }}
            style={styles.ImageBackground_I1353_18828_1124_6657}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a5b/1ba9/9ef236a80cfe4fcd2205f9534e268044"
        }}
        style={styles.ImageBackground_1353_18829}
      />
      <View style={styles.View_1353_18830}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9008/1f15/13a60d2dc5e43f226f6b2be5da0317cc"
          }}
          style={styles.ImageBackground_I1353_18830_890_409}
        />
      </View>
      <View style={styles.View_1353_18831}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9008/1f15/13a60d2dc5e43f226f6b2be5da0317cc"
          }}
          style={styles.ImageBackground_I1353_18831_890_409}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b7/3947/8a537d095aceeebd2c785ff39330fd69"
        }}
        style={styles.ImageBackground_1353_18832}
      />
      <View style={styles.View_1353_18833}>
        <View style={styles.View_1353_18834}>
          <View style={styles.View_1353_18835}>
            <View style={styles.View_1353_18836} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a5/fd1b/9302e2c9621085bcf25c25bd34c49f85"
          }}
          style={styles.ImageBackground_1353_18837}
        />
        <View style={styles.View_1353_18838}>
          <View style={styles.View_1353_18839}>
            <View style={styles.View_I1353_18839_1198_2104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
                }}
                style={styles.ImageBackground_I1353_18839_1198_2104_890_409}
              />
            </View>
          </View>
          <View style={styles.View_1353_18840}>
            <Text style={styles.Text_1353_18840}>Blue Bottle Coffee</Text>
          </View>
        </View>
        <View style={styles.View_1353_18841}>
          <View style={styles.View_1353_18842}>
            <View style={styles.View_I1353_18842_1198_2104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
                }}
                style={styles.ImageBackground_I1353_18842_1198_2104_890_409}
              />
            </View>
          </View>
          <View style={styles.View_1353_18843}>
            <Text style={styles.Text_1353_18843}>WeWork Coworking Space</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1353_18844}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9387/7136/03c9a8e9daec6cc5a52a566f47efa4f2"
          }}
          style={styles.ImageBackground_I1353_18844_478_380}
        />
        <View style={styles.View_I1353_18844_478_381}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I1353_18844_478_381_1078_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb78/9788/85f5b1335dd9b80b2f1dec2eae0da1ce"
            }}
            style={styles.ImageBackground_I1353_18844_478_381_1078_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb78/9788/85f5b1335dd9b80b2f1dec2eae0da1ce"
            }}
            style={styles.ImageBackground_I1353_18844_478_381_1078_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/033f/3371/18f388ed16de2556478559f8b3128440"
            }}
            style={styles.ImageBackground_I1353_18844_478_381_1078_66}
          />
        </View>
      </View>
      <View style={styles.View_1353_18845}>
        <View style={styles.View_I1353_18845_1147_7315}>
          <View style={styles.View_I1353_18845_1147_7316} />
        </View>
        <View style={styles.View_I1353_18845_1147_7317}>
          <View style={styles.View_I1353_18845_1147_7318} />
        </View>
        <View style={styles.View_I1353_18845_1147_7319}>
          <View style={styles.View_I1353_18845_1147_7320}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7327}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1006/ce02/93789f0c0d3bdab0ae8548896bbf51b4"
            }}
            style={styles.ImageBackground_I1353_18845_1147_7328}
          />
          <View style={styles.View_I1353_18845_1147_7334}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ef/6f57/ff38cdd6e228b8d96fc6ac2fd6af186e"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7335}
            />
            <View style={styles.View_I1353_18845_1147_7336}>
              <Text style={styles.Text_I1353_18845_1147_7336}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7337}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cab/2103/3c81620398a1410f68f9db92c6197bfb"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7338}
            />
            <View style={styles.View_I1353_18845_1147_7339}>
              <Text style={styles.Text_I1353_18845_1147_7339}>space</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7340}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ab/c327/81f63228065c9aa305433577dc69ead5"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7341}
            />
            <View style={styles.View_I1353_18845_1147_7342}>
              <Text style={styles.Text_I1353_18845_1147_7342}>123</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7343}>
            <View style={styles.View_I1353_18845_1147_7344}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f753/0cd0/6db649153a5e430e935fbfceaa4e49ea"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7345}
              />
              <View style={styles.View_I1353_18845_1147_7346}>
                <Text style={styles.Text_I1353_18845_1147_7346}> </Text>
              </View>
            </View>
            <View style={styles.View_I1353_18845_1147_7347}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7348}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7351}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7353}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7354}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I1353_18845_1147_7355}
              />
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7356}>
            <View style={styles.View_I1353_18845_1147_7357}>
              <View style={styles.View_I1353_18845_1147_7358} />
              <View style={styles.View_I1353_18845_1147_7359}>
                <Text style={styles.Text_I1353_18845_1147_7359}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b51/921a/e908ac177745dde04996e8754c863deb"
              }}
              style={styles.ImageBackground_I1353_18845_1147_7360}
            />
          </View>
          <View style={styles.View_I1353_18845_1147_7361}>
            <View style={styles.View_I1353_18845_1147_7362} />
            <View style={styles.View_I1353_18845_1147_7363}>
              <Text style={styles.Text_I1353_18845_1147_7363}>M</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7364}>
            <View style={styles.View_I1353_18845_1147_7365} />
            <View style={styles.View_I1353_18845_1147_7366}>
              <Text style={styles.Text_I1353_18845_1147_7366}>N</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7367}>
            <View style={styles.View_I1353_18845_1147_7368} />
            <View style={styles.View_I1353_18845_1147_7369}>
              <Text style={styles.Text_I1353_18845_1147_7369}>B</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7370}>
            <View style={styles.View_I1353_18845_1147_7371} />
            <View style={styles.View_I1353_18845_1147_7372}>
              <Text style={styles.Text_I1353_18845_1147_7372}>V</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7373}>
            <View style={styles.View_I1353_18845_1147_7374} />
            <View style={styles.View_I1353_18845_1147_7375}>
              <Text style={styles.Text_I1353_18845_1147_7375}>C</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7376}>
            <View style={styles.View_I1353_18845_1147_7377} />
            <View style={styles.View_I1353_18845_1147_7378}>
              <Text style={styles.Text_I1353_18845_1147_7378}>X</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7379}>
            <View style={styles.View_I1353_18845_1147_7380} />
            <View style={styles.View_I1353_18845_1147_7381}>
              <Text style={styles.Text_I1353_18845_1147_7381}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7382}>
            <View style={styles.View_I1353_18845_1147_7383} />
            <View style={styles.View_I1353_18845_1147_7384}>
              <Text style={styles.Text_I1353_18845_1147_7384}>L</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7385}>
            <View style={styles.View_I1353_18845_1147_7386} />
            <View style={styles.View_I1353_18845_1147_7387}>
              <Text style={styles.Text_I1353_18845_1147_7387}>K</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7388}>
            <View style={styles.View_I1353_18845_1147_7389} />
            <View style={styles.View_I1353_18845_1147_7390}>
              <Text style={styles.Text_I1353_18845_1147_7390}>J</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7391}>
            <View style={styles.View_I1353_18845_1147_7392} />
            <View style={styles.View_I1353_18845_1147_7393}>
              <Text style={styles.Text_I1353_18845_1147_7393}>H</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7394}>
            <View style={styles.View_I1353_18845_1147_7395} />
            <View style={styles.View_I1353_18845_1147_7396}>
              <Text style={styles.Text_I1353_18845_1147_7396}>G</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7397}>
            <View style={styles.View_I1353_18845_1147_7398} />
            <View style={styles.View_I1353_18845_1147_7399}>
              <Text style={styles.Text_I1353_18845_1147_7399}>F</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7400}>
            <View style={styles.View_I1353_18845_1147_7401} />
            <View style={styles.View_I1353_18845_1147_7402}>
              <Text style={styles.Text_I1353_18845_1147_7402}>D</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7403}>
            <View style={styles.View_I1353_18845_1147_7404} />
            <View style={styles.View_I1353_18845_1147_7405}>
              <Text style={styles.Text_I1353_18845_1147_7405}>S</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7406}>
            <View style={styles.View_I1353_18845_1147_7407} />
            <View style={styles.View_I1353_18845_1147_7408}>
              <Text style={styles.Text_I1353_18845_1147_7408}>A</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7409}>
            <View style={styles.View_I1353_18845_1147_7410} />
            <View style={styles.View_I1353_18845_1147_7411}>
              <Text style={styles.Text_I1353_18845_1147_7411}>P</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7412}>
            <View style={styles.View_I1353_18845_1147_7413} />
            <View style={styles.View_I1353_18845_1147_7414}>
              <Text style={styles.Text_I1353_18845_1147_7414}>O</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7415}>
            <View style={styles.View_I1353_18845_1147_7416} />
            <View style={styles.View_I1353_18845_1147_7417}>
              <Text style={styles.Text_I1353_18845_1147_7417}>I</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7418}>
            <View style={styles.View_I1353_18845_1147_7419} />
            <View style={styles.View_I1353_18845_1147_7420}>
              <Text style={styles.Text_I1353_18845_1147_7420}>U</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7421}>
            <View style={styles.View_I1353_18845_1147_7422} />
            <View style={styles.View_I1353_18845_1147_7423}>
              <Text style={styles.Text_I1353_18845_1147_7423}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7424}>
            <View style={styles.View_I1353_18845_1147_7425} />
            <View style={styles.View_I1353_18845_1147_7426}>
              <Text style={styles.Text_I1353_18845_1147_7426}>T</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7427}>
            <View style={styles.View_I1353_18845_1147_7428} />
            <View style={styles.View_I1353_18845_1147_7429}>
              <Text style={styles.Text_I1353_18845_1147_7429}>R</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7430}>
            <View style={styles.View_I1353_18845_1147_7431} />
            <View style={styles.View_I1353_18845_1147_7432}>
              <Text style={styles.Text_I1353_18845_1147_7432}>E</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7433}>
            <View style={styles.View_I1353_18845_1147_7434} />
            <View style={styles.View_I1353_18845_1147_7435}>
              <Text style={styles.Text_I1353_18845_1147_7435}>W</Text>
            </View>
          </View>
          <View style={styles.View_I1353_18845_1147_7436}>
            <View style={styles.View_I1353_18845_1147_7437} />
            <View style={styles.View_I1353_18845_1147_7438}>
              <Text style={styles.Text_I1353_18845_1147_7438}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1353_18819: {
    width: wp("133.33333333333331%"),
    minWidth: wp("133.33333333333331%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.400000000000002%"),
    top: hp("-11.612021857923498%"),
    resizeMode: "cover"
  },
  View_1353_18820: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1353_18821: {
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
  View_I1353_18821_1147_7817: {
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
  View_I1353_18821_1147_7817_1147_7815: {
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
  View_1353_18822: {
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
  View_I1353_18822_1147_7797: {
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
  View_I1353_18822_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68893229166667%"),
    top: hp("2.368030652322404%")
  },
  View_I1353_18822_1147_7797_1147_7782: {
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
  ImageBackground_I1353_18822_1147_7797_1147_7783: {
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
  View_I1353_18822_1147_7797_1147_7784: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1353_18822_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I1353_18822_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I1353_18822_1147_7797_1147_7794: {
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
  View_I1353_18822_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I1353_18822_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_1353_18823: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_1353_18824: {
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
  ImageBackground_I1353_18824_890_368: {
    flexGrow: 1,
    width: wp("5.924825032552084%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2376302083333286%"),
    top: hp("0.12167008196721163%")
  },
  View_1353_18825: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("7.5136612021857925%")
  },
  Text_1353_18825: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1353_18826: {
    width: wp("6.455206807454427%"),
    minWidth: wp("6.455206807454427%"),
    height: hp("7.294788256369002%"),
    minHeight: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.266666666666666%"),
    top: hp("25.40983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18826_612_46: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18826_612_47: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I1353_18826_612_48: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I1353_18826_612_51: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6546875000000014%")
  },
  ImageBackground_I1353_18826_612_52: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18826_612_53: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5708333333333329%")
  },
  ImageBackground_I1353_18826_612_54: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6341145833333357%")
  },
  View_I1353_18826_612_55: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5520833333333357%")
  },
  ImageBackground_I1353_18826_612_56: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00026041666666998253%")
  },
  View_I1353_18826_612_57: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.67552083333333%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_18826_612_58: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9821614583333371%")
  },
  View_I1353_18826_612_59: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2276041666666657%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18826_612_60: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18826_612_61: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18826_612_64: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0033854166666742%")
  },
  ImageBackground_I1353_18826_612_65: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.498567708333333%")
  },
  ImageBackground_I1353_18826_612_66: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3277343750000057%")
  },
  ImageBackground_I1353_18826_612_67: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4226562500000028%")
  },
  View_I1353_18826_612_68: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18826_612_69: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4885416666666629%")
  },
  View_I1353_18826_612_70: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.569140625000003%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_18826_612_71: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1353_18827: {
    width: wp("14.239426676432293%"),
    minWidth: wp("14.239426676432293%"),
    height: hp("3.306970700540178%"),
    minHeight: hp("3.306970700540178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18827_612_46: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.653485741120221%")
  },
  ImageBackground_I1353_18827_612_47: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18827_612_48: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18827_612_51: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("1.0261910860655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284375000000001%")
  },
  ImageBackground_I1353_18827_612_52: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("1.2799372438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I1353_18827_612_53: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.6801250853825067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I1353_18827_612_54: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.7289532103825067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I1353_18827_612_55: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568749999999998%")
  },
  ImageBackground_I1353_18827_612_56: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.7623057547814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_18827_612_57: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("-2.8531100580601176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277604166666666%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_18827_612_58: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_I1353_18827_612_59: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18827_612_60: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784152613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18827_612_61: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784152613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18827_612_64: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("0.3353931864754074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284375000000001%")
  },
  ImageBackground_I1353_18827_612_65: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I1353_18827_612_66: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.29243510928961314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I1353_18827_612_67: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.3247203722677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I1353_18827_612_68: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0.7951246584699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568749999999998%")
  },
  ImageBackground_I1353_18827_612_69: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_18827_612_70: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("0.8583610826502763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277604166666666%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_18827_612_71: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0.5032231898907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_1353_18828: {
    width: wp("14.599658203125%"),
    minWidth: wp("14.599658203125%"),
    height: hp("3.82571116171248%"),
    minHeight: hp("3.82571116171248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.16015625%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18828_1124_6629: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("1.9128872397167436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18828_1124_6630: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.14861893784153324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_18828_1124_6631: {
    width: wp("13.800673421223959%"),
    height: hp("0.8930547641274708%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3994791666666666%")
  },
  ImageBackground_I1353_18828_1124_6632: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.33485954576502763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18828_1124_6633: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2709635416666663%")
  },
  ImageBackground_I1353_18828_1124_6634: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.40289873633879836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244010416666667%")
  },
  ImageBackground_I1353_18828_1124_6635: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9078124999999999%")
  },
  ImageBackground_I1353_18828_1124_6638: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.2604166666666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I1353_18828_1124_6639: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.6326310621584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2178385416666666%")
  },
  ImageBackground_I1353_18828_1124_6640: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2750000000000004%")
  },
  ImageBackground_I1353_18828_1124_6641: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.4837453039617472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9171875%")
  },
  View_I1353_18828_1124_6642: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("2.010201235286525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.8157125170765056%")
  },
  ImageBackground_I1353_18828_1124_6643: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.09712260928961314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_18828_1124_6644: {
    width: wp("13.80067647298177%"),
    height: hp("0.8930931325818672%"),
    top: hp("1.1171768271857943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3994791666666666%")
  },
  ImageBackground_I1353_18828_1124_6645: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.29777151639343913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_18828_1124_6646: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2709635416666663%")
  },
  ImageBackground_I1353_18828_1124_6647: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.0370880293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244010416666667%")
  },
  ImageBackground_I1353_18828_1124_6648: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0.2604166666666643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9078124999999999%")
  },
  ImageBackground_I1353_18828_1124_6651: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.05576545423497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I1353_18828_1124_6652: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2178385416666666%")
  },
  ImageBackground_I1353_18828_1124_6653: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2750000000000004%")
  },
  View_I1353_18828_1124_6654: {
    width: wp("0.6328194300333658%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5626302083333332%")
  },
  ImageBackground_I1353_18828_1124_6655: {
    width: wp("0.5062907218933105%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1265624999999999%")
  },
  View_I1353_18828_1124_6656: {
    width: wp("0.31643171310424806%"),
    height: hp("0.06484256171789325%"),
    top: hp("0.06483734631147087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 0.23732377588748932,
    borderTopRightRadius: 0.23732377588748932,
    borderBottomLeftRadius: 0.23732377588748932,
    borderBottomRightRadius: 0.23732377588748932
  },
  ImageBackground_I1353_18828_1124_6657: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9171875%")
  },
  ImageBackground_1353_18829: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("21.85792349726776%")
  },
  View_1353_18830: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("24.453551912568305%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18830_890_409: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("3.3352536581904513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777343749999915%"),
    top: hp("0.14808529713114993%")
  },
  View_1353_18831: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18831_890_409: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("3.3352536581904513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777343750000004%"),
    top: hp("0.14808529713114638%")
  },
  ImageBackground_1353_18832: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("32.10382513661202%")
  },
  View_1353_18833: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.595628415300546%")
  },
  View_1353_18834: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_18835: {
    width: wp("100%"),
    height: hp("18.579234972677597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_18836: {
    width: wp("100%"),
    height: hp("18.579234972677597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  ImageBackground_1353_18837: {
    width: wp("0%"),
    height: hp("4.098360655737705%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  View_1353_18838: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_18839: {
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
  View_I1353_18839_1198_2104: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18839_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.1366120218579141%")
  },
  View_1353_18840: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_1353_18840: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1353_18841: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("11.202185792349724%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_18842: {
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
  View_I1353_18842_1198_2104: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18842_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.13661202185793542%")
  },
  View_1353_18843: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_1353_18843: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1353_18844: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.60000000000001%"),
    top: hp("43.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18844_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1353_18844_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18844_478_381_1078_61: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I1353_18844_478_381_1078_62: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I1353_18844_478_381_1078_63: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_I1353_18844_478_381_1078_66: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("1.63934426229509%")
  },
  View_1353_18845: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7315: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7316: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 30, 30, 1)"
  },
  View_I1353_18845_1147_7317: {
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
  View_I1353_18845_1147_7318: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1353_18845_1147_7319: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I1353_18845_1147_7320: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("31.83060109289616%")
  },
  ImageBackground_I1353_18845_1147_7321: {
    width: wp("4%"),
    height: hp("2.003851744646583%"),
    minHeight: hp("2.003851744646583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4114796789617685%")
  },
  ImageBackground_I1353_18845_1147_7327: {
    width: wp("2.401971689860026%"),
    height: hp("2.458455393223163%"),
    minHeight: hp("2.458455393223163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18845_1147_7328: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("31.69398907103826%")
  },
  View_I1353_18845_1147_7334: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18845_1147_7335: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1353_18845_1147_7336: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I1353_18845_1147_7336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I1353_18845_1147_7337: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18845_1147_7338: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1353_18845_1147_7339: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I1353_18845_1147_7339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I1353_18845_1147_7340: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18845_1147_7341: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1353_18845_1147_7342: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I1353_18845_1147_7342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I1353_18845_1147_7343: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("14.754098360655732%")
  },
  View_I1353_18845_1147_7344: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_18845_1147_7345: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1353_18845_1147_7346: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I1353_18845_1147_7346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I1353_18845_1147_7347: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    minHeight: hp("2.3216109458214595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5760416666666686%"),
    top: hp("1.7295295423497379%")
  },
  ImageBackground_I1353_18845_1147_7348: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    minHeight: hp("2.3216109458214595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_18845_1147_7351: {
    width: wp("1.7841803232828777%"),
    height: hp("0.9131669998168945%"),
    minHeight: hp("0.9131669998168945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613281250000057%"),
    top: hp("0.7033384562841434%")
  },
  ImageBackground_I1353_18845_1147_7352: {
    width: wp("0.3007041931152344%"),
    height: hp("0.15417674525839384%"),
    minHeight: hp("0.15417674525839384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287109375%"),
    top: hp("0.6798582650273204%")
  },
  ImageBackground_I1353_18845_1147_7353: {
    width: wp("0.30211896896362306%"),
    height: hp("0.15477867074351492%"),
    minHeight: hp("0.15477867074351492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7173177083333258%"),
    top: hp("1.4832543545081904%")
  },
  ImageBackground_I1353_18845_1147_7354: {
    width: wp("0.30095300674438474%"),
    height: hp("0.15404927925985368%"),
    minHeight: hp("0.15404927925985368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289713541666671%"),
    top: hp("1.4840548155737565%")
  },
  ImageBackground_I1353_18845_1147_7355: {
    width: wp("0.3021279652913411%"),
    height: hp("0.1547740619690692%"),
    minHeight: hp("0.1547740619690692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.72018229166666%"),
    top: hp("0.6798582650273204%")
  },
  View_I1353_18845_1147_7356: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655732%")
  },
  View_I1353_18845_1147_7357: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7358: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7359: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I1353_18845_1147_7360: {
    width: wp("5.034666442871093%"),
    height: hp("2.2481243467070366%"),
    minHeight: hp("2.2481243467070366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.109375%"),
    top: hp("1.6665599385245997%")
  },
  View_I1353_18845_1147_7361: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7362: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7363: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7364: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7365: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7366: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7367: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7368: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7369: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7370: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7371: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7372: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7373: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7374: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7375: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7376: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7377: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7378: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7379: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7380: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7381: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%")
  },
  Text_I1353_18845_1147_7381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7382: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7383: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7384: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7385: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7386: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7387: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7388: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7389: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7390: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7391: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7392: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7393: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7394: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7395: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7396: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7396: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7397: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7398: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7399: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7400: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7401: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7402: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7402: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7403: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7404: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7405: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7406: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7407: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7408: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%")
  },
  Text_I1353_18845_1147_7408: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7409: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7410: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7411: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7412: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7413: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7414: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7415: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7416: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7417: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7418: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7419: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7420: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7421: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7422: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7423: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7424: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7425: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7426: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7426: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7427: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7428: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7429: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7429: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7430: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7431: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7432: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7433: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7434: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7435: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I1353_18845_1147_7436: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_18845_1147_7437: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 67, 67, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1353_18845_1147_7438: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I1353_18845_1147_7438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
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
