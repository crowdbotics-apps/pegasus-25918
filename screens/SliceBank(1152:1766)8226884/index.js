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
      <View style={styles.View_1152_1775}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6817/4596/93da74c16b8b642cf2a5a146e92a6b6d"
          }}
          style={styles.ImageBackground_I1152_1775_1056_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af1/04b0/32710300b820addfcc659b190f643006"
          }}
          style={styles.ImageBackground_I1152_1775_1056_51}
        />
      </View>
      <View style={styles.View_1152_1776}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1776_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f104/fdf8/689f5478b786abcca6f5f577e16f44c7"
          }}
          style={styles.ImageBackground_I1152_1776_478_381}
        />
      </View>
      <View style={styles.View_1152_1777}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1777_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78cf/c634/e44a80700accc9422356ddc24ca065b7"
          }}
          style={styles.ImageBackground_I1152_1777_478_381}
        />
      </View>
      <View style={styles.View_1152_1778}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1778_478_380}
        />
        <View style={styles.View_I1152_1778_478_381}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f122/c4cc/c1c7719c08c086b6087f552bd26254bb"
            }}
            style={styles.ImageBackground_I1152_1778_478_381_1078_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417d/732a/185a44f52f7e475ffd2d08e3b07d24bf"
            }}
            style={styles.ImageBackground_I1152_1778_478_381_1078_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417d/732a/185a44f52f7e475ffd2d08e3b07d24bf"
            }}
            style={styles.ImageBackground_I1152_1778_478_381_1078_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df7/e130/a08a3d6408044d97864692ac630d3c06"
            }}
            style={styles.ImageBackground_I1152_1778_478_381_1078_66}
          />
        </View>
      </View>
      <View style={styles.View_1152_1779}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1779_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec9e/3e60/9f71e37eb18d83fcf54bcbeb5de633d5"
          }}
          style={styles.ImageBackground_I1152_1779_478_381}
        />
      </View>
      <View style={styles.View_1152_1780}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1780_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0b8/2328/c0df89e99458d659cd72d6caa5804b9b"
          }}
          style={styles.ImageBackground_I1152_1780_478_381}
        />
      </View>
      <View style={styles.View_1152_1781}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f080/1dda/f13d7aa5dea90e7ab8eedd81784231ae"
          }}
          style={styles.ImageBackground_I1152_1781_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74b1/fc5a/46e3e0b050b4abcdf0be0ca64c6335fa"
          }}
          style={styles.ImageBackground_I1152_1781_478_381}
        />
      </View>
      <View style={styles.View_1152_1782}>
        <View style={styles.View_I1152_1782_1005_4593}>
          <View style={styles.View_I1152_1782_1005_4593_939_166}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b6/be54/7754a20971ccd5f465df29a711e40389"
              }}
              style={
                styles.ImageBackground_I1152_1782_1005_4593_939_166_100_657
              }
            />
            <View style={styles.View_I1152_1782_1005_4593_939_166_100_658}>
              <Text style={styles.Text_I1152_1782_1005_4593_939_166_100_658}>
                Button
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1783}>
        <View style={styles.View_I1152_1783_1005_4511}>
          <View style={styles.View_I1152_1783_1005_4511_938_4061}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26fd/76d1/5c04547a3ea81a400ae3269d2aeec548"
              }}
              style={
                styles.ImageBackground_I1152_1783_1005_4511_938_4061_100_657
              }
            />
            <View style={styles.View_I1152_1783_1005_4511_938_4061_100_658}>
              <Text style={styles.Text_I1152_1783_1005_4511_938_4061_100_658}>
                Button
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f36/01c9/019e1278b316ece315c23a475c935351"
            }}
            style={styles.ImageBackground_I1152_1783_1005_4511_938_4062}
          />
        </View>
      </View>
      <View style={styles.View_1152_1784}>
        <View style={styles.View_I1152_1784_1005_4793}>
          <View style={styles.View_I1152_1784_1005_4793_952_204}>
            <View style={styles.View_I1152_1784_1005_4793_952_204_939_323}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/189a/4392/c4e09fca1da69cebc2798428622f414a"
                }}
                style={
                  styles.ImageBackground_I1152_1784_1005_4793_952_204_939_324
                }
              />
              <View style={styles.View_I1152_1784_1005_4793_952_204_939_325}>
                <Text style={styles.Text_I1152_1784_1005_4793_952_204_939_325}>
                  Button
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec42/fb41/98df2da084d53dde57c0bb1319362b4a"
              }}
              style={
                styles.ImageBackground_I1152_1784_1005_4793_952_204_938_3903
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1785}>
        <View style={styles.View_I1152_1785_1023_85} />
        <View style={styles.View_I1152_1785_1023_86} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb59/5784/0b47e62d056f53823c2e752c9b6281b5"
        }}
        style={styles.ImageBackground_1152_1786}
      />
      <View style={styles.View_1152_1787}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ac/a901/f87f365312e92d83667b48ec51b0e80d"
          }}
          style={styles.ImageBackground_I1152_1787_1023_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1f/ff62/b18eb11b432a0ab0a3decb7c8579c52a"
          }}
          style={styles.ImageBackground_I1152_1787_1023_33}
        />
      </View>
      <View style={styles.View_1152_1788}>
        <View style={styles.View_I1152_1788_1023_110} />
        <View style={styles.View_I1152_1788_1023_111} />
        <View style={styles.View_I1152_1788_1023_112} />
      </View>
      <View style={styles.View_1152_1789}>
        <View style={styles.View_I1152_1789_2333_2615}>
          <View style={styles.View_I1152_1789_2333_2659}>
            <View style={styles.View_I1152_1789_2333_2660}>
              <View style={styles.View_I1152_1789_2333_2662}>
                <Text style={styles.Text_I1152_1789_2333_2662}>2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1152_1789_2333_2617}>
            <View style={styles.View_I1152_1789_2333_2617_1004_5367}>
              <View style={styles.View_I1152_1789_2333_2617_1004_5392}>
                <Text style={styles.Text_I1152_1789_2333_2617_1004_5392}>
                  2022
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1152_1789_2333_2618}>
            <View style={styles.View_I1152_1789_2333_2618_1004_5367}>
              <View style={styles.View_I1152_1789_2333_2618_1004_5392}>
                <Text style={styles.Text_I1152_1789_2333_2618_1004_5392}>
                  2023
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1152_1789_2333_2619}>
            <View style={styles.View_I1152_1789_2333_2619_1004_5367}>
              <View style={styles.View_I1152_1789_2333_2619_1004_5392}>
                <Text style={styles.Text_I1152_1789_2333_2619_1004_5392}>
                  2024
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1152_1789_2333_2620}>
            <View style={styles.View_I1152_1789_2333_2620_1004_5367}>
              <View style={styles.View_I1152_1789_2333_2620_1004_5392}>
                <Text style={styles.Text_I1152_1789_2333_2620_1004_5392}>
                  2025
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1790}>
        <View style={styles.View_1152_1791}>
          <View style={styles.View_I1152_1791_527_356}>
            <View style={styles.View_I1152_1791_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1792}>
          <View style={styles.View_I1152_1792_527_356}>
            <View style={styles.View_I1152_1792_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1793} />
        <View style={styles.View_1152_1794} />
      </View>
      <View style={styles.View_1152_1795}>
        <View style={styles.View_1152_1796}>
          <View style={styles.View_I1152_1796_527_356}>
            <View style={styles.View_I1152_1796_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1797}>
          <View style={styles.View_I1152_1797_527_356}>
            <View style={styles.View_I1152_1797_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1798} />
        <View style={styles.View_1152_1799} />
      </View>
      <View style={styles.View_1152_1800}>
        <View style={styles.View_1152_1801}>
          <View style={styles.View_I1152_1801_527_356}>
            <View style={styles.View_I1152_1801_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1802}>
          <View style={styles.View_I1152_1802_527_356}>
            <View style={styles.View_I1152_1802_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1803} />
        <View style={styles.View_1152_1804} />
      </View>
      <View style={styles.View_1152_1805}>
        <View style={styles.View_1152_1806}>
          <View style={styles.View_I1152_1806_527_356}>
            <View style={styles.View_I1152_1806_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1807}>
          <View style={styles.View_I1152_1807_527_356}>
            <View style={styles.View_I1152_1807_527_356_4_227} />
          </View>
        </View>
        <View style={styles.View_1152_1808} />
        <View style={styles.View_1152_1809} />
      </View>
      <View style={styles.View_1152_1810}>
        <View style={styles.View_I1152_1810_825_3344} />
        <View style={styles.View_I1152_1810_825_3345} />
        <View style={styles.View_I1152_1810_825_3346}>
          <View style={styles.View_I1152_1810_825_3346_679_4026} />
        </View>
        <View style={styles.View_I1152_1810_825_3347}>
          <View style={styles.View_I1152_1810_825_3348} />
          <View style={styles.View_I1152_1810_825_3349} />
          <View style={styles.View_I1152_1810_825_3350}>
            <Text style={styles.Text_I1152_1810_825_3350}>Saved</Text>
          </View>
        </View>
        <View style={styles.View_I1152_1810_825_3351}>
          <View style={styles.View_I1152_1810_825_3352} />
          <View style={styles.View_I1152_1810_825_3353} />
          <View style={styles.View_I1152_1810_825_3354}>
            <Text style={styles.Text_I1152_1810_825_3354}>Matches</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1811}>
        <Text style={styles.Text_1152_1811}>Display</Text>
      </View>
      <View style={styles.View_1152_1812}>
        <Text style={styles.Text_1152_1812}>Heading</Text>
      </View>
      <View style={styles.View_1152_1813}>
        <Text style={styles.Text_1152_1813}>LABEL</Text>
      </View>
      <View style={styles.View_1152_1814}>
        <Text style={styles.Text_1152_1814}>Paragraph</Text>
      </View>
      <View style={styles.View_1152_1815}>
        <View style={styles.View_I1152_1815_1045_7055}>
          <View style={styles.View_I1152_1815_1045_7057}>
            <Text style={styles.Text_I1152_1815_1045_7057}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I1152_1815_1045_7058}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4470/030c/30ab3efce778506b3d6312b7138f5cfc"
            }}
            style={styles.ImageBackground_I1152_1815_1045_7059}
          />
        </View>
      </View>
      <View style={styles.View_1152_1816}>
        <View style={styles.View_I1152_1816_1045_7020}>
          <View style={styles.View_I1152_1816_1045_7022}>
            <Text style={styles.Text_I1152_1816_1045_7022}>Phone Number</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1817}>
        <View style={styles.View_I1152_1817_1059_157}>
          <View style={styles.View_I1152_1817_1059_159}>
            <Text style={styles.Text_I1152_1817_1059_159}>Share a reply</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbfc/ff5c/b4212a714ac889d4273f2fd5bebdb64f"
          }}
          style={styles.ImageBackground_I1152_1817_1059_162}
        />
      </View>
      <View style={styles.View_1152_1818}>
        <View style={styles.View_I1152_1818_1129_1} />
        <View style={styles.View_I1152_1818_1129_2}>
          <View style={styles.View_I1152_1818_1129_2_465_2288}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91ca/73e8/134af011d6fc575012bdcf8721a32599"
              }}
              style={styles.ImageBackground_I1152_1818_1129_2_465_2288_100_657}
            />
            <View style={styles.View_I1152_1818_1129_2_465_2288_100_658}>
              <Text style={styles.Text_I1152_1818_1129_2_465_2288_100_658}>
                Read
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1152_1818_1129_3}>
          <Text style={styles.Text_I1152_1818_1129_3}>
            New Product Features!
          </Text>
        </View>
      </View>
      <View style={styles.View_1152_1819}>
        <View style={styles.View_I1152_1819_1022_48} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2053/e865/57ffe13d65284ebb7eeaefa249f0b47a"
          }}
          style={styles.ImageBackground_I1152_1819_1022_49}
        />
        <View style={styles.View_I1152_1819_1022_50}>
          <Text style={styles.Text_I1152_1819_1022_50}>Apartments</Text>
        </View>
      </View>
      <View style={styles.View_1152_1820}>
        <View style={styles.View_I1152_1820_1033_6175}>
          <Text style={styles.Text_I1152_1820_1033_6175}>23</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6176}>
          <View style={styles.View_I1152_1820_1033_6177} />
          <View style={styles.View_I1152_1820_1033_6178}>
            <View style={styles.View_I1152_1820_1033_6179}>
              <Text style={styles.Text_I1152_1820_1033_6179}>August</Text>
            </View>
            <View style={styles.View_I1152_1820_1033_6180}>
              <Text style={styles.Text_I1152_1820_1033_6180}>2049</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1152_1820_1033_6181}>
          <Text style={styles.Text_I1152_1820_1033_6181}>Mo</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6182}>
          <Text style={styles.Text_I1152_1820_1033_6182}>Tu</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6183}>
          <Text style={styles.Text_I1152_1820_1033_6183}>We</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6184}>
          <Text style={styles.Text_I1152_1820_1033_6184}>Th</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6185}>
          <Text style={styles.Text_I1152_1820_1033_6185}>Fr</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6186}>
          <Text style={styles.Text_I1152_1820_1033_6186}>Sa</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6187}>
          <Text style={styles.Text_I1152_1820_1033_6187}>Su</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6188}>
          <Text style={styles.Text_I1152_1820_1033_6188}>31</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6189}>
          <Text style={styles.Text_I1152_1820_1033_6189}>1</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6190}>
          <Text style={styles.Text_I1152_1820_1033_6190}>2</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6191}>
          <Text style={styles.Text_I1152_1820_1033_6191}>3</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6192}>
          <Text style={styles.Text_I1152_1820_1033_6192}>4</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6193}>
          <Text style={styles.Text_I1152_1820_1033_6193}>5</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6194}>
          <Text style={styles.Text_I1152_1820_1033_6194}>6</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6195}>
          <Text style={styles.Text_I1152_1820_1033_6195}>7</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6196}>
          <Text style={styles.Text_I1152_1820_1033_6196}>8</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6197}>
          <Text style={styles.Text_I1152_1820_1033_6197}>9</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6198}>
          <Text style={styles.Text_I1152_1820_1033_6198}>10</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6199}>
          <Text style={styles.Text_I1152_1820_1033_6199}>11</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6200}>
          <Text style={styles.Text_I1152_1820_1033_6200}>12</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6201}>
          <Text style={styles.Text_I1152_1820_1033_6201}>13</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6202}>
          <Text style={styles.Text_I1152_1820_1033_6202}>14</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6203}>
          <Text style={styles.Text_I1152_1820_1033_6203}>15</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6204}>
          <Text style={styles.Text_I1152_1820_1033_6204}>16</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6205}>
          <Text style={styles.Text_I1152_1820_1033_6205}>17</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6206}>
          <Text style={styles.Text_I1152_1820_1033_6206}>18</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6207}>
          <Text style={styles.Text_I1152_1820_1033_6207}>19</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6208}>
          <Text style={styles.Text_I1152_1820_1033_6208}>20</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6209}>
          <Text style={styles.Text_I1152_1820_1033_6209}>21</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6210}>
          <Text style={styles.Text_I1152_1820_1033_6210}>22</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6211}>
          <Text style={styles.Text_I1152_1820_1033_6211}>23</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6212}>
          <Text style={styles.Text_I1152_1820_1033_6212}>24</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6213}>
          <Text style={styles.Text_I1152_1820_1033_6213}>25</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6214}>
          <Text style={styles.Text_I1152_1820_1033_6214}>26</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6215}>
          <Text style={styles.Text_I1152_1820_1033_6215}>27</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6216}>
          <Text style={styles.Text_I1152_1820_1033_6216}>28</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6217}>
          <Text style={styles.Text_I1152_1820_1033_6217}>29</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6218}>
          <Text style={styles.Text_I1152_1820_1033_6218}>30</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6219}>
          <Text style={styles.Text_I1152_1820_1033_6219}>31</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6220}>
          <Text style={styles.Text_I1152_1820_1033_6220}>1</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6221}>
          <Text style={styles.Text_I1152_1820_1033_6221}>2</Text>
        </View>
        <View style={styles.View_I1152_1820_1033_6222}>
          <Text style={styles.Text_I1152_1820_1033_6222}>3</Text>
        </View>
      </View>
      <View style={styles.View_1152_1821}>
        <View style={styles.View_I1152_1821_1136_7626} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1fb/65be/a8aba749add64552977317c2c87f8afd"
          }}
          style={styles.ImageBackground_I1152_1821_1136_7629}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/439e/80fb/43695e4d1b75cc8574b8f361334ebc21"
          }}
          style={styles.ImageBackground_I1152_1821_1136_7630}
        />
      </View>
      <View style={styles.View_1152_1822}>
        <View style={styles.View_I1152_1822_4_952}>
          <View style={styles.View_I1152_1822_4_952_103_657}>
            <View style={styles.View_I1152_1822_4_952_103_656} />
            <View style={styles.View_I1152_1822_4_952_103_645}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed0f/f65f/d569a719abc5d8c55e87f148141c8b15"
                }}
                style={
                  styles.ImageBackground_I1152_1822_4_952_103_645_2327_25556
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I1152_1822_4_953}>
          <View style={styles.View_I1152_1822_4_954}>
            <Text style={styles.Text_I1152_1822_4_954}>Lisha Cook </Text>
          </View>
          <View style={styles.View_I1152_1822_4_965}>
            <Text style={styles.Text_I1152_1822_4_965}>Online</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1152_1823} />
      <View style={styles.View_1152_1824}>
        <View style={styles.View_I1152_1824_1023_153} />
        <View style={styles.View_I1152_1824_1023_154} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db97/b70a/683e6005390d5bde596a96625236df23"
          }}
          style={styles.ImageBackground_I1152_1824_1023_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc1/2c01/ce5580f00363750c20c19fd143197741"
          }}
          style={styles.ImageBackground_I1152_1824_1023_156}
        />
        <View style={styles.View_I1152_1824_1023_159}>
          <Text style={styles.Text_I1152_1824_1023_159}>1</Text>
        </View>
      </View>
      <View style={styles.View_1152_2049}>
        <Text style={styles.Text_1152_2049}>Slice Bank</Text>
      </View>
      <View style={styles.View_1152_2050}>
        <View style={styles.View_1152_2051}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba1/6b8e/1e5b8e6d141892aadd5bdbb128586ce6"
            }}
            style={styles.ImageBackground_1152_2052}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515b/bd62/e12ec1c44d21091b73dbf25afbdf125d"
            }}
            style={styles.ImageBackground_1152_2053}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c74/1a1e/a2229d043398d34d18dd4739c8eafc5e"
            }}
            style={styles.ImageBackground_1152_2055}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0cd/534a/ab99abe9a86cc6ebe1c17b4728ec67e3"
            }}
            style={styles.ImageBackground_1152_2056}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7036/79ec/0ddcda74841d5bdc407979146c55bc19"
            }}
            style={styles.ImageBackground_1152_2058}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a638/bbdc/3ab134b2d00f316064b84f32261cd916"
            }}
            style={styles.ImageBackground_1152_2060}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bef/0e48/4148ed3f99ec7ecfb3727631cee919f4"
            }}
            style={styles.ImageBackground_1152_2062}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d659/a2a5/a2ac45664e8c48593e196a1d9bca476e"
            }}
            style={styles.ImageBackground_1152_2064}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9345/5761/f37bc4c08b5c90ef82f2f74cb733ff2c"
            }}
            style={styles.ImageBackground_1152_2066}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1152_1775: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.9375%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1152_1775_1056_50: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1775_1056_51: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1776: {
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
  ImageBackground_I1152_1776_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1776_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1777: {
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
  ImageBackground_I1152_1777_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1777_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1778: {
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
  ImageBackground_I1152_1778_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1152_1778_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1152_1778_478_381_1078_61: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_I1152_1778_478_381_1078_62: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_I1152_1778_478_381_1078_63: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_I1152_1778_478_381_1078_66: {
    flexGrow: 1,
    width: wp("1.1458333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%"),
    top: hp("1.639344262295083%")
  },
  View_1152_1779: {
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
  ImageBackground_I1152_1779_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1779_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1780: {
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
  ImageBackground_I1152_1780_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1780_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1781: {
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
  ImageBackground_I1152_1781_478_380: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1781_478_381: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("2.185792349726782%")
  },
  View_1152_1782: {
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
  View_I1152_1782_1005_4593: {
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
  View_I1152_1782_1005_4593_939_166: {
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
  ImageBackground_I1152_1782_1005_4593_939_166_100_657: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1152_1782_1005_4593_939_166_100_658: {
    flexGrow: 1,
    width: wp("11.953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%"),
    top: hp("0%")
  },
  Text_I1152_1782_1005_4593_939_166_100_658: {
    color: "rgba(98, 234, 161, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1783: {
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
  View_I1152_1783_1005_4511: {
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
  View_I1152_1783_1005_4511_938_4061: {
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
  ImageBackground_I1152_1783_1005_4511_938_4061_100_657: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1152_1783_1005_4511_938_4061_100_658: {
    flexGrow: 1,
    width: wp("11.953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%"),
    top: hp("0%")
  },
  Text_I1152_1783_1005_4511_938_4061_100_658: {
    color: "rgba(98, 234, 161, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1152_1783_1005_4511_938_4062: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("2.7322404371584668%")
  },
  View_1152_1784: {
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
  View_I1152_1784_1005_4793: {
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
  View_I1152_1784_1005_4793_952_204: {
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
  View_I1152_1784_1005_4793_952_204_939_323: {
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
  ImageBackground_I1152_1784_1005_4793_952_204_939_324: {
    width: wp("13.28125%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1152_1784_1005_4793_952_204_939_325: {
    width: wp("11.953125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6640625%")
  },
  Text_I1152_1784_1005_4793_952_204_939_325: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1152_1784_1005_4793_952_204_938_3903: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.781249999999986%"),
    top: hp("2.7322404371584668%")
  },
  View_1152_1785: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.17708333333334%"),
    top: hp("54.644808743169406%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1785_1023_85: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 234, 161, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1152_1785_1023_86: {
    flexGrow: 1,
    width: wp("1.875%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderColor: "rgba(98, 234, 161, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_1152_1786: {
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.20833333333334%")
  },
  View_1152_1787: {
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
  ImageBackground_I1152_1787_1023_32: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1787_1023_33: {
    flexGrow: 1,
    width: wp("0.625%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.639344262295083%")
  },
  View_1152_1788: {
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
  View_I1152_1788_1023_110: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1152_1788_1023_111: {
    flexGrow: 1,
    width: wp("10.648980935414633%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(98, 234, 161, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I1152_1788_1023_112: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.531250000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)",
    borderColor: "rgba(98, 234, 161, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1152_1789: {
    width: wp("22.864583333333332%"),
    minWidth: wp("22.864583333333332%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.55208333333333%"),
    top: hp("84.15300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1789_2333_2615: {
    flexGrow: 1,
    width: wp("22.864583333333332%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1789_2333_2659: {
    width: wp("3.802083333333333%"),
    minWidth: wp("3.802083333333333%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(193, 156, 252, 1)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2660: {
    width: wp("2.5520833333333335%"),
    minWidth: wp("2.5520833333333335%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999858%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2662: {
    width: wp("1.5104166666666667%"),
    minWidth: wp("1.5104166666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1152_1789_2333_2662: {
    color: "rgba(60, 5, 148, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1789_2333_2617: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.84375%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2617_1004_5367: {
    flexGrow: 1,
    width: wp("2.7083333333333335%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2617_1004_5392: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1152_1789_2333_2617_1004_5392: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1789_2333_2618: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.322916666666671%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2618_1004_5367: {
    flexGrow: 1,
    width: wp("2.7083333333333335%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2618_1004_5392: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0%")
  },
  Text_I1152_1789_2333_2618_1004_5392: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1789_2333_2619: {
    width: wp("4.010416666666667%"),
    minWidth: wp("4.010416666666667%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.802083333333343%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2619_1004_5367: {
    flexGrow: 1,
    width: wp("2.7604166666666665%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999858%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2619_1004_5392: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("0%")
  },
  Text_I1152_1789_2333_2619_1004_5392: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1789_2333_2620: {
    width: wp("4.010416666666667%"),
    minWidth: wp("4.010416666666667%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.33333333333333%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2620_1004_5367: {
    flexGrow: 1,
    width: wp("2.7604166666666665%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6250000000000142%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1152_1789_2333_2620_1004_5392: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0%")
  },
  Text_I1152_1789_2333_2620_1004_5392: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1152_1790: {
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
  View_1152_1791: {
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
  View_I1152_1791_527_356: {
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
  View_I1152_1791_527_356_4_227: {
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
  View_1152_1792: {
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
  View_I1152_1792_527_356: {
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
  View_I1152_1792_527_356_4_227: {
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
  View_1152_1793: {
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
  View_1152_1794: {
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
  View_1152_1795: {
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
  View_1152_1796: {
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
  View_I1152_1796_527_356: {
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
  View_I1152_1796_527_356_4_227: {
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
  View_1152_1797: {
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
  View_I1152_1797_527_356: {
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
  View_I1152_1797_527_356_4_227: {
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
  View_1152_1798: {
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
  View_1152_1799: {
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
  View_1152_1800: {
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
  View_1152_1801: {
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
  View_I1152_1801_527_356: {
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
  View_I1152_1801_527_356_4_227: {
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
  View_1152_1802: {
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
  View_I1152_1802_527_356: {
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
  View_I1152_1802_527_356_4_227: {
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
  View_1152_1803: {
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
  View_1152_1804: {
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
  View_1152_1805: {
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
  View_1152_1806: {
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
  View_I1152_1806_527_356: {
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
  View_I1152_1806_527_356_4_227: {
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
  View_1152_1807: {
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
  View_I1152_1807_527_356: {
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
  View_I1152_1807_527_356_4_227: {
    flexGrow: 1,
    width: wp("13.28125%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 205, 122, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1152_1808: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.697916666666666%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(144, 255, 194, 1)"
  },
  View_1152_1809: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.322916666666666%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_1152_1810: {
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
  View_I1152_1810_825_3344: {
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
  View_I1152_1810_825_3345: {
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
  View_I1152_1810_825_3346: {
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
  View_I1152_1810_825_3346_679_4026: {
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
  View_I1152_1810_825_3347: {
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
  View_I1152_1810_825_3348: {
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
  View_I1152_1810_825_3349: {
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
  View_I1152_1810_825_3350: {
    width: wp("8.335004647572836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I1152_1810_825_3350: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1810_825_3351: {
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
  View_I1152_1810_825_3352: {
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
  View_I1152_1810_825_3353: {
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
  View_I1152_1810_825_3354: {
    width: wp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0520833333333357%"),
    top: hp("0%")
  },
  Text_I1152_1810_825_3354: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1152_1811: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("10.821005816016692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("68.44262295081968%")
  },
  Text_1152_1811: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1152_1812: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("10.821005816016692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("86.09439036885246%")
  },
  Text_1152_1812: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1152_1813: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("4.455708675697202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("101.01365052937159%")
  },
  Text_1152_1813: {
    color: "rgba(98, 234, 161, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1814: {
    width: wp("13.893256187438965%"),
    minWidth: wp("13.893256187438965%"),
    minHeight: hp("4.455708675697202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489583333333336%"),
    top: hp("112.29988473360655%")
  },
  Text_1152_1814: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1815: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("97.6775956284153%"),
    backgroundColor: "rgba(78, 75, 102, 1)"
  },
  View_I1152_1815_1045_7055: {
    flexGrow: 1,
    width: wp("3.125%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1815_1045_7057: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1152_1815_1045_7057: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I1152_1815_1045_7058: {
    flexGrow: 1,
    width: wp("3.75%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1152_1815_1045_7059: {
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_1152_1816: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.83333333333333%"),
    top: hp("153.4153005464481%"),
    backgroundColor: "rgba(78, 75, 102, 1)"
  },
  View_I1152_1816_1045_7020: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1816_1045_7022: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147513%")
  },
  Text_I1152_1816_1045_7022: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1817: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("128.27868852459017%"),
    backgroundColor: "rgba(78, 75, 102, 1)"
  },
  View_I1152_1817_1059_157: {
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
  View_I1152_1817_1059_159: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%")
  },
  Text_I1152_1817_1059_159: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1152_1817_1059_162: {
    flexGrow: 1,
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.625%"),
    top: hp("14.071038251366105%")
  },
  View_1152_1818: {
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
  View_I1152_1818_1129_1: {
    flexGrow: 1,
    width: wp("20.78125%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 234, 161, 1)"
  },
  View_I1152_1818_1129_2: {
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
  View_I1152_1818_1129_2_465_2288: {
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
  ImageBackground_I1152_1818_1129_2_465_2288_100_657: {
    flexGrow: 1,
    width: wp("4.6875%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1152_1818_1129_2_465_2288_100_658: {
    flexGrow: 1,
    width: wp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2343749999999858%"),
    top: hp("0%")
  },
  Text_I1152_1818_1129_2_465_2288_100_658: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1818_1129_3: {
    flexGrow: 1,
    width: wp("9.739583333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("3.2786885245901516%")
  },
  Text_I1152_1818_1129_3: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1819: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72916666666667%"),
    top: hp("112.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1819_1022_48: {
    flexGrow: 1,
    width: wp("16.927083333333336%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 75, 102, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I1152_1819_1022_49: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.84375%"),
    top: hp("2.1857923497267677%")
  },
  View_I1152_1819_1022_50: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%"),
    top: hp("2.1857923497267677%")
  },
  Text_I1152_1819_1022_50: {
    color: "rgba(239, 240, 246, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_1820: {
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
  View_I1152_1820_1033_6175: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6175: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6176: {
    flexGrow: 1,
    width: wp("20.037180582682293%"),
    height: hp("9.660662458242616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1152_1820_1033_6177: {
    width: wp("20.037180582682293%"),
    height: hp("9.660662458242616%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I1152_1820_1033_6178: {
    width: wp("20.037180582682293%"),
    height: hp("9.660662458242616%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1152_1820_1033_6179: {
    width: wp("8.766266504923502%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I1152_1820_1033_6179: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_I1152_1820_1033_6180: {
    width: wp("8.7662672996521%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.270914077758789%")
  },
  Text_I1152_1820_1033_6180: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_I1152_1820_1033_6181: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6181: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6182: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6182: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6183: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6183: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6184: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6184: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6185: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6185: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6186: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6186: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6187: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("13.132364241803288%")
  },
  Text_I1152_1820_1033_6187: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6188: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6188: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6189: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6189: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6190: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6190: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6191: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6191: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6192: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6192: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6193: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6193: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6194: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("19.925076844262293%")
  },
  Text_I1152_1820_1033_6194: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6195: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6195: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6196: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6196: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6197: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6197: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6198: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6198: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6199: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6199: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6200: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6200: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6201: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("26.717789446721326%")
  },
  Text_I1152_1820_1033_6201: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6202: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6202: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6203: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6203: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6204: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6204: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6205: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6205: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6206: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6206: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6207: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6207: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6208: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("33.51050204918033%")
  },
  Text_I1152_1820_1033_6208: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6209: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6209: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6210: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6210: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6211: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6211: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6212: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6212: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6213: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6213: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6214: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6214: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6215: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("40.30294783128414%")
  },
  Text_I1152_1820_1033_6215: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6216: {
    flexGrow: 1,
    width: wp("1.6029744346936543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6216: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6217: {
    flexGrow: 1,
    width: wp("1.6029743353525798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.144296010335296%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6217: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6218: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.288592020670578%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6218: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6219: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43288803100586%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6219: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6220: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.577184041341155%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6220: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6221: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.721480051676437%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6221: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1820_1033_6222: {
    flexGrow: 1,
    width: wp("1.6029739379882815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.86577606201172%"),
    top: hp("47.09566043374315%")
  },
  Text_I1152_1820_1033_6222: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1152_1821: {
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
  View_I1152_1821_1136_7626: {
    flexGrow: 1,
    width: wp("14.84375%"),
    height: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  ImageBackground_I1152_1821_1136_7629: {
    flexGrow: 1,
    width: wp("14.84375%"),
    height: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1152_1821_1136_7630: {
    flexGrow: 1,
    width: wp("15.615331331888834%"),
    height: hp("10.6399744586215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5143864949544295%"),
    top: hp("13.00429047131145%")
  },
  View_1152_1822: {
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
  View_I1152_1822_4_952: {
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
  View_I1152_1822_4_952_103_657: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333357%"),
    top: hp("0.5464480874316848%")
  },
  View_I1152_1822_4_952_103_656: {
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
  View_I1152_1822_4_952_103_645: {
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
  ImageBackground_I1152_1822_4_952_103_645_2327_25556: {
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
  View_I1152_1822_4_953: {
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
  View_I1152_1822_4_954: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("0.6830601092896273%")
  },
  Text_I1152_1822_4_954: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I1152_1822_4_965: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("3.6885245901639365%")
  },
  Text_I1152_1822_4_965: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_1152_1823: {
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
  View_1152_1824: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.1875%"),
    top: hp("156.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1152_1824_1023_153: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I1152_1824_1023_154: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 113, 145, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_I1152_1824_1023_155: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("2.185792349726796%")
  },
  ImageBackground_I1152_1824_1023_156: {
    flexGrow: 1,
    width: wp("0.4166666666666667%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.104166666666664%"),
    top: hp("1.639344262295083%")
  },
  View_I1152_1824_1023_159: {
    flexGrow: 1,
    width: wp("1.1979166666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3958333333333286%"),
    top: hp("-0.1366120218579283%")
  },
  Text_I1152_1824_1023_159: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1152_2049: {
    width: wp("16.979166666666668%"),
    top: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.697916666666668%")
  },
  Text_1152_2049: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1152_2050: {
    width: wp("5.78125%"),
    minWidth: wp("5.78125%"),
    height: hp("16.7964153602475%"),
    minHeight: hp("16.7964153602475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("13.661202185792352%")
  },
  View_1152_2051: {
    width: wp("5.78125%"),
    height: hp("16.7964153602475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1152_2052: {
    width: wp("5.320783058802287%"),
    height: hp("11.756183019752712%"),
    top: hp("5.040236509562838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1152_2053: {
    width: wp("5.247941811879476%"),
    height: hp("8.313604261054367%"),
    top: hp("5.040503329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1152_2055: {
    width: wp("5.322166283925375%"),
    height: hp("11.756915733462474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45908610026041696%")
  },
  ImageBackground_1152_2056: {
    width: wp("4.872589508692424%"),
    height: hp("8.306399590330697%"),
    top: hp("5.040503329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.004323323567708037%")
  },
  ImageBackground_1152_2058: {
    width: wp("4.873119592666626%"),
    height: hp("8.306401153731215%"),
    top: hp("3.450520833333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9035619099934902%")
  },
  ImageBackground_1152_2060: {
    width: wp("4.430357217788696%"),
    height: hp("6.663936344000811%"),
    top: hp("9.177019296448083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5259132385253915%")
  },
  ImageBackground_1152_2062: {
    width: wp("4.383800029754639%"),
    height: hp("5.37024847145289%"),
    top: hp("0.9565509733606525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714548746744795%")
  },
  ImageBackground_1152_2064: {
    width: wp("5.319044192632039%"),
    height: hp("7.356258037963199%"),
    top: hp("9.440104166666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1152_2066: {
    width: wp("5.141365925470988%"),
    height: hp("5.289292986927137%"),
    top: hp("0.0010672814207630665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5970637003580732%")
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
