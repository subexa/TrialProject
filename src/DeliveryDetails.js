import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const DeliveryDetails = ({ deliveryDetails }) => (
  <View>
    <View>
      <Text>CODE</Text>
      <Text>{deliveryDetails.code}</Text>
    </View>
    <View>
      <Text>MILEAGE</Text>
      <Text>{deliveryDetails.mileage}</Text>
    </View>
    <View>
      <Text>DELIVERY</Text>
      <Text>{deliveryDetails.delivery}</Text>
    </View>
    <View>
      <Text>ORIGIN</Text>
      <Text>{deliveryDetails.delivery}</Text>
    </View>
  </View>
);

export default DeliveryDetails;