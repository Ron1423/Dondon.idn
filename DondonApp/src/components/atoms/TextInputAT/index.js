import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInputAT = props => {
  return (
    <View>
      <Text style = {styles.txtView}>{props.label}</Text>
      <TextInput style = {styles.txtinputBorder} placeholder = {props.placeholder}/>
    </View>
  )
}

export default TextInputAT

const styles = StyleSheet.create({
  txtView : {
    marginBottom : 6,
    fontFamily : 'Poppins',
    fontStyle : 'normal',
    fontWeight : 600,
    fontSize : 19,

    color : '#020202'
},

txtinputBorder : {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    padding : 10,
  },
})