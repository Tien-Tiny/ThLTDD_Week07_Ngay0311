import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

export default function App() {
  var [drinks, setDrinks] = useState([]);
  useEffect(()=>{
      fetch('https://654babc85b38a59f28ef7e31.mockapi.io/api/ShopCoffee/Drinks')
      .then(response => response.json())
      .then(json => {
          setDrinks(json); 
        })
  }, []);
    
  return(
    <View style={styles.container}>
    <FlatList 
    data={drinks}
    renderItem={({item})=> {
      return(
        <View style={{marginVertical:'8px'}}>
      <View style={{flexDirection:'row', width:'100%', height:80, borderWidth:1, borderRadius:'10px',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',gap:10}}>
        <Image source={{uri: item.image}} style={{ borderRadius:'10px',width:'80px', height:'80px', resizeMode:'cover', resizeMode:'cover'}}/>
        <View >
        <Text style={{fontSize:'20px'}}>
          {item.name}
        </Text>
        <Text style={{fontSize:'20px'}}>
          {item.price}
        </Text>
        </View>
        </View>

        <View  style={{flexDirection:'row',gap:20,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/minus.png')} style={{ borderRadius:'10px',width:'25px', height:'25px', resizeMode:'cover', resizeMode:'cover'}}/>
        <Image source={require('../assets/plus.png')} style={{ borderRadius:'10px',width:'25px', height:'25px', resizeMode:'cover', resizeMode:'cover'}}/>
     
        </View>

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

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
