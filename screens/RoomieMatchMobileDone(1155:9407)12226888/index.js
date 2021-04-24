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
      <View style={styles.View_1155_9408}>
        <View style={styles.View_1155_9409}>
          <Text style={styles.Text_1155_9409}>roomie match</Text>
        </View>
        <View style={styles.View_1155_9410}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dccc/46ad/926dc4ad430d63ae81066011206d5b8b"
            }}
            style={styles.ImageBackground_1155_9411}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c915/4fc8/98ad9ed62c266f0d8dd75f26d3edf8f4"
            }}
            style={styles.ImageBackground_1155_9412}
          />
        </View>
      </View>
      <View style={styles.View_1155_9416}>
        <Text style={styles.Text_1155_9416}>You’re rented. Time to party!</Text>
      </View>
      <View style={styles.View_1155_9417}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc08/023b/6573ff22fb529ee07a19affa75933bc4"
          }}
          style={styles.ImageBackground_1155_9418}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd9/2f23/a0962b6a91a235ab65f5974fd94eebb5"
          }}
          style={styles.ImageBackground_1155_9419}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a6b/824e/c73d9c33daf28aa0fd468650a1681796"
          }}
          style={styles.ImageBackground_1155_9420}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/010c/e135/3f730ba997800c6809f45383fa4d6563"
          }}
          style={styles.ImageBackground_1155_9421}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e1/24a6/be9ea9cfff7dc0d33704307372340e39"
          }}
          style={styles.ImageBackground_1155_9422}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ca6/9055/2225da5a295b7ecb32e1a1ab56c515c1"
          }}
          style={styles.ImageBackground_1155_9424}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2170/0fe5/b8e9c7f431b19c8e74ff5b3ee0969b2f"
          }}
          style={styles.ImageBackground_1155_9425}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d53/75f6/cadc7c7111d3c0fb60a7e1080cebbd17"
          }}
          style={styles.ImageBackground_1155_9426}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af2/0cca/650ece7afdf067f712e99086f49e85df"
          }}
          style={styles.ImageBackground_1155_9427}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cbe/97fc/8b3a84e924c418fa6a4efb834dd0f580"
          }}
          style={styles.ImageBackground_1155_9428}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6891/e12a/8f0b79126b154fc7c2c28c5cace38f81"
          }}
          style={styles.ImageBackground_1155_9429}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508f/7530/5a06dda220f035ec1b1f2bc9f8ae74b2"
          }}
          style={styles.ImageBackground_1155_9431}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9432} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df5/f796/dd097d1fdcfbcef1843c27d98c6a416b"
          }}
          style={styles.ImageBackground_1155_9433}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6387/cfd4/3e2251fdebdee9ab63a7f4a78b05a463"
          }}
          style={styles.ImageBackground_1155_9434}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9435} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1d2/314a/9ea5504140f604eb385a129881ffd7a3"
          }}
          style={styles.ImageBackground_1155_9436}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9437} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3f/3379/cb0bc348005cb823fab3fdbe9637aba7"
          }}
          style={styles.ImageBackground_1155_9438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef3/de0c/ce4d38f58372a719b8054755c4645721"
          }}
          style={styles.ImageBackground_1155_9439}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fd6/3841/2273b71140cd30ec49192c31a83827ae"
          }}
          style={styles.ImageBackground_1155_9440}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeb0/3980/7b670bfb93aa86b6ba685836d02bd65c"
          }}
          style={styles.ImageBackground_1155_9441}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5a/f8ea/6d8599dbac321867b3c4923c1df3dcb3"
          }}
          style={styles.ImageBackground_1155_9442}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5a/f8ea/6d8599dbac321867b3c4923c1df3dcb3"
          }}
          style={styles.ImageBackground_1155_9443}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/463b/93964fb3e331d20fddfab9f81645fa41"
          }}
          style={styles.ImageBackground_1155_9444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4128/f5da/5bb84f720a621737a71d6f0bb3b33c7e"
          }}
          style={styles.ImageBackground_1155_9445}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8470/d8b2/b4bf7363de5515e9ab2538ad74984938"
          }}
          style={styles.ImageBackground_1155_9446}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34dd/3020/c4bab176b1211ddc1b46fcfd43a130bb"
          }}
          style={styles.ImageBackground_1155_9447}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd7c/f872/05eb29bb3f3ea67c86e08a2261501bda"
          }}
          style={styles.ImageBackground_1155_9448}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3133/6232/a987774f6f5b360251bd2023745bb031"
          }}
          style={styles.ImageBackground_1155_9449}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd7c/f872/05eb29bb3f3ea67c86e08a2261501bda"
          }}
          style={styles.ImageBackground_1155_9450}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3133/6232/a987774f6f5b360251bd2023745bb031"
          }}
          style={styles.ImageBackground_1155_9451}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3548/82ab/d55e116b685f41174b0465de84503002"
          }}
          style={styles.ImageBackground_1155_9452}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6241/e981/0e70670c4116295aaf994e01e0b1a2be"
          }}
          style={styles.ImageBackground_1155_9453}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5059/7a76/0841d8233c2543b6f2a7efb36970c219"
          }}
          style={styles.ImageBackground_1155_9454}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5059/7a76/0841d8233c2543b6f2a7efb36970c219"
          }}
          style={styles.ImageBackground_1155_9455}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2561/232b/c1a2217d11852606cbfb65f61fce5318"
          }}
          style={styles.ImageBackground_1155_9456}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2811/c1bc/6e0347cd5403ae48e7a708ff4dd3e525"
          }}
          style={styles.ImageBackground_1155_9457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78e/a9da/90c11b812ff114ce2ebf4867c5dee68d"
          }}
          style={styles.ImageBackground_1155_9458}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e9/8372/df13a734982fc4910890a7818ff17afd"
          }}
          style={styles.ImageBackground_1155_9459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d1/e282/475e668267563a03e040227028ebf589"
          }}
          style={styles.ImageBackground_1155_9460}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa3/a88d/df9e1ae87bd7cf52959b9e43236320ce"
          }}
          style={styles.ImageBackground_1155_9462}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0510/863b/b48a747a6aec7a2b4d1ea2dfd4efa654"
          }}
          style={styles.ImageBackground_1155_9463}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f50/b772/00812eec558db1cdbf3e781ad54c8c9e"
          }}
          style={styles.ImageBackground_1155_9464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/750f/b286/35960b273d2aeef2bde2840fca6b3b50"
          }}
          style={styles.ImageBackground_1155_9465}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31e/f882/1806f3f0153dd9a718554e480288fd92"
          }}
          style={styles.ImageBackground_1155_9466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a08c/e34f/e350db314f95cf84a2b9d30d0998cb51"
          }}
          style={styles.ImageBackground_1155_9467}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2445/cfc4/4bf6c7b9507517fa7ad181ab50f582a3"
          }}
          style={styles.ImageBackground_1155_9469}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9470} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e2/baf5/e1bdf8cc71113132b70cbbaa0409350a"
          }}
          style={styles.ImageBackground_1155_9471}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8918/8a61/df9c2e0a57b662880df55fc35767df5d"
          }}
          style={styles.ImageBackground_1155_9472}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9473} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd5/6ef3/5d9e56931911bb68c7b7c21b7ad52592"
          }}
          style={styles.ImageBackground_1155_9474}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9475} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa60/6f46/c3de41d50ff9283919aff41102b9bdf9"
          }}
          style={styles.ImageBackground_1155_9476}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/228f/9738/fab78c07ca108eeb2757c7d7627469cf"
          }}
          style={styles.ImageBackground_1155_9477}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6554/95f6/b10a944906ccd5f8236ddfcaaa9f1c57"
          }}
          style={styles.ImageBackground_1155_9478}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1da8/6441/a98796195c2a518b318298b064f49447"
          }}
          style={styles.ImageBackground_1155_9479}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/ef48/db19120041f4af1adedc5854f9cdd8bf"
          }}
          style={styles.ImageBackground_1155_9480}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/153e/2dc6/ee1b048e7c3965890b316d6389b47a49"
          }}
          style={styles.ImageBackground_1155_9481}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f40/0222/08d422b37c373dc3a4cc86eda4c2fdb8"
          }}
          style={styles.ImageBackground_1155_9482}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f40/0222/08d422b37c373dc3a4cc86eda4c2fdb8"
          }}
          style={styles.ImageBackground_1155_9483}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc73/ddf9/0f5d7ce45b9707a02fe7b75aa0706cc4"
          }}
          style={styles.ImageBackground_1155_9484}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc73/ddf9/0f5d7ce45b9707a02fe7b75aa0706cc4"
          }}
          style={styles.ImageBackground_1155_9485}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8d0/6d18/2ffd8798ab2bb1d21b232a439a2fd8fe"
          }}
          style={styles.ImageBackground_1155_9486}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b314/454e/dbc5ca1e26bcf493f143c5d6177908ac"
          }}
          style={styles.ImageBackground_1155_9487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/4243/52b9c8e010100f3399f27c5b1df04814"
          }}
          style={styles.ImageBackground_1155_9488}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4466/c684/4484825d2b8ba025c8c72ddd711393cf"
          }}
          style={styles.ImageBackground_1155_9489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a79/21ab/f0369767c8d694223801f1eff2eef0c8"
          }}
          style={styles.ImageBackground_1155_9490}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/4243/52b9c8e010100f3399f27c5b1df04814"
          }}
          style={styles.ImageBackground_1155_9491}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c966/31b8/8ef06f3f513e84bb95365e281dfeaac6"
          }}
          style={styles.ImageBackground_1155_9492}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127c/344b/c5beec9b8a7a123ef1fbc1f99417e20f"
          }}
          style={styles.ImageBackground_1155_9494}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c90/50c6/904637a6d7c4990127ad4f209aa89be0"
          }}
          style={styles.ImageBackground_1155_9495}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbff/428d/d545cbca39b0e8901fff154c5867de71"
          }}
          style={styles.ImageBackground_1155_9496}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a36/eed3/b730633d67d1544e9286da10fa1a3205"
          }}
          style={styles.ImageBackground_1155_9497}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d76a/be53/16a7795afbc944b4a41d57cb12ff8290"
          }}
          style={styles.ImageBackground_1155_9498}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0084/e449/1fc61d865704d71a416d160b7a24045f"
          }}
          style={styles.ImageBackground_1155_9499}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf5/3578/da0bb0dbbf45e12110e0e2e221fd8ce1"
          }}
          style={styles.ImageBackground_1155_9501}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9502} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb0c/ce0a/fa5a22ada729eb9171ce889e23a96878"
          }}
          style={styles.ImageBackground_1155_9503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7119/9c63/48173583a5e0111b51b12b6f8a953c6e"
          }}
          style={styles.ImageBackground_1155_9504}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9505} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e0/eab3/88b9d4d5a0c85de5469d642eb6b6b3d1"
          }}
          style={styles.ImageBackground_1155_9506}
        />
        <View source={{ uri: "null" }} style={styles.View_1155_9507} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b6/52a3/5cab01d512f316954c885819bb0fa61f"
          }}
          style={styles.ImageBackground_1155_9508}
        />
      </View>
      <View style={styles.View_1155_9509}>
        <View style={styles.View_I1155_9509_939_329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06c4/8d7f/8f27f95d856e5676de917a7d74894e3d"
            }}
            style={styles.ImageBackground_I1155_9509_939_330}
          />
          <View style={styles.View_I1155_9509_939_331}>
            <Text style={styles.Text_I1155_9509_939_331}>Wahoo, Done!</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1155_9510}>
        <Text style={styles.Text_1155_9510}>$300 Deposit Recieved!</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1155_9408: {
    width: wp("39.68000081380209%"),
    minWidth: wp("39.68000081380209%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("7.650273224043716%")
  },
  View_1155_9409: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.080013020833334%"),
    top: hp("0%")
  },
  Text_1155_9409: {
    color: "rgba(51, 167, 125, 1)",
    fontSize: 22.200000762939453,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1155_9410: {
    width: wp("10.240000406901041%"),
    minWidth: wp("10.240000406901041%"),
    height: hp("5.828779772982571%"),
    minHeight: hp("5.828779772982571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21852587090163933%")
  },
  ImageBackground_1155_9411: {
    width: wp("10.240000406901041%"),
    height: hp("5.828779772982571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1155_9412: {
    width: wp("3.4133333841959637%"),
    height: hp("1.748633905838096%"),
    top: hp("2.4771601775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.41334635416667%")
  },
  View_1155_9416: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("35.10928961748634%")
  },
  Text_1155_9416: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_1155_9417: {
    width: wp("56.266699218750006%"),
    minWidth: wp("56.266699218750006%"),
    height: hp("24.590166018960254%"),
    minHeight: hp("24.590166018960254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.6666015625%"),
    top: hp("50%")
  },
  ImageBackground_1155_9418: {
    width: wp("3.7468709309895836%"),
    height: hp("3.996186178238666%"),
    top: hp("5.71475836748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.02610677083334%")
  },
  ImageBackground_1155_9419: {
    width: wp("2.79427490234375%"),
    height: hp("3.5740649113889598%"),
    top: hp("6.136868169398909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.47063802083334%")
  },
  ImageBackground_1155_9420: {
    width: wp("6.985697428385416%"),
    height: hp("3.5717922481682782%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.328450520833336%")
  },
  ImageBackground_1155_9421: {
    width: wp("5.588557942708333%"),
    height: hp("2.857433902761324%"),
    top: hp("0.3572724556010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02701822916668%")
  },
  ImageBackground_1155_9422: {
    width: wp("24.2132080078125%"),
    height: hp("13.030873491464417%"),
    top: hp("3.1954405737704903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1155_9424: {
    width: wp("22.727787272135416%"),
    height: hp("12.231765288472827%"),
    top: hp("3.5962047472677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.744270833333335%")
  },
  ImageBackground_1155_9425: {
    width: wp("1.1374003092447915%"),
    height: hp("14.466082463498974%"),
    top: hp("6.983489156420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.475260416666671%")
  },
  ImageBackground_1155_9426: {
    width: wp("0.5721923828125001%"),
    height: hp("14.262810170324775%"),
    top: hp("7.186806267076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.798502604166671%")
  },
  ImageBackground_1155_9427: {
    width: wp("5.114866638183594%"),
    height: hp("2.7911597913731643%"),
    top: hp("8.797333931010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.746549479166667%")
  },
  ImageBackground_1155_9428: {
    width: wp("5.209110005696615%"),
    height: hp("2.08336147454267%"),
    top: hp("11.752369364754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.917773437499999%")
  },
  ImageBackground_1155_9429: {
    width: wp("21.439754231770834%"),
    height: hp("10.900186840953722%"),
    top: hp("5.904200819672134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.786458333333336%")
  },
  ImageBackground_1155_9431: {
    width: wp("20.522733561197917%"),
    height: hp("10.43516065253586%"),
    top: hp("6.136067708333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.249414062500001%")
  },
  View_1155_9432: {
    width: wp("0%"),
    height: hp("12.141822856632087%"),
    top: hp("9.234652493169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66868489583333%")
  },
  ImageBackground_1155_9433: {
    width: wp("1.2936299641927083%"),
    height: hp("12.141493500256148%"),
    top: hp("9.234652493169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.000585937500006%")
  },
  ImageBackground_1155_9434: {
    width: wp("0.7150797526041667%"),
    height: hp("12.141493500256148%"),
    top: hp("9.234652493169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.311132812500006%")
  },
  View_1155_9435: {
    width: wp("4.240323893229166%"),
    height: hp("2.2115874160182933%"),
    top: hp("10.659473189890711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.50071614583333%")
  },
  ImageBackground_1155_9436: {
    width: wp("4.750941975911458%"),
    height: hp("2.4675838282850924%"),
    top: hp("10.531666239754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.2451171875%")
  },
  View_1155_9437: {
    width: wp("4.395916748046875%"),
    height: hp("1.5771073721797086%"),
    top: hp("13.194800204918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.74108072916667%")
  },
  ImageBackground_1155_9438: {
    width: wp("4.806465657552083%"),
    height: hp("1.87652254365181%"),
    top: hp("13.04458034494536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.535611979166667%")
  },
  ImageBackground_1155_9439: {
    width: wp("34.53223876953125%"),
    height: hp("12.346062373593856%"),
    top: hp("11.364946209016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.432096354166667%")
  },
  ImageBackground_1155_9440: {
    width: wp("33.37578531901041%"),
    height: hp("18.73956899173924%"),
    top: hp("4.5146004098360635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.95865885416667%")
  },
  ImageBackground_1155_9441: {
    width: wp("7.40992431640625%"),
    height: hp("3.7886958304650142%"),
    top: hp("8.319992315573764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.924804687500007%")
  },
  ImageBackground_1155_9442: {
    width: wp("6.549409993489583%"),
    height: hp("3.3487236564928065%"),
    top: hp("13.867721140710387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.13391927083333%")
  },
  ImageBackground_1155_9443: {
    width: wp("6.549409993489583%"),
    height: hp("3.3487236564928065%"),
    top: hp("13.867721140710387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.443945312500006%")
  },
  ImageBackground_1155_9444: {
    width: wp("41.40426432291667%"),
    height: hp("10.713751329098894%"),
    top: hp("3.271484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.862434895833331%")
  },
  ImageBackground_1155_9445: {
    width: wp("40.76919352213542%"),
    height: hp("9.926009047878244%"),
    top: hp("3.549778005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.180013020833336%")
  },
  ImageBackground_1155_9446: {
    width: wp("8.00498046875%"),
    height: hp("5.598295451513405%"),
    top: hp("17.656036543715842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.59446614583333%")
  },
  ImageBackground_1155_9447: {
    width: wp("7.542014567057291%"),
    height: hp("5.479775100457863%"),
    top: hp("17.77450478142076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.825716145833333%")
  },
  ImageBackground_1155_9448: {
    width: wp("6.086452229817708%"),
    height: hp("1.099462457041923%"),
    top: hp("13.985922558060103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.431835937500004%")
  },
  ImageBackground_1155_9449: {
    width: wp("6.086452229817708%"),
    height: hp("2.0125415155796404%"),
    top: hp("15.08522242144808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.431835937500004%")
  },
  ImageBackground_1155_9450: {
    width: wp("6.086454264322916%"),
    height: hp("1.099462457041923%"),
    top: hp("13.985922558060103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.67571614583334%")
  },
  ImageBackground_1155_9451: {
    width: wp("6.086454264322916%"),
    height: hp("2.0125415155796404%"),
    top: hp("15.08522242144808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.67571614583334%")
  },
  ImageBackground_1155_9452: {
    width: wp("6.748191324869792%"),
    height: hp("1.726797760510054%"),
    top: hp("10.195739412568308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.222591145833334%")
  },
  ImageBackground_1155_9453: {
    width: wp("6.748191324869792%"),
    height: hp("1.7251749507716445%"),
    top: hp("10.180530652322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.222591145833334%")
  },
  ImageBackground_1155_9454: {
    width: wp("6.748191324869792%"),
    height: hp("1.723552141033235%"),
    top: hp("8.472346738387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.222591145833334%")
  },
  ImageBackground_1155_9455: {
    width: wp("6.748191324869792%"),
    height: hp("1.723552141033235%"),
    top: hp("8.472346738387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.222591145833334%")
  },
  ImageBackground_1155_9456: {
    width: wp("1.5876627604166664%"),
    height: hp("0.8117717471930498%"),
    top: hp("20.091572745901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8205078125%")
  },
  ImageBackground_1155_9457: {
    width: wp("1.1913736979166667%"),
    height: hp("0.6091529554356643%"),
    top: hp("20.192964480874323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.0185546875%")
  },
  ImageBackground_1155_9458: {
    width: wp("9.724737548828125%"),
    height: hp("1.6235414098520746%"),
    top: hp("22.459336577868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.601888020833336%")
  },
  ImageBackground_1155_9459: {
    width: wp("9.32781982421875%"),
    height: hp("1.3868258950488817%"),
    top: hp("22.59434767759562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.800065104166663%")
  },
  ImageBackground_1155_9460: {
    width: wp("11.161316935221354%"),
    height: hp("6.008080446003565%"),
    top: hp("15.616194928278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.384179687500005%")
  },
  ImageBackground_1155_9462: {
    width: wp("10.476694742838543%"),
    height: hp("5.637910978390219%"),
    top: hp("15.800567793715842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.728385416666669%")
  },
  ImageBackground_1155_9463: {
    width: wp("0.5245625813802083%"),
    height: hp("6.668212765552958%"),
    top: hp("17.362534153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.135351562500006%")
  },
  ImageBackground_1155_9464: {
    width: wp("0.2635518391927083%"),
    height: hp("6.57469535785946%"),
    top: hp("17.455921277322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.284635416666667%")
  },
  ImageBackground_1155_9465: {
    width: wp("2.357720947265625%"),
    height: hp("1.2866098372662653%"),
    top: hp("18.197148224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.2611328125%")
  },
  ImageBackground_1155_9466: {
    width: wp("2.400945027669271%"),
    height: hp("0.9602072460403859%"),
    top: hp("19.561133879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.034700520833333%")
  },
  ImageBackground_1155_9467: {
    width: wp("9.886035156250001%"),
    height: hp("5.026530698348916%"),
    top: hp("16.864113729508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.281445312500004%")
  },
  ImageBackground_1155_9469: {
    width: wp("9.465627034505209%"),
    height: hp("4.809620341316599%"),
    top: hp("16.970575051229503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.4833984375%")
  },
  View_1155_9470: {
    width: wp("0%"),
    height: hp("5.597003040417947%"),
    top: hp("18.399931693989075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.834179687500004%")
  },
  ImageBackground_1155_9471: {
    width: wp("0.5963277180989583%"),
    height: hp("5.596677853110058%"),
    top: hp("18.399931693989075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.52623697916667%")
  },
  ImageBackground_1155_9472: {
    width: wp("0.32960205078125%"),
    height: hp("5.596677853110058%"),
    top: hp("18.399931693989075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.669726562500003%")
  },
  View_1155_9473: {
    width: wp("1.9547261555989583%"),
    height: hp("1.0195851977405652%"),
    top: hp("19.056843408469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.9130859375%")
  },
  ImageBackground_1155_9474: {
    width: wp("2.1901346842447915%"),
    height: hp("1.1375364710073004%"),
    top: hp("18.998142930327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.795247395833336%")
  },
  View_1155_9475: {
    width: wp("2.0264912923177083%"),
    height: hp("0.7270229318754269%"),
    top: hp("20.225516564207652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.867903645833337%")
  },
  ImageBackground_1155_9476: {
    width: wp("2.2156412760416666%"),
    height: hp("0.8650149152578551%"),
    top: hp("20.155876451502735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.773502604166673%")
  },
  ImageBackground_1155_9477: {
    width: wp("9.144918823242188%"),
    height: hp("2.2801008380827357%"),
    top: hp("16.357688695355193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.666080729166666%")
  },
  ImageBackground_1155_9478: {
    width: wp("2.878744761149089%"),
    height: hp("9.091831686718216%"),
    top: hp("15.202890198087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.432747395833335%")
  },
  ImageBackground_1155_9479: {
    width: wp("2.4272145589192706%"),
    height: hp("8.601194913270044%"),
    top: hp("15.375789788251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6582031250000036%")
  },
  ImageBackground_1155_9480: {
    width: wp("17.27374267578125%"),
    height: hp("1.587497732026981%"),
    top: hp("15.578306437841533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6986328125000014%")
  },
  ImageBackground_1155_9481: {
    width: wp("16.82221374511719%"),
    height: hp("1.2410346276121713%"),
    top: hp("15.751206028005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9247395833333343%")
  },
  ImageBackground_1155_9482: {
    width: wp("1.016102345784505%"),
    height: hp("0.5195357109028134%"),
    top: hp("16.09780566939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.392382812500003%")
  },
  ImageBackground_1155_9483: {
    width: wp("1.016107177734375%"),
    height: hp("0.5195357109028134%"),
    top: hp("16.09780566939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.996679687499999%")
  },
  ImageBackground_1155_9484: {
    width: wp("0.7900194803873698%"),
    height: hp("0.4039378765502263%"),
    top: hp("16.15543886612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.505403645833333%")
  },
  ImageBackground_1155_9485: {
    width: wp("0.7900197347005209%"),
    height: hp("0.4039378765502263%"),
    top: hp("16.15543886612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.109765625%")
  },
  ImageBackground_1155_9486: {
    width: wp("10.895155843098959%"),
    height: hp("3.7809028000128073%"),
    top: hp("18.493051997950815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.81959635416667%")
  },
  ImageBackground_1155_9487: {
    width: wp("10.725598144531249%"),
    height: hp("3.6367301732464568%"),
    top: hp("18.536543715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.904036458333337%")
  },
  ImageBackground_1155_9488: {
    width: wp("7.564246114095052%"),
    height: hp("0.346464146681822%"),
    top: hp("19.113676144125677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.146223958333337%")
  },
  ImageBackground_1155_9489: {
    width: wp("5.362480163574219%"),
    height: hp("0.346464146681822%"),
    top: hp("19.791933487021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.529361979166669%")
  },
  ImageBackground_1155_9490: {
    width: wp("6.491624450683593%"),
    height: hp("0.346464146681822%"),
    top: hp("20.47019082991804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.851757812500001%")
  },
  ImageBackground_1155_9491: {
    width: wp("7.564247131347656%"),
    height: hp("0.3464620621477971%"),
    top: hp("21.148714993169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.230664062500001%")
  },
  ImageBackground_1155_9492: {
    width: wp("10.148368326822917%"),
    height: hp("5.461539596807762%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.77167968749999%")
  },
  ImageBackground_1155_9494: {
    width: wp("9.52537841796875%"),
    height: hp("5.126511203786714%"),
    top: hp("17.107453893442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.082877604166676%")
  },
  ImageBackground_1155_9495: {
    width: wp("0.4769368489583333%"),
    height: hp("6.062627490100965%"),
    top: hp("18.527471823770497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.21386718750001%")
  },
  ImageBackground_1155_9496: {
    width: wp("0.24005940755208333%"),
    height: hp("5.977553487475452%"),
    top: hp("18.612587517076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.31555989583334%")
  },
  ImageBackground_1155_9497: {
    width: wp("2.143721516927083%"),
    height: hp("1.1698050577132428%"),
    top: hp("19.290311219262293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.433919270833336%")
  },
  ImageBackground_1155_9498: {
    width: wp("2.1835042317708333%"),
    height: hp("0.8733217833472079%"),
    top: hp("20.52515582308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.41790364583334%")
  },
  ImageBackground_1155_9499: {
    width: wp("8.989326985677083%"),
    height: hp("4.570626430824155%"),
    top: hp("18.072809938524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.572591145833336%")
  },
  ImageBackground_1155_9501: {
    width: wp("8.601306152343751%"),
    height: hp("4.371588868521601%"),
    top: hp("18.172333931010925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.769466145833334%")
  },
  View_1155_9502: {
    width: wp("0%"),
    height: hp("5.08850181037611%"),
    top: hp("19.47121542008196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.41881510416666%")
  },
  ImageBackground_1155_9503: {
    width: wp("0.5423421223958333%"),
    height: hp("5.08850181037611%"),
    top: hp("19.47121542008196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.157096354166676%")
  },
  ImageBackground_1155_9504: {
    width: wp("0.299755859375%"),
    height: hp("5.08850181037611%"),
    top: hp("19.47121542008196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.2689453125%")
  },
  View_1155_9505: {
    width: wp("1.7769124348958332%"),
    height: hp("0.9267171223958334%"),
    top: hp("20.068359375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.388997395833336%")
  },
  ImageBackground_1155_9506: {
    width: wp("1.9909992218017578%"),
    height: hp("1.0341039120825264%"),
    top: hp("20.01472848360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.2818359375%")
  },
  View_1155_9507: {
    width: wp("1.8429606119791668%"),
    height: hp("0.6607806096311475%"),
    top: hp("21.130571209016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.54602864583333%")
  },
  ImageBackground_1155_9508: {
    width: wp("2.0144735972086587%"),
    height: hp("0.7864884991463416%"),
    top: hp("21.068402066256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.46022135416667%")
  },
  View_1155_9509: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("83.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1155_9509_939_329: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1155_9509_939_330: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1155_9509_939_331: {
    width: wp("78%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.333333333333334%")
  },
  Text_I1155_9509_939_331: {
    color: "rgba(247, 247, 252, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_1155_9510: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("26.366120218579237%")
  },
  Text_1155_9510: {
    color: "rgba(42, 151, 112, 1)",
    fontSize: 12,
    fontWeight: "700",
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
