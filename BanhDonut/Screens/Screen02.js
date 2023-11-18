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

export default function App({navigation, route}) {

  return (
    <View style={styles.container}>
        <Text>
           {route.params.banh.name}
        </Text>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
