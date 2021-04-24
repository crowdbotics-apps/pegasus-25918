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
      <View style={styles.View_1661_1}>
        <View style={styles.View_1661_2}>
          <View style={styles.View_1661_4} />
          <View style={styles.View_1672_6569} />
          <View style={styles.View_1661_6}>
            <View style={styles.View_I1661_6_317_226}>
              <View style={styles.View_I1661_6_317_228}>
                <Text style={styles.Text_I1661_6_317_228}>Search Email</Text>
              </View>
            </View>
            <View style={styles.View_I1661_6_317_229}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc62/5d50/737347732ba37abb0afb958fc02e7999"
                }}
                style={styles.ImageBackground_I1661_6_317_246}
              />
            </View>
          </View>
          <View style={styles.View_1672_6567}>
            <View style={styles.View_1672_6512}>
              <View style={styles.View_1661_11}>
                <View style={styles.View_I1661_11_1158_9471}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3698/f271/7f19698dcc92c7fdcb575d6a4bd47e00"
                    }}
                    style={styles.ImageBackground_I1661_11_1158_9472}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac4/9ebe/549613e76cb97bed78dd29b9e365e2f0"
                    }}
                    style={styles.ImageBackground_I1661_11_1158_9479}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6cc/1e70/f717e3e690bf8f0f5d339819c58b01c7"
                    }}
                    style={styles.ImageBackground_I1661_11_1158_9480}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dda/e7ac/7155aa62842154d085d6e629feec9e2b"
                    }}
                    style={styles.ImageBackground_I1661_11_1158_9481}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1661_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91ec/3ccc/b73eda67e4639c407b0471318fad1f16"
              }}
              style={styles.ImageBackground_I1661_48_1198_538}
            />
          </View>
          <View style={styles.View_1661_52}>
            <View style={styles.View_I1661_52_939_660}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55e8/c214/d784599b3f0f5f8eaa3afa6f173f808c"
                }}
                style={styles.ImageBackground_I1661_52_939_660_100_657}
              />
              <View style={styles.View_I1661_52_939_660_100_658}>
                <Text style={styles.Text_I1661_52_939_660_100_658}>
                  Compose
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97df/bafc/b48ce925e1bc5c850864c6f6e34a637d"
              }}
              style={styles.ImageBackground_I1661_52_939_661}
            />
          </View>
          <View style={styles.View_1663_0} />
          <View style={styles.View_1663_1}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b00/cef6/c7fa93199ea41ef7197bce611fe35293"
              }}
              style={styles.ImageBackground_1661_70}
            />
            <View style={styles.View_1661_75}>
              <Text style={styles.Text_1661_75}>Inbox 635</Text>
            </View>
          </View>
          <View style={styles.View_1663_16}>
            <View style={styles.View_1663_2}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f7a/aa00/f9f3e4fe476f6fcfe14ced1e92823272"
                }}
                style={styles.ImageBackground_1663_3}
              />
              <View style={styles.View_1663_4}>
                <Text style={styles.Text_1663_4}>Inbox</Text>
              </View>
            </View>
            <View style={styles.View_1663_9}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbfb/3049/4544de327521e8b4878a37eac15787d9"
                }}
                style={styles.ImageBackground_1663_10}
              />
              <View style={styles.View_1663_11}>
                <Text style={styles.Text_1663_11}>Starred</Text>
              </View>
            </View>
            <View style={styles.View_1663_17}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec3/9df3/0fe227c3ea966f9cac7783350d07ffaf"
                }}
                style={styles.ImageBackground_1663_18}
              />
              <View style={styles.View_1663_19}>
                <Text style={styles.Text_1663_19}>Snoozed</Text>
              </View>
            </View>
            <View style={styles.View_1663_24}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2696/ddbc/d91aa9cb32b3c527dedb2adb60e6cf27"
                }}
                style={styles.ImageBackground_1663_25}
              />
              <View style={styles.View_1663_26}>
                <Text style={styles.Text_1663_26}>Important 99+</Text>
              </View>
            </View>
            <View style={styles.View_1663_31}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0956/15bc/34a43219f91114f64c13a388c11e8fd7"
                }}
                style={styles.ImageBackground_1663_32}
              />
              <View style={styles.View_1663_33}>
                <Text style={styles.Text_1663_33}>Sent</Text>
              </View>
            </View>
            <View style={styles.View_1663_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bf2/3aaf/a05bac7cde5a620929c2224be7607dd7"
                }}
                style={styles.ImageBackground_1663_39}
              />
              <View style={styles.View_1663_40}>
                <Text style={styles.Text_1663_40}>Drafts 29</Text>
              </View>
            </View>
            <View style={styles.View_1663_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6738/09cd/f4514797d653a3c164c55bde3260a158"
                }}
                style={styles.ImageBackground_1663_46}
              />
              <View style={styles.View_1663_47}>
                <Text style={styles.Text_1663_47}>Notes</Text>
              </View>
            </View>
            <View style={styles.View_1663_52}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522b/6a83/6b15315df5cc00b91315bfe72305c332"
                }}
                style={styles.ImageBackground_1663_53}
              />
              <View style={styles.View_1663_54}>
                <Text style={styles.Text_1663_54}>Spam</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1663_72}>
            <Text style={styles.Text_1663_72}>Connect</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fbb/28af/44b42171c2f70b47e91cf3ba4a7825ba"
            }}
            style={styles.ImageBackground_1663_73}
          />
          <View style={styles.View_1663_122}>
            <View style={styles.View_1663_102}>
              <View style={styles.View_I1663_102_919_83}>
                <View style={styles.View_I1663_102_919_85} />
                <View style={styles.View_I1663_102_919_86}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2803/d9c6/adc3142d95bd46f623d42133a50bc2e4"
                    }}
                    style={styles.ImageBackground_I1663_102_919_86_2327_25556}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acf/5b7c/b923c395ae4dc1e0182539e20cddd4ac"
                }}
                style={styles.ImageBackground_I1663_102_2210_15455}
              />
            </View>
            <View style={styles.View_1663_121}>
              <View style={styles.View_1663_118}>
                <Text style={styles.Text_1663_118}>Jane West</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c4/27fa/48d6cd0e41feae3637bf89d2d04c05d9"
                }}
                style={styles.ImageBackground_1663_119}
              />
            </View>
          </View>
          <View style={styles.View_1663_130}>
            <View style={styles.View_I1663_130_4_952}>
              <View style={styles.View_I1663_130_4_952_919_295} />
              <View style={styles.View_I1663_130_4_952_919_296}>
                <Text style={styles.Text_I1663_130_4_952_919_296}>BB</Text>
              </View>
            </View>
            <View style={styles.View_I1663_130_4_953}>
              <View style={styles.View_I1663_130_4_954}>
                <Text style={styles.Text_I1663_130_4_954}>3 Invites</Text>
              </View>
              <View style={styles.View_I1663_130_4_965}>
                <Text style={styles.Text_I1663_130_4_965}>
                  Bob Brown, Peter Park, F...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1663_161}>
            <View style={styles.View_I1663_161_4_952}>
              <View style={styles.View_I1663_161_4_952_103_657}>
                <View style={styles.View_I1663_161_4_952_103_656} />
                <ImageBackground
                  style={styles.ImageBackground_I1663_161_4_952_103_645}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed0f/f65f/d569a719abc5d8c55e87f148141c8b15"
                    }}
                    style={
                      styles.ImageBackground_I1663_161_4_952_103_645_2327_25556
                    }
                  />
                </ImageBackground>
              </View>
            </View>
            <View style={styles.View_I1663_161_4_953}>
              <View style={styles.View_I1663_161_4_954}>
                <Text style={styles.Text_I1663_161_4_954}>Sam Black</Text>
              </View>
              <View style={styles.View_I1663_161_4_965}>
                <Text style={styles.Text_I1663_161_4_965}>
                  Hey, you down for brunc...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1673_12737}>
            <View style={styles.View_I1673_12737_4_952}>
              <View style={styles.View_I1673_12737_4_952_103_657}>
                <View style={styles.View_I1673_12737_4_952_103_656} />
                <View style={styles.View_I1673_12737_4_952_103_645}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2803/d9c6/adc3142d95bd46f623d42133a50bc2e4"
                    }}
                    style={
                      styles.ImageBackground_I1673_12737_4_952_103_645_2327_25556
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I1673_12737_4_953}>
              <View style={styles.View_I1673_12737_4_954}>
                <Text style={styles.Text_I1673_12737_4_954}>Keven Smith</Text>
              </View>
              <View style={styles.View_I1673_12737_4_965}>
                <Text style={styles.Text_I1673_12737_4_965}>
                  What do you think abou...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1663_180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec5f/3149/5f9751b6d91249d42393e54386aab3c3"
              }}
              style={styles.ImageBackground_I1663_180_650_7489}
            />
            <View style={styles.View_I1663_180_650_7491}>
              <Text style={styles.Text_I1663_180_650_7491}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1663_184}>
            <View style={styles.View_I1663_184_650_7494}>
              <Text style={styles.Text_I1663_184_650_7494}>Video</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e2c/d635/120120793a90beb6f1afe48032617b08"
              }}
              style={styles.ImageBackground_I1663_184_650_7496}
            />
          </View>
          <View style={styles.View_1663_192}>
            <View style={styles.View_I1663_192_650_7494}>
              <Text style={styles.Text_I1663_192_650_7494}>Audio</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e2c/d635/120120793a90beb6f1afe48032617b08"
              }}
              style={styles.ImageBackground_I1663_192_650_7496}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b4/6f90/426b1fdba705ab183fc5cc86c1cf3909"
            }}
            style={styles.ImageBackground_1663_203}
          />
          <View style={styles.View_1663_205}>
            <View style={styles.View_I1663_205_103_657}>
              <View style={styles.View_I1663_205_103_656} />
              <View style={styles.View_I1663_205_103_645}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2803/d9c6/adc3142d95bd46f623d42133a50bc2e4"
                  }}
                  style={styles.ImageBackground_I1663_205_103_645_2327_25556}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1663_223}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e949/546f/7158f5eca0dc4765717bb8d85af119cf"
              }}
              style={styles.ImageBackground_1663_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df69/8c32/368f7e27ef42e77bffe1a1adee881f4e"
              }}
              style={styles.ImageBackground_1663_224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6274/c9a9/32fce18f3d06b67726446b833d459dff"
              }}
              style={styles.ImageBackground_1663_218}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdfa/faf4/df6fcb0f345efaee14fd9f5fc4291a08"
            }}
            style={styles.ImageBackground_1663_230}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d901/1bdb/1191a8564c1c5f5fc9e2be5a6a3c1347"
            }}
            style={styles.ImageBackground_1663_250}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/1150/d0855424407a334de404a40eeb84b492"
            }}
            style={styles.ImageBackground_1663_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed8/cc37/55f90a5f2df9f69bd826ec19af4516bf"
            }}
            style={styles.ImageBackground_1663_237}
          />
          <View style={styles.View_1663_239}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ce/3189/639a88766af95b0c91b9c4f35bdf9879"
              }}
              style={styles.ImageBackground_I1663_239_1113_6710}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac0c/ce47/29dcb3cdc776109153c2290e4fb3d613"
              }}
              style={styles.ImageBackground_I1663_239_1113_6711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79c1/11d3/8f2c87df5e29ec4c6a11da3dc05196c0"
              }}
              style={styles.ImageBackground_I1663_239_1113_6712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efd0/38d1/91619b69dd443df556b7e6d6df131c3a"
              }}
              style={styles.ImageBackground_I1663_239_1113_6713}
            />
          </View>
          <View style={styles.View_1663_246}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c922/5ca0/64a199c9f34b3a5ed2f6f2ffad6df3e8"
              }}
              style={styles.ImageBackground_I1663_246_1113_6703}
            />
          </View>
          <View style={styles.View_1663_272}>
            <View style={styles.View_1663_264}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b00/cef6/c7fa93199ea41ef7197bce611fe35293"
                }}
                style={styles.ImageBackground_1663_265}
              />
              <View style={styles.View_1663_266}>
                <Text style={styles.Text_1663_266}>Inbox</Text>
              </View>
            </View>
            <View style={styles.View_1663_271} />
          </View>
          <View style={styles.View_1663_273}>
            <View style={styles.View_1663_274}>
              <View style={styles.View_1663_275}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631b/6928/6ca908482733803e57f46d2606914382"
                  }}
                  style={styles.ImageBackground_I1663_275_890_99}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e59/ac58/981877c1bd00a04d90064de1486243d0"
                  }}
                  style={styles.ImageBackground_I1663_275_890_100}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b8/9423/f84844720829bf39482a027b7b2569c1"
                  }}
                  style={styles.ImageBackground_I1663_275_890_101}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24c3/f564/f1e165f811bc249cc8693475b9ec45e8"
                  }}
                  style={styles.ImageBackground_I1663_275_890_102}
                />
              </View>
              <View style={styles.View_1663_276}>
                <Text style={styles.Text_1663_276}>Social</Text>
              </View>
            </View>
            <View style={styles.View_1663_277} />
          </View>
          <View style={styles.View_1663_288}>
            <View style={styles.View_1663_289}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/842d/8b09/ea6923f609a3baa730f33aa9d6cbee6c"
                }}
                style={styles.ImageBackground_1663_290}
              />
              <View style={styles.View_1663_291}>
                <Text style={styles.Text_1663_291}>Promotions</Text>
              </View>
            </View>
            <View style={styles.View_1663_292} />
          </View>
          <View style={styles.View_1663_301} />
          <View style={styles.View_1663_332}>
            <View style={styles.View_1663_325}>
              <Text style={styles.Text_1663_325}>1-50 of 15,37</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b583/ee16/aa6191396307813e83af82222319dc59"
              }}
              style={styles.ImageBackground_1663_330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ae/8ffb/7d5d1de2d4f88841efd4cc7ae96c7ecb"
              }}
              style={styles.ImageBackground_1663_328}
            />
          </View>
          <View style={styles.View_1663_368}>
            <View style={styles.View_1663_334}>
              <View style={styles.View_1663_333} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1663_335}
              />
              <View style={styles.View_1663_341}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1663_337}
                />
                <View style={styles.View_1663_339}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8e/4d35/c838dae682f8fff17d7c00bc7af5c5b3"
                    }}
                    style={styles.ImageBackground_I1663_339_1198_2092}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1663_342}
                />
                <View style={styles.View_1663_345}>
                  <Text style={styles.Text_1663_345}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1663_346}>
                  <Text style={styles.Text_1663_346}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1672_6517}>
                  <Text style={styles.Text_1672_6517}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1663_355}>
              <View style={styles.View_1663_356} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1663_357}
              />
              <View style={styles.View_1663_358}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1663_359}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1663_360}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1663_361}
                />
                <View style={styles.View_1663_362}>
                  <Text style={styles.Text_1663_362}>Company</Text>
                </View>
                <View style={styles.View_1663_363}>
                  <Text style={styles.Text_1663_363}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1672_6514}>
                  <Text style={styles.Text_1672_6514}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12807}>
              <View style={styles.View_1673_12808} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12809}
              />
              <View style={styles.View_1673_12810}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12811}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1673_12812}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1673_12813}
                />
                <View style={styles.View_1673_12814}>
                  <Text style={styles.Text_1673_12814}>Company</Text>
                </View>
                <View style={styles.View_1673_12815}>
                  <Text style={styles.Text_1673_12815}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1673_12816}>
                  <Text style={styles.Text_1673_12816}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12821}>
              <View style={styles.View_1673_12822} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12823}
              />
              <View style={styles.View_1673_12824}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12825}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1673_12826}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1673_12827}
                />
                <View style={styles.View_1673_12828}>
                  <Text style={styles.Text_1673_12828}>Company</Text>
                </View>
                <View style={styles.View_1673_12829}>
                  <Text style={styles.Text_1673_12829}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1673_12830}>
                  <Text style={styles.Text_1673_12830}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12835}>
              <View style={styles.View_1673_12836} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12837}
              />
              <View style={styles.View_1673_12838}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12839}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_244}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1673_12841}
                />
                <View style={styles.View_1673_12842}>
                  <Text style={styles.Text_1673_12842}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1673_12843}>
                  <Text style={styles.Text_1673_12843}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1673_12844}>
                  <Text style={styles.Text_1673_12844}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12850}>
              <View style={styles.View_1673_12851} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12852}
              />
              <View style={styles.View_1673_12853}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12854}
                />
                <View style={styles.View_1673_12855}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8e/4d35/c838dae682f8fff17d7c00bc7af5c5b3"
                    }}
                    style={styles.ImageBackground_I1673_12855_1198_2092}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1673_12856}
                />
                <View style={styles.View_1673_12857}>
                  <Text style={styles.Text_1673_12857}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1673_12858}>
                  <Text style={styles.Text_1673_12858}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1673_12859}>
                  <Text style={styles.Text_1673_12859}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12880}>
              <View style={styles.View_1673_12881} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12882}
              />
              <View style={styles.View_1673_12883}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12884}
                />
                <View style={styles.View_1673_12885}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8e/4d35/c838dae682f8fff17d7c00bc7af5c5b3"
                    }}
                    style={styles.ImageBackground_I1673_12885_1198_2092}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1673_12886}
                />
                <View style={styles.View_1673_12887}>
                  <Text style={styles.Text_1673_12887}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1673_12888}>
                  <Text style={styles.Text_1673_12888}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1673_12889}>
                  <Text style={styles.Text_1673_12889}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_247}>
              <View style={styles.View_1675_248} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_249}
              />
              <View style={styles.View_1675_250}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_251}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_252}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_253}
                />
                <View style={styles.View_1675_254}>
                  <Text style={styles.Text_1675_254}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_255}>
                  <Text style={styles.Text_1675_255}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_256}>
                  <Text style={styles.Text_1675_256}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12924}>
              <View style={styles.View_1673_12925} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12926}
              />
              <View style={styles.View_1673_12927}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12928}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1673_12929}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1673_12930}
                />
                <View style={styles.View_1673_12931}>
                  <Text style={styles.Text_1673_12931}>Company</Text>
                </View>
                <View style={styles.View_1673_12932}>
                  <Text style={styles.Text_1673_12932}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1673_12933}>
                  <Text style={styles.Text_1673_12933}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_261}>
              <View style={styles.View_1675_262} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_263}
              />
              <View style={styles.View_1675_264}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_265}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_266}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_267}
                />
                <View style={styles.View_1675_268}>
                  <Text style={styles.Text_1675_268}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_269}>
                  <Text style={styles.Text_1675_269}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_270}>
                  <Text style={styles.Text_1675_270}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_275}>
              <View style={styles.View_1675_276} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_277}
              />
              <View style={styles.View_1675_278}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_279}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_280}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_281}
                />
                <View style={styles.View_1675_282}>
                  <Text style={styles.Text_1675_282}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_283}>
                  <Text style={styles.Text_1675_283}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_284}>
                  <Text style={styles.Text_1675_284}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12982}>
              <View style={styles.View_1673_12983} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12984}
              />
              <View style={styles.View_1673_12985}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12986}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1673_12987}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1673_12988}
                />
                <View style={styles.View_1673_12989}>
                  <Text style={styles.Text_1673_12989}>Company</Text>
                </View>
                <View style={styles.View_1673_12990}>
                  <Text style={styles.Text_1673_12990}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1673_12991}>
                  <Text style={styles.Text_1673_12991}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12953}>
              <View style={styles.View_1673_12954} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12955}
              />
              <View style={styles.View_1673_12956}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_12957}
                />
                <View style={styles.View_1673_12958}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8e/4d35/c838dae682f8fff17d7c00bc7af5c5b3"
                    }}
                    style={styles.ImageBackground_I1673_12958_1198_2092}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1673_12959}
                />
                <View style={styles.View_1673_12960}>
                  <Text style={styles.Text_1673_12960}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1673_12961}>
                  <Text style={styles.Text_1673_12961}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1673_12962}>
                  <Text style={styles.Text_1673_12962}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_289}>
              <View style={styles.View_1675_290} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_291}
              />
              <View style={styles.View_1675_292}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_293}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_294}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_295}
                />
                <View style={styles.View_1675_296}>
                  <Text style={styles.Text_1675_296}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_297}>
                  <Text style={styles.Text_1675_297}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_298}>
                  <Text style={styles.Text_1675_298}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_12996}>
              <View style={styles.View_1673_12997} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_12998}
              />
              <View style={styles.View_1673_12999}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_13000}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1673_13001}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/09be/7bf8cffc0c4178cf19d7e99beed06cc5"
                  }}
                  style={styles.ImageBackground_1673_13002}
                />
                <View style={styles.View_1673_13003}>
                  <Text style={styles.Text_1673_13003}>Company</Text>
                </View>
                <View style={styles.View_1673_13004}>
                  <Text style={styles.Text_1673_13004}>
                    Dictum eu lobortis pretium turpis. Orci duis felis duis quam
                    lacus, eu libero. Vitae turpis semper...
                  </Text>
                </View>
                <View style={styles.View_1673_13005}>
                  <Text style={styles.Text_1673_13005}>5:20 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_303}>
              <View style={styles.View_1675_304} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_305}
              />
              <View style={styles.View_1675_306}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_307}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_308}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_309}
                />
                <View style={styles.View_1675_310}>
                  <Text style={styles.Text_1675_310}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_311}>
                  <Text style={styles.Text_1675_311}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_312}>
                  <Text style={styles.Text_1675_312}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1675_317}>
              <View style={styles.View_1675_318} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1675_319}
              />
              <View style={styles.View_1675_320}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1675_321}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2824/6bbe/f3d577cf292d4e40b264ba873b9f7429"
                  }}
                  style={styles.ImageBackground_1675_322}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1675_323}
                />
                <View style={styles.View_1675_324}>
                  <Text style={styles.Text_1675_324}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1675_325}>
                  <Text style={styles.Text_1675_325}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1675_326}>
                  <Text style={styles.Text_1675_326}>6:05 PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1673_13055}>
              <View style={styles.View_1673_13056} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/bc22/ea5aa737c7578e79afb003950e1e17ab"
                }}
                style={styles.ImageBackground_1673_13057}
              />
              <View style={styles.View_1673_13058}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba5/8ea8/4a73a87cfbdfded7668cb6d5b90eaf1f"
                  }}
                  style={styles.ImageBackground_1673_13059}
                />
                <View style={styles.View_1673_13060}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8e/4d35/c838dae682f8fff17d7c00bc7af5c5b3"
                    }}
                    style={styles.ImageBackground_I1673_13060_1198_2092}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e2/31bb/4cb5470fb249c4e8e625dd32acddcab1"
                  }}
                  style={styles.ImageBackground_1673_13061}
                />
                <View style={styles.View_1673_13062}>
                  <Text style={styles.Text_1673_13062}>Acme Corp.</Text>
                </View>
                <View style={styles.View_1673_13063}>
                  <Text style={styles.Text_1673_13063}>
                    Elementum at elementum. Leo massa eget sagittis rhoncus,
                    morbi tincidunt pellentesque parturient...
                  </Text>
                </View>
                <View style={styles.View_1673_13064}>
                  <Text style={styles.Text_1673_13064}>6:05 PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1672_6543}>
            <View style={styles.View_1672_6537}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51b1/d06b/2ad7df9fc34ef3ce0a58c5a60486b5b9"
                }}
                style={styles.ImageBackground_1672_6533}
              />
            </View>
            <View style={styles.View_1672_6538}>
              <View style={styles.View_1672_6539}>
                <View style={styles.View_I1672_6539_862_103} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f79/2f8d/d79b7cb8a780021a5701db7af3a0c133"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f79/2f8d/d79b7cb8a780021a5701db7af3a0c133"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_105}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e60/8886/8c3b2dcd4c1e7b64e76bf299613d9daa"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_106}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_107}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_109}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_110}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
                  }}
                  style={styles.ImageBackground_I1672_6539_862_112}
                />
              </View>
            </View>
            <View style={styles.View_1672_6544}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f7/bdb0/cfa1d5c1c356459bebb8154a9ad2e65f"
                }}
                style={styles.ImageBackground_1672_6545}
              />
            </View>
            <View style={styles.View_1672_6561}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12e3/ee34/91baf34ddecd446088ee41ce8e097a34"
                }}
                style={styles.ImageBackground_1672_6562}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8121/9914/eb10ea1175fd3e7d1b32ea7243c4356a"
              }}
              style={styles.ImageBackground_1673_13076}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/86c3/bc1f1a89491b06fe5976a2aee59e865c"
              }}
              style={styles.ImageBackground_1673_13078}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1673_13083}>
        <View style={styles.View_1673_13082} />
        <View style={styles.View_1673_13114} />
        <View style={styles.View_1675_11} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ad/c25d/3b4d3619e8b701fab0bec0d0470a70c5"
          }}
          style={styles.ImageBackground_1675_161}
        />
        <View style={styles.View_1673_13087}>
          <Text style={styles.Text_1673_13087}>New Message</Text>
        </View>
        <View style={styles.View_1675_0}>
          <Text style={styles.Text_1675_0}>To |</Text>
        </View>
        <View style={styles.View_1675_8}>
          <Text style={styles.Text_1675_8}>Cc Bcc</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/629c/2045/2d568ba5a7abdef7f15896da13e0238b"
          }}
          style={styles.ImageBackground_1675_3}
        />
        <View style={styles.View_1675_5}>
          <Text style={styles.Text_1675_5}>Subject</Text>
        </View>
        <View style={styles.View_1675_9}>
          <Text style={styles.Text_1675_9}>
            Best, Jane West Cheif Design Officer
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/629c/2045/2d568ba5a7abdef7f15896da13e0238b"
          }}
          style={styles.ImageBackground_1675_6}
        />
        <View style={styles.View_1673_13106}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b90/9d97/1bf1f7757958e0f7cf22497dc19a11ed"
            }}
            style={styles.ImageBackground_I1673_13106_1198_552}
          />
        </View>
        <View style={styles.View_1673_13107}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/261c/335a/264038801cc7c7d806211e0778f9906b"
            }}
            style={styles.ImageBackground_I1673_13107_1198_546}
          />
        </View>
        <View style={styles.View_1675_190}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3086/109b/0f35e4c01b222dbdd5be9a3c51edfc3c"
            }}
            style={styles.ImageBackground_1675_191}
          />
          <View style={styles.View_1675_192}>
            <View style={styles.View_I1675_192_1113_6747}>
              <View style={styles.View_I1675_192_1113_6748} />
              <View style={styles.View_I1675_192_1113_6749} />
            </View>
            <View style={styles.View_I1675_192_1113_6750}>
              <View style={styles.View_I1675_192_1113_6751} />
              <View style={styles.View_I1675_192_1113_6752} />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038c/0127/b270879a8b6d2b5e368dcd217ac06988"
            }}
            style={styles.ImageBackground_1675_193}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e0/b748/450ae8a785dd688a4e852d391c0670a9"
            }}
            style={styles.ImageBackground_1675_194}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05f3/0d2a/1957bb91babfe37164dcfe2012ae74c0"
            }}
            style={styles.ImageBackground_1675_195}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2509/b725/d2a6fdfbba15c5bcafa718b34796396d"
            }}
            style={styles.ImageBackground_1675_196}
          />
        </View>
        <View style={styles.View_1675_197}>
          <View style={styles.View_1675_198}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/fd50/ec8cadfdab9f307d8c4ac70dffecdfbb"
              }}
              style={styles.ImageBackground_1675_199}
            />
            <View style={styles.View_1675_200}>
              <Text style={styles.Text_1675_200}>Send</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4dc/3395/1a02e12d0735861f20acb5fce75dde37"
            }}
            style={styles.ImageBackground_1675_201}
          />
          <View style={styles.View_1675_231}>
            <View style={styles.View_1675_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d791/008c/082f00851fd2e72c6406f5085e778e6a"
                }}
                style={styles.ImageBackground_I1675_232_1113_6703}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b43/a2a8/c0d08f5d6a2023f0958d73fbf94e7571"
              }}
              style={styles.ImageBackground_1675_233}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63f6/eb29/6e727c0ee3f408fc4f6f4b7f81bfb621"
        }}
        style={styles.ImageBackground_2201_6945}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1661_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174.86338797814207%"),
    minHeight: hp("174.86338797814207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1661_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174.86338797814207%"),
    minHeight: hp("174.86338797814207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    overflow: "hidden"
  },
  View_1661_4: {
    width: wp("19.270833333333336%"),
    minWidth: wp("19.270833333333336%"),
    height: hp("157.37704918032787%"),
    minHeight: hp("157.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_1672_6569: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("157.37704918032787%"),
    minHeight: hp("157.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.83333333333333%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_1661_6: {
    width: wp("61.458333333333336%"),
    minWidth: wp("61.458333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.270833333333336%"),
    top: hp("4.371584699453552%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1661_6_317_226: {
    flexGrow: 1,
    width: wp("5.520833333333333%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.9125683060109289%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1661_6_317_228: {
    width: wp("5.520833333333333%"),
    minWidth: wp("5.520833333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475406%")
  },
  Text_I1661_6_317_228: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1661_6_317_229: {
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
  ImageBackground_I1661_6_317_246: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%")
  },
  View_1672_6567: {
    width: wp("5.319523811340332%"),
    minWidth: wp("5.319523811340332%"),
    height: hp("10.027364303505486%"),
    minHeight: hp("10.027364303505486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.677083333333333%"),
    top: hp("4.371584699453552%")
  },
  View_1672_6512: {
    width: wp("5.319523811340332%"),
    minWidth: wp("5.319523811340332%"),
    height: hp("10.027364303505486%"),
    minHeight: hp("10.027364303505486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1661_11: {
    width: wp("5.319523811340332%"),
    minWidth: wp("5.319523811340332%"),
    height: hp("10.027364303505486%"),
    minHeight: hp("10.027364303505486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1661_11_1158_9471: {
    flexGrow: 1,
    width: wp("5.319523413976033%"),
    height: hp("10.027330950961087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1661_11_1158_9472: {
    width: wp("3.254716793696086%"),
    height: hp("7.84107114447922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.064806620279949%")
  },
  ImageBackground_I1661_11_1158_9479: {
    width: wp("3.254800041516622%"),
    height: hp("9.063196442817729%"),
    top: hp("0.96402194330601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1661_11_1158_9480: {
    width: wp("2.216033935546875%"),
    height: hp("6.170686607152386%"),
    top: hp("1.7353995901639339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3157586256663008%")
  },
  ImageBackground_I1661_11_1158_9481: {
    width: wp("1.4542725682258606%"),
    height: hp("4.0495137699314805%"),
    top: hp("5.399376707650272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6232627232869472%")
  },
  View_1661_48: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("7.103825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1661_48_1198_538: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1661_52: {
    width: wp("13.020833333333334%"),
    minWidth: wp("13.020833333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("21.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1661_52_939_660: {
    flexGrow: 1,
    width: wp("13.020833333333334%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1661_52_939_660_100_657: {
    flexGrow: 1,
    width: wp("13.020833333333334%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1661_52_939_660_100_658: {
    flexGrow: 1,
    width: wp("11.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6510416666666665%"),
    top: hp("0%")
  },
  Text_I1661_52_939_660_100_658: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1661_52_939_661: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("2.185792349726775%")
  },
  View_1663_0: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(238, 229, 254, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 0
  },
  View_1663_1: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("36.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1661_70: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1661_75: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1661_75: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_16: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("48.49726775956284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_2: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_3: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_4: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_4: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_9: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.42076502732241%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_10: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_11: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_11: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_17: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.841530054644807%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_18: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_19: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_19: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_24: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.262295081967217%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_25: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_26: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_26: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_31: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.68306010928962%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_32: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_33: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_33: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_38: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.10382513661202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_39: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_40: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_40: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_45: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_46: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_47: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_47: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_52: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.945355191256844%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_53: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_54: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("0%")
  },
  Text_1663_54: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_72: {
    width: wp("6.354166666666666%"),
    minWidth: wp("6.354166666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("104.23497267759562%")
  },
  Text_1663_72: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1663_73: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("122.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.947916666666666%")
  },
  View_1663_122: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.96875%"),
    top: hp("120.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_102: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1663_102_919_83: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333304%"),
    top: hp("0.546448087431699%")
  },
  View_I1663_102_919_85: {
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_I1663_102_919_86: {
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
  ImageBackground_I1663_102_919_86_2327_25556: {
    flexGrow: 1,
    width: wp("5.5712890625%"),
    height: hp("21.90061475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.03125%"),
    top: hp("-3.1762295081967125%"),
    resizeMode: "cover"
  },
  ImageBackground_I1663_102_2210_15455: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.0928968262802707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.135416666666667%"),
    top: hp("5.601092896174876%")
  },
  View_1663_121: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.854166666666666%"),
    top: hp("2.5956284153005527%")
  },
  View_1663_118: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1663_118: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_1663_119: {
    width: wp("0.625%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.427083333333334%")
  },
  View_1663_130: {
    width: wp("12.864583333333332%"),
    minWidth: wp("12.864583333333332%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("130.46448087431693%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1663_130_4_952: {
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
  View_I1663_130_4_952_919_295: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 204, 103, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_I1663_130_4_952_919_296: {
    flexGrow: 1,
    width: wp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%"),
    top: hp("2.732240437158481%")
  },
  Text_I1663_130_4_952_919_296: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1663_130_4_953: {
    flexGrow: 1,
    width: wp("9.947916666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1663_130_4_954: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1663_130_4_954: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1663_130_4_965: {
    width: wp("8.90625%"),
    minWidth: wp("8.90625%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("3.6885245901639507%")
  },
  Text_I1663_130_4_965: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1663_161: {
    width: wp("13.020833333333334%"),
    minWidth: wp("13.020833333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("140.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1663_161_4_952: {
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
  View_I1663_161_4_952_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%"),
    top: hp("0.5464480874316848%")
  },
  View_I1663_161_4_952_103_656: {
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
  ImageBackground_I1663_161_4_952_103_645: {
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1663_161_4_952_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("5.5712890625%"),
    height: hp("21.90061475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.03125%"),
    top: hp("-3.1762295081967125%"),
    resizeMode: "cover"
  },
  View_I1663_161_4_953: {
    flexGrow: 1,
    width: wp("10.104166666666666%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1663_161_4_954: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("0.6830601092896131%")
  },
  Text_I1663_161_4_954: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1663_161_4_965: {
    width: wp("9.0625%"),
    minWidth: wp("9.0625%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("3.6885245901639223%")
  },
  Text_I1663_161_4_965: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12737: {
    width: wp("12.968750000000002%"),
    minWidth: wp("12.968750000000002%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("150.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1673_12737_4_952: {
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
  View_I1673_12737_4_952_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%"),
    top: hp("0.5464480874316848%")
  },
  View_I1673_12737_4_952_103_656: {
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
  View_I1673_12737_4_952_103_645: {
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
  ImageBackground_I1673_12737_4_952_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("5.5712890625%"),
    height: hp("21.90061475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.03125%"),
    top: hp("-3.176229508196741%"),
    resizeMode: "cover"
  },
  View_I1673_12737_4_953: {
    flexGrow: 1,
    width: wp("10.052083333333334%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%"),
    top: hp("0.1366120218578999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1673_12737_4_954: {
    width: wp("4.479166666666667%"),
    minWidth: wp("4.479166666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("0.6830601092896416%")
  },
  Text_I1673_12737_4_954: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1673_12737_4_965: {
    width: wp("9.010416666666666%"),
    minWidth: wp("9.010416666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520833333333333%"),
    top: hp("3.6885245901639507%")
  },
  Text_I1673_12737_4_965: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1663_180: {
    width: wp("4.322916666666667%"),
    minWidth: wp("4.322916666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("110.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1663_180_650_7489: {
    flexGrow: 1,
    width: wp("4.322916666666667%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1663_180_650_7491: {
    flexGrow: 1,
    width: wp("4.322916666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9944821550546408%")
  },
  Text_I1663_180_650_7491: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_184: {
    width: wp("4.322916666666667%"),
    minWidth: wp("4.322916666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.447916666666667%"),
    top: hp("110.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1663_184_650_7494: {
    flexGrow: 1,
    width: wp("4.322916666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  Text_I1663_184_650_7494: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1663_184_650_7496: {
    flexGrow: 1,
    width: wp("4.3589409192403155%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%")
  },
  View_1663_192: {
    width: wp("4.322916666666667%"),
    minWidth: wp("4.322916666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.822916666666666%"),
    top: hp("110.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1663_192_650_7494: {
    flexGrow: 1,
    width: wp("4.322916666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  Text_I1663_192_650_7494: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1663_192_650_7496: {
    flexGrow: 1,
    width: wp("4.3589409192403155%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_1663_203: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.22916666666667%")
  },
  View_1663_205: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.16666666666667%"),
    top: hp("4.918032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1663_205_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0.5464480874316937%")
  },
  View_I1663_205_103_656: {
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
  View_I1663_205_103_645: {
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
  ImageBackground_I1663_205_103_645_2327_25556: {
    flexGrow: 1,
    width: wp("5.5712890625%"),
    height: hp("21.90061475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.03125%"),
    top: hp("-3.176229508196721%"),
    resizeMode: "cover"
  },
  View_1663_223: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.625%"),
    top: hp("7.103825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_215: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1663_224: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.916666666666657%")
  },
  ImageBackground_1663_218: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333329%")
  },
  ImageBackground_1663_230: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1663_250: {
    width: wp("71.5625%"),
    height: hp("0%"),
    top: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.270833333333336%")
  },
  ImageBackground_1663_232: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.520833333333332%")
  },
  ImageBackground_1663_237: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.8125%")
  },
  View_1663_239: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.739583333333336%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1663_239_1113_6710: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09834289550780895%"),
    top: hp("0.27322404371584597%")
  },
  ImageBackground_I1663_239_1113_6711: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09834289550780895%"),
    top: hp("0.27322404371584597%")
  },
  ImageBackground_I1663_239_1113_6712: {
    flexGrow: 1,
    width: wp("0.4608084261417389%"),
    height: hp("1.0744835509628545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0520833333333357%"),
    top: hp("1.6118617657103798%")
  },
  ImageBackground_I1663_239_1113_6713: {
    flexGrow: 1,
    width: wp("0.4608084261417389%"),
    height: hp("1.0744835509628545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333269755045585%"),
    top: hp("0.6830601092896167%")
  },
  View_1663_246: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.34375%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1663_246_1113_6703: {
    flexGrow: 1,
    width: wp("0.20833333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333321%"),
    top: hp("0.6830601092896202%")
  },
  View_1663_272: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.270833333333336%"),
    top: hp("34.2896174863388%")
  },
  View_1663_264: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1979166666666643%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_265: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_266: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666668%"),
    top: hp("0%")
  },
  Text_1663_266: {
    color: "rgba(99, 8, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_271: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(99, 8, 247, 1)"
  },
  View_1663_273: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.41666666666667%"),
    top: hp("34.2896174863388%")
  },
  View_1663_274: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1979166666666643%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_275: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4781420765027349%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1663_275_890_99: {
    flexGrow: 1,
    width: wp("0.3125%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0.4098360655737636%")
  },
  ImageBackground_I1663_275_890_100: {
    flexGrow: 1,
    width: wp("0.26041666666666663%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7291666666666643%"),
    top: hp("0.8196721311475343%")
  },
  ImageBackground_I1663_275_890_101: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%"),
    top: hp("1.6393442622950758%")
  },
  ImageBackground_I1663_275_890_102: {
    flexGrow: 1,
    width: wp("0.49284180005391437%"),
    height: hp("0.8196721962892293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6529903411865163%"),
    top: hp("1.9125683060109253%")
  },
  View_1663_276: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666643%"),
    top: hp("0%")
  },
  Text_1663_276: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_277: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(247, 242, 255, 1)"
  },
  View_1663_288: {
    width: wp("37.23958333333333%"),
    minWidth: wp("37.23958333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.5625%"),
    top: hp("34.2896174863388%")
  },
  View_1663_289: {
    width: wp("12.447916666666666%"),
    minWidth: wp("12.447916666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1979166666666643%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_290: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_291: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("0%")
  },
  Text_1663_291: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1663_292: {
    width: wp("37.23958333333333%"),
    minWidth: wp("37.23958333333333%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(247, 242, 255, 1)"
  },
  View_1663_301: {
    width: wp("4.427083333333334%"),
    minWidth: wp("4.427083333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.40624999999999%"),
    top: hp("34.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_332: {
    width: wp("8.90625%"),
    minWidth: wp("8.90625%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.36458333333333%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_325: {
    width: wp("4.322916666666667%"),
    minWidth: wp("4.322916666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_1663_325: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_1663_330: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.364583333333343%")
  },
  ImageBackground_1663_328: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.656250000000014%")
  },
  View_1663_368: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("137.70491803278688%"),
    minHeight: hp("137.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.270833333333336%"),
    top: hp("42.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1663_334: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1663_333: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1663_335: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_341: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_337: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_339: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1663_339_1198_2092: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1663_342: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1663_345: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579212%")
  },
  Text_1663_345: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1663_346: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579212%")
  },
  Text_1663_346: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1672_6517: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1672_6517: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1663_355: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043708%")
  },
  View_1663_356: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1663_357: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1663_358: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1663_359: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1663_360: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1663_361: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1663_362: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.13661202185793542%")
  },
  Text_1663_362: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1663_363: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.13661202185793542%")
  },
  Text_1663_363: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1672_6514: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.40983606557377783%")
  },
  Text_1672_6514: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12807: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%")
  },
  View_1673_12808: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1673_12809: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12810: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12811: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_12812: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_12813: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12814: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12814: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12815: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12815: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12816: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737636%")
  },
  Text_1673_12816: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12821: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.950819672131146%")
  },
  View_1673_12822: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1673_12823: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12824: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12825: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_12826: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_12827: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12828: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12828: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12829: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12829: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12830: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1673_12830: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12835: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%")
  },
  View_1673_12836: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1673_12837: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12838: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12839: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_244: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_12841: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12842: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12842: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12843: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579141%")
  },
  Text_1673_12843: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12844: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1673_12844: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12850: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021856%")
  },
  View_1673_12851: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1673_12852: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12853: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12854: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12855: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_12855_1198_2092: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1673_12856: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12857: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12857: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12858: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12858: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12859: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1673_12859: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12880: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426229%")
  },
  View_1673_12881: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1673_12882: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12883: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12884: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12885: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_12885_1198_2092: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1673_12886: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12887: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12887: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12888: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12888: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12889: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1673_12889: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_247: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%")
  },
  View_1675_248: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_249: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_250: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_251: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_252: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_253: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_254: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_254: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_255: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_255: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_256: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1675_256: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12924: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.202185792349724%")
  },
  View_1673_12925: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1673_12926: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12927: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12928: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_12929: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_12930: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12931: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12931: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12932: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12932: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12933: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.40983606557379915%")
  },
  Text_1673_12933: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_261: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%")
  },
  View_1675_262: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_263: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_264: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_265: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_266: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_267: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_268: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_268: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_269: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_269: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_270: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737707%")
  },
  Text_1675_270: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_275: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76.50273224043714%")
  },
  View_1675_276: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_277: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_278: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109537%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_279: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_280: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_281: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_282: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218578999%")
  },
  Text_1675_282: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_283: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218578999%")
  },
  Text_1675_283: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_284: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1675_284: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12982: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.15300546448087%")
  },
  View_1673_12983: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1673_12984: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12985: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12986: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_12987: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_12988: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12989: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12989: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12990: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12990: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12991: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.40983606557378494%")
  },
  Text_1673_12991: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12953: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.8032786885246%")
  },
  View_1673_12954: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1673_12955: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12956: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_12957: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12958: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%"),
    top: hp("0.2732240437158282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_12958_1198_2092: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1673_12959: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_12960: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12960: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12961: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_12961: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12962: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1673_12962: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_289: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.4535519125683%")
  },
  View_1675_290: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_291: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_292: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_293: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_294: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_295: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_296: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218578999%")
  },
  Text_1675_296: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_297: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218578999%")
  },
  Text_1675_297: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_298: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1675_298: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_12996: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.10382513661203%")
  },
  View_1673_12997: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_1673_12998: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_12999: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_13000: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_13001: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1673_13002: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_13003: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_13003: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_13004: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_13004: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_13005: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1673_13005: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_303: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.75409836065573%")
  },
  View_1675_304: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_305: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_306: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_307: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_308: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_309: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_310: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_310: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_311: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_311: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_312: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1675_312: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_317: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122.40437158469946%")
  },
  View_1675_318: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1675_319: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_320: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_321: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1675_322: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%")
  },
  ImageBackground_1675_323: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1675_324: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_324: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_325: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1675_325: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_326: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.40983606557378494%")
  },
  Text_1675_326: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_13055: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("130.05464480874315%")
  },
  View_1673_13056: {
    width: wp("71.45833333333333%"),
    minWidth: wp("71.45833333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  ImageBackground_1673_13057: {
    width: wp("71.45833333333333%"),
    height: hp("0%"),
    top: hp("7.513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_13058: {
    width: wp("68.84588241577148%"),
    minWidth: wp("68.84588241577148%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2806240717569963%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1673_13059: {
    width: wp("1.4583333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1673_13060: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395833333333332%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_13060_1198_2092: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1673_13061: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%")
  },
  View_1673_13062: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.770833333333332%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_13062: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_13063: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791668256123863%"),
    top: hp("0.1366120218579283%")
  },
  Text_1673_13063: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1673_13064: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.229168256123856%"),
    top: hp("0.4098360655737565%")
  },
  Text_1673_13064: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1672_6543: {
    width: wp("2.9166666666666665%"),
    height: hp("56.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.95833333333333%"),
    top: hp("25.683060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1672_6537: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 8, 247, 1)"
  },
  ImageBackground_1672_6533: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_1672_6538: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497269%"),
    backgroundColor: "rgba(99, 8, 247, 1)"
  },
  View_1672_6539: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1672_6539_862_103: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1041666666666714%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I1672_6539_862_104: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3645833333333428%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_I1672_6539_862_105: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666714%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_I1672_6539_862_106: {
    flexGrow: 1,
    width: wp("1.0416666666666665%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1041666666666714%"),
    top: hp("1.092896174863391%")
  },
  ImageBackground_I1672_6539_862_107: {
    flexGrow: 1,
    width: wp("0.10416666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.390625%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_I1672_6539_862_109: {
    flexGrow: 1,
    width: wp("0.10416666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7552083333333428%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_I1672_6539_862_110: {
    flexGrow: 1,
    width: wp("0.10416666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.390625%"),
    top: hp("2.322404371584703%")
  },
  ImageBackground_I1672_6539_862_112: {
    flexGrow: 1,
    width: wp("0.10416666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7552083333333428%"),
    top: hp("2.322404371584703%")
  },
  View_1672_6544: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(99, 8, 247, 1)"
  },
  ImageBackground_1672_6545: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_1672_6561: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.06557377049181%"),
    backgroundColor: "rgba(99, 8, 247, 1)"
  },
  ImageBackground_1672_6562: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  ImageBackground_1673_13076: {
    width: wp("2.9166666666666665%"),
    height: hp("0%"),
    top: hp("48.087431693989075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1673_13078: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%")
  },
  View_1673_13083: {
    width: wp("37.083333333333336%"),
    minWidth: wp("37.083333333333336%"),
    height: hp("81.28415300546447%"),
    minHeight: hp("81.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.645833333333336%"),
    top: hp("93.5792349726776%")
  },
  View_1673_13082: {
    width: wp("37.083333333333336%"),
    minWidth: wp("37.083333333333336%"),
    height: hp("73.77049180327869%"),
    minHeight: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_1673_13114: {
    width: wp("37.083333333333336%"),
    minWidth: wp("37.083333333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1675_11: {
    width: wp("34.63541666666667%"),
    minWidth: wp("34.63541666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1979166666666643%"),
    top: hp("60.51912568306011%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_1675_161: {
    width: wp("1.1458333333333333%"),
    height: hp("2.459016393442623%"),
    top: hp("63.25136612021856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1875%")
  },
  View_1673_13087: {
    width: wp("11.510416666666666%"),
    minWidth: wp("11.510416666666666%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("0.5464480874316848%")
  },
  Text_1673_13087: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_0: {
    width: wp("11.510416666666666%"),
    minWidth: wp("11.510416666666666%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("7.513661202185787%")
  },
  Text_1675_0: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_8: {
    width: wp("11.510416666666666%"),
    minWidth: wp("11.510416666666666%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.062499999999993%"),
    top: hp("7.513661202185787%")
  },
  Text_1675_8: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_1675_3: {
    width: wp("35%"),
    height: hp("0%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_1675_5: {
    width: wp("11.510416666666666%"),
    minWidth: wp("11.510416666666666%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("13.797814207650276%")
  },
  Text_1675_5: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1675_9: {
    width: wp("11.510416666666666%"),
    minWidth: wp("11.510416666666666%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1979166666666643%"),
    top: hp("37.29508196721312%")
  },
  Text_1675_9: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1675_6: {
    width: wp("35%"),
    height: hp("0%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_1673_13106: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.583333333333336%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_13106_1198_552: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1673_13107: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.083333333333336%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1673_13107_1198_546: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1675_190: {
    width: wp("13.750000000000002%"),
    minWidth: wp("13.750000000000002%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.260416666666664%"),
    top: hp("73.08743169398909%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_191: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_192: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1675_192_1113_6747: {
    flexGrow: 1,
    width: wp("0.9945682684580485%"),
    height: hp("2.608703394405177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2955118815104072%"),
    top: hp("-0.1382129439890889%")
  },
  View_I1675_192_1113_6748: {
    width: wp("0.847254196802775%"),
    height: hp("2.2223068716747516%"),
    top: hp("0.19317793715848097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07365544637045218%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I1675_192_1113_6749: {
    width: wp("0.5226049323876699%"),
    height: hp("0.7607923179376321%"),
    top: hp("1.0614113729508006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03379185994467093%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I1675_192_1113_6750: {
    flexGrow: 1,
    width: wp("1.0005069772402446%"),
    height: hp("2.6242808566067386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0714874267578125%"),
    top: hp("0.8212730532786736%")
  },
  View_I1675_192_1113_6751: {
    width: wp("0.8531931042671203%"),
    height: hp("2.2378835521760534%"),
    top: hp("0.19317793715848097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07365544637043797%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I1675_192_1113_6752: {
    width: wp("0.5723685026168823%"),
    height: hp("0.8245031690336968%"),
    top: hp("0.7567025273224033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48300425211589015%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1675_193: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1675_194: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%")
  },
  ImageBackground_1675_195: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1675_196: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%")
  },
  View_1675_197: {
    width: wp("7.760416666666667%"),
    minWidth: wp("7.760416666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("71.448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1675_198: {
    width: wp("7.760416666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1675_199: {
    width: wp("7.760416666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1675_200: {
    width: wp("4.462239742279053%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9312502543131487%")
  },
  Text_1675_200: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_1675_201: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("1.8445291154371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.364583333333336%")
  },
  View_1675_231: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.833333333333336%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1675_232: {
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
  ImageBackground_I1675_232_1113_6703: {
    flexGrow: 1,
    width: wp("0.20833333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0.6830601092895847%")
  },
  ImageBackground_1675_233: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%")
  },
  ImageBackground_2201_6945: {
    width: wp("0%"),
    height: hp("157.5136612021858%"),
    top: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.78125%")
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
