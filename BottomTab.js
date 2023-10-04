import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTab({navigation}) {
  return (
    <View style={{position:'absolute',backgroundColor:'#5417D7',bottom:0,flexDirection:'row',justifyContent:'space-evenly',width:'100%',paddingVertical:10}}>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
          <Ionicons name="person" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
          <Ionicons name="home" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
          <Ionicons name="settings" size={30} color="white" />
          </TouchableOpacity>
          
    </View>
  )
}