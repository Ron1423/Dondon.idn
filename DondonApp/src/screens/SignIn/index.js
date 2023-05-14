import { ScrollView, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { ButtonAT, TextInputAT, Header, Gap } from '../../components'
import logo from '../../assets/screenImg/Logo.png';

const SignIn = ({navigation}) => {
  return (
    <ScrollView >
      <Header title = "Sign In" onBack={() => navigation.goBack()}/>
      <View style = {styles.bodyView}>
        <Gap height={18}/>
        <View style = {styles.logoView}>
          <Image source={logo} style = {styles.logo}/>
        </View>
        <Gap height={22}/>
        <TextInputAT label = "Email Address" placeholder = "Type your email address"/>
        <Gap height={16}/>
        <TextInputAT label = "Password" placeholder = "Type your password"/>
        <Gap height={24}/>
        <ButtonAT text = "Sign In" color='#FFD400' textColor='#FFFFFF' onPress={()=>navigation.navigate("Home")}/>
        <Gap height={12}/>
        <ButtonAT text = "Create New Account" color='#8D92A3' textColor='#FFFFFF' onPress={()=>navigation.navigate("SignUp")}/>
      </View>
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  bodyView : {
    flex : 1,
    backgroundColor : "#FFFFFF",
    paddingHorizontal : 24,
    marginTop : 24,
    paddingTop : 26,
  },

  logoView : {
    alignItems : 'center',
  },

  logo : {
    width : 155,
    height : 155,
    borderRadius : 155,
  },
})