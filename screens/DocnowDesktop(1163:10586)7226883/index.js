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
      <View style={styles.View_1164_9926}>
        <Text style={styles.Text_1164_9926}>DocNow</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8467/8131/3956df9ee823a381ab33c106979bcd56"
        }}
        style={styles.ImageBackground_1164_9927}
      />
      <View style={styles.View_1164_9930} />
      <View style={styles.View_1164_9956}>
        <Text style={styles.Text_1164_9956}>Hi There!</Text>
      </View>
      <View style={styles.View_1164_9949}>
        <Text style={styles.Text_1164_9949}>Login with FaceId</Text>
      </View>
      <View style={styles.View_1164_9957}>
        <Text style={styles.Text_1164_9957}>Problems with login?</Text>
      </View>
      <View style={styles.View_1164_9931}>
        <View style={styles.View_I1164_9931_322_1358}>
          <View style={styles.View_I1164_9931_322_1360}>
            <Text style={styles.Text_I1164_9931_322_1360}>
              Username or Email
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_9943}>
        <View style={styles.View_I1164_9943_322_1358}>
          <View style={styles.View_I1164_9943_322_1360}>
            <Text style={styles.Text_I1164_9943_322_1360}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1164_9953}>
        <View style={styles.View_I1164_9953_18_155} />
        <View style={styles.View_I1164_9953_18_156} />
      </View>
      <View style={styles.View_1164_9959}>
        <View style={styles.View_I1164_9959_952_204}>
          <View style={styles.View_I1164_9959_952_204_939_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a538/7851/a7f5f3318101151ac25906f5437b82a9"
              }}
              style={styles.ImageBackground_I1164_9959_952_204_939_324}
            />
            <View style={styles.View_I1164_9959_952_204_939_325}>
              <Text style={styles.Text_I1164_9959_952_204_939_325}>Login</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebf/9b18/05c955139940dd5f768f4f48daa0bcd8"
            }}
            style={styles.ImageBackground_I1164_9959_952_204_938_3903}
          />
        </View>
      </View>
      <View style={styles.View_1164_10097}>
        <Text style={styles.Text_1164_10097}>Create an account?</Text>
      </View>
      <View style={styles.View_1213_11698}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/805a/5234/c69df89f2f0a5a42e7b6f8ff78d719d7"
          }}
          style={styles.ImageBackground_1213_11699}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd71/457c/fc2a4cc9b99422c987fc3f1124fb9179"
          }}
          style={styles.ImageBackground_1213_11700}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9519/6a85/cb6b14e8706ce1c504cdbeaf21366cb9"
          }}
          style={styles.ImageBackground_1213_11701}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daf3/501d/98803861afc9da6aa8775e1800ed3466"
          }}
          style={styles.ImageBackground_1213_11702}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78b2/88d6/705a9a41945f880a35dbe6356d04558b"
          }}
          style={styles.ImageBackground_1213_11703}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/805a/5234/c69df89f2f0a5a42e7b6f8ff78d719d7"
          }}
          style={styles.ImageBackground_1213_11704}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a0f/c085/cbc96dcec06c78ffa067205dc4b54f03"
          }}
          style={styles.ImageBackground_1213_11705}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e24/c776/de78fdf20349022885b21f77507a6ae1"
          }}
          style={styles.ImageBackground_1213_11706}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c085/22eb/0c0f88dfdee8619e721877479b203f55"
          }}
          style={styles.ImageBackground_1213_11707}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e73/48f3/82277c2ed1181f25df98e2773f9e1bce"
          }}
          style={styles.ImageBackground_1213_11708}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c12/f656/b3377a7fa69daa22685d688ac49b2f32"
          }}
          style={styles.ImageBackground_1213_11709}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a8/8988/02662c73963e2adfd2d2d4cb2e30325a"
          }}
          style={styles.ImageBackground_1213_11710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31bc/4a9e/121f5a1e4d57a2940a638158f0089212"
          }}
          style={styles.ImageBackground_1213_11711}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f9/a70c/f97491c41b893b77affc9a6387684dda"
          }}
          style={styles.ImageBackground_1213_11712}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d45a/651b/d08f359c777e4849ccb0097b19b4dd07"
          }}
          style={styles.ImageBackground_1213_11713}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eda/4063/aea241aded0d6579dcc2c5ad7bb4094a"
          }}
          style={styles.ImageBackground_1213_11714}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd21/d9f9/bda78bd35e7f2cb580d8602a26f03941"
          }}
          style={styles.ImageBackground_1213_11715}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d35/35b7/0f8e936f6fd7f7bb098dedd32763b2ec"
          }}
          style={styles.ImageBackground_1213_11716}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a214/f411/05ec349116f2035d58af725d316d35d7"
          }}
          style={styles.ImageBackground_1213_11717}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/802c/0758/afa81ad156a02986c106eb86f3fbc03f"
          }}
          style={styles.ImageBackground_1213_11718}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d35/35b7/0f8e936f6fd7f7bb098dedd32763b2ec"
          }}
          style={styles.ImageBackground_1213_11719}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d35/35b7/0f8e936f6fd7f7bb098dedd32763b2ec"
          }}
          style={styles.ImageBackground_1213_11720}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d35/35b7/0f8e936f6fd7f7bb098dedd32763b2ec"
          }}
          style={styles.ImageBackground_1213_11721}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4923/2821/2425be98495cc05ac2da232fdf68a6f2"
          }}
          style={styles.ImageBackground_1213_11722}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ecd/6e39/4081ac6a4457dc83ca53d0a1289c9592"
          }}
          style={styles.ImageBackground_1213_11723}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca2c/03df/daf3acd5b62004f8074a6ec2a1ce93c9"
          }}
          style={styles.ImageBackground_1213_11724}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dae/1816/224794c3bbccad65886b32733b566a10"
          }}
          style={styles.ImageBackground_1213_11725}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1414/c2af/3401980c84da3ceb9ee76b7898b68834"
          }}
          style={styles.ImageBackground_1213_11726}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31fc/e41c/1d6de46c58db19cf83d053b3357c78cc"
          }}
          style={styles.ImageBackground_1213_11727}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11728}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11730}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11731}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11733}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11734}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11735}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11736}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11737}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11738}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11739}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11740}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11741}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11742}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf10/7a0f/46e433967c7e2c3e534f182c825701ba"
          }}
          style={styles.ImageBackground_1213_11743}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/416e/9de0/a115633f25e8e1697769206fb59c256e"
          }}
          style={styles.ImageBackground_1213_11744}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/af34/14d0595417dae05a8772ba68815091b0"
          }}
          style={styles.ImageBackground_1213_11745}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/af34/14d0595417dae05a8772ba68815091b0"
          }}
          style={styles.ImageBackground_1213_11746}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/af34/14d0595417dae05a8772ba68815091b0"
          }}
          style={styles.ImageBackground_1213_11747}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/af34/14d0595417dae05a8772ba68815091b0"
          }}
          style={styles.ImageBackground_1213_11748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b014/80d8/f74af60bccdd625d94290c1e43feb428"
          }}
          style={styles.ImageBackground_1213_11749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2bf/06d9/c74b21f909bf1618b4a5b0a57d04d131"
          }}
          style={styles.ImageBackground_1213_11750}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c54e/fe59/288b9522ffa3fa6179b626b1a3a14890"
          }}
          style={styles.ImageBackground_1213_11751}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e18/3d00/262f289754e396f6e40ca18f7b423c40"
          }}
          style={styles.ImageBackground_1213_11752}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6526/8056/25b9ff8d311baf8c5048a48a9ac0194a"
          }}
          style={styles.ImageBackground_1213_11753}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6526/8056/25b9ff8d311baf8c5048a48a9ac0194a"
          }}
          style={styles.ImageBackground_1213_11754}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65ab/7032/4df8c02dc1d685b994935a24fe1e9412"
          }}
          style={styles.ImageBackground_1213_11755}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd5d/1674/31efca64d79a4bce1265f71254a4ef90"
          }}
          style={styles.ImageBackground_1213_11756}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c174/020c/585608ccc6782946cb2f4f804c5dd4ab"
          }}
          style={styles.ImageBackground_1213_11757}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/344c/a381/25e53d4c16c64c95cecca04820f44d98"
          }}
          style={styles.ImageBackground_1213_11758}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df9/3655/c2d88f1870568bc8589b8d8e2b34820f"
          }}
          style={styles.ImageBackground_1213_11759}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af6/f376/79907f51039c734637e271a2a61f8e0b"
          }}
          style={styles.ImageBackground_1213_11760}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ad4/4606/3153fd13c90837c249deb56c926f1eed"
          }}
          style={styles.ImageBackground_1213_11761}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f4/90c8/6943998aeedb7e73252e9a7837f63e66"
          }}
          style={styles.ImageBackground_1213_11762}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd22/313b/783a0ecb4ff721264c361825fa166486"
          }}
          style={styles.ImageBackground_1213_11763}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6efc/fb30/a9dc151c8d2fe8d9e2cf31e40fbb2897"
          }}
          style={styles.ImageBackground_1213_11764}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2890/972f/ab6a1ecd37d2d2b6350c4149a2324c6c"
          }}
          style={styles.ImageBackground_1213_11765}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eddd/056e/9dedb8586096e3f876df59fb7231eaff"
          }}
          style={styles.ImageBackground_1213_11766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec70/0cb5/a61864cb5c5a743fdff7812e94928b54"
          }}
          style={styles.ImageBackground_1213_11767}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c2/46cf/b33234623c852a875131c35db15be4ad"
          }}
          style={styles.ImageBackground_1213_11768}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b98/4258/edcca36d0f4cadaed7efd63567819f83"
          }}
          style={styles.ImageBackground_1213_11772}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2418/4c18/41fb68249d5eb47aac0e7394688a1ac9"
          }}
          style={styles.ImageBackground_1213_11773}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b7/6029/0969fba1d497b72dad0fcf4e490ed0de"
          }}
          style={styles.ImageBackground_1213_11774}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a93/5cfe/f6aba1271ad9a816854b473ba6a018e0"
          }}
          style={styles.ImageBackground_1213_11775}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/145e/435a465fe8b20ccdd42e65e05ce430a6"
          }}
          style={styles.ImageBackground_1213_11776}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f600/6ce0/fca0f22a9be495b2512a51e9a237e0ef"
          }}
          style={styles.ImageBackground_1213_11777}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8c/d099/65d0fcdb3cbdfe78e5d936ab3cf2bae1"
          }}
          style={styles.ImageBackground_1213_11778}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2445/03b5/bc87bccdab2566e6229db5322daacc7e"
          }}
          style={styles.ImageBackground_1213_11779}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22cb/ef01/f9bb7b28c14908857605079185951015"
          }}
          style={styles.ImageBackground_1213_11780}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fceb/20e5/21d7f430ac97b1950621c217b95bc449"
          }}
          style={styles.ImageBackground_1213_11781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e32/4ecb/5669793e69ef09b7c56f3b51ff83d56d"
          }}
          style={styles.ImageBackground_1213_11782}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f22/7ac4/0075241678db82e2f9b8fb82d7635f39"
          }}
          style={styles.ImageBackground_1213_11783}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19af/49c4/e704b3d8462eb0f49f154649025a1a28"
          }}
          style={styles.ImageBackground_1213_11784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33c/1d59/7c7a95cf2ba11b404bf3dabdf0a4a562"
          }}
          style={styles.ImageBackground_1213_11785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a75b/96b3/6d6f9d6e38703b253a091a36490db754"
          }}
          style={styles.ImageBackground_1213_11786}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dab9/c021/a825caebb5037ecd1374d14814d4ecec"
          }}
          style={styles.ImageBackground_1213_11787}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78d/1cba/838a6b02b64100e24ae1e11daf9a30f5"
          }}
          style={styles.ImageBackground_1213_11788}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e181/3c8e/719a89bd7a52ec4c639498e9f03b5ffa"
          }}
          style={styles.ImageBackground_1213_11789}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d8/f837/55f8c80006f17e054e60f8349a4b4bc4"
          }}
          style={styles.ImageBackground_1213_11790}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/161c/20f4/5135777b35f0da6a213323be0a0b5a15"
          }}
          style={styles.ImageBackground_1213_11791}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516d/0c1e/971a784d5d1a7daf3044bc947b40ee62"
          }}
          style={styles.ImageBackground_1213_11792}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e519/3d3c/95b07e045d175a01dd471813cb1588b6"
          }}
          style={styles.ImageBackground_1213_11793}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed5/9ea0/546700a085aa26a4c2b0af79737e7ec6"
          }}
          style={styles.ImageBackground_1213_11794}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9743/7353/645a1eeb8d604deda1a7b621754f7733"
          }}
          style={styles.ImageBackground_1213_11795}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d81f/a699/a30896ac60e943f653845e68cc0391aa"
          }}
          style={styles.ImageBackground_1213_11796}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc46/97ec/732c2494930f834472384be25d638143"
          }}
          style={styles.ImageBackground_1213_11797}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a12/a680/f49d1c408b54a3f726bd3d7631eb4d9b"
          }}
          style={styles.ImageBackground_1213_11798}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e20/af2d/9b48ef9dfaf27824f6c5b323a26c74a8"
          }}
          style={styles.ImageBackground_1213_11799}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1c1/1a46/14407a446c9e90779725f8d6dd2fc7f8"
          }}
          style={styles.ImageBackground_1213_11800}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d43/4ac5/673bf0d3fd9aad899bfe41ac9943ab53"
          }}
          style={styles.ImageBackground_1213_11805}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c48e/2549/029cf5ef5e8d47857446c05ad7767ad6"
          }}
          style={styles.ImageBackground_1213_11806}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec3/b38f/32e5963f805dff72fa6b9d0499b437e8"
          }}
          style={styles.ImageBackground_1213_11807}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f42/74a8/02a53b9974abd906137e20980174a08f"
          }}
          style={styles.ImageBackground_1213_11808}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9fb/4b7f/ea213bdf463175a6cce1b76b8b79623f"
          }}
          style={styles.ImageBackground_1213_11809}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d49f/7a05/b444895004517469e44786f6992564fb"
          }}
          style={styles.ImageBackground_1213_11810}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da3e/fc27/a46ed54c155725f7a62a212650c865e6"
          }}
          style={styles.ImageBackground_1213_11811}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18b5/42f2/4671dd6f72774ff9f0bc880b0de6cc3c"
          }}
          style={styles.ImageBackground_1213_11812}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9093/c202/f54663be78dd3606a8829944feb63601"
          }}
          style={styles.ImageBackground_1213_11813}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb4/c943/03fcfaf7dca3c26056b73a1df8bd3cf6"
          }}
          style={styles.ImageBackground_1213_11814}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a053/e604/34a3a5111ba732c1af62bdefaaaf423f"
          }}
          style={styles.ImageBackground_1213_11815}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3b8/8b06/47721253fde2e0478c05df98c743b026"
          }}
          style={styles.ImageBackground_1213_11816}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea86/7278/d59411b51333d0736738c4d3fbb2bd46"
          }}
          style={styles.ImageBackground_1213_11817}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74b8/c6ec/31a40ac65bd61e7cac3743e29f6fdbf0"
          }}
          style={styles.ImageBackground_1213_11818}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a883/79dc/414af1c35fa0a409017c8fc9c4f1b4a9"
          }}
          style={styles.ImageBackground_1213_11819}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b22/1736/2d215a7ab94c36ef0c138004a89006f1"
          }}
          style={styles.ImageBackground_1213_11820}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/421c/bb3c/5d1f67929edc1345159444f3d100d429"
          }}
          style={styles.ImageBackground_1213_11821}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f733/109f/d5ab2996b5cdc27361c63a6565c8b112"
          }}
          style={styles.ImageBackground_1213_11822}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f69/7cdf/52fd719c44f4f179744335f948a43dad"
          }}
          style={styles.ImageBackground_1213_11823}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6824/90e3/ad5d39c4de6491f221f2419c3df08054"
          }}
          style={styles.ImageBackground_1213_11824}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/526d/c201/c313bbcd3789288222090378bd2816d8"
          }}
          style={styles.ImageBackground_1213_11825}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31dc/cbe3/aaaea2302ea8ff1e43eb9eb4f4036456"
          }}
          style={styles.ImageBackground_1213_11826}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db2/f4df/2d105e3bdcc639aca7ee0280e6345e94"
          }}
          style={styles.ImageBackground_1213_11827}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5a0/b7b5/4a3aed17a35416e300a8b7004caf7893"
          }}
          style={styles.ImageBackground_1213_11828}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb54/171f/bb0d5da74c2a2d6c4e849dff77bd1c4e"
          }}
          style={styles.ImageBackground_1213_11829}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad4/e96e/cbdc9aa44c45c82119f9cdcbfb50c645"
          }}
          style={styles.ImageBackground_1213_11830}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/497e/ef25/152b9e2025503f830125a1b7c3a3ad52"
          }}
          style={styles.ImageBackground_1213_11831}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa5/0851/83d39276e29951a8b792cb5a822bd260"
          }}
          style={styles.ImageBackground_1213_11832}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/497e/ef25/152b9e2025503f830125a1b7c3a3ad52"
          }}
          style={styles.ImageBackground_1213_11833}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa5/0851/83d39276e29951a8b792cb5a822bd260"
          }}
          style={styles.ImageBackground_1213_11834}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/497e/ef25/152b9e2025503f830125a1b7c3a3ad52"
          }}
          style={styles.ImageBackground_1213_11835}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa5/0851/83d39276e29951a8b792cb5a822bd260"
          }}
          style={styles.ImageBackground_1213_11836}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/cb43/3c75fcc98df5a7f05a99ec9566b87e02"
          }}
          style={styles.ImageBackground_1213_11837}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/045a/97d0/c0fb6d5d6af969dd2ca8acdf68921082"
          }}
          style={styles.ImageBackground_1213_11838}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea43/1fcb/5d1714bc8a6e8bb3927cf124a99265b3"
          }}
          style={styles.ImageBackground_1213_11839}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e07/ba30/ab4198eb02e1b73350c61edb877d5229"
          }}
          style={styles.ImageBackground_1213_11840}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a5/faf0/1b345390c3eeeff8aba13a31daf91006"
          }}
          style={styles.ImageBackground_1213_11841}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a4/ae6a/f4090a3937eb635a5f4bbede5f5c1e75"
          }}
          style={styles.ImageBackground_1213_11842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dd8/470d/b61a60f9917242c1b2dfb02483e195f8"
          }}
          style={styles.ImageBackground_1213_11843}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b4f/53d0/20fbce60601f3803f7b0e89d274ccda3"
          }}
          style={styles.ImageBackground_1213_11844}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb4/501e/b9f325df4a7ec144a94b953abc993918"
          }}
          style={styles.ImageBackground_1213_11845}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f9/ee09/d04fbd83eea30dfa9ffd62f7a29aa712"
          }}
          style={styles.ImageBackground_1213_11846}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/bc13/036b05d69cee5ff56f8f0d0e832019d9"
          }}
          style={styles.ImageBackground_1213_11847}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ae/eb8d/b6db8ed859fa8c8ce82b83deee662041"
          }}
          style={styles.ImageBackground_1213_11848}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c39/51d8/8a6c5d717fddeac255d875d115a14d58"
          }}
          style={styles.ImageBackground_1213_11849}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/e920/9f9e7c63bffc8d213367d4a28162412c"
          }}
          style={styles.ImageBackground_1213_11850}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccc/9375/5ee4367b0e1dd0a20adbc12a6c9c2a24"
          }}
          style={styles.ImageBackground_1213_11851}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3c4/6499/a5772f9ad3be23a5a3bcd9c472919619"
          }}
          style={styles.ImageBackground_1213_11852}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6526/8056/25b9ff8d311baf8c5048a48a9ac0194a"
          }}
          style={styles.ImageBackground_1213_11856}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7695/ea2d/20d4b2377c0a065445a5c3a87fb26a5f"
          }}
          style={styles.ImageBackground_1213_11857}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84fd/c260/5ddf9f3ed74026a5a766760d3cb38c2c"
          }}
          style={styles.ImageBackground_1213_11858}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f9b/5c21/7a1c9ed42d4e69dd8a01f83cf5a2ce73"
          }}
          style={styles.ImageBackground_1213_11859}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f9b/5c21/7a1c9ed42d4e69dd8a01f83cf5a2ce73"
          }}
          style={styles.ImageBackground_1213_11860}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02a8/c345/ab8da96453b01bae3f97b1fe0b73a29d"
          }}
          style={styles.ImageBackground_1213_11861}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f907/ef25/c25b24cd11a25c8bbe742c0548447037"
          }}
          style={styles.ImageBackground_1213_11862}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fafa/5225/3fa709778e8829b6107097234a030304"
          }}
          style={styles.ImageBackground_1213_11863}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c80d/469c/711d7aed43862dd632698377dcdd8088"
          }}
          style={styles.ImageBackground_1213_11864}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64de/9eed/14c0ec97d5117ab6c5c176ab32e6038b"
          }}
          style={styles.ImageBackground_1213_11865}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3448/4224/56e4925bec13921e1d745cfe453f2ddc"
          }}
          style={styles.ImageBackground_1213_11866}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b833/a8b2/69640a35f85748b750636eed255f5939"
          }}
          style={styles.ImageBackground_1213_11867}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_9926: {
    width: wp("18.75%"),
    minWidth: wp("18.75%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.375%"),
    top: hp("94.12568306010928%")
  },
  Text_1164_9926: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  ImageBackground_1164_9927: {
    width: wp("4.791666666666667%"),
    height: hp("12.568306010928962%"),
    top: hp("91.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.927083333333336%")
  },
  View_1164_9930: {
    width: wp("40.208333333333336%"),
    minWidth: wp("40.208333333333336%"),
    height: hp("166.66666666666669%"),
    minHeight: hp("166.66666666666669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.229166666666664%"),
    top: hp("4.098360655737705%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1164_9956: {
    width: wp("22.291666666666668%"),
    top: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%")
  },
  Text_1164_9956: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1164_9949: {
    width: wp("16.40625%"),
    top: hp("92.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%")
  },
  Text_1164_9949: {
    color: "rgba(78, 75, 102, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_9957: {
    width: wp("16.40625%"),
    top: hp("100.13661202185793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%")
  },
  Text_1164_9957: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_9931: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%"),
    top: hp("70.21857923497268%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_9931_322_1358: {
    flexGrow: 1,
    width: wp("8.020833333333334%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_9931_322_1360: {
    width: wp("8.020833333333334%"),
    minWidth: wp("8.020833333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_9931_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_9943: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(239, 240, 246, 1)"
  },
  View_I1164_9943_322_1358: {
    flexGrow: 1,
    width: wp("4.0625%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_9943_322_1360: {
    width: wp("4.0625%"),
    minWidth: wp("4.0625%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  Text_I1164_9943_322_1360: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1164_9953: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.58333333333333%"),
    top: hp("93.71584699453553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_9953_18_155: {
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
  View_I1164_9953_18_156: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    borderColor: "rgba(0, 135, 210, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1164_9959: {
    width: wp("22.291666666666668%"),
    minWidth: wp("22.291666666666668%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%"),
    top: hp("109.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_9959_952_204: {
    flexGrow: 1,
    width: wp("22.291666666666668%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_9959_952_204_939_323: {
    flexGrow: 1,
    width: wp("22.291666666666668%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_9959_952_204_939_324: {
    width: wp("22.291666666666668%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1164_9959_952_204_939_325: {
    width: wp("20.06250063578288%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1145846048990933%")
  },
  Text_I1164_9959_952_204_939_325: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  ImageBackground_I1164_9959_952_204_938_3903: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666657%"),
    top: hp("2.732240437158481%")
  },
  View_1164_10097: {
    width: wp("16.40625%"),
    top: hp("109.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.375%")
  },
  Text_1164_10097: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1213_11698: {
    width: wp("16.458333333333332%"),
    minWidth: wp("16.458333333333332%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.09375%"),
    top: hp("48.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1213_11699: {
    width: wp("1.4600376288096109%"),
    height: hp("9.415631737213968%"),
    top: hp("12.529350239071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.047595342000328%")
  },
  ImageBackground_1213_11700: {
    width: wp("0.7847102483113606%"),
    height: hp("2.605925492250203%"),
    top: hp("4.217362534153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7229223251342773%")
  },
  ImageBackground_1213_11701: {
    width: wp("1.4259257912635803%"),
    height: hp("5.38967684969876%"),
    top: hp("6.9813545935792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.081708272298176%")
  },
  ImageBackground_1213_11702: {
    width: wp("13.609019915262857%"),
    height: hp("26.742745488067794%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8493134180704764%")
  },
  ImageBackground_1213_11703: {
    width: wp("1.4259257912635803%"),
    height: hp("2.6707571060931095%"),
    top: hp("9.700254012978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.081708272298176%")
  },
  ImageBackground_1213_11704: {
    width: wp("1.4600376288096109%"),
    height: hp("9.415631737213968%"),
    top: hp("12.529350239071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.047595342000328%")
  },
  ImageBackground_1213_11705: {
    width: wp("1.0756460825602214%"),
    height: hp("6.181012346444885%"),
    top: hp("6.189965420081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8491735458374023%")
  },
  ImageBackground_1213_11706: {
    width: wp("1.0755054155985515%"),
    height: hp("5.124785209614071%"),
    top: hp("12.52908341871585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8491735458374023%")
  },
  ImageBackground_1213_11707: {
    width: wp("1.0755052169164023%"),
    height: hp("4.518690265592982%"),
    top: hp("17.812926912568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8493134180704764%")
  },
  ImageBackground_1213_11708: {
    width: wp("0.8869036038716634%"),
    height: hp("5.162575726952057%"),
    top: hp("7.207885075136616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.761724472045895%")
  },
  ImageBackground_1213_11709: {
    width: wp("4.402243296305339%"),
    height: hp("5.125158341204534%"),
    top: hp("12.52908341871585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.246528625488278%")
  },
  ImageBackground_1213_11710: {
    width: wp("4.416197935740153%"),
    height: hp("8.925866298988218%"),
    top: hp("17.741952698087424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.246528625488278%")
  },
  ImageBackground_1213_11711: {
    width: wp("0.5779266357421875%"),
    height: hp("1.87794054792227%"),
    top: hp("4.945515283469938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.383956909179688%")
  },
  ImageBackground_1213_11712: {
    width: wp("3.3640901247660318%"),
    height: hp("5.389807133075318%"),
    top: hp("6.9813545935792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.990454355875649%")
  },
  ImageBackground_1213_11713: {
    width: wp("4.281580448150635%"),
    height: hp("14.213388995394679%"),
    top: hp("12.529350239071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.990454355875649%")
  },
  ImageBackground_1213_11714: {
    width: wp("0.8439095815022786%"),
    height: hp("5.075884125923198%"),
    top: hp("17.812926912568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.613861083984375%")
  },
  ImageBackground_1213_11715: {
    width: wp("0.7852760950724285%"),
    height: hp("4.283068088885865%"),
    top: hp("13.371168459699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.673058827718101%")
  },
  ImageBackground_1213_11716: {
    width: wp("0.4751674334208171%"),
    height: hp("1.6186062755480493%"),
    top: hp("8.64311176571038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11717: {
    width: wp("0.4751674334208171%"),
    height: hp("0.3726990496525999%"),
    top: hp("11.998110911885242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11718: {
    width: wp("0.4751674334208171%"),
    height: hp("1.0873461030220073%"),
    top: hp("12.52908341871585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11719: {
    width: wp("0.4751674334208171%"),
    height: hp("1.6186052332810366%"),
    top: hp("15.353376878415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11720: {
    width: wp("0.4751674334208171%"),
    height: hp("1.6186052332810366%"),
    top: hp("18.70837602459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11721: {
    width: wp("0.4892643292744954%"),
    height: hp("1.6186073178150615%"),
    top: hp("22.06337517076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11722: {
    width: wp("0.4751674334208171%"),
    height: hp("1.2499845744482156%"),
    top: hp("25.41784067622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.173603693644207%")
  },
  ImageBackground_1213_11723: {
    width: wp("2.036411762237549%"),
    height: hp("0.11892266612235315%"),
    top: hp("17.5354337431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.246528625488278%")
  },
  ImageBackground_1213_11724: {
    width: wp("2.036411762237549%"),
    height: hp("0.45568330691811815%"),
    top: hp("17.81239327185792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.246528625488278%")
  },
  ImageBackground_1213_11725: {
    width: wp("2.036411762237549%"),
    height: hp("0.7328033447265625%"),
    top: hp("19.76178278688524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.246528625488278%")
  },
  ImageBackground_1213_11726: {
    width: wp("1.9377406438191733%"),
    height: hp("0.7327991756585126%"),
    top: hp("21.988398650956277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.345198949178059%")
  },
  ImageBackground_1213_11727: {
    width: wp("0.7240970929463704%"),
    height: hp("0.7346544109407018%"),
    top: hp("24.21474769467212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5588448842366525%")
  },
  ImageBackground_1213_11728: {
    width: wp("0.4008857409159342%"),
    height: hp("1.0536318919697747%"),
    top: hp("13.025902920081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11729: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536324131032808%"),
    top: hp("8.116675204918039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11730: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536298074357497%"),
    top: hp("10.564218323087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11731: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536329342367872%"),
    top: hp("13.011494620901637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11732: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536329342367872%"),
    top: hp("15.458504098360649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11733: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536318919697747%"),
    top: hp("17.90578039617487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11734: {
    width: wp("0.4008829593658447%"),
    height: hp("1.0536339765037994%"),
    top: hp("20.353056693989068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1379954020182304%")
  },
  ImageBackground_1213_11735: {
    width: wp("0.40088335673014325%"),
    height: hp("1.0536318919697747%"),
    top: hp("13.025902920081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.34824879964193%")
  },
  ImageBackground_1213_11736: {
    width: wp("0.4008857409159342%"),
    height: hp("1.0536329342367872%"),
    top: hp("15.6247331796448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11737: {
    width: wp("0.40088335673014325%"),
    height: hp("1.0536329342367872%"),
    top: hp("15.6247331796448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.34824879964193%")
  },
  ImageBackground_1213_11738: {
    width: wp("0.4008857409159342%"),
    height: hp("1.0536318919697747%"),
    top: hp("18.223296618852466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11739: {
    width: wp("0.40088335673014325%"),
    height: hp("1.0536318919697747%"),
    top: hp("18.223296618852466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.34824879964193%")
  },
  ImageBackground_1213_11740: {
    width: wp("0.4008857409159342%"),
    height: hp("1.0536339765037994%"),
    top: hp("20.822126878415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11741: {
    width: wp("0.40088335673014325%"),
    height: hp("1.0536339765037994%"),
    top: hp("20.822126878415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.34824879964193%")
  },
  ImageBackground_1213_11742: {
    width: wp("0.4008857409159342%"),
    height: hp("1.0536318919697747%"),
    top: hp("23.420957137978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11743: {
    width: wp("0.40088335673014325%"),
    height: hp("1.0536318919697747%"),
    top: hp("23.420957137978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.34824879964193%")
  },
  ImageBackground_1213_11744: {
    width: wp("0.40074586868286133%"),
    height: hp("0.6794517808924607%"),
    top: hp("26.01952057718578%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817871729532875%")
  },
  ImageBackground_1213_11745: {
    width: wp("1.3717979192733765%"),
    height: hp("0.6027628163822362%"),
    top: hp("11.053033213797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1358356475830078%")
  },
  ImageBackground_1213_11746: {
    width: wp("1.3717979192733765%"),
    height: hp("0.6027638586492486%"),
    top: hp("12.807643869535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1358356475830078%")
  },
  ImageBackground_1213_11747: {
    width: wp("1.3717979192733765%"),
    height: hp("0.6023917693257983%"),
    top: hp("14.562521345628411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1358356475830078%")
  },
  ImageBackground_1213_11748: {
    width: wp("1.3717979192733765%"),
    height: hp("0.6023938538598232%"),
    top: hp("16.317132001366126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1358356475830078%")
  },
  ImageBackground_1213_11749: {
    width: wp("1.3657369216283162%"),
    height: hp("0.60165280201396%"),
    top: hp("18.070942196038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1424620946248396%")
  },
  ImageBackground_1213_11750: {
    width: wp("1.047172745068868%"),
    height: hp("0.6038728307505123%"),
    top: hp("19.82555285177596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4601786931355818%")
  },
  ImageBackground_1213_11751: {
    width: wp("0.2953060468037923%"),
    height: hp("0.36454956388212945%"),
    top: hp("21.580163507513667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2127501169840507%")
  },
  ImageBackground_1213_11752: {
    width: wp("7.659768263498942%"),
    height: hp("16.48282327287184%"),
    top: hp("6.822596482240428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.003099759419758%")
  },
  ImageBackground_1213_11753: {
    width: wp("2.7469778060913086%"),
    height: hp("1.1595845873890027%"),
    top: hp("30.807611851092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.022733052571617%")
  },
  ImageBackground_1213_11754: {
    width: wp("2.7469786008199057%"),
    height: hp("1.1595887564570526%"),
    top: hp("30.227811219262286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.828214645385742%")
  },
  ImageBackground_1213_11755: {
    width: wp("2.456456422805786%"),
    height: hp("21.40245072828616%"),
    top: hp("9.553235997267755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333830515543621%")
  },
  ImageBackground_1213_11756: {
    width: wp("0.8126461505889893%"),
    height: hp("0.91186690200222%"),
    top: hp("30.102939293032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.276194254557293%")
  },
  ImageBackground_1213_11757: {
    width: wp("0.8126576741536459%"),
    height: hp("0.8080758683668459%"),
    top: hp("30.20673241120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.27637227376302%")
  },
  ImageBackground_1213_11758: {
    width: wp("0.7579823335011799%"),
    height: hp("1.0301058409643955%"),
    top: hp("30.11628031079234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.675188700358074%")
  },
  ImageBackground_1213_11759: {
    width: wp("0.7585652669270834%"),
    height: hp("0.7822568299340421%"),
    top: hp("30.36415642076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.675188700358074%")
  },
  ImageBackground_1213_11760: {
    width: wp("0.6550296147664388%"),
    height: hp("0.33942675981365267%"),
    top: hp("30.115479849726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.674664179484051%")
  },
  ImageBackground_1213_11761: {
    width: wp("0.6292331218719482%"),
    height: hp("0.2539712874615779%"),
    top: hp("30.099470628415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334768931070961%")
  },
  ImageBackground_1213_11762: {
    width: wp("1.7601811885833742%"),
    height: hp("10.398001749007427%"),
    top: hp("20.01899760928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.60703913370768%")
  },
  ImageBackground_1213_11763: {
    width: wp("0.2396591504414876%"),
    height: hp("1.052550018810835%"),
    top: hp("27.871520662568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.429913838704426%")
  },
  ImageBackground_1213_11764: {
    width: wp("0.518339474995931%"),
    height: hp("0.25415264192174697%"),
    top: hp("29.316352885928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4872868855794295%")
  },
  ImageBackground_1213_11765: {
    width: wp("0.37000179290771484%"),
    height: hp("0.51940751206028%"),
    top: hp("28.92412696379781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.786867141723633%")
  },
  ImageBackground_1213_11766: {
    width: wp("0.29051462809244794%"),
    height: hp("1.4718998976743938%"),
    top: hp("27.23115181010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.724703470865883%")
  },
  ImageBackground_1213_11767: {
    width: wp("1.7322234312693277%"),
    height: hp("5.003772798131724%"),
    top: hp("9.613804217896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.746270815531414%")
  },
  ImageBackground_1213_11768: {
    width: wp("1.7308119932810464%"),
    height: hp("3.4473314962751878%"),
    top: hp("11.119738302595628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.75190862019857%")
  },
  ImageBackground_1213_11772: {
    width: wp("0.965582529703776%"),
    height: hp("3.8084551284873416%"),
    top: hp("11.54958589480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.004610061645511%")
  },
  ImageBackground_1213_11773: {
    width: wp("0.6238945325215658%"),
    height: hp("1.0562271368308145%"),
    top: hp("15.440360314207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.166419029235836%")
  },
  ImageBackground_1213_11774: {
    width: wp("0.6238945325215658%"),
    height: hp("1.0562271368308145%"),
    top: hp("15.440360314207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.166419029235836%")
  },
  ImageBackground_1213_11775: {
    width: wp("0.652774969736735%"),
    height: hp("1.0925115783357882%"),
    top: hp("15.903827271174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.364699363708496%")
  },
  ImageBackground_1213_11776: {
    width: wp("0.652774969736735%"),
    height: hp("1.0925115783357882%"),
    top: hp("15.903827271174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.364699363708496%")
  },
  ImageBackground_1213_11777: {
    width: wp("0.8296751976013184%"),
    height: hp("2.1806185362768957%"),
    top: hp("10.437745474726768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.201847394307453%")
  },
  ImageBackground_1213_11778: {
    width: wp("0.8296751976013184%"),
    height: hp("2.180619578543908%"),
    top: hp("10.35583162568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.201847394307453%")
  },
  ImageBackground_1213_11779: {
    width: wp("1.6645650068918865%"),
    height: hp("0.8035649367368938%"),
    top: hp("20.02006489071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.696372985839844%")
  },
  ImageBackground_1213_11780: {
    width: wp("0.965582529703776%"),
    height: hp("2.0694440831252137%"),
    top: hp("13.288454149590159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.004610061645511%")
  },
  ImageBackground_1213_11781: {
    width: wp("1.9040528933207193%"),
    height: hp("7.469360685087945%"),
    top: hp("13.231888234289613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.592344601949055%")
  },
  ImageBackground_1213_11782: {
    width: wp("1.087484359741211%"),
    height: hp("4.137640833203259%"),
    top: hp("15.662888490437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.137649218241375%")
  },
  ImageBackground_1213_11783: {
    width: wp("1.0874831676483154%"),
    height: hp("4.137641614903518%"),
    top: hp("15.58177510245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1687199274698905%")
  },
  ImageBackground_1213_11784: {
    width: wp("0.9463278452555339%"),
    height: hp("3.5620173469918672%"),
    top: hp("15.890486253415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.238754590352375%")
  },
  ImageBackground_1213_11785: {
    width: wp("0.7146581013997396%"),
    height: hp("0.6424460906148608%"),
    top: hp("16.784868084016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3934771219889335%")
  },
  ImageBackground_1213_11786: {
    width: wp("0.1181650161743164%"),
    height: hp("0.28748642551442966%"),
    top: hp("18.93437286543716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.964607238769531%")
  },
  ImageBackground_1213_11787: {
    width: wp("0.5763439337412516%"),
    height: hp("0.36936692201374655%"),
    top: hp("18.2067537568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.396697362263996%")
  },
  ImageBackground_1213_11788: {
    width: wp("0.6035515169302622%"),
    height: hp("0.517351119244685%"),
    top: hp("15.810440146857921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.475318272908531%")
  },
  ImageBackground_1213_11789: {
    width: wp("0.6035515169302622%"),
    height: hp("0.517351119244685%"),
    top: hp("15.810440146857921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.475318272908531%")
  },
  ImageBackground_1213_11790: {
    width: wp("0.348666508992513%"),
    height: hp("3.176083590814976%"),
    top: hp("20.524355362021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.429913838704426%")
  },
  ImageBackground_1213_11791: {
    width: wp("0.97175399462382%"),
    height: hp("1.7102111232736723%"),
    top: hp("10.026842127732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1495256423950195%")
  },
  ImageBackground_1213_11792: {
    width: wp("0.9713276227315267%"),
    height: hp("1.7098796823637081%"),
    top: hp("9.98601861338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.150093078613285%")
  },
  ImageBackground_1213_11793: {
    width: wp("1.7263837655385337%"),
    height: hp("2.3047275230532787%"),
    top: hp("15.902759989754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59262752532959%")
  },
  ImageBackground_1213_11794: {
    width: wp("1.3210157553354898%"),
    height: hp("0.9239655374829234%"),
    top: hp("16.962837260928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.995381673177086%")
  },
  ImageBackground_1213_11795: {
    width: wp("1.6241165002187092%"),
    height: hp("2.133198514010737%"),
    top: hp("15.67196038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.995844205220539%")
  },
  ImageBackground_1213_11796: {
    width: wp("0.6531965732574463%"),
    height: hp("2.5314570776100367%"),
    top: hp("14.005400443989068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.363853772481281%")
  },
  ImageBackground_1213_11797: {
    width: wp("0.6531965732574463%"),
    height: hp("2.5314581198770494%"),
    top: hp("13.964310109289613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.363853772481281%")
  },
  ImageBackground_1213_11798: {
    width: wp("0.5575895309448242%"),
    height: hp("1.6448046991733904%"),
    top: hp("14.48594390368853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.225794792175293%")
  },
  ImageBackground_1213_11799: {
    width: wp("0.5575895309448242%"),
    height: hp("1.6448026146393655%"),
    top: hp("14.445120389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.225794792175293%")
  },
  ImageBackground_1213_11800: {
    width: wp("0.9712616602579752%"),
    height: hp("1.1555134924383113%"),
    top: hp("10.54260587431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1500644683837855%")
  },
  ImageBackground_1213_11805: {
    width: wp("3.04152250289917%"),
    height: hp("22.795546901682034%"),
    top: hp("9.09857411202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.635945002237957%")
  },
  ImageBackground_1213_11806: {
    width: wp("0.3279527028401693%"),
    height: hp("1.3159246392588797%"),
    top: hp("19.07098488729509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.00126711527507%")
  },
  ImageBackground_1213_11807: {
    width: wp("0.3279527028401693%"),
    height: hp("1.3159246392588797%"),
    top: hp("19.07098488729509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.00126711527507%")
  },
  ImageBackground_1213_11808: {
    width: wp("0.5518476168314617%"),
    height: hp("1.5941307192943135%"),
    top: hp("30.298251793032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.408815383911133%")
  },
  ImageBackground_1213_11809: {
    width: wp("1.0120638211568196%"),
    height: hp("1.2371417603206112%"),
    top: hp("30.25742827868853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.488622665405273%")
  },
  ImageBackground_1213_11810: {
    width: wp("1.0122418403625488%"),
    height: hp("0.7277316734439038%"),
    top: hp("30.766788336748625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.488536834716797%")
  },
  ImageBackground_1213_11811: {
    width: wp("0.5284508069356282%"),
    height: hp("0.3030245421362705%"),
    top: hp("31.58939549180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.432212193806969%")
  },
  ImageBackground_1213_11812: {
    width: wp("0.5850124359130859%"),
    height: hp("2.2668765542285687%"),
    top: hp("11.866301656420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.920309066772461%")
  },
  ImageBackground_1213_11813: {
    width: wp("0.3911558787027995%"),
    height: hp("0.5523806712666496%"),
    top: hp("30.296384050546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.428689956665039%")
  },
  ImageBackground_1213_11814: {
    width: wp("0.5755488077799479%"),
    height: hp("0.26872353475601946%"),
    top: hp("30.256094176912562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.528842290242515%")
  },
  ImageBackground_1213_11815: {
    width: wp("0.7523131370544434%"),
    height: hp("5.577879525273223%"),
    top: hp("25.22973232581966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.285076141357422%")
  },
  ImageBackground_1213_11816: {
    width: wp("0.7279054323832194%"),
    height: hp("4.88709413288721%"),
    top: hp("25.59394211065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.376486460367836%")
  },
  ImageBackground_1213_11817: {
    width: wp("0.5484771728515625%"),
    height: hp("0.7498089733019553%"),
    top: hp("11.867368937841526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.929651896158852%")
  },
  ImageBackground_1213_11818: {
    width: wp("0.9647138913472494%"),
    height: hp("2.5504430135091143%"),
    top: hp("10.040983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.736539204915367%")
  },
  ImageBackground_1213_11819: {
    width: wp("0.5850124359130859%"),
    height: hp("1.3907396076806906%"),
    top: hp("12.742539702868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.920309066772461%")
  },
  ImageBackground_1213_11820: {
    width: wp("1.2085692087809246%"),
    height: hp("13.276730730233949%"),
    top: hp("12.685173326502735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.7454210917155%")
  },
  ImageBackground_1213_11821: {
    width: wp("0.6088352203369141%"),
    height: hp("0.9187813013629185%"),
    top: hp("25.232667349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.428546905517578%")
  },
  ImageBackground_1213_11822: {
    width: wp("0.16083161036173502%"),
    height: hp("0.3960343657946977%"),
    top: hp("25.803929730191264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.375640869140625%")
  },
  ImageBackground_1213_11823: {
    width: wp("0.39552688598632807%"),
    height: hp("0.44922958957692966%"),
    top: hp("25.59394211065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.552544275919594%")
  },
  ImageBackground_1213_11824: {
    width: wp("1.8280744552612305%"),
    height: hp("13.443634158275167%"),
    top: hp("12.682238302595628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.723902384440105%")
  },
  ImageBackground_1213_11825: {
    width: wp("1.8284996350606282%"),
    height: hp("13.443634158275167%"),
    top: hp("12.682238302595628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.707976023356121%")
  },
  ImageBackground_1213_11826: {
    width: wp("0.532396634419759%"),
    height: hp("2.624077093405802%"),
    top: hp("12.767087175546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.848319371541344%")
  },
  ImageBackground_1213_11827: {
    width: wp("0.5325373013814291%"),
    height: hp("2.622966036770513%"),
    top: hp("12.68650742827868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863822937011719%")
  },
  ImageBackground_1213_11828: {
    width: wp("0.6573192278544108%"),
    height: hp("2.0891116616504437%"),
    top: hp("20.127860314207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.413043340047203%")
  },
  ImageBackground_1213_11829: {
    width: wp("0.6574440002441406%"),
    height: hp("2.0876274734246927%"),
    top: hp("20.04594646516393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.39739672342936%")
  },
  ImageBackground_1213_11830: {
    width: wp("0.5852023760477703%"),
    height: hp("0.7214280425525103%"),
    top: hp("19.577409921448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.510588328043617%")
  },
  ImageBackground_1213_11831: {
    width: wp("0.07611751556396484%"),
    height: hp("0.20005585717373206%"),
    top: hp("15.25465334699453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.241592407226562%")
  },
  ImageBackground_1213_11832: {
    width: wp("0.07611751556396484%"),
    height: hp("0.20005585717373206%"),
    top: hp("15.213829832650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.241592407226562%")
  },
  ImageBackground_1213_11833: {
    width: wp("0.07611672083536784%"),
    height: hp("0.2000548149067196%"),
    top: hp("19.584880891393446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.311649322509766%")
  },
  ImageBackground_1213_11834: {
    width: wp("0.07611672083536784%"),
    height: hp("0.2000548149067196%"),
    top: hp("19.543790556693985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.311649322509766%")
  },
  ImageBackground_1213_11835: {
    width: wp("0.07612069447835286%"),
    height: hp("0.20005585717373206%"),
    top: hp("17.419633709016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.279647191365562%")
  },
  ImageBackground_1213_11836: {
    width: wp("0.07612069447835286%"),
    height: hp("0.20005585717373206%"),
    top: hp("17.379077015027327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.279647191365562%")
  },
  ImageBackground_1213_11837: {
    width: wp("1.0158801078796387%"),
    height: hp("13.13445294489626%"),
    top: hp("12.827121755464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.48460133870443%")
  },
  ImageBackground_1213_11838: {
    width: wp("1.0327959060668945%"),
    height: hp("13.14744584547366%"),
    top: hp("12.814047558060103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.48418172200521%")
  },
  ImageBackground_1213_11839: {
    width: wp("0.2727516492207845%"),
    height: hp("2.1217137738003755%"),
    top: hp("12.895427766393446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.499542236328125%")
  },
  ImageBackground_1213_11840: {
    width: wp("0.273740291595459%"),
    height: hp("2.122081694055776%"),
    top: hp("12.812980276639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.483612696329757%")
  },
  ImageBackground_1213_11841: {
    width: wp("0.9647138913472494%"),
    height: hp("1.723082078610613%"),
    top: hp("10.040983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.736539204915367%")
  },
  ImageBackground_1213_11842: {
    width: wp("1.275152365366618%"),
    height: hp("2.51037514274889%"),
    top: hp("9.213040044398902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.589781443278%")
  },
  ImageBackground_1213_11843: {
    width: wp("1.1531734466552734%"),
    height: hp("4.232308643111766%"),
    top: hp("16.39317580259563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.692749023437496%")
  },
  ImageBackground_1213_11844: {
    width: wp("1.154019832611084%"),
    height: hp("4.31418392827602%"),
    top: hp("16.311261953551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.661598841349285%")
  },
  ImageBackground_1213_11845: {
    width: wp("0.3304409980773926%"),
    height: hp("2.1224579524472764%"),
    top: hp("19.978174094945352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.86712328592936%")
  },
  ImageBackground_1213_11846: {
    width: wp("0.33015966415405273%"),
    height: hp("2.1241881156879696%"),
    top: hp("19.937083760245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.882912953694664%")
  },
  ImageBackground_1213_11847: {
    width: wp("0.24419307708740237%"),
    height: hp("1.210912068684896%"),
    top: hp("19.386633367486347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.033857345581055%")
  },
  ImageBackground_1213_11848: {
    width: wp("0.6366340319315592%"),
    height: hp("3.8985122096994536%"),
    top: hp("16.48763020833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.979564666748047%")
  },
  ImageBackground_1213_11849: {
    width: wp("0.6360570589701335%"),
    height: hp("3.9726069716156505%"),
    top: hp("16.41345414959016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.011293411254883%")
  },
  ImageBackground_1213_11850: {
    width: wp("0.2414997418721517%"),
    height: hp("0.15237943722250682%"),
    top: hp("29.7360613046448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.543992360432945%")
  },
  ImageBackground_1213_11851: {
    width: wp("0.2413630485534668%"),
    height: hp("0.3322830617102117%"),
    top: hp("29.159729337431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.602300643920898%")
  },
  ImageBackground_1213_11852: {
    width: wp("1.2751309076944988%"),
    height: hp("1.6949241930018357%"),
    top: hp("10.028709870218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.589590708414718%")
  },
  ImageBackground_1213_11856: {
    width: wp("2.746978998184204%"),
    height: hp("1.1595887564570526%"),
    top: hp("29.918833247950822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49743970235188684%")
  },
  ImageBackground_1213_11857: {
    width: wp("0.0883801778157552%"),
    height: hp("5.230004149056524%"),
    top: hp("19.391436133879786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8268076578776054%")
  },
  ImageBackground_1213_11858: {
    width: wp("1.1998743812243144%"),
    height: hp("6.25029183476349%"),
    top: hp("24.251035262978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2710905075073242%")
  },
  ImageBackground_1213_11859: {
    width: wp("1.1882712443669639%"),
    height: hp("0.3326853767770236%"),
    top: hp("24.84124188866121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2767918904622384%")
  },
  ImageBackground_1213_11860: {
    width: wp("1.1660000681877136%"),
    height: hp("0.33268954584507343%"),
    top: hp("25.312446635928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2879292170206682%")
  },
  ImageBackground_1213_11861: {
    width: wp("1.143728494644165%"),
    height: hp("0.3323164142546106%"),
    top: hp("25.783918203551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2990649541219064%")
  },
  ImageBackground_1213_11862: {
    width: wp("1.8647257486979165%"),
    height: hp("3.5432283995581453%"),
    top: hp("20.318370047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.006903012593586055%")
  },
  ImageBackground_1213_11863: {
    width: wp("1.86416228612264%"),
    height: hp("3.543968409136996%"),
    top: hp("20.318370047814206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.006903012593586055%")
  },
  ImageBackground_1213_11864: {
    width: wp("1.0147525866826375%"),
    height: hp("1.9286984302958505%"),
    top: hp("18.817238729508198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8563152949015311%")
  },
  ImageBackground_1213_11865: {
    width: wp("1.0147525866826375%"),
    height: hp("1.9286984302958505%"),
    top: hp("18.817238729508198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8563152949015311%")
  },
  ImageBackground_1213_11866: {
    width: wp("1.165153980255127%"),
    height: hp("3.3668789055829493%"),
    top: hp("19.48108777322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8882671991984026%")
  },
  ImageBackground_1213_11867: {
    width: wp("1.1654361089070637%"),
    height: hp("3.366509943060536%"),
    top: hp("19.481354593579233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8882671991984026%")
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
