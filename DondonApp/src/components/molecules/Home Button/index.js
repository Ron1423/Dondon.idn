import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const HomeButton = ({onPress,pict,text,isSosmed,isItem}) => {
  return (
    <View style = {styles.container}>
        {isSosmed && (
            <View>
                <TouchableOpacity onPress={onPress}>
                        <Image source = {pict} style = {styles.pict}/>
                </TouchableOpacity>
            </View>
        )}
        {isItem && (
            <View>
                <TouchableOpacity onPress={onPress} style = {styles.btnView} >
                        <Image source = {pict} style = {styles.pict}/>
                </TouchableOpacity>
                <View style = {styles.textVIew}>
                    <Text style = {styles.text}>{text}</Text>
                </View>
            </View>
        )}
    </View>
  )
}

export default HomeButton;

const styles = StyleSheet.create({
    container : {
        alignItems : 'center'
    },

    btnView : {
        height : 70,
        width : 70,
        backgroundColor : '#FFD400',
        borderRadius : 10,
    },

    pict : {
        height : 70,
        width : 70,
    },

    textVIew : {
        width : 75,
        alignItems : 'center'
    },

    text : {
        fontFamily : '',
        fontStyle : 'normal',
        fontWeight : 400,
        fontSize : 13,
        color : '#000000',
        textAlign : 'center'
    }
})