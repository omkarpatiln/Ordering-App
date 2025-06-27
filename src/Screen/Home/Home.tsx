import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../../Components/Header';
import ItemlistRender from './ItemlistRender';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/productsSlice';
import { StackParams } from '../../Routes/routes';
type Props = StackParams<'Home'>;

const Home :React.FC<Props>= ({navigation}) => {
  const [products,setProducts]=useState([])
  const [cartCount,setCartCount]=useState(0)

    const dispatch = useDispatch();

  useEffect(()=>{
    fetchProducts()
  },[])

    const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log("res",response.data)
      if(response && response.data){
              setProducts(response.data);
              

      }
    } catch (error) {
      console.error('API fetch error:', error);
    } finally {
    }
  };

  return (
    <View style={{flex:1}}>
      <Header showCart={true} HeaderCount={cartCount} onCartClick={()=>{navigation.navigate('CartScreen')}} />
      <View style={{flex:1,marginHorizontal:15}}>
  <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ItemlistRender onAddCart={(count)=>{
    dispatch(addProduct({...item,count}));

          setCartCount(cartCount+1)
        }} onRemoveCart={()=>{
              dispatch(removeProduct(item.id));

          setCartCount(cartCount-1)

        }} item={item}/>
      )}
    />
      </View>

     

    </View>
  )
}

export default Home