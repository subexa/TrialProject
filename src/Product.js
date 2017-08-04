import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DeliveryDetails from './DeliveryDetails';

const Product = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.brandName}>brand name </Text>
      <Text style={styles.productName}>{product.productName}</Text>
      <View style={styles.priceContainer}>
        <Image source={require('../images/tag.png')} style={styles.tagImage} />
        <Text style={styles.price}>{product.price} </Text>
        <Text style={styles.discount}>{product.discount}</Text>
      </View>
    </View>
      <View style={styles.separator} />
      <DeliveryDetails deliveryDetails={product.deliveryDetails} />
  </View>
);

export default Product;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },

  details: {
    marginLeft: 10,
    marginRight: 10
  },

  productImage: {
    height: 320,
    width: 320
  },

  brandName: {
    color: '#5c6773',
    fontSize: 14,
    fontWeight: '100'
  },

  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5c6773',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  tagImage: {
    width: 23,
    height: 17,
    resizeMode: 'contain',
  },

  price: {
    color: '#3d73bd',
    fontWeight: 'bold',
    fontSize: 20,
  },

  discount: {
    color: '#3d73bd',
    fontWeight: '200',
    fontSize: 20
  },

  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 12,
    marginBottom: 7
  }

})