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
      <View style={styles.View_2248_34}>
        <View style={styles.View_I2248_34_2733_26671} />
      </View>
      <View style={styles.View_2248_35}>
        <Text style={styles.Text_2248_35}>Total Balance</Text>
      </View>
      <View style={styles.View_2248_56}>
        <View style={styles.View_2248_57}>
          <View style={styles.View_2248_58}>
            <View style={styles.View_I2248_58_1004_5090}>
              <View style={styles.View_I2248_58_1004_5092}>
                <Text style={styles.Text_I2248_58_1004_5092}>Income</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
              }}
              style={styles.ImageBackground_I2248_58_1004_5093}
            />
          </View>
        </View>
        <View style={styles.View_2248_59}>
          <View style={styles.View_2248_60}>
            <View style={styles.View_I2248_60_1004_5416}>
              <View style={styles.View_I2248_60_1004_5418}>
                <Text style={styles.Text_I2248_60_1004_5418}>Expenses</Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I2248_60_1171_10944}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7211/bbeb/f26f467e0756c53af74ca37b615e9c65"
        }}
        style={styles.ImageBackground_2248_61}
      />
      <View style={styles.View_2249_5}>
        <View style={styles.View_2248_36}>
          <View style={styles.View_I2248_36_2733_26671} />
        </View>
        <View style={styles.View_2248_37}>
          <Text style={styles.Text_2248_37}>Vacation Fund</Text>
        </View>
        <View style={styles.View_2248_63}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ab/4fa2/d6cd49e66277c26b23b4b2b615f595d0"
            }}
            style={styles.ImageBackground_I2248_63_1177_115}
          />
          <View style={styles.View_I2248_63_1177_116}>
            <View style={styles.View_I2248_63_1177_117}>
              <Text style={styles.Text_I2248_63_1177_117}>Sales</Text>
            </View>
            <View style={styles.View_I2248_63_1177_118}>
              <Text style={styles.Text_I2248_63_1177_118}>3,667</Text>
            </View>
            <View style={styles.View_I2248_63_1177_119}>
              <Text style={styles.Text_I2248_63_1177_119}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2248_63_1177_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5a9/34f8/06d73693c75ce6a6b588309f89bc7206"
              }}
              style={styles.ImageBackground_I2248_63_1177_120_890_85}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2249_31}>
        <View style={styles.View_2249_32}>
          <View style={styles.View_I2249_32_2733_26671} />
        </View>
        <View style={styles.View_2249_33}>
          <Text style={styles.Text_2249_33}>Travel Credit</Text>
        </View>
        <View style={styles.View_2249_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0e/50d7/014161abe1f1d8c8be89ddb1063e059b"
            }}
            style={styles.ImageBackground_I2249_34_1177_115}
          />
          <View style={styles.View_I2249_34_1177_116}>
            <View style={styles.View_I2249_34_1177_117}>
              <Text style={styles.Text_I2249_34_1177_117}>Sales</Text>
            </View>
            <View style={styles.View_I2249_34_1177_118}>
              <Text style={styles.Text_I2249_34_1177_118}>3,667</Text>
            </View>
            <View style={styles.View_I2249_34_1177_119}>
              <Text style={styles.Text_I2249_34_1177_119}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_34_1177_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/487f/812358baed99860d46048e93c8d2eb00"
              }}
              style={styles.ImageBackground_I2249_34_1177_120_890_85}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2248_66} />
      <View style={styles.View_2248_67}>
        <Text style={styles.Text_2248_67}>Slice Bank</Text>
      </View>
      <View style={styles.View_2248_68}>
        <View style={styles.View_2248_69}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca9/b11b/1df900f4dcef20c7af20719e883a7e93"
            }}
            style={styles.ImageBackground_2248_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd2/9ccb/108b64d24b44a2983c69bc1116515699"
            }}
            style={styles.ImageBackground_2248_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c5c1/29b3da44d352c14b3e4d115674ec8ed9"
            }}
            style={styles.ImageBackground_2248_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c0/db9e/b8d01e850c57a74cfd65125f81a7487b"
            }}
            style={styles.ImageBackground_2248_74}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1588/fe94/b239c21bde960158be9d101f8b1c1ee7"
            }}
            style={styles.ImageBackground_2248_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e42d/40e7/e91b207702ff88e9864c16b8f5d849bf"
            }}
            style={styles.ImageBackground_2248_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa74/68fd/c35c8d0435615eba47283be96d9bb591"
            }}
            style={styles.ImageBackground_2248_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6915/67e4/e79b6e5a9031ec36d49c697a28c20d04"
            }}
            style={styles.ImageBackground_2248_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a8/120b/96878a6baeccc1790f5004ddd1e1bc9a"
            }}
            style={styles.ImageBackground_2248_84}
          />
        </View>
      </View>
      <View style={styles.View_2248_86}>
        <View style={styles.View_I2248_86_1045_6899}>
          <View style={styles.View_I2248_86_1045_6901}>
            <Text style={styles.Text_I2248_86_1045_6901}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I2248_86_1045_6902}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4470/030c/30ab3efce778506b3d6312b7138f5cfc"
            }}
            style={styles.ImageBackground_I2248_86_1045_6903}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df2/5098/58722ea5e9f04b5c9a9040180d3c992a"
        }}
        style={styles.ImageBackground_2248_87}
      />
      <View style={styles.View_2248_88}>
        <View style={styles.View_I2248_88_103_657}>
          <View style={styles.View_I2248_88_103_656} />
          <View style={styles.View_I2248_88_103_645}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2318/5023/65b272294744d9eba53bfe1ecf1b5d52"
              }}
              style={styles.ImageBackground_I2248_88_103_645_2209_123}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2249_6}>
        <View style={styles.View_2248_41}>
          <View style={styles.View_I2248_41_2733_26671} />
        </View>
        <View style={styles.View_2248_55}>
          <View style={styles.View_I2248_55_1033_6175}>
            <Text style={styles.Text_I2248_55_1033_6175}>23</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6176}>
            <View style={styles.View_I2248_55_1033_6177} />
            <View style={styles.View_I2248_55_1033_6178}>
              <View style={styles.View_I2248_55_1033_6179}>
                <Text style={styles.Text_I2248_55_1033_6179}>August</Text>
              </View>
              <View style={styles.View_I2248_55_1033_6180}>
                <Text style={styles.Text_I2248_55_1033_6180}>2049</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2248_55_1033_6181}>
            <Text style={styles.Text_I2248_55_1033_6181}>Mo</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6182}>
            <Text style={styles.Text_I2248_55_1033_6182}>Tu</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6183}>
            <Text style={styles.Text_I2248_55_1033_6183}>We</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6184}>
            <Text style={styles.Text_I2248_55_1033_6184}>Th</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6185}>
            <Text style={styles.Text_I2248_55_1033_6185}>Fr</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6186}>
            <Text style={styles.Text_I2248_55_1033_6186}>Sa</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6187}>
            <Text style={styles.Text_I2248_55_1033_6187}>Su</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6188}>
            <Text style={styles.Text_I2248_55_1033_6188}>31</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6189}>
            <Text style={styles.Text_I2248_55_1033_6189}>1</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6190}>
            <Text style={styles.Text_I2248_55_1033_6190}>2</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6191}>
            <Text style={styles.Text_I2248_55_1033_6191}>3</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6192}>
            <Text style={styles.Text_I2248_55_1033_6192}>4</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6193}>
            <Text style={styles.Text_I2248_55_1033_6193}>5</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6194}>
            <Text style={styles.Text_I2248_55_1033_6194}>6</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6195}>
            <Text style={styles.Text_I2248_55_1033_6195}>7</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6196}>
            <Text style={styles.Text_I2248_55_1033_6196}>8</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6197}>
            <Text style={styles.Text_I2248_55_1033_6197}>9</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6198}>
            <Text style={styles.Text_I2248_55_1033_6198}>10</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6199}>
            <Text style={styles.Text_I2248_55_1033_6199}>11</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6200}>
            <Text style={styles.Text_I2248_55_1033_6200}>12</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6201}>
            <Text style={styles.Text_I2248_55_1033_6201}>13</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6202}>
            <Text style={styles.Text_I2248_55_1033_6202}>14</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6203}>
            <Text style={styles.Text_I2248_55_1033_6203}>15</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6204}>
            <Text style={styles.Text_I2248_55_1033_6204}>16</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6205}>
            <Text style={styles.Text_I2248_55_1033_6205}>17</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6206}>
            <Text style={styles.Text_I2248_55_1033_6206}>18</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6207}>
            <Text style={styles.Text_I2248_55_1033_6207}>19</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6208}>
            <Text style={styles.Text_I2248_55_1033_6208}>20</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6209}>
            <Text style={styles.Text_I2248_55_1033_6209}>21</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6210}>
            <Text style={styles.Text_I2248_55_1033_6210}>22</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6211}>
            <Text style={styles.Text_I2248_55_1033_6211}>23</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6212}>
            <Text style={styles.Text_I2248_55_1033_6212}>24</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6213}>
            <Text style={styles.Text_I2248_55_1033_6213}>25</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6214}>
            <Text style={styles.Text_I2248_55_1033_6214}>26</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6215}>
            <Text style={styles.Text_I2248_55_1033_6215}>27</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6216}>
            <Text style={styles.Text_I2248_55_1033_6216}>28</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6217}>
            <Text style={styles.Text_I2248_55_1033_6217}>29</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6218}>
            <Text style={styles.Text_I2248_55_1033_6218}>30</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6219}>
            <Text style={styles.Text_I2248_55_1033_6219}>31</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6220}>
            <Text style={styles.Text_I2248_55_1033_6220}>1</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6221}>
            <Text style={styles.Text_I2248_55_1033_6221}>2</Text>
          </View>
          <View style={styles.View_I2248_55_1033_6222}>
            <Text style={styles.Text_I2248_55_1033_6222}>3</Text>
          </View>
        </View>
        <View style={styles.View_2248_90}>
          <Text style={styles.Text_2248_90}>Pay Schedule</Text>
        </View>
      </View>
      <View style={styles.View_2249_7}>
        <View style={styles.View_2248_39}>
          <View style={styles.View_I2248_39_2733_26671} />
        </View>
        <View style={styles.View_2248_65}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7123}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7126}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ec/9588/aa07225c960602164b9df10662be6efe"
            }}
            style={styles.ImageBackground_I2248_65_1136_7129}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d02/40de/af5c3a00e7119fa717f47a36d423dd7e"
            }}
            style={styles.ImageBackground_I2248_65_1136_7130}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd4b/d186/091a08ca6c9737a100dc7716bc2d52c7"
            }}
            style={styles.ImageBackground_I2248_65_1136_7138}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebee/1510/06580c903a3a69e97ee55f6cce41d441"
            }}
            style={styles.ImageBackground_I2248_65_1136_7146}
          />
        </View>
        <View style={styles.View_2248_89}>
          <View style={styles.View_I2248_89_1140_18}>
            <View style={styles.View_I2248_89_1140_18_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955f/1b08/16c9cc7356d5f0d42e2b8821e85a675c"
                }}
                style={styles.ImageBackground_I2248_89_1140_18_547_570_331_1614}
              />
              <View style={styles.View_I2248_89_1140_18_547_570_331_1615}>
                <Text style={styles.Text_I2248_89_1140_18_547_570_331_1615}>
                  Rent
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2248_89_1140_19}>
            <View style={styles.View_I2248_89_1140_19_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefc/cde7/45bebebe39933c5a10d45e78272f2089"
                }}
                style={styles.ImageBackground_I2248_89_1140_19_547_570_331_1614}
              />
              <View style={styles.View_I2248_89_1140_19_547_570_331_1615}>
                <Text style={styles.Text_I2248_89_1140_19_547_570_331_1615}>
                  Food
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2248_89_1140_20}>
            <View style={styles.View_I2248_89_1140_20_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b19/4b50/efe136eab56681bc7919bd3d6527640e"
                }}
                style={styles.ImageBackground_I2248_89_1140_20_547_570_331_1614}
              />
              <View style={styles.View_I2248_89_1140_20_547_570_331_1615}>
                <Text style={styles.Text_I2248_89_1140_20_547_570_331_1615}>
                  Travel
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2248_93}>
          <Text style={styles.Text_2248_93}>Expenses</Text>
        </View>
        <View style={styles.View_2248_94}>
          <View style={styles.View_I2248_94_1022_48} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2053/e865/57ffe13d65284ebb7eeaefa249f0b47a"
            }}
            style={styles.ImageBackground_I2248_94_1022_49}
          />
          <View style={styles.View_I2248_94_1022_50}>
            <Text style={styles.Text_I2248_94_1022_50}>Recent</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2249_30}>
        <View style={styles.View_2248_38}>
          <View style={styles.View_I2248_38_2733_26671} />
        </View>
        <View style={styles.View_2248_62}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1fe/f4ec/c396142b428482389725ed359f1b25a4"
            }}
            style={styles.ImageBackground_I2248_62_1136_8079}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0957/5aaf/65cb7bd23beaa93eb0d02838f56df1a2"
            }}
            style={styles.ImageBackground_I2248_62_1136_8080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a94/daee/273f5bf7fa68f9417bdc89cd71653b3a"
            }}
            style={styles.ImageBackground_I2248_62_1136_8081}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/000a/c45c/04864b75f347a3b50190f2ba35b9b508"
            }}
            style={styles.ImageBackground_I2248_62_1136_8082}
          />
          <View style={styles.View_I2248_62_1136_8083}>
            <View style={styles.View_I2248_62_1136_8084}>
              <Text style={styles.Text_I2248_62_1136_8084}>Travel</Text>
            </View>
            <View style={styles.View_I2248_62_1136_8085}>
              <Text style={styles.Text_I2248_62_1136_8085}>$566</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2248_95}>
          <Text style={styles.Text_2248_95}>Savings</Text>
        </View>
      </View>
      <View style={styles.View_2248_96}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3246/8e50/6ad88428760505466e5529483ff4ae49"
          }}
          style={styles.ImageBackground_2248_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eace/49dd/276938e90a68901b98a2e13af85917af"
          }}
          style={styles.ImageBackground_2248_98}
        />
      </View>
      <View style={styles.View_2249_8}>
        <View style={styles.View_2248_40}>
          <View style={styles.View_I2248_40_2733_26671} />
        </View>
        <View style={styles.View_2248_64}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d7/321e/18802b306482e4885f7528736e31cfa1"
            }}
            style={styles.ImageBackground_I2248_64_1178_88}
          />
          <View style={styles.View_I2248_64_1178_95}>
            <View style={styles.View_I2248_64_1178_96}>
              <Text style={styles.Text_I2248_64_1178_96}>Sales</Text>
            </View>
            <View style={styles.View_I2248_64_1178_97}>
              <Text style={styles.Text_I2248_64_1178_97}>3,667</Text>
            </View>
            <View style={styles.View_I2248_64_1178_98}>
              <Text style={styles.Text_I2248_64_1178_98}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2248_64_1178_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22e1/88b0/6f445449c46e115aa30325731e6f1f04"
              }}
              style={styles.ImageBackground_I2248_64_1178_99_890_80}
            />
          </View>
        </View>
        <View style={styles.View_2248_99}>
          <Text style={styles.Text_2248_99}>Emergency Fund</Text>
        </View>
      </View>
      <View style={styles.View_2249_9}>
        <View style={styles.View_2249_10}>
          <View style={styles.View_I2249_10_2733_26671} />
        </View>
        <View style={styles.View_2249_11}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/cb37/28ed25c018d84487131c0d4add8dea93"
            }}
            style={styles.ImageBackground_I2249_11_1178_88}
          />
          <View style={styles.View_I2249_11_1178_95}>
            <View style={styles.View_I2249_11_1178_96}>
              <Text style={styles.Text_I2249_11_1178_96}>Sales</Text>
            </View>
            <View style={styles.View_I2249_11_1178_97}>
              <Text style={styles.Text_I2249_11_1178_97}>3,667</Text>
            </View>
            <View style={styles.View_I2249_11_1178_98}>
              <Text style={styles.Text_I2249_11_1178_98}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_11_1178_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44fa/2771/34724dad2c1179733d839a7cff047cd2"
              }}
              style={styles.ImageBackground_I2249_11_1178_99_890_80}
            />
          </View>
        </View>
        <View style={styles.View_2249_12}>
          <Text style={styles.Text_2249_12}>Expense Tracker</Text>
        </View>
      </View>
      <View style={styles.View_2248_101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490e/6bcd/e9a4fceb4369b486a048e4ead7a3798f"
          }}
          style={styles.ImageBackground_I2248_101_1198_539}
        />
      </View>
      <View style={styles.View_2249_55}>
        <View style={styles.View_I2249_55_825_4368}>
          <View style={styles.View_I2249_55_825_4368_527_355}>
            <View style={styles.View_I2249_55_825_4368_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_55_825_4369}>
          <Text style={styles.Text_I2249_55_825_4369}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_55_825_4370}>
          <Text style={styles.Text_I2249_55_825_4370}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_55_825_4371}>
          <Text style={styles.Text_I2249_55_825_4371}>Debit</Text>
        </View>
        <View style={styles.View_I2249_55_825_4372}>
          <View style={styles.View_I2249_55_825_4373}>
            <View style={styles.View_I2249_55_825_4373_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_55_825_4373_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4b7/916f/b4170f01a6d0337295d0093f36676404"
            }}
            style={styles.ImageBackground_I2249_55_825_4374}
          />
        </View>
        <View style={styles.View_I2249_55_825_4375}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55b2/9d25/1575accc4b477d46a21da0b1390959b3"
            }}
            style={styles.ImageBackground_I2249_55_825_4375_611_341}
          />
        </View>
      </View>
      <View style={styles.View_2249_202}>
        <View style={styles.View_I2249_202_825_4386}>
          <View style={styles.View_I2249_202_825_4386_527_355}>
            <View style={styles.View_I2249_202_825_4386_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_202_825_4387}>
          <Text style={styles.Text_I2249_202_825_4387}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_202_825_4388}>
          <Text style={styles.Text_I2249_202_825_4388}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_202_825_4389}>
          <Text style={styles.Text_I2249_202_825_4389}>Debit</Text>
        </View>
        <View style={styles.View_I2249_202_825_4390}>
          <View style={styles.View_I2249_202_825_4391}>
            <View style={styles.View_I2249_202_825_4391_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_202_825_4391_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddca/c708/1b5c9fcfcc2b1d3bfae16587cbfadc05"
            }}
            style={styles.ImageBackground_I2249_202_825_4392}
          />
        </View>
        <View style={styles.View_I2249_202_825_4393}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f1/d8ed/e6541c13fe148ff8a3ab67d85bd24020"
            }}
            style={styles.ImageBackground_I2249_202_825_4393_611_332}
          />
        </View>
      </View>
      <View style={styles.View_2249_319}>
        <View style={styles.View_I2249_319_825_4377}>
          <View style={styles.View_I2249_319_825_4377_527_355}>
            <View style={styles.View_I2249_319_825_4377_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_319_825_4378}>
          <Text style={styles.Text_I2249_319_825_4378}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_319_825_4379}>
          <Text style={styles.Text_I2249_319_825_4379}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_319_825_4380}>
          <Text style={styles.Text_I2249_319_825_4380}>Credit</Text>
        </View>
        <View style={styles.View_I2249_319_825_4381}>
          <View style={styles.View_I2249_319_825_4382}>
            <View style={styles.View_I2249_319_825_4382_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_319_825_4382_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2812/5489/23ea68c47b63543f6a070454541bbcce"
            }}
            style={styles.ImageBackground_I2249_319_825_4383}
          />
        </View>
        <View style={styles.View_I2249_319_825_4384}>
          <View style={styles.View_I2249_319_825_4384_611_301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00f/5fb2/6b866c22dc94768605a6c8884918cd46"
              }}
              style={styles.ImageBackground_I2249_319_825_4384_611_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f907/a585/a9b56f0c165b1d4da5e567266d6c3e20"
              }}
              style={styles.ImageBackground_I2249_319_825_4384_611_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4845/2930/431cf182e3aed0a38376bb16e7b553c6"
              }}
              style={styles.ImageBackground_I2249_319_825_4384_611_308}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2248_34: {
    width: wp("48.125%"),
    minWidth: wp("48.125%"),
    height: hp("66.93989071038251%"),
    minHeight: hp("66.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_34_2733_26671: {
    flexGrow: 1,
    width: wp("48.125%"),
    height: hp("66.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_35: {
    width: wp("7.760416666666667%"),
    minWidth: wp("7.760416666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.229166666666667%"),
    top: hp("30.05464480874317%")
  },
  Text_2248_35: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_56: {
    width: wp("14.270833333333332%"),
    minWidth: wp("14.270833333333332%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.708333333333336%"),
    top: hp("24.863387978142075%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2248_57: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2248_58: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2248_58_1004_5090: {
    flexGrow: 1,
    width: wp("3.75%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2248_58_1004_5092: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0%")
  },
  Text_I2248_58_1004_5092: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I2248_58_1004_5093: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666643%"),
    top: hp("6.284153005464482%")
  },
  View_2248_59: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333329%"),
    top: hp("1.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2248_60: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2248_60_1004_5416: {
    flexGrow: 1,
    width: wp("4.375%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2248_60_1004_5418: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("0%")
  },
  Text_I2248_60_1004_5418: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_60_1171_10944: {
    width: wp("0.4166666666666667%"),
    minWidth: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9791666666666643%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_2248_61: {
    width: wp("48.125%"),
    height: hp("46.85792349726776%"),
    top: hp("43.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_2249_5: {
    width: wp("23.072916666666668%"),
    minWidth: wp("23.072916666666668%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6145833333333335%"),
    top: hp("95.3551912568306%")
  },
  View_2248_36: {
    width: wp("23.072916666666668%"),
    minWidth: wp("23.072916666666668%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_36_2733_26671: {
    flexGrow: 1,
    width: wp("23.072916666666668%"),
    height: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_37: {
    width: wp("8.229166666666666%"),
    minWidth: wp("8.229166666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8645833333333335%"),
    top: hp("5.4644808743169335%")
  },
  Text_2248_37: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_63: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999996%"),
    top: hp("15.437158469945373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_63_1177_115: {
    flexGrow: 1,
    width: wp("4.010416666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.9375%"),
    top: hp("2.45901639344261%")
  },
  View_I2248_63_1177_116: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092895989%")
  },
  View_I2248_63_1177_117: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333333304%")
  },
  Text_I2248_63_1177_117: {
    color: "rgba(242, 242, 148, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_63_1177_118: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2248_63_1177_118: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2248_63_1177_119: {
    width: wp("3.3854166666666665%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999999%")
  },
  Text_I2248_63_1177_119: {
    color: "rgba(242, 242, 148, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2248_63_1177_120: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999999%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_63_1177_120_890_85: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573576609293738%"),
    top: hp("0.09365394467211274%")
  },
  View_2249_31: {
    width: wp("23.072916666666668%"),
    minWidth: wp("23.072916666666668%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.989583333333336%"),
    top: hp("59.699453551912576%")
  },
  View_2249_32: {
    width: wp("23.072916666666668%"),
    minWidth: wp("23.072916666666668%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_32_2733_26671: {
    flexGrow: 1,
    width: wp("23.072916666666668%"),
    height: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2249_33: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.464480874316926%")
  },
  Text_2249_33: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_34: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("15.437158469945338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_34_1177_115: {
    flexGrow: 1,
    width: wp("4.010416666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.937499999999993%"),
    top: hp("2.4590163934426243%")
  },
  View_I2249_34_1177_116: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%")
  },
  View_I2249_34_1177_117: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%")
  },
  Text_I2249_34_1177_117: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_34_1177_118: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_34_1177_118: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_34_1177_119: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999993%")
  },
  Text_I2249_34_1177_119: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_34_1177_120: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999993%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_34_1177_120_890_85: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573735555013258%"),
    top: hp("0.09365394467214117%")
  },
  View_2248_66: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)"
  },
  View_2248_67: {
    width: wp("9.252593517303467%"),
    top: hp("9.125256147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.558659871419271%")
  },
  Text_2248_67: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 21.157024383544922,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5449379682540894,
    textTransform: "none"
  },
  View_2248_68: {
    width: wp("3.1504229704538984%"),
    minWidth: wp("3.1504229704538984%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.147540983606557%")
  },
  View_2248_69: {
    width: wp("3.1504229704538984%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2248_70: {
    width: wp("2.8994969526926675%"),
    height: hp("6.406391122953488%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2248_71: {
    width: wp("2.8598030408223467%"),
    height: hp("4.530399093211023%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2248_73: {
    width: wp("2.900250752766927%"),
    height: hp("6.406790311219263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25017348428567265%")
  },
  ImageBackground_2248_74: {
    width: wp("2.655259370803833%"),
    height: hp("4.526472873375064%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0023559480905532837%")
  },
  ImageBackground_2248_76: {
    width: wp("2.6555482546488443%"),
    height: hp("4.526473915642076%"),
    top: hp("1.8802830430327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49238522847493504%")
  },
  ImageBackground_2248_78: {
    width: wp("2.414270043373108%"),
    height: hp("3.6314323300220925%"),
    top: hp("5.001013917349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28659013410409306%")
  },
  ImageBackground_2248_80: {
    width: wp("2.388899326324463%"),
    height: hp("2.926452563760059%"),
    top: hp("0.5213669740437163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4748888810475669%")
  },
  ImageBackground_2248_82: {
    width: wp("2.898549437522888%"),
    height: hp("4.008704847325393%"),
    top: hp("5.144296448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2248_84: {
    width: wp("2.8017258644104004%"),
    height: hp("2.8823367884901705%"),
    top: hp("0.0005336407103824214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3253626823425293%")
  },
  View_2248_86: {
    width: wp("48.125%"),
    minWidth: wp("48.125%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.937500000000004%"),
    top: hp("6.284153005464481%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_I2248_86_1045_6899: {
    flexGrow: 1,
    width: wp("2.96875%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.912568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_86_1045_6901: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2248_86_1045_6901: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2248_86_1045_6902: {
    flexGrow: 1,
    width: wp("3.75%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371584774%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_86_1045_6903: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  ImageBackground_2248_87: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.5625%")
  },
  View_2248_88: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.78125%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_88_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0.5464480874316928%")
  },
  View_I2248_88_103_656: {
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
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
  View_I2248_88_103_645: {
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2248_88_103_645_2209_123: {
    flexGrow: 1,
    width: wp("3.310546875%"),
    height: hp("12.999487704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4052734374999858%"),
    top: hp("-3.9446721311475406%"),
    resizeMode: "cover"
  },
  View_2249_6: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("66.93989071038251%"),
    minHeight: hp("66.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.3125%"),
    top: hp("95.3551912568306%")
  },
  View_2248_41: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("66.93989071038251%"),
    minHeight: hp("66.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_41_2733_26671: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("66.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_55: {
    width: wp("17.771989504496258%"),
    minWidth: wp("17.771989504496258%"),
    height: hp("45.49179910962047%"),
    minHeight: hp("45.49179910962047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%"),
    top: hp("14.890710382513674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_55_1033_6175: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6175: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6176: {
    flexGrow: 1,
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2248_55_1033_6177: {
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I2248_55_1033_6178: {
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2248_55_1033_6179: {
    width: wp("7.611308892567953%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2248_55_1033_6179: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_I2248_55_1033_6180: {
    width: wp("7.611308892567953%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.785970052083343%")
  },
  Text_I2248_55_1033_6180: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2248_55_1033_6181: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6181: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6182: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6182: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6183: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6183: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6184: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6184: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6185: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6185: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6186: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6186: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6187: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("12.215302681010925%")
  },
  Text_I2248_55_1033_6187: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6188: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6188: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6189: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6189: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6190: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6190: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6191: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6191: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6192: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6192: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6193: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6193: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6194: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("18.533608691939904%")
  },
  Text_I2248_55_1033_6194: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6195: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6195: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6196: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6196: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6197: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6197: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6198: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6198: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6199: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6199: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6200: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6200: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6201: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("24.851914702868854%")
  },
  Text_I2248_55_1033_6201: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6202: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6202: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6203: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6203: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6204: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6204: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6205: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6205: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6206: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6206: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6207: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6207: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6208: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("31.170220713797804%")
  },
  Text_I2248_55_1033_6208: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6209: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6209: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6210: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6210: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6211: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6211: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6212: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6212: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6213: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6213: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6214: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6214: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6215: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("37.48852672472678%")
  },
  Text_I2248_55_1033_6215: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6216: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6216: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6217: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300326029459683%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6217: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6218: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460071563720703%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6218: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6219: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6219: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6220: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920136769612625%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6220: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6221: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650169372558594%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6221: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_55_1033_6222: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("43.80683273565573%")
  },
  Text_I2248_55_1033_6222: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2248_90: {
    width: wp("7.604166666666666%"),
    minWidth: wp("7.604166666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.4644808743169335%")
  },
  Text_2248_90: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_7: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("67.21311475409836%"),
    minHeight: hp("67.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("95.3551912568306%")
  },
  View_2248_39: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("67.21311475409836%"),
    minHeight: hp("67.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_39_2733_26671: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("67.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_65: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("18.71584699453554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_65_1136_7123: {
    flexGrow: 1,
    width: wp("6.101379786590163e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7124: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4029579162597656%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7125: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333329%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7126: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173791249593101%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7127: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.576749165852867%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7128: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.804300944010414%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7129: {
    flexGrow: 1,
    width: wp("4.507736169519679e-7%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.031840006510414%"),
    top: hp("0%")
  },
  ImageBackground_I2248_65_1136_7130: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("31.619473233249018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.992475665983591%")
  },
  ImageBackground_I2248_65_1136_7138: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("24.59292385747524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.01918971994536%")
  },
  ImageBackground_I2248_65_1136_7146: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("14.23800942676315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.373954064207624%")
  },
  View_2248_89: {
    width: wp("14.583333333333334%"),
    minWidth: wp("14.583333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2395833333333357%"),
    top: hp("59.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_89_1140_18: {
    flexGrow: 1,
    width: wp("2.96875%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_89_1140_18_547_570: {
    flexGrow: 1,
    width: wp("2.96875%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_89_1140_18_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%")
  },
  View_I2248_89_1140_18_547_570_331_1615: {
    flexGrow: 1,
    width: wp("1.6145833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2014643351236955%"),
    top: hp("0%")
  },
  Text_I2248_89_1140_18_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_89_1140_19: {
    flexGrow: 1,
    width: wp("3.0208333333333335%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.46875%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_89_1140_19_547_570: {
    flexGrow: 1,
    width: wp("3.0208333333333335%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_89_1140_19_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%")
  },
  View_I2248_89_1140_19_547_570_331_1615: {
    flexGrow: 1,
    width: wp("1.7708333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2014643351236955%"),
    top: hp("0%")
  },
  Text_I2248_89_1140_19_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_89_1140_20: {
    flexGrow: 1,
    width: wp("3.5937499999999996%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.989583333333329%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_89_1140_20_547_570: {
    flexGrow: 1,
    width: wp("3.5937499999999996%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_89_1140_20_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%")
  },
  View_I2248_89_1140_20_547_570_331_1615: {
    flexGrow: 1,
    width: wp("2.2395833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2014643351236955%"),
    top: hp("0%")
  },
  Text_I2248_89_1140_20_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2248_93: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333286%"),
    top: hp("5.4644808743169335%")
  },
  Text_2248_93: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_94: {
    width: wp("18.4375%"),
    minWidth: wp("18.4375%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_94_1022_48: {
    flexGrow: 1,
    width: wp("18.4375%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I2248_94_1022_49: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.35416666666667%"),
    top: hp("2.1857923497267677%")
  },
  View_I2248_94_1022_50: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%"),
    top: hp("2.1857923497267677%")
  },
  Text_I2248_94_1022_50: {
    color: "rgba(239, 240, 246, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_30: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("66.66666666666666%"),
    minHeight: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.3125%"),
    top: hp("24.863387978142075%")
  },
  View_2248_38: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("66.66666666666666%"),
    minHeight: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_38_2733_26671: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_62: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("53.551912568306015%"),
    minHeight: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    top: hp("12.021857923497269%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_62_1136_8079: {
    flexGrow: 1,
    width: wp("16.63059075673421%"),
    height: hp("43.621221657007766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.893030802408859%"),
    top: hp("4.965259989754095%")
  },
  ImageBackground_I2248_62_1136_8080: {
    flexGrow: 1,
    width: wp("14.477270444234211%"),
    height: hp("37.973168378319244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9696973164876255%"),
    top: hp("7.789286629098363%")
  },
  ImageBackground_I2248_62_1136_8081: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2248_62_1136_8082: {
    flexGrow: 1,
    width: wp("16.828281084696453%"),
    height: hp("44.13975366477758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7941919962565152%"),
    top: hp("4.7059106045081975%")
  },
  View_I2248_62_1136_8083: {
    flexGrow: 1,
    width: wp("3.8977269331614175%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.290405273437514%"),
    top: hp("20.94833290642076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_62_1136_8084: {
    width: wp("3.28125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30824025472004735%")
  },
  Text_I2248_62_1136_8084: {
    color: "rgba(98, 234, 161, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2248_62_1136_8085: {
    width: wp("3.4375000000000004%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23011525472004735%")
  },
  Text_I2248_62_1136_8085: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_95: {
    width: wp("4.479166666666667%"),
    minWidth: wp("4.479166666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.464480874316941%")
  },
  Text_2248_95: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_96: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.23958333333334%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_2248_97: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("0.6830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2248_98: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666572%"),
    top: hp("0%")
  },
  View_2249_8: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.937500000000004%"),
    top: hp("95.3551912568306%")
  },
  View_2248_40: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2248_40_2733_26671: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2248_64: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999964%"),
    top: hp("15.027322404371589%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_64_1178_88: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.885416666666671%"),
    top: hp("-0.1366120218579141%")
  },
  View_I2248_64_1178_95: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  View_I2248_64_1178_96: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0520833333333357%")
  },
  Text_I2248_64_1178_96: {
    color: "rgba(242, 242, 148, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2248_64_1178_97: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2248_64_1178_97: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2248_64_1178_98: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%")
  },
  Text_I2248_64_1178_98: {
    color: "rgba(242, 242, 148, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2248_64_1178_99: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_64_1178_99_890_80: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573735555012547%"),
    top: hp("0.09365394467212695%")
  },
  View_2248_99: {
    width: wp("9.427083333333334%"),
    minWidth: wp("9.427083333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6562499999999964%"),
    top: hp("4.098360655737707%")
  },
  Text_2248_99: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_9: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("24.59016393442623%")
  },
  View_2249_10: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_10_2733_26671: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_2249_11: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("15.027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_11_1178_88: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.885416666666671%"),
    top: hp("-0.1366120218579212%")
  },
  View_I2249_11_1178_95: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%")
  },
  View_I2249_11_1178_96: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%")
  },
  Text_I2249_11_1178_96: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_11_1178_97: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_11_1178_97: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_11_1178_98: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562500000000007%")
  },
  Text_I2249_11_1178_98: {
    color: "rgba(76, 255, 166, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_11_1178_99: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562500000000007%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_11_1178_99_890_80: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573099772134469%"),
    top: hp("0.09365394467212695%")
  },
  View_2249_12: {
    width: wp("9.21875%"),
    minWidth: wp("9.21875%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("4.098360655737704%")
  },
  Text_2249_12: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2248_101: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.41666666666667%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2248_101_1198_539: {
    flexGrow: 1,
    width: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2249_55: {
    width: wp("14.869818687438965%"),
    minWidth: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    minHeight: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9791666666666665%"),
    top: hp("130.05464480874315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_55_825_4368: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_55_825_4368_527_355: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_55_825_4368_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_55_825_4369: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6112419764200845%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_55_825_4369: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_55_825_4370: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.124259869257609%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_55_825_4370: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_55_825_4371: {
    flexGrow: 1,
    width: wp("3.802083333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.921891848246258%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_55_825_4371: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_55_825_4372: {
    flexGrow: 1,
    width: wp("5.523075660069784%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.673371712366741%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_55_825_4373: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1863900025685616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_55_825_4373_611_153: {
    flexGrow: 1,
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2.1030173301696777,
    borderTopLeftRadius: 5.608046054840088,
    borderTopRightRadius: 5.608046054840088,
    borderBottomLeftRadius: 5.608046054840088,
    borderBottomRightRadius: 5.608046054840088
  },
  ImageBackground_I2249_55_825_4373_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2920858065287284%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_55_825_4374: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_55_825_4375: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9559169411659241%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_55_825_4375_611_341: {
    flexGrow: 1,
    width: wp("4.87605094909668%"),
    height: hp("4.201862720843873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9834051132202148%"),
    top: hp("4.352907274590166%")
  },
  View_2249_202: {
    width: wp("14.869818687438965%"),
    minWidth: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    minHeight: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.177083333333332%"),
    top: hp("130.05464480874315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_202_825_4386: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_202_825_4386_527_355: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_202_825_4386_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    opacity: 0.6000000238418579,
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_202_825_4387: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.611241976420086%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_202_825_4387: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_202_825_4388: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.12426026662191%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_202_825_4388: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_202_825_4389: {
    flexGrow: 1,
    width: wp("3.802083333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.921891848246254%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_202_825_4389: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_202_825_4390: {
    flexGrow: 1,
    width: wp("5.523075660069784%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.673371315002441%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_202_825_4391: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.186389605204262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_202_825_4391_611_153: {
    flexGrow: 1,
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2.1030173301696777,
    borderTopLeftRadius: 5.608046054840088,
    borderTopRightRadius: 5.608046054840088,
    borderBottomLeftRadius: 5.608046054840088,
    borderBottomRightRadius: 5.608046054840088
  },
  ImageBackground_I2249_202_825_4391_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2920850118001326%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_202_825_4392: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_202_825_4393: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9559170405069999%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_202_825_4393_611_332: {
    flexGrow: 1,
    width: wp("5.774817864100138%"),
    height: hp("3.8992709800845287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.597071647644043%"),
    top: hp("4.567697660519116%")
  },
  View_2249_319: {
    width: wp("14.869818687438965%"),
    minWidth: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    minHeight: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.479166666666664%"),
    top: hp("130.05464480874315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_319_825_4377: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_319_825_4377_527_355: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_319_825_4377_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    opacity: 0.6000000238418579,
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_319_825_4378: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6112403869628906%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_319_825_4378: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_319_825_4379: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1242586771647183%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_319_825_4379: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_319_825_4380: {
    flexGrow: 1,
    width: wp("4.427083333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.28461329142253%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_319_825_4380: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_319_825_4381: {
    flexGrow: 1,
    width: wp("5.523075660069784%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.67337290445964%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_319_825_4382: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.186388015747063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_319_825_4382_611_153: {
    flexGrow: 1,
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2.1030173301696777,
    borderTopLeftRadius: 5.608046054840088,
    borderTopRightRadius: 5.608046054840088,
    borderBottomLeftRadius: 5.608046054840088,
    borderBottomRightRadius: 5.608046054840088
  },
  ImageBackground_I2249_319_825_4382_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29208819071452297%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_319_825_4383: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_319_825_4384: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9559154510498047%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_319_825_4384_611_301: {
    flexGrow: 1,
    width: wp("4.580637613932292%"),
    height: hp("7.201025394794068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2292639414469448%"),
    top: hp("2.7028901980874025%")
  },
  ImageBackground_I2249_319_825_4384_611_302: {
    width: wp("4.580637613932292%"),
    height: hp("7.200965464440852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2249_319_825_4384_611_305: {
    width: wp("2.2903164227803545%"),
    height: hp("7.20090605522114%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.290309270222984%")
  },
  ImageBackground_I2249_319_825_4384_611_308: {
    width: wp("0.9761858979860942%"),
    height: hp("5.48068030935819%"),
    top: hp("0.8602288251366303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8022282918294223%")
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
