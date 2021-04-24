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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5051/6ba9/fa3b66f7001bcf76e0d2dae1def3a65f"
        }}
        style={styles.ImageBackground_1353_19741}
      />
      <View style={styles.View_1353_19742}>
        <View style={styles.View_I1353_19742_527_354}>
          <View style={styles.View_I1353_19742_527_354_4_228} />
        </View>
      </View>
      <View style={styles.View_2201_6789}>
        <View style={styles.View_I2201_6789_527_354}>
          <View style={styles.View_I2201_6789_527_354_4_228} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/1d13/834313a41b82aa6e9dd077d1baf22ef1"
        }}
        style={styles.ImageBackground_1353_19743}
      />
      <View style={styles.View_1353_19744}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/8b0b/f0d9bbcfe396738cc3308c9aea6a07c6"
          }}
          style={styles.ImageBackground_I1353_19744_890_368}
        />
      </View>
      <View style={styles.View_1353_19745}>
        <Text style={styles.Text_1353_19745}>ShareRide</Text>
      </View>
      <View style={styles.View_1353_19746}>
        <View style={styles.View_I1353_19746_322_958}>
          <View style={styles.View_I1353_19746_322_960}>
            <Text style={styles.Text_I1353_19746_322_960}>Where to?</Text>
          </View>
        </View>
        <View style={styles.View_I1353_19746_322_961}>
          <View style={styles.View_I1353_19746_322_962}>
            <View style={styles.View_I1353_19746_322_962_891_3806}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e919/703d/e10769c8a9a570b978a9e34d416fc735"
                }}
                style={styles.ImageBackground_I1353_19746_322_962_890_849}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0461/e022/b2dbb6c03f3ef36bf584db1c9a24e9ab"
                }}
                style={styles.ImageBackground_I1353_19746_322_962_890_848}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
              }}
              style={styles.ImageBackground_I1353_19746_322_962_890_847}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef79/c8ac/e84c1ac00319fb41616622e0cfe7c4d8"
        }}
        style={styles.ImageBackground_1353_19747}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eef7/99f7/bf0594cde48ca169b4882af5020c4718"
        }}
        style={styles.ImageBackground_1353_19748}
      />
      <View style={styles.View_1353_19749}>
        <View style={styles.View_1353_19750}>
          <View style={styles.View_I1353_19750_1198_2104}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
              }}
              style={styles.ImageBackground_I1353_19750_1198_2104_890_409}
            />
          </View>
        </View>
        <View style={styles.View_1353_19751}>
          <Text style={styles.Text_1353_19751}>Blue Bottle Coffee</Text>
        </View>
      </View>
      <View style={styles.View_2201_6941}>
        <View style={styles.View_I2201_6941_527_354}>
          <View style={styles.View_I2201_6941_527_354_4_228} />
        </View>
      </View>
      <View style={styles.View_1353_19752}>
        <View style={styles.View_1353_19753}>
          <View style={styles.View_I1353_19753_1198_2104}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f3/85e4/fabdcc2da19d83f5e1306a8f0cefbe55"
              }}
              style={styles.ImageBackground_I1353_19753_1198_2104_890_409}
            />
          </View>
        </View>
        <View style={styles.View_1353_19754}>
          <Text style={styles.Text_1353_19754}>WeWork Coworking Space</Text>
        </View>
      </View>
      <View style={styles.View_2201_6780}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9643/134c/e66de8231d416213b62e79402c9af3a5"
          }}
          style={styles.ImageBackground_I2201_6780_478_380}
        />
        <View style={styles.View_I2201_6780_478_381}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
            }}
            style={styles.ImageBackground_I2201_6780_478_381_1078_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2201_6780_478_381_1078_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca70/5df9/19a6d73abea16510ca0dcbf637e6baca"
            }}
            style={styles.ImageBackground_I2201_6780_478_381_1078_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8e/ffa7/73cc1dd53c6d749439dbd65da4d1a4be"
            }}
            style={styles.ImageBackground_I2201_6780_478_381_1078_66}
          />
        </View>
      </View>
      <View style={styles.View_1353_19756}>
        <Text style={styles.Text_1353_19756}>Enter Destination</Text>
      </View>
      <View style={styles.View_1353_19757}>
        <View style={styles.View_I1353_19757_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5db/1ee1/8c2a16cf760eb9098fafb837737c4963"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ede9/a8ef/31200086c9dcfd42dbf542cf18f291ee"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c7/ee55/2eb19693dffc6bdcd588a3a29deacb85"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6d/3897/84b062231c119a64e1340b8bd6bc04d7"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dbb/5afb/ad5fff03d0134f003edd9bdc65a7472c"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25e6/6d67/94351a8b3112c63d3ee17d190914f9b2"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6591}
          />
          <View style={styles.View_I1353_19757_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0227/0784/cc8f32d85eb6dbf84ab584e76159a9e5"
              }}
              style={styles.ImageBackground_I1353_19757_1124_6593}
            />
            <View style={styles.View_I1353_19757_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c776/2f8f/358f6f3dc54821a2096328ca14d93527"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6595}
          />
        </View>
        <View style={styles.View_I1353_19757_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b2/672e/7bbcba7bb9b72982528e617bcb006106"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73fc/c05b/e6b9dbb378d6ca603562656ac1d60634"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5799/dc3f/8e9206dcce0bcc224cf806e5af5cecc4"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290d/2b29/061696e0d679333317047813208ac39b"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed55/d893/d22035c3fa63051a315bb5e0f0a848e1"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4113/d06f/709529384a2e378bf8bc7f55e60e1bdd"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6604}
          />
          <View style={styles.View_I1353_19757_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/982f/354e/53d24a2f0759211fba466a3115eb6ff7"
              }}
              style={styles.ImageBackground_I1353_19757_1124_6606}
            />
            <View style={styles.View_I1353_19757_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/311c/7f70/f35956491190ab8c968eebd410d02487"
            }}
            style={styles.ImageBackground_I1353_19757_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_1353_19758}>
        <View style={styles.View_I1353_19758_1124_6629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbe6/b811/f956ec3c591deb643da9ae2533d10598"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6630}
          />
          <View style={styles.View_I1353_19758_1124_6631}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5cf/90cb/07d8183d8087bbaeea1a9a73db7d1107"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7833/1585/806c43fe04c33222f0482f81639d8f8d"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15af/7299/6a9ffd3402203f93429cf0877d6f8dcf"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74e/58d3/25e50b478f1cbc6ed4ed7d9fcaf5a3b9"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5042/4b08/a42ab9e38015f584c12d6bf471f4f3fd"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6638}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/0f55/cd6108218513983acee0cdb48b3173db"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4726/64c1/8faac4f115ea3db9b1fad37fa55d5607"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3266/c45b/dbb54ce80bb12668c545b60d896e1ac4"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6641}
          />
        </View>
        <View style={styles.View_I1353_19758_1124_6642}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12e/cf12/b53ca4eb08140922aac5d3022732d546"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6643}
          />
          <View style={styles.View_I1353_19758_1124_6644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a78/e29d/ea92d95decee47bafa038081b84fea59"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da05/c0b8/103b0891172e8723c59ca406d009aff8"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2231/f5c4/6e69f128d97c9cc2654ea7e658ea492c"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a7d/921c/dbfaef8a325d8d14bbadd2b366918bb8"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6648}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dfb/c517/2444048b09f6f55e27574c5ec89ab479"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6651}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2edb/361c/bc5ff5397950cb63f71ac9c80c0d17bc"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b320/7b02/b6afef1e9b6fc3e13c1dd1ec2c0942e9"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6653}
          />
          <View style={styles.View_I1353_19758_1124_6654}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf5c/7781/f50fb5ee73ad50d753cecafeff2854b7"
              }}
              style={styles.ImageBackground_I1353_19758_1124_6655}
            />
            <View style={styles.View_I1353_19758_1124_6656} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e63/b2f4/c9ecb298b628c19ebcc6f3850beec323"
            }}
            style={styles.ImageBackground_I1353_19758_1124_6657}
          />
        </View>
      </View>
      <View style={styles.View_1353_19759}>
        <View style={styles.View_I1353_19759_1124_6583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d8/300c/4a9d0370a93e415a99e122234a56e82e"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f6/302e/f0cb2e019debae19e4b0f6a336fc987d"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c7/73bd/68b4e24d3a28d02146169d0f46b571dc"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebb2/7453/83bddf0737a962742f1c29de18cc291f"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2f/0804/670b446518afc660dee962c800188cb6"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8444/2fe4/1f8484233ce7be5c66a074d9ddf86f08"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6591}
          />
          <View style={styles.View_I1353_19759_1124_6592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b765/c15b/d16dc21060b6942cdb7fbd051f0fa7bc"
              }}
              style={styles.ImageBackground_I1353_19759_1124_6593}
            />
            <View style={styles.View_I1353_19759_1124_6594} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6706/6707/153dea7ef8e8638c4f1dabfd98cfd36e"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6595}
          />
        </View>
        <View style={styles.View_I1353_19759_1124_6596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d8b/6121/1eb06086bb818824e852c476622f8d35"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbd/89b8/25bab317e1c87643f44678302a1e003c"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460e/a5fd/bfbf1cd58ad1ff359edad18c1acdf729"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/965a/1650/d57a39aefbf626acbcc4dc8198070868"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7830/ce91/2821c6e152f95b4f17f207533c2048ab"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2ed/d312/c4d7a7c9d00214cdd536b4bcf05176f2"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6604}
          />
          <View style={styles.View_I1353_19759_1124_6605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e80/6be1/a453662f206d0c0d8e08b118ce2ee509"
              }}
              style={styles.ImageBackground_I1353_19759_1124_6606}
            />
            <View style={styles.View_I1353_19759_1124_6607} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e51/1092/cc3189ebd36de45370ee463e1f9abbf2"
            }}
            style={styles.ImageBackground_I1353_19759_1124_6608}
          />
        </View>
      </View>
      <View style={styles.View_1353_19760}>
        <View style={styles.View_I1353_19760_612_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a6/2979/8cb6138061bc9db202c9bb73f1927b89"
            }}
            style={styles.ImageBackground_I1353_19760_612_9}
          />
          <View style={styles.View_I1353_19760_606_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/760a/6316/97a3e9e7d0996bc99bb27ed9e82003cc"
              }}
              style={styles.ImageBackground_I1353_19760_606_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ba/f053/1534560523f193de28cee267dae276f5"
              }}
              style={styles.ImageBackground_I1353_19760_606_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5e0/2a78/6254c28d31fdddee4361c1e1b21f8421"
              }}
              style={styles.ImageBackground_I1353_19760_606_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74e/58d3/25e50b478f1cbc6ed4ed7d9fcaf5a3b9"
              }}
              style={styles.ImageBackground_I1353_19760_606_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4335/dd9b/2af81721595b40ca62e23983811fcc05"
              }}
              style={styles.ImageBackground_I1353_19760_606_11}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e3/0f55/cd6108218513983acee0cdb48b3173db"
            }}
            style={styles.ImageBackground_I1353_19760_612_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4726/64c1/8faac4f115ea3db9b1fad37fa55d5607"
            }}
            style={styles.ImageBackground_I1353_19760_612_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3266/c45b/dbb54ce80bb12668c545b60d896e1ac4"
            }}
            style={styles.ImageBackground_I1353_19760_612_11}
          />
        </View>
        <View style={styles.View_I1353_19760_612_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fe/e525/d67b04719183f8294c84814acd62c275"
            }}
            style={styles.ImageBackground_I1353_19760_612_20}
          />
          <View style={styles.View_I1353_19760_612_21}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a5/51a1/93e30591d1efe19a508dc07b18015f32"
              }}
              style={styles.ImageBackground_I1353_19760_612_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758c/ea06/b2fe83e7c191101b88d087654b7e23aa"
              }}
              style={styles.ImageBackground_I1353_19760_612_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f5/af7c/4fc9293909f1a508cddb23aa28563a06"
              }}
              style={styles.ImageBackground_I1353_19760_612_24}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a7d/921c/dbfaef8a325d8d14bbadd2b366918bb8"
              }}
              style={styles.ImageBackground_I1353_19760_612_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/087b/627d/0a569b537f0ff6bd992ce50abcd452b4"
              }}
              style={styles.ImageBackground_I1353_19760_612_28}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2edb/361c/bc5ff5397950cb63f71ac9c80c0d17bc"
            }}
            style={styles.ImageBackground_I1353_19760_612_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b320/7b02/b6afef1e9b6fc3e13c1dd1ec2c0942e9"
            }}
            style={styles.ImageBackground_I1353_19760_612_30}
          />
          <View style={styles.View_I1353_19760_639_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf5c/7781/f50fb5ee73ad50d753cecafeff2854b7"
              }}
              style={styles.ImageBackground_I1353_19760_639_427}
            />
            <View style={styles.View_I1353_19760_639_428} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e63/b2f4/c9ecb298b628c19ebcc6f3850beec323"
            }}
            style={styles.ImageBackground_I1353_19760_612_31}
          />
        </View>
      </View>
      <View style={styles.View_2201_6874}>
        <View style={styles.View_I2201_6874_1124_6629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78de/c3ad/60a732b5418c4e7b3fda9f9bed8886e5"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6630}
          />
          <View style={styles.View_I2201_6874_1124_6631}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd57/aed5/c790420afc0307a76611884533c37b51"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7833/1585/806c43fe04c33222f0482f81639d8f8d"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3e9/703c/5d7b05a829f84bc2f7777cb61610cc71"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8910/2d62/3c998607a31af7c0732836eeb2f6b824"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf7f/993e/4f1e312e2177a1672781b74c9ef875fc"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6638}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ff/753b/417202f4d91634546186af624ce4ac06"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e23/4922/26ac4db35c1dfd8b5745e89ec8aed9a3"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536a/6f9b/c16f8d370b31374a27810fa85f04b207"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6641}
          />
        </View>
        <View style={styles.View_I2201_6874_1124_6642}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2f/81be/33fe4ab51595679899bf1be9b2614eb6"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6643}
          />
          <View style={styles.View_I2201_6874_1124_6644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e5e/8d0d/f31671f64b51386150c9b42c5a969c48"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da05/c0b8/103b0891172e8723c59ca406d009aff8"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed3/e0f1/f918a2cb96cafec7fa96ef52591c43cc"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d4/25fe/f12c3c71643087f8add7ed4f8aa1e35f"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6648}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b800/460f/9491faed6b90881d0798592b2a6f57ba"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6651}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc8/c52d/6964534fa65acf2f89dd330217aff0ca"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0d/0f3f/bc55b694ca4cacbdcc76a35bd151f6f8"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6653}
          />
          <View style={styles.View_I2201_6874_1124_6654}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e5c/fce7/4469936b899ba1929b89967392627596"
              }}
              style={styles.ImageBackground_I2201_6874_1124_6655}
            />
            <View style={styles.View_I2201_6874_1124_6656} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ca/b757/66b738133593b07c08fa2d6bd56b8886"
            }}
            style={styles.ImageBackground_I2201_6874_1124_6657}
          />
        </View>
      </View>
      <View style={styles.View_2201_6792}>
        <View style={styles.View_I2201_6792_612_46}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c322/b9cb/e8ec2000fa9ffd94ab117d8edb3e3c0c"
            }}
            style={styles.ImageBackground_I2201_6792_612_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6118/cc3f/570a932da52eb029dbdf21e42db912a7"
            }}
            style={styles.ImageBackground_I2201_6792_612_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff5f/cd5f/99246751b74b4299437527c1db59ee31"
            }}
            style={styles.ImageBackground_I2201_6792_612_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a417/ee31/c0569618acbcb5105e007dd296a1afcc"
            }}
            style={styles.ImageBackground_I2201_6792_612_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5510/5349/79545a1c7295df7c0a556f396ead7cb7"
            }}
            style={styles.ImageBackground_I2201_6792_612_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c268/6b66/02f8b477652760bd80d7630f5de6c8d3"
            }}
            style={styles.ImageBackground_I2201_6792_612_54}
          />
          <View style={styles.View_I2201_6792_612_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8090/af17/74922b63ed6ff56f117a0357b80a4c9c"
              }}
              style={styles.ImageBackground_I2201_6792_612_56}
            />
            <View style={styles.View_I2201_6792_612_57} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592c/91d7/91d3772f8606ede48df246871233e08a"
            }}
            style={styles.ImageBackground_I2201_6792_612_58}
          />
        </View>
        <View style={styles.View_I2201_6792_612_59}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0753/9f73/cf123acdb14d67d06bcf1ca3d7267275"
            }}
            style={styles.ImageBackground_I2201_6792_612_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa2/5d09/6471e54a5c82c35aaf372e8af4d54580"
            }}
            style={styles.ImageBackground_I2201_6792_612_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f306/8850/ae6315d90059057c1b0ddeab951977f5"
            }}
            style={styles.ImageBackground_I2201_6792_612_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/7efc/4af0b294bc52e856a141f7fb2758dee2"
            }}
            style={styles.ImageBackground_I2201_6792_612_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8438/873c/16e189deae13d6a8c5c75ae68a8c0cbf"
            }}
            style={styles.ImageBackground_I2201_6792_612_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef2/29af/03d6f12b99c73ed6d963bbcf1454cf38"
            }}
            style={styles.ImageBackground_I2201_6792_612_67}
          />
          <View style={styles.View_I2201_6792_612_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdce/8434/b941b0c79ecfc399b61d01e303d79371"
              }}
              style={styles.ImageBackground_I2201_6792_612_69}
            />
            <View style={styles.View_I2201_6792_612_70} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe4/eaa8/1dd39f51da4036e7fa48bb02ca58e600"
            }}
            style={styles.ImageBackground_I2201_6792_612_71}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee08/df50/da49bd67f21b42b9248ce235e83ead3b"
        }}
        style={styles.ImageBackground_1353_19761}
      />
      <View style={styles.View_1353_19762}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dd7/1be1/4de47c14a5791c14cd2659a26c9781bf"
          }}
          style={styles.ImageBackground_I1353_19762_890_409}
        />
      </View>
      <View style={styles.View_2201_6933}>
        <View style={styles.View_I2201_6933_248_18} />
        <View style={styles.View_I2201_6933_248_17} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c737/3491/e8f95c5f7dedb03fa6e92c1ad4ff5acc"
          }}
          style={styles.ImageBackground_I2201_6933_248_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f54e/8e77/43d3813616ee2c2db5aecda0ca390116"
          }}
          style={styles.ImageBackground_I2201_6933_248_21}
        />
        <View style={styles.View_I2201_6933_248_19}>
          <Text text="" style={styles.Text_I2201_6933_248_19} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1353_19741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174.86338797814207%"),
    minHeight: hp("174.86338797814207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    resizeMode: "cover"
  },
  View_1353_19742: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("53.278688524590166%"),
    minHeight: hp("53.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("116.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19742_527_354: {
    flexGrow: 1,
    width: wp("16.822916666666668%"),
    height: hp("53.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19742_527_354_4_228: {
    flexGrow: 1,
    width: wp("16.822916666666668%"),
    height: hp("53.278688524590166%"),
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
  View_2201_6789: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("3.415300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6789_527_354: {
    flexGrow: 1,
    width: wp("16.822916666666668%"),
    height: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6789_527_354_4_228: {
    flexGrow: 1,
    width: wp("16.822916666666668%"),
    height: hp("11.885245901639344%"),
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
  ImageBackground_1353_19743: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%")
  },
  View_1353_19744: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.46875%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_19744_890_368: {
    flexGrow: 1,
    width: wp("1.1571923891703286%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04640420277913293%"),
    top: hp("0.12167008196721163%")
  },
  View_1353_19745: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("7.5136612021857925%")
  },
  Text_1353_19745: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1353_19746: {
    width: wp("14.739583333333334%"),
    minWidth: wp("14.739583333333334%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("126.22950819672131%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1353_19746_322_958: {
    flexGrow: 1,
    width: wp("4.270833333333333%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19746_322_960: {
    width: wp("4.270833333333333%"),
    minWidth: wp("4.270833333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475272%")
  },
  Text_I1353_19746_322_960: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1353_19746_322_961: {
    flexGrow: 1,
    width: wp("3.75%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19746_322_962: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("3.005464480874295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19746_322_962_891_3806: {
    flexGrow: 1,
    width: wp("1.1110058426856995%"),
    height: hp("2.749014682457095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333333304%"),
    top: hp("0.14034750683060793%")
  },
  ImageBackground_I1353_19746_322_962_890_849: {
    width: wp("1.425340970357259%"),
    minWidth: wp("1.425340970357259%"),
    height: hp("3.336682606264542%"),
    minHeight: hp("3.336682606264542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.20051638285318996%"),
    top: hp("-0.40930242486336965%")
  },
  ImageBackground_I1353_19746_322_962_890_848: {
    width: wp("1.1458333333333333%"),
    height: hp("3.0054644808743167%"),
    top: hp("-0.0037354849726796147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19746_322_962_890_847: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333333304%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_1353_19747: {
    width: wp("9.251858538542972e-17%"),
    height: hp("4.098360655737705%"),
    top: hp("140.5737704918033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%")
  },
  ImageBackground_1353_19748: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("120.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%")
  },
  View_1353_19749: {
    width: wp("10.9375%"),
    minWidth: wp("10.9375%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("137.56830601092895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_19750: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19750_1198_2104: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_19750_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666696%"),
    top: hp("0.1366120218579283%")
  },
  View_1353_19751: {
    width: wp("9.270833333333334%"),
    minWidth: wp("9.270833333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("0%")
  },
  Text_1353_19751: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_6941: {
    width: wp("10.052083333333334%"),
    minWidth: wp("10.052083333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23958333333333%"),
    top: hp("162.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6941_527_354: {
    flexGrow: 1,
    width: wp("10.052083333333334%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6941_527_354_4_228: {
    flexGrow: 1,
    width: wp("10.052083333333334%"),
    height: hp("7.650273224043716%"),
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
  View_1353_19752: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("144.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1353_19753: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19753_1198_2104: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_19753_1198_2104_890_409: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("3.073113863585425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666696%"),
    top: hp("0.1366120218579283%")
  },
  View_1353_19754: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("0%")
  },
  Text_1353_19754: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_6780: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.95833333333333%"),
    top: hp("162.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_6780_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2201_6780_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_6780_478_381_1078_61: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333334281%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I2201_6780_478_381_1078_62: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6250000000000142%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I2201_6780_478_381_1078_63: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6250000000000142%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_I2201_6780_478_381_1078_66: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333334281%"),
    top: hp("1.639344262295083%")
  },
  View_1353_19756: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3958333333333335%"),
    top: hp("118.85245901639345%")
  },
  Text_1353_19756: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1353_19757: {
    width: wp("2.0405896504720054%"),
    minWidth: wp("2.0405896504720054%"),
    height: hp("11.806690236909793%"),
    minHeight: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.81250317891439%"),
    top: hp("55.46394723360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19757_1124_6583: {
    flexGrow: 1,
    width: wp("1.0202948252360027%"),
    height: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0202948252360002%"),
    top: hp("0%")
  },
  ImageBackground_I1353_19757_1124_6584: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19757_1124_6585: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19757_1124_6588: {
    width: wp("0.18005202213923135%"),
    height: hp("4.8276244616899335%"),
    top: hp("2.5974961577868783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6332715352376326%")
  },
  ImageBackground_I1353_19757_1124_6589: {
    width: wp("0.23045430580774942%"),
    height: hp("0.8395868572381026%"),
    top: hp("7.005368425546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7898394266764299%")
  },
  ImageBackground_I1353_19757_1124_6590: {
    width: wp("0.4201214015483856%"),
    height: hp("0.9182981454609521%"),
    top: hp("0.13127561475409522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41973114013671875%")
  },
  ImageBackground_I1353_19757_1124_6591: {
    width: wp("0.3701069454352061%"),
    height: hp("1.0757206567649633%"),
    top: hp("10.494845030737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44973691304524976%")
  },
  View_I1353_19757_1124_6592: {
    width: wp("0.5296621223290762%"),
    height: hp("1.8890703962148865%"),
    top: hp("1.154531676912562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000003178914390389309%")
  },
  ImageBackground_I1353_19757_1124_6593: {
    width: wp("1.0002890229225159%"),
    height: hp("1.8890703962148865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.470527013142906%")
  },
  View_I1353_19757_1124_6594: {
    width: wp("1.76050861676534%"),
    height: hp("16.424417756294293%"),
    top: hp("-4.355308657786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7605082194010464%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_19757_1124_6595: {
    width: wp("0.7098144789536794%"),
    height: hp("5.982056602102811%"),
    top: hp("2.886195782103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19757_1124_6596: {
    flexGrow: 1,
    width: wp("1.0202948252360027%"),
    height: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_19757_1124_6597: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09166717529296164%")
  },
  ImageBackground_I1353_19757_1124_6598: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09166717529296164%")
  },
  ImageBackground_I1353_19757_1124_6601: {
    width: wp("0.18005202213923135%"),
    height: hp("4.8276244616899335%"),
    top: hp("2.5974961577868783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20697275797525805%")
  },
  ImageBackground_I1353_19757_1124_6602: {
    width: wp("0.23045430580774942%"),
    height: hp("0.8395868572381026%"),
    top: hp("7.005368425546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19757_1124_6603: {
    width: wp("0.4201214015483856%"),
    height: hp("0.9182981454609521%"),
    top: hp("0.13127561475409522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18044153849283617%")
  },
  ImageBackground_I1353_19757_1124_6604: {
    width: wp("0.3701069454352061%"),
    height: hp("1.0757206567649633%"),
    top: hp("10.494845030737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2004496256510393%")
  },
  View_I1353_19757_1124_6605: {
    width: wp("0.5296621223290762%"),
    height: hp("1.8890703962148865%"),
    top: hp("1.154531676912562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49063046773274266%")
  },
  ImageBackground_I1353_19757_1124_6606: {
    width: wp("1.0002890229225159%"),
    height: hp("1.8890703962148865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00010172526041429819%")
  },
  View_I1353_19757_1124_6607: {
    width: wp("1.76050861676534%"),
    height: hp("16.424417756294293%"),
    top: hp("-4.355308657786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5296611785888743%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_19757_1124_6608: {
    width: wp("0.7098144789536794%"),
    height: hp("5.982056602102811%"),
    top: hp("2.886195782103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31048138936360203%")
  },
  View_1353_19758: {
    width: wp("4.615175326665242%"),
    minWidth: wp("4.615175326665242%"),
    height: hp("6.19195302327474%"),
    minHeight: hp("6.19195302327474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.90625%"),
    top: hp("84.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19758_1124_6629: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.0960278432877337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0959165812841576%")
  },
  ImageBackground_I1353_19758_1124_6630: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19758_1124_6631: {
    width: wp("4.362603823343913%"),
    height: hp("1.4454183682717912%"),
    top: hp("1.6505507172131075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12628555297851562%")
  },
  ImageBackground_I1353_19758_1124_6632: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.48161074112022106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0755907694498745%")
  },
  ImageBackground_I1353_19758_1124_6633: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.90457407633464%")
  },
  ImageBackground_I1353_19758_1124_6634: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.060034579918038844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19517262776692235%")
  },
  ImageBackground_I1353_19758_1124_6635: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0.4215761612021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4580281575520786%")
  },
  ImageBackground_I1353_19758_1124_6638: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.09018528005464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19758_1124_6639: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.247798919677734%")
  },
  ImageBackground_I1353_19758_1124_6640: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2961107889811245%")
  },
  ImageBackground_I1353_19758_1124_6641: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1480585734049384%")
  },
  View_I1353_19758_1124_6642: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.253638939779313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.0005336407103868623%")
  },
  ImageBackground_I1353_19758_1124_6643: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("0.24093878073770725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19758_1124_6644: {
    width: wp("4.3626054128011065%"),
    height: hp("1.445534320476928%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12628555297851562%")
  },
  ImageBackground_I1353_19758_1124_6645: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.5421789617486326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0755907694498745%")
  },
  ImageBackground_I1353_19758_1124_6646: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.90457407633464%")
  },
  ImageBackground_I1353_19758_1124_6647: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.6521089480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19516626993815578%")
  },
  ImageBackground_I1353_19758_1124_6648: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4580281575520786%")
  },
  ImageBackground_I1353_19758_1124_6651: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.42157616120219643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19758_1124_6652: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("1.024056523224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.247798919677734%")
  },
  ImageBackground_I1353_19758_1124_6653: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2961107889811245%")
  },
  View_I1353_19758_1124_6654: {
    width: wp("0.20005779961744943%"),
    height: hp("0.3148450877497105%"),
    top: hp("2.9387593920765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9211336771647183%")
  },
  ImageBackground_I1353_19758_1124_6655: {
    width: wp("0.16004624466101328%"),
    height: hp("0.3148450877497105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19758_1124_6656: {
    width: wp("0.10002889980872472%"),
    height: hp("0.10494835715476282%"),
    top: hp("0.1048603995901658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10002772013346828%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 0.3841109871864319,
    borderTopRightRadius: 0.3841109871864319,
    borderBottomLeftRadius: 0.3841109871864319,
    borderBottomRightRadius: 0.3841109871864319
  },
  ImageBackground_I1353_19758_1124_6657: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0.7831177424863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1480585734049384%")
  },
  View_1353_19759: {
    width: wp("2.0405896504720054%"),
    minWidth: wp("2.0405896504720054%"),
    height: hp("11.806690236909793%"),
    minHeight: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.770833333333332%"),
    top: hp("113.79781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19759_1124_6583: {
    flexGrow: 1,
    width: wp("1.0202948252360027%"),
    height: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1353_19759_1124_6584: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09166717529296875%")
  },
  ImageBackground_I1353_19759_1124_6585: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09166717529296875%")
  },
  ImageBackground_I1353_19759_1124_6588: {
    width: wp("0.18005202213923135%"),
    height: hp("4.8276244616899335%"),
    top: hp("4.381723872950815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20697275797525805%")
  },
  ImageBackground_I1353_19759_1124_6589: {
    width: wp("0.23045430580774942%"),
    height: hp("0.8395868572381026%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19759_1124_6590: {
    width: wp("0.4201214015483856%"),
    height: hp("0.9182981454609521%"),
    top: hp("10.757129439890704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18044153849284328%")
  },
  ImageBackground_I1353_19759_1124_6591: {
    width: wp("0.3701069454352061%"),
    height: hp("1.0757206567649633%"),
    top: hp("0.23613601434426812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20044962565104285%")
  },
  View_I1353_19759_1124_6592: {
    width: wp("0.5296621223290762%"),
    height: hp("1.8890703962148865%"),
    top: hp("8.763180925546436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4906304677327462%")
  },
  ImageBackground_I1353_19759_1124_6593: {
    width: wp("1.0002890229225159%"),
    height: hp("1.8890703962148865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00010172526041429819%")
  },
  View_I1353_19759_1124_6594: {
    width: wp("1.76050861676534%"),
    height: hp("16.424417756294293%"),
    top: hp("-10.179997011612002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5296611785888672%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_19759_1124_6595: {
    width: wp("0.7098144789536794%"),
    height: hp("5.982056602102811%"),
    top: hp("2.938492571721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3104813893636056%")
  },
  View_I1353_19759_1124_6596: {
    flexGrow: 1,
    width: wp("1.0202948252360027%"),
    height: hp("11.806690236909793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0202948252360038%"),
    top: hp("0%")
  },
  ImageBackground_I1353_19759_1124_6597: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19759_1124_6598: {
    width: wp("0.9286276499430338%"),
    height: hp("11.806690236909793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19759_1124_6601: {
    width: wp("0.18005202213923135%"),
    height: hp("4.8276244616899335%"),
    top: hp("4.381723872950815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6332715352376326%")
  },
  ImageBackground_I1353_19759_1124_6602: {
    width: wp("0.23045430580774942%"),
    height: hp("0.8395868572381026%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7898394266764299%")
  },
  ImageBackground_I1353_19759_1124_6603: {
    width: wp("0.4201214015483856%"),
    height: hp("0.9182981454609521%"),
    top: hp("10.757129439890704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41973114013671875%")
  },
  ImageBackground_I1353_19759_1124_6604: {
    width: wp("0.3701069454352061%"),
    height: hp("1.0757206567649633%"),
    top: hp("0.23613601434426812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44973691304524976%")
  },
  View_I1353_19759_1124_6605: {
    width: wp("0.5296621223290762%"),
    height: hp("1.8890703962148865%"),
    top: hp("8.763180925546436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000003178914390389309%")
  },
  ImageBackground_I1353_19759_1124_6606: {
    width: wp("1.0002890229225159%"),
    height: hp("1.8890703962148865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.470527013142906%")
  },
  View_I1353_19759_1124_6607: {
    width: wp("1.76050861676534%"),
    height: hp("16.424417756294293%"),
    top: hp("-10.179997011612002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7605082194010429%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1353_19759_1124_6608: {
    width: wp("0.7098144789536794%"),
    height: hp("5.982056602102811%"),
    top: hp("2.938492571721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1353_19760: {
    width: wp("4.615175326665242%"),
    minWidth: wp("4.615175326665242%"),
    height: hp("6.19195302327474%"),
    minHeight: hp("6.19195302327474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.802083333333334%"),
    top: hp("83.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1353_19760_612_18: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.0960278432877337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0959165812841576%")
  },
  ImageBackground_I1353_19760_612_9: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19760_606_14: {
    width: wp("4.362603823343913%"),
    height: hp("1.4454183682717912%"),
    top: hp("1.6505507172131075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12628634770711145%")
  },
  ImageBackground_I1353_19760_606_2: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.48161074112022106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.075589974721273%")
  },
  ImageBackground_I1353_19760_606_3: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.904576460520426%")
  },
  ImageBackground_I1353_19760_606_4: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.06003457991802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19516944885253906%")
  },
  ImageBackground_I1353_19760_606_8: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0.4215761612021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4580281575520857%")
  },
  ImageBackground_I1353_19760_606_11: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.09018528005464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19760_612_15: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.247798919677733%")
  },
  ImageBackground_I1353_19760_612_13: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2961123784383144%")
  },
  ImageBackground_I1353_19760_612_11: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.148056189219158%")
  },
  View_I1353_19760_612_19: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.253638939779313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.0005336407103868623%")
  },
  ImageBackground_I1353_19760_612_20: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("0.24093878073770725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19760_612_21: {
    width: wp("4.362604220708211%"),
    height: hp("1.445534320476928%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12628634770711145%")
  },
  ImageBackground_I1353_19760_612_22: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.5421789617486326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.075589974721273%")
  },
  ImageBackground_I1353_19760_612_23: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.904576460520426%")
  },
  ImageBackground_I1353_19760_612_24: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.6521089480874451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19516865412394147%")
  },
  ImageBackground_I1353_19760_612_25: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.458027362823488%")
  },
  ImageBackground_I1353_19760_612_28: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.42157616120219643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1353_19760_612_29: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("1.024056523224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.247798919677733%")
  },
  ImageBackground_I1353_19760_612_30: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2961123784383144%")
  },
  View_I1353_19760_639_426: {
    width: wp("0.20005779961744943%"),
    height: hp("0.3148450877497105%"),
    top: hp("2.9387593920765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.921133677164713%")
  },
  ImageBackground_I1353_19760_639_427: {
    width: wp("0.16004624466101328%"),
    height: hp("0.3148450877497105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1353_19760_639_428: {
    width: wp("0.10002889980872472%"),
    height: hp("0.10494835715476282%"),
    top: hp("0.1048603995901658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10002772013346473%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 0.3841109871864319,
    borderTopRightRadius: 0.3841109871864319,
    borderBottomLeftRadius: 0.3841109871864319,
    borderBottomRightRadius: 0.3841109871864319
  },
  ImageBackground_I1353_19760_612_31: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0.7831177424863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.148056189219158%")
  },
  View_2201_6874: {
    width: wp("4.615175326665242%"),
    minWidth: wp("4.615175326665242%"),
    height: hp("6.19195302327474%"),
    minHeight: hp("6.19195302327474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.97916825612386%"),
    top: hp("32.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6874_1124_6629: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.0960278432877337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2201_6874_1124_6630: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("0.24067196038252092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2201_6874_1124_6631: {
    width: wp("4.362603823343913%"),
    height: hp("1.4454183682717912%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12628555297851562%")
  },
  ImageBackground_I2201_6874_1124_6632: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.5421789617486397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6874_1124_6633: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4018179575602261%")
  },
  ImageBackground_I2201_6874_1124_6634: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.652108948087438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.606081962585449%")
  },
  ImageBackground_I2201_6874_1124_6635: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28701305389404297%")
  },
  ImageBackground_I2201_6874_1124_6638: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.4215761612021893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9378245671590157%")
  },
  ImageBackground_I2201_6874_1124_6639: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("1.0237897028688607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06888230641682824%")
  },
  ImageBackground_I2201_6874_1124_6640: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("1.144392503415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0352881749471017%")
  },
  ImageBackground_I2201_6874_1124_6641: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0.7828509221311535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.502754529317219%")
  },
  View_I2201_6874_1124_6642: {
    flexGrow: 1,
    width: wp("4.615175326665242%"),
    height: hp("3.253638939779313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.9387593920765056%")
  },
  ImageBackground_I2201_6874_1124_6643: {
    width: wp("4.615175326665242%"),
    height: hp("2.8553845452480626%"),
    top: hp("0.15715718920765198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2201_6874_1124_6644: {
    width: wp("4.362604220708211%"),
    height: hp("1.445534320476928%"),
    top: hp("1.80797472677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1262823740641288%")
  },
  ImageBackground_I2201_6874_1124_6645: {
    width: wp("0.28701340158780414%"),
    height: hp("0.42158033027023567%"),
    top: hp("0.4818775614754074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6874_1124_6646: {
    width: wp("1.0562093059221904%"),
    height: hp("0.30112882129481583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40181954701741773%")
  },
  ImageBackground_I2201_6874_1124_6647: {
    width: wp("1.5613529086112976%"),
    height: hp("0.7331781048592323%"),
    top: hp("0.06030140027322517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.606081962585449%")
  },
  ImageBackground_I2201_6874_1124_6648: {
    width: wp("2.617562413215637%"),
    height: hp("1.0238379728598672%"),
    top: hp("0.42184298155737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28701305389404297%")
  },
  ImageBackground_I2201_6874_1124_6651: {
    width: wp("0.4247798522313436%"),
    height: hp("0.9334993492710134%"),
    top: hp("0.0904521004098342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9378245671590157%")
  },
  ImageBackground_I2201_6874_1124_6652: {
    width: wp("0.2984939267237981%"),
    height: hp("2.0721151529114104%"),
    top: hp("0.1574240095628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06888230641682824%")
  },
  ImageBackground_I2201_6874_1124_6653: {
    width: wp("1.2837740778923035%"),
    height: hp("1.9516909708742234%"),
    top: hp("0.1574240095628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0352881749471017%")
  },
  View_I2201_6874_1124_6654: {
    width: wp("0.20005779961744943%"),
    height: hp("0.3148450877497105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4939842224121129%")
  },
  ImageBackground_I2201_6874_1124_6655: {
    width: wp("0.16004624466101328%"),
    height: hp("0.3148450877497105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04001140594482422%")
  },
  View_I2201_6874_1124_6656: {
    width: wp("0.10002889980872472%"),
    height: hp("0.10494835715476282%"),
    top: hp("0.10512721994535923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 0.3841109871864319,
    borderTopRightRadius: 0.3841109871864319,
    borderBottomLeftRadius: 0.3841109871864319,
    borderBottomRightRadius: 0.3841109871864319
  },
  ImageBackground_I2201_6874_1124_6657: {
    width: wp("0.9643650054931641%"),
    height: hp("2.3130659197197585%"),
    top: hp("0.1574240095628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.502754529317219%")
  },
  View_2201_6792: {
    width: wp("4.501300652821858%"),
    minWidth: wp("4.501300652821858%"),
    height: hp("5.352366296320014%"),
    minHeight: hp("5.352366296320014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.59375%"),
    top: hp("137.1584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6792_612_46: {
    flexGrow: 1,
    width: wp("4.501300652821858%"),
    height: hp("2.676183148160007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2201_6792_612_47: {
    width: wp("4.501300652821858%"),
    height: hp("2.4357446555882856%"),
    top: hp("0.24040514002732039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6792_612_48: {
    width: wp("4.501300652821858%"),
    height: hp("2.4357446555882856%"),
    top: hp("0.24040514002732039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6792_612_51: {
    width: wp("1.840531826019287%"),
    height: hp("0.4722675990537216%"),
    top: hp("0.5429794228141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9902890523274692%")
  },
  ImageBackground_I2201_6792_612_52: {
    width: wp("0.32009248932202655%"),
    height: hp("0.6044703103154083%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.670774459838867%")
  },
  ImageBackground_I2201_6792_612_53: {
    width: wp("0.350101167956988%"),
    height: hp("1.1019577745531426%"),
    top: hp("0.47333931010928154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05001703898111742%")
  },
  ImageBackground_I2201_6792_612_54: {
    width: wp("0.4101185003916422%"),
    height: hp("0.9707723158956225%"),
    top: hp("0.5256360997267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.00115648905436%")
  },
  View_I2201_6792_612_55: {
    width: wp("0.7202080885569254%"),
    height: hp("1.3892776979123307%"),
    top: hp("1.286874573087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44012705485025805%")
  },
  ImageBackground_I2201_6792_612_56: {
    width: wp("0.7202080885569254%"),
    height: hp("2.6237089125836484%"),
    top: hp("-0.00026682035519343117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2201_6792_612_57: {
    width: wp("6.261809269587198%"),
    height: hp("4.617727519384498%"),
    top: hp("1.3893335894808558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6604804992675781%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2201_6792_612_58: {
    width: wp("2.2806590795516968%"),
    height: hp("1.8618084693867003%"),
    top: hp("0.8143357240437297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.100320816040039%")
  },
  View_I2201_6792_612_59: {
    flexGrow: 1,
    width: wp("4.501300652821858%"),
    height: hp("2.676183148160007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6762081625682868%")
  },
  ImageBackground_I2201_6792_612_60: {
    width: wp("4.501300652821858%"),
    height: hp("2.4357446555882856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6792_612_61: {
    width: wp("4.501300652821858%"),
    height: hp("2.4357446555882856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_6792_612_64: {
    width: wp("1.840531826019287%"),
    height: hp("0.4722675990537216%"),
    top: hp("1.6609567110656087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9902890523274692%")
  },
  ImageBackground_I2201_6792_612_65: {
    width: wp("0.32009248932202655%"),
    height: hp("0.6044703103154083%"),
    top: hp("2.0718600580601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.670774459838867%")
  },
  ImageBackground_I2201_6792_612_66: {
    width: wp("0.350101167956988%"),
    height: hp("1.1019577745531426%"),
    top: hp("1.1009007855191442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05001703898111742%")
  },
  ImageBackground_I2201_6792_612_67: {
    width: wp("0.4101185003916422%"),
    height: hp("0.9707723158956225%"),
    top: hp("1.179879610655746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.00115648905436%")
  },
  View_I2201_6792_612_68: {
    width: wp("0.7202080885569254%"),
    height: hp("1.3892776979123307%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44012705485025805%")
  },
  ImageBackground_I2201_6792_612_69: {
    width: wp("0.7202080885569254%"),
    height: hp("2.6237089125836484%"),
    top: hp("-1.2340441427595579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2201_6792_612_70: {
    width: wp("6.261809269587198%"),
    height: hp("4.617727519384498%"),
    top: hp("-4.617859887295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6604804992675781%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I2201_6792_612_71: {
    width: wp("2.2806590795516968%"),
    height: hp("1.8618084693867003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.100320816040039%")
  },
  ImageBackground_1353_19761: {
    width: wp("5.395034551620483%"),
    minWidth: wp("5.395034551620483%"),
    height: hp("14.150910299332415%"),
    minHeight: hp("14.150910299332415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.770833333333332%"),
    top: hp("47.13114754098361%")
  },
  View_1353_19762: {
    width: wp("2.19173272450765%"),
    minWidth: wp("2.19173272450765%"),
    height: hp("5.748807146249573%"),
    minHeight: hp("5.748807146249573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.372478485107422%"),
    top: hp("51.332234033469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1353_19762_890_409: {
    flexGrow: 1,
    width: wp("1.8264440695444744%"),
    height: hp("5.398142663507514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18264293670654297%"),
    top: hp("0.2396046789617472%")
  },
  View_2201_6933: {
    width: wp("6.145833333333333%"),
    minWidth: wp("6.145833333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.21875%"),
    top: hp("163.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_6933_248_18: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I2201_6933_248_17: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_I2201_6933_248_20: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%")
  },
  ImageBackground_I2201_6933_248_21: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.104166666666657%"),
    top: hp("1.639344262295083%")
  },
  View_I2201_6933_248_19: {
    flexGrow: 1,
    width: wp("1.1979166666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3958333333333286%"),
    top: hp("0.5464480874316848%")
  },
  Text_I2201_6933_248_19: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2: { height: 1280 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
