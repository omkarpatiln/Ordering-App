import { View, Text, Image, ViewStyle, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Colors, Sizes } from '../../../helper/themeHelper'
import { PngIcons } from '../../../assets/Images'

interface OrderDetails{
  OrderNumber:string,
  OrderImage:ImageSourcePropType,
  OrderType:string
}

const OrderDetilsComponent:React.FC<OrderDetails> = ({OrderImage,OrderNumber,OrderType}) => {
  return (
    <View style={{margin:Sizes.Base,backgroundColor:Colors.white,borderRadius:Sizes.radius-15,flex:1}}>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:Sizes.Base}}>
 <Text style={{textAlignVertical:"center",fontSize:25,color:Colors.Primary}}>{`${OrderNumber}`}</Text>
 <Image  resizeMode='contain' style={{width:50,height:50}} source={OrderImage}/>
</View>
 <Text style={{textAlignVertical:"center",fontSize:18,color:Colors.black,paddingHorizontal:Sizes.padding,paddingBottom:Sizes.Base}}>{`${OrderType}`}</Text>

     
    </View>
  )
}

export default OrderDetilsComponent