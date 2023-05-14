import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Item2 = ({ name, image, price, onPress }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rp. {price.toLocaleString('id-ID')}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Item2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  imageContainer: {
    width: 130,
    height: 123,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 16,
    paddingVertical : 16
  },
  name: {
    fontFamily : 'Poppins',
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight : 24,
    marginBottom: 8,
    color : '#F8C911'
  },
  price: {
    fontSize: 14,
    color: '#222222',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    left : 120
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
})