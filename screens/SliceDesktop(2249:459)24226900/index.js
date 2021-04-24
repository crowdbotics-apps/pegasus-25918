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
      <View style={styles.View_2249_460}>
        <View style={styles.View_I2249_460_2733_26795} />
      </View>
      <View style={styles.View_2249_461}>
        <Text style={styles.Text_2249_461}>Total Balance</Text>
      </View>
      <View style={styles.View_2249_462}>
        <View style={styles.View_2249_463}>
          <View style={styles.View_2249_464}>
            <View style={styles.View_I2249_464_1004_5090}>
              <View style={styles.View_I2249_464_1004_5092}>
                <Text style={styles.Text_I2249_464_1004_5092}>Income</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
              }}
              style={styles.ImageBackground_I2249_464_1004_5093}
            />
          </View>
        </View>
        <View style={styles.View_2249_465}>
          <View style={styles.View_2249_466}>
            <View style={styles.View_I2249_466_1004_5416}>
              <View style={styles.View_I2249_466_1004_5418}>
                <Text style={styles.Text_I2249_466_1004_5418}>Expenses</Text>
              </View>
              <View
                source={{ uri: "null" }}
                style={styles.View_I2249_466_1171_10944}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdab/e1fe/2577f77ce167d65693d79ac9dc8ed269"
        }}
        style={styles.ImageBackground_2249_467}
      />
      <View style={styles.View_2249_468}>
        <View style={styles.View_2249_469}>
          <View style={styles.View_I2249_469_2733_26795} />
        </View>
        <View style={styles.View_2249_470}>
          <Text style={styles.Text_2249_470}>Vacation Fund</Text>
        </View>
        <View style={styles.View_2249_471}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f5b/195b/d344e4550768a2a573791897517f82e4"
            }}
            style={styles.ImageBackground_I2249_471_1177_115}
          />
          <View style={styles.View_I2249_471_1177_116}>
            <View style={styles.View_I2249_471_1177_117}>
              <Text style={styles.Text_I2249_471_1177_117}>Sales</Text>
            </View>
            <View style={styles.View_I2249_471_1177_118}>
              <Text style={styles.Text_I2249_471_1177_118}>3,667</Text>
            </View>
            <View style={styles.View_I2249_471_1177_119}>
              <Text style={styles.Text_I2249_471_1177_119}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_471_1177_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/923b/3875/e4d00377eacd91ab377a6398d549901c"
              }}
              style={styles.ImageBackground_I2249_471_1177_120_890_85}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2249_472}>
        <View style={styles.View_2249_473}>
          <View style={styles.View_I2249_473_2733_26795} />
        </View>
        <View style={styles.View_2249_474}>
          <Text style={styles.Text_2249_474}>Travel Credit</Text>
        </View>
        <View style={styles.View_2249_475}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c4/2474/e4eadeda25aff0097cd35a755127d21e"
            }}
            style={styles.ImageBackground_I2249_475_1177_115}
          />
          <View style={styles.View_I2249_475_1177_116}>
            <View style={styles.View_I2249_475_1177_117}>
              <Text style={styles.Text_I2249_475_1177_117}>Sales</Text>
            </View>
            <View style={styles.View_I2249_475_1177_118}>
              <Text style={styles.Text_I2249_475_1177_118}>3,667</Text>
            </View>
            <View style={styles.View_I2249_475_1177_119}>
              <Text style={styles.Text_I2249_475_1177_119}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_475_1177_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b383/6a1c/5a65dc613dbc0327f91a9a43765e516e"
              }}
              style={styles.ImageBackground_I2249_475_1177_120_890_85}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2249_476} />
      <View style={styles.View_2249_477}>
        <Text style={styles.Text_2249_477}>Slice Bank</Text>
      </View>
      <View style={styles.View_2249_478}>
        <View style={styles.View_2249_479}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb72/bfc9/ac4e6e7a741a6a52816b8db5b55ab4cc"
            }}
            style={styles.ImageBackground_2249_480}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd2/9ccb/108b64d24b44a2983c69bc1116515699"
            }}
            style={styles.ImageBackground_2249_481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e07/ec50/02e0d62c835041c7af253ee1d67512a2"
            }}
            style={styles.ImageBackground_2249_483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c0/db9e/b8d01e850c57a74cfd65125f81a7487b"
            }}
            style={styles.ImageBackground_2249_484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1588/fe94/b239c21bde960158be9d101f8b1c1ee7"
            }}
            style={styles.ImageBackground_2249_486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e42d/40e7/e91b207702ff88e9864c16b8f5d849bf"
            }}
            style={styles.ImageBackground_2249_488}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa74/68fd/c35c8d0435615eba47283be96d9bb591"
            }}
            style={styles.ImageBackground_2249_490}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6915/67e4/e79b6e5a9031ec36d49c697a28c20d04"
            }}
            style={styles.ImageBackground_2249_492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a8/120b/96878a6baeccc1790f5004ddd1e1bc9a"
            }}
            style={styles.ImageBackground_2249_494}
          />
        </View>
      </View>
      <View style={styles.View_2249_496}>
        <View style={styles.View_I2249_496_1045_6899}>
          <View style={styles.View_I2249_496_1045_6901}>
            <Text style={styles.Text_I2249_496_1045_6901}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I2249_496_1045_6902}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4470/030c/30ab3efce778506b3d6312b7138f5cfc"
            }}
            style={styles.ImageBackground_I2249_496_1045_6903}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df2/5098/58722ea5e9f04b5c9a9040180d3c992a"
        }}
        style={styles.ImageBackground_2249_497}
      />
      <View style={styles.View_2249_498}>
        <View style={styles.View_I2249_498_103_657}>
          <View style={styles.View_I2249_498_103_656} />
          <View style={styles.View_I2249_498_103_645}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2318/5023/65b272294744d9eba53bfe1ecf1b5d52"
              }}
              style={styles.ImageBackground_I2249_498_103_645_2209_123}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2249_499}>
        <View style={styles.View_2249_500}>
          <View style={styles.View_I2249_500_2733_26795} />
        </View>
        <View style={styles.View_2249_501}>
          <View style={styles.View_I2249_501_1033_6175}>
            <Text style={styles.Text_I2249_501_1033_6175}>23</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6176}>
            <View style={styles.View_I2249_501_1033_6177} />
            <View style={styles.View_I2249_501_1033_6178}>
              <View style={styles.View_I2249_501_1033_6179}>
                <Text style={styles.Text_I2249_501_1033_6179}>August</Text>
              </View>
              <View style={styles.View_I2249_501_1033_6180}>
                <Text style={styles.Text_I2249_501_1033_6180}>2049</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2249_501_1033_6181}>
            <Text style={styles.Text_I2249_501_1033_6181}>Mo</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6182}>
            <Text style={styles.Text_I2249_501_1033_6182}>Tu</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6183}>
            <Text style={styles.Text_I2249_501_1033_6183}>We</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6184}>
            <Text style={styles.Text_I2249_501_1033_6184}>Th</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6185}>
            <Text style={styles.Text_I2249_501_1033_6185}>Fr</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6186}>
            <Text style={styles.Text_I2249_501_1033_6186}>Sa</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6187}>
            <Text style={styles.Text_I2249_501_1033_6187}>Su</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6188}>
            <Text style={styles.Text_I2249_501_1033_6188}>31</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6189}>
            <Text style={styles.Text_I2249_501_1033_6189}>1</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6190}>
            <Text style={styles.Text_I2249_501_1033_6190}>2</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6191}>
            <Text style={styles.Text_I2249_501_1033_6191}>3</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6192}>
            <Text style={styles.Text_I2249_501_1033_6192}>4</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6193}>
            <Text style={styles.Text_I2249_501_1033_6193}>5</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6194}>
            <Text style={styles.Text_I2249_501_1033_6194}>6</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6195}>
            <Text style={styles.Text_I2249_501_1033_6195}>7</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6196}>
            <Text style={styles.Text_I2249_501_1033_6196}>8</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6197}>
            <Text style={styles.Text_I2249_501_1033_6197}>9</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6198}>
            <Text style={styles.Text_I2249_501_1033_6198}>10</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6199}>
            <Text style={styles.Text_I2249_501_1033_6199}>11</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6200}>
            <Text style={styles.Text_I2249_501_1033_6200}>12</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6201}>
            <Text style={styles.Text_I2249_501_1033_6201}>13</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6202}>
            <Text style={styles.Text_I2249_501_1033_6202}>14</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6203}>
            <Text style={styles.Text_I2249_501_1033_6203}>15</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6204}>
            <Text style={styles.Text_I2249_501_1033_6204}>16</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6205}>
            <Text style={styles.Text_I2249_501_1033_6205}>17</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6206}>
            <Text style={styles.Text_I2249_501_1033_6206}>18</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6207}>
            <Text style={styles.Text_I2249_501_1033_6207}>19</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6208}>
            <Text style={styles.Text_I2249_501_1033_6208}>20</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6209}>
            <Text style={styles.Text_I2249_501_1033_6209}>21</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6210}>
            <Text style={styles.Text_I2249_501_1033_6210}>22</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6211}>
            <Text style={styles.Text_I2249_501_1033_6211}>23</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6212}>
            <Text style={styles.Text_I2249_501_1033_6212}>24</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6213}>
            <Text style={styles.Text_I2249_501_1033_6213}>25</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6214}>
            <Text style={styles.Text_I2249_501_1033_6214}>26</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6215}>
            <Text style={styles.Text_I2249_501_1033_6215}>27</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6216}>
            <Text style={styles.Text_I2249_501_1033_6216}>28</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6217}>
            <Text style={styles.Text_I2249_501_1033_6217}>29</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6218}>
            <Text style={styles.Text_I2249_501_1033_6218}>30</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6219}>
            <Text style={styles.Text_I2249_501_1033_6219}>31</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6220}>
            <Text style={styles.Text_I2249_501_1033_6220}>1</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6221}>
            <Text style={styles.Text_I2249_501_1033_6221}>2</Text>
          </View>
          <View style={styles.View_I2249_501_1033_6222}>
            <Text style={styles.Text_I2249_501_1033_6222}>3</Text>
          </View>
        </View>
        <View style={styles.View_2249_502}>
          <Text style={styles.Text_2249_502}>Pay Schedule</Text>
        </View>
      </View>
      <View style={styles.View_2249_503}>
        <View style={styles.View_2249_504}>
          <View style={styles.View_I2249_504_2733_26795} />
        </View>
        <View style={styles.View_2249_505}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7123}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7126}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee0/d67e/4ddb99ec34143b2d8ce8ba0a5ea9ea11"
            }}
            style={styles.ImageBackground_I2249_505_1136_7129}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f2/7fec/aaa6f174e4733fe0a06e0728961b4a68"
            }}
            style={styles.ImageBackground_I2249_505_1136_7130}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b97/a8ba/fed40808f338c1d13881d9eec75c62b6"
            }}
            style={styles.ImageBackground_I2249_505_1136_7138}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79d/8d32/746211289f98e82c4e1051fde6dce96b"
            }}
            style={styles.ImageBackground_I2249_505_1136_7146}
          />
        </View>
        <View style={styles.View_2249_506}>
          <View style={styles.View_I2249_506_1140_18}>
            <View style={styles.View_I2249_506_1140_18_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db94/8fbe/30292413f14e198a099dfdf194d2ff3a"
                }}
                style={
                  styles.ImageBackground_I2249_506_1140_18_547_570_331_1614
                }
              />
              <View style={styles.View_I2249_506_1140_18_547_570_331_1615}>
                <Text style={styles.Text_I2249_506_1140_18_547_570_331_1615}>
                  Rent
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2249_506_1140_19}>
            <View style={styles.View_I2249_506_1140_19_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefc/cde7/45bebebe39933c5a10d45e78272f2089"
                }}
                style={
                  styles.ImageBackground_I2249_506_1140_19_547_570_331_1614
                }
              />
              <View style={styles.View_I2249_506_1140_19_547_570_331_1615}>
                <Text style={styles.Text_I2249_506_1140_19_547_570_331_1615}>
                  Food
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2249_506_1140_20}>
            <View style={styles.View_I2249_506_1140_20_547_570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce47/a88c/c5ff892c877fa487e72225c9da4e45b1"
                }}
                style={
                  styles.ImageBackground_I2249_506_1140_20_547_570_331_1614
                }
              />
              <View style={styles.View_I2249_506_1140_20_547_570_331_1615}>
                <Text style={styles.Text_I2249_506_1140_20_547_570_331_1615}>
                  Travel
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2249_507}>
          <Text style={styles.Text_2249_507}>Expenses</Text>
        </View>
        <View style={styles.View_2249_508}>
          <View style={styles.View_I2249_508_1022_48} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2053/e865/57ffe13d65284ebb7eeaefa249f0b47a"
            }}
            style={styles.ImageBackground_I2249_508_1022_49}
          />
          <View style={styles.View_I2249_508_1022_50}>
            <Text style={styles.Text_I2249_508_1022_50}>Recent</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2249_509}>
        <View style={styles.View_2249_510}>
          <View style={styles.View_I2249_510_2733_26795} />
        </View>
        <View style={styles.View_2249_511}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1fe/f4ec/c396142b428482389725ed359f1b25a4"
            }}
            style={styles.ImageBackground_I2249_511_1136_8079}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3442/9716/99aa19e4d2247aba45b8864ddc8cebf2"
            }}
            style={styles.ImageBackground_I2249_511_1136_8080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6328/aadc/d3cb008482cc5fa63fc3652765e40dd7"
            }}
            style={styles.ImageBackground_I2249_511_1136_8081}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4e9/f076/9809042eef537844c749ae49e3780e4a"
            }}
            style={styles.ImageBackground_I2249_511_1136_8082}
          />
          <View style={styles.View_I2249_511_1136_8083}>
            <View style={styles.View_I2249_511_1136_8084}>
              <Text style={styles.Text_I2249_511_1136_8084}>Travel</Text>
            </View>
            <View style={styles.View_I2249_511_1136_8085}>
              <Text style={styles.Text_I2249_511_1136_8085}>$566</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2249_512}>
          <Text style={styles.Text_2249_512}>Savings</Text>
        </View>
      </View>
      <View style={styles.View_2249_513}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3246/8e50/6ad88428760505466e5529483ff4ae49"
          }}
          style={styles.ImageBackground_2249_514}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f87b/d6ec/533ff766bfa9e82f70e02f02bede5b07"
          }}
          style={styles.ImageBackground_2249_515}
        />
      </View>
      <View style={styles.View_2249_516}>
        <View style={styles.View_2249_517}>
          <View style={styles.View_I2249_517_2733_26795} />
        </View>
        <View style={styles.View_2249_518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6275/459e/866616efc40803b2bcdf9e0cdefb8a24"
            }}
            style={styles.ImageBackground_I2249_518_1178_88}
          />
          <View style={styles.View_I2249_518_1178_95}>
            <View style={styles.View_I2249_518_1178_96}>
              <Text style={styles.Text_I2249_518_1178_96}>Sales</Text>
            </View>
            <View style={styles.View_I2249_518_1178_97}>
              <Text style={styles.Text_I2249_518_1178_97}>3,667</Text>
            </View>
            <View style={styles.View_I2249_518_1178_98}>
              <Text style={styles.Text_I2249_518_1178_98}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_518_1178_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee29/77a6/6292209f3bc017676bce871251d5cf4e"
              }}
              style={styles.ImageBackground_I2249_518_1178_99_890_80}
            />
          </View>
        </View>
        <View style={styles.View_2249_519}>
          <Text style={styles.Text_2249_519}>Emergency Fund</Text>
        </View>
      </View>
      <View style={styles.View_2249_520}>
        <View style={styles.View_2249_521}>
          <View style={styles.View_I2249_521_2733_26795} />
        </View>
        <View style={styles.View_2249_522}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a11/e711/0c7d0418d77d32456af5e1546c8b9f93"
            }}
            style={styles.ImageBackground_I2249_522_1178_88}
          />
          <View style={styles.View_I2249_522_1178_95}>
            <View style={styles.View_I2249_522_1178_96}>
              <Text style={styles.Text_I2249_522_1178_96}>Sales</Text>
            </View>
            <View style={styles.View_I2249_522_1178_97}>
              <Text style={styles.Text_I2249_522_1178_97}>3,667</Text>
            </View>
            <View style={styles.View_I2249_522_1178_98}>
              <Text style={styles.Text_I2249_522_1178_98}>+3.47%</Text>
            </View>
          </View>
          <View style={styles.View_I2249_522_1178_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e0f/d6de/6bfd8a742772eb7c70e298f028bfdbd0"
              }}
              style={styles.ImageBackground_I2249_522_1178_99_890_80}
            />
          </View>
        </View>
        <View style={styles.View_2249_523}>
          <Text style={styles.Text_2249_523}>Expense Tracker</Text>
        </View>
      </View>
      <View style={styles.View_2249_524}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490e/6bcd/e9a4fceb4369b486a048e4ead7a3798f"
          }}
          style={styles.ImageBackground_I2249_524_1198_539}
        />
      </View>
      <View style={styles.View_2249_525}>
        <View style={styles.View_I2249_525_825_4368}>
          <View style={styles.View_I2249_525_825_4368_527_355}>
            <View style={styles.View_I2249_525_825_4368_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_525_825_4369}>
          <Text style={styles.Text_I2249_525_825_4369}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_525_825_4370}>
          <Text style={styles.Text_I2249_525_825_4370}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_525_825_4371}>
          <Text style={styles.Text_I2249_525_825_4371}>Debit</Text>
        </View>
        <View style={styles.View_I2249_525_825_4372}>
          <View style={styles.View_I2249_525_825_4373}>
            <View style={styles.View_I2249_525_825_4373_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_525_825_4373_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddca/c708/1b5c9fcfcc2b1d3bfae16587cbfadc05"
            }}
            style={styles.ImageBackground_I2249_525_825_4374}
          />
        </View>
        <View style={styles.View_I2249_525_825_4375}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a2/bb6f/0f7b16a7de51a26a6c692c92fcf2fd91"
            }}
            style={styles.ImageBackground_I2249_525_825_4375_611_341}
          />
        </View>
      </View>
      <View style={styles.View_2249_526}>
        <View style={styles.View_I2249_526_825_4386}>
          <View style={styles.View_I2249_526_825_4386_527_355}>
            <View style={styles.View_I2249_526_825_4386_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_526_825_4387}>
          <Text style={styles.Text_I2249_526_825_4387}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_526_825_4388}>
          <Text style={styles.Text_I2249_526_825_4388}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_526_825_4389}>
          <Text style={styles.Text_I2249_526_825_4389}>Debit</Text>
        </View>
        <View style={styles.View_I2249_526_825_4390}>
          <View style={styles.View_I2249_526_825_4391}>
            <View style={styles.View_I2249_526_825_4391_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_526_825_4391_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddca/c708/1b5c9fcfcc2b1d3bfae16587cbfadc05"
            }}
            style={styles.ImageBackground_I2249_526_825_4392}
          />
        </View>
        <View style={styles.View_I2249_526_825_4393}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f1/d8ed/e6541c13fe148ff8a3ab67d85bd24020"
            }}
            style={styles.ImageBackground_I2249_526_825_4393_611_332}
          />
        </View>
      </View>
      <View style={styles.View_2249_527}>
        <View style={styles.View_I2249_527_825_4377}>
          <View style={styles.View_I2249_527_825_4377_527_355}>
            <View style={styles.View_I2249_527_825_4377_527_355_4_229} />
          </View>
        </View>
        <View style={styles.View_I2249_527_825_4378}>
          <Text style={styles.Text_I2249_527_825_4378}>•••• 6789</Text>
        </View>
        <View style={styles.View_I2249_527_825_4379}>
          <Text style={styles.Text_I2249_527_825_4379}>Jane Walker</Text>
        </View>
        <View style={styles.View_I2249_527_825_4380}>
          <Text style={styles.Text_I2249_527_825_4380}>Credit</Text>
        </View>
        <View style={styles.View_I2249_527_825_4381}>
          <View style={styles.View_I2249_527_825_4382}>
            <View style={styles.View_I2249_527_825_4382_611_153} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a2/bf02/8760c1ac53a63c0955357ab6ec202de2"
              }}
              style={styles.ImageBackground_I2249_527_825_4382_611_154}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2812/5489/23ea68c47b63543f6a070454541bbcce"
            }}
            style={styles.ImageBackground_I2249_527_825_4383}
          />
        </View>
        <View style={styles.View_I2249_527_825_4384}>
          <View style={styles.View_I2249_527_825_4384_611_301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00f/5fb2/6b866c22dc94768605a6c8884918cd46"
              }}
              style={styles.ImageBackground_I2249_527_825_4384_611_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f907/a585/a9b56f0c165b1d4da5e567266d6c3e20"
              }}
              style={styles.ImageBackground_I2249_527_825_4384_611_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4845/2930/431cf182e3aed0a38376bb16e7b553c6"
              }}
              style={styles.ImageBackground_I2249_527_825_4384_611_308}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2736_26430}>
        <View style={styles.View_I2736_26430_2589_22943}>
          <Text style={styles.Text_I2736_26430_2589_22943}>9,000</Text>
        </View>
        <View style={styles.View_I2736_26430_2589_22944}>
          <Text style={styles.Text_I2736_26430_2589_22944}>8,000</Text>
        </View>
        <View style={styles.View_I2736_26430_2589_22945}>
          <Text style={styles.Text_I2736_26430_2589_22945}>7,000</Text>
        </View>
        <View style={styles.View_I2736_26430_2589_22946}>
          <Text style={styles.Text_I2736_26430_2589_22946}>6,000</Text>
        </View>
        <View style={styles.View_I2736_26430_2589_22947}>
          <Text style={styles.Text_I2736_26430_2589_22947}>5,000</Text>
        </View>
      </View>
      <View style={styles.View_2736_26449}>
        <View style={styles.View_I2736_26449_2589_23006}>
          <Text style={styles.Text_I2736_26449_2589_23006}>Mon</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23007}>
          <Text style={styles.Text_I2736_26449_2589_23007}>Tue</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23008}>
          <Text style={styles.Text_I2736_26449_2589_23008}>Wed</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23009}>
          <Text style={styles.Text_I2736_26449_2589_23009}>Thu</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23010}>
          <Text style={styles.Text_I2736_26449_2589_23010}>Fri</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23011}>
          <Text style={styles.Text_I2736_26449_2589_23011}>Sat</Text>
        </View>
        <View style={styles.View_I2736_26449_2589_23012}>
          <Text style={styles.Text_I2736_26449_2589_23012}>Sun</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2249_460: {
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
  View_I2249_460_2733_26795: {
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
  View_2249_461: {
    width: wp("7.760416666666667%"),
    minWidth: wp("7.760416666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.229166666666667%"),
    top: hp("30.05464480874317%")
  },
  Text_2249_461: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_462: {
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
  View_2249_463: {
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
  View_2249_464: {
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
  View_I2249_464_1004_5090: {
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
  View_I2249_464_1004_5092: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0%")
  },
  Text_I2249_464_1004_5092: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I2249_464_1004_5093: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666643%"),
    top: hp("6.284153005464482%")
  },
  View_2249_465: {
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
  View_2249_466: {
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
  View_I2249_466_1004_5416: {
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
  View_I2249_466_1004_5418: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("0%")
  },
  Text_I2249_466_1004_5418: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_466_1171_10944: {
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
  ImageBackground_2249_467: {
    width: wp("41.041666666666664%"),
    height: hp("38.66120218579235%"),
    top: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_2249_468: {
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
  View_2249_469: {
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
  View_I2249_469_2733_26795: {
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
  View_2249_470: {
    width: wp("8.229166666666666%"),
    minWidth: wp("8.229166666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8645833333333335%"),
    top: hp("5.4644808743169335%")
  },
  Text_2249_470: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_471: {
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
  ImageBackground_I2249_471_1177_115: {
    flexGrow: 1,
    width: wp("4.010416666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.9375%"),
    top: hp("2.45901639344261%")
  },
  View_I2249_471_1177_116: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092895989%")
  },
  View_I2249_471_1177_117: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333333304%")
  },
  Text_I2249_471_1177_117: {
    color: "rgba(82, 212, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_471_1177_118: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_471_1177_118: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_471_1177_119: {
    width: wp("3.3854166666666665%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999999%")
  },
  Text_I2249_471_1177_119: {
    color: "rgba(82, 212, 254, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_471_1177_120: {
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
  ImageBackground_I2249_471_1177_120_890_85: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573099772135535%"),
    top: hp("0.09365394467211274%")
  },
  View_2249_472: {
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
  View_2249_473: {
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
  View_I2249_473_2733_26795: {
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
  View_2249_474: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.464480874316926%")
  },
  Text_2249_474: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_475: {
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
  ImageBackground_I2249_475_1177_115: {
    flexGrow: 1,
    width: wp("4.010416666666667%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.937499999999993%"),
    top: hp("2.4590163934426243%")
  },
  View_I2249_475_1177_116: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%")
  },
  View_I2249_475_1177_117: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%")
  },
  Text_I2249_475_1177_117: {
    color: "rgba(155, 178, 253, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_475_1177_118: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_475_1177_118: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_475_1177_119: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562499999999993%")
  },
  Text_I2249_475_1177_119: {
    color: "rgba(155, 178, 253, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_475_1177_120: {
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
  ImageBackground_I2249_475_1177_120_890_85: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.035730997721358904%"),
    top: hp("0.09365394467214117%")
  },
  View_2249_476: {
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
  View_2249_477: {
    width: wp("9.252593517303467%"),
    top: hp("9.125256147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.1836598714192705%")
  },
  Text_2249_477: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 21.157024383544922,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5449379682540894,
    textTransform: "none"
  },
  View_2249_478: {
    width: wp("3.1504229704538984%"),
    minWidth: wp("3.1504229704538984%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("6.147540983606557%")
  },
  View_2249_479: {
    width: wp("3.1504229704538984%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2249_480: {
    width: wp("2.8994969526926675%"),
    height: hp("6.406391122953488%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2249_481: {
    width: wp("2.8598030408223467%"),
    height: hp("4.530399093211023%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2249_483: {
    width: wp("2.900250752766927%"),
    height: hp("6.406790311219263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25016784667968706%")
  },
  ImageBackground_2249_484: {
    width: wp("2.655259370803833%"),
    height: hp("4.526472873375064%"),
    top: hp("2.7466487363387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0023523966471352686%")
  },
  ImageBackground_2249_486: {
    width: wp("2.6555482546488443%"),
    height: hp("4.526473915642076%"),
    top: hp("1.8802830430327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49238840738932277%")
  },
  ImageBackground_2249_488: {
    width: wp("2.414270043373108%"),
    height: hp("3.6314323300220925%"),
    top: hp("5.001013917349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.286585489908854%")
  },
  ImageBackground_2249_490: {
    width: wp("2.388899326324463%"),
    height: hp("2.926452563760059%"),
    top: hp("0.5213669740437163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47489166259765625%")
  },
  ImageBackground_2249_492: {
    width: wp("2.898549437522888%"),
    height: hp("4.008704847325393%"),
    top: hp("5.144296448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2249_494: {
    width: wp("2.8017258644104004%"),
    height: hp("2.8823367884901705%"),
    top: hp("0.0005336407103824214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32536824544270804%")
  },
  View_2249_496: {
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
  View_I2249_496_1045_6899: {
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
  View_I2249_496_1045_6901: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I2249_496_1045_6901: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_496_1045_6902: {
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
  ImageBackground_I2249_496_1045_6903: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  ImageBackground_2249_497: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.5625%")
  },
  View_2249_498: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.03125%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_498_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0.5464480874316928%")
  },
  View_I2249_498_103_656: {
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
  View_I2249_498_103_645: {
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
  ImageBackground_I2249_498_103_645_2209_123: {
    flexGrow: 1,
    width: wp("3.310546875%"),
    height: hp("12.999487704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4052734375%"),
    top: hp("-3.9446721311475406%"),
    resizeMode: "cover"
  },
  View_2249_499: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.3125%"),
    top: hp("95.3551912568306%")
  },
  View_2249_500: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_500_2733_26795: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("76.50273224043715%"),
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
  View_2249_501: {
    width: wp("17.771989504496258%"),
    minWidth: wp("17.771989504496258%"),
    height: hp("45.49179910962047%"),
    minHeight: hp("45.49179910962047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_501_1033_6175: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6175: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6176: {
    flexGrow: 1,
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2249_501_1033_6177: {
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I2249_501_1033_6178: {
    width: wp("17.397278149922688%"),
    height: hp("8.986034289083845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_501_1033_6179: {
    width: wp("7.611308892567953%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_501_1033_6179: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_I2249_501_1033_6180: {
    width: wp("7.611308892567953%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.785970052083343%")
  },
  Text_I2249_501_1033_6180: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_501_1033_6181: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6181: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6182: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6182: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6183: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6183: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6184: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6184: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6185: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6185: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6186: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6186: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6187: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("12.21530268101094%")
  },
  Text_I2249_501_1033_6187: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6188: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6188: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6189: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6189: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6190: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6190: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6191: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6191: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6192: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6192: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6193: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6193: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6194: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("18.533608691939904%")
  },
  Text_I2249_501_1033_6194: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6195: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6195: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6196: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6196: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6197: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6197: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6198: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6198: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6199: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6199: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6200: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6200: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6201: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("24.851914702868854%")
  },
  Text_I2249_501_1033_6201: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6202: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6202: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6203: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6203: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6204: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6204: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6205: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6205: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6206: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6206: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6207: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6207: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6208: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("31.170220713797832%")
  },
  Text_I2249_501_1033_6208: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6209: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6209: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6210: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6210: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6211: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6211: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6212: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6212: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6213: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6213: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6214: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6214: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6215: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("37.48852672472678%")
  },
  Text_I2249_501_1033_6215: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6216: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6216: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6217: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7300262451171875%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6217: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6218: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.460077921549484%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6218: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6219: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.190104166666671%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6219: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6220: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920130411783859%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6220: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6221: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.650182088216141%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6221: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_501_1033_6222: {
    flexGrow: 1,
    width: wp("1.3917822639147441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38020833333333%"),
    top: hp("43.80683273565576%")
  },
  Text_I2249_501_1033_6222: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2249_502: {
    width: wp("7.604166666666666%"),
    minWidth: wp("7.604166666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.4644808743169335%")
  },
  Text_2249_502: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_503: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("95.3551912568306%")
  },
  View_2249_504: {
    width: wp("23.4375%"),
    minWidth: wp("23.4375%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_504_2733_26795: {
    flexGrow: 1,
    width: wp("23.4375%"),
    height: hp("76.50273224043715%"),
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
  View_2249_505: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("32.10382513661202%"),
    minHeight: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("31.420765027322417%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_505_1136_7123: {
    flexGrow: 1,
    width: wp("5.350090267105164e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7124: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4029642740885393%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7125: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333329%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7126: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173797607421875%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7127: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.576761881510414%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7128: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.804300944010414%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7129: {
    flexGrow: 1,
    width: wp("4.507735695824522e-7%"),
    height: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.031840006510414%"),
    top: hp("0%")
  },
  ImageBackground_I2249_505_1136_7130: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("27.726030610298196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.377721567622956%")
  },
  ImageBackground_I2249_505_1136_7138: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("21.564690011446594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.539137209699447%")
  },
  ImageBackground_I2249_505_1136_7146: {
    flexGrow: 1,
    width: wp("20.031843185424805%"),
    height: hp("12.484820423230447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.6190338968579%")
  },
  View_2249_506: {
    width: wp("14.583333333333334%"),
    minWidth: wp("14.583333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2395833333333357%"),
    top: hp("67.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_506_1140_18: {
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
  View_I2249_506_1140_18_547_570: {
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
  ImageBackground_I2249_506_1140_18_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%")
  },
  View_I2249_506_1140_18_547_570_331_1615: {
    flexGrow: 1,
    width: wp("1.6145833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.201477050781243%"),
    top: hp("0%")
  },
  Text_I2249_506_1140_18_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_506_1140_19: {
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
  View_I2249_506_1140_19_547_570: {
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
  ImageBackground_I2249_506_1140_19_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%")
  },
  View_I2249_506_1140_19_547_570_331_1615: {
    flexGrow: 1,
    width: wp("1.7708333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.201477050781243%"),
    top: hp("0%")
  },
  Text_I2249_506_1140_19_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_506_1140_20: {
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
  View_I2249_506_1140_20_547_570: {
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
  ImageBackground_I2249_506_1140_20_547_570_331_1614: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%")
  },
  View_I2249_506_1140_20_547_570_331_1615: {
    flexGrow: 1,
    width: wp("2.2395833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.201477050781257%"),
    top: hp("0%")
  },
  Text_I2249_506_1140_20_547_570_331_1615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2249_507: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333286%"),
    top: hp("5.4644808743169335%")
  },
  Text_2249_507: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_508: {
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
  View_I2249_508_1022_48: {
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
  ImageBackground_I2249_508_1022_49: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.35416666666667%"),
    top: hp("2.1857923497267677%")
  },
  View_I2249_508_1022_50: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%"),
    top: hp("2.1857923497267677%")
  },
  Text_I2249_508_1022_50: {
    color: "rgba(239, 240, 246, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_509: {
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
  View_2249_510: {
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
  View_I2249_510_2733_26795: {
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
  View_2249_511: {
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
  ImageBackground_I2249_511_1136_8079: {
    flexGrow: 1,
    width: wp("16.63059075673421%"),
    height: hp("43.621221657007766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.89300537109375%"),
    top: hp("4.965259989754095%")
  },
  ImageBackground_I2249_511_1136_8080: {
    flexGrow: 1,
    width: wp("14.477270444234211%"),
    height: hp("37.973168378319244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.969716389973968%"),
    top: hp("7.789286629098363%")
  },
  ImageBackground_I2249_511_1136_8081: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2249_511_1136_8082: {
    flexGrow: 1,
    width: wp("16.828281084696453%"),
    height: hp("44.13975366477758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7942047119140625%"),
    top: hp("4.7059106045081975%")
  },
  View_I2249_511_1136_8083: {
    flexGrow: 1,
    width: wp("3.4375000000000004%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.5205078125%"),
    top: hp("20.94833290642076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_511_1136_8084: {
    width: wp("3.28125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07812500000001421%")
  },
  Text_I2249_511_1136_8084: {
    color: "rgba(155, 178, 253, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_511_1136_8085: {
    width: wp("3.4375000000000004%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_511_1136_8085: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_512: {
    width: wp("4.479166666666667%"),
    minWidth: wp("4.479166666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("5.464480874316941%")
  },
  Text_2249_512: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_513: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.48958333333333%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_2249_514: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("0.6830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2249_515: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666714%"),
    top: hp("0%")
  },
  View_2249_516: {
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
  View_2249_517: {
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
  View_I2249_517_2733_26795: {
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
  View_2249_518: {
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
  ImageBackground_I2249_518_1178_88: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.885416666666671%"),
    top: hp("-0.1366120218579141%")
  },
  View_I2249_518_1178_95: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  View_I2249_518_1178_96: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0520833333333357%")
  },
  Text_I2249_518_1178_96: {
    color: "rgba(221, 89, 208, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_518_1178_97: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_518_1178_97: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_518_1178_98: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%")
  },
  Text_I2249_518_1178_98: {
    color: "rgba(221, 89, 208, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_518_1178_99: {
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
  ImageBackground_I2249_518_1178_99_890_80: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0357309977213518%"),
    top: hp("0.09365394467212695%")
  },
  View_2249_519: {
    width: wp("9.427083333333334%"),
    minWidth: wp("9.427083333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6562499999999964%"),
    top: hp("4.098360655737707%")
  },
  Text_2249_519: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_520: {
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
  View_2249_521: {
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
  View_I2249_521_2733_26795: {
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
  View_2249_522: {
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
  ImageBackground_I2249_522_1178_88: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.885416666666671%"),
    top: hp("-0.1366120218579212%")
  },
  View_I2249_522_1178_95: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%")
  },
  View_I2249_522_1178_96: {
    width: wp("1.9270833333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%")
  },
  Text_I2249_522_1178_96: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_522_1178_97: {
    width: wp("4.6875%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I2249_522_1178_97: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I2249_522_1178_98: {
    width: wp("3.3854166666666665%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.562500000000007%")
  },
  Text_I2249_522_1178_98: {
    color: "rgba(193, 156, 252, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_522_1178_99: {
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
  ImageBackground_I2249_522_1178_99_890_80: {
    flexGrow: 1,
    width: wp("1.1785091956456502%"),
    height: hp("3.0911716607099025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03573099772134469%"),
    top: hp("0.09365394467212695%")
  },
  View_2249_523: {
    width: wp("9.21875%"),
    minWidth: wp("9.21875%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("4.098360655737704%")
  },
  Text_2249_523: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2249_524: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.66666666666667%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_524_1198_539: {
    flexGrow: 1,
    width: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2249_525: {
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
  View_I2249_525_825_4368: {
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
  View_I2249_525_825_4368_527_355: {
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
  View_I2249_525_825_4368_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_525_825_4369: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6112467447916665%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_525_825_4369: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_525_825_4370: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1242650349934897%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_525_825_4370: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_525_825_4371: {
    flexGrow: 1,
    width: wp("3.802083333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.921890258789062%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_525_825_4371: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_525_825_4372: {
    flexGrow: 1,
    width: wp("5.523075660069784%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.673372904459635%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_525_825_4373: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.18639119466146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_525_825_4373_611_153: {
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
  ImageBackground_I2249_525_825_4373_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2920786539713518%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_525_825_4374: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_525_825_4375: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.955912272135417%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_525_825_4375_611_341: {
    flexGrow: 1,
    width: wp("4.876061677932739%"),
    height: hp("4.201862720843873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.983403523763021%"),
    top: hp("4.352907274590166%")
  },
  View_2249_526: {
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
  View_I2249_526_825_4386: {
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
  View_I2249_526_825_4386_527_355: {
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
  View_I2249_526_825_4386_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 89, 208, 1)",
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_526_825_4387: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.611246744791668%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_526_825_4387: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_526_825_4388: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1242523193359375%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_526_825_4388: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_526_825_4389: {
    flexGrow: 1,
    width: wp("3.802083333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.921890258789062%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_526_825_4389: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_526_825_4390: {
    flexGrow: 1,
    width: wp("5.523085196812947%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.673360188802086%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_526_825_4391: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1864166259765625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_526_825_4391_611_153: {
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
  ImageBackground_I2249_526_825_4391_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29207865397135535%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_526_825_4392: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_526_825_4393: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9559122721354179%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2249_526_825_4393_611_332: {
    flexGrow: 1,
    width: wp("5.774817864100138%"),
    height: hp("3.8992709800845287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5971018473307304%"),
    top: hp("4.567697660519116%")
  },
  View_2249_527: {
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
  View_I2249_527_825_4377: {
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
  View_I2249_527_825_4377_527_355: {
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
  View_I2249_527_825_4377_527_355_4_229: {
    flexGrow: 1,
    width: wp("14.869818687438965%"),
    height: hp("62.68307628527366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 35, 56, 1)",
    borderTopLeftRadius: 16.314315795898438,
    borderTopRightRadius: 16.314315795898438,
    borderBottomLeftRadius: 16.314315795898438,
    borderBottomRightRadius: 16.314315795898438
  },
  View_I2249_527_825_4378: {
    flexGrow: 1,
    width: wp("9.114583333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6112467447916714%"),
    top: hp("27.722634904371603%")
  },
  Text_I2249_527_825_4378: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I2249_527_825_4379: {
    flexGrow: 1,
    width: wp("9.984021186828613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1242523193359446%"),
    top: hp("38.445611338797846%")
  },
  Text_I2249_527_825_4379: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_527_825_4380: {
    flexGrow: 1,
    width: wp("4.427083333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.284606933593757%"),
    top: hp("22.844625170765056%")
  },
  Text_I2249_527_825_4380: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2249_527_825_4381: {
    flexGrow: 1,
    width: wp("5.523085196812947%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.673360188802086%"),
    top: hp("5.57174265710384%")
  },
  View_I2249_527_825_4382: {
    width: wp("2.3366858561833697%"),
    height: hp("7.661264971957181%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1864166259765625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_527_825_4382_611_153: {
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
  ImageBackground_I2249_527_825_4382_611_154: {
    flexGrow: 1,
    width: wp("1.752514441808065%"),
    height: hp("7.661264971957181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2920786539713589%"),
    top: hp("0.00026682035519343117%")
  },
  ImageBackground_I2249_527_825_4383: {
    width: wp("2.1242598692576093%"),
    height: hp("5.57182916526586%"),
    top: hp("1.1145086236338955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2249_527_825_4384: {
    flexGrow: 1,
    width: wp("6.965802510579428%"),
    height: hp("12.897145422429986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9559122721354214%"),
    top: hp("47.082052595628454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2249_527_825_4384_611_301: {
    flexGrow: 1,
    width: wp("4.580670197804769%"),
    height: hp("7.201025394794068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2292734781901018%"),
    top: hp("2.7028901980874025%")
  },
  ImageBackground_I2249_527_825_4384_611_302: {
    width: wp("4.580670197804769%"),
    height: hp("7.200965464440852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2249_527_825_4384_611_305: {
    width: wp("2.2903295358022056%"),
    height: hp("7.20090605522114%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.290318806966141%")
  },
  ImageBackground_I2249_527_825_4384_611_308: {
    width: wp("0.9762105345726014%"),
    height: hp("5.480734507242838%"),
    top: hp("0.8602288251366303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8022664388020857%")
  },
  View_2736_26430: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("42.89617486338798%"),
    minHeight: hp("42.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2736_26430_2589_22943: {
    flexGrow: 1,
    width: wp("1.9791666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("0%")
  },
  Text_I2736_26430_2589_22943: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26430_2589_22944: {
    flexGrow: 1,
    width: wp("1.9791666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("9.972677595628411%")
  },
  Text_I2736_26430_2589_22944: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26430_2589_22945: {
    flexGrow: 1,
    width: wp("1.9270833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.71875%"),
    top: hp("19.945355191256837%")
  },
  Text_I2736_26430_2589_22945: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26430_2589_22946: {
    flexGrow: 1,
    width: wp("1.9791666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("29.91803278688524%")
  },
  Text_I2736_26430_2589_22946: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26430_2589_22947: {
    flexGrow: 1,
    width: wp("1.9791666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666665%"),
    top: hp("39.89071038251367%")
  },
  Text_I2736_26430_2589_22947: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2736_26449: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333334%"),
    top: hp("78.27868852459017%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2736_26449_2589_23006: {
    flexGrow: 1,
    width: wp("1.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23006: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23007: {
    flexGrow: 1,
    width: wp("1.3020833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.100690205891926%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23007: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23008: {
    flexGrow: 1,
    width: wp("1.6145833333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.940963745117186%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23008: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23009: {
    flexGrow: 1,
    width: wp("1.3541666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.09375%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23009: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23010: {
    flexGrow: 1,
    width: wp("0.8854166666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611958821614%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23010: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23011: {
    flexGrow: 1,
    width: wp("1.1979166666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.40971374511718%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23011: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2736_26449_2589_23012: {
    flexGrow: 1,
    width: wp("1.3541666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.145833333333336%"),
    top: hp("4.37158469945355%")
  },
  Text_I2736_26449_2589_23012: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
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
