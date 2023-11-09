import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({navigation}) {
  return (
   <View style={styles.container}>
        <View style={{marginTop:'100px',width:'90%', height:'60%', justifyContent:'center', alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginTop:'10px',fontSize:'24px'}}> Welcome to Cafe world </Text>
            <Image source={require('../assets/Image1.png')} style={{ width: "263px", height: "265px", resizeMode:'contain'  }}/>
            <Image source={require('../assets/Image2.png')} style={{ width: "263px", height: "265px", resizeMode:'contain'  }}/>
        </View>
        <View style={{width:'90%', height:'40%',alignItems:'center', justifyContent:'center'}} >
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Shops Near Me');
        }}
        style={{justifyContent:"center", alignItems:"center", backgroundColor:'blue', borderRadius: '20px', height:'50px'}}>
            <Text style={{marginRight:"60px", marginLeft:"60px",fontSize: 25,fontWeight:"bold",color:"#F9F2F2", fontFamily: "roboto"}}> GET START </Text>
        </TouchableOpacity>
        </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical:'auto'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
