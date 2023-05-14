import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Item1 = ({ name, image, price, onPress }) => {
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

export default Item1;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation: 4,
        width : 180,
        alignItems : 'center',
        marginBottom : 20
      },
      imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        overflow: 'hidden',
      },
      image: {
        width: '100%',
        height: '100%',
      },
      detailsContainer: {
        marginTop: 16,
        paddingHorizontal: 8,
        alignItems : 'center'
      },
      name: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontFamily : 'Poppins',
        fontSize: 19,
        lineHeight : 24,
        marginBottom: 8,
        color : '#F8C911'
      },
      price: {
        fontSize: 14,
        color: '#222222',
        alignItems : 'center'
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom : 10
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