import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Footer = ({ onPress,items,price,priceT,isPay,isPesanan,isPayText,justify='space-between' }) => {
  return (
        <View style = {styles.areaView}>
            {isPesanan &&(
                <Text style = {styles.textView}>Pesanan</Text>
            )}
            {isPayText&&(
                <View style={styles.isPay}>
                    <Text style = {styles.IsPayView}>Total</Text>
                    <Text style = {styles.IsPayView}>{priceT}</Text>
                </View>
            )}
            <TouchableOpacity onPress={onPress}>
                <View style = {styles.button(justify)}>
                    {isPay &&(
                        <View style={styles.payView}>
                            <Text style = {styles.textPay}>Bayar</Text>
                        </View>
                    )}
                    <Text style = {styles.textDet}>{items}</Text>
                    <Text style = {styles.textDet}>{price}</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
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

    isPay : {
        width : 360,
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 10
    },

    IsPayView : {
        fontFamily : 'Poppins',
        fontSize : 'normal',
        fontWeight : 800,
        fontSize : 17,
        color : '#222222',
        marginVertical : 5
    },

    button : justify => ({
        width : 360,
        height : 50,
        backgroundColor : '#FFD400',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : justify,
        paddingHorizontal : 20,
        borderRadius : 10,
    }),

    textPay : {
        fontFamily : 'Poppins',
        fontSize : 'normal',
        fontWeight : 800,
        fontSize : 17,
        color : 'white',
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