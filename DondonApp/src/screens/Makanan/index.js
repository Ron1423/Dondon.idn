import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { Item1,Header,Footer } from '../../components';
import { profile,kentang, roticokju, redDrink,purpDrink, cabeijoo, nasicampur, choco, bakar, mango, rempah } from '../../assets';

const Makanan = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <Header isHeader={true} IcProf={profile} onBack={() => navigation.goBack()} toSignIn={()=>navigation.navigate('SignIn')}/>
            <ScrollView style = {{backgroundColor : '#FFFFFF'}}>
                <View>
                    <Text style = {styles.titleText}>All Menus</Text>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Kentang'} image={kentang} price={'15.000'}/>
                        <Item1 name={'Roti Bakar'} image={roticokju} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Red Velvet'} image={redDrink} price={'15.000'}/>
                        <Item1 name={'Taro Blend'} image={purpDrink} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Cabe Ijo'} image={cabeijoo} price={'15.000'}/>
                        <Item1 name={'Nasi Campur'} image={nasicampur} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Chocolate Blend'} image={choco} price={'15.000'}/>
                        <Item1 name={'Manggo Blend'} image={mango} price={'15.000'}/>
                    </View>
                    <View style = {styles.containerItem1}>
                        <Item1 name={'Ayam Bakar'} image={bakar} price={'15.000'}/>
                        <Item1 name={'Ayam Rempah'} image={rempah} price={'15.000'}/>
                    </View>
                </View>
            </ScrollView>
            <Footer isPesanan = {true} items={'2 Items'} price={'40.000'} onPress={()=>navigation.navigate('OrderSummary')}/>
    </View>
  )
}

export default Makanan;

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