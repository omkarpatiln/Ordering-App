import { View, Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const ItemlistRender = ({item,onAddCart,onRemoveCart}) => {

    const [count,setCont]=useState(item.cartCount?item.cartCount:0)

  return (
     <View style={Style.Main}>
          <Image style={{height:150,width:150,alignSelf:'center'}} source={{uri:item.image}}/>
          <Text numberOfLines={1} style={Style.category}>{item.category}</Text>
           <Text numberOfLines={3} style={{ color:'black', }}>{`Description : ${item.description}`}</Text>
          <Text style={{color:"black"}}>₹ {`Price : ${item.price}`}</Text>
          <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:5}}>
            <TouchableOpacity onPress={()=>{
                    setCont(count+1)
                    onAddCart(count+1)
                
            }} style={{height:40,width:40,borderRadius:40,backgroundColor:'white',alignItems:"center",elevation:10}}>
              <Text style={{fontSize:30,textAlign:"center",textAlignVertical:"center"}}>{`+`}</Text>
              
            </TouchableOpacity>

            <Text  style={{color:"black",textAlignVertical:"center",fontSize:18,fontWeight:"bold"}}>{`${count}`}</Text>
             <TouchableOpacity onPress={()=>{
                if(count>0){
                    setCont(count-1)
                    onRemoveCart(count+1)
                }
             }} style={{height:40,width:40,borderRadius:40,backgroundColor:'white',alignItems:"center",elevation:10}}>
              <Text style={{fontSize:30,textAlign:"center",textAlignVertical:"center"}}>{`-`}</Text>
              
            </TouchableOpacity>

          </View>
         
        </View>
  )
}

export default ItemlistRender

const Style = StyleSheet.create({
    Main:{
        padding: 10 ,elevation:10,backgroundColor:"white",margin:10,borderRadius:10
    },category:{
       color:'black',fontSize:18 
    }


})