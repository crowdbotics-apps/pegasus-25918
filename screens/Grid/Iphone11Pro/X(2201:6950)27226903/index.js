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
      <View style={styles.View_2201_6951} />
      <View style={styles.View_2201_6952}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ada7/9005/64f311077ec5df27077446336eb97643"
          }}
          style={styles.ImageBackground_I2201_6952_1198_1062}
        />
      </View>
      <View style={styles.View_2201_6953}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1185/862f/5916ddb79bbbb38cc817b5b72eb0adc8"
          }}
          style={styles.ImageBackground_I2201_6953_1198_1054}
        />
      </View>
      <View style={styles.View_2201_6954}>
        <View style={styles.View_I2201_6954_1147_7817}>
          <View style={styles.View_I2201_6954_1147_7817_1147_7815} />
        </View>
      </View>
      <View style={styles.View_2201_6955}>
        <View style={styles.View_I2201_6955_1147_7797}>
          <View style={styles.View_I2201_6955_1147_7797_1147_7781}>
            <View style={styles.View_I2201_6955_1147_7797_1147_7782} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2201_6955_1147_7797_1147_7783}
            />
            <View style={styles.View_I2201_6955_1147_7797_1147_7784} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2201_6955_1147_7797_1147_7785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2201_6955_1147_7797_1147_7789}
          />
          <View style={styles.View_I2201_6955_1147_7797_1147_7794}>
            <View style={styles.View_I2201_6955_1147_7797_1147_7795}>
              <Text style={styles.Text_I2201_6955_1147_7797_1147_7795}>
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
        style={styles.ImageBackground_2201_6956}
      />
      <View style={styles.View_2201_6957}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baff/0721/cd0c6ee41966948cbb8e64e89d4e26e0"
          }}
          style={styles.ImageBackground_I2201_6957_890_368}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a5/fd1b/9302e2c9621085bcf25c25bd34c49f85"
        }}
        style={styles.ImageBackground_2201_6958}
      />
      <View style={styles.View_2201_6959}>
        <View style={styles.View_I2201_6959_1045_7055}>
          <View style={styles.View_I2201_6959_1045_7057}>
            <Text style={styles.Text_I2201_6959_1045_7057}>Search Email</Text>
          </View>
        </View>
        <View style={styles.View_I2201_6959_1045_7058}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/291f/ad5c/f308d5994f1fd58ce49c56c42405b0c5"
            }}
            style={styles.ImageBackground_I2201_6959_1045_7059}
          />
        </View>
      </View>
      <View style={styles.View_2201_6960}>
        <View style={styles.View_I2201_6960_103_657}>
          <View style={styles.View_I2201_6960_103_656} />
          <View style={styles.View_I2201_6960_103_645}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/69de/c137cfd116f26bbe1119c22c52b112b0"
              }}
              style={styles.ImageBackground_I2201_6960_103_645_2327_25556}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2201_6962}>
        <Text style={styles.Text_2201_6962}>Mail</Text>
      </View>
      <View style={styles.View_2201_6963}>
        <Text style={styles.Text_2201_6963}>Chat</Text>
      </View>
      <View style={styles.View_2201_6964}>
        <View style={styles.View_2201_6965}>
          <View style={styles.View_I2201_6965_919_295} />
          <View style={styles.View_I2201_6965_919_296}>
            <Text style={styles.Text_I2201_6965_919_296}>AC</Text>
          </View>
        </View>
        <View style={styles.View_2201_6966}>
          <Text style={styles.Text_2201_6966}>Acme Corp.</Text>
        </View>
        <View style={styles.View_2201_6967}>
          <Text style={styles.Text_2201_6967}>6:05 PM</Text>
        </View>
        <View style={styles.View_2201_6968}>
          <Text style={styles.Text_2201_6968}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2201_6969}>
          <Text style={styles.Text_2201_6969}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2201_6970}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_6970_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_6971}>
        <View style={styles.View_2201_6972}>
          <View style={styles.View_I2201_6972_919_295} />
          <View style={styles.View_I2201_6972_919_296}>
            <Text style={styles.Text_I2201_6972_919_296}>D</Text>
          </View>
        </View>
        <View style={styles.View_2201_6973}>
          <Text style={styles.Text_2201_6973}>Dingo Org.</Text>
        </View>
        <View style={styles.View_2201_6974}>
          <Text style={styles.Text_2201_6974}>12:05 AM</Text>
        </View>
        <View style={styles.View_2201_6975}>
          <Text style={styles.Text_2201_6975}>
            🔥 Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2201_6976}>
          <Text style={styles.Text_2201_6976}>Ut ad minim veniam...</Text>
        </View>
        <View style={styles.View_2201_6977}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_6977_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_6978}>
        <View style={styles.View_2201_6979}>
          <View style={styles.View_I2201_6979_919_295} />
          <View style={styles.View_I2201_6979_919_296}>
            <Text style={styles.Text_I2201_6979_919_296}>O</Text>
          </View>
        </View>
        <View style={styles.View_2201_6980}>
          <Text style={styles.Text_2201_6980}>Omita</Text>
        </View>
        <View style={styles.View_2201_6981}>
          <Text style={styles.Text_2201_6981}>1:05 PM</Text>
        </View>
        <View style={styles.View_2201_6982}>
          <Text style={styles.Text_2201_6982}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2201_6983}>
          <Text style={styles.Text_2201_6983}>Ut enim minim veniam...</Text>
        </View>
        <View style={styles.View_2201_6984}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_6984_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_6985}>
        <View style={styles.View_2201_6986}>
          <View style={styles.View_I2201_6986_919_295} />
          <View style={styles.View_I2201_6986_919_296}>
            <Text style={styles.Text_I2201_6986_919_296}>B</Text>
          </View>
        </View>
        <View style={styles.View_2201_6987}>
          <Text style={styles.Text_2201_6987}>Boat Cleaning</Text>
        </View>
        <View style={styles.View_2201_6988}>
          <Text style={styles.Text_2201_6988}>2:25 PM</Text>
        </View>
        <View style={styles.View_2201_6989}>
          <Text style={styles.Text_2201_6989}>
            Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2201_6990}>
          <Text style={styles.Text_2201_6990}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2201_6991}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_6991_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_6992}>
        <View style={styles.View_2201_6993}>
          <View style={styles.View_I2201_6993_919_295} />
          <View style={styles.View_I2201_6993_919_296}>
            <Text style={styles.Text_I2201_6993_919_296}>NP</Text>
          </View>
        </View>
        <View style={styles.View_2201_6994}>
          <Text style={styles.Text_2201_6994}>Nordic</Text>
        </View>
        <View style={styles.View_2201_6995}>
          <Text style={styles.Text_2201_6995}>3:05 PM</Text>
        </View>
        <View style={styles.View_2201_6996}>
          <Text style={styles.Text_2201_6996}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2201_6997}>
          <Text style={styles.Text_2201_6997}>Ut enim ad veniam...</Text>
        </View>
        <View style={styles.View_2201_6998}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_6998_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_6999}>
        <View style={styles.View_2201_7000}>
          <View style={styles.View_I2201_7000_919_295} />
          <View style={styles.View_I2201_7000_919_296}>
            <Text style={styles.Text_I2201_7000_919_296}>S</Text>
          </View>
        </View>
        <View style={styles.View_2201_7001}>
          <Text style={styles.Text_2201_7001}>Siren</Text>
        </View>
        <View style={styles.View_2201_7002}>
          <Text style={styles.Text_2201_7002}>9:44 PM</Text>
        </View>
        <View style={styles.View_2201_7003}>
          <Text style={styles.Text_2201_7003}>
            🎹 Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2201_7004}>
          <Text style={styles.Text_2201_7004}>Ut enim ad minim veniam...</Text>
        </View>
        <View style={styles.View_2201_7005}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_7005_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_7006}>
        <View style={styles.View_2201_7007}>
          <View style={styles.View_I2201_7007_103_657}>
            <View style={styles.View_I2201_7007_103_656} />
            <View style={styles.View_I2201_7007_103_645}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bb8/5f53/23224190ad1324dee1b333d66a224929"
                }}
                style={styles.ImageBackground_I2201_7007_103_645_2327_25556}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2201_7008}>
          <Text style={styles.Text_2201_7008}>Jane Doe</Text>
        </View>
        <View style={styles.View_2201_7009}>
          <Text style={styles.Text_2201_7009}>11:28 PM</Text>
        </View>
        <View style={styles.View_2201_7010}>
          <Text style={styles.Text_2201_7010}>Elementum at elementum...</Text>
        </View>
        <View style={styles.View_2201_7011}>
          <Text style={styles.Text_2201_7011}>Ut enim veniam...</Text>
        </View>
        <View style={styles.View_2201_7012}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_7012_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_7013}>
        <View style={styles.View_2201_7014}>
          <View style={styles.View_I2201_7014_919_295} />
          <View style={styles.View_I2201_7014_919_296}>
            <Text style={styles.Text_I2201_7014_919_296}>e</Text>
          </View>
        </View>
        <View style={styles.View_2201_7015}>
          <Text style={styles.Text_2201_7015}>epay</Text>
        </View>
        <View style={styles.View_2201_7016}>
          <Text style={styles.Text_2201_7016}>9:12 AM</Text>
        </View>
        <View style={styles.View_2201_7017}>
          <Text style={styles.Text_2201_7017}>
            Reprehenderit in voluptate...
          </Text>
        </View>
        <View style={styles.View_2201_7018}>
          <Text style={styles.Text_2201_7018}>Ut enim ad minim...</Text>
        </View>
        <View style={styles.View_2201_7019}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a14c/ee86/fdd6cbfc1f12149f8e3798c2d4183885"
            }}
            style={styles.ImageBackground_I2201_7019_1198_2092}
          />
        </View>
      </View>
      <View style={styles.View_2201_7020}>
        <View style={styles.View_I2201_7020_2151_14601}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5d1a/bcaf85e3bbfd416f7a506fad094354bd"
            }}
            style={styles.ImageBackground_I2201_7020_2151_14601_1198_165}
          />
        </View>
        <View style={styles.View_I2201_7020_2151_14602}>
          <Text style={styles.Text_I2201_7020_2151_14602}>Compose</Text>
        </View>
      </View>
      <View style={styles.View_2201_7134} />
      <View style={styles.View_2201_7136}>
        <View style={styles.View_2201_7135} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d4f/1834/efd544391bc00114f4c59132f3357185"
          }}
          style={styles.ImageBackground_2201_7265}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d4f/1834/efd544391bc00114f4c59132f3357185"
          }}
          style={styles.ImageBackground_2201_7267}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d4f/1834/efd544391bc00114f4c59132f3357185"
          }}
          style={styles.ImageBackground_2201_7270}
        />
        <View style={styles.View_2201_7137} />
        <View style={styles.View_2201_7138}>
          <View style={styles.View_2201_7139}>
            <View style={styles.View_I2201_7139_1198_1059}>
              <View style={styles.View_I2201_7139_1198_1059_890_126} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b9/1068/88b3a02e6a01555b8e56d3595ca393a1"
                }}
                style={styles.ImageBackground_I2201_7139_1198_1059_890_127}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db7/bcad/28fbacb30034a7e93fb201b2d04f8285"
                }}
                style={styles.ImageBackground_I2201_7139_1198_1059_890_128}
              />
            </View>
          </View>
          <View style={styles.View_2201_7140}>
            <Text style={styles.Text_2201_7140}>All Inboxes 635+</Text>
          </View>
        </View>
        <View style={styles.View_2201_7141}>
          <View style={styles.View_2201_7142}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b193/abee/b68e380519762f76016aefb7dbd4fb61"
              }}
              style={styles.ImageBackground_2201_7143}
            />
            <View style={styles.View_2201_7144}>
              <Text style={styles.Text_2201_7144}>Primary</Text>
            </View>
          </View>
          <View style={styles.View_2201_7145}>
            <View style={styles.View_2201_7146}>
              <View style={styles.View_I2201_7146_1198_1241}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c403/bbd8/d3f1317f9f066595e7ba1adb3a4a61e6"
                  }}
                  style={styles.ImageBackground_I2201_7146_1198_1241_890_99}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deeb/5522/ccfe540399bd0d6ec4baa51ea174649d"
                  }}
                  style={styles.ImageBackground_I2201_7146_1198_1241_890_100}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d371/60a8/0db41fdd4801869cfd5610359007482c"
                  }}
                  style={styles.ImageBackground_I2201_7146_1198_1241_890_101}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8cc/ed03/ccb6658a289dc34134b127641809a3ae"
                  }}
                  style={styles.ImageBackground_I2201_7146_1198_1241_890_102}
                />
              </View>
            </View>
            <View style={styles.View_2201_7147}>
              <Text style={styles.Text_2201_7147}>Social</Text>
            </View>
          </View>
          <View style={styles.View_2201_7157}>
            <View style={styles.View_2201_7158}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a231/d7c3/c39e69c83ba20961e3b16539b67e6504"
                }}
                style={styles.ImageBackground_I2201_7158_1198_1238}
              />
            </View>
            <View style={styles.View_2201_7159}>
              <Text style={styles.Text_2201_7159}>Promotions</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2201_7187}>
          <View style={styles.View_2201_7188}>
            <View style={styles.View_2201_7189}>
              <View style={styles.View_I2201_7189_1158_9471}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96b7/e9d7/7a8a07c45e74b581c287bb15d0117864"
                  }}
                  style={styles.ImageBackground_I2201_7189_1158_9472}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7466/5352/0ba70ba01b2743bb7088a523063fe657"
                  }}
                  style={styles.ImageBackground_I2201_7189_1158_9479}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f62a/e458/38a16e1c164ef097d9db2b23385f9063"
                  }}
                  style={styles.ImageBackground_I2201_7189_1158_9480}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/009d/e448/8b2bfe400611ff824ffdf59b9be75c61"
                  }}
                  style={styles.ImageBackground_I2201_7189_1158_9481}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2201_7209}>
        <View style={styles.View_2201_7213}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c879/2afa/e4e3af91f5e8be0424bc572cdbe17221"
            }}
            style={styles.ImageBackground_2201_7214}
          />
          <View style={styles.View_2201_7215}>
            <Text style={styles.Text_2201_7215}>Starred</Text>
          </View>
        </View>
        <View style={styles.View_2201_7216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4438/1932/a8a6fc1a3446556d9aabf138067caa7d"
            }}
            style={styles.ImageBackground_2201_7217}
          />
          <View style={styles.View_2201_7218}>
            <Text style={styles.Text_2201_7218}>Snoozed</Text>
          </View>
        </View>
        <View style={styles.View_2201_7222}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/609c/f4e5/769669354448f4f907a03c2aee752bc0"
            }}
            style={styles.ImageBackground_2201_7223}
          />
          <View style={styles.View_2201_7224}>
            <Text style={styles.Text_2201_7224}>Sent</Text>
          </View>
        </View>
        <View style={styles.View_2201_7219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e9a/bd82/eab98f22608f0dd2b35815f84044edc9"
            }}
            style={styles.ImageBackground_2201_7220}
          />
          <View style={styles.View_2201_7221}>
            <Text style={styles.Text_2201_7221}>Important 99+</Text>
          </View>
        </View>
        <View style={styles.View_2201_7210}>
          <View style={styles.View_2201_7211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c095/53e1/de0550ed661ad0c4a5d6821d2f4e0e39"
              }}
              style={styles.ImageBackground_I2201_7211_1198_175}
            />
          </View>
          <View style={styles.View_2201_7212}>
            <Text style={styles.Text_2201_7212}>Scheduled</Text>
          </View>
        </View>
        <View style={styles.View_2201_7225}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb53/eafc/9999aede30d204b3f2a7cc85b864b2fa"
            }}
            style={styles.ImageBackground_2201_7226}
          />
          <View style={styles.View_2201_7227}>
            <Text style={styles.Text_2201_7227}>Drafts 42</Text>
          </View>
        </View>
        <View style={styles.View_2201_7231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdf/b830/f06dc72444bdb93d093def6cbff2dc38"
            }}
            style={styles.ImageBackground_2201_7232}
          />
          <View style={styles.View_2201_7233}>
            <Text style={styles.Text_2201_7233}>Spam</Text>
          </View>
        </View>
        <View style={styles.View_2201_7228}>
          <View style={styles.View_2201_7229}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f377/0046/3a478f25e1703315eff735bffd133c37"
              }}
              style={styles.ImageBackground_I2201_7229_1198_166}
            />
          </View>
          <View style={styles.View_2201_7230}>
            <Text style={styles.Text_2201_7230}>Trash</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2201_7272}>
        <View style={styles.View_2201_7273}>
          <View style={styles.View_2201_7274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e9a/bd82/eab98f22608f0dd2b35815f84044edc9"
              }}
              style={styles.ImageBackground_I2201_7274_1198_1229}
            />
          </View>
          <View style={styles.View_2201_7275}>
            <Text style={styles.Text_2201_7275}>Notes</Text>
          </View>
        </View>
        <View style={styles.View_2201_7276}>
          <View style={styles.View_2201_7277}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e9a/bd82/eab98f22608f0dd2b35815f84044edc9"
              }}
              style={styles.ImageBackground_I2201_7277_1198_1229}
            />
          </View>
          <View style={styles.View_2201_7278}>
            <Text style={styles.Text_2201_7278}>Snoozed</Text>
          </View>
        </View>
        <View style={styles.View_2201_7279}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700f/be1d/cbf7328615a672c5f202c386cb1ae684"
            }}
            style={styles.ImageBackground_2201_7280}
          />
          <View style={styles.View_2201_7281}>
            <Text style={styles.Text_2201_7281}>Important 99+</Text>
          </View>
        </View>
        <View style={styles.View_2201_7282}>
          <View style={styles.View_2201_7283}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c9b/33cf/caa0de2e6a99cbe47e8b03f6e1e5249f"
              }}
              style={styles.ImageBackground_I2201_7283_1198_175}
            />
          </View>
          <View style={styles.View_2201_7284}>
            <Text style={styles.Text_2201_7284}>Scheduled</Text>
          </View>
        </View>
        <View style={styles.View_2201_7285}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/6fad/5531fae0b9132b7018ef4c498bdf54a5"
            }}
            style={styles.ImageBackground_2201_7286}
          />
          <View style={styles.View_2201_7287}>
            <Text style={styles.Text_2201_7287}>Sent</Text>
          </View>
        </View>
        <View style={styles.View_2201_7288}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/221a/9745/0c0a84038f444989a78748558c89f8ba"
            }}
            style={styles.ImageBackground_2201_7289}
          />
          <View style={styles.View_2201_7290}>
            <Text style={styles.Text_2201_7290}>Drafts 42</Text>
          </View>
        </View>
        <View style={styles.View_2201_7291}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f32/ce5d/61eb792132fa2fae35fd085b2812b061"
            }}
            style={styles.ImageBackground_2201_7292}
          />
          <View style={styles.View_2201_7293}>
            <Text style={styles.Text_2201_7293}>Notes</Text>
          </View>
        </View>
        <View style={styles.View_2201_7294}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9a9/0c22/93ca06448d94eba953725e9b82d82d5d"
            }}
            style={styles.ImageBackground_2201_7295}
          />
          <View style={styles.View_2201_7296}>
            <Text style={styles.Text_2201_7296}>Spam</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2201_7269}>
        <Text style={styles.Text_2201_7269}>Pmail</Text>
      </View>
      <View style={styles.View_2201_7314}>
        <Text style={styles.Text_2201_7314}>LABELS</Text>
      </View>
      <View style={styles.View_2201_7323}>
        <View style={styles.View_I2201_7323_541_3473}>
          <Text style={styles.Text_I2201_7323_541_3473}>16 New</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2201_6951: {
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
  View_2201_6952: {
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
  ImageBackground_I2201_6952_1198_1062: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6953: {
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
  ImageBackground_I2201_6953_1198_1054: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6954: {
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
  View_I2201_6954_1147_7817: {
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
  View_I2201_6954_1147_7817_1147_7815: {
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
  View_2201_6955: {
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
  View_I2201_6955_1147_7797: {
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
  View_I2201_6955_1147_7797_1147_7781: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2201_6955_1147_7797_1147_7782: {
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
  ImageBackground_I2201_6955_1147_7797_1147_7783: {
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
  View_I2201_6955_1147_7797_1147_7784: {
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
  ImageBackground_I2201_6955_1147_7797_1147_7785: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2201_6955_1147_7797_1147_7789: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.413390112704918%")
  },
  View_I2201_6955_1147_7797_1147_7794: {
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
  View_I2201_6955_1147_7797_1147_7795: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2201_6955_1147_7797_1147_7795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2201_6956: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2201_6957: {
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
  ImageBackground_I2201_6957_890_368: {
    flexGrow: 1,
    width: wp("5.924825032552084%"),
    height: hp("3.0352587256926657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23756510416666288%"),
    top: hp("0.12167008196721163%")
  },
  ImageBackground_2201_6958: {
    width: wp("0%"),
    height: hp("4.098360655737705%"),
    top: hp("94.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_2201_6959: {
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
  View_I2201_6959_1045_7055: {
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
  View_I2201_6959_1045_7057: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475397%")
  },
  Text_I2201_6959_1045_7057: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2201_6959_1045_7058: {
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
  ImageBackground_I2201_6959_1045_7059: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_2201_6960: {
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
  View_I2201_6960_103_657: {
    flexGrow: 1,
    width: wp("9.142856852213542%"),
    height: hp("4.683840600519233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7619140624999972%"),
    top: hp("0.39035817964480835%")
  },
  View_I2201_6960_103_656: {
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
  View_I2201_6960_103_645: {
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
  ImageBackground_I2201_6960_103_645_2327_25556: {
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
  View_2201_6962: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("104.0983606557377%")
  },
  Text_2201_6962: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6963: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("104.0983606557377%")
  },
  Text_2201_6963: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6964: {
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
  View_2201_6965: {
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
  View_I2201_6965_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.46826972336065253%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_6965_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_6965_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6966: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_6966: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6967: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2201_6967: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6968: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.00546448087432%")
  },
  Text_2201_6968: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6969: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2201_6969: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6970: {
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
  ImageBackground_I2201_6970_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6971: {
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
  View_2201_6972: {
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
  View_I2201_6972_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(255, 93, 161, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_6972_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.3418822575136673%")
  },
  Text_I2201_6972_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6973: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_6973: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6974: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_2201_6974: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6975: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743163%")
  },
  Text_2201_6975: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6976: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2201_6976: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6977: {
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
  ImageBackground_I2201_6977_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6978: {
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
  View_2201_6979: {
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
  View_I2201_6979_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606561%"),
    backgroundColor: "rgba(6, 62, 249, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_6979_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_6979_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6980: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_6980: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6981: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("0.4098360655737636%")
  },
  Text_2201_6981: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6982: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2201_6982: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6983: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.4644808743169335%")
  },
  Text_2201_6983: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6984: {
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
  ImageBackground_I2201_6984_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6985: {
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
  View_2201_6986: {
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
  View_I2201_6986_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606419%"),
    backgroundColor: "rgba(238, 238, 44, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_6986_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_6986_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6987: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_6987: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6988: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%"),
    top: hp("0.40983606557377783%")
  },
  Text_2201_6988: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6989: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743234%")
  },
  Text_2201_6989: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6990: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316948%")
  },
  Text_2201_6990: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6991: {
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
  ImageBackground_I2201_6991_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6992: {
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
  View_2201_6993: {
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
  View_I2201_6993_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606561%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_6993_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_6993_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6994: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_6994: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6995: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%"),
    top: hp("0.40983606557377783%")
  },
  Text_2201_6995: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6996: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.0054644808743234%")
  },
  Text_2201_6996: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6997: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316941%")
  },
  Text_2201_6997: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_6998: {
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
  ImageBackground_I2201_6998_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_6999: {
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
  View_2201_7000: {
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
  View_I2201_7000_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_7000_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_7000_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7001: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_7001: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7002: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2201_7002: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7003: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2201_7003: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7004: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.4644808743169335%")
  },
  Text_2201_7004: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7005: {
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
  ImageBackground_I2201_7005_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7006: {
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
  View_2201_7007: {
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
  View_I2201_7007_103_657: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606632%")
  },
  View_I2201_7007_103_656: {
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
  View_I2201_7007_103_645: {
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
  ImageBackground_I2201_7007_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("24.449995930989584%"),
    height: hp("18.77195431235058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.9142578125%"),
    top: hp("-2.722368084016395%"),
    resizeMode: "cover"
  },
  View_2201_7008: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_7008: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7009: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_2201_7009: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7010: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2201_7010: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7011: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.464480874316948%")
  },
  Text_2201_7011: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7012: {
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
  ImageBackground_I2201_7012_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7013: {
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
  View_2201_7014: {
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
  View_I2201_7014_919_295: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    height: hp("5.620608303716274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("0.4682697233606632%"),
    backgroundColor: "rgba(255, 93, 161, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I2201_7014_919_296: {
    flexGrow: 1,
    width: wp("10.971427408854167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9142578124999998%"),
    top: hp("2.34188225751366%")
  },
  Text_I2201_7014_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7015: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("0%")
  },
  Text_2201_7015: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7016: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("0.4098360655737707%")
  },
  Text_2201_7016: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7017: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.005464480874309%")
  },
  Text_2201_7017: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7018: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("5.737704918032776%")
  },
  Text_2201_7018: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7019: {
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
  ImageBackground_I2201_7019_1198_2092: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7020: {
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
  View_I2201_7020_2151_14601: {
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
  ImageBackground_I2201_7020_2151_14601_1198_165: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2201_7020_2151_14602: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2.185792349726782%")
  },
  Text_I2201_7020_2151_14602: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6499999761581421
  },
  View_2201_7136: {
    width: wp("74.93333333333332%"),
    minWidth: wp("74.93333333333332%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7135: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 44, 61, 1)"
  },
  ImageBackground_2201_7265: {
    width: wp("74.66666666666667%"),
    height: hp("0%"),
    top: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  ImageBackground_2201_7267: {
    width: wp("74.66666666666667%"),
    height: hp("0%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2201_7270: {
    width: wp("74.66666666666667%"),
    height: hp("0%"),
    top: hp("96.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_2201_7137: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 0
  },
  View_2201_7138: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7139: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.47814207650273133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_7139_1198_1059: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2201_7139_1198_1059_890_126: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("1.366120218579237%"),
    borderColor: "rgba(193, 156, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I2201_7139_1198_1059_890_127: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_I2201_7139_1198_1059_890_128: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.4098360655737707%")
  },
  View_2201_7140: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("0%")
  },
  Text_2201_7140: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7141: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("27.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7142: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7143: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420764985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7144: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7144: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7145: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7146: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.024590163934434%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_7146_1198_1241: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2201_7146_1198_1241_890_99: {
    flexGrow: 1,
    width: wp("1.2%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I2201_7146_1198_1241_890_100: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0.45537342790697444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.799999999999999%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_I2201_7146_1198_1241_890_101: {
    flexGrow: 1,
    width: wp("2.4%"),
    height: hp("0.7285974064811331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20000000000000018%"),
    top: hp("1.0928961748633768%")
  },
  ImageBackground_I2201_7146_1198_1241_890_102: {
    flexGrow: 1,
    width: wp("1.911967976888021%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4880208333333336%"),
    top: hp("1.2751344774590123%")
  },
  View_2201_7147: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7147: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7157: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7158: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765056%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7158_1198_1238: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7159: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7159: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7187: {
    width: wp("13.673434448242189%"),
    minWidth: wp("13.673434448242189%"),
    height: hp("5.03409859912643%"),
    minHeight: hp("5.03409859912643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("6.967213114754098%")
  },
  View_2201_7188: {
    width: wp("13.673434448242189%"),
    minWidth: wp("13.673434448242189%"),
    height: hp("5.03409859912643%"),
    minHeight: hp("5.03409859912643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7189: {
    width: wp("13.673434448242189%"),
    minWidth: wp("13.673434448242189%"),
    height: hp("5.03409859912643%"),
    minHeight: hp("5.03409859912643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_7189_1158_9471: {
    flexGrow: 1,
    width: wp("13.673433430989585%"),
    height: hp("5.034080880587219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2201_7189_1158_9472: {
    width: wp("8.366003926595052%"),
    height: hp("3.9365002366363027%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.307421875%")
  },
  ImageBackground_I2201_7189_1158_9479: {
    width: wp("8.36621805826823%"),
    height: hp("4.550051037731066%"),
    top: hp("0.48401212431694063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2201_7189_1158_9480: {
    width: wp("5.696148173014323%"),
    height: hp("3.0979070507112096%"),
    top: hp("0.8711684596994544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.38203125%")
  },
  ImageBackground_I2201_7189_1158_9481: {
    width: wp("3.738097890218099%"),
    height: hp("2.0330017381678513%"),
    top: hp("2.710627988387979%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.602083333333332%")
  },
  View_2201_7209: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("45.3551912568306%"),
    minHeight: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("48.49726775956284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7213: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7214: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7215: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7215: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7216: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.8743169398907185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7217: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420764985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7218: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7218: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7222: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7223: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420765127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7224: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7224: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7219: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672134%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7220: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7221: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7221: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7210: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.49726775956284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7211: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765056%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7211_1198_175: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7212: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7212: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7225: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7226: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7227: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7227: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7231: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7232: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.8879781420765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7233: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7233: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7228: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.12021857923498%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7229: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765056%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7229_1198_166: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7230: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7230: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7272: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("45.3551912568306%"),
    minHeight: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("103.9617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7273: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7274: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420764772%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7274_1198_1229: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7275: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7275: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7276: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7277: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420764914%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7277_1198_1229: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7278: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0%")
  },
  Text_2201_7278: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7279: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7280: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7281: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7281: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7282: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.622950819672113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2201_7283: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.024590163934434%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2201_7283_1198_175: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2201_7284: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7284: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7285: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.497267759562817%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7286: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7287: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7288: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.37158469945352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7289: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0245901639344481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7290: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7290: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7291: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7292: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0245901639344481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7293: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7293: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7294: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.12021857923496%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2201_7295: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.0245901639344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2201_7296: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%")
  },
  Text_2201_7296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7269: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("7.377049180327869%")
  },
  Text_2201_7269: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2201_7314: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("99.18032786885246%")
  },
  Text_2201_7314: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2201_7323: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("39.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2201_7323_541_3473: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2201_7323_541_3473: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "uppercase"
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
