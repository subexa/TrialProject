import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Product from './Product';

const PRODUCTS = [{
  id: 1,
  image: require('../images/shirt.png'),
  productName: 'SONTAG POCKET SHIRTS - KHAKI',
  price: '43,700won',
  discount: '[5%]',
  deliveryDetails: {
    code: 120476,
    mileage: 437,
    delivery: '제품으로만 50,000 원 이상 구매시 무료배송',
    shipping: '배송료 3,000원',
    origin: '한국'
  }
},{
  id: 2,
  image: require('../images/shirt.png'),
  productName: 'SONTAG POCKET SHIRTS - KHAKI',
  price: '43,700won',
  discount: '[5%]',
  deliveryDetails: {
    code: 120476,
    mileage: 437,
    delivery: '제품으로만 50,000 원 이상 구매시 무료배송',
    shipping: '배송료 3,000원',
    origin: '한국'
  }
},]

class App extends Component {
  render() {
    return(
      <FlatList
        data={PRODUCTS}
        renderItem={({ item, index }) => <Product product={item} /> }
        keyExtractor={item => item.id}
      />
    );
  }
}

export default App;