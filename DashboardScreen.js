import React from 'react';
import { View, Text, Button,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Header from './Header';
import BottomTab from './BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DashboardScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <Header />
       <View style={{zIndex:-1,justifyContent:'center',alignItems:'center'}}>
       <Ionicons name="image" size={150} color="#5417D7" />
        <Text style={{marginBottom:10}}>Upload an Image</Text>
        
        <TouchableOpacity style={{backgroundColor:'#5417D7',borderRadius:25}}>
        <Ionicons name="add" size={50} color="white" />
        </TouchableOpacity>
        
        </View>
       <BottomTab navigation={navigation}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex:1
},
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DashboardScreen;
