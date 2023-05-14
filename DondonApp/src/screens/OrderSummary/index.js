import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header,Gap,Footer,OrderList,OrderType } from '../../components';
import { profile } from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <View style = {[styles.bodyView,styles.shadowProp]}>
      <Header isHeader={true} IcProf={profile} onBack={() => navigation.goBack()} toSignIn={()=>navigation.navigate('SignIn')}/>
        <View style = {styles.ATView}>
            <Text style ={styles.order}>Order</Text>
            <View style={styles.orderView}>
              <OrderType/>
            </View>
            <Gap height={25}/>
            <Text style ={styles.odrsum}>Order Summary </Text>  
            <View style={[styles.appContainer,styles.shadowProp]} activeOpacity={0.70}>
              <OrderList amount={'1'} name={'Ayam Rempah'} price={'20.000'}/>
              <Gap height={15}/>
              <OrderList amount={'1'} name={'Ayam Rempah'} price={'20.000'}/>
            </View>
        </View>
        <Footer isPay={true} isPayText={true} priceT={'40.000'} justify='center' onPress={()=>navigation.navigate('OrderSuccess')}/>
    </View>
  )
}

export default OrderSummary;

const styles = StyleSheet.create({
    bodyView : {
      flexGrow : 1,
      justifyContent : 'space-between',
      backgroundColor : 'white'
    },

    ATView : {
      alignItems : 'center',
    },

    order :{
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 'bold',
      fontSize : 20,
      color : '#000000',
      lineHeight : 24,
      right : 140,
      marginBottom : 20
    },

    orderView : {
      elevation: 3.5,
      backgroundColor:'#FFD400',
      justifyContent : 'space-between',
      borderRadius: 10,
      padding: 20,
      width : 350,
    },

    odrsum :{
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 'bold',
      fontSize : 20,
      color : '#000000',
      lineHeight : 24,
      right : 90,
      marginVertical : 20
    },

    appContainer: {
      elevation: 3.5,
      backgroundColor:'white',
      justifyContent : 'space-between',
      borderRadius: 10,
      padding: 20,
      width : 350,
    },

    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
})



// onPress={()=>navigation.navigate('Contoh',{title : 'Makanan',})}