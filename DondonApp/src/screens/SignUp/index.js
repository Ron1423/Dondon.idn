import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Header, Gap, TextInputAT, ButtonAT } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <Header title = "Sign Up" onBack={() => navigation.goBack()}/>
      <View style = {styles.bodyView}>
        <View style = {styles.addPhotoView}>
          <View style = {styles.border}>
            <View style = {styles.addPhoto}> 
              <Text style = {styles.addPhototxt}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInputAT label = "Full Name"  placeholder = "Type your full name"/>
        <Gap height={16}/>
        <TextInputAT label = "Email Address" placeholder = "Type your email address"/>
        <Gap height={16}/>
        <TextInputAT label = "Password" placeholder = "Type your password"/>
        <Gap height={24}/>
        <ButtonAT text ="Continue" color ='#FFD400' textColor='#FFFFFF' onPress={()=>navigation.navigate("Home")}/>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  bodyView : {
    flex : 1,
    backgroundColor : "#FFFFFF",
    paddingHorizontal : 24,
    marginTop : 24,
  },
  addPhotoView : {
    alignItems : 'center',
    marginTop : 26,
    marginBottom : 16,
  },
  border : {
    borderWidth : 1,
    borderColor : '#8D92A3',
    borderRadius : 110,
    width : 110,
    height : 110,
    alignItems : 'center',
    justifyContent : 'center',
    borderStyle : 'dashed'
  },

  addPhoto : {
    width : 90,
    height : 90,
    backgroundColor : '#F0F0F0',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 90,
  },

  addPhototxt : {
    fontSize : 14,
    fontFamily : 'Poppins',
    maxWidth : 40,
    textAlign : 'center'
  }
})