import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React, {useState} from 'react'
import { Gap, Header } from '../../components'
import { IGvector, profile } from '../../assets';
import { logo3 } from '../../assets';

const AboutUs = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <Header title={"Tentang Kami"} isAbout={true} IcProf={profile} onBack={() => navigation.goBack()} onPress={()=>navigation.navigate('SignIn')}/>
        <View style = {{ alignItems : 'center', marginVertical : 20}}>
            <View>
                <Image source={logo3} style = {styles.imageStyle}/>
            </View>
        </View>
        <View style = {styles.textContainter}>
            <View>
                <Text style = {styles.subTitle}>Dondon Cafe & Resto</Text>
                <Gap height={7}/>
                <Text style = {styles.textStyle}>Tasty food, refreshing drinks and amazing desserts.
                    WE ARE OPEN EVERY DAY except the Sabbath.
                    Order via Gofood & Grabfood 
                    Recommended Cafe & Resto</Text>
                <Gap height={7}/>
                <Text>Call Us : </Text>
                <TouchableOpacity>
                    <Text style = {styles.textStyle}>WhatsApp : 085802582297</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Gap height={20}/>
        <View style = {styles.alamatContainter}>
            <View>
                <Text style = {styles.subTitle}>Alamat</Text>
                <Gap height={7}/>
                <Text style = {styles.textStyle}>CX8P+WMW, Airmadidi Atas, Airmadidi, North Minahasa Regency, North Sulawesi</Text>
                <Gap height={10}/>
                <TouchableOpacity onPress={() =>Linking.openURL('https://goo.gl/maps/Fz6FvhQoLGLreDNV6?coh=178571&entry=tt')}>
                    <Text style = {styles.textStyle}>Maps</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <TouchableOpacity style = {styles.igView} onPress={() =>Linking.openURL('https://www.instagram.com/dondon.idn/')}>
                <Image source={IGvector} style = {styles.igVec}/>
                <Gap width={5}/>
                <Text  style= {styles.textStyle}>dondon.idn</Text>
            </TouchableOpacity>
        </View>
        <View>
            <View style = {styles.footerText}>
                <Text style = {styles.textStyle}>2023@dondon</Text>
            </View>
        </View>
    </View>
  )
}

export default AboutUs;

const styles = StyleSheet.create({
    container : {
        flexGrow : 1,
        justifyContent : 'space-between',
        backgroundColor : 'white'
    },

    imageStyle : {
        width : 160,
        height : 160,
    },

    textContainter : {
        marginHorizontal : 20,
    },

    subTitle : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 600,
        fontSize : 16,
        color : '#FFD400'
    },

    textStyle : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 400,
        fontSize : 13,
        color : '#000000'
    },

    alamatContainter : {
        marginHorizontal : 20,
    },

    igView : {

        flexDirection : 'row', 
        justifyContent : 'center', 
        alignItems : 'center',
        height : 100
    },

    igVec : {
        width : 13,
        height : 13,
    },

    footerText : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 90
    }
})