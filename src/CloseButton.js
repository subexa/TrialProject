import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CloseButton = () =>(
  <TouchableOpacity style={styles.closeButton}>
    <Image 
      source={require('../images/close.png')} 
      style={styles.closeButtonImage}
    />
  </TouchableOpacity>
);

export default CloseButton;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    left: 15,
    top:16,
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 20,
    width: 20
  }
})