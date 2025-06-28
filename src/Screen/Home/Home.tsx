import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../../Components/Header';
import ItemlistRender from './ItemlistRender';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/productsSlice';
import {  StackProps } from '../../Routes/routes';
import OrderReports from './Components/OrderReports';
import OrderItem from './Components/OrderItem';
import { Colors } from '../../helper/themeHelper';
type Props = StackProps<'Home'>;

const Home :React.FC<Props>= ({navigation}) => {
  const ordersData = [
  {
    id: '403717',
    store: 'Relience Smart Bazar',
    timeAgo: '12 Min Ago',
    deliveryTime: '25 Jul, 4:40 PM',
    address: '1407 S Michigan Avenue Park, Pune',
  },
  {
    id: '298377',
    store: 'The Eastside Mall, Berlin',
    timeAgo: '12:32 PM',
    deliveryTime: '26 Jul, 5:00 PM',
    address: '101, Sakore, Viman Nagar, Pune',
  },
];


  return (
    <View style={{flex:1,backgroundColor:Colors.white}}>



     

       

  <FlatList
        data={ordersData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <OrderItem item={item} />}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListHeaderComponent={()=>(
          <>
                         <OrderReports/>

              <View style={styles.header}>
        <Text style={styles.title}>Latest Orders</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
          </>
               

        )}
      />



    </View>
  )
}


export default Home
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewAll: {
    color: Colors.Primary,
    fontSize: 14,
        fontWeight: 'bold',
      textAlignVertical:"center"


  },
});