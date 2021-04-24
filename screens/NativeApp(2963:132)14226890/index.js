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
      <View style={styles.View_2963_135}>
        <View style={styles.View_2963_136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec8d/58c9/1596778bd6f00876c36a8956684f6b5c"
            }}
            style={styles.ImageBackground_2963_137}
          />
          <View style={styles.View_2963_138}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f31/2d50/1984ae8a174b04c0e9457ccb29362b51"
              }}
              style={styles.ImageBackground_2963_139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f46c/b5e4/3c09492214a81debd638b5481ba9aa22"
              }}
              style={styles.ImageBackground_2963_202}
            />
          </View>
        </View>
        <View style={styles.View_2963_265}>
          <View style={styles.View_2963_266}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c03/1172/4ac9002968ecbb77e4aab3225a041404"
              }}
              style={styles.ImageBackground_2963_267}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e8/a72a/f8e78b8aef0b1997fdb5fd7a14c5dc43"
              }}
              style={styles.ImageBackground_2963_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df65/21f4/f1d63d137f66f0e00905c4139aa037be"
              }}
              style={styles.ImageBackground_2963_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f636/ca1f/714219fae95292bc3e816b813a8b86c9"
              }}
              style={styles.ImageBackground_2963_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d16/3368/ae408411e86847aef79af9bc11702b79"
              }}
              style={styles.ImageBackground_2963_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ef2/840f/ab0835d513b7bbf36f21b571652d1928"
              }}
              style={styles.ImageBackground_2963_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33e5/87ee/7f5af1d8a01312cfefb7dba49e21672a"
              }}
              style={styles.ImageBackground_2963_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26e8/e2a6/34fa7c073b3d8d0f5e1410c91f071702"
              }}
              style={styles.ImageBackground_2963_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6da/e9ab/abae622a1fc4964f9609b1e5e138c9e1"
              }}
              style={styles.ImageBackground_2963_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2185/cb7f/739893acc1166d0d0b2aca9417d070e5"
              }}
              style={styles.ImageBackground_2963_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c15/eb63/1218b1d925a3c4e695ecd27574815c4d"
              }}
              style={styles.ImageBackground_2963_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d97/e961/680f7b7131e1d5a4cf67bb1e554e9934"
              }}
              style={styles.ImageBackground_2963_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f8/7324/aeeffc2c3ee1b48155d384e771a64708"
              }}
              style={styles.ImageBackground_2963_279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85a0/91b9/763de7c2853f8aa1df67f0bd2d338c99"
              }}
              style={styles.ImageBackground_2963_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/218d/3bd5/603d00d90d0560f030ac4fb83416aa03"
              }}
              style={styles.ImageBackground_2963_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7dc/c53a/7e71ca7a16927767a2233d062ddf9eff"
              }}
              style={styles.ImageBackground_2963_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc4e/f11c/9819d855fe419e965ea87feb1b54c967"
              }}
              style={styles.ImageBackground_2963_283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ad/f500/3876a9daa9edb70f65bd720dbc28e081"
              }}
              style={styles.ImageBackground_2963_284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d7/9423/dd79dccaa494b03210356f451269a0a0"
              }}
              style={styles.ImageBackground_2963_285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5de0/76d3/458abec8aeb403e6f126c3700a2346b3"
              }}
              style={styles.ImageBackground_2963_286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c72/2e25/461b00fb51629c594f86ad1701a3b024"
              }}
              style={styles.ImageBackground_2963_287}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dfe/6d21/583c9b14a4f53101e1f1552834a0ef67"
              }}
              style={styles.ImageBackground_2963_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f09d/60d5/a4d8cc8cd2c2de26469e65121853cb6b"
              }}
              style={styles.ImageBackground_2963_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde8/c2f8/bc075e2533b8fef0cea9ed3cdfb21ae5"
              }}
              style={styles.ImageBackground_2963_290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2885/f764/337efd35d2487db4c726361e25853f5c"
              }}
              style={styles.ImageBackground_2963_291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/0f82/9156c61be9b4a37654edd9f78caecbed"
              }}
              style={styles.ImageBackground_2963_292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/954b/8cd1/c69f46e921a1232b6380625e2ace7ad8"
              }}
              style={styles.ImageBackground_2963_293}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ffb/a745/587c6262893bd043fd3bb0ab380f3d37"
              }}
              style={styles.ImageBackground_2963_294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e4/b31e/1e504d424e4e5702a58c382817767033"
              }}
              style={styles.ImageBackground_2963_295}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76b/31aa/ffc457154c7a60ebd8ece9301be3ae3e"
              }}
              style={styles.ImageBackground_2963_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc80/5b14/6059bca09a819397fdba43ed38a354b2"
              }}
              style={styles.ImageBackground_2963_297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7f/363d/2e81f4d8fdc0fcec4af630acafae3a7f"
              }}
              style={styles.ImageBackground_2963_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64b6/27ee/b4a89cc6480f80db891552653e2c709b"
              }}
              style={styles.ImageBackground_2963_299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f5b/16a2/677fc9a83e248a26166ff772709b63a7"
              }}
              style={styles.ImageBackground_2963_300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e4/49c5/1d4019a3db2c7f66e1ecdb63e792d281"
              }}
              style={styles.ImageBackground_2963_301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2035/bd96/27254904b8ff862c9f55a4d098c53fba"
              }}
              style={styles.ImageBackground_2963_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dd4/9712/e0405480e826bc15478a4089cb769034"
              }}
              style={styles.ImageBackground_2963_303}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5468/b9af/16de9d68a67324166a268330526dc495"
              }}
              style={styles.ImageBackground_2963_304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c54c/ef5f/13b3aa4b7e274993209a08fba513e7ec"
              }}
              style={styles.ImageBackground_2963_305}
            />
            <View source={{ uri: "null" }} style={styles.View_2963_306} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9910/c03b/4eb0709f882da406e35dc31dad9f7271"
              }}
              style={styles.ImageBackground_2963_307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35dc/9446/72b6857d5a7426896c6613a3eeeaf47a"
              }}
              style={styles.ImageBackground_2963_319}
            />
          </View>
          <View style={styles.View_2963_331}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0906/4bd5/5a99f10a15689362231bfbe2793f6a24"
              }}
              style={styles.ImageBackground_2963_332}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
              }}
              style={styles.ImageBackground_2963_333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
              }}
              style={styles.ImageBackground_2963_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_2963_335}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da78/ad6e/48fe209657a3b4bd387a28d01aac2df1"
              }}
              style={styles.ImageBackground_2963_336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1195/316a/ab4a2589a61d97eb35dad4f57a735c59"
              }}
              style={styles.ImageBackground_2963_337}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_2963_338}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_2963_339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_2963_340}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/102e/04de/42863c775dd26f05ee034ae35a30578e"
              }}
              style={styles.ImageBackground_2963_341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c3/b3ca/e9ba6a3969363d94dda1b444362a492a"
              }}
              style={styles.ImageBackground_2963_342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_2963_343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf5/8e43/d25e4b52d199c30a98599107229074a4"
              }}
              style={styles.ImageBackground_2963_344}
            />
            <View style={styles.View_2963_345}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb24/ae58/636508a7a5b8ad3c1411c2986b4ec853"
                }}
                style={styles.ImageBackground_2963_346}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c9a/11f4/25b8efa40f43de13276cbf15983067d9"
                }}
                style={styles.ImageBackground_2963_352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a7/8080/9ff07f4071d2b83e5efbb4bb2ec0c9b3"
                }}
                style={styles.ImageBackground_2963_353}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a7/8080/9ff07f4071d2b83e5efbb4bb2ec0c9b3"
                }}
                style={styles.ImageBackground_2963_354}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/146a/db81/34f79d2315e7e9514775efdafc746d88"
                }}
                style={styles.ImageBackground_2963_355}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/146a/db81/34f79d2315e7e9514775efdafc746d88"
                }}
                style={styles.ImageBackground_2963_356}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/146a/db81/34f79d2315e7e9514775efdafc746d88"
                }}
                style={styles.ImageBackground_2963_357}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/146a/db81/34f79d2315e7e9514775efdafc746d88"
                }}
                style={styles.ImageBackground_2963_358}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bd4/8b43/59cef37110f7bd45ba3e09204f0dbd8b"
                }}
                style={styles.ImageBackground_2963_359}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4035/ce09/2461b0d86ec23fc696050e19ce8604ee"
                }}
                style={styles.ImageBackground_2963_379}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce6/fa76/f63eab268404e9846654977e80421838"
                }}
                style={styles.ImageBackground_2963_380}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3182/d754/c3bf8a5cc2d3ffbc0ca4359a4cd7de28"
              }}
              style={styles.ImageBackground_2963_381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e83/bba4/fc0afd99ee63048ef4580633ab9173cf"
              }}
              style={styles.ImageBackground_2963_382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36bd/9552/c83d529d75b7bf27d0a492c032fa18cf"
              }}
              style={styles.ImageBackground_2963_383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35e6/c1fe/e92476adf9806131898d12b568715e01"
              }}
              style={styles.ImageBackground_2963_384}
            />
          </View>
          <View style={styles.View_2963_385}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5001/cb65/2198f10006bccde9b94d58976dcf774c"
              }}
              style={styles.ImageBackground_2963_386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d272/f011/21bf6f22ab9a764c9a58627cad31d560"
              }}
              style={styles.ImageBackground_2963_388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff6e/5832/3e37738f6ecb92dca1ac3fcbe24ef9c2"
              }}
              style={styles.ImageBackground_2963_390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afff/4838/1628773d9318e88eff9c6aa2f88c5aa0"
              }}
              style={styles.ImageBackground_2963_392}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a2a/ff05/5428a59f55466bab7de3abbcd611183a"
              }}
              style={styles.ImageBackground_2963_394}
            />
          </View>
        </View>
        <View style={styles.View_2963_790}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a82/4428/b57a14dc5ef52cd9923a299446ab910e"
            }}
            style={styles.ImageBackground_I2963_790_478_380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8c/24a8/75f323cfcc165c532f3102438f20c779"
            }}
            style={styles.ImageBackground_I2963_790_478_381}
          />
        </View>
        <View style={styles.View_2963_796}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a82/4428/b57a14dc5ef52cd9923a299446ab910e"
            }}
            style={styles.ImageBackground_I2963_796_478_380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09cf/ba44/cbd30b333f0d5b0f61f4396de8c73cde"
            }}
            style={styles.ImageBackground_I2963_796_478_381}
          />
        </View>
      </View>
      <View style={styles.View_3137_33697}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d218/4d12/925854eb25c2472ef8caf726d8f18790"
          }}
          style={styles.ImageBackground_I3137_33697_3070_1}
        />
        <View style={styles.View_I3137_33697_3070_2} />
      </View>
      <View style={styles.View_2963_133}>
        <View style={styles.View_I2963_133_2784_33817} />
      </View>
      <View style={styles.View_2963_134}>
        <View style={styles.View_I2963_134_2784_33814}>
          <View style={styles.View_I2963_134_2784_33814_2784_33798}>
            <View style={styles.View_I2963_134_2784_33814_2784_33799} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I2963_134_2784_33814_2784_33800}
            />
            <View style={styles.View_I2963_134_2784_33814_2784_33801} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
            }}
            style={styles.ImageBackground_I2963_134_2784_33814_2784_33802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I2963_134_2784_33814_2784_33806}
          />
          <View style={styles.View_I2963_134_2784_33814_2784_33811}>
            <View style={styles.View_I2963_134_2784_33814_2784_33812}>
              <Text style={styles.Text_I2963_134_2784_33814_2784_33812}>
                9:41
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2963_1084}>
        <View style={styles.View_2963_418}>
          <Text style={styles.Text_2963_418}>Fire Mountain</Text>
        </View>
        <View style={styles.View_2963_419}>
          <Text style={styles.Text_2963_419}>4 day tour - Wyoming, USA</Text>
        </View>
        <View style={styles.View_2963_1095}>
          <Text style={styles.Text_2963_1095}>Description</Text>
        </View>
        <View style={styles.View_2963_1091}>
          <Text style={styles.Text_2963_1091}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Text>
        </View>
        <View style={styles.View_2963_1100}>
          <View style={styles.View_I2963_1100_1689_14605}>
            <View style={styles.View_I2963_1100_1689_14605_2780_33675} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f79/2f8d/d79b7cb8a780021a5701db7af3a0c133"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33676}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f79/2f8d/d79b7cb8a780021a5701db7af3a0c133"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33677}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e60/8886/8c3b2dcd4c1e7b64e76bf299613d9daa"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33679}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33680}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33681}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/592f/a164/5b2819bd865a86fec6c1be36437510d6"
              }}
              style={styles.ImageBackground_I2963_1100_1689_14605_2780_33682}
            />
          </View>
          <View style={styles.View_I2963_1100_1689_14606}>
            <Text style={styles.Text_I2963_1100_1689_14606}>Book Dates</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2963_135: {
    width: wp("239.46666666666667%"),
    minWidth: wp("239.46666666666667%"),
    height: hp("77.45901639344262%"),
    minHeight: hp("77.45901639344262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-69.6%"),
    top: hp("-17.076502732240435%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2963_136: {
    width: wp("239.46666666666667%"),
    height: hp("77.45901639344262%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_137: {
    width: wp("239.46666666666667%"),
    height: hp("77.45901639344262%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2963_138: {
    width: wp("235.77247721354166%"),
    height: hp("54.567501714320784%"),
    top: hp("0.6609140198087395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9794189453124886%")
  },
  ImageBackground_2963_139: {
    width: wp("235.77247721354166%"),
    height: hp("54.567501714320784%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_202: {
    width: wp("216.52198893229166%"),
    height: hp("50.112147930541326%"),
    top: hp("1.7220585724043733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.625301106770841%")
  },
  View_2963_265: {
    width: wp("239.468212890625%"),
    height: hp("72.4670743681694%"),
    top: hp("4.991942025273222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000840250651052088%")
  },
  View_2963_266: {
    width: wp("239.46666666666667%"),
    height: hp("33.942788546202614%"),
    top: hp("28.662909836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000840250651052088%")
  },
  ImageBackground_2963_267: {
    width: wp("239.40515950520833%"),
    height: hp("22.081798282477376%"),
    top: hp("5.396975324453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06151123046875284%")
  },
  ImageBackground_2963_268: {
    width: wp("8.656845092773438%"),
    height: hp("6.609277777333077%"),
    top: hp("7.891212004781419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.699434407552083%")
  },
  ImageBackground_2963_269: {
    width: wp("16.7918212890625%"),
    height: hp("6.48619438129696%"),
    top: hp("7.833045167349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.88651936848957%")
  },
  ImageBackground_2963_270: {
    width: wp("7.8754313151041675%"),
    height: hp("8.153942504215761%"),
    top: hp("5.396975324453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.97493489583333%")
  },
  ImageBackground_2963_271: {
    width: wp("10.517964680989584%"),
    height: hp("7.131311802264771%"),
    top: hp("7.3690445696721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.18094075520833%")
  },
  ImageBackground_2963_272: {
    width: wp("13.556998697916667%"),
    height: hp("6.565898624274248%"),
    top: hp("7.364508623633881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("218.62861328125%")
  },
  ImageBackground_2963_273: {
    width: wp("9.800569661458333%"),
    height: hp("5.999255571209016%"),
    top: hp("9.369129952185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("205.85926106770833%")
  },
  ImageBackground_2963_274: {
    width: wp("2.989794921875%"),
    height: hp("1.1110983259690916%"),
    top: hp("9.369129952185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("197.050244140625%")
  },
  ImageBackground_2963_275: {
    width: wp("18.574625651041668%"),
    height: hp("7.990460838776468%"),
    top: hp("7.921095884562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("175.09593098958334%")
  },
  ImageBackground_2963_276: {
    width: wp("2.961067708333333%"),
    height: hp("2.6190627468088286%"),
    top: hp("7.364508623633881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("170.14231770833334%")
  },
  ImageBackground_2963_277: {
    width: wp("12.191829427083334%"),
    height: hp("5.52123439767973%"),
    top: hp("7.284996157786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("146.38142903645831%")
  },
  ImageBackground_2963_278: {
    width: wp("6.77001953125%"),
    height: hp("7.955386469272968%"),
    top: hp("5.396975324453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("160.9130859375%")
  },
  ImageBackground_2963_279: {
    width: wp("70.53441569010417%"),
    height: hp("21.080682056197702%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.26509602864583%")
  },
  ImageBackground_2963_280: {
    width: wp("9.216609700520834%"),
    height: hp("5.575119602224214%"),
    top: hp("11.120538763661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133.32916666666665%")
  },
  ImageBackground_2963_281: {
    width: wp("38.985416666666666%"),
    height: hp("20.476884268672087%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.26509602864583%")
  },
  ImageBackground_2963_282: {
    width: wp("239.40515950520833%"),
    height: hp("26.54451047136484%"),
    top: hp("7.39839480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_283: {
    width: wp("6.088330078125%"),
    height: hp("2.2806094643848187%"),
    top: hp("11.121606045081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("224.182568359375%")
  },
  ImageBackground_2963_284: {
    width: wp("5.155257161458334%"),
    height: hp("4.7185887404478315%"),
    top: hp("12.379397199453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("214.72194010416666%")
  },
  ImageBackground_2963_285: {
    width: wp("14.63955078125%"),
    height: hp("12.574092677382174%"),
    top: hp("9.475858094262293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("193.41573893229167%")
  },
  ImageBackground_2963_286: {
    width: wp("22.7609375%"),
    height: hp("9.828127668203553%"),
    top: hp("17.65070013661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("173.48771158854166%")
  },
  ImageBackground_2963_287: {
    width: wp("2.899072265625%"),
    height: hp("2.4679715516137293%"),
    top: hp("12.021591103142079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("178.01059570312498%")
  },
  ImageBackground_2963_288: {
    width: wp("4.524641927083333%"),
    height: hp("3.4666676338904545%"),
    top: hp("8.901927510245901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("167.39827473958331%")
  },
  ImageBackground_2963_289: {
    width: wp("3.832096354166667%"),
    height: hp("2.8403443716914274%"),
    top: hp("10.512188353825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("162.13328450520834%")
  },
  ImageBackground_2963_290: {
    width: wp("3.5373860677083333%"),
    height: hp("3.796357535273651%"),
    top: hp("8.751174009562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("153.98899739583334%")
  },
  ImageBackground_2963_291: {
    width: wp("13.533479817708333%"),
    height: hp("16.72086455131489%"),
    top: hp("10.864391222677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("143.36827799479164%")
  },
  ImageBackground_2963_292: {
    width: wp("7.340169270833333%"),
    height: hp("3.904753304570099%"),
    top: hp("13.48056480532787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129.96739908854164%")
  },
  ImageBackground_2963_293: {
    width: wp("7.442683919270833%"),
    height: hp("5.391067755026895%"),
    top: hp("15.543619791666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("120.91806640624999%")
  },
  ImageBackground_2963_294: {
    width: wp("4.430126953125%"),
    height: hp("3.0063108016884392%"),
    top: hp("14.939805327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.88904622395833%")
  },
  ImageBackground_2963_295: {
    width: wp("3.586368815104167%"),
    height: hp("2.2289213587026127%"),
    top: hp("11.920999829234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.28960774739582%")
  },
  ImageBackground_2963_296: {
    width: wp("13.627832031250001%"),
    height: hp("17.671149415396602%"),
    top: hp("9.807782616120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.89034016927083%")
  },
  ImageBackground_2963_297: {
    width: wp("7.482283528645834%"),
    height: hp("4.905821586567196%"),
    top: hp("10.024173924180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.45273437499999%")
  },
  ImageBackground_2963_298: {
    width: wp("5.341776529947917%"),
    height: hp("4.080450339395492%"),
    top: hp("9.958536116803277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51136881510416%")
  },
  ImageBackground_2963_299: {
    width: wp("9.871907552083334%"),
    height: hp("6.615944117144809%"),
    top: hp("10.9649824965847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.24088948567707%")
  },
  ImageBackground_2963_300: {
    width: wp("3.126090494791667%"),
    height: hp("2.7306436840953725%"),
    top: hp("12.47438524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.109391276041663%")
  },
  ImageBackground_2963_301: {
    width: wp("2.3089599609375%"),
    height: hp("2.14019525246542%"),
    top: hp("8.096930498633881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.23749186197916%")
  },
  ImageBackground_2963_302: {
    width: wp("5.122822570800781%"),
    height: hp("6.42548441235485%"),
    top: hp("9.807782616120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06151123046875284%")
  },
  ImageBackground_2963_303: {
    width: wp("9.37835489908854%"),
    height: hp("7.208414546778945%"),
    top: hp("7.291933487021861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.65078531901041%")
  },
  ImageBackground_2963_304: {
    width: wp("3.233140055338542%"),
    height: hp("1.6531939063567282%"),
    top: hp("12.993884477459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.791756184895824%")
  },
  ImageBackground_2963_305: {
    width: wp("3.0611165364583335%"),
    height: hp("2.1598565773885756%"),
    top: hp("5.8172173838797825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("134.24645182291664%")
  },
  View_2963_306: {
    width: wp("5.6717285156249995%"),
    height: hp("0.8672453666645321%"),
    top: hp("15.828583931010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("136.87403971354166%")
  },
  ImageBackground_2963_307: {
    width: wp("86.8933837890625%"),
    height: hp("15.496934567644297%"),
    top: hp("12.518410604508198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_319: {
    width: wp("86.87464192708333%"),
    height: hp("15.066774295327443%"),
    top: hp("12.518410604508198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("152.59202473958334%")
  },
  View_2963_331: {
    width: wp("239.468212890625%"),
    height: hp("27.57442036613089%"),
    top: hp("44.89279158128416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_332: {
    width: wp("139.95608723958333%"),
    height: hp("16.315172539382687%"),
    top: hp("4.07488046448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_333: {
    width: wp("0.006437174479166667%"),
    height: hp("0.0070123724598702185%"),
    top: hp("7.216423326502728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.806154378255215%")
  },
  ImageBackground_2963_334: {
    width: wp("0.005513509114583333%"),
    height: hp("0.009246992934596994%"),
    top: hp("8.96089480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.02155965169271%")
  },
  ImageBackground_2963_335: {
    width: wp("0.006901041666666667%"),
    height: hp("0.01416232416538593%"),
    top: hp("10.024440744535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06683146158855%")
  },
  ImageBackground_2963_336: {
    width: wp("0.01207275390625%"),
    height: hp("0.0170806718002903%"),
    top: hp("10.762465846994537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.25738321940105%")
  },
  ImageBackground_2963_337: {
    width: wp("0.005900065104166667%"),
    height: hp("0.0065412677702356556%"),
    top: hp("10.66667733948087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.6521993001302%")
  },
  ImageBackground_2963_338: {
    width: wp("0.00419921875%"),
    height: hp("0.014979461503159154%"),
    top: hp("14.45686048497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("113.85777384440104%")
  },
  ImageBackground_2963_339: {
    width: wp("0.006876627604166667%"),
    height: hp("0.013299327079064208%"),
    top: hp("14.528101519808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("123.29968465169271%")
  },
  ImageBackground_2963_340: {
    width: wp("0.005615234375%"),
    height: hp("0.01230708888319672%"),
    top: hp("14.833610826502728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132.36763712565104%")
  },
  ImageBackground_2963_341: {
    width: wp("0.07872721354166667%"),
    height: hp("0.08086324389515027%"),
    top: hp("14.67431907445355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.37234903971355%")
  },
  ImageBackground_2963_342: {
    width: wp("0.16363932291666666%"),
    height: hp("0.08446948775828211%"),
    top: hp("12.34978014002732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("143.12318725585936%")
  },
  ImageBackground_2963_343: {
    width: wp("0.11477864583333333%"),
    height: hp("0.09471288795679644%"),
    top: hp("16.431864754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.46695353190105%")
  },
  ImageBackground_2963_344: {
    width: wp("239.347021484375%"),
    height: hp("20.52729455499701%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12048543294271497%")
  },
  View_2963_345: {
    width: wp("8.95361328125%"),
    height: hp("12.529662919174777%"),
    top: hp("6.630752646857921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114.2377705891927%")
  },
  ImageBackground_2963_346: {
    width: wp("8.611311848958334%"),
    height: hp("9.707845885896942%"),
    top: hp("2.821892076502735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15807291666666146%")
  },
  ImageBackground_2963_352: {
    width: wp("7.458414713541667%"),
    height: hp("0.4029904558358948%"),
    top: hp("2.80668331625683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7476562499999986%")
  },
  ImageBackground_2963_353: {
    width: wp("8.95361328125%"),
    height: hp("0.09226564501152663%"),
    top: hp("2.1294932547814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_354: {
    width: wp("8.95361328125%"),
    height: hp("0.09226564501152663%"),
    top: hp("2.76052339480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_355: {
    width: wp("0.08403320312500001%"),
    height: hp("0.5849035711236339%"),
    top: hp("2.1756531762295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.106022135416673%")
  },
  ImageBackground_2963_356: {
    width: wp("0.08404947916666666%"),
    height: hp("0.5849035711236339%"),
    top: hp("2.1756531762295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.571337890624996%")
  },
  ImageBackground_2963_357: {
    width: wp("0.08404947916666666%"),
    height: hp("0.5849035711236339%"),
    top: hp("2.1756531762295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.036669921874996%")
  },
  ImageBackground_2963_358: {
    width: wp("0.08404134114583334%"),
    height: hp("0.5849035711236339%"),
    top: hp("2.1756531762295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.502001953124996%")
  },
  ImageBackground_2963_359: {
    width: wp("8.731306966145834%"),
    height: hp("0.5868380186987705%"),
    top: hp("2.1756531762295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12561848958333144%")
  },
  ImageBackground_2963_379: {
    width: wp("6.627433268229168%"),
    height: hp("1.482391357421875%"),
    top: hp("1.2799372438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1465820312499986%")
  },
  ImageBackground_2963_380: {
    width: wp("8.435693359375%"),
    height: hp("1.3261055034366462%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37845052083333286%")
  },
  ImageBackground_2963_381: {
    width: wp("0.4695149739583333%"),
    height: hp("0.17991196262380466%"),
    top: hp("14.151617998633881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137.46078491210938%")
  },
  ImageBackground_2963_382: {
    width: wp("239.348193359375%"),
    height: hp("19.227108147626364%"),
    top: hp("5.405246755464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11931559244793277%")
  },
  ImageBackground_2963_383: {
    width: wp("156.59453125%"),
    height: hp("10.841236218728655%"),
    top: hp("16.73310493510929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.81147664388021%")
  },
  ImageBackground_2963_384: {
    width: wp("239.46666666666667%"),
    height: hp("20.871392755560535%"),
    top: hp("6.703060963114751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0015055338541714036%")
  },
  View_2963_385: {
    width: wp("221.46984049479167%"),
    height: hp("24.723753381948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.112278238932298%")
  },
  ImageBackground_2963_386: {
    width: wp("68.6847412109375%"),
    height: hp("11.51024135735517%"),
    top: hp("12.280406847677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2963_388: {
    width: wp("32.922770182291664%"),
    height: hp("5.5171732042656565%"),
    top: hp("1.3645192964480888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("188.54705810546875%")
  },
  ImageBackground_2963_390: {
    width: wp("49.94925130208333%"),
    height: hp("8.246245149706231%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.637674967447914%")
  },
  ImageBackground_2963_392: {
    width: wp("54.981396484375%"),
    height: hp("9.755777661266222%"),
    top: hp("14.968088285519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("159.8013712565104%")
  },
  ImageBackground_2963_394: {
    width: wp("39.90250651041667%"),
    height: hp("6.590303306371137%"),
    top: hp("7.80609631147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121.58730875651042%")
  },
  View_2963_790: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("29.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2963_790_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2963_790_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  View_2963_796: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("29.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2963_796_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2963_796_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726775%")
  },
  View_3137_33697: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54.37158469945356%"),
    minHeight: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.557377049180324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3137_33697_3070_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I3137_33697_3070_2: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("0.28998187330902603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("1.1545316769125762%"),
    backgroundColor: "rgba(160, 163, 189, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_2963_133: {
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
  View_I2963_133_2784_33817: {
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
  View_2963_134: {
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
  View_I2963_134_2784_33814: {
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
  View_I2963_134_2784_33814_2784_33798: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6888671875%"),
    top: hp("2.368030652322404%")
  },
  View_I2963_134_2784_33814_2784_33799: {
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
  ImageBackground_I2963_134_2784_33814_2784_33800: {
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
  View_I2963_134_2784_33814_2784_33801: {
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
  ImageBackground_I2963_134_2784_33814_2784_33802: {
    flexGrow: 1,
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("2.3674970116120218%")
  },
  ImageBackground_I2963_134_2784_33814_2784_33806: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%"),
    top: hp("2.413390112704918%")
  },
  View_I2963_134_2784_33814_2784_33811: {
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
  View_I2963_134_2784_33814_2784_33812: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I2963_134_2784_33814_2784_33812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2963_1084: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("62.431693989071036%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2963_418: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2963_418: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_2963_419: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  Text_2963_419: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_2963_1095: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.841530054644807%")
  },
  Text_2963_1095: {
    color: "rgba(20, 20, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2963_1091: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.85245901639344%")
  },
  Text_2963_1091: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2963_1100: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.874316939890704%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_I2963_1100_1689_14605: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86666666666666%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2963_1100_1689_14605_2780_33675: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I2963_1100_1689_14605_2780_33676: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33677: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5333333333333385%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33678: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33679: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.000000000000007%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33680: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8666666666666742%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33681: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.000000000000007%"),
    top: hp("2.322404371584696%")
  },
  ImageBackground_I2963_1100_1689_14605_2780_33682: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8666666666666742%"),
    top: hp("2.322404371584696%")
  },
  View_I2963_1100_1689_14606: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("2.185792349726782%")
  },
  Text_I2963_1100_1689_14606: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
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
