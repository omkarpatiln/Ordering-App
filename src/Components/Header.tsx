import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Cart } from '../assets/Images'
interface Props{
    HeaderCount:number,
    onCartClick:()=>void;
}

const Header:React.FC<Props> = ({HeaderCount,onCartClick,showCart}) => {
  return (
    <View style={Style.Main}>
      <Text style={{textAlignVertical:"center",fontWeight:'700',height:30}}>Ecomerce Cart</Text>
      <View style={{flexDirection:"row",alignItems:"center",}}>

        {showCart &&    <TouchableOpacity onPress={onCartClick} style={{padding:5,borderRadius:50,width:70,height:30,elevation:10,backgroundColor:"white",flexDirection:"row",justifyContent:"space-around"}}>
        <Text style={{color:"black",fontWeight:"500",fontSize:16,textAlign:"center"}}>{HeaderCount}</Text>
      <Image  style={{height:20,width:20,alignSelf:"center"}} source={Cart}/>

        </TouchableOpacity>}
        
    


      </View>

    </View>
  )
}

export default Header

const Style = StyleSheet.create({
    Main:{
        backgroundColor:'white',
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:10,
        paddingVertical:5
    }


})