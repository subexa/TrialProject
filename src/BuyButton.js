import React from 'react';
import {
 StyleSheet,
 Text,
 TouchableOpacity
} from 'react-native';

const BuyButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>구매하기</Text>
  </TouchableOpacity>
);

export default BuyButton;

const styles = StyleSheet.create({
 button: {
  position: 'absolute',
  bottom: 0,
  height: 50,
  width: '100%',
  backgroundColor: '#232b38',
  alignItems: 'center',
  justifyContent: 'center'
 },

 buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
 }
})