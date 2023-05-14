import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonAT = ({text, color='#02CF8E', textColor='#020202', onPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer(color),styles.shadowProp]} activeOpacity={0.70}>
            <Text style={styles.appButtonText(textColor)}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonAT;

const styles = StyleSheet.create({
  appButtonContainer: color => ({
    elevation: 7,
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 70
  }),
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
      lineHeight : 23
  }),
})