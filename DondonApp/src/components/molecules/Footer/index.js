import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Footer = ({ onPress }) => {
  return (
        <View style = {styles.areaView}>
            <Text style = {styles.textView}>Pesanan</Text>
            <TouchableOpacity onPress={onPress}>
                <View style = {styles.button}>
                    <Text style = {styles.textDet}>2 Items</Text>
                    <Text style = {styles.textDet}>Rp.40.000</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

styles = StyleSheet.create({
    areaView : {
        height : 100,
        flexDirection : 'column',
        backgroundColor : '#FFFFFF',
        alignItems : 'center',

    },

    textView : {
        right : 140,
        fontFamily : 'Poppins',
        fontSize : 'normal',
        fontWeight : 800,
        fontSize : 17,
        color : '#222222',
        marginVertical : 5
    },

    button : {
        width : 360,
        height : 50,
        backgroundColor : '#FFD400',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : 20,
        borderRadius : 10,
    },

    textDet : {
        fontFamily : 'Poppins',
        fontSize : 'normal',
        fontWeight : 800,
        fontSize : 17,
        color : 'white'
    }
})

export default Footer;