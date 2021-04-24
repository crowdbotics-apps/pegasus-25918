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
      <View style={styles.View_2963_111}>
        <View style={styles.View_I2963_111_2784_33817} />
      </View>
      <View style={styles.View_2963_113}>
        <View style={styles.View_I2963_113_2784_33798}>
          <View style={styles.View_I2963_113_2784_33799} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I2963_113_2784_33800}
          />
          <View style={styles.View_I2963_113_2784_33801} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_I2963_113_2784_33802}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I2963_113_2784_33806}
        />
        <View style={styles.View_I2963_113_2784_33811}>
          <View style={styles.View_I2963_113_2784_33812}>
            <Text style={styles.Text_I2963_113_2784_33812}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2963_429}>
        <View style={styles.View_I2963_429_2326_1508}>
          <View style={styles.View_I2963_429_2326_1510} />
          <View style={styles.View_I2963_429_2326_1511}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ded2/4c37/fb54f221c700eb6bd4a8ca8d49ca10bb"
              }}
              style={styles.ImageBackground_I2963_429_2326_1511_2209_12100}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2963_491}>
        <Text style={styles.Text_2963_491}>Enjoy traveling our world.</Text>
      </View>
      <View style={styles.View_2963_492}>
        <View style={styles.View_I2963_492_2747_25444}>
          <View style={styles.View_I2963_492_2747_25446}>
            <Text style={styles.Text_I2963_492_2747_25446}>Popular</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f2/4e16/6dd3a831c23876b129c0a61c132ba84d"
          }}
          style={styles.ImageBackground_I2963_492_2747_25521}
        />
      </View>
      <View style={styles.View_2963_509}>
        <View style={styles.View_I2963_509_2747_25491}>
          <View style={styles.View_I2963_509_2747_25492}>
            <Text style={styles.Text_I2963_509_2747_25492}>Last Minute</Text>
          </View>
        </View>
        <View
          source={{ uri: "null" }}
          style={styles.View_I2963_509_2747_25544}
        />
      </View>
      <View style={styles.View_2963_516}>
        <View style={styles.View_I2963_516_2747_25491}>
          <View style={styles.View_I2963_516_2747_25492}>
            <Text style={styles.Text_I2963_516_2747_25492}>Rating</Text>
          </View>
        </View>
        <View
          source={{ uri: "null" }}
          style={styles.View_I2963_516_2747_25544}
        />
      </View>
      <View style={styles.View_2963_789}>
        <View style={styles.View_2963_788}>
          <View style={styles.View_2963_526}>
            <View style={styles.View_2963_787} />
            <View style={styles.View_2963_527}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/799e/c6b1/177a5e95011fbb71c8c862ccee87e5e1"
                }}
                style={styles.ImageBackground_2963_528}
              />
              <View style={styles.View_2963_529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f15c/1a2d/4ef7cdf47c4be4cebad496edb03a6092"
                  }}
                  style={styles.ImageBackground_2963_530}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7634/9cd3/0ee8f577a7aa92aa62ba6934ee42f23b"
                  }}
                  style={styles.ImageBackground_2963_593}
                />
              </View>
            </View>
            <View style={styles.View_2963_656}>
              <View style={styles.View_2963_657}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36f7/b51c/8dfd1c62bc06d8b4c227069c24cd6f9e"
                  }}
                  style={styles.ImageBackground_2963_658}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4282/a324/5a6255e6c759e2c54717dd392790aa53"
                  }}
                  style={styles.ImageBackground_2963_659}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82aa/7604/a60908e1c541511fd8a10642775253c0"
                  }}
                  style={styles.ImageBackground_2963_660}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f4/eb93/965a0ca0fb4d4bb364c4c9183ff3b7e0"
                  }}
                  style={styles.ImageBackground_2963_661}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bea7/55dc/394462bec583236b574204191098dd9b"
                  }}
                  style={styles.ImageBackground_2963_662}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2017/0719/498c26b88ef806281a97c60641867da3"
                  }}
                  style={styles.ImageBackground_2963_663}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460c/a9d9/d0873f5dff4f28724c2cee29168cdd86"
                  }}
                  style={styles.ImageBackground_2963_664}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a693/ebfc/919131773ce22bd315e062a8e1e18a7d"
                  }}
                  style={styles.ImageBackground_2963_665}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ab/fc38/926874625294b5b912d44bf642a34f8b"
                  }}
                  style={styles.ImageBackground_2963_666}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/5817/46ac03c3e98b88f93955ac8e1ab22d76"
                  }}
                  style={styles.ImageBackground_2963_667}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdd/9285/72d7e80991fad556a640585ba28db30a"
                  }}
                  style={styles.ImageBackground_2963_668}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73e/9388/06e3d5f6d0c72ea31d2e95358fa5c37f"
                  }}
                  style={styles.ImageBackground_2963_669}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5332/f062/c0c267d0772f74e9a3781ff00719a62e"
                  }}
                  style={styles.ImageBackground_2963_670}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0432/76f6/e2eca59541be450daa825aeb5c41032b"
                  }}
                  style={styles.ImageBackground_2963_671}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8404/8b17/0fa6c46f4bd357a8ec5a8c9f2471a5d1"
                  }}
                  style={styles.ImageBackground_2963_672}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d6/fcbb/bc13cb75c97e88ccb7a9986be2669311"
                  }}
                  style={styles.ImageBackground_2963_673}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4eda/d053/878ed0f8b195b449c0a79e949d16ba0d"
                  }}
                  style={styles.ImageBackground_2963_674}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cf/2ebb/2aa26cff4f5de1692096dc005fb37774"
                  }}
                  style={styles.ImageBackground_2963_675}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2a3/6b08/b6a74a18c7ef68c09dc15b7d22a86a2b"
                  }}
                  style={styles.ImageBackground_2963_676}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e1/a5ff/9eb891118e41b0ed54bda28ea84eff33"
                  }}
                  style={styles.ImageBackground_2963_677}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d104/54ec/4da72d0bf57377b5011a2cad955bec76"
                  }}
                  style={styles.ImageBackground_2963_678}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b860/3278/925882f39e97d5b1cc507d2b4b0504b6"
                  }}
                  style={styles.ImageBackground_2963_679}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c5/1742/95e2085e49f63bf7dafb0e13cc484e6f"
                  }}
                  style={styles.ImageBackground_2963_680}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4cc/5b6f/701005a9893ad7abc4e7d3823b14c540"
                  }}
                  style={styles.ImageBackground_2963_681}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd79/3ddb/75d3df806bb28779a725727c95f24edd"
                  }}
                  style={styles.ImageBackground_2963_682}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f63/8c90/a54fbb6b77677e8eac2e1007553140e7"
                  }}
                  style={styles.ImageBackground_2963_683}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e54/28de/9f392a5c5024eac4fb7b723cf2a92a82"
                  }}
                  style={styles.ImageBackground_2963_684}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63a/65b6/f56caf87b7ab98625aa161f771504977"
                  }}
                  style={styles.ImageBackground_2963_685}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/a2a5/401444e74ab68a9e5a408955a6f04e4b"
                  }}
                  style={styles.ImageBackground_2963_686}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16f3/e3cf/21e72ae0170ca1f17f6c80ace7c8debf"
                  }}
                  style={styles.ImageBackground_2963_687}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8521/9f24/b330a4f2f43dd42010e7ee19f8811a75"
                  }}
                  style={styles.ImageBackground_2963_688}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf6/36d0/c940def15c0b47c546518c13de4c9e2f"
                  }}
                  style={styles.ImageBackground_2963_689}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f8/3cf9/5a844231d18a987b83fd327e34985271"
                  }}
                  style={styles.ImageBackground_2963_690}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da75/c19e/0fe6395fe849b07bb191a46768688258"
                  }}
                  style={styles.ImageBackground_2963_691}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d50/ade5/d8a03c274bf959fba04757445eea4e96"
                  }}
                  style={styles.ImageBackground_2963_692}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a2a/2acf/6938d0fae51294837f57488735288fb3"
                  }}
                  style={styles.ImageBackground_2963_693}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a6/f88d/57a4455549f2c718a3542f8434eec80b"
                  }}
                  style={styles.ImageBackground_2963_694}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed68/5186/79af452f5ec6451ca4d7214d2a3b99ca"
                  }}
                  style={styles.ImageBackground_2963_695}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc55/6532/c66bd90c31f0878911e93213fe80c2e1"
                  }}
                  style={styles.ImageBackground_2963_696}
                />
                <View source={{ uri: "null" }} style={styles.View_2963_697} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d315/e50d/5461578707b7218f2dfc64a1f12d35e5"
                  }}
                  style={styles.ImageBackground_2963_698}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61c2/b2d5/48bb9b828974a8a1b8555e6d1cbbface"
                  }}
                  style={styles.ImageBackground_2963_710}
                />
              </View>
              <View style={styles.View_2963_722}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d98/14ff/db5bd0a1fbb5d9dd0005b3060cc9e98d"
                  }}
                  style={styles.ImageBackground_2963_723}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
                  }}
                  style={styles.ImageBackground_2963_724}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
                  }}
                  style={styles.ImageBackground_2963_725}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_726}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
                  }}
                  style={styles.ImageBackground_2963_727}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
                  }}
                  style={styles.ImageBackground_2963_728}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_729}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_730}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_731}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/102e/04de/42863c775dd26f05ee034ae35a30578e"
                  }}
                  style={styles.ImageBackground_2963_732}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c3/b3ca/e9ba6a3969363d94dda1b444362a492a"
                  }}
                  style={styles.ImageBackground_2963_733}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_734}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b33/2d37/683c8c4083e9eb0c17a29bc6b95ed4e5"
                  }}
                  style={styles.ImageBackground_2963_735}
                />
                <View style={styles.View_2963_736}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf9/bb25/ee703462535364eb3f10d9304bf92ac2"
                    }}
                    style={styles.ImageBackground_2963_737}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9956/67ac/d48cbe1499b47176a52ffe72fb153d47"
                    }}
                    style={styles.ImageBackground_2963_743}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7921/60ef/46b7d846fb6a1cf17e84ef119f49e17c"
                    }}
                    style={styles.ImageBackground_2963_744}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7921/60ef/46b7d846fb6a1cf17e84ef119f49e17c"
                    }}
                    style={styles.ImageBackground_2963_745}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_746}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_747}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_748}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_749}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d8b/3d85/5b9e83297cb5e6d6110da2719a3ddb0c"
                    }}
                    style={styles.ImageBackground_2963_750}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab2/1c18/009d5291ddd2b43811b7e8fba3126acb"
                    }}
                    style={styles.ImageBackground_2963_770}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/6e28/518388929d74f61ebe839c4308e56140"
                    }}
                    style={styles.ImageBackground_2963_771}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c3/b3ca/e9ba6a3969363d94dda1b444362a492a"
                  }}
                  style={styles.ImageBackground_2963_772}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b65/8b35/91111c249324a4df01f4bcdbdfbed519"
                  }}
                  style={styles.ImageBackground_2963_773}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7750/f368/fdef6214bf3f92b027a7c214c6c3f6f9"
                  }}
                  style={styles.ImageBackground_2963_774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641c/9143/6353b6519a080f3a801667de34601371"
                  }}
                  style={styles.ImageBackground_2963_775}
                />
              </View>
              <View style={styles.View_2963_776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba6/d7f4/6dcbe8442fe6eebe673433a4c9e226e8"
                  }}
                  style={styles.ImageBackground_2963_777}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8109/9efc/d1e53ae748bef29b67f363bc1c79e449"
                  }}
                  style={styles.ImageBackground_2963_779}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5449/a232/75629cd64d856820fb94390bd7931665"
                  }}
                  style={styles.ImageBackground_2963_781}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db40/7e2f/0bd39b2c9842a64232b80e2b1f0a1ca8"
                  }}
                  style={styles.ImageBackground_2963_783}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0698/0523/062ccf7b09b304e979c7f359322cf33c"
                  }}
                  style={styles.ImageBackground_2963_785}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2963_412}>
          <Text style={styles.Text_2963_412}>Fire Mountain</Text>
        </View>
        <View style={styles.View_2963_417}>
          <Text style={styles.Text_2963_417}>
            Amet minim mollit non deserunt est sit.
          </Text>
        </View>
      </View>
      <View style={styles.View_2963_818}>
        <View style={styles.View_2963_819}>
          <View style={styles.View_2963_820}>
            <View style={styles.View_2963_821} />
            <View style={styles.View_2963_822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/799e/c6b1/177a5e95011fbb71c8c862ccee87e5e1"
                }}
                style={styles.ImageBackground_2963_823}
              />
              <View style={styles.View_2963_824}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f15c/1a2d/4ef7cdf47c4be4cebad496edb03a6092"
                  }}
                  style={styles.ImageBackground_2963_825}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7634/9cd3/0ee8f577a7aa92aa62ba6934ee42f23b"
                  }}
                  style={styles.ImageBackground_2963_888}
                />
              </View>
            </View>
            <View style={styles.View_2963_951}>
              <View style={styles.View_2963_952}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36f7/b51c/8dfd1c62bc06d8b4c227069c24cd6f9e"
                  }}
                  style={styles.ImageBackground_2963_953}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4282/a324/5a6255e6c759e2c54717dd392790aa53"
                  }}
                  style={styles.ImageBackground_2963_954}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82aa/7604/a60908e1c541511fd8a10642775253c0"
                  }}
                  style={styles.ImageBackground_2963_955}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f4/eb93/965a0ca0fb4d4bb364c4c9183ff3b7e0"
                  }}
                  style={styles.ImageBackground_2963_956}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bea7/55dc/394462bec583236b574204191098dd9b"
                  }}
                  style={styles.ImageBackground_2963_957}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2017/0719/498c26b88ef806281a97c60641867da3"
                  }}
                  style={styles.ImageBackground_2963_958}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460c/a9d9/d0873f5dff4f28724c2cee29168cdd86"
                  }}
                  style={styles.ImageBackground_2963_959}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a693/ebfc/919131773ce22bd315e062a8e1e18a7d"
                  }}
                  style={styles.ImageBackground_2963_960}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ab/fc38/926874625294b5b912d44bf642a34f8b"
                  }}
                  style={styles.ImageBackground_2963_961}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/5817/46ac03c3e98b88f93955ac8e1ab22d76"
                  }}
                  style={styles.ImageBackground_2963_962}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdd/9285/72d7e80991fad556a640585ba28db30a"
                  }}
                  style={styles.ImageBackground_2963_963}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73e/9388/06e3d5f6d0c72ea31d2e95358fa5c37f"
                  }}
                  style={styles.ImageBackground_2963_964}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5332/f062/c0c267d0772f74e9a3781ff00719a62e"
                  }}
                  style={styles.ImageBackground_2963_965}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0432/76f6/e2eca59541be450daa825aeb5c41032b"
                  }}
                  style={styles.ImageBackground_2963_966}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8404/8b17/0fa6c46f4bd357a8ec5a8c9f2471a5d1"
                  }}
                  style={styles.ImageBackground_2963_967}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d6/fcbb/bc13cb75c97e88ccb7a9986be2669311"
                  }}
                  style={styles.ImageBackground_2963_968}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4eda/d053/878ed0f8b195b449c0a79e949d16ba0d"
                  }}
                  style={styles.ImageBackground_2963_969}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cf/2ebb/2aa26cff4f5de1692096dc005fb37774"
                  }}
                  style={styles.ImageBackground_2963_970}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2a3/6b08/b6a74a18c7ef68c09dc15b7d22a86a2b"
                  }}
                  style={styles.ImageBackground_2963_971}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e1/a5ff/9eb891118e41b0ed54bda28ea84eff33"
                  }}
                  style={styles.ImageBackground_2963_972}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d104/54ec/4da72d0bf57377b5011a2cad955bec76"
                  }}
                  style={styles.ImageBackground_2963_973}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b860/3278/925882f39e97d5b1cc507d2b4b0504b6"
                  }}
                  style={styles.ImageBackground_2963_974}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c5/1742/95e2085e49f63bf7dafb0e13cc484e6f"
                  }}
                  style={styles.ImageBackground_2963_975}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4cc/5b6f/701005a9893ad7abc4e7d3823b14c540"
                  }}
                  style={styles.ImageBackground_2963_976}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd79/3ddb/75d3df806bb28779a725727c95f24edd"
                  }}
                  style={styles.ImageBackground_2963_977}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f63/8c90/a54fbb6b77677e8eac2e1007553140e7"
                  }}
                  style={styles.ImageBackground_2963_978}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e54/28de/9f392a5c5024eac4fb7b723cf2a92a82"
                  }}
                  style={styles.ImageBackground_2963_979}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63a/65b6/f56caf87b7ab98625aa161f771504977"
                  }}
                  style={styles.ImageBackground_2963_980}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/a2a5/401444e74ab68a9e5a408955a6f04e4b"
                  }}
                  style={styles.ImageBackground_2963_981}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16f3/e3cf/21e72ae0170ca1f17f6c80ace7c8debf"
                  }}
                  style={styles.ImageBackground_2963_982}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8521/9f24/b330a4f2f43dd42010e7ee19f8811a75"
                  }}
                  style={styles.ImageBackground_2963_983}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf6/36d0/c940def15c0b47c546518c13de4c9e2f"
                  }}
                  style={styles.ImageBackground_2963_984}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f8/3cf9/5a844231d18a987b83fd327e34985271"
                  }}
                  style={styles.ImageBackground_2963_985}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da75/c19e/0fe6395fe849b07bb191a46768688258"
                  }}
                  style={styles.ImageBackground_2963_986}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d50/ade5/d8a03c274bf959fba04757445eea4e96"
                  }}
                  style={styles.ImageBackground_2963_987}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a2a/2acf/6938d0fae51294837f57488735288fb3"
                  }}
                  style={styles.ImageBackground_2963_988}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a6/f88d/57a4455549f2c718a3542f8434eec80b"
                  }}
                  style={styles.ImageBackground_2963_989}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed68/5186/79af452f5ec6451ca4d7214d2a3b99ca"
                  }}
                  style={styles.ImageBackground_2963_990}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc55/6532/c66bd90c31f0878911e93213fe80c2e1"
                  }}
                  style={styles.ImageBackground_2963_991}
                />
                <View source={{ uri: "null" }} style={styles.View_2963_992} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d315/e50d/5461578707b7218f2dfc64a1f12d35e5"
                  }}
                  style={styles.ImageBackground_2963_993}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61c2/b2d5/48bb9b828974a8a1b8555e6d1cbbface"
                  }}
                  style={styles.ImageBackground_2963_1005}
                />
              </View>
              <View style={styles.View_2963_1017}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d98/14ff/db5bd0a1fbb5d9dd0005b3060cc9e98d"
                  }}
                  style={styles.ImageBackground_2963_1018}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
                  }}
                  style={styles.ImageBackground_2963_1019}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
                  }}
                  style={styles.ImageBackground_2963_1020}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_1021}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
                  }}
                  style={styles.ImageBackground_2963_1022}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
                  }}
                  style={styles.ImageBackground_2963_1023}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_1024}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_1025}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_1026}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/102e/04de/42863c775dd26f05ee034ae35a30578e"
                  }}
                  style={styles.ImageBackground_2963_1027}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c3/b3ca/e9ba6a3969363d94dda1b444362a492a"
                  }}
                  style={styles.ImageBackground_2963_1028}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_2963_1029}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b33/2d37/683c8c4083e9eb0c17a29bc6b95ed4e5"
                  }}
                  style={styles.ImageBackground_2963_1030}
                />
                <View style={styles.View_2963_1031}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf9/bb25/ee703462535364eb3f10d9304bf92ac2"
                    }}
                    style={styles.ImageBackground_2963_1032}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9956/67ac/d48cbe1499b47176a52ffe72fb153d47"
                    }}
                    style={styles.ImageBackground_2963_1038}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7921/60ef/46b7d846fb6a1cf17e84ef119f49e17c"
                    }}
                    style={styles.ImageBackground_2963_1039}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7921/60ef/46b7d846fb6a1cf17e84ef119f49e17c"
                    }}
                    style={styles.ImageBackground_2963_1040}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_1041}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_1042}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_1043}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                    }}
                    style={styles.ImageBackground_2963_1044}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d8b/3d85/5b9e83297cb5e6d6110da2719a3ddb0c"
                    }}
                    style={styles.ImageBackground_2963_1045}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab2/1c18/009d5291ddd2b43811b7e8fba3126acb"
                    }}
                    style={styles.ImageBackground_2963_1065}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/6e28/518388929d74f61ebe839c4308e56140"
                    }}
                    style={styles.ImageBackground_2963_1066}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c3/b3ca/e9ba6a3969363d94dda1b444362a492a"
                  }}
                  style={styles.ImageBackground_2963_1067}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b65/8b35/91111c249324a4df01f4bcdbdfbed519"
                  }}
                  style={styles.ImageBackground_2963_1068}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad13/7d8b/a040d34a612b7ba747cadee01bb93496"
                  }}
                  style={styles.ImageBackground_2963_1069}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641c/9143/6353b6519a080f3a801667de34601371"
                  }}
                  style={styles.ImageBackground_2963_1070}
                />
              </View>
              <View style={styles.View_2963_1071}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba6/d7f4/6dcbe8442fe6eebe673433a4c9e226e8"
                  }}
                  style={styles.ImageBackground_2963_1072}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8109/9efc/d1e53ae748bef29b67f363bc1c79e449"
                  }}
                  style={styles.ImageBackground_2963_1074}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5449/a232/75629cd64d856820fb94390bd7931665"
                  }}
                  style={styles.ImageBackground_2963_1076}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db40/7e2f/0bd39b2c9842a64232b80e2b1f0a1ca8"
                  }}
                  style={styles.ImageBackground_2963_1078}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0698/0523/062ccf7b09b304e979c7f359322cf33c"
                  }}
                  style={styles.ImageBackground_2963_1080}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2963_1082}>
          <Text style={styles.Text_2963_1082}>Fire Mountain</Text>
        </View>
        <View style={styles.View_2963_1083}>
          <Text style={styles.Text_2963_1083}>
            Amet minim mollit non deserunt est sit.
          </Text>
        </View>
      </View>
      <View style={styles.View_2963_1182}>
        <View style={styles.View_2963_1181}>
          <Text style={styles.Text_2963_1181}>Filters</Text>
        </View>
        <View style={styles.View_2963_1174}>
          <View style={styles.View_2963_1164}>
            <View style={styles.View_I2963_1164_2258_392}>
              <Text style={styles.Text_I2963_1164_2258_392}>mountains</Text>
            </View>
          </View>
          <View style={styles.View_2963_1172}>
            <View style={styles.View_I2963_1172_2258_392}>
              <Text style={styles.Text_I2963_1172_2258_392}>usa</Text>
            </View>
          </View>
          <View style={styles.View_2963_1176}>
            <View style={styles.View_I2963_1176_2258_392}>
              <Text style={styles.Text_I2963_1176_2258_392}>wyoming</Text>
            </View>
          </View>
          <View style={styles.View_2963_1178}>
            <View style={styles.View_I2963_1178_2258_392}>
              <Text style={styles.Text_I2963_1178_2258_392}>2 people</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3137_33702}>
        <View style={styles.View_I3137_33702_2973_4569}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b9c/ceca/e24cb621a05f6fd776bb682ffb9c98dd"
            }}
            style={styles.ImageBackground_I3137_33702_2973_4570}
          />
          <View style={styles.View_I3137_33702_2973_4571}>
            <View style={styles.View_I3137_33702_2973_4571_2780_35323} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e81/7528/af94485b9037bbc251f9166b1d99f2c6"
              }}
              style={styles.ImageBackground_I3137_33702_2973_4571_2780_35324}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9660/ee6a/3b1faadde4f4b975fca288f5905cdb17"
              }}
              style={styles.ImageBackground_I3137_33702_2973_4571_2780_35325}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/131e/afb4/2713d4c4b25679a40d4971825a1c3972"
            }}
            style={styles.ImageBackground_I3137_33702_2973_4572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d7/d1cb/01a4be003817bbd25dcc1218416b4d3c"
            }}
            style={styles.ImageBackground_I3137_33702_2973_4573}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2963_111: {
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
  View_I2963_111_2784_33817: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2963_113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2963_113_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2963_113_2784_33799: {
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
  ImageBackground_I2963_113_2784_33800: {
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
  View_I2963_113_2784_33801: {
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
  ImageBackground_I2963_113_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2963_113_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%"),
    top: hp("2.413390112704918%")
  },
  View_I2963_113_2784_33811: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2963_113_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2963_113_2784_33812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2963_429: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2963_429_2326_1508: {
    flexGrow: 1,
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316919%")
  },
  View_I2963_429_2326_1510: {
    width: wp("12.8%"),
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
  View_I2963_429_2326_1511: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2963_429_2326_1511_2209_12100: {
    flexGrow: 1,
    width: wp("24.9%"),
    height: hp("8.15829918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.07500000000000284%"),
    top: hp("-0.5122950819672116%"),
    resizeMode: "cover"
  },
  View_2963_491: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.661202185792352%")
  },
  Text_2963_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2963_492: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_492_2747_25444: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_492_2747_25446: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%")
  },
  Text_I2963_492_2747_25446: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I2963_492_2747_25521: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("6.8306010928961705%")
  },
  View_2963_509: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_509_2747_25491: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_509_2747_25492: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0%")
  },
  Text_I2963_509_2747_25492: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2963_509_2747_25544: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("6.8306010928961705%")
  },
  View_2963_516: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_516_2747_25491: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.1857923497267713%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2963_516_2747_25492: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  Text_I2963_516_2747_25492: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I2963_516_2747_25544: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("6.8306010928961705%")
  },
  View_2963_789: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("41.939890710382514%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2963_788: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  View_2963_526: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2963_787: {
    width: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2963_527: {
    width: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_528: {
    width: wp("81.27352701822916%"),
    height: hp("26.28912170076631%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2963_529: {
    width: wp("80.01974283854166%"),
    height: hp("18.51987995085169%"),
    top: hp("0.22439591871584952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.671803792317708%")
  },
  ImageBackground_2963_530: {
    width: wp("80.01974283854166%"),
    height: hp("18.51987995085169%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_593: {
    width: wp("73.48624674479166%"),
    height: hp("17.00775896916624%"),
    top: hp("0.5843365778688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2667724609375006%")
  },
  View_2963_656: {
    width: wp("81.2740478515625%"),
    height: hp("24.5948854039927%"),
    top: hp("-4.518602715163929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.191805013020833%")
  },
  View_2963_657: {
    width: wp("81.27352701822916%"),
    height: hp("11.519977173518614%"),
    top: hp("9.728003329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00028686523437482236%")
  },
  ImageBackground_2963_658: {
    width: wp("81.25265299479166%"),
    height: hp("7.494427206737747%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020874023437500888%")
  },
  ImageBackground_2963_659: {
    width: wp("2.938080851236979%"),
    height: hp("2.2431462188887465%"),
    top: hp("2.6780759050546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.328291829427084%")
  },
  ImageBackground_2963_660: {
    width: wp("5.699042256673177%"),
    height: hp("2.2013742415631405%"),
    top: hp("2.6585980191256766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.84027099609375%")
  },
  ImageBackground_2963_661: {
    width: wp("2.672873942057292%"),
    height: hp("2.767398188022968%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.482397460937502%")
  },
  ImageBackground_2963_662: {
    width: wp("3.5697291056315104%"),
    height: hp("2.420324315138853%"),
    top: hp("2.500907189207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.14021199544271%")
  },
  ImageBackground_2963_663: {
    width: wp("4.601167805989583%"),
    height: hp("2.228427324138704%"),
    top: hp("2.499573087431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20121053059896%")
  },
  ImageBackground_2963_664: {
    width: wp("3.326249186197917%"),
    height: hp("2.0361113417995433%"),
    top: hp("3.1796981728142057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.8673807779948%")
  },
  ImageBackground_2963_665: {
    width: wp("1.0147176106770832%"),
    height: hp("0.3771026277802681%"),
    top: hp("3.1796981728142057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.87764282226563%")
  },
  ImageBackground_2963_666: {
    width: wp("6.30411376953125%"),
    height: hp("2.7119141458813614%"),
    top: hp("2.688215078551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.42647908528646%")
  },
  ImageBackground_2963_667: {
    width: wp("1.0049641927083333%"),
    height: hp("0.8888932525134478%"),
    top: hp("2.499573087431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.74526163736979%")
  },
  ImageBackground_2963_668: {
    width: wp("4.137833658854166%"),
    height: hp("1.8738731009061218%"),
    top: hp("2.472357411202182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.680965169270834%")
  },
  ImageBackground_2963_669: {
    width: wp("2.297705078125%"),
    height: hp("2.7000104143319885%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.61291300455729%")
  },
  ImageBackground_2963_670: {
    width: wp("23.938948567708334%"),
    height: hp("7.154657541076993%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.938448079427083%")
  },
  ImageBackground_2963_671: {
    width: wp("3.1280659993489586%"),
    height: hp("1.892163844707885%"),
    top: hp("3.7741739241803245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.2510986328125%")
  },
  ImageBackground_2963_672: {
    width: wp("13.231411743164061%"),
    height: hp("6.949729085619984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.938448079427083%")
  },
  ImageBackground_2963_673: {
    width: wp("81.25266113281249%"),
    height: hp("9.00904650245208%"),
    top: hp("2.511046362704917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_674: {
    width: wp("2.066337076822917%"),
    height: hp("0.7740291741376366%"),
    top: hp("3.7747075648907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.0862040201823%")
  },
  ImageBackground_2963_675: {
    width: wp("1.7496622721354167%"),
    height: hp("1.6014630677270107%"),
    top: hp("4.2016201331967125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8753153483073%")
  },
  ImageBackground_2963_676: {
    width: wp("4.968570963541667%"),
    height: hp("4.267571662944523%"),
    top: hp("3.215985741120221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6441141764323%")
  },
  ImageBackground_2963_677: {
    width: wp("7.724926757812501%"),
    height: hp("3.335604641606899%"),
    top: hp("5.990650614754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.880670166015626%")
  },
  ImageBackground_2963_678: {
    width: wp("0.9839274088541667%"),
    height: hp("0.8376137155001282%"),
    top: hp("4.07995005122951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.41571248372395%")
  },
  ImageBackground_2963_679: {
    width: wp("1.5356404622395834%"),
    height: hp("1.1765662438231088%"),
    top: hp("3.0212068818305937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.81394653320312%")
  },
  ImageBackground_2963_680: {
    width: wp("1.3005859375%"),
    height: hp("0.9639969288977118%"),
    top: hp("3.5676549692622856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.02705688476562%")
  },
  ImageBackground_2963_681: {
    width: wp("1.2005615234375%"),
    height: hp("1.2884603823468985%"),
    top: hp("2.9699773736338813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26293131510416%")
  },
  ImageBackground_2963_682: {
    width: wp("4.593180338541666%"),
    height: hp("5.674960443882343%"),
    top: hp("3.6871904883879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.65831705729166%")
  },
  ImageBackground_2963_683: {
    width: wp("2.4912068684895834%"),
    height: hp("1.3252518867534366%"),
    top: hp("4.575168630464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.110148111979164%")
  },
  ImageBackground_2963_684: {
    width: wp("2.5259989420572917%"),
    height: hp("1.8296966135827568%"),
    top: hp("5.27530524248634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.038867187499996%")
  },
  ImageBackground_2963_685: {
    width: wp("1.503558349609375%"),
    height: hp("1.020323122785391%"),
    top: hp("5.0703872096994544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.25930989583333%")
  },
  ImageBackground_2963_686: {
    width: wp("1.2171946207682292%"),
    height: hp("0.7564815667157616%"),
    top: hp("4.045797045765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.322542317708336%")
  },
  ImageBackground_2963_687: {
    width: wp("4.625202433268229%"),
    height: hp("5.9974816327538%"),
    top: hp("3.3285839310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.077925618489584%")
  },
  ImageBackground_2963_688: {
    width: wp("2.539442443847656%"),
    height: hp("1.6650080029430285%"),
    top: hp("3.4022263490437084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.517281087239585%")
  },
  ImageBackground_2963_689: {
    width: wp("1.8129650115966796%"),
    height: hp("1.3848815459371264%"),
    top: hp("3.379813439207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.803858439127605%")
  },
  ImageBackground_2963_690: {
    width: wp("3.3504638671875004%"),
    height: hp("2.2454100228398226%"),
    top: hp("3.7213434938524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.978731282552083%")
  },
  ImageBackground_2963_691: {
    width: wp("1.0609766642252605%"),
    height: hp("0.9267629821443819%"),
    top: hp("4.2336385758196755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.879559326171876%")
  },
  ImageBackground_2963_692: {
    width: wp("0.7836466471354167%"),
    height: hp("0.7263694304586108%"),
    top: hp("2.747982838114744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5290873209635425%")
  },
  ImageBackground_2963_693: {
    width: wp("1.7386545817057293%"),
    height: hp("2.180769664993703%"),
    top: hp("3.3285839310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020874023437500888%")
  },
  ImageBackground_2963_694: {
    width: wp("3.1829579671223955%"),
    height: hp("2.446491470753821%"),
    top: hp("2.474758794398902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.257240804036458%")
  },
  ImageBackground_2963_695: {
    width: wp("1.097309366861979%"),
    height: hp("0.5610836008207394%"),
    top: hp("4.410006830601084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3778015136718755%")
  },
  ImageBackground_2963_696: {
    width: wp("1.0389200846354167%"),
    height: hp("0.7330420238724172%"),
    top: hp("1.9742038080601034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.562426757812496%")
  },
  View_2963_697: {
    width: wp("1.924945068359375%"),
    height: hp("0.2943362043203552%"),
    top: hp("5.3721610314207595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.454219563802084%")
  },
  ImageBackground_2963_698: {
    width: wp("29.4910888671875%"),
    height: hp("5.2595638837970675%"),
    top: hp("4.248580515710373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_710: {
    width: wp("29.484720865885418%"),
    height: hp("5.113570416559939%"),
    top: hp("4.248580515710373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.788798014322914%")
  },
  View_2963_722: {
    width: wp("81.2740478515625%"),
    height: hp("9.358591590422751%"),
    top: hp("15.236242742486333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_723: {
    width: wp("47.500248209635416%"),
    height: hp("5.53727071793353%"),
    top: hp("1.3829299009562916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_724: {
    width: wp("0.002288818359375%"),
    height: hp("0.0024931026938183063%"),
    top: hp("2.4491440403005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.437241617838541%")
  },
  ImageBackground_2963_725: {
    width: wp("0.001894378662109375%"),
    height: hp("0.0031768298539959013%"),
    top: hp("3.041218408469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.619442749023438%")
  },
  ImageBackground_2963_726: {
    width: wp("0.0023707071940104168%"),
    height: hp("0.004859048812115779%"),
    top: hp("3.4022263490437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.72571818033854%")
  },
  ImageBackground_2963_727: {
    width: wp("0.0041463216145833336%"),
    height: hp("0.005869005547195184%"),
    top: hp("3.652770662568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.147969563802086%")
  },
  ImageBackground_2963_728: {
    width: wp("0.0020263671875%"),
    height: hp("0.0022440008778389685%"),
    top: hp("3.6202185792349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.978922526041664%")
  },
  ImageBackground_2963_729: {
    width: wp("0.0014424641927083333%"),
    height: hp("0.0051456722405438865%"),
    top: hp("4.9065595116120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.642643229166666%")
  },
  ImageBackground_2963_730: {
    width: wp("0.0023661295572916666%"),
    height: hp("0.00456512951460041%"),
    top: hp("4.930840163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.84717610677084%")
  },
  ImageBackground_2963_731: {
    width: wp("0.0019327799479166665%"),
    height: hp("0.004225350468536544%"),
    top: hp("5.034366461748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.92477213541667%")
  },
  ImageBackground_2963_732: {
    width: wp("0.02672017415364583%"),
    height: hp("0.027444974972250687%"),
    top: hp("4.98046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.27789306640625%")
  },
  ImageBackground_2963_733: {
    width: wp("0.0555419921875%"),
    height: hp("0.02867068097891052%"),
    top: hp("4.1914809596994616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.57515055338542%")
  },
  ImageBackground_2963_734: {
    width: wp("0.038956705729166666%"),
    height: hp("0.03214351466444672%"),
    top: hp("5.5768122438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.72212320963542%")
  },
  ImageBackground_2963_735: {
    width: wp("81.23292643229166%"),
    height: hp("6.966843109964673%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0408935546875%")
  },
  View_2963_736: {
    width: wp("3.0387980143229165%"),
    height: hp("4.252491101541154%"),
    top: hp("2.2503628756830594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.771610514322916%")
  },
  ImageBackground_2963_737: {
    width: wp("2.922627766927083%"),
    height: hp("3.294782169529649%"),
    top: hp("0.9576182547814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05365193684895786%")
  },
  ImageBackground_2963_743: {
    width: wp("2.5313395182291667%"),
    height: hp("0.1367704464438183%"),
    top: hp("0.9525486680327901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.253747558593755%")
  },
  ImageBackground_2963_744: {
    width: wp("3.0387980143229165%"),
    height: hp("0.03131282785551144%"),
    top: hp("0.7228163422131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000002034505207859638%")
  },
  ImageBackground_2963_745: {
    width: wp("3.0387980143229165%"),
    height: hp("0.03131282785551144%"),
    top: hp("0.9368062670765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000002034505207859638%")
  },
  ImageBackground_2963_746: {
    width: wp("0.028521728515625%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4117492675781307%")
  },
  ImageBackground_2963_747: {
    width: wp("0.028527832031250002%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.56965738932292%")
  },
  ImageBackground_2963_748: {
    width: wp("0.028527832031250002%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.727604166666673%")
  },
  ImageBackground_2963_749: {
    width: wp("0.028523763020833332%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.88551432291667%")
  },
  ImageBackground_2963_750: {
    width: wp("2.963356526692708%"),
    height: hp("0.1991688879461236%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04263509114583641%")
  },
  ImageBackground_2963_770: {
    width: wp("2.249310302734375%"),
    height: hp("0.5031147941214139%"),
    top: hp("0.43438353825136744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3891540527343764%")
  },
  ImageBackground_2963_771: {
    width: wp("2.863026936848958%"),
    height: hp("0.450071741323002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1284383138020857%")
  },
  ImageBackground_2963_772: {
    width: wp("0.15934855143229168%"),
    height: hp("0.06106225519232412%"),
    top: hp("4.803033213797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.65335286458333%")
  },
  ImageBackground_2963_773: {
    width: wp("81.23331705729167%"),
    height: hp("6.525563933158833%"),
    top: hp("1.83465676229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04049886067708375%")
  },
  ImageBackground_2963_774: {
    width: wp("53.14723307291666%"),
    height: hp("3.6794495712863946%"),
    top: hp("5.679271260245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.10572102864583%")
  },
  ImageBackground_2963_775: {
    width: wp("81.27353515625%"),
    height: hp("7.083626001910434%"),
    top: hp("2.274910348360663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005126953125005329%")
  },
  View_2963_776: {
    width: wp("75.16551920572917%"),
    height: hp("8.39109160209614%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.450225830078125%")
  },
  ImageBackground_2963_777: {
    width: wp("23.311181640625%"),
    height: hp("3.9065058765515603%"),
    top: hp("4.168000768442617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_779: {
    width: wp("11.173787434895834%"),
    height: hp("1.8724950936322655%"),
    top: hp("0.4632001366120164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99173380533854%")
  },
  ImageBackground_2963_781: {
    width: wp("16.952472941080728%"),
    height: hp("2.79872612875016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.525516764322916%")
  },
  ImageBackground_2963_783: {
    width: wp("18.6603515625%"),
    height: hp("3.3110514364607346%"),
    top: hp("5.079992742486333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23562215169271%")
  },
  ImageBackground_2963_785: {
    width: wp("13.54266357421875%"),
    height: hp("2.236708135552745%"),
    top: hp("2.6492593066939847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2659912109375%")
  },
  View_2963_412: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("20.76502732240437%")
  },
  Text_2963_412: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2963_417: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("27.32240437158471%")
  },
  Text_2963_417: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2963_818: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("41.939890710382514%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2963_819: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726775%")
  },
  View_2963_820: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2963_821: {
    width: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2963_822: {
    width: wp("44.800000000000004%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_823: {
    width: wp("81.27352701822916%"),
    height: hp("26.28912170076631%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2963_824: {
    width: wp("80.01974283854166%"),
    height: hp("18.51987995085169%"),
    top: hp("0.22439591871584952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6718017578124957%")
  },
  ImageBackground_2963_825: {
    width: wp("80.01974283854166%"),
    height: hp("18.51987995085169%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_888: {
    width: wp("73.48624674479166%"),
    height: hp("17.00775896916624%"),
    top: hp("0.5843365778688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.266772460937503%")
  },
  View_2963_951: {
    width: wp("81.2740478515625%"),
    height: hp("24.5948854039927%"),
    top: hp("-4.518602715163929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.191805013020833%")
  },
  View_2963_952: {
    width: wp("81.27352701822916%"),
    height: hp("11.519977173518614%"),
    top: hp("9.728003329918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0002848307291642982%")
  },
  ImageBackground_2963_953: {
    width: wp("81.25265299479166%"),
    height: hp("7.494427206737747%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0208740234375%")
  },
  ImageBackground_2963_954: {
    width: wp("2.938080851236979%"),
    height: hp("2.2431462188887465%"),
    top: hp("2.6780759050546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.32829182942708%")
  },
  ImageBackground_2963_955: {
    width: wp("5.699042256673177%"),
    height: hp("2.2013742415631405%"),
    top: hp("2.6585980191256766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.84027099609375%")
  },
  ImageBackground_2963_956: {
    width: wp("2.672873942057292%"),
    height: hp("2.767398188022968%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.482397460937506%")
  },
  ImageBackground_2963_957: {
    width: wp("3.5697291056315104%"),
    height: hp("2.420324315138853%"),
    top: hp("2.500907189207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.140209960937497%")
  },
  ImageBackground_2963_958: {
    width: wp("4.601167805989583%"),
    height: hp("2.228427324138704%"),
    top: hp("2.499573087431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20121256510416%")
  },
  ImageBackground_2963_959: {
    width: wp("3.326249186197917%"),
    height: hp("2.0361113417995433%"),
    top: hp("3.1796981728142057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.8673828125%")
  },
  ImageBackground_2963_960: {
    width: wp("1.0147176106770832%"),
    height: hp("0.3771026277802681%"),
    top: hp("3.1796981728142057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.87764485677083%")
  },
  ImageBackground_2963_961: {
    width: wp("6.30411376953125%"),
    height: hp("2.7119141458813614%"),
    top: hp("2.688215078551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.42648111979166%")
  },
  ImageBackground_2963_962: {
    width: wp("1.0049641927083333%"),
    height: hp("0.8888932525134478%"),
    top: hp("2.499573087431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.745263671874994%")
  },
  ImageBackground_2963_963: {
    width: wp("4.137833658854166%"),
    height: hp("1.8738731009061218%"),
    top: hp("2.472357411202182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.680965169270834%")
  },
  ImageBackground_2963_964: {
    width: wp("2.297705078125%"),
    height: hp("2.7000104143319885%"),
    top: hp("1.8317217383879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.6129150390625%")
  },
  ImageBackground_2963_965: {
    width: wp("23.938948567708334%"),
    height: hp("7.154657541076993%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.93844807942709%")
  },
  ImageBackground_2963_966: {
    width: wp("3.1280659993489586%"),
    height: hp("1.892163844707885%"),
    top: hp("3.7741739241803245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.2510986328125%")
  },
  ImageBackground_2963_967: {
    width: wp("13.231411743164061%"),
    height: hp("6.949729085619984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.93844807942709%")
  },
  ImageBackground_2963_968: {
    width: wp("81.25266113281249%"),
    height: hp("9.00904650245208%"),
    top: hp("2.511046362704917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_969: {
    width: wp("2.066337076822917%"),
    height: hp("0.7740291741376366%"),
    top: hp("3.7747075648907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.08620605468751%")
  },
  ImageBackground_2963_970: {
    width: wp("1.7496622721354167%"),
    height: hp("1.6014630677270107%"),
    top: hp("4.2016201331967125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.87531738281251%")
  },
  ImageBackground_2963_971: {
    width: wp("4.968570963541667%"),
    height: hp("4.267571662944523%"),
    top: hp("3.215985741120221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6441162109375%")
  },
  ImageBackground_2963_972: {
    width: wp("7.724926757812501%"),
    height: hp("3.335604641606899%"),
    top: hp("5.990650614754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.880672200520834%")
  },
  ImageBackground_2963_973: {
    width: wp("0.9839274088541667%"),
    height: hp("0.8376137155001282%"),
    top: hp("4.07995005122951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.415714518229166%")
  },
  ImageBackground_2963_974: {
    width: wp("1.5356404622395834%"),
    height: hp("1.1765662438231088%"),
    top: hp("3.0212068818305937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.81394856770832%")
  },
  ImageBackground_2963_975: {
    width: wp("1.3005859375%"),
    height: hp("0.9639969288977118%"),
    top: hp("3.5676549692622856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.02705891927083%")
  },
  ImageBackground_2963_976: {
    width: wp("1.2005615234375%"),
    height: hp("1.2884603823468985%"),
    top: hp("2.9699773736338813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26293131510417%")
  },
  ImageBackground_2963_977: {
    width: wp("4.593180338541666%"),
    height: hp("5.674960443882343%"),
    top: hp("3.6871904883879765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.65831705729167%")
  },
  ImageBackground_2963_978: {
    width: wp("2.4912068684895834%"),
    height: hp("1.3252518867534366%"),
    top: hp("4.575168630464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.11014811197917%")
  },
  ImageBackground_2963_979: {
    width: wp("2.5259989420572917%"),
    height: hp("1.8296966135827568%"),
    top: hp("5.27530524248634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.0388671875%")
  },
  ImageBackground_2963_980: {
    width: wp("1.503558349609375%"),
    height: hp("1.020323122785391%"),
    top: hp("5.0703872096994544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.25930989583334%")
  },
  ImageBackground_2963_981: {
    width: wp("1.2171946207682292%"),
    height: hp("0.7564815667157616%"),
    top: hp("4.045797045765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.32254231770834%")
  },
  ImageBackground_2963_982: {
    width: wp("4.625202433268229%"),
    height: hp("5.9974816327538%"),
    top: hp("3.3285839310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.077925618489587%")
  },
  ImageBackground_2963_983: {
    width: wp("2.539442443847656%"),
    height: hp("1.6650080029430285%"),
    top: hp("3.4022263490437084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.51728108723958%")
  },
  ImageBackground_2963_984: {
    width: wp("1.8129650115966796%"),
    height: hp("1.3848815459371264%"),
    top: hp("3.379813439207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.80385742187501%")
  },
  ImageBackground_2963_985: {
    width: wp("3.3504638671875004%"),
    height: hp("2.2454100228398226%"),
    top: hp("3.7213434938524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.978731282552083%")
  },
  ImageBackground_2963_986: {
    width: wp("1.0609766642252605%"),
    height: hp("0.9267629821443819%"),
    top: hp("4.2336385758196755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.879557291666664%")
  },
  ImageBackground_2963_987: {
    width: wp("0.7836466471354167%"),
    height: hp("0.7263694304586108%"),
    top: hp("2.747982838114744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.52908528645834%")
  },
  ImageBackground_2963_988: {
    width: wp("1.7386545817057293%"),
    height: hp("2.180769664993703%"),
    top: hp("3.3285839310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0208740234375%")
  },
  ImageBackground_2963_989: {
    width: wp("3.1829579671223955%"),
    height: hp("2.446491470753821%"),
    top: hp("2.474758794398902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2572428385416643%")
  },
  ImageBackground_2963_990: {
    width: wp("1.097309366861979%"),
    height: hp("0.5610836008207394%"),
    top: hp("4.410006830601084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.377799479166669%")
  },
  ImageBackground_2963_991: {
    width: wp("1.0389200846354167%"),
    height: hp("0.7330420238724172%"),
    top: hp("1.9742038080601034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.5624267578125%")
  },
  View_2963_992: {
    width: wp("1.924945068359375%"),
    height: hp("0.2943362043203552%"),
    top: hp("5.3721610314207595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.45421549479167%")
  },
  ImageBackground_2963_993: {
    width: wp("29.4910888671875%"),
    height: hp("5.2595638837970675%"),
    top: hp("4.248580515710373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1005: {
    width: wp("29.484720865885418%"),
    height: hp("5.113570416559939%"),
    top: hp("4.248580515710373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.78880208333334%")
  },
  View_2963_1017: {
    width: wp("81.2740478515625%"),
    height: hp("9.358591590422751%"),
    top: hp("15.236242742486333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1018: {
    width: wp("47.500248209635416%"),
    height: hp("5.53727071793353%"),
    top: hp("1.3829299009562916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1019: {
    width: wp("0.002288818359375%"),
    height: hp("0.0024931026938183063%"),
    top: hp("2.4491440403005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.43723958333333%")
  },
  ImageBackground_2963_1020: {
    width: wp("0.001894378662109375%"),
    height: hp("0.0031768298539959013%"),
    top: hp("3.041218408469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.619441731770827%")
  },
  ImageBackground_2963_1021: {
    width: wp("0.0023707071940104168%"),
    height: hp("0.004859048812115779%"),
    top: hp("3.4022263490437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.72571614583334%")
  },
  ImageBackground_2963_1022: {
    width: wp("0.0041463216145833336%"),
    height: hp("0.005869005547195184%"),
    top: hp("3.652770662568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.147969563802086%")
  },
  ImageBackground_2963_1023: {
    width: wp("0.0020263671875%"),
    height: hp("0.0022440008778389685%"),
    top: hp("3.6202185792349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.978922526041664%")
  },
  ImageBackground_2963_1024: {
    width: wp("0.0014424641927083333%"),
    height: hp("0.0051456722405438865%"),
    top: hp("4.9065595116120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64264322916667%")
  },
  ImageBackground_2963_1025: {
    width: wp("0.0023661295572916666%"),
    height: hp("0.00456512951460041%"),
    top: hp("4.930840163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.847176106770824%")
  },
  ImageBackground_2963_1026: {
    width: wp("0.0019327799479166665%"),
    height: hp("0.004225350468536544%"),
    top: hp("5.034366461748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.92477213541667%")
  },
  ImageBackground_2963_1027: {
    width: wp("0.02672017415364583%"),
    height: hp("0.027444974972250687%"),
    top: hp("4.98046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.277893066406257%")
  },
  ImageBackground_2963_1028: {
    width: wp("0.0555419921875%"),
    height: hp("0.02867068097891052%"),
    top: hp("4.1914809596994616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.575154622395836%")
  },
  ImageBackground_2963_1029: {
    width: wp("0.038956705729166666%"),
    height: hp("0.03214351466444672%"),
    top: hp("5.5768122438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.722127278645836%")
  },
  ImageBackground_2963_1030: {
    width: wp("81.23292643229166%"),
    height: hp("6.966843109964673%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0408935546875%")
  },
  View_2963_1031: {
    width: wp("3.0387980143229165%"),
    height: hp("4.252491101541154%"),
    top: hp("2.2503628756830594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.77160644531249%")
  },
  ImageBackground_2963_1032: {
    width: wp("2.922627766927083%"),
    height: hp("3.294782169529649%"),
    top: hp("0.9576182547814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05365397135417993%")
  },
  ImageBackground_2963_1038: {
    width: wp("2.5313395182291667%"),
    height: hp("0.1367704464438183%"),
    top: hp("0.9525486680327901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2537434895833428%")
  },
  ImageBackground_2963_1039: {
    width: wp("3.0387980143229165%"),
    height: hp("0.03131282785551144%"),
    top: hp("0.7228163422131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1040: {
    width: wp("3.0387980143229165%"),
    height: hp("0.03131282785551144%"),
    top: hp("0.9368062670765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1041: {
    width: wp("0.028521728515625%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4117513020833314%")
  },
  ImageBackground_2963_1042: {
    width: wp("0.028527832031250002%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569661458333343%")
  },
  ImageBackground_2963_1043: {
    width: wp("0.028527832031250002%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7276041666666657%")
  },
  ImageBackground_2963_1044: {
    width: wp("0.028523763020833332%"),
    height: hp("0.19851330199528264%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.885514322916677%")
  },
  ImageBackground_2963_1045: {
    width: wp("2.963356526692708%"),
    height: hp("0.1991688879461236%"),
    top: hp("0.7382919228142129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.042635091145839965%")
  },
  ImageBackground_2963_1065: {
    width: wp("2.249310302734375%"),
    height: hp("0.5031147941214139%"),
    top: hp("0.43438353825136744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38915201822916856%")
  },
  ImageBackground_2963_1066: {
    width: wp("2.863026936848958%"),
    height: hp("0.450071741323002%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12843424479166288%")
  },
  ImageBackground_2963_1067: {
    width: wp("0.15934855143229168%"),
    height: hp("0.06106225519232412%"),
    top: hp("4.803033213797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.65335286458333%")
  },
  ImageBackground_2963_1068: {
    width: wp("81.23331705729167%"),
    height: hp("6.525563933158833%"),
    top: hp("1.83465676229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04049886067708286%")
  },
  ImageBackground_2963_1069: {
    width: wp("53.14723307291666%"),
    height: hp("3.6794495712863946%"),
    top: hp("5.679271260245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.10572102864584%")
  },
  ImageBackground_2963_1070: {
    width: wp("81.27353515625%"),
    height: hp("7.083626001910434%"),
    top: hp("2.274910348360663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005126953125014211%")
  },
  View_2963_1071: {
    width: wp("75.16551920572917%"),
    height: hp("8.39109160209614%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.450227864583333%")
  },
  ImageBackground_2963_1072: {
    width: wp("23.311181640625%"),
    height: hp("3.9065058765515603%"),
    top: hp("4.168000768442617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_1074: {
    width: wp("11.173787434895834%"),
    height: hp("1.8724950936322655%"),
    top: hp("0.4632001366120164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.991731770833326%")
  },
  ImageBackground_2963_1076: {
    width: wp("16.952472941080728%"),
    height: hp("2.79872612875016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.525516764322916%")
  },
  ImageBackground_2963_1078: {
    width: wp("18.6603515625%"),
    height: hp("3.3110514364607346%"),
    top: hp("5.079992742486333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.235620117187494%")
  },
  ImageBackground_2963_1080: {
    width: wp("13.54266357421875%"),
    height: hp("2.236708135552745%"),
    top: hp("2.6492593066939847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2659912109375%")
  },
  View_2963_1082: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("20.76502732240437%")
  },
  Text_2963_1082: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2963_1083: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("27.32240437158471%")
  },
  Text_2963_1083: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2963_1182: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("84.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2963_1181: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2963_1181: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2963_1174: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2963_1164: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I2963_1164_2258_392: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.6830601092896131%")
  },
  Text_I2963_1164_2258_392: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2963_1172: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I2963_1172_2258_392: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.6830601092896131%")
  },
  Text_I2963_1172_2258_392: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2963_1176: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I2963_1176_2258_392: {
    flexGrow: 1,
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.6830601092896131%")
  },
  Text_I2963_1176_2258_392: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2963_1178: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I2963_1178_2258_392: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.6830601092896131%")
  },
  Text_I2963_1178_2258_392: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_3137_33702: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3137_33702_2973_4569: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3137_33702_2973_4570: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3137_33702_2973_4571: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3137_33702_2973_4571_2780_35323: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("1.3661202185792263%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_I3137_33702_2973_4571_2780_35324: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.7513661202185773%")
  },
  ImageBackground_I3137_33702_2973_4571_2780_35325: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("0.47814207650273227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I3137_33702_2973_4572: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666667%")
  },
  ImageBackground_I3137_33702_2973_4573: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
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
