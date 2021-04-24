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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6724/14e3/a8461ee005902d3ab9ac1d20cf0835a0"
        }}
        style={styles.ImageBackground_2255_91}
      />
      <View style={styles.View_2255_92} />
      <View style={styles.View_2255_93}>
        <View style={styles.View_I2255_93_1147_7815} />
      </View>
      <View style={styles.View_2255_94}>
        <View style={styles.View_I2255_94_527_354}>
          <View style={styles.View_I2255_94_527_354_4_228} />
        </View>
      </View>
      <View style={styles.View_2255_95}>
        <View style={styles.View_I2255_95_322_958}>
          <View style={styles.View_I2255_95_322_960}>
            <Text style={styles.Text_I2255_95_322_960}>Where to?</Text>
          </View>
        </View>
        <View style={styles.View_I2255_95_322_961}>
          <View style={styles.View_I2255_95_322_962}>
            <View style={styles.View_I2255_95_322_962_891_3806}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e919/703d/e10769c8a9a570b978a9e34d416fc735"
                }}
                style={styles.ImageBackground_I2255_95_322_962_890_849}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0461/e022/b2dbb6c03f3ef36bf584db1c9a24e9ab"
                }}
                style={styles.ImageBackground_I2255_95_322_962_890_848}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
              }}
              style={styles.ImageBackground_I2255_95_322_962_890_847}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef79/c8ac/e84c1ac00319fb41616622e0cfe7c4d8"
        }}
        style={styles.ImageBackground_2255_96}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eef7/99f7/bf0594cde48ca169b4882af5020c4718"
        }}
        style={styles.ImageBackground_2255_97}
      />
      <View style={styles.View_2255_98}>
        <View style={styles.View_2255_99}>
          <View style={styles.View_I2255_99_1198_2104}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
              }}
              style={styles.ImageBackground_I2255_99_1198_2104_890_409}
            />
          </View>
        </View>
        <View style={styles.View_2255_100}>
          <Text style={styles.Text_2255_100}>Blue Bottle Coffee</Text>
        </View>
      </View>
      <View style={styles.View_2255_101}>
        <View style={styles.View_2255_102}>
          <View style={styles.View_I2255_102_1198_2104}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2416/5834/2df908c5e9e0a7f8ac26fe3a7da57879"
              }}
              style={styles.ImageBackground_I2255_102_1198_2104_890_409}
            />
          </View>
        </View>
        <View style={styles.View_2255_103}>
          <Text style={styles.Text_2255_103}>WeWork Coworking Space</Text>
        </View>
      </View>
      <View style={styles.View_2255_104}>
        <View style={styles.View_I2255_104_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aab/c3d1/97f0ac22dbf202256b300235db370500"
            }}
            style={styles.ImageBackground_I2255_104_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bff7/67e4/f15b37df9eb35ad28acbd7a486a62043"
            }}
            style={styles.ImageBackground_I2255_104_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ee/eda1/44803fb5b1fda3bf13e2c68bd111dc49"
            }}
            style={styles.ImageBackground_I2255_104_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd35/ae21/1100276b730900cae849f2722e59342b"
            }}
            style={styles.ImageBackground_I2255_104_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6d/7c44/e646731e96e122dd46c1d0e197d34849"
            }}
            style={styles.ImageBackground_I2255_104_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c13/2ea7/3348192cd360806bca4f1d3bea741d66"
            }}
            style={styles.ImageBackground_I2255_104_1124_6591}
          />
          <View style={styles.View_I2255_104_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690a/5cdd/c704e5bfa80d0ce77354eb5200684d43"
              }}
              style={styles.ImageBackground_I2255_104_1124_6593}
            />
            <View style={styles.View_I2255_104_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8586/6ca8/635ef5ac65173479345757ef77f1539c"
            }}
            style={styles.ImageBackground_I2255_104_1124_6595}
          />
        </View>
        <View style={styles.View_I2255_104_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b285/1ff2/93d7a8ab626215ec1a70ea1726d1a6ee"
            }}
            style={styles.ImageBackground_I2255_104_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02a1/79c4/ab470ad2a41877641bc68b5667b2d446"
            }}
            style={styles.ImageBackground_I2255_104_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4fc/561e/aa1c55240c36bf460190d6e22adbbe5f"
            }}
            style={styles.ImageBackground_I2255_104_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a217/60e9/65df25fbf93c06cab2e8c088fd63837d"
            }}
            style={styles.ImageBackground_I2255_104_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ef/96bc/e606629752db7062770e1865761a457c"
            }}
            style={styles.ImageBackground_I2255_104_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2899/bfea/a955eddedbde903b301f42fc41b2d530"
            }}
            style={styles.ImageBackground_I2255_104_1124_6604}
          />
          <View style={styles.View_I2255_104_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d159/7457/2bcedc71f4d1159feff9ca1f2b68a4a3"
              }}
              style={styles.ImageBackground_I2255_104_1124_6606}
            />
            <View style={styles.View_I2255_104_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21de/c50c/6224f64820159a87a23841faa625a311"
            }}
            style={styles.ImageBackground_I2255_104_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_2255_105}>
        <View style={styles.View_I2255_105_1124_6629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b98b/d3f3/d5084660a802a5876fd00856e9fb93a1"
            }}
            style={styles.ImageBackground_I2255_105_1124_6630}
          />
          <View style={styles.View_I2255_105_1124_6631}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f8e/47e3/402b6388deda28465b210ab88bf7cf52"
              }}
              style={styles.ImageBackground_I2255_105_1124_6632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8334/abe2/95380c78084e7a733a29abd15da90fa7"
              }}
              style={styles.ImageBackground_I2255_105_1124_6633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9256/56ca/592fd44c76fac05e83ecdf3fdf99c407"
              }}
              style={styles.ImageBackground_I2255_105_1124_6634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ded/f398/b4474abee87ccfb9e73468c27f219992"
              }}
              style={styles.ImageBackground_I2255_105_1124_6635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39fb/6472/097bf55efc357f05113cb44bcfe9f5fb"
              }}
              style={styles.ImageBackground_I2255_105_1124_6638}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ad/ff36/b4496c0feb7912bbcde3fd02dd2c666a"
            }}
            style={styles.ImageBackground_I2255_105_1124_6639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9486/0dbc/cbdbcb11beb1692edb5d2afbf1ed4860"
            }}
            style={styles.ImageBackground_I2255_105_1124_6640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2638/e5b4/d042ed77cf2e55c9fb79e791de471266"
            }}
            style={styles.ImageBackground_I2255_105_1124_6641}
          />
        </View>
        <View style={styles.View_I2255_105_1124_6642}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d7/0a6a/80a25615464fcb1f9852d52e47cee025"
            }}
            style={styles.ImageBackground_I2255_105_1124_6643}
          />
          <View style={styles.View_I2255_105_1124_6644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3be/031d/ef0ef75128bb626d60598dfcf73fae2c"
              }}
              style={styles.ImageBackground_I2255_105_1124_6645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de5/9ce6/cf2f80e05e38f8b1711587e389a4e5de"
              }}
              style={styles.ImageBackground_I2255_105_1124_6646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b5/35bc/834fd1d2495b6b2789be219b97ded0b5"
              }}
              style={styles.ImageBackground_I2255_105_1124_6647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad6/11de/457863fabc19d66265dff4183ab09871"
              }}
              style={styles.ImageBackground_I2255_105_1124_6648}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25d8/dcca/bb8fadda71b6b977c8d46429b9f19537"
              }}
              style={styles.ImageBackground_I2255_105_1124_6651}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08c4/287b/4ba9d7a2c0522395785c894b91babbce"
            }}
            style={styles.ImageBackground_I2255_105_1124_6652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12e4/bf58/257efc068cc1496ac3f125e78acad5e6"
            }}
            style={styles.ImageBackground_I2255_105_1124_6653}
          />
          <View style={styles.View_I2255_105_1124_6654}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5940/29ed/7b1539b1a6dea96f3de3084f6668b2c4"
              }}
              style={styles.ImageBackground_I2255_105_1124_6655}
            />
            <View style={styles.View_I2255_105_1124_6656} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0406/fec5/b628031f6bcfaa54bdb7148a49a3e7fe"
            }}
            style={styles.ImageBackground_I2255_105_1124_6657}
          />
        </View>
      </View>
      <View style={styles.View_2255_106}>
        <View style={styles.View_I2255_106_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1852/85c8/37b3b388d10e294420b02660a3a33ca0"
            }}
            style={styles.ImageBackground_I2255_106_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc0/2ba7/551791e607fa4cf8f681480a7752f968"
            }}
            style={styles.ImageBackground_I2255_106_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69a/7f46/872b09ba3f6d4f7af7652b4d621287d6"
            }}
            style={styles.ImageBackground_I2255_106_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b04/97e0/fc92d54b2dcd0a6c25e36439d3b36762"
            }}
            style={styles.ImageBackground_I2255_106_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da8a/4d64/579ae633025f9a9282b0fc0768622d72"
            }}
            style={styles.ImageBackground_I2255_106_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcbd/54ee/da0e1205e4b65f83bd7e0cf34e692f76"
            }}
            style={styles.ImageBackground_I2255_106_1124_6591}
          />
          <View style={styles.View_I2255_106_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef5/dd48/aa9f94078d78ac6631901bbf6a6d7d60"
              }}
              style={styles.ImageBackground_I2255_106_1124_6593}
            />
            <View style={styles.View_I2255_106_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038b/748b/5285656a02c619356eae93db8578e1cd"
            }}
            style={styles.ImageBackground_I2255_106_1124_6595}
          />
        </View>
        <View style={styles.View_I2255_106_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ad/93d9/9ade3c9172a1d19deab69d36b75fa1ed"
            }}
            style={styles.ImageBackground_I2255_106_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5084/bde1/639ec423a6feefe846fb1ed2ec9e421b"
            }}
            style={styles.ImageBackground_I2255_106_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/7913/2d3fd6a22dc9ea0be4a13309f1095130"
            }}
            style={styles.ImageBackground_I2255_106_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc39/2d25/4348f8c0583bc0903c410ce139ca1768"
            }}
            style={styles.ImageBackground_I2255_106_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab7d/9ad4/b28bc8d12f43de948fca4ec35e03d0ee"
            }}
            style={styles.ImageBackground_I2255_106_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6fb/0ec6/073a21ef2c6c9291a34a228bf23f14d6"
            }}
            style={styles.ImageBackground_I2255_106_1124_6604}
          />
          <View style={styles.View_I2255_106_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34de/170e/d66cba6ef1c6279e8083b269e86af11c"
              }}
              style={styles.ImageBackground_I2255_106_1124_6606}
            />
            <View style={styles.View_I2255_106_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e6c/c46f/5291e0eb2f101870a5f4e1a0a2482a3a"
            }}
            style={styles.ImageBackground_I2255_106_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_2255_107}>
        <View style={styles.View_I2255_107_612_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/333a/b7c4/9dc393d63fb4000a99542099419e0772"
            }}
            style={styles.ImageBackground_I2255_107_612_9}
          />
          <View style={styles.View_I2255_107_606_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8fc/c80c/b299f1d9b17add7b7f7237deeb45c891"
              }}
              style={styles.ImageBackground_I2255_107_606_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8800/b734/e7dd061605d89f36450e8114da3e5b27"
              }}
              style={styles.ImageBackground_I2255_107_606_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0144/1a22/f1653fed3afb2de0e5097256c72fe76c"
              }}
              style={styles.ImageBackground_I2255_107_606_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e73/e1dd/e55f35ba0f8e07b4de87a78e1a81f3ac"
              }}
              style={styles.ImageBackground_I2255_107_606_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed30/0220/c65c2c98862fbcb2baaa227f721cfba7"
              }}
              style={styles.ImageBackground_I2255_107_606_11}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1700/cf01/c077734d9b81a1cb66155b02c976f94d"
            }}
            style={styles.ImageBackground_I2255_107_612_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ff/a460/20753928047c29c99f3dbbfba40e7822"
            }}
            style={styles.ImageBackground_I2255_107_612_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b73/b6df/b119c5add40edc8a7ede1145560fd3c8"
            }}
            style={styles.ImageBackground_I2255_107_612_11}
          />
        </View>
        <View style={styles.View_I2255_107_612_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ea/b87e/b01a2dba4e0040a6c54683b3de2a2f1d"
            }}
            style={styles.ImageBackground_I2255_107_612_20}
          />
          <View style={styles.View_I2255_107_612_21}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef3/b6e8/730639ddffc96b377e3c5c9b76193f54"
              }}
              style={styles.ImageBackground_I2255_107_612_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19da/2d3f/bf0ce769718ed37925e81318f0b51bea"
              }}
              style={styles.ImageBackground_I2255_107_612_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/265c/df89/f802ecad434fee151179896a0a22eca0"
              }}
              style={styles.ImageBackground_I2255_107_612_24}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea87/47b5/f5e0312261b3973a7cc8a7f27362d7eb"
              }}
              style={styles.ImageBackground_I2255_107_612_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb6a/1191/48701fb20fa94944c1955b93a315acd6"
              }}
              style={styles.ImageBackground_I2255_107_612_28}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f13/9a1b/1f3d013edc548f6079036226ef4ea08d"
            }}
            style={styles.ImageBackground_I2255_107_612_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9354/7259/95ab546ed21d235dfa20cbd58fda99db"
            }}
            style={styles.ImageBackground_I2255_107_612_30}
          />
          <View style={styles.View_I2255_107_639_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5940/29ed/7b1539b1a6dea96f3de3084f6668b2c4"
              }}
              style={styles.ImageBackground_I2255_107_639_427}
            />
            <View style={styles.View_I2255_107_639_428} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a8/ec56/adb1182383023a9237017ee29c310575"
            }}
            style={styles.ImageBackground_I2255_107_612_31}
          />
        </View>
      </View>
      <View style={styles.View_2255_108}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9643/134c/e66de8231d416213b62e79402c9af3a5"
          }}
          style={styles.ImageBackground_I2255_108_478_380}
        />
        <View style={styles.View_I2255_108_478_381}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
            }}
            style={styles.ImageBackground_I2255_108_478_381_1078_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2255_108_478_381_1078_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2255_108_478_381_1078_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8e/ffa7/73cc1dd53c6d749439dbd65da4d1a4be"
            }}
            style={styles.ImageBackground_I2255_108_478_381_1078_66}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714d/2fc2/9eb442ae9556818eed876e39571cab96"
        }}
        style={styles.ImageBackground_2255_109}
      />
      <View style={styles.View_2255_110}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9008/1f15/13a60d2dc5e43f226f6b2be5da0317cc"
          }}
          style={styles.ImageBackground_I2255_110_890_409}
        />
      </View>
      <View style={styles.View_2255_111}>
        <Text style={styles.Text_2255_111}>Enter Destination</Text>
      </View>
      <View style={styles.View_2255_112}>
        <View style={styles.View_I2255_112_1147_7781}>
          <View style={styles.View_I2255_112_1147_7782} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I2255_112_1147_7783}
          />
          <View style={styles.View_I2255_112_1147_7784} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_I2255_112_1147_7785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I2255_112_1147_7789}
        />
        <View style={styles.View_I2255_112_1147_7794}>
          <View style={styles.View_I2255_112_1147_7795}>
            <Text style={styles.Text_I2255_112_1147_7795}>9:41</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/1d13/834313a41b82aa6e9dd077d1baf22ef1"
        }}
        style={styles.ImageBackground_2255_113}
      />
      <View style={styles.View_2255_114}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/8b0b/f0d9bbcfe396738cc3308c9aea6a07c6"
          }}
          style={styles.ImageBackground_I2255_114_890_368}
        />
      </View>
      <View style={styles.View_2255_115}>
        <Text style={styles.Text_2255_115}>ShareRide</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_2255_91: {
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
  View_2255_92: {
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
  View_2255_93: {
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
  View_I2255_93_1147_7815: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_2255_94: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("71.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_94_527_354: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_94_527_354_4_228: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_2255_95: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I2255_95_322_958: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_95_322_960: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475557%")
  },
  Text_I2255_95_322_960: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2255_95_322_961: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.6830601092895989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_95_322_962: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_95_322_962_891_3806: {
    flexGrow: 1,
    width: wp("5.688349914550781%"),
    height: hp("2.749014682457095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.14034750683059372%")
  },
  ImageBackground_I2255_95_322_962_890_849: {
    width: wp("7.297745768229166%"),
    minWidth: wp("7.297745768229166%"),
    height: hp("3.336682606264542%"),
    minHeight: hp("3.336682606264542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0266276041666664%"),
    top: hp("-0.40930242486338386%")
  },
  ImageBackground_I2255_95_322_962_890_848: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("-0.003735484972665404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_95_322_962_890_847: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_2255_96: {
    width: wp("0%"),
    height: hp("4.098360655737705%"),
    top: hp("94.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  ImageBackground_2255_97: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%")
  },
  View_2255_98: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("91.39344262295081%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2255_99: {
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
  View_I2255_99_1198_2104: {
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
  ImageBackground_I2255_99_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.1366120218579283%")
  },
  View_2255_100: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  Text_2255_100: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_101: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("98.224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2255_102: {
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
  View_I2255_102_1198_2104: {
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
  ImageBackground_I2255_102_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.1366120218579141%")
  },
  View_2255_103: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  Text_2255_103: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_104: {
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
  View_I2255_104_1124_6583: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_104_1124_6584: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I2255_104_1124_6585: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I2255_104_1124_6588: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547526041666671%")
  },
  ImageBackground_I2255_104_1124_6589: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_104_1124_6590: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5708333333333329%")
  },
  ImageBackground_I2255_104_1124_6591: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6341145833333357%")
  },
  View_I2255_104_1124_6592: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5520182291666629%")
  },
  ImageBackground_I2255_104_1124_6593: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0003255208333285964%")
  },
  View_I2255_104_1124_6594: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6755208333333371%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_104_1124_6595: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9821614583333371%")
  },
  View_I2255_104_1124_6596: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2276041666666657%"),
    top: hp("0%")
  },
  ImageBackground_I2255_104_1124_6597: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_104_1124_6598: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_104_1124_6601: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0032552083333357%")
  },
  ImageBackground_I2255_104_1124_6602: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.498567708333333%")
  },
  ImageBackground_I2255_104_1124_6603: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3277343750000057%")
  },
  ImageBackground_I2255_104_1124_6604: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4227213541666686%")
  },
  View_I2255_104_1124_6605: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000651041666728247%")
  },
  ImageBackground_I2255_104_1124_6606: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4884765625000114%")
  },
  View_I2255_104_1124_6607: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.569205729166676%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_104_1124_6608: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2255_105: {
    width: wp("14.599658203125%"),
    minWidth: wp("14.599658203125%"),
    height: hp("3.82571116171248%"),
    minHeight: hp("3.82571116171248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("48.11518101092896%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_105_1124_6629: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("1.9128872397167436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9128351263661258%")
  },
  ImageBackground_I2255_105_1124_6630: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_105_1124_6631: {
    width: wp("13.800673421223959%"),
    height: hp("0.8930547641274708%"),
    top: hp("1.0197873975409806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3994791666666657%")
  },
  ImageBackground_I2255_105_1124_6632: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.29777151639344623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.892773437499997%")
  },
  ImageBackground_I2255_105_1124_6633: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.188346354166669%")
  },
  ImageBackground_I2255_105_1124_6634: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.0370880293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6173828124999972%")
  },
  ImageBackground_I2255_105_1124_6635: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0.2604166666666643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.612369791666666%")
  },
  ImageBackground_I2255_105_1124_6638: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.05576545423497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_105_1124_6639: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.4375%")
  },
  ImageBackground_I2255_105_1124_6640: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.263541666666654%")
  },
  ImageBackground_I2255_105_1124_6641: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6317708333333343%")
  },
  View_I2255_105_1124_6642: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("2.010201235286525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.00026682035518632574%")
  },
  ImageBackground_I2255_105_1124_6643: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.14888575819671956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_105_1124_6644: {
    width: wp("13.80067647298177%"),
    height: hp("0.8930931325818672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3994791666666657%")
  },
  ImageBackground_I2255_105_1124_6645: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.33485954576502763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.892708333333331%")
  },
  ImageBackground_I2255_105_1124_6646: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.188346354166669%")
  },
  ImageBackground_I2255_105_1124_6647: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.40289873633879836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6173828124999972%")
  },
  ImageBackground_I2255_105_1124_6648: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6123046875%")
  },
  ImageBackground_I2255_105_1124_6651: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.2604166666666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_105_1124_6652: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.6326310621584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.4375%")
  },
  ImageBackground_I2255_105_1124_6653: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.263541666666654%")
  },
  View_I2255_105_1124_6654: {
    width: wp("0.6328634262084961%"),
    height: hp("0.1945276892250353%"),
    top: hp("1.8157125170764985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.404101562500003%")
  },
  ImageBackground_I2255_105_1124_6655: {
    width: wp("0.5062907218933105%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_105_1124_6656: {
    width: wp("0.31643171310424806%"),
    height: hp("0.06484256171789325%"),
    top: hp("0.06483734631147797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3164713541666515%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 0.23732377588748932,
    borderTopRightRadius: 0.23732377588748932,
    borderBottomLeftRadius: 0.23732377588748932,
    borderBottomRightRadius: 0.23732377588748932
  },
  ImageBackground_I2255_105_1124_6657: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.4837453039617472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6317708333333343%")
  },
  View_2255_106: {
    width: wp("14.239426676432293%"),
    minWidth: wp("14.239426676432293%"),
    height: hp("3.306970700540178%"),
    minHeight: hp("3.306970700540178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("60.79234972677595%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_106_1124_6583: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.653485741120221%")
  },
  ImageBackground_I2255_106_1124_6584: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_106_1124_6585: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_106_1124_6588: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("1.0261910860655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284440104166666%")
  },
  ImageBackground_I2255_106_1124_6589: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("1.2799372438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I2255_106_1124_6590: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.6801250853825209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I2255_106_1124_6591: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.7289532103825209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I2255_106_1124_6592: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568815104166664%")
  },
  ImageBackground_I2255_106_1124_6593: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.7623057547814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_106_1124_6594: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("-2.8531100580601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277539062499999%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_106_1124_6595: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_I2255_106_1124_6596: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_106_1124_6597: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784153324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_106_1124_6598: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784153324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_106_1124_6601: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("0.3353931864754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284440104166666%")
  },
  ImageBackground_I2255_106_1124_6602: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I2255_106_1124_6603: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.29243510928962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I2255_106_1124_6604: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.3247203722677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I2255_106_1124_6605: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0.7951246584699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568815104166664%")
  },
  ImageBackground_I2255_106_1124_6606: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.00026682035518632574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_106_1124_6607: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("0.8583610826502763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277539062499999%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_106_1124_6608: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0.5032231898907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_2255_107: {
    width: wp("14.599658203125%"),
    minWidth: wp("14.599658203125%"),
    height: hp("3.82571116171248%"),
    minHeight: hp("3.82571116171248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.160221354166667%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_107_612_18: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("1.9128872397167436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_107_612_9: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.14861893784153324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_107_606_14: {
    width: wp("13.800673421223959%"),
    height: hp("0.8930547641274708%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3995442708333332%")
  },
  ImageBackground_I2255_107_606_2: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.33485954576502763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006510416666660745%")
  },
  ImageBackground_I2255_107_606_3: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.27109375%")
  },
  ImageBackground_I2255_107_606_4: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.40289873633879836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244075520833334%")
  },
  ImageBackground_I2255_107_606_8: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907877604166667%")
  },
  ImageBackground_I2255_107_606_11: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.2604166666666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I2255_107_612_15: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.6326310621584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21790364583333321%")
  },
  ImageBackground_I2255_107_612_13: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.275065104166667%")
  },
  ImageBackground_I2255_107_612_11: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.4837453039617472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.917252604166666%")
  },
  View_I2255_107_612_19: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("2.010201235286525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.8157125170765056%")
  },
  ImageBackground_I2255_107_612_20: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.09712260928961314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_107_612_21: {
    width: wp("13.80067647298177%"),
    height: hp("0.8930931325818672%"),
    top: hp("1.1171768271857943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3995442708333332%")
  },
  ImageBackground_I2255_107_612_22: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.29777151639343913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_107_612_23: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.27109375%")
  },
  ImageBackground_I2255_107_612_24: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.0370880293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244075520833334%")
  },
  ImageBackground_I2255_107_612_25: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0.2604166666666643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9079427083333336%")
  },
  ImageBackground_I2255_107_612_28: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.05576545423497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I2255_107_612_29: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21790364583333321%")
  },
  ImageBackground_I2255_107_612_30: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.275065104166667%")
  },
  View_I2255_107_639_426: {
    width: wp("0.6328634262084961%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5626953124999998%")
  },
  ImageBackground_I2255_107_639_427: {
    width: wp("0.5062907218933105%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1265624999999999%")
  },
  View_I2255_107_639_428: {
    width: wp("0.31643171310424806%"),
    height: hp("0.06484256171789325%"),
    top: hp("0.06483734631147087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 0.23732377588748932,
    borderTopRightRadius: 0.23732377588748932,
    borderBottomLeftRadius: 0.23732377588748932,
    borderBottomRightRadius: 0.23732377588748932
  },
  ImageBackground_I2255_107_612_31: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.917252604166666%")
  },
  View_2255_108: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.60000000000001%"),
    top: hp("62.02185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2255_108_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_108_478_381: {
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
  ImageBackground_I2255_108_478_381_1078_61: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_I2255_108_478_381_1078_62: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_I2255_108_478_381_1078_63: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.45901639344261%")
  },
  ImageBackground_I2255_108_478_381_1078_66: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("1.6393442622950687%")
  },
  ImageBackground_2255_109: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("23.497267759562842%")
  },
  View_2255_110: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("26.09289617486339%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2255_110_890_409: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("3.3352536581904513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777994791666643%"),
    top: hp("0.14808529713114282%")
  },
  View_2255_111: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("72.6775956284153%")
  },
  Text_2255_111: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_112: {
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
  View_I2255_112_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2255_112_1147_7782: {
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
  ImageBackground_I2255_112_1147_7783: {
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
  View_I2255_112_1147_7784: {
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
  ImageBackground_I2255_112_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2255_112_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2255_112_1147_7794: {
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
  View_I2255_112_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2255_112_1147_7795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2255_113: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2255_114: {
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
  ImageBackground_I2255_114_890_368: {
    flexGrow: 1,
    width: wp("5.924825032552084%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23756510416666288%"),
    top: hp("0.12167008196721163%")
  },
  View_2255_115: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("7.5136612021857925%")
  },
  Text_2255_115: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
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
