import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import ClearButton from './components/ClearButton';
import uuid from 'react-native-uuid';

export default function App() {
  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName, prodType, quantity) => {

    const newProduct = {
      id: uuid.v4(),
      name: productName,
      quantity: quantity,
      bought: false,
      type: prodType
    };

    setProducts(() => [...products, newProduct]);
  };

  const removeProductHandler = (id) => {
    setProducts(() => products.filter( product => product.id !== id));
  };

  const removeAllProductsHandler = () => {
    setProducts(() => []);
  };

  const boughtHandler = (id, boughtValue) => {
    const newProduct = products.map( product => {
      if (product.id === id) {
        return {
          ...product,
          bought: !boughtValue
        }
      }
      return product;
    });

    setProducts(newProduct);
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>
      <ScrollView style={styles.productScroll}>
      <View style={styles.productList}>
        { 
          products.length === 0 
            ? <Text>Ningun producto </Text> 
            : products.map( product => (
              <ListItem 
                key={product.id}
                productId={product.id} 
                productName={product.name}
                quantity={product.quantity}
                productType={product.type}
                isBought={product.bought}
                onProductRemove={removeProductHandler}
                onBought={boughtHandler}/>
            ))
        }
      </View>
      </ScrollView>
      <ClearButton 
        products={products}
        onProductsRemove={removeAllProductsHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fff1ff',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  productScroll: {
    width: '100%'
  }
});