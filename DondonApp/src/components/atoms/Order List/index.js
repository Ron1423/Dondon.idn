import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderList = ({ amount,name,price }) => {
  return (
    <View style={styles.appContainer} activeOpacity={0.70}>
        <Text style={styles.appText}>{amount}x</Text>
        <Text style={styles.appText}>{name}</Text>
        <Text style={styles.appText}>{price}</Text> 
    </View>
  )
}

export default OrderList;

const styles = StyleSheet.create({
    appContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    appText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: "bold",
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 600,
        lineHeight : 23,
    },
})