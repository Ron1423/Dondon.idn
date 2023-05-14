import { StyleSheet, View, Linking } from 'react-native'
import React from 'react'
import { Header,Footer ,Slider,HomeButton } from '../../components';
import { profile,icFoods, icDrinks, icSnacks, icInfo, icHistory, icPay, icFb, icInstagram, icTikTok } from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style = {styles.bodyView}>
        <Header title={"Selamat Datang"} name={"Deo Timothy"} isProfile={true} IcProf={profile} toSignIn={()=>navigation.navigate('SignIn')}/>
        <Slider/>
        <View style = {styles.ATView}>
            <View style = {styles.btnView}>
                <HomeButton text={'Makanan'} pict={icFoods} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Makanan',})}/>
                <HomeButton text={'Minuman'} pict={icDrinks} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Minuman',})}/>
                <HomeButton text={'Camilan'} pict={icSnacks} isItem={true} onPress={()=>navigation.navigate('Menus',{title : 'Camilan',})}/>
            </View>
            <View style = {styles.btnView}>
                <HomeButton text={'Metode Pembayaran'} isItem={true} pict={icPay} onPress={()=>navigation.navigate('OrderSummary')}/>
                <HomeButton text={'Riwayat Pembelian'} isItem={true} pict={icHistory} onPress={()=>navigation.navigate('OrderSuccess')}/>
                <HomeButton text={'Tentang Kami'} isItem={true} pict={icInfo} onPress={()=>navigation.navigate('AboutUs')}/>
            </View>
            <View style = {styles.smView}>
                <HomeButton pict={icFb} isSosmed={true} onPress={() =>Linking.openURL('https://www.facebook.com/profile.php?id=100091851280080&mibextid=ZbWKwL')}/>
                <HomeButton pict={icInstagram} isSosmed={true} onPress={() =>Linking.openURL('https://www.instagram.com/dondon.idn/')}/>
                <HomeButton pict={icTikTok} isSosmed={true} onPress={() =>Linking.openURL('https://www.tiktok.com/@dondon.idn')}/>
            </View>
        </View>
        <Footer onPress={()=>navigation.navigate('OrderSummary')}/>
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