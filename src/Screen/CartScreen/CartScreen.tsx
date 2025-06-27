import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/productsSlice';
import ItemlistRender from '../Home/ItemlistRender';
import Header from '../../Components/Header';

const CartScreen = () => {
      const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    console.log("products",products)

  return (
    <View style={{flex:1}}>
       <Header/>
   <View style={{flex:1,marginHorizontal:15}}>
   
  <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ItemlistRender onAddCart={(count)=>{
    dispatch(addProduct({...item,cartCount:count}));

        }} onRemoveCart={()=>{
              dispatch(removeProduct(item.id));


        }} item={item}/>
      )}
    />
      </View>    </View>
  )
}

export default CartScreen