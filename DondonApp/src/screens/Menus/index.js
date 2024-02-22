import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { Item2, Header, Footer } from '../../components';
import { profile, kentang, roticokju, redDrink, purpDrink, cabeijoo, nasicampur, choco, bakar, mango, rempah } from '../../assets';

const Menus = ({ route, navigation }) => {
  const { title } = route.params;
  const renderFoodCategory = () => {
    return (
      <>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.containerItem2}>
          <Item2 name={'French Fries'} image={kentang} price={'15.000'} />
          <Item2 name={'Ayam Cabe Ijo'} image={cabeijoo} price={'20.000'} />
          <Item2 name={'Nasi Campur'} image={nasicampur} price={'20.000'} />
          <Item2 name={'Ayam Bakar'} image={bakar} price={'20.000'} />
          <Item2 name={'Ayam Rempah'} image={rempah} price={'20.000'} />
          <Item2 name={'Ayam Cabe Ijo'} image={cabeijoo} price={'20.000'} />
          <Item2 name={'Nasi Campur'} image={nasicampur} price={'20.000'} />
        </View>
      </>
    );
  };

  const renderBeverageDrinkCategory = () => {
    return (
      <>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.containerItem2}>
          <Item2 name={'Red velvet'} image={redDrink} price={'15.000'} />
          <Item2 name={'Taro'} image={purpDrink} price={'15.000'} />
          <Item2 name={'Double Choco Milk'} image={choco} price={'15.000'} />
          <Item2 name={'Manggo Juice'} image={mango} price={'15.000'} />
        </View>
      </>
    );
  };

  const renderSnackCategory = () => {
    return (
      <>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.containerItem2}>
          <Item2 name={'French Fries'} image={kentang} price={'15.000'} />
          <Item2 name={'Roti Coklat Keju'} image={roticokju} price={'15.000'} />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header isHeader={true} IcProf={true} onBack={() => navigation.goBack()} onPress={() => navigation.navigate('SignIn')} />
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        <View>
          {title === 'Food' && renderFoodCategory()}
          {title === 'Drink' && renderBeverageDrinkCategory()}
          {title === 'Other' && renderSnackCategory()}
        </View>
      </ScrollView>
      <Footer isPesanan={true} items={'2 Items'} price={'40.000'} onPress={() => navigation.navigate('OrderSummary')} />
    </View>
  );
};

export default Menus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleText: {
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: 800,
    color: '#222222',
    left: 15,
    marginBottom: -10,
    top: 15,
  },

  containerItem2: {
    marginHorizontal: 15,
    marginVertical : 25
  },
})
