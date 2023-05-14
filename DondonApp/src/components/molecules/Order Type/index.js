import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const OrderType = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <View style = {styles.buttonView}>
        <Text style = {styles.textView}>Dine In</Text>
        <RadioButton
          value='Dine In'
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          uncheckedColor='#FFFFFF'
          color='#FFFFFF'
        />
      </View>
      <View style = {styles.buttonView}>
      <Text style = {styles.textView}>Take Away</Text>
        <RadioButton
          value="Take Away"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
          uncheckedColor='#FFFFFF'
          color='#FFFFFF'
        />
      </View>
      <View style = {styles.buttonView}>
        <Text style = {styles.textView}>Delivery</Text>
        <RadioButton
          value="Delivery"
          status={ checked === 'third' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('third')}
          uncheckedColor='#FFFFFF'
          color='#FFFFFF'
        />
      </View>
    </View>
  );
};

export default OrderType;

styles = StyleSheet.create ({
  buttonView : {
    flexDirection : 'row',
    justifyContent :'space-between'
  },
  textView : {
    alignSelf : 'center',
    color : '#FFFFFF',
    fontFamily : 'Poppins',
    fontStyle : 'normal',
    fontWeight : '500',
    fontSize : 16,
  },
})