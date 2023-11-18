import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { useEffect, useState } from 'react';
export default function App({navigation}) {
const [banh, setBanh]= useState("Donut");
const [data, setData] = useState([])
function LocLoaiBanh(value){
  setBanh(value)
  fetch(`https://qtx4fh-8080.csb.app/${value}`)
  .then((response)=> response.json())
  .then((data)=> {
    setData(data)
  })
}
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "70%",
          height: "20%",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}>
        <Text style={{ fontSize: 25 }}>Welcome, Jala!</Text>
        <Text style={{ fontSize: 25 }}>Choice you Best food</Text>
        <TouchableOpacity
          style={{
            width: "70%",
            height: "30%",
            justifyContent: "flex-start",
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: "10px",
          }}>
          <TextInput
            placeholder="Search food"
            style={{
              marginVertical: "8px",
              borderRadius: "15px",
              fontSize: 15,
              color: "grey",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "95%",
          height: "20%",
          justifyContent: "center",
          marginTop: "10px",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
        onPress={()=>{
         
          LocLoaiBanh("Donut")
        }}
        
          style={{
            marginHorizontal: "15px",
            width: "30%",
            height: "28%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: "10px",
            backgroundColor: banh==="Donut"?"orange":null,
          }}
        >
          <Text>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          LocLoaiBanh("PinkDonut")
                }}
          style={{
            marginHorizontal: "15px",
            width: "30%",
            height: "28%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: "10px",
            backgroundColor: banh==="PinkDonut"?"orange":null,
          }}
        >
          <Text>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          LocLoaiBanh("Floating")
        }}
          style={{
            marginHorizontal: "15px",
            width: "30%",
            height: "28%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: "10px",
            backgroundColor: banh==="Floating"?"orange":null,
          }}
        >
          <Text>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Screen02",{banh:item})
          }}
          style={styles.container}>
            <View style={{marginTop:'20px',marginLeft:"10px",width:"90%", height:150,
            backgroundColor:'pink',borderWidth:1,borderRadius:15,flexDirection:'row'}}>
            <Image
            source={{uri: item.image}}
            style={{width:'60px', height:'60px', resizeMode:'contain'}}
            />
            <View>
            <Text>
              {item.name}
            </Text>
            <Text>
              {item.note}
            </Text>
            <Text>
              {item.price}
            </Text>
            </View> 
            </View>   
           </TouchableOpacity> 
        )
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
