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
      <View style={styles.View_2182_65} />
      <View style={styles.View_2182_190}>
        <View style={styles.View_2182_191}>
          <View style={styles.View_2182_192}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/8f16/a97c4dbaca760dccb889dc1557d053c8"
              }}
              style={styles.ImageBackground_I2182_192_1198_350}
            />
          </View>
          <View style={styles.View_2182_193}>
            <Text style={styles.Text_2182_193}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2182_194}>
          <View style={styles.View_2182_195}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520c/5849/b3bfa30116f2851a390f277509404e4e"
              }}
              style={styles.ImageBackground_I2182_195_1198_537}
            />
          </View>
          <View style={styles.View_2182_196}>
            <Text style={styles.Text_2182_196}>Trade</Text>
          </View>
        </View>
        <View style={styles.View_2182_197}>
          <View style={styles.View_2182_198}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da8c/32e9/2a7a0c704c795e7fa7805f407f2f2a2b"
              }}
              style={styles.ImageBackground_I2182_198_1198_1409}
            />
          </View>
          <View style={styles.View_2182_199}>
            <Text style={styles.Text_2182_199}>Prices</Text>
          </View>
        </View>
        <View style={styles.View_2182_200}>
          <View style={styles.View_2182_201}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e55/23dc/d0d3c2a04f153bbb3140e5bcbe5594f3"
              }}
              style={styles.ImageBackground_I2182_201_1198_1227}
            />
          </View>
          <View style={styles.View_2182_202}>
            <Text style={styles.Text_2182_202}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2182_66}>
        <View style={styles.View_I2182_66_1147_7817}>
          <View style={styles.View_I2182_66_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2182_80}>
        <View style={styles.View_I2182_80_1147_7797}>
          <View style={styles.View_I2182_80_1147_7797_1147_7781}>
            <View style={styles.View_I2182_80_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2182_80_1147_7797_1147_7783}
            />
            <View style={styles.View_I2182_80_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2182_80_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2182_80_1147_7797_1147_7789}
          />
          <View style={styles.View_I2182_80_1147_7797_1147_7794}>
            <View style={styles.View_I2182_80_1147_7797_1147_7795}>
              <Text style={styles.Text_I2182_80_1147_7797_1147_7795}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2182_81}>
        <Text style={styles.Text_2182_81}>Bitcoin</Text>
      </View>
      <View style={styles.View_2182_82}>
        <Text style={styles.Text_2182_82}>23,988.00</Text>
      </View>
      <View style={styles.View_2182_103}>
        <Text style={styles.Text_2182_103}>+13.47%</Text>
      </View>
      <View style={styles.View_2183_13027}>
        <Text style={styles.Text_2183_13027}>597 BTC</Text>
      </View>
      <View style={styles.View_2183_13028}>
        <Text style={styles.Text_2183_13028}>Last Price</Text>
      </View>
      <View style={styles.View_2183_13029}>
        <Text style={styles.Text_2183_13029}>24h Price</Text>
      </View>
      <View style={styles.View_2183_13030}>
        <Text style={styles.Text_2183_13030}>24h Volume</Text>
      </View>
      <View style={styles.View_2183_13103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d64/9e2a/924fa512df2fa5307c8a8b0861fcb7e9"
          }}
          style={styles.ImageBackground_2183_13104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d96/7835/04b5a3230ec68ede2c1e04173c4951db"
          }}
          style={styles.ImageBackground_2183_13128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69aa/6710/28e915130203f11de457e15e98c21dce"
          }}
          style={styles.ImageBackground_2183_13129}
        />
      </View>
      <View style={styles.View_2182_105}>
        <View style={styles.View_2182_106} />
        <View style={styles.View_2182_107}>
          <Text style={styles.Text_2182_107}>30m</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
          }}
          style={styles.ImageBackground_2182_108}
        />
      </View>
      <View style={styles.View_2182_126} />
      <View style={styles.View_2182_131}>
        <View style={styles.View_2182_132}>
          <Text style={styles.Text_2182_132}>TRADE</Text>
        </View>
      </View>
      <View style={styles.View_2183_12522}>
        <View style={styles.View_I2183_12522_1136_7190}>
          <View style={styles.View_I2183_12522_1136_7191}>
            <View style={styles.View_I2183_12522_1136_7192}>
              <View style={styles.View_I2183_12522_1136_7193} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11c/4a80/7a50165830534df3579672e9a988156d"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7194}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7195}>
            <View style={styles.View_I2183_12522_1136_7196}>
              <View style={styles.View_I2183_12522_1136_7197} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f08/13fc/8e9e197a0cad5f93f00fd9430160f73c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7198}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7199}>
            <View style={styles.View_I2183_12522_1136_7200}>
              <View style={styles.View_I2183_12522_1136_7201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfca/67e2/41fdbccbe5bd7783a5bb9cd5c6163c1c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7202}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7203}>
            <View style={styles.View_I2183_12522_1136_7204}>
              <View style={styles.View_I2183_12522_1136_7205} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895f/6bec/bd0bf15309f42a8ee68e7cd4f3cbe74a"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7206}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7207}>
            <View style={styles.View_I2183_12522_1136_7208}>
              <View style={styles.View_I2183_12522_1136_7209} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfca/67e2/41fdbccbe5bd7783a5bb9cd5c6163c1c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7210}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7211}>
            <View style={styles.View_I2183_12522_1136_7212}>
              <View style={styles.View_I2183_12522_1136_7213} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac6/bfc7/3d3cdf2753c527e6caa0c10a5461ed59"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7214}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7215}>
            <View style={styles.View_I2183_12522_1136_7216}>
              <View style={styles.View_I2183_12522_1136_7217} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f200/9243/7a340c8c3f2a1175bfc659155db5a3bb"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7218}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7219}>
            <View style={styles.View_I2183_12522_1136_7220}>
              <View style={styles.View_I2183_12522_1136_7221} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fdd/1a6e/9c64469a36e1b4cb3f58cfef2509b2a8"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7222}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7223}>
            <View style={styles.View_I2183_12522_1136_7224}>
              <View style={styles.View_I2183_12522_1136_7225} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e81c/fab4/f434ec4269a91c7b98309fd6413bbf50"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7226}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7227}>
            <View style={styles.View_I2183_12522_1136_7228}>
              <View style={styles.View_I2183_12522_1136_7229} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648e/18f8/76d7a5c09ae9194cfb62f0f8ea97b0a7"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7230}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7231}>
            <View style={styles.View_I2183_12522_1136_7232}>
              <View style={styles.View_I2183_12522_1136_7233} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a104/d3be/2e71de40299bb23c668d323c119d7cad"
              }}
              style={styles.ImageBackground_I2183_12522_1136_7234}
            />
          </View>
          <View style={styles.View_I2183_12522_1136_7235}>
            <View style={styles.View_I2183_12522_1136_7236}>
              <View style={styles.View_I2183_12522_1136_7237} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f25/5b6d/a3e3a1a3def9e60854cef0abb54173a8"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7238}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7239}>
            <View style={styles.View_I2183_12522_1136_7240}>
              <View style={styles.View_I2183_12522_1136_7241} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5375/030b/1edf0f8b5f894b7e1f0e681ab7e33b11"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7242}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7243}>
            <View style={styles.View_I2183_12522_1136_7244}>
              <View style={styles.View_I2183_12522_1136_7245} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0f/bac2/02969cbda124a200bffc6c39481da67e"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7246}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7247}>
            <View style={styles.View_I2183_12522_1136_7248}>
              <View style={styles.View_I2183_12522_1136_7249} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfca/67e2/41fdbccbe5bd7783a5bb9cd5c6163c1c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7250}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7251}>
            <View style={styles.View_I2183_12522_1136_7252}>
              <View style={styles.View_I2183_12522_1136_7253} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1587/07fd/394d7894333fdb82c0d8ee8d56236597"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7254}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7255}>
            <View style={styles.View_I2183_12522_1136_7256}>
              <View style={styles.View_I2183_12522_1136_7257} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbf1/306d/3efe7761bcfd70faf087e67fb408ac5c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7258}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7259}>
            <View style={styles.View_I2183_12522_1136_7260}>
              <View style={styles.View_I2183_12522_1136_7261} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ef0/efe2/8097fa9cd6c4e9658de2391d8d93d341"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7262}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7263}>
            <View style={styles.View_I2183_12522_1136_7264} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfca/67e2/41fdbccbe5bd7783a5bb9cd5c6163c1c"
              }}
              style={styles.ImageBackground_I2183_12522_1136_7265}
            />
          </View>
          <View style={styles.View_I2183_12522_1136_7266}>
            <View style={styles.View_I2183_12522_1136_7267}>
              <View style={styles.View_I2183_12522_1136_7268} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6d/8352/33406f8084214cec538a3190f4c28204"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7269}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7270}>
            <View style={styles.View_I2183_12522_1136_7271}>
              <View style={styles.View_I2183_12522_1136_7272} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/534c/0508/10a44d8826050ce45bc880fe94fed735"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7273}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7274}>
            <View style={styles.View_I2183_12522_1136_7275}>
              <View style={styles.View_I2183_12522_1136_7276} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe16/1d1c/3407732457002a646aa4cd06e11e6d5a"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7277}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7278}>
            <View style={styles.View_I2183_12522_1136_7279}>
              <View style={styles.View_I2183_12522_1136_7280} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d45/d9f0/cd51cd592e3cae21737c3edaf26186d6"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7281}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7282}>
            <View style={styles.View_I2183_12522_1136_7283}>
              <View style={styles.View_I2183_12522_1136_7284} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b51/c1cc/8072ca06bf6f4310d377bad305a18e97"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7285}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7286}>
            <View style={styles.View_I2183_12522_1136_7287}>
              <View style={styles.View_I2183_12522_1136_7288} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d33/9ddb/f4582f8ca54304f7f1d0a5002c12a54e"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7289}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7290}>
            <View style={styles.View_I2183_12522_1136_7291}>
              <View style={styles.View_I2183_12522_1136_7292} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c2/3ba1/83525d1bb5687e5770612704b37ae9e3"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7293}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7294}>
            <View style={styles.View_I2183_12522_1136_7295}>
              <View style={styles.View_I2183_12522_1136_7296} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ad/cb8e/9606e01525666a46d86712b316d12c7c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7297}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7298}>
            <View style={styles.View_I2183_12522_1136_7299}>
              <View style={styles.View_I2183_12522_1136_7300} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfca/67e2/41fdbccbe5bd7783a5bb9cd5c6163c1c"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7301}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7302}>
            <View style={styles.View_I2183_12522_1136_7303}>
              <View style={styles.View_I2183_12522_1136_7304} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d9a/ed55/2ed5c9e481f8082b9aa396a5be4dccac"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7305}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7306}>
            <View style={styles.View_I2183_12522_1136_7307}>
              <View style={styles.View_I2183_12522_1136_7308} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6d/8352/33406f8084214cec538a3190f4c28204"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7309}
              />
            </View>
          </View>
          <View style={styles.View_I2183_12522_1136_7310}>
            <View style={styles.View_I2183_12522_1136_7311}>
              <View style={styles.View_I2183_12522_1136_7312} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d83d/6cce/4daf4b1948370adb8baf684a50f8fbf4"
                }}
                style={styles.ImageBackground_I2183_12522_1136_7313}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2182_117}>
        <View style={styles.View_2182_118}>
          <View style={styles.View_I2182_118_1004_5090}>
            <View style={styles.View_I2182_118_1004_5092}>
              <Text style={styles.Text_I2182_118_1004_5092}>Charts</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
            }}
            style={styles.ImageBackground_I2182_118_1004_5093}
          />
        </View>
        <View style={styles.View_2182_119}>
          <View style={styles.View_I2182_119_1004_5416}>
            <View style={styles.View_I2182_119_1004_5418}>
              <Text style={styles.Text_I2182_119_1004_5418}>Orders</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_119_1171_10944}
            />
          </View>
        </View>
        <View style={styles.View_2182_120}>
          <View style={styles.View_I2182_120_1004_5416}>
            <View style={styles.View_I2182_120_1004_5418}>
              <Text style={styles.Text_I2182_120_1004_5418}>Book</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_120_1171_10944}
            />
          </View>
        </View>
        <View style={styles.View_2182_121}>
          <View style={styles.View_I2182_121_1004_5416}>
            <View style={styles.View_I2182_121_1004_5418}>
              <Text style={styles.Text_I2182_121_1004_5418}>History</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I2182_121_1171_10944}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2182_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deed/1c4f/c06efff607504f7a4be7ede0b68fdc3a"
          }}
          style={styles.ImageBackground_2182_136}
        />
      </View>
      <View style={styles.View_2183_13042}>
        <View style={styles.View_2183_13043}>
          <Text style={styles.Text_2183_13043}>9:00AM</Text>
        </View>
        <View style={styles.View_2183_13044}>
          <Text style={styles.Text_2183_13044}>9:30AM</Text>
        </View>
        <View style={styles.View_2183_13045}>
          <Text style={styles.Text_2183_13045}>10:00AM</Text>
        </View>
        <View style={styles.View_2183_13046}>
          <Text style={styles.Text_2183_13046}>10:30AM</Text>
        </View>
        <View style={styles.View_2183_13047}>
          <Text style={styles.Text_2183_13047}>11:00AM</Text>
        </View>
        <View style={styles.View_2183_13049}>
          <Text style={styles.Text_2183_13049}>11:30AM</Text>
        </View>
        <View style={styles.View_2183_13048}>
          <Text style={styles.Text_2183_13048}>12:00PM</Text>
        </View>
      </View>
      <View style={styles.View_2183_13132}>
        <Text style={styles.Text_2183_13132}>Chart</Text>
      </View>
      <View style={styles.View_2183_13133}>
        <Text style={styles.Text_2183_13133}>Volume Depth</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2182_65: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2182_190: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("100.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_191: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_192: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9333333333333345%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_192_1198_350: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_193: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2182_193: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2182_194: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_195: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_195_1198_537: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_196: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2182_196: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2182_197: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.33333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_198: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_198_1198_1409: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_199: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2182_199: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2182_200: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_201: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2182_201_1198_1227: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_202: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_2182_202: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2182_66: {
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
  View_I2182_66_1147_7817: {
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
  View_I2182_66_1147_7817_1147_7815: {
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
  View_2182_80: {
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
  View_I2182_80_1147_7797: {
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
  View_I2182_80_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.368030652322404%")
  },
  View_I2182_80_1147_7797_1147_7782: {
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
  ImageBackground_I2182_80_1147_7797_1147_7783: {
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
  View_I2182_80_1147_7797_1147_7784: {
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
  ImageBackground_I2182_80_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2182_80_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2182_80_1147_7797_1147_7794: {
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
  View_I2182_80_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2182_80_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2182_81: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.650273224043716%")
  },
  Text_2182_81: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2182_82: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("16.80327868852459%")
  },
  Text_2182_82: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2182_103: {
    width: wp("19.466666666666665%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%")
  },
  Text_2182_103: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2183_13027: {
    width: wp("19.466666666666665%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%")
  },
  Text_2183_13027: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2183_13028: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("21.174863387978142%")
  },
  Text_2183_13028: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13029: {
    width: wp("16.53333333333333%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%")
  },
  Text_2183_13029: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13030: {
    width: wp("21.6%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%")
  },
  Text_2183_13030: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13103: {
    width: wp("87.18453776041667%"),
    minWidth: wp("87.18453776041667%"),
    height: hp("15.568584171149249%"),
    minHeight: hp("15.568584171149249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.372330729166667%"),
    top: hp("71.44301784494536%")
  },
  ImageBackground_2183_13104: {
    width: wp("85.27137044270833%"),
    height: hp("0.14005300125789122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5466145833333318%"),
    top: hp("7.280727032103826%")
  },
  ImageBackground_2183_13128: {
    width: wp("50.79958496093751%"),
    height: hp("8.272481616077528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.244677734375%"),
    top: hp("7.296202612704917%")
  },
  ImageBackground_2183_13129: {
    width: wp("87.18453776041667%"),
    height: hp("7.555683844727897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2182_105: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("7.650273224043716%")
  },
  View_2182_106: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 27, 51, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_2182_107: {
    width: wp("18.4%"),
    top: hp("2.3224043715846987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  Text_2182_107: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_2182_108: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2.1857923497267757%")
  },
  View_2182_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.00546448087432%"),
    backgroundColor: "rgba(18, 27, 51, 1)"
  },
  View_2182_131: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_132: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("1.3661202185792405%")
  },
  Text_2182_132: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2183_12522: {
    width: wp("121.96570638020833%"),
    minWidth: wp("121.96570638020833%"),
    height: hp("17.063816258164703%"),
    minHeight: hp("17.063816258164703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-52.790429687499994%"),
    top: hp("29.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7190: {
    flexGrow: 1,
    width: wp("121.96570638020833%"),
    height: hp("14.177399515454233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5280801741803316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7191: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7192: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("1.825318049863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7193: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7194: {
    width: wp("4.3461611009358113e-7%"),
    height: hp("5.093676666093002%"),
    top: hp("-0.7641734972677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749872%")
  },
  View_I2183_12522_1136_7195: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("4.159729337431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9771443684895758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7196: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7197: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7198: {
    width: wp("8.764758604229428e-7%"),
    height: hp("10.272248064885375%"),
    top: hp("-1.4429644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942830403645857%")
  },
  View_I2183_12522_1136_7199: {
    width: wp("2.651428476969401%"),
    height: hp("3.141100680241819%"),
    top: hp("5.51811176571038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.954284667968743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7200: {
    width: wp("2.651428476969401%"),
    height: hp("3.141100680241819%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7201: {
    width: wp("2.651428476969401%"),
    height: hp("3.141100680241819%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7202: {
    width: wp("6.519241045073916e-7%"),
    height: hp("7.640514999139504%"),
    top: hp("-0.6790578039617472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7203: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.931429036458326%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7204: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7205: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7206: {
    width: wp("4.4185972001287157e-7%"),
    height: hp("5.178571398792371%"),
    top: hp("-1.4008068647541023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942830403645857%")
  },
  View_I2183_12522_1136_7207: {
    width: wp("2.651428476969401%"),
    height: hp("4.159835909233719%"),
    top: hp("10.017503415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.908569335937493%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7208: {
    width: wp("2.651428476969401%"),
    height: hp("4.159835909233719%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7209: {
    width: wp("2.651428476969401%"),
    height: hp("4.159835909233719%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7210: {
    width: wp("6.519241045073916e-7%"),
    height: hp("7.640514999139504%"),
    top: hp("-2.8864626024590194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7211: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("5.178449453551906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.885713704427076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7212: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("1.952324538934434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7213: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7214: {
    width: wp("4.998085084177244e-7%"),
    height: hp("5.857728218120304%"),
    top: hp("-1.6129290471311535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7215: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.862858072916662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7216: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7217: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7218: {
    width: wp("4.780777392928333e-7%"),
    height: hp("5.603044541155706%"),
    top: hp("-2.589224726775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942830403645821%")
  },
  View_I2183_12522_1136_7219: {
    width: wp("2.651428476969401%"),
    height: hp("7.300936589475537%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.83999837239583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7220: {
    width: wp("2.651428476969401%"),
    height: hp("7.300936589475537%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7221: {
    width: wp("2.651428476969401%"),
    height: hp("7.300936589475537%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7222: {
    width: wp("0.0000011227583551468949%"),
    height: hp("13.15866480759584%"),
    top: hp("-0.6790578039617543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749979%")
  },
  View_I2183_12522_1136_7223: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("5.178449453551906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.817138671874993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7224: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7225: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7226: {
    width: wp("5.36026467064706e-7%"),
    height: hp("6.282201360483638%"),
    top: hp("-0.9338712431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7227: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.79428710937499%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7228: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7229: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7230: {
    width: wp("5.432701073004865e-7%"),
    height: hp("6.3670955720495%"),
    top: hp("-1.4008068647541023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749979%")
  },
  View_I2183_12522_1136_7231: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.77142740885416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7232: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("1.6980447404371617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7233: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7234: {
    width: wp("7.243602037002953e-7%"),
    height: hp("8.489461283866174%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7235: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.748567708333326%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7236: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7237: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7238: {
    width: wp("4.056416704164197e-7%"),
    height: hp("4.754098256429037%"),
    top: hp("-1.3159579918032804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749996%")
  },
  View_I2183_12522_1136_7239: {
    width: wp("2.651428476969401%"),
    height: hp("3.6504682947377685%"),
    top: hp("5.263565146857921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.725716145833324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7240: {
    width: wp("2.651428476969401%"),
    height: hp("3.6504682947377685%"),
    top: hp("-2.1225559255464432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7241: {
    width: wp("2.651428476969401%"),
    height: hp("3.6504682947377685%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7242: {
    width: wp("6.229497254632103e-7%"),
    height: hp("7.300936589475537%"),
    top: hp("-0.4242443647541023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942789713541673%")
  },
  View_I2183_12522_1136_7243: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.70286458333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7244: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7245: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7246: {
    width: wp("6.084625056246295e-7%"),
    height: hp("7.131147124076802%"),
    top: hp("-0.6366333674863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750001%")
  },
  View_I2183_12522_1136_7247: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("4.6690893954918025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.6800048828125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7248: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("2.801346909153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7249: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7250: {
    width: wp("6.519241045073916e-7%"),
    height: hp("7.640514999139504%"),
    top: hp("-2.2919868510929007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749996%")
  },
  View_I2183_12522_1136_7251: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("5.178449453551906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.657145182291664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7252: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7253: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7254: {
    width: wp("7.750653215528776e-7%"),
    height: hp("9.083722849361232%"),
    top: hp("-3.4806715334699376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942789713541664%")
  },
  View_I2183_12522_1136_7255: {
    width: wp("2.651428476969401%"),
    height: hp("7.216041856776171%"),
    top: hp("6.9613430669398895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.63429361979166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7256: {
    width: wp("2.651428476969401%"),
    height: hp("7.216041856776171%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7257: {
    width: wp("2.651428476969401%"),
    height: hp("7.216041856776171%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7258: {
    width: wp("8.837193793927629e-7%"),
    height: hp("10.357142797584743%"),
    top: hp("-2.037440232240442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749996%")
  },
  View_I2183_12522_1136_7259: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.61144205729167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7260: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("-1.4008068647541023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7261: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7262: {
    width: wp("5.650009673748476e-7%"),
    height: hp("6.621779770147605%"),
    top: hp("-1.4008068647540952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749996%")
  },
  View_I2183_12522_1136_7263: {
    width: wp("2.651428476969401%"),
    minWidth: wp("2.651428476969401%"),
    height: hp("7.640514999139504%"),
    minHeight: hp("7.640514999139504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.58858235677083%"),
    top: hp("3.2685493510929007%")
  },
  View_I2183_12522_1136_7264: {
    width: wp("2.651428476969401%"),
    height: hp("3.056205947542451%"),
    top: hp("2.3346781079234873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7265: {
    width: wp("6.519241045073916e-7%"),
    height: hp("7.640514999139504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7266: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("5.178449453551906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.56572265624999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7267: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("2.6316491632513745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7268: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7269: {
    width: wp("4.491032692991818e-7%"),
    height: hp("5.263465610358233%"),
    top: hp("-0.5093600580601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.99427897135417%")
  },
  View_I2183_12522_1136_7270: {
    width: wp("2.651428476969401%"),
    height: hp("8.744144960830772%"),
    top: hp("2.716498036202182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.54286295572916%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7271: {
    width: wp("2.651428476969401%"),
    height: hp("8.744144960830772%"),
    top: hp("-1.6980447404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7272: {
    width: wp("2.651428476969401%"),
    height: hp("8.744144960830772%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7273: {
    width: wp("0.000001079296756264133%"),
    height: hp("12.649297453666644%"),
    top: hp("-1.4432313012295062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7274: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.52000325520834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7275: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7276: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7277: {
    width: wp("6.084625056246295e-7%"),
    height: hp("7.131147124076802%"),
    top: hp("-1.4432313012295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093749979%")
  },
  View_I2183_12522_1136_7278: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.4971435546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7279: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7280: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7281: {
    width: wp("5.93975346419029e-7%"),
    height: hp("6.9613581798115725%"),
    top: hp("-3.2685493510928936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942789713541629%")
  },
  View_I2183_12522_1136_7282: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("8.319725495218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.47428385416666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7283: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7284: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7285: {
    width: wp("7.895526020244384e-7%"),
    height: hp("9.253512314759968%"),
    top: hp("-2.6316491632513674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7286: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("5.178449453551906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.45142415364583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7287: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("-1.4432313012295026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7288: {
    width: wp("2.651428476969401%"),
    height: hp("3.820257499569752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7289: {
    width: wp("5.215393078591054e-7%"),
    height: hp("6.112411895084902%"),
    top: hp("-0.6793246243169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942789713541629%")
  },
  View_I2183_12522_1136_7290: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.42856445312499%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7291: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7292: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7293: {
    width: wp("6.59167684110192e-7%"),
    height: hp("7.725409731838873%"),
    top: hp("-0.5942089310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7294: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("4.6690893954918025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.40569661458332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7295: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7296: {
    width: wp("2.651428476969401%"),
    height: hp("4.838992989128404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7297: {
    width: wp("7.605781623472771e-7%"),
    height: hp("8.913934426229508%"),
    top: hp("-0.5944757513661258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750085%")
  },
  View_I2183_12522_1136_7298: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("5.900198514344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107.38284505208333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7299: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7300: {
    width: wp("2.651428476969401%"),
    height: hp("2.3770491282145185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7301: {
    width: wp("6.519241045073916e-7%"),
    height: hp("7.640514999139504%"),
    top: hp("-3.2685493510928936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7302: {
    width: wp("2.651428476969401%"),
    height: hp("7.555620266440136%"),
    top: hp("6.621680754781416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.35999348958333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7303: {
    width: wp("2.651428476969401%"),
    height: hp("7.555620266440136%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7304: {
    width: wp("2.651428476969401%"),
    height: hp("7.555620266440136%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7305: {
    width: wp("9.41668258747086e-7%"),
    height: hp("11.036299616912675%"),
    top: hp("-2.122289105191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7306: {
    width: wp("2.651428476969401%"),
    height: hp("3.056205947542451%"),
    top: hp("5.560536202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.33712565104166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7307: {
    width: wp("2.651428476969401%"),
    height: hp("3.056205947542451%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7308: {
    width: wp("2.651428476969401%"),
    height: hp("3.056205947542451%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7309: {
    width: wp("4.4910332993216195e-7%"),
    height: hp("5.263465610358233%"),
    top: hp("-1.4008068647540952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942871093750014%")
  },
  View_I2183_12522_1136_7310: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("119.31425781249999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7311: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2183_12522_1136_7312: {
    width: wp("2.651428476969401%"),
    height: hp("5.857728218120304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 4.971428394317627,
    borderTopRightRadius: 4.971428394317627,
    borderBottomLeftRadius: 4.971428394317627,
    borderBottomRightRadius: 4.971428394317627
  },
  ImageBackground_I2183_12522_1136_7313: {
    width: wp("7.243601430673152e-7%"),
    height: hp("8.489461283866174%"),
    top: hp("-1.5280801741803316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9942708333333314%")
  },
  View_2182_117: {
    width: wp("99.73333333333333%"),
    minWidth: wp("99.73333333333333%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("79.23497267759562%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2182_118: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_118_1004_5090: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_118_1004_5092: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0%")
  },
  Text_I2182_118_1004_5092: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I2182_118_1004_5093: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.066666666666665%"),
    top: hp("6.284153005464489%")
  },
  View_2182_119: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.311108398437497%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_119_1004_5416: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_119_1004_5418: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I2182_119_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_119_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737707%")
  },
  View_2182_120: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.355550130208336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_120_1004_5416: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_120_1004_5418: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0%")
  },
  Text_I2182_120_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_120_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("4.098360655737707%")
  },
  View_2182_121: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_121_1004_5416: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2182_121_1004_5418: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I2182_121_1004_5418: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2182_121_1171_10944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000014%"),
    top: hp("4.098360655737707%")
  },
  View_2182_135: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(242, 242, 148, 1)"
  },
  ImageBackground_2182_136: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_2183_13042: {
    width: wp("128.8%"),
    minWidth: wp("128.8%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.666666666666664%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2183_13043: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.666666666666671%"),
    top: hp("0%")
  },
  Text_2183_13043: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13044: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.333333333333332%"),
    top: hp("0%")
  },
  Text_2183_13044: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13045: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06666666666666%"),
    top: hp("0%")
  },
  Text_2183_13045: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13046: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.666666666666664%"),
    top: hp("0%")
  },
  Text_2183_13046: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13047: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%")
  },
  Text_2183_13047: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13049: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.53333333333333%"),
    top: hp("0%")
  },
  Text_2183_13049: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13048: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118.80000000000001%"),
    top: hp("0%")
  },
  Text_2183_13048: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13132: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("28.96174863387978%")
  },
  Text_2183_13132: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2183_13133: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("65.84699453551912%")
  },
  Text_2183_13133: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
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
