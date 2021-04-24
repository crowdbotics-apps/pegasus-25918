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
        style={styles.ImageBackground_2255_117}
      />
      <View style={styles.View_2255_118} />
      <View style={styles.View_2255_119}>
        <View style={styles.View_I2255_119_1147_7815} />
      </View>
      <View style={styles.View_2255_120}>
        <View style={styles.View_I2255_120_1147_7781}>
          <View style={styles.View_I2255_120_1147_7782} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I2255_120_1147_7783}
          />
          <View style={styles.View_I2255_120_1147_7784} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_I2255_120_1147_7785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I2255_120_1147_7789}
        />
        <View style={styles.View_I2255_120_1147_7794}>
          <View style={styles.View_I2255_120_1147_7795}>
            <Text style={styles.Text_I2255_120_1147_7795}>9:41</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/1d13/834313a41b82aa6e9dd077d1baf22ef1"
        }}
        style={styles.ImageBackground_2255_121}
      />
      <View style={styles.View_2255_122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/8b0b/f0d9bbcfe396738cc3308c9aea6a07c6"
          }}
          style={styles.ImageBackground_I2255_122_890_368}
        />
      </View>
      <View style={styles.View_2255_123}>
        <Text style={styles.Text_2255_123}>ShareRide</Text>
      </View>
      <View style={styles.View_2255_124}>
        <View style={styles.View_I2255_124_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aab/c3d1/97f0ac22dbf202256b300235db370500"
            }}
            style={styles.ImageBackground_I2255_124_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bff7/67e4/f15b37df9eb35ad28acbd7a486a62043"
            }}
            style={styles.ImageBackground_I2255_124_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ee/eda1/44803fb5b1fda3bf13e2c68bd111dc49"
            }}
            style={styles.ImageBackground_I2255_124_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd35/ae21/1100276b730900cae849f2722e59342b"
            }}
            style={styles.ImageBackground_I2255_124_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6d/7c44/e646731e96e122dd46c1d0e197d34849"
            }}
            style={styles.ImageBackground_I2255_124_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c13/2ea7/3348192cd360806bca4f1d3bea741d66"
            }}
            style={styles.ImageBackground_I2255_124_1124_6591}
          />
          <View style={styles.View_I2255_124_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690a/5cdd/c704e5bfa80d0ce77354eb5200684d43"
              }}
              style={styles.ImageBackground_I2255_124_1124_6593}
            />
            <View style={styles.View_I2255_124_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8586/6ca8/635ef5ac65173479345757ef77f1539c"
            }}
            style={styles.ImageBackground_I2255_124_1124_6595}
          />
        </View>
        <View style={styles.View_I2255_124_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f8/71c7/c4efc04a6935145155c7cb431ff67f6c"
            }}
            style={styles.ImageBackground_I2255_124_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02a1/79c4/ab470ad2a41877641bc68b5667b2d446"
            }}
            style={styles.ImageBackground_I2255_124_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4fc/561e/aa1c55240c36bf460190d6e22adbbe5f"
            }}
            style={styles.ImageBackground_I2255_124_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a217/60e9/65df25fbf93c06cab2e8c088fd63837d"
            }}
            style={styles.ImageBackground_I2255_124_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ef/96bc/e606629752db7062770e1865761a457c"
            }}
            style={styles.ImageBackground_I2255_124_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2899/bfea/a955eddedbde903b301f42fc41b2d530"
            }}
            style={styles.ImageBackground_I2255_124_1124_6604}
          />
          <View style={styles.View_I2255_124_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d159/7457/2bcedc71f4d1159feff9ca1f2b68a4a3"
              }}
              style={styles.ImageBackground_I2255_124_1124_6606}
            />
            <View style={styles.View_I2255_124_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21de/c50c/6224f64820159a87a23841faa625a311"
            }}
            style={styles.ImageBackground_I2255_124_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_2255_125}>
        <View style={styles.View_I2255_125_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1852/85c8/37b3b388d10e294420b02660a3a33ca0"
            }}
            style={styles.ImageBackground_I2255_125_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc0/2ba7/551791e607fa4cf8f681480a7752f968"
            }}
            style={styles.ImageBackground_I2255_125_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69a/7f46/872b09ba3f6d4f7af7652b4d621287d6"
            }}
            style={styles.ImageBackground_I2255_125_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b04/97e0/fc92d54b2dcd0a6c25e36439d3b36762"
            }}
            style={styles.ImageBackground_I2255_125_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da8a/4d64/579ae633025f9a9282b0fc0768622d72"
            }}
            style={styles.ImageBackground_I2255_125_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcbd/54ee/da0e1205e4b65f83bd7e0cf34e692f76"
            }}
            style={styles.ImageBackground_I2255_125_1124_6591}
          />
          <View style={styles.View_I2255_125_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef5/dd48/aa9f94078d78ac6631901bbf6a6d7d60"
              }}
              style={styles.ImageBackground_I2255_125_1124_6593}
            />
            <View style={styles.View_I2255_125_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038b/748b/5285656a02c619356eae93db8578e1cd"
            }}
            style={styles.ImageBackground_I2255_125_1124_6595}
          />
        </View>
        <View style={styles.View_I2255_125_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39f6/c9fa/93f5be215b74ecdaa9d84a921edb802d"
            }}
            style={styles.ImageBackground_I2255_125_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5084/bde1/639ec423a6feefe846fb1ed2ec9e421b"
            }}
            style={styles.ImageBackground_I2255_125_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/7913/2d3fd6a22dc9ea0be4a13309f1095130"
            }}
            style={styles.ImageBackground_I2255_125_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc39/2d25/4348f8c0583bc0903c410ce139ca1768"
            }}
            style={styles.ImageBackground_I2255_125_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab7d/9ad4/b28bc8d12f43de948fca4ec35e03d0ee"
            }}
            style={styles.ImageBackground_I2255_125_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6fb/0ec6/073a21ef2c6c9291a34a228bf23f14d6"
            }}
            style={styles.ImageBackground_I2255_125_1124_6604}
          />
          <View style={styles.View_I2255_125_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34de/170e/d66cba6ef1c6279e8083b269e86af11c"
              }}
              style={styles.ImageBackground_I2255_125_1124_6606}
            />
            <View style={styles.View_I2255_125_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e6c/c46f/5291e0eb2f101870a5f4e1a0a2482a3a"
            }}
            style={styles.ImageBackground_I2255_125_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_2255_126}>
        <View style={styles.View_I2255_126_612_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/333a/b7c4/9dc393d63fb4000a99542099419e0772"
            }}
            style={styles.ImageBackground_I2255_126_612_9}
          />
          <View style={styles.View_I2255_126_606_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8fc/c80c/b299f1d9b17add7b7f7237deeb45c891"
              }}
              style={styles.ImageBackground_I2255_126_606_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8800/b734/e7dd061605d89f36450e8114da3e5b27"
              }}
              style={styles.ImageBackground_I2255_126_606_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0144/1a22/f1653fed3afb2de0e5097256c72fe76c"
              }}
              style={styles.ImageBackground_I2255_126_606_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e73/e1dd/e55f35ba0f8e07b4de87a78e1a81f3ac"
              }}
              style={styles.ImageBackground_I2255_126_606_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed30/0220/c65c2c98862fbcb2baaa227f721cfba7"
              }}
              style={styles.ImageBackground_I2255_126_606_11}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1700/cf01/c077734d9b81a1cb66155b02c976f94d"
            }}
            style={styles.ImageBackground_I2255_126_612_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ff/a460/20753928047c29c99f3dbbfba40e7822"
            }}
            style={styles.ImageBackground_I2255_126_612_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b73/b6df/b119c5add40edc8a7ede1145560fd3c8"
            }}
            style={styles.ImageBackground_I2255_126_612_11}
          />
        </View>
        <View style={styles.View_I2255_126_612_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ea/b87e/b01a2dba4e0040a6c54683b3de2a2f1d"
            }}
            style={styles.ImageBackground_I2255_126_612_20}
          />
          <View style={styles.View_I2255_126_612_21}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef3/b6e8/730639ddffc96b377e3c5c9b76193f54"
              }}
              style={styles.ImageBackground_I2255_126_612_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19da/2d3f/bf0ce769718ed37925e81318f0b51bea"
              }}
              style={styles.ImageBackground_I2255_126_612_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/265c/df89/f802ecad434fee151179896a0a22eca0"
              }}
              style={styles.ImageBackground_I2255_126_612_24}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea87/47b5/f5e0312261b3973a7cc8a7f27362d7eb"
              }}
              style={styles.ImageBackground_I2255_126_612_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb6a/1191/48701fb20fa94944c1955b93a315acd6"
              }}
              style={styles.ImageBackground_I2255_126_612_28}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f13/9a1b/1f3d013edc548f6079036226ef4ea08d"
            }}
            style={styles.ImageBackground_I2255_126_612_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9354/7259/95ab546ed21d235dfa20cbd58fda99db"
            }}
            style={styles.ImageBackground_I2255_126_612_30}
          />
          <View style={styles.View_I2255_126_639_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5940/29ed/7b1539b1a6dea96f3de3084f6668b2c4"
              }}
              style={styles.ImageBackground_I2255_126_639_427}
            />
            <View style={styles.View_I2255_126_639_428} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a8/ec56/adb1182383023a9237017ee29c310575"
            }}
            style={styles.ImageBackground_I2255_126_612_31}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714d/2fc2/9eb442ae9556818eed876e39571cab96"
        }}
        style={styles.ImageBackground_2255_127}
      />
      <View style={styles.View_2255_128}>
        <View style={styles.View_2255_129}>
          <View style={styles.View_2255_130}>
            <View style={styles.View_2255_131} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef79/c8ac/e84c1ac00319fb41616622e0cfe7c4d8"
          }}
          style={styles.ImageBackground_2255_132}
        />
        <View style={styles.View_2255_133}>
          <View style={styles.View_2255_134}>
            <View style={styles.View_I2255_134_1198_2104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
                }}
                style={styles.ImageBackground_I2255_134_1198_2104_890_409}
              />
            </View>
          </View>
          <View style={styles.View_2255_135}>
            <Text style={styles.Text_2255_135}>Blue Bottle Coffee</Text>
          </View>
        </View>
        <View style={styles.View_2255_136}>
          <View style={styles.View_2255_137}>
            <View style={styles.View_I2255_137_1198_2104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2416/5834/2df908c5e9e0a7f8ac26fe3a7da57879"
                }}
                style={styles.ImageBackground_I2255_137_1198_2104_890_409}
              />
            </View>
          </View>
          <View style={styles.View_2255_138}>
            <Text style={styles.Text_2255_138}>WeWork Coworking Space</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2255_139}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9008/1f15/13a60d2dc5e43f226f6b2be5da0317cc"
          }}
          style={styles.ImageBackground_I2255_139_890_409}
        />
      </View>
      <View style={styles.View_2255_140}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9008/1f15/13a60d2dc5e43f226f6b2be5da0317cc"
          }}
          style={styles.ImageBackground_I2255_140_890_409}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955c/b6fc/0527d5d00fe772ada7c3e545486ecdfa"
        }}
        style={styles.ImageBackground_2255_141}
      />
      <View style={styles.View_2255_142}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9643/134c/e66de8231d416213b62e79402c9af3a5"
          }}
          style={styles.ImageBackground_I2255_142_478_380}
        />
        <View style={styles.View_I2255_142_478_381}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
            }}
            style={styles.ImageBackground_I2255_142_478_381_1078_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2255_142_478_381_1078_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2255_142_478_381_1078_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8e/ffa7/73cc1dd53c6d749439dbd65da4d1a4be"
            }}
            style={styles.ImageBackground_I2255_142_478_381_1078_66}
          />
        </View>
      </View>
      <View style={styles.View_2255_143}>
        <View style={styles.View_I2255_143_1147_7440}>
          <View style={styles.View_I2255_143_1147_7441} />
        </View>
        <View style={styles.View_I2255_143_1147_7442}>
          <View style={styles.View_I2255_143_1147_7443} />
        </View>
        <View style={styles.View_I2255_143_1147_7444}>
          <View style={styles.View_I2255_143_1147_7445}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_I2255_143_1147_7446}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
              }}
              style={styles.ImageBackground_I2255_143_1147_7452}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
              }}
              style={styles.ImageBackground_I2255_143_1147_7453}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
            }}
            style={styles.ImageBackground_I2255_143_1147_7454}
          />
          <View style={styles.View_I2255_143_1147_7461}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/bf8d/925017302edca47807f877089a17458f"
              }}
              style={styles.ImageBackground_I2255_143_1147_7462}
            />
            <View style={styles.View_I2255_143_1147_7463}>
              <Text style={styles.Text_I2255_143_1147_7463}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7464}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1e/fafc/38bd3f8bc8fcd8744e55cb82fb70b08c"
              }}
              style={styles.ImageBackground_I2255_143_1147_7465}
            />
            <View style={styles.View_I2255_143_1147_7466}>
              <Text style={styles.Text_I2255_143_1147_7466}>space</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7467}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdd/463d/0100a1c79169024aefd5598942a33048"
              }}
              style={styles.ImageBackground_I2255_143_1147_7468}
            />
            <View style={styles.View_I2255_143_1147_7469}>
              <Text style={styles.Text_I2255_143_1147_7469}>123</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7470}>
            <View style={styles.View_I2255_143_1147_7471}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/c976/95b76f9efb93520a356a6e2c5c3a165f"
                }}
                style={styles.ImageBackground_I2255_143_1147_7472}
              />
              <View style={styles.View_I2255_143_1147_7473}>
                <Text style={styles.Text_I2255_143_1147_7473}> </Text>
              </View>
            </View>
            <View style={styles.View_I2255_143_1147_7474}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I2255_143_1147_7475}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                }}
                style={styles.ImageBackground_I2255_143_1147_7478}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I2255_143_1147_7479}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I2255_143_1147_7480}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I2255_143_1147_7481}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I2255_143_1147_7482}
              />
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7483}>
            <View style={styles.View_I2255_143_1147_7484}>
              <View style={styles.View_I2255_143_1147_7485} />
              <View style={styles.View_I2255_143_1147_7486}>
                <Text style={styles.Text_I2255_143_1147_7486}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ac/2208/1b89427f970c0fda6822b93ce347c041"
              }}
              style={styles.ImageBackground_I2255_143_1147_7487}
            />
          </View>
          <View style={styles.View_I2255_143_1147_7488}>
            <View style={styles.View_I2255_143_1147_7489} />
            <View style={styles.View_I2255_143_1147_7490}>
              <Text style={styles.Text_I2255_143_1147_7490}>M</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7491}>
            <View style={styles.View_I2255_143_1147_7492} />
            <View style={styles.View_I2255_143_1147_7493}>
              <Text style={styles.Text_I2255_143_1147_7493}>N</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7494}>
            <View style={styles.View_I2255_143_1147_7495} />
            <View style={styles.View_I2255_143_1147_7496}>
              <Text style={styles.Text_I2255_143_1147_7496}>B</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7497}>
            <View style={styles.View_I2255_143_1147_7498} />
            <View style={styles.View_I2255_143_1147_7499}>
              <Text style={styles.Text_I2255_143_1147_7499}>V</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7500}>
            <View style={styles.View_I2255_143_1147_7501} />
            <View style={styles.View_I2255_143_1147_7502}>
              <Text style={styles.Text_I2255_143_1147_7502}>C</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7503}>
            <View style={styles.View_I2255_143_1147_7504} />
            <View style={styles.View_I2255_143_1147_7505}>
              <Text style={styles.Text_I2255_143_1147_7505}>X</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7506}>
            <View style={styles.View_I2255_143_1147_7507} />
            <View style={styles.View_I2255_143_1147_7508}>
              <Text style={styles.Text_I2255_143_1147_7508}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7509}>
            <View style={styles.View_I2255_143_1147_7510} />
            <View style={styles.View_I2255_143_1147_7511}>
              <Text style={styles.Text_I2255_143_1147_7511}>L</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7512}>
            <View style={styles.View_I2255_143_1147_7513} />
            <View style={styles.View_I2255_143_1147_7514}>
              <Text style={styles.Text_I2255_143_1147_7514}>K</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7515}>
            <View style={styles.View_I2255_143_1147_7516} />
            <View style={styles.View_I2255_143_1147_7517}>
              <Text style={styles.Text_I2255_143_1147_7517}>J</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7518}>
            <View style={styles.View_I2255_143_1147_7519} />
            <View style={styles.View_I2255_143_1147_7520}>
              <Text style={styles.Text_I2255_143_1147_7520}>H</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7521}>
            <View style={styles.View_I2255_143_1147_7522} />
            <View style={styles.View_I2255_143_1147_7523}>
              <Text style={styles.Text_I2255_143_1147_7523}>G</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7524}>
            <View style={styles.View_I2255_143_1147_7525} />
            <View style={styles.View_I2255_143_1147_7526}>
              <Text style={styles.Text_I2255_143_1147_7526}>F</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7527}>
            <View style={styles.View_I2255_143_1147_7528} />
            <View style={styles.View_I2255_143_1147_7529}>
              <Text style={styles.Text_I2255_143_1147_7529}>D</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7530}>
            <View style={styles.View_I2255_143_1147_7531} />
            <View style={styles.View_I2255_143_1147_7532}>
              <Text style={styles.Text_I2255_143_1147_7532}>S</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7533}>
            <View style={styles.View_I2255_143_1147_7534} />
            <View style={styles.View_I2255_143_1147_7535}>
              <Text style={styles.Text_I2255_143_1147_7535}>A</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7536}>
            <View style={styles.View_I2255_143_1147_7537} />
            <View style={styles.View_I2255_143_1147_7538}>
              <Text style={styles.Text_I2255_143_1147_7538}>P</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7539}>
            <View style={styles.View_I2255_143_1147_7540} />
            <View style={styles.View_I2255_143_1147_7541}>
              <Text style={styles.Text_I2255_143_1147_7541}>O</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7542}>
            <View style={styles.View_I2255_143_1147_7543} />
            <View style={styles.View_I2255_143_1147_7544}>
              <Text style={styles.Text_I2255_143_1147_7544}>I</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7545}>
            <View style={styles.View_I2255_143_1147_7546} />
            <View style={styles.View_I2255_143_1147_7547}>
              <Text style={styles.Text_I2255_143_1147_7547}>U</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7548}>
            <View style={styles.View_I2255_143_1147_7549} />
            <View style={styles.View_I2255_143_1147_7550}>
              <Text style={styles.Text_I2255_143_1147_7550}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7551}>
            <View style={styles.View_I2255_143_1147_7552} />
            <View style={styles.View_I2255_143_1147_7553}>
              <Text style={styles.Text_I2255_143_1147_7553}>T</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7554}>
            <View style={styles.View_I2255_143_1147_7555} />
            <View style={styles.View_I2255_143_1147_7556}>
              <Text style={styles.Text_I2255_143_1147_7556}>R</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7557}>
            <View style={styles.View_I2255_143_1147_7558} />
            <View style={styles.View_I2255_143_1147_7559}>
              <Text style={styles.Text_I2255_143_1147_7559}>E</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7560}>
            <View style={styles.View_I2255_143_1147_7561} />
            <View style={styles.View_I2255_143_1147_7562}>
              <Text style={styles.Text_I2255_143_1147_7562}>W</Text>
            </View>
          </View>
          <View style={styles.View_I2255_143_1147_7563}>
            <View style={styles.View_I2255_143_1147_7564} />
            <View style={styles.View_I2255_143_1147_7565}>
              <Text style={styles.Text_I2255_143_1147_7565}>Q</Text>
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
  ImageBackground_2255_117: {
    width: wp("133.33333333333331%"),
    minWidth: wp("133.33333333333331%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.400000000000002%"),
    top: hp("-12.978142076502733%"),
    resizeMode: "cover"
  },
  View_2255_118: {
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
  View_2255_119: {
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
  View_I2255_119_1147_7815: {
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
  View_2255_120: {
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
  View_I2255_120_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2255_120_1147_7782: {
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
  ImageBackground_I2255_120_1147_7783: {
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
  View_I2255_120_1147_7784: {
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
  ImageBackground_I2255_120_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2255_120_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2255_120_1147_7794: {
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
  View_I2255_120_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2255_120_1147_7795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2255_121: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2255_122: {
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
  ImageBackground_I2255_122_890_368: {
    flexGrow: 1,
    width: wp("5.924825032552084%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23756510416666288%"),
    top: hp("0.12167008196721163%")
  },
  View_2255_123: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("7.5136612021857925%")
  },
  Text_2255_123: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_124: {
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
  View_I2255_124_1124_6583: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_124_1124_6584: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I2255_124_1124_6585: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899739583333343%")
  },
  ImageBackground_I2255_124_1124_6588: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547526041666671%")
  },
  ImageBackground_I2255_124_1124_6589: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_124_1124_6590: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5708333333333329%")
  },
  ImageBackground_I2255_124_1124_6591: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6341145833333357%")
  },
  View_I2255_124_1124_6592: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5520182291666629%")
  },
  ImageBackground_I2255_124_1124_6593: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0003255208333285964%")
  },
  View_I2255_124_1124_6594: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6755208333333371%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_124_1124_6595: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9821614583333371%")
  },
  View_I2255_124_1124_6596: {
    flexGrow: 1,
    width: wp("3.2276034037272137%"),
    height: hp("7.294788256369002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2276041666666657%"),
    top: hp("0%")
  },
  ImageBackground_I2255_124_1124_6597: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_124_1124_6598: {
    width: wp("2.9376233418782554%"),
    height: hp("7.294788256369002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_124_1124_6601: {
    width: wp("0.5695770899454752%"),
    height: hp("2.982757912307489%"),
    top: hp("2.7071593237704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0032552083333357%")
  },
  ImageBackground_I2255_124_1124_6602: {
    width: wp("0.7290197372436523%"),
    height: hp("0.518740493743146%"),
    top: hp("2.4478099385245926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.498567708333333%")
  },
  ImageBackground_I2255_124_1124_6603: {
    width: wp("1.329013188680013%"),
    height: hp("0.5673724445488935%"),
    top: hp("6.646495047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3277343750000057%")
  },
  ImageBackground_I2255_124_1124_6604: {
    width: wp("1.170797348022461%"),
    height: hp("0.6646362810187001%"),
    top: hp("0.14595073428962024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4227213541666686%")
  },
  View_I2255_124_1124_6605: {
    width: wp("1.6755345662434897%"),
    height: hp("1.1671661679210559%"),
    top: hp("5.414318647540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000651041666728247%")
  },
  ImageBackground_I2255_124_1124_6606: {
    width: wp("3.1643170674641925%"),
    height: hp("1.1671661679210559%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4884765625000114%")
  },
  View_I2255_124_1124_6607: {
    width: wp("5.5691980997721355%"),
    height: hp("10.147860792816662%"),
    top: hp("-6.289756232923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.569205729166676%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_124_1124_6608: {
    width: wp("2.245428975423177%"),
    height: hp("3.696026046419404%"),
    top: hp("1.815712517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2255_125: {
    width: wp("14.239426676432293%"),
    minWidth: wp("14.239426676432293%"),
    height: hp("3.306970700540178%"),
    minHeight: hp("3.306970700540178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("59.699453551912576%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_125_1124_6583: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6534857411202069%")
  },
  ImageBackground_I2255_125_1124_6584: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_125_1124_6585: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_125_1124_6588: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("1.0261910860655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284440104166666%")
  },
  ImageBackground_I2255_125_1124_6589: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("1.2799372438524657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I2255_125_1124_6590: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.6801250853825209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I2255_125_1124_6591: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.7289532103825209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I2255_125_1124_6592: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568815104166664%")
  },
  ImageBackground_I2255_125_1124_6593: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.7623057547814156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_125_1124_6594: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("-2.8531100580601034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277539062499999%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_125_1124_6595: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_I2255_125_1124_6596: {
    flexGrow: 1,
    width: wp("14.239426676432293%"),
    height: hp("1.653485350270089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_125_1124_6597: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784152613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_125_1124_6598: {
    width: wp("14.239426676432293%"),
    height: hp("1.5049299907163192%"),
    top: hp("0.14861893784152613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_125_1124_6601: {
    width: wp("5.822343444824219%"),
    height: hp("0.29179154198026397%"),
    top: hp("0.3353931864754074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.284440104166666%")
  },
  ImageBackground_I2255_125_1124_6602: {
    width: wp("1.012581443786621%"),
    height: hp("0.37347322604695304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778124999999999%")
  },
  ImageBackground_I2255_125_1124_6603: {
    width: wp("1.10751101175944%"),
    height: hp("0.6808469204303346%"),
    top: hp("0.29243510928961314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.973697916666666%")
  },
  ImageBackground_I2255_125_1124_6604: {
    width: wp("1.2973700205485026%"),
    height: hp("0.5997937233721624%"),
    top: hp("0.3247203722677483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2847656249999986%")
  },
  View_I2255_125_1124_6605: {
    width: wp("2.2783083597819007%"),
    height: hp("0.8583681179526074%"),
    top: hp("0.7951246584699376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568815104166664%")
  },
  ImageBackground_I2255_125_1124_6606: {
    width: wp("2.2783083597819007%"),
    height: hp("1.62106407144682%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_125_1124_6607: {
    width: wp("19.808624267578125%"),
    height: hp("2.8530727970144136%"),
    top: hp("0.8583610826502692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.277539062499999%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2255_125_1124_6608: {
    width: wp("7.214642842610678%"),
    height: hp("1.1503222210159718%"),
    top: hp("0.5032231898906971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5440104166666657%")
  },
  View_2255_126: {
    width: wp("14.599658203125%"),
    minWidth: wp("14.599658203125%"),
    height: hp("3.82571116171248%"),
    minHeight: hp("3.82571116171248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.160221354166667%"),
    top: hp("33.60655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2255_126_612_18: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("1.9128872397167436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_126_612_9: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.14861893784153324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_126_606_14: {
    width: wp("13.800673421223959%"),
    height: hp("0.8930547641274708%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3995442708333332%")
  },
  ImageBackground_I2255_126_606_2: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.33485954576503474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006510416666660745%")
  },
  ImageBackground_I2255_126_606_3: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.27109375%")
  },
  ImageBackground_I2255_126_606_4: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.40289873633879836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244075520833334%")
  },
  ImageBackground_I2255_126_606_8: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.907877604166667%")
  },
  ImageBackground_I2255_126_606_11: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.2604166666666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I2255_126_612_15: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.6326310621584739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21790364583333321%")
  },
  ImageBackground_I2255_126_612_13: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.7070739412568301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.275065104166667%")
  },
  ImageBackground_I2255_126_612_11: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.4837453039617543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.917252604166666%")
  },
  View_I2255_126_612_19: {
    flexGrow: 1,
    width: wp("14.599658203125%"),
    height: hp("2.010201235286525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.8157125170765056%")
  },
  ImageBackground_I2255_126_612_20: {
    width: wp("14.599658203125%"),
    height: hp("1.7642052447209595%"),
    top: hp("0.09712260928961314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2255_126_612_21: {
    width: wp("13.80067647298177%"),
    height: hp("0.8930931325818672%"),
    top: hp("1.1171768271857943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3995442708333332%")
  },
  ImageBackground_I2255_126_612_22: {
    width: wp("0.9079389572143555%"),
    height: hp("0.2604742844899496%"),
    top: hp("0.29777151639343913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2255_126_612_23: {
    width: wp("3.3412155151367187%"),
    height: hp("0.1860530650029417%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.27109375%")
  },
  ImageBackground_I2255_126_612_24: {
    width: wp("4.939188130696614%"),
    height: hp("0.45299562600141013%"),
    top: hp("0.0370880293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.244075520833334%")
  },
  ImageBackground_I2255_126_612_25: {
    width: wp("8.280403645833333%"),
    height: hp("0.6325804470666772%"),
    top: hp("0.2604166666666643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9079427083333336%")
  },
  ImageBackground_I2255_126_612_28: {
    width: wp("1.3437497456868488%"),
    height: hp("0.5767645080232882%"),
    top: hp("0.05576545423497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.456901041666665%")
  },
  ImageBackground_I2255_126_612_29: {
    width: wp("0.9442565282185872%"),
    height: hp("1.2802606071930767%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21790364583333321%")
  },
  ImageBackground_I2255_126_612_30: {
    width: wp("4.061094411214192%"),
    height: hp("1.205856291974177%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.275065104166667%")
  },
  View_I2255_126_639_426: {
    width: wp("0.6328634262084961%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5626953124999998%")
  },
  ImageBackground_I2255_126_639_427: {
    width: wp("0.5062907218933105%"),
    height: hp("0.1945276892250353%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1265624999999999%")
  },
  View_I2255_126_639_428: {
    width: wp("0.31643171310424806%"),
    height: hp("0.06484256171789325%"),
    top: hp("0.06483734631147797%"),
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
  ImageBackground_I2255_126_612_31: {
    width: wp("3.0506749471028645%"),
    height: hp("1.4291325553518828%"),
    top: hp("0.09738942964480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.917252604166666%")
  },
  ImageBackground_2255_127: {
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
  View_2255_128: {
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
  View_2255_129: {
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
  View_2255_130: {
    width: wp("100%"),
    height: hp("18.579234972677597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2255_131: {
    width: wp("100%"),
    height: hp("18.579234972677597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_2255_132: {
    width: wp("0%"),
    height: hp("4.098360655737705%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  View_2255_133: {
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
  View_2255_134: {
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
  View_I2255_134_1198_2104: {
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
  ImageBackground_I2255_134_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.1366120218579141%")
  },
  View_2255_135: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_2255_135: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_136: {
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
  View_2255_137: {
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
  View_I2255_137_1198_2104: {
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
  ImageBackground_I2255_137_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.13661202185793542%")
  },
  View_2255_138: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_2255_138: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2255_139: {
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
  ImageBackground_I2255_139_890_409: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("3.3352536581904513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777994791666572%"),
    top: hp("0.14808529713114993%")
  },
  View_2255_140: {
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
  ImageBackground_I2255_140_890_409: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("3.3352536581904513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777994791666696%"),
    top: hp("0.14808529713114638%")
  },
  ImageBackground_2255_141: {
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
  View_2255_142: {
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
  ImageBackground_I2255_142_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_142_478_381: {
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
  ImageBackground_I2255_142_478_381_1078_61: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I2255_142_478_381_1078_62: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I2255_142_478_381_1078_63: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_I2255_142_478_381_1078_66: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("1.63934426229509%")
  },
  View_2255_143: {
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
  View_I2255_143_1147_7440: {
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
  View_I2255_143_1147_7441: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I2255_143_1147_7442: {
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
  View_I2255_143_1147_7443: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_I2255_143_1147_7444: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I2255_143_1147_7445: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("31.83060109289616%")
  },
  ImageBackground_I2255_143_1147_7446: {
    width: wp("4%"),
    height: hp("2.003851744646583%"),
    minHeight: hp("2.003851744646583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4114796789617685%")
  },
  ImageBackground_I2255_143_1147_7452: {
    width: wp("2.401971689860026%"),
    height: hp("2.458455393223163%"),
    minHeight: hp("2.458455393223163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0%")
  },
  ImageBackground_I2255_143_1147_7453: {
    width: wp("1.512916310628255%"),
    height: hp("2.003853568613855%"),
    minHeight: hp("2.003853568613855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2442708333333314%"),
    top: hp("0.22786458333335702%")
  },
  ImageBackground_I2255_143_1147_7454: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("31.69398907103826%")
  },
  View_I2255_143_1147_7461: {
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
  ImageBackground_I2255_143_1147_7462: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_143_1147_7463: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2255_143_1147_7463: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2255_143_1147_7464: {
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
  ImageBackground_I2255_143_1147_7465: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_143_1147_7466: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2255_143_1147_7466: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2255_143_1147_7467: {
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
  ImageBackground_I2255_143_1147_7468: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_143_1147_7469: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2255_143_1147_7469: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2255_143_1147_7470: {
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
  View_I2255_143_1147_7471: {
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
  ImageBackground_I2255_143_1147_7472: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2255_143_1147_7473: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2255_143_1147_7473: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I2255_143_1147_7474: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    minHeight: hp("2.3216109458214595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.575976562500003%"),
    top: hp("1.7295295423497379%")
  },
  ImageBackground_I2255_143_1147_7475: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    minHeight: hp("2.3216109458214595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2255_143_1147_7478: {
    width: wp("1.7841803232828777%"),
    height: hp("0.9131669998168945%"),
    minHeight: hp("0.9131669998168945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613281249999915%"),
    top: hp("0.7033384562841434%")
  },
  ImageBackground_I2255_143_1147_7479: {
    width: wp("0.3007041931152344%"),
    height: hp("0.15417674525839384%"),
    minHeight: hp("0.15417674525839384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287044270833334%"),
    top: hp("0.6798582650273204%")
  },
  ImageBackground_I2255_143_1147_7480: {
    width: wp("0.30211896896362306%"),
    height: hp("0.15477867074351492%"),
    minHeight: hp("0.15477867074351492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.71731770833334%"),
    top: hp("1.4832543545081904%")
  },
  ImageBackground_I2255_143_1147_7481: {
    width: wp("0.30095300674438474%"),
    height: hp("0.15404927925985368%"),
    minHeight: hp("0.15404927925985368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289713541666657%"),
    top: hp("1.4840548155737565%")
  },
  ImageBackground_I2255_143_1147_7482: {
    width: wp("0.3021279652913411%"),
    height: hp("0.1547740619690692%"),
    minHeight: hp("0.1547740619690692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.72018229166666%"),
    top: hp("0.6798582650273204%")
  },
  View_I2255_143_1147_7483: {
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
  View_I2255_143_1147_7484: {
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
  View_I2255_143_1147_7485: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7486: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7486: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I2255_143_1147_7487: {
    width: wp("5.034666442871093%"),
    height: hp("2.2481243467070366%"),
    minHeight: hp("2.2481243467070366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1093098958333334%"),
    top: hp("1.6665599385245997%")
  },
  View_I2255_143_1147_7488: {
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
  View_I2255_143_1147_7489: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7490: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7490: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7491: {
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
  View_I2255_143_1147_7492: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7493: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7493: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7494: {
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
  View_I2255_143_1147_7495: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7496: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7496: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7497: {
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
  View_I2255_143_1147_7498: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7499: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7499: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7500: {
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
  View_I2255_143_1147_7501: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7502: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7502: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7503: {
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
  View_I2255_143_1147_7504: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7505: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7505: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7506: {
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
  View_I2255_143_1147_7507: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7508: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%")
  },
  Text_I2255_143_1147_7508: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7509: {
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
  View_I2255_143_1147_7510: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7511: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7511: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7512: {
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
  View_I2255_143_1147_7513: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7514: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7514: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7515: {
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
  View_I2255_143_1147_7516: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7517: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7517: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7518: {
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
  View_I2255_143_1147_7519: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7520: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7520: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7521: {
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
  View_I2255_143_1147_7522: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7523: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7523: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7524: {
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
  View_I2255_143_1147_7525: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7526: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7526: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7527: {
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
  View_I2255_143_1147_7528: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7529: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7529: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7530: {
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
  View_I2255_143_1147_7531: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7532: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7532: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7533: {
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
  View_I2255_143_1147_7534: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7535: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%")
  },
  Text_I2255_143_1147_7535: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7536: {
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
  View_I2255_143_1147_7537: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7538: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7538: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7539: {
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
  View_I2255_143_1147_7540: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7541: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7541: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7542: {
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
  View_I2255_143_1147_7543: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7544: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7544: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7545: {
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
  View_I2255_143_1147_7546: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7547: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7547: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7548: {
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
  View_I2255_143_1147_7549: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7550: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7550: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7551: {
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
  View_I2255_143_1147_7552: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7553: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7553: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7554: {
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
  View_I2255_143_1147_7555: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7556: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7556: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7557: {
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
  View_I2255_143_1147_7558: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7559: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7559: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7560: {
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
  View_I2255_143_1147_7561: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7562: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7562: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I2255_143_1147_7563: {
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
  View_I2255_143_1147_7564: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I2255_143_1147_7565: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I2255_143_1147_7565: {
    color: "rgba(20, 20, 43, 1)",
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
