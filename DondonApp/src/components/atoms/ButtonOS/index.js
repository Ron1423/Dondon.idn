import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonOS = ({text, color='#FFD400', textColor='#FFFFFF', onPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer(color),styles.shadowProp]} activeOpacity={0.70}>
            <Text style={styles.appButtonText(textColor)}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonOS;

const styles = StyleSheet.create({
  appButtonContainer: color => ({
    elevation: 7,
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 40,
    width : 350,
    bottom : 176,
    right : -28
    
  }),

  text : {
      color : '#FFFFFF'
    },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  appButtonText: textColor => ({
      fontSize: 18,
      color: textColor,
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 600,
      fontSize : 17,
      lineHeight : 23,
      right : 120,
      bottom : 25
  }),
})