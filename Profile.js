import { View, Text,Image,Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './BottomTab';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({navigation}) {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('username');
        navigation.navigate('Login');
      };
  return (
    <View style={{height:'100%'}}>
    <View style={{padding:25,width:'100%'}}>
      <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
      <Image style={{height:100,width:100, borderRadius:50,marginBottom:40}} source={require('./person.jpg')}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginBottom:15}}>
            <View style={{flex:1}} >
            <Text style={{fontSize:15}}>Name</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontSize:15}}>Sophie</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <View style={{flex:1}} >
            <Text style={{fontSize:15}}>Name</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontSize:15}}>Sophie123@gmail.com</Text>
            </View>
        </View>
        <TouchableOpacity style={{borderWidth:1,borderColor:'#5417D7',height:30,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:200,paddingHorizontal:20,marginTop:20}} onPress={handleLogout}>
        <Ionicons name="exit" size={25} color="#5417D7" />
            <Text style={{color:'#5417D7'}}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
    <BottomTab navigation={navigation}/> 
    </View>
  )
}