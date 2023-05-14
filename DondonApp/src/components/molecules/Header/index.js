import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { icProfile,back,logo2 } from '../../../assets';
import { Gap } from '../../atoms';

const Header = ({ isHeader,isProfile,isAbout,onBack,toSignIn,title,name,IcProf={icProfile}}) => {
  return (
    <View style = {styles.mrgn}>
      {onBack && (    
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back} >
            <Image source={back}/>
          </View>
        </TouchableOpacity>
      )}
      {isHeader && (
        <View style = {styles.header2}>
          <Gap width={80}/>
          <Image source={logo2} style={styles.logo2}/>
          <Gap width={70}/>
          <TouchableOpacity onPress={toSignIn}>
            <Image style = {styles.image2} source={IcProf}/>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.headerView}>
        <Text style = {styles.txt}>{title}</Text>
        {isProfile && (
          <View>  
            <Text style = {styles.subHead}>{name}</Text>
            <TouchableOpacity onPress={toSignIn}>
              <Image style = {styles.image} source={IcProf}/>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Gap width={60}/>
      {isAbout &&(
        <View>
          <TouchableOpacity onPress={toSignIn}>
              <Image style = {styles.image1} source={IcProf}/>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    mrgn : {
      height : 108,
      backgroundColor : '#FFFFFF',
      alignItems : 'center',
      flexDirection : 'row'
    },

    back : {
      marginLeft : 24,
      padding : 15,
    },

    header2 : {
      paddingVertical : 20,
      flexDirection : 'row',
      flexGrow : 1,
      justifyContent : 'center',
      alignItems : 'center',
    },

    logo2 : {
      width : 90,
      height : 90,
    },

    headerView : {
      paddingLeft : 24,
    },

    txt : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 500,
        fontSize : 27,
        color : '#020202',
    },

    subHead : {
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 300,
      fontSize : 17,
      lineHeight : 24,
      color : '#000000'
    },

    image : {
      position : "absolute",
      bottom : 2,
      height : 60,
      width : 60,
      borderRadius : 60,
      left : 290,
    },

    image2 : {
      width : 60,
      height : 60,
      borderRadius : 60,
    },

    image1 : {
      width : 60,
      height : 60,
      borderRadius : 60,
    }
})