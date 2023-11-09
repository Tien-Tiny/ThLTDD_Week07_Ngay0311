import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
   <View style={styles.container}>
       
            <Text style={{marginTop:'10px',fontSize:'24px'}}> Welcome to Cafe world </Text>
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
