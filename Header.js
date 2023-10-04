import { View, Text, Image } from 'react-native'
import React from 'react'
import Dropdown from './DropDown'

export default function Header() {
  return (
    <View style={{backgroundColor:'#5417D7',width:'100%',padding:10,height:120}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:15}}>
      <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
      <Image style={{height:50,width:50, borderRadius:25}} source={require('./person.jpg')}/>
      <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginLeft:10}}>Hi Sophie.</Text>
      </View>
      <View>
        <Text style={{color:'white'}}>EN</Text>
      </View>
    </View>
    <Dropdown />
    </View>
  )
}