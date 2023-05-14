import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { FontFamily, Color } from "../../assets/GlobalStyles";
import { icIG,bulat,check,profile } from "../../assets";
import { Header } from "../../components";

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.orderSuccess}>
      <Header isHeader={true} IcProf={profile} onBack={() => navigation.goBack()} toSignIn={()=>navigation.navigate('SignIn')}/>
      <ImageBackground style = {styles.bulatView} source={bulat}>
        <View>
          <Text style={styles.terimaKasih}>Terima Kasih</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image
            style={styles.checkcirclefillIcon}
            resizeMode="cover"
            source={check}
          />
        </TouchableOpacity>
        <Text
          style={[styles.pesananAndaSedang, styles.dondonidnTypo]}
        >{`Pesanan anda sedang dibuat,
        silahkan pesan lagi...`}</Text>
      </ImageBackground>
      <View style={styles.InstaC}>
        <Image
          style={[styles.Insta, styles.dondonidnPosition]}
          resizeMode="cover"
          source={icIG}
        />
        <Text style={[styles.dondonidn, styles.dondonidnPosition]}>
          dondon.idn
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dondonidnTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.white,
  },
  dondonidnPosition: {
    top: 0,
    position: "absolute",
  },
  bulatView : {
    top : 30,
    alignItems : 'center',
    flex : 1,
    flexGrow : 1,
    justifyContent : 'space-between',
  },
  terimaKasih: {
    top : 100,
    fontSize: 35,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.white,

  },
  checkcirclefillIcon: {
    width: 140,
    height: 140,
    overflow: "hidden",
    bottom : 50
  },
  pesananAndaSedang: {
    fontSize: 16,
    bottom : 200
  },
  Insta: {
    width: 16,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  dondonidn: {
    left: 22,
    fontSize: 12,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.white,
    textAlign: "left",
  },
  InstaC: {
    top:688,
    left: 149,
    width: 92,
    height: 18,
    position: "absolute",
  },
  orderSuccess: {
    borderRadius: 35,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default OrderSuccess;
