import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const FooterOS = ({ onPress }) => {
  return (
        <View style = {styles.areaView}>
            <Text style = {styles.textView}>Total</Text>
            <Text style = {styles.Text}>Rp 40.000</Text>
            <TouchableOpacity onPress={onPress}>
                <View style = {styles.button}>
                    <Text style = {styles.textDet}>Bayar</Text>
                    
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
        right : 150,
        fontFamily : 'Poppins',
        fontWeight : 'bold',
        fontSize : 20,
        fontWeight : 800,
        fontSize : 17,
        color : '#222222',
        marginVertical : -30
    },

    Text : {
        right : -130,
        fontFamily : 'Poppins',
        fontWeight : 'bold',
        fontSize : 20,
        fontWeight : 800,
        fontSize : 17,
        color : '#222222',
        marginVertical : 6
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
        color : 'white',
        right : -138
    }
})

export default FooterOS;