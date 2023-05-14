import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { Item1,Item2,Header,Footer } from '../../components'
import Fries from '../../assets/pict/fries.jpeg'
import { profile } from '../../assets';

const Menus = ({ route,navigation }) => {
    const {title} = route.params;
  return (
    <View style = {styles.container}>
        <Header isHeader={true} IcProf={profile} onBack={() => navigation.goBack()} toSignIn={()=>navigation.navigate('SignIn')}/>
            <ScrollView style = {{backgroundColor : '#FFFFFF'}}>
                <View>
                    <Text style = {styles.titleText}>{title}</Text>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                        <Item1 name={'Ayam Rempah'} image={Fries} price={'15.000'}/>
                    </View>
                </View>
            </ScrollView>
        <Footer onPress={()=>navigation.navigate('OrderSummary')}/>
    </View>
  )
}

export default Menus;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    titleText : {
        fontFamily : 'Poppins',
        fontSize : 25,
        fontStyle : 'normal',
        fontWeight : 800,
        color : '#222222',

        left : 15,
        marginBottom : 20
    },

    containerItem1 : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },

    containerItem2 : {
        marginHorizontal : 15,
        marginVertical : 25
    }
})