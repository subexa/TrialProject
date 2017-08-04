import React from 'react';
import {
  Image,
  Stylesheet,
  Text,
  View,
} from 'react-native';

import DeliveryDetails from './DeliveryDetails';

const Product = ({ product }) => (
  <View>
    <Image source={product.image} />
    <Text>brand name </Text>
    <Text>{product.brandName}</Text>
    <View>
      <Image source={require('../images/tag.png')} />
      <Text>{product.price}</Text>
      <Text>{product.discount}</Text>
    </View>
    <DeliveryDetails deliveryDetails={product.deliveryDetails} />
  </View>
);

export default Product;