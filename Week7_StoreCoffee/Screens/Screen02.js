import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

export default function App({navigation}) {
    var [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://654babc85b38a59f28ef7e31.mockapi.io/api/ShopCoffee/Shop')
        .then(response => response.json())
        .then(json => {
            setData(json); 
          })
    }, []);
      
    return(
      <View style={styles.container}>
      <FlatList 
      data={data}
      renderItem={({item})=> {
        return(
          <View>
        <View style={{flexDirection:'column', width:'100%', height:220, borderWidth:1, alignItems:'center', borderRadius:'10px', marginVertical:'auto'}}>
          <View style={{alignItems:'center', marginTop:'10px'}}>
            <Image source={{uri: item.image}} style={{borderRadius:'10px',width:'250px', height:'90px', resizeMode:'cover', resizeMode:'cover',  marginVertical:'20px'}}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{backgroundColor:'#f0f8ff',borderRadius:'10px', flexDirection:'row'}}>
               <Image source={require('../assets/tick.png')}
                style={{margin:'auto',width:'30px', height:'30px', resizeMode:'contain'}}/>
                <Text style={{fontSize:'14px', fontWeight:'bold', color:'green', margin:'auto'}}>{item.status}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:'auto',backgroundColor:'#f0f8ff',borderRadius:'10px', flexDirection:'row'}}>
                <Image source={require('../assets/oclock.png')}
                style={{margin:'auto',width:'30px', height:'30px', resizeMode:'contain'}}/>
                <Text style={{fontSize:'14px', fontWeight:'bold', color:'red', margin:'auto'}}>{item.deliverytime}</Text>
            </TouchableOpacity>
            <Image source={require('../assets/address.png')}
              style={{margin:'auto',width:'30px', height:'30px', resizeMode:'contain'}}/>
          </View>
            <Text style={{fontSize:'14px', fontWeight:'bold', color:'black', margin:'auto'}}> {item.name} </Text>
            <Text style={{marginLeft:'5px',fontSize:'14px', color:'black', margin:'auto'}}> {item.address} </Text>
        </View>

       </View>
     
        )

}}
/>
      <StatusBar style="auto" />
      </View>
    )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical:'auto'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
