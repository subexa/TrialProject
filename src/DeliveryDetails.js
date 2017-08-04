import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DeliveryDetails = ({ deliveryDetails }) => (
  <View style={styles.container}>
    <View style={styles.detailContainer}>
      <Text style={styles.title}>CODE </Text>
      <Text style={styles.details}>{deliveryDetails.code}</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.title}>MILEAGE </Text>
      <Text style={styles.details}>{deliveryDetails.mileage}</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.title}>DELIVERY </Text>
      <Text style={styles.details}>{deliveryDetails.delivery}</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.details}>{'(' + deliveryDetails.shipping + ')'}</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.title}>ORIGIN </Text>
      <Text style={styles.details}>{deliveryDetails.origin}</Text>
    </View>
  </View>
);

export default DeliveryDetails;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },

  detailContainer: {
    flexDirection: 'row',
    marginBottom: 2
  },

  title: {
    color: '#5c6773',
    fontWeight: 'bold'
  },

  details: {
    color: '#5c6773',
    fontWeight: '100'
  }
})