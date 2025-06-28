import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PngIcons } from '../../../assets/Images';
import { Colors, Sizes } from '../../../helper/themeHelper';
import Icon from '../../../Components/Icon';
import TextButton from '../../../Components/TextButton';
import { Spacing } from '../../../Components/spacing';
interface Order {
  id: string;
  store: string;
  timeAgo: string;
  deliveryTime: string;
  address: string;
}

interface Props {
  item: Order;
}
const OrderItem:React.FC<Props> = ({ item }) => {

  return (
    <View style={styles.card}>
      <View style={{flexDirection:'row',borderBottomWidth:2,paddingBottom:5,borderBottomColor:'#EBEBE4'}}>
        <Image resizeMode='contain' style={{width:50,height:50}} source={PngIcons.OrderCompleted}/>

<View style={{marginStart:Sizes.padding}}>
  <View style={{flexDirection:"row",justifyContent:'space-between',width:"90%"}}>
      <Text style={styles.orderId}>{`Order ID: ${item.id}`}</Text>

     <Text style={styles.timeAgo}>{item.timeAgo}</Text>
  </View>
      <Text style={styles.store}>{item.store}</Text>

</View>
      </View>

      <View style={{flexDirection:"row",marginTop:Sizes.Base}}>
              <Icon name='clock' type='EvilIcons' color={Colors.Primary}/>
      <Text style={styles.label}> Estimated Delivery Time:  <Text style={styles.bold}>{item.deliveryTime}</Text></Text>

      </View>
       <View style={{flexDirection:"row",marginTop:Sizes.Base}}>
              <Icon name='location' type='EvilIcons' color={Colors.Primary}/>
      <Text style={styles.label}> Delivery:  <Text style={styles.bold}>{item.address}</Text></Text>

      </View>

    
     <View style={{flexDirection:"row",marginTop:Sizes.padding}}>
      <View style={{flex:1}}>
      <TextButton  colors={[Colors.Primary,Colors.Primary]}   style={{borderRadius:10}} label='Reject' loading={false} onPress={()=>{}}/>

      </View>
      <Spacing width={60}/>
       <View style={{flex:1}}>
              <TextButton  colors={[Colors.green,Colors.green]}  label='Accept' loading={false} onPress={()=>{}}/>

      </View>

     </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 12,
  },
  orderId: {
    fontSize: 14,
    
  },
  timeAgo: {
    fontSize: 12,
    color: 'gray',
  },
  store: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  label: {
    fontSize: 13,
    color: '#555',
  },
  bold: {
    // fontWeight: 'bold',
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  rejectBtn: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex:1
  },
  acceptBtn: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
