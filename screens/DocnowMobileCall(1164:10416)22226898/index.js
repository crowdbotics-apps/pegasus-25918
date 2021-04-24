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
      <View style={styles.View_1164_10507}>
        <View style={styles.View_1164_10508} />
        <View style={styles.View_1164_10509} />
        <View style={styles.View_1164_10510} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6824/9fa3/8755e99c03a009cf429597c325932f46"
          }}
          style={styles.ImageBackground_1164_10511}
        />
      </View>
      <View style={styles.View_1164_10512}>
        <View style={styles.View_1164_10513} />
        <View style={styles.View_1164_10514}>
          <View style={styles.View_1164_10515} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7077/f432/42eaa7bfee7f567837cb34f707ed5617"
            }}
            style={styles.ImageBackground_1164_10516}
          />
        </View>
      </View>
      <View style={styles.View_1164_10424}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9643/134c/e66de8231d416213b62e79402c9af3a5"
          }}
          style={styles.ImageBackground_I1164_10424_478_380}
        />
        <View style={styles.View_I1164_10424_478_381}>
          <View style={styles.View_I1164_10424_478_381_1113_6881} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c77/8cf9/13e512ef2a2eac13875bf02839e7dcb7"
            }}
            style={styles.ImageBackground_I1164_10424_478_381_1113_6882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e369/c439/417e9bad41790950dfe7f46c0e234db2"
            }}
            style={styles.ImageBackground_I1164_10424_478_381_1113_6883}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/165c/5943/f9242271b5f2b2f5fddc5f18a775b1d8"
            }}
            style={styles.ImageBackground_I1164_10424_478_381_1113_6884}
          />
        </View>
      </View>
      <View style={styles.View_1164_10517}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd04/1057/35fcfb0be8e6eec5c208a58db183d6da"
          }}
          style={styles.ImageBackground_I1164_10517_1146_1009}
        />
        <View style={styles.View_I1164_10517_1146_1010} />
      </View>
      <View style={styles.View_1164_10521}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9643/134c/e66de8231d416213b62e79402c9af3a5"
          }}
          style={styles.ImageBackground_I1164_10521_478_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b351/b5b0/83e0a9128b3e27827078029f2102fe2f"
          }}
          style={styles.ImageBackground_I1164_10521_478_381}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1164_10507: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1164_10508: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10509: {
    width: wp("100.02684733072917%"),
    minWidth: wp("100.02684733072917%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  View_1164_10510: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  ImageBackground_1164_10511: {
    width: wp("261.6%"),
    height: hp("89.34426229508196%"),
    top: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-77.33333333333333%"),
    resizeMode: "cover"
  },
  View_1164_10512: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("5.46448087431694%")
  },
  View_1164_10513: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1164_10514: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.366120218579236%")
  },
  View_1164_10515: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_1164_10516: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1164_10424: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10424_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1164_10424_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1164_10424_478_381_1113_6881: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.1366120218579141%"),
    borderColor: "rgba(78, 75, 102, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I1164_10424_478_381_1113_6882: {
    flexGrow: 1,
    width: wp("3.733333333333334%"),
    height: hp("1.2978142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.2978142076502763%")
  },
  ImageBackground_I1164_10424_478_381_1113_6883: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("2.5956284153005384%")
  },
  ImageBackground_I1164_10424_478_381_1113_6884: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("3.1420765027322375%")
  },
  View_1164_10517: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("93.44262295081968%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10517_1146_1009: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1164_10517_1146_1010: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(228, 1, 115, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1164_10521: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.66666666666667%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1164_10521_478_380: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1164_10521_478_381: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("2.185792349726782%")
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
