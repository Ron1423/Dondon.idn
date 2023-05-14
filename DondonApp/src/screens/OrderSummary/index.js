import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Header,ButtonAT,ButtonOS,Gap,FooterOS} from '../../components';
import { profile } from '../../assets';
import { Logo } from '../../assets';


const OrderSummary = ({navigation}) => {
  return (
    // <ScrollView>
    <View style = {styles.bodyView}>
         <Header isHeader={true} IcProf={profile} onBack={() => navigation.goBack()} toSignIn={()=>navigation.navigate('SignIn')}/>
        <View style = {styles.ATView}>
            <Text style ={styles.order}>Order</Text> 
            <Text style ={styles.odrsum}>Order Summary </Text>  
            <Gap height={25}/>
            <ButtonOS text={'Delivery'} />
            {/* onPress={()=>navigation.navigate('',{title :''})} */}
            <View style={[styles.appContainer,styles.shadowProp]} activeOpacity={0.70}>
              <Text style={styles.appText}>1x</Text>
              <Text style={styles.appText2}>Ayam Geprek</Text>
              <Text style={styles.appText3}>Rp 20.000</Text> 
            </View>
        </View>
        
        <FooterOS onPress={()=>navigation.navigate('OrderSuccess')}/>
        
    </View>
    /* </ScrollView> */
  )
}

export default OrderSummary;

const styles = StyleSheet.create({
    bodyView : {
        flexGrow : 1,
        justifyContent : 'space-between',
    },

    

    order :{
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 'bold',
      fontSize : 20,
      color : '#000000',
      lineHeight : 24,
      top : -141,
      right : -30
    },

    odrsum :{
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 'bold',
      fontSize : 20,
      color : '#000000',
      lineHeight : 24,
      bottom : -1,
      right : -30
    },

    appContainer: {
      elevation: 3.5,
      backgroundColor:'white' ,
      borderRadius: 10,
      paddingVertical: 50,
      width : 350,
      bottom : 120,
      right : -28
      
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    appText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 600,
        fontSize : 17,
        lineHeight : 23,
        right : 150,
        top : -15
    },

    appText2: {
      fontSize: 18,
      color: '#000000',
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 600,
      fontSize : 17,
      lineHeight : 23,
      right : 50,
      top : -35
  },

  appText3: {
    fontSize: 18,
    color: '#000000',
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily : 'Poppins',
    fontStyle : 'normal',
    fontWeight : 600,
    fontSize : 17,
    lineHeight : 23,
    left: 120,
    top : -58
}
   
})



// onPress={()=>navigation.navigate('Contoh',{title : 'Makanan',})}