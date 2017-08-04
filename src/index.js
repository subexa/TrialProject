import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Product from './Product';

const PRODUCTS = [{
  image: require('../images/shirt.png'),
  brandName: 'SONTAG POCKET SHIRTS - KHAKI',
  price: '43,700won',
  discount: '[5%]',
  code: 120476,
  mileage: 437,
  delivey: '제품으로만 50,000 원 이상 구매시 무료배송 (배송료 3,000원)',
  origin: '한국'
}]

class App extends Component {
  render() {
    return(
      <View>
        <Product product={PRODUCTS[0]} />
      </View>
    );
  }
}

export default App;