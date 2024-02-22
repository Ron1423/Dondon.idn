import { StyleSheet, View, Linking } from 'react-native'
import { Header,Footer,Slider,HomeButton } from '../../components';
import { GProf,icFoods, icDrinks, icSnacks, icInfo, icHistory, icPay, icFb, icInstagram, icTikTok } from '../../assets';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style = {styles.bodyView}>
        <Header title={"Welcome"} name={"Guest"} isProfile={true} IcProf={true} onPress={()=>navigation.navigate('SignIn')}/>
        <Slider onPress={()=>navigation.navigate('Makanan')} />
        <View style = {styles.ATView}>
            <View style = {styles.btnView}>
                <HomeButton text={'Food'} pict={icFoods} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Food',})}/>
                <HomeButton text={'Drink'} pict={icDrinks} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Drink',})}/>
                <HomeButton text={'Other'} pict={icSnacks} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Other',})}/>
            </View>
            <View style = {styles.btnView}>
                <HomeButton text={'Payment'} isItem={true} pict={icPay} onPress={()=>navigation.navigate('OrderSummary')}/>
                <HomeButton text={'Receipt'} isItem={true} pict={icHistory} onPress={()=>navigation.navigate('OrderSuccess')}/>
                <HomeButton text={'About Us'} isItem={true} pict={icInfo} onPress={()=>navigation.navigate('AboutUs')}/>
            </View>
            <View style = {styles.smView}>
                <HomeButton pict={icFb} isSosmed={true} onPress={() =>Linking.openURL('https://www.facebook.com/profile.php?id=100091851280080&mibextid=ZbWKwL')}/>
                <HomeButton pict={icInstagram} isSosmed={true} onPress={() =>Linking.openURL('https://www.instagram.com/dondon.idn/')}/>
                <HomeButton pict={icTikTok} isSosmed={true} onPress={() =>Linking.openURL('https://www.tiktok.com/@dondon.idn')}/>
            </View>
        </View>
        <Footer isPesanan = {true} items={'2 Items'} price={'40.000'} onPress={()=>navigation.navigate('OrderSummary')}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    bodyView : {
        flexGrow : 1,
        justifyContent : 'space-between',
        backgroundColor : 'white'
    },

    ATView : {
        flex : 1,
        justifyContent : 'center',
        padding : 50,
        backgroundColor : '#FFFFFF',
    },

    btnView : {
        flexDirection : 'row',
        flexGrow : 1,
        justifyContent : 'space-between',
        marginVertical : 10
    },

    smView : {
        flexDirection : 'row',
        flexGrow : 1,
        justifyContent : 'space-between',
        marginVertical : 10
    }
})