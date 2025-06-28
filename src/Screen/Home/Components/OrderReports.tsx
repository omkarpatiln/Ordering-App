import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors, Sizes } from '../../../helper/themeHelper'
import { Switch } from 'react-native-switch'
import { Spacing } from '../../../Components/spacing'
import OrderDetilsComponent from './OrderDetilsComponent'
import { PngIcons } from '../../../assets/Images'

const OrderReports = () => {
    const [switchs,setSwitch]=useState(true)
      const data = [
    [1, 2],  // for first row of two OrderDetilsComponent
    [3, 4],  // second row
    [5, 6],  // third row
  ];
  return (
    <View style={{backgroundColor:Colors.Primary,paddingHorizontal:Sizes.padding,paddingBottom:Sizes.Base}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{fontSize:25,color:Colors.white,fontWeight:'bold'}}>{`Hello Rohit 👏`}</Text>


<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:5}}>
<Text style={{color:Colors.white}}>{`Available`}</Text>
<Spacing width={10}/>
<Switch
    value={switchs}
    onValueChange={(val) => {setSwitch(!switchs)}}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
    circleSize={25}
    barHeight={25}
    circleBorderWidth={4}
    circleBorderActiveColor={Colors.white}
    circleBorderInactiveColor={Colors.white}
    backgroundActive={Colors.white}
    backgroundInactive={Colors.white}
    circleActiveColor={Colors.Primary}
    circleInActiveColor={Colors.black}
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
    // switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />
</View>
        </View>
    
    
        <Text style={{fontSize:18,color:Colors.white}}>{`Optimize Orders with QFREEMART`}</Text>
       

   
   <View style={{flexDirection:"row"}}>
  <OrderDetilsComponent OrderImage={PngIcons.NewOrders} OrderNumber='12' OrderType='New Orders'/>
    <OrderDetilsComponent OrderImage={PngIcons.PendingOrders} OrderNumber='05' OrderType='Pending Orders'/>
   </View>
   <View style={{flexDirection:"row",}}>
  <OrderDetilsComponent OrderImage={PngIcons.OrderCompleted} OrderNumber='18' OrderType='Completed'/>
    <OrderDetilsComponent OrderImage={PngIcons.TotalEarning} OrderNumber='3200' OrderType='Total Earnings'/>
   </View>
 
   
    </View>
  )
}

export default OrderReports