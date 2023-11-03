import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from "react";

function Screen01({ navigation }) {
  const [name, setName] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ width: '90%', height: '90%', alignItems: 'center' }}>
        <Image source={require('./Data/ImageManager.png')}
          style={{ width: '200px', height: '200px', marginTop: '50px', resizeMode: 'contain' }} />
        <Text style={{ marginTop: '30px', fontSize: '25px', fontWeight: "20px", color: "blue", alignItems: 'center', fontWeight: 'bold' }}>MANAGE YOUR</Text>
        <Text style={{ fontSize: '25px', fontWeight: "20px", color: "blue", alignItems: 'center', fontWeight: 'bold' }}>TASK</Text>
        <TouchableOpacity style={{ marginTop: '50px', marginLeft: '40px', borderWidth: 1, borderRadius: '10px', width: '350px', height: '60px', flexDirection: 'row', marginBottom: '15px' }}>
          <Image source={require('./Data/Vector.png')}
            style={{ width: '30px', height: '30px', marginLeft: '5px', marginTop: '12px', resizeMode: 'contain' }} />
          <TextInput onChangeText={setName}
            style={{ marginLeft: '5px', fontSize: '15px', color: 'grey', fontWeight: 1 }}
            placeholder='Enter your name' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Screen02');
            navigation.navigate('Screen02', { name, image: require('./Data/1.png') });
          }}
          style={{ marginLeft: '30px', marginTop: '50px', backgroundColor: 'blue', borderWidth: 1, borderRadius: '10px', width: '70%', height: '60px', flexDirection: 'row', marginBottom: '15px' }}>
          <Text style={{ fontSize: '25px', fontWeight: "20px", color: "blue", alignItems: 'center', margin: 'auto', color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function Screen02({ navigation, route }) {
  const Job = [
    {
      Image: require("./Data/tick.png"),
      TenJob: "To check email",
      ImageEdit: require("./Data/Edit.png"),
    },
    {
      Image: require("./Data/tick.png"),
      TenJob: "UI task web page",
      ImageEdit: require("./Data/Edit.png"),
    },
    {
      Image: require("./Data/tick.png"),
      TenJob: "Learn javascript basic",
      ImageEdit: require("./Data/Edit.png"),
    },
    {
      Image: require("./Data/tick.png"),
      TenJob: "Learn javascript basic",
      ImageEdit: require("./Data/Edit.png"),
    },
    {
      Image: require("./Data/tick.png"),
      TenJob: "Medical App UI",
      ImageEdit: require("./Data/Edit.png"),
    },
    {
      Image: require("./Data/tick.png"),
      TenJob: "Learn Java",
      ImageEdit: require("./Data/Edit.png"),
    },
  ];
  const [jobMoi, setJobMoi]= React.useState(Job);
  React.useEffect(()=>{
    if (route.params.jobAdd){
      const jobAddNew ={
        Image: require("./Data/face.png"),
        TenJob: route.params.jobAdd,
        ImageEdit:require("./Data/eye.png"),
      };
      jobMoi.push(jobAddNew);
    }
  }, [route.params?.jobAdd]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginLeft: '20px', width: '90%', height: '60px', borderWidth: 1, borderRadius: '10px', flexDirection: 'row' }}>
        <Image
          style={{ width: '30px', height: '30px', resizeMode: 'contain', flex: 1, marginTop: '20px' }}
          source={require('./Data/search.png')} />
        <TextInput style={{ fontSize: '15px', color: 'grey', fontWeight: 1, flex: 8 }} placeholder='Search' />
      </TouchableOpacity>
      <Image style={{ width: 50, height: 50 }} source={route.params.image} />
      <View style={{borderWidth:1, width:'100%', height:'200px', justifyContent:'center', alignItems:'center'}}>
        <FlatList
        data = {jobMoi}
        renderItem={({item})=>{
          return(
            <View style={{marginVertical:10,justifyContent:'center', width:'300px',height:'50px',alignItems:'center', backgroundColor:'#f0f8ff',
            borderRadius:'200px', borderWidth:1, flexDirection:'row'}}>
              <Image source={require('./Data/tick.png')}
              style={{width:'20px', height:'20px', resizeMode:'contain'}} source={item.Image}/>
              <Text>{item.TenJob}</Text>
              <TouchableOpacity >
              <Image source={require('./Data/Edit.png')}
              style={{width:'20px', height:'20px', resizeMode:'contain'}} source={item.ImageEdit}/>
              </TouchableOpacity>
           </View>   
          );
        }}
        />
      </View>

      <TouchableOpacity 
     onPress={() => {
      navigation.navigate('Screen03', {jobMoi});
    }}
      style={{ marginTop: 50, marginLeft:150,backgroundColor:'blue', borderRadius:100, width:50, height:50}}>
        <Text style={{color:'white',fontSize:'40px', fontWeight:'bold'}}> + </Text>
      </TouchableOpacity>
    </View>
      
  )
}

function Screen03({navigation, route}){
  const [jobADD, setjobADD] = React.useState("");
  return(
    <View style={styles.container}>
     
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>ADD YOUR JOB</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity 
      style={{ marginLeft: '20px', width: '90%', height: '60px', borderWidth: 1, borderRadius: '10px', flexDirection: 'row' }}>
        <Image
          style={{ width: '30px', height: '30px', resizeMode: 'contain', marginTop: '20px' }}
          source={require('./Data/search.png')} />
        <TextInput style={{ fontSize: '15px', color: 'grey', fontWeight: 1}} placeholder='input put your job' />
      </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Screen02', {jobADD: jobADD});
      }}
      style={{ marginTop: '80px', width: '60%', height: '60px', borderWidth: 1, borderRadius: '10px', backgroundColor:'blue', marginBottom:'20px' }}>
       <Text style={{fontSize:25, fontWeight:'bold', margin:'auto', color:'white'}}>FINISH</Text>
      </TouchableOpacity>
      <Image
          style={{ width: 150, height: 150, resizeMode: 'contain', justifyContent:'space-around' }}
          source={require('./Data/ImageManager.png') }/>
      </View>
    
    </View>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen01' screenOptions={{ headerShown: true }}>
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen
          options={({ route }) => ({
            title: "",
            headerRight: () => {
              return (
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./assets/icon copy.png')}
                      style={{ width: '30px', height: '30px', resizeMode: 'contain' }} />
                    <Text style={{ marginRight: '20px' }}>Hi {route.params.name}</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight:'bold'}}>Have a nice nice day</Text>
                  </View>
                </View>
              )
            },
          })}
          name='Screen02' component={Screen02} />
          <Stack.Screen name='Screen03' component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
