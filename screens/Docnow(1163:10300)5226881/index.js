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
      <View style={styles.View_1163_10301}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2d0/19bd/4b5de5ce26c1e454f4b4f46247237de2"
          }}
          style={styles.ImageBackground_I1163_10301_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e9b/6864/9786698599dcd25c23fc2b8f12197f85"
          }}
          style={styles.ImageBackground_I1163_10301_478_381}
        />
      </View>
      <View style={styles.View_1163_10302}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10302_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b43/43c0/ae6e5edc99b43cd8d08cb621345dde95"
          }}
          style={styles.ImageBackground_I1163_10302_478_381}
        />
      </View>
      <View style={styles.View_1163_10303}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10303_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a1b/ab09/9d1dc4625f90d1a125388b12e6ca073a"
          }}
          style={styles.ImageBackground_I1163_10303_478_381}
        />
      </View>
      <View style={styles.View_1163_10304}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10304_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcd8/aa92/2d2c4a11b7b2ffa45c8e08c445e747b3"
          }}
          style={styles.ImageBackground_I1163_10304_478_381}
        />
      </View>
      <View style={styles.View_1163_10305}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10305_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3229/f125/3c29e04eb48da276b5c1638213ea7936"
          }}
          style={styles.ImageBackground_I1163_10305_478_381}
        />
      </View>
      <View style={styles.View_1163_10306}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10306_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b43d/b030/51fc7c5d18bf73585979c95731a9aa60"
          }}
          style={styles.ImageBackground_I1163_10306_478_381}
        />
      </View>
      <View style={styles.View_1163_10307}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d525/1eac/b267a72e86518b5cf0caa9b724c59948"
          }}
          style={styles.ImageBackground_I1163_10307_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3975/2e5f/364a309a1e6b8f376d2749d762901bff"
          }}
          style={styles.ImageBackground_I1163_10307_478_381}
        />
      </View>
      <View style={styles.View_1163_10308}>
        <View style={styles.View_I1163_10308_939_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b6/be54/7754a20971ccd5f465df29a711e40389"
            }}
            style={styles.ImageBackground_I1163_10308_939_166_100_657}
          />
          <View style={styles.View_I1163_10308_939_166_100_658}>
            <Text style={styles.Text_I1163_10308_939_166_100_658}>
              Learn More
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10309}>
        <View style={styles.View_I1163_10309_938_4061}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f7/8451/ddc5d9f75c07b5d9796cc350c52720c7"
            }}
            style={styles.ImageBackground_I1163_10309_938_4061_100_657}
          />
          <View style={styles.View_I1163_10309_938_4061_100_658}>
            <Text style={styles.Text_I1163_10309_938_4061_100_658}>
              Go Back
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc60/b691/61ff434641cd555c94efbfe4ab95a36e"
          }}
          style={styles.ImageBackground_I1163_10309_938_4062}
        />
      </View>
      <View style={styles.View_1163_10310}>
        <View style={styles.View_I1163_10310_952_204}>
          <View style={styles.View_I1163_10310_952_204_939_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba51/39f1/f8585c0673c93efcecd528b500f945c1"
              }}
              style={styles.ImageBackground_I1163_10310_952_204_939_324}
            />
            <View style={styles.View_I1163_10310_952_204_939_325}>
              <Text style={styles.Text_I1163_10310_952_204_939_325}>
                Finish
              </Text>
            </View>
          </View>
          <View style={styles.View_I1163_10310_952_204_938_3903}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb8/fb16/0b6eee40780c42ddc2bca71d880d874a"
              }}
              style={
                styles.ImageBackground_I1163_10310_952_204_938_3903_890_349
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10311}>
        <View style={styles.View_I1163_10311_18_155} />
        <View style={styles.View_I1163_10311_18_156} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8d3/d9ae/066f6fc33d33e02d950cca7903bf4e1f"
        }}
        style={styles.ImageBackground_1163_10312}
      />
      <View style={styles.View_1163_10313}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f5/ff67/a0f1e6f8a861c9b1ac3689565db88372"
          }}
          style={styles.ImageBackground_I1163_10313_99_1478}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/75df/4389696349233c41e94a261fb7ad3c03"
          }}
          style={styles.ImageBackground_I1163_10313_245_0}
        />
      </View>
      <View style={styles.View_1163_10314}>
        <View style={styles.View_I1163_10314_149_49} />
        <View style={styles.View_I1163_10314_149_50} />
        <View style={styles.View_I1163_10314_1250_35}>
          <View style={styles.View_I1163_10314_149_51} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6cf/eb71/06efb14d4747ae0bda02b51f02a9ac20"
            }}
            style={styles.ImageBackground_I1163_10314_1249_73}
          />
        </View>
      </View>
      <View style={styles.View_1163_10315}>
        <View style={styles.View_I1163_10315_2333_0}>
          <View style={styles.View_I1163_10315_2333_1}>
            <View style={styles.View_I1163_10315_2333_1_4_758}>
              <View style={styles.View_I1163_10315_2333_1_4_759}>
                <Text style={styles.Text_I1163_10315_2333_1_4_759}>2049</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac9/baa7/266287169c592fd2bad6d202daa3d481"
              }}
              style={styles.ImageBackground_I1163_10315_2333_1_4_760}
            />
          </View>
          <View style={styles.View_I1163_10315_2333_2}>
            <View style={styles.View_I1163_10315_2333_2_285_2240}>
              <View style={styles.View_I1163_10315_2333_2_285_2241}>
                <View style={styles.View_I1163_10315_2333_2_285_2242}>
                  <Text style={styles.Text_I1163_10315_2333_2_285_2242}>
                    2048
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1163_10315_2333_3}>
            <View style={styles.View_I1163_10315_2333_3_285_2240}>
              <View style={styles.View_I1163_10315_2333_3_285_2241}>
                <View style={styles.View_I1163_10315_2333_3_285_2242}>
                  <Text style={styles.Text_I1163_10315_2333_3_285_2242}>
                    2047
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1163_10315_2333_4}>
            <View style={styles.View_I1163_10315_2333_4_285_2240}>
              <View style={styles.View_I1163_10315_2333_4_285_2241}>
                <View style={styles.View_I1163_10315_2333_4_285_2242}>
                  <Text style={styles.Text_I1163_10315_2333_4_285_2242}>
                    2046
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10316}>
        <View style={styles.View_1163_10317}>
          <View style={styles.View_I1163_10317_527_356}>
            <View style={styles.View_I1163_10317_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10318}>
          <View style={styles.View_I1163_10318_527_356}>
            <View style={styles.View_I1163_10318_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10319} />
        <View style={styles.View_1163_10320} />
      </View>
      <View style={styles.View_1163_10321}>
        <View style={styles.View_I1163_10321_825_3344} />
        <View style={styles.View_I1163_10321_825_3345} />
        <View style={styles.View_I1163_10321_825_3346}>
          <View style={styles.View_I1163_10321_825_3346_679_4026} />
        </View>
        <View style={styles.View_I1163_10321_825_3347}>
          <View style={styles.View_I1163_10321_825_3348} />
          <View style={styles.View_I1163_10321_825_3349} />
          <View style={styles.View_I1163_10321_825_3350}>
            <Text style={styles.Text_I1163_10321_825_3350}>Saved</Text>
          </View>
        </View>
        <View style={styles.View_I1163_10321_825_3351}>
          <View style={styles.View_I1163_10321_825_3352} />
          <View style={styles.View_I1163_10321_825_3353} />
          <View style={styles.View_I1163_10321_825_3354}>
            <Text style={styles.Text_I1163_10321_825_3354}>Matches</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10322}>
        <Text style={styles.Text_1163_10322}>Display</Text>
      </View>
      <View style={styles.View_1163_10323}>
        <Text style={styles.Text_1163_10323}>Heading</Text>
      </View>
      <View style={styles.View_1163_10324}>
        <Text style={styles.Text_1163_10324}>LABEL</Text>
      </View>
      <View style={styles.View_1163_10325}>
        <Text style={styles.Text_1163_10325}>Paragraph</Text>
      </View>
      <View style={styles.View_1163_10326}>
        <View style={styles.View_I1163_10326_570_5705} />
        <View style={styles.View_I1163_10326_570_5760}>
          <View style={styles.View_I1163_10326_570_5760_465_2288}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dfd/6d27/36da9f79d6029a2155c4694b51a0a9e9"
              }}
              style={
                styles.ImageBackground_I1163_10326_570_5760_465_2288_100_657
              }
            />
            <View style={styles.View_I1163_10326_570_5760_465_2288_100_658}>
              <Text style={styles.Text_I1163_10326_570_5760_465_2288_100_658}>
                Read
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1163_10326_570_5706}>
          <Text style={styles.Text_I1163_10326_570_5706}>
            New Product Features!
          </Text>
        </View>
      </View>
      <View style={styles.View_1163_10327}>
        <View style={styles.View_I1163_10327_574_5}>
          <Text style={styles.Text_I1163_10327_574_5}>23</Text>
        </View>
        <View style={styles.View_I1163_10327_574_6}>
          <View style={styles.View_I1163_10327_574_7} />
          <View style={styles.View_I1163_10327_574_8}>
            <View style={styles.View_I1163_10327_3126_34793}>
              <View style={styles.View_I1163_10327_574_9}>
                <Text style={styles.Text_I1163_10327_574_9}>September</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
                }}
                style={styles.ImageBackground_I1163_10327_3126_34679}
              />
            </View>
            <View style={styles.View_I1163_10327_3126_34875}>
              <View style={styles.View_I1163_10327_574_10}>
                <Text style={styles.Text_I1163_10327_574_10}>2049</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b0/c9a7/44299538426ec560e8a7b9be2b36ba1e"
                }}
                style={styles.ImageBackground_I1163_10327_3126_34725}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1163_10327_3128_1452}>
          <Text style={styles.Text_I1163_10327_3128_1452}>2049</Text>
        </View>
        <View style={styles.View_I1163_10327_574_11}>
          <Text style={styles.Text_I1163_10327_574_11}>Mo</Text>
        </View>
        <View style={styles.View_I1163_10327_574_12}>
          <Text style={styles.Text_I1163_10327_574_12}>Tu</Text>
        </View>
        <View style={styles.View_I1163_10327_574_13}>
          <Text style={styles.Text_I1163_10327_574_13}>We</Text>
        </View>
        <View style={styles.View_I1163_10327_574_14}>
          <Text style={styles.Text_I1163_10327_574_14}>Th</Text>
        </View>
        <View style={styles.View_I1163_10327_574_15}>
          <Text style={styles.Text_I1163_10327_574_15}>Fr</Text>
        </View>
        <View style={styles.View_I1163_10327_574_16}>
          <Text style={styles.Text_I1163_10327_574_16}>Sa</Text>
        </View>
        <View style={styles.View_I1163_10327_574_17}>
          <Text style={styles.Text_I1163_10327_574_17}>Su</Text>
        </View>
        <View style={styles.View_I1163_10327_574_18}>
          <Text style={styles.Text_I1163_10327_574_18}>31</Text>
        </View>
        <View style={styles.View_I1163_10327_574_19}>
          <Text style={styles.Text_I1163_10327_574_19}>1</Text>
        </View>
        <View style={styles.View_I1163_10327_574_20}>
          <Text style={styles.Text_I1163_10327_574_20}>2</Text>
        </View>
        <View style={styles.View_I1163_10327_574_21}>
          <Text style={styles.Text_I1163_10327_574_21}>3</Text>
        </View>
        <View style={styles.View_I1163_10327_574_22}>
          <Text style={styles.Text_I1163_10327_574_22}>4</Text>
        </View>
        <View style={styles.View_I1163_10327_574_23}>
          <Text style={styles.Text_I1163_10327_574_23}>5</Text>
        </View>
        <View style={styles.View_I1163_10327_574_24}>
          <Text style={styles.Text_I1163_10327_574_24}>6</Text>
        </View>
        <View style={styles.View_I1163_10327_574_25}>
          <Text style={styles.Text_I1163_10327_574_25}>7</Text>
        </View>
        <View style={styles.View_I1163_10327_574_26}>
          <Text style={styles.Text_I1163_10327_574_26}>8</Text>
        </View>
        <View style={styles.View_I1163_10327_574_27}>
          <Text style={styles.Text_I1163_10327_574_27}>9</Text>
        </View>
        <View style={styles.View_I1163_10327_574_28}>
          <Text style={styles.Text_I1163_10327_574_28}>10</Text>
        </View>
        <View style={styles.View_I1163_10327_574_29}>
          <Text style={styles.Text_I1163_10327_574_29}>11</Text>
        </View>
        <View style={styles.View_I1163_10327_574_30}>
          <Text style={styles.Text_I1163_10327_574_30}>12</Text>
        </View>
        <View style={styles.View_I1163_10327_574_31}>
          <Text style={styles.Text_I1163_10327_574_31}>13</Text>
        </View>
        <View style={styles.View_I1163_10327_574_32}>
          <Text style={styles.Text_I1163_10327_574_32}>14</Text>
        </View>
        <View style={styles.View_I1163_10327_574_33}>
          <Text style={styles.Text_I1163_10327_574_33}>15</Text>
        </View>
        <View style={styles.View_I1163_10327_574_34}>
          <Text style={styles.Text_I1163_10327_574_34}>16</Text>
        </View>
        <View style={styles.View_I1163_10327_574_35}>
          <Text style={styles.Text_I1163_10327_574_35}>17</Text>
        </View>
        <View style={styles.View_I1163_10327_574_36}>
          <Text style={styles.Text_I1163_10327_574_36}>18</Text>
        </View>
        <View style={styles.View_I1163_10327_574_37}>
          <Text style={styles.Text_I1163_10327_574_37}>19</Text>
        </View>
        <View style={styles.View_I1163_10327_574_38}>
          <Text style={styles.Text_I1163_10327_574_38}>20</Text>
        </View>
        <View style={styles.View_I1163_10327_574_39}>
          <Text style={styles.Text_I1163_10327_574_39}>21</Text>
        </View>
        <View style={styles.View_I1163_10327_574_40}>
          <Text style={styles.Text_I1163_10327_574_40}>22</Text>
        </View>
        <View style={styles.View_I1163_10327_574_41}>
          <Text style={styles.Text_I1163_10327_574_41}>23</Text>
        </View>
        <View style={styles.View_I1163_10327_574_42}>
          <Text style={styles.Text_I1163_10327_574_42}>24</Text>
        </View>
        <View style={styles.View_I1163_10327_574_43}>
          <Text style={styles.Text_I1163_10327_574_43}>25</Text>
        </View>
        <View style={styles.View_I1163_10327_574_44}>
          <Text style={styles.Text_I1163_10327_574_44}>26</Text>
        </View>
        <View style={styles.View_I1163_10327_574_45}>
          <Text style={styles.Text_I1163_10327_574_45}>27</Text>
        </View>
        <View style={styles.View_I1163_10327_574_46}>
          <Text style={styles.Text_I1163_10327_574_46}>28</Text>
        </View>
        <View style={styles.View_I1163_10327_574_47}>
          <Text style={styles.Text_I1163_10327_574_47}>29</Text>
        </View>
        <View style={styles.View_I1163_10327_574_48}>
          <Text style={styles.Text_I1163_10327_574_48}>30</Text>
        </View>
        <View style={styles.View_I1163_10327_574_49}>
          <Text style={styles.Text_I1163_10327_574_49}>31</Text>
        </View>
        <View style={styles.View_I1163_10327_574_50}>
          <Text style={styles.Text_I1163_10327_574_50}>1</Text>
        </View>
        <View style={styles.View_I1163_10327_574_51}>
          <Text style={styles.Text_I1163_10327_574_51}>2</Text>
        </View>
        <View style={styles.View_I1163_10327_574_52}>
          <Text style={styles.Text_I1163_10327_574_52}>3</Text>
        </View>
        <View style={styles.View_I1163_10327_3126_40029}>
          <View style={styles.View_I1163_10327_3126_35592}>
            <Text style={styles.Text_I1163_10327_3126_35592}>Next</Text>
          </View>
        </View>
        <View style={styles.View_I1163_10327_3126_34964}>
          <Text style={styles.Text_I1163_10327_3126_34964}>Previous</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b583/ee16/aa6191396307813e83af82222319dc59"
          }}
          style={styles.ImageBackground_I1163_10327_3126_40679}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8efa/063b/e46197b2ee2cae3d125aa7ecac0202a2"
          }}
          style={styles.ImageBackground_I1163_10327_3126_42079}
        />
      </View>
      <View style={styles.View_1163_10328}>
        <View style={styles.View_I1163_10328_587_2741} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/55d2/b37ba154c91f944420a44f86c943a1e0"
          }}
          style={styles.ImageBackground_I1163_10328_587_2743}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a07/7b06/60360f8a76ceb6adf5a2febfdba1f1a0"
          }}
          style={styles.ImageBackground_I1163_10328_587_2744}
        />
      </View>
      <View style={styles.View_1163_10329}>
        <View style={styles.View_I1163_10329_4_952}>
          <View style={styles.View_I1163_10329_4_952_103_657}>
            <View style={styles.View_I1163_10329_4_952_103_656} />
            <View style={styles.View_I1163_10329_4_952_103_645}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2803/d9c6/adc3142d95bd46f623d42133a50bc2e4"
                }}
                style={
                  styles.ImageBackground_I1163_10329_4_952_103_645_2327_25556
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1163_10329_4_953}>
          <View style={styles.View_I1163_10329_4_954}>
            <Text style={styles.Text_I1163_10329_4_954}>Lisha Cook </Text>
          </View>
          <View style={styles.View_I1163_10329_4_965}>
            <Text style={styles.Text_I1163_10329_4_965}>Online</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10330} />
      <View style={styles.View_1163_10331}>
        <View style={styles.View_I1163_10331_248_18} />
        <View style={styles.View_I1163_10331_248_17} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/165c/5943/f9242271b5f2b2f5fddc5f18a775b1d8"
          }}
          style={styles.ImageBackground_I1163_10331_248_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6d/7020/54d76a8c8753b6ea113582c1896632af"
          }}
          style={styles.ImageBackground_I1163_10331_248_21}
        />
        <View style={styles.View_I1163_10331_248_19}>
          <Text style={styles.Text_I1163_10331_248_19}>1</Text>
        </View>
      </View>
      <View style={styles.View_1163_10332}>
        <View style={styles.View_I1163_10332_322_958}>
          <View style={styles.View_I1163_10332_322_960}>
            <Text style={styles.Text_I1163_10332_322_960}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I1163_10332_322_961}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc62/5d50/737347732ba37abb0afb958fc02e7999"
            }}
            style={styles.ImageBackground_I1163_10332_322_962}
          />
        </View>
      </View>
      <View style={styles.View_1163_10333}>
        <View style={styles.View_I1163_10333_322_1358}>
          <View style={styles.View_I1163_10333_322_1360}>
            <Text style={styles.Text_I1163_10333_322_1360}>Phone Number</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10334}>
        <View style={styles.View_I1163_10334_474_4}>
          <View style={styles.View_I1163_10334_474_6}>
            <Text style={styles.Text_I1163_10334_474_6}>Share a reply</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1163_10335}>
        <View style={styles.View_I1163_10335_173_1029} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cc5/77ff/dffe746e42029fe165471537b160d6d3"
          }}
          style={styles.ImageBackground_I1163_10335_323_1119}
        />
        <View style={styles.View_I1163_10335_173_1028}>
          <Text style={styles.Text_I1163_10335_173_1028}>Apartments</Text>
        </View>
      </View>
      <View style={styles.View_1163_10336}>
        <Text style={styles.Text_1163_10336}>DocNow</Text>
      </View>
      <View style={styles.View_1163_10339}>
        <View style={styles.View_1163_10340}>
          <View style={styles.View_I1163_10340_527_356}>
            <View style={styles.View_I1163_10340_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10341}>
          <View style={styles.View_I1163_10341_527_356}>
            <View style={styles.View_I1163_10341_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10342} />
        <View style={styles.View_1163_10343} />
      </View>
      <View style={styles.View_1163_10344}>
        <View style={styles.View_1163_10345}>
          <View style={styles.View_I1163_10345_527_356}>
            <View style={styles.View_I1163_10345_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10346}>
          <View style={styles.View_I1163_10346_527_356}>
            <View style={styles.View_I1163_10346_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10347} />
        <View style={styles.View_1163_10348} />
      </View>
      <View style={styles.View_1163_10349}>
        <View style={styles.View_1163_10350}>
          <View style={styles.View_I1163_10350_527_356}>
            <View style={styles.View_I1163_10350_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10351}>
          <View style={styles.View_I1163_10351_527_356}>
            <View style={styles.View_I1163_10351_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1163_10352} />
        <View style={styles.View_1163_10353} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc1f/f887/9cb5c5d6d28d3f7ebf9e0464f3ba33f5"
        }}
        style={styles.ImageBackground_1163_10582}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1163_10301: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57291666666667%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10301_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10301_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726775%")
  },
  View_1163_10302: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.989583333333336%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10302_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10302_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10303: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10303_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10303_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10304: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.385416666666664%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10304_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10304_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10305: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10305_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10305_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10306: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.072916666666664%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10306_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10306_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10307: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.88541666666666%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10307_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10307_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("2.185792349726782%")
  },
  View_1163_10308: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.697916666666668%"),
    top: hp("34.42622950819672%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10308_939_166: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10308_939_166_100_657: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1163_10308_939_166_100_658: {
    flexGrow: 1,
    width: wp("11.953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%"),
    top: hp("0%")
  },
  Text_I1163_10308_939_166_100_658: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10309: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.322916666666664%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10309_938_4061: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10309_938_4061_100_657: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1163_10309_938_4061_100_658: {
    flexGrow: 1,
    width: wp("11.953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%"),
    top: hp("0%")
  },
  Text_I1163_10309_938_4061_100_658: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1163_10309_938_4062: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("2.7322404371584668%")
  },
  View_1163_10310: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.94791666666667%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10310_952_204: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10310_952_204_939_323: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10310_952_204_939_324: {
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1163_10310_952_204_939_325: {
    width: wp("11.953125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%")
  },
  Text_I1163_10310_952_204_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1163_10310_952_204_938_3903: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.781249999999986%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10310_952_204_938_3903_890_349: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05208333333334281%"),
    top: hp("0.1366120218579283%")
  },
  View_1163_10311: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.17708333333334%"),
    top: hp("54.644808743169406%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10311_18_155: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 135, 210, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1163_10311_18_156: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666572%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    borderColor: "rgba(0, 135, 210, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_1163_10312: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.20833333333334%")
  },
  View_1163_10313: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.86458333333333%"),
    top: hp("54.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10313_99_1478: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1163_10313_245_0: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.639344262295083%")
  },
  View_1163_10314: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.02083333333333%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10314_149_49: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1163_10314_149_50: {
    flexGrow: 1,
    width: wp("10.648980935414633%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 135, 210, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1163_10314_1250_35: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.375%"),
    top: hp("0%")
  },
  View_I1163_10314_149_51: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(0, 135, 210, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_I1163_10314_1249_73: {
    width: wp("0%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("1.639344262295083%")
  },
  View_1163_10315: {
    width: wp("18.802083333333332%"),
    minWidth: wp("18.802083333333332%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.55208333333333%"),
    top: hp("84.15300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10315_2333_0: {
    flexGrow: 1,
    width: wp("18.802083333333332%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10315_2333_1: {
    width: wp("4.0625%"),
    minWidth: wp("4.0625%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(99, 8, 247, 1)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_1_4_758: {
    flexGrow: 1,
    width: wp("2.8125%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999858%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_1_4_759: {
    width: wp("1.7708333333333333%"),
    minWidth: wp("1.7708333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1163_10315_2333_1_4_759: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I1163_10315_2333_1_4_760: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8229166666666572%"),
    top: hp("6.284153005464475%")
  },
  View_I1163_10315_2333_2: {
    width: wp("4.0625%"),
    minWidth: wp("4.0625%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.104166666666671%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10315_2333_2_285_2240: {
    flexGrow: 1,
    width: wp("4.0625%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_2_285_2241: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_2_285_2242: {
    width: wp("1.7708333333333333%"),
    minWidth: wp("1.7708333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0%")
  },
  Text_I1163_10315_2333_2_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10315_2333_3: {
    width: wp("4.010416666666667%"),
    minWidth: wp("4.010416666666667%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6875%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10315_2333_3_285_2240: {
    flexGrow: 1,
    width: wp("4.010416666666667%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_3_285_2241: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_3_285_2242: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1163_10315_2333_3_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10315_2333_4: {
    width: wp("4.0625%"),
    minWidth: wp("4.0625%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.21875%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10315_2333_4_285_2240: {
    flexGrow: 1,
    width: wp("4.0625%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_4_285_2241: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10315_2333_4_285_2242: {
    width: wp("1.7708333333333333%"),
    minWidth: wp("1.7708333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1163_10315_2333_4_285_2242: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1163_10316: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("139.34426229508196%")
  },
  View_1163_10317: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10317_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10317_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10318: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10318_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10318_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 135, 210, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10319: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.697916666666666%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(58, 185, 255, 1)"
  },
  View_1163_10320: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.322916666666666%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(18, 161, 240, 1)"
  },
  View_1163_10321: {
    width: wp("16.71875%"),
    minWidth: wp("16.71875%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.88541666666667%"),
    top: hp("84.8360655737705%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1163_10321_825_3344: {
    flexGrow: 1,
    width: wp("16.71875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 1)",
    opacity: 0.11999999731779099
  },
  View_I1163_10321_825_3345: {
    flexGrow: 1,
    width: wp("16.71875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 1)",
    opacity: 0.11999999731779099
  },
  View_I1163_10321_825_3346: {
    flexGrow: 1,
    width: wp("16.71875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10321_825_3346_679_4026: {
    flexGrow: 1,
    width: wp("0.052083333333333336%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(142, 142, 147, 1)"
  },
  View_I1163_10321_825_3347: {
    flexGrow: 1,
    width: wp("8.335004647572836%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.237517674763993%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10321_825_3348: {
    width: wp("8.335004647572836%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1163_10321_825_3349: {
    width: wp("8.335004647572836%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1163_10321_825_3350: {
    width: wp("8.335004647572836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1163_10321_825_3350: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10321_825_3351: {
    flexGrow: 1,
    width: wp("8.33500305811564%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1462300618489536%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10321_825_3352: {
    flexGrow: 1,
    width: wp("8.4375%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0520833333333357%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_I1163_10321_825_3353: {
    flexGrow: 1,
    width: wp("8.4375%"),
    height: hp("3.8254581513952037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0520833333333357%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_I1163_10321_825_3354: {
    width: wp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0520833333333357%"),
    top: hp("0%")
  },
  Text_I1163_10321_825_3354: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1163_10322: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("10.821005816016692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("68.44262295081968%")
  },
  Text_1163_10322: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1163_10323: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("10.821005816016692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("86.09439036885246%")
  },
  Text_1163_10323: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1163_10324: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("4.455708675697202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("101.01365052937159%")
  },
  Text_1163_10324: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10325: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("4.455708675697202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("112.29988473360655%")
  },
  Text_1163_10325: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10326: {
    width: wp("20.78125%"),
    minWidth: wp("20.78125%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.07291666666667%"),
    top: hp("68.44262295081968%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10326_570_5705: {
    flexGrow: 1,
    width: wp("20.78125%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 135, 210, 1)"
  },
  View_I1163_10326_570_5760: {
    flexGrow: 1,
    width: wp("4.6875%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.84375%"),
    top: hp("2.1857923497267535%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10326_570_5760_465_2288: {
    flexGrow: 1,
    width: wp("4.6875%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1163_10326_570_5760_465_2288_100_657: {
    flexGrow: 1,
    width: wp("4.6875%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1163_10326_570_5760_465_2288_100_658: {
    flexGrow: 1,
    width: wp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2343749999999858%"),
    top: hp("0%")
  },
  Text_I1163_10326_570_5760_465_2288_100_658: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10326_570_5706: {
    flexGrow: 1,
    width: wp("9.739583333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("3.2786885245901516%")
  },
  Text_I1163_10326_570_5706: {
    color: "rgba(60, 5, 148, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10327: {
    width: wp("20.46875%"),
    minWidth: wp("20.46875%"),
    height: hp("48.90710382513661%"),
    minHeight: hp("48.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.02083333333333%"),
    top: hp("112.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10327_574_5: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_5: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_6: {
    flexGrow: 1,
    width: wp("20.46875%"),
    height: hp("9.660662458242616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1163_10327_574_7: {
    width: wp("20.46875%"),
    height: hp("9.660662458242616%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I1163_10327_574_8: {
    width: wp("20.46875%"),
    height: hp("9.660662458242616%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1163_10327_3126_34793: {
    width: wp("9.0625%"),
    minWidth: wp("9.0625%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10327_574_9: {
    width: wp("7.604166666666666%"),
    minWidth: wp("7.604166666666666%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1163_10327_574_9: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_I1163_10327_3126_34679: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8125%")
  },
  View_I1163_10327_3126_34875: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.517462094624847%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10327_574_10: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1163_10327_574_10: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_I1163_10327_3126_34725: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%")
  },
  View_I1163_10327_3128_1452: {
    flexGrow: 1,
    width: wp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.447916666666664%"),
    top: hp("9.56284153005464%")
  },
  Text_I1163_10327_3128_1452: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I1163_10327_574_11: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_11: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_12: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_12: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_13: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_13: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_14: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_14: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_15: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_15: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_16: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_16: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_17: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("9.660764600409834%")
  },
  Text_I1163_10327_574_17: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_18: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_18: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_19: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_19: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_20: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_20: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_21: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_21: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_22: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_22: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_23: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_23: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_24: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("16.453210382513646%")
  },
  Text_I1163_10327_574_24: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_25: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_25: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_26: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_26: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_27: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_27: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_28: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_28: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_29: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_29: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_30: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_30: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_31: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("23.24592298497268%")
  },
  Text_I1163_10327_574_31: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_32: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_32: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_33: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_33: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_34: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_34: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_35: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_35: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_36: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_36: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_37: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_37: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_38: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("30.038635587431685%")
  },
  Text_I1163_10327_574_38: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_39: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_39: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_40: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_40: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_41: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_41: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_42: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_42: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_43: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_43: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_44: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_44: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_45: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("36.83134818989072%")
  },
  Text_I1163_10327_574_45: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_46: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_46: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_47: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_47: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_48: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_48: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_49: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_49: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_50: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_50: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_51: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_51: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_574_52: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("43.624060792349724%")
  },
  Text_I1163_10327_574_52: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10327_3126_40029: {
    flexGrow: 1,
    width: wp("2.2838056087493896%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: hp("44.26229508196721%")
  },
  View_I1163_10327_3126_35592: {
    width: wp("2.2838056087493896%"),
    minWidth: wp("2.2838056087493896%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1163_10327_3126_35592: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1163_10327_3126_34964: {
    flexGrow: 1,
    width: wp("4.350104331970215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9895833333333428%"),
    top: hp("44.26229508196721%")
  },
  Text_I1163_10327_3126_34964: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1163_10327_3126_40679: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2604166666666572%"),
    top: hp("44.94535519125682%")
  },
  ImageBackground_I1163_10327_3126_42079: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.04166666666667%"),
    top: hp("44.94535519125682%")
  },
  View_1163_10328: {
    width: wp("14.84375%"),
    minWidth: wp("14.84375%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("125.5464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10328_587_2741: {
    flexGrow: 1,
    width: wp("14.84375%"),
    height: hp("51.147540149792945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-26.55743041325138%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_I1163_10328_587_2743: {
    flexGrow: 1,
    width: wp("14.84375%"),
    height: hp("51.147540149792945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-26.55743041325138%")
  },
  ImageBackground_I1163_10328_587_2744: {
    flexGrow: 1,
    width: wp("15.615331331888834%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5143864949544295%"),
    top: hp("0.4917499146174862%")
  },
  View_1163_10329: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.88541666666667%"),
    top: hp("68.44262295081968%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10329_4_952: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10329_4_952_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333357%"),
    top: hp("0.5464480874316848%")
  },
  View_I1163_10329_4_952_103_656: {
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
  View_I1163_10329_4_952_103_645: {
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
  ImageBackground_I1163_10329_4_952_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("5.5712890625%"),
    height: hp("21.90061475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.031250000000007%"),
    top: hp("-3.1762295081967267%"),
    resizeMode: "cover"
  },
  View_I1163_10329_4_953: {
    flexGrow: 1,
    width: wp("4.895833333333333%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.916666666666657%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1163_10329_4_954: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("0.6830601092896273%")
  },
  Text_I1163_10329_4_954: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1163_10329_4_965: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("3.6885245901639365%")
  },
  Text_I1163_10329_4_965: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1163_10330: {
    width: wp("4.427083333333334%"),
    minWidth: wp("4.427083333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("156.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1163_10331: {
    width: wp("6.145833333333333%"),
    minWidth: wp("6.145833333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.1875%"),
    top: hp("156.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10331_248_18: {
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
  View_I1163_10331_248_17: {
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
  ImageBackground_I1163_10331_248_20: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.185792349726796%")
  },
  ImageBackground_I1163_10331_248_21: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.104166666666664%"),
    top: hp("1.639344262295083%")
  },
  View_I1163_10331_248_19: {
    flexGrow: 1,
    width: wp("1.1979166666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3958333333333286%"),
    top: hp("0.5464480874317132%")
  },
  Text_I1163_10331_248_19: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10332: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("97.1311475409836%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1163_10332_322_958: {
    flexGrow: 1,
    width: wp("2.96875%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10332_322_960: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1163_10332_322_960: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1163_10332_322_961: {
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
  ImageBackground_I1163_10332_322_962: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_1163_10333: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.83333333333333%"),
    top: hp("152.8688524590164%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1163_10333_322_1358: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10333_322_1360: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147513%")
  },
  Text_I1163_10333_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10334: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("127.73224043715847%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1163_10334_474_4: {
    flexGrow: 1,
    width: wp("5.625%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10334_474_6: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  Text_I1163_10334_474_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10335: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("112.43169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10335_173_1029: {
    flexGrow: 1,
    width: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I1163_10335_323_1119: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.84375%"),
    top: hp("2.1857923497267677%")
  },
  View_I1163_10335_173_1028: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%"),
    top: hp("2.1857923497267677%")
  },
  Text_I1163_10335_173_1028: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1163_10336: {
    width: wp("23.854166666666668%"),
    minWidth: wp("23.854166666666668%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.698694864908855%"),
    top: hp("15.983606557377051%")
  },
  Text_1163_10336: {
    color: "rgba(0, 135, 210, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1163_10339: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("52.86885245901639%")
  },
  View_1163_10340: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10340_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10340_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10341: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10341_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10341_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10342: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.697916666666666%"),
    top: hp("15.300546448087438%"),
    backgroundColor: "rgba(110, 113, 145, 1)"
  },
  View_1163_10343: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.322916666666666%"),
    top: hp("15.300546448087438%"),
    backgroundColor: "rgba(78, 75, 102, 1)"
  },
  View_1163_10344: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("81.55737704918032%")
  },
  View_1163_10345: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10345_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10345_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10346: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10346_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10346_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 163, 189, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10347: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.697916666666666%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_1163_10348: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.322916666666666%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_1163_10349: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("110.38251366120218%")
  },
  View_1163_10350: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10350_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10350_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10351: {
    width: wp("13.28125%"),
    minWidth: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10351_527_356: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1163_10351_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1163_10352: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.697916666666666%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(247, 247, 252, 1)"
  },
  View_1163_10353: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.270833333333334%"),
    top: hp("15.300546448087445%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1163_10582: {
    width: wp("4.583333333333333%"),
    height: hp("12.021857923497267%"),
    top: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%")
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
