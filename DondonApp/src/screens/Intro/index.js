import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image, ToastAndroid } from 'react-native'
import React from 'react'
import { intro } from '../../assets'
import next  from '../../assets/icons/Arrow.png'

import SwipeButton from 'rn-swipe-button';

const Intro = ({navigation}) => {
  return (
    <ImageBackground source={intro} style = {styles.container}>
      <View style={styles.tagView}>
        <Text style={styles.tag}>#dondon4lyfe</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.titleView}>WELCOME,{"\n"}DONDONERS!</Text>
        <Text style={styles.subtitle}>Sign up now and start earning rewards!</Text>
      </View>
      <View style={styles.swipeView}>
        <SwipeButton
          thumbIconImageSource={next}
          disabled={false}
          title = "Swipe to order!"
          titleColor='white'
          railBackgroundColor='#FFC52E'
          railBorderColor='#FFC52E'
          thumbIconBackgroundColor='#FFC52E'
          thumbIconBorderColor='#FFC52E'
          railFillBackgroundColor='#FFC52E'
          railFillBorderColor='#FFC52E'
          width={340}
          onSwipeSuccess={() =>  {
            navigation.navigate("Home")
          }}
          forceReset={ reset => {
            forceResetLastButton = reset
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default Intro;

const styles = StyleSheet.create({
  container : {
    flexGrow : 1,
  },
  back : {
    position : 'absolute',
    top : 30,
    left : 350,
  },
  textView : {
    position : 'relative',
    width : 500,
    height : 100,
    top : 530,
    left : 20,
  },
  titleView : {
    fontFamily : 'Bowlby One',
    fontStyle: 'normal',
    fontWeight : 400,
    fontSize : 38,
    fontWeight : '900',
    color : '#FFFFFF',
    textShadowColor : 'black',
    textShadowRadius : 10
  },
  subtitle :{
    fontFamily : 'Bowlby One',
    fontStyle: 'normal',
    fontWeight : 400,
    fontSize : 13,
    fontWeight : '900',
    color : '#FFFFFF',
    textShadowColor : 'black',
    textShadowRadius : 1
  },

  tagView : {
    left : 20,
    top : 35
  },
  
  tag : {
    fontFamily : 'Bowlby One',
    fontStyle: 'normal',
    fontWeight : 400,
    fontSize : 16,
    fontWeight : '900',
    color : '#FFFFFF',
    textShadowColor : 'black',
    textShadowRadius : 1
  },

  swipeView : {
    alignItems : 'flex-start',
    top : 550
  }
})