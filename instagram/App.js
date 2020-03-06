import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
 var arrFotos = [ 0, 1, 2, 3, 4, 5, 6, 7, 8];

import {Ionicons, Foundation,AntDesign } from '@expo/vector-icons';
export default class App extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'blue', 
        flex:1
      }}>
      
        <View Key="topo" style={{
          backgroundColor: 'white',
          height: 70
          
          
        }}>
      
        <Image 
        resizeMode="contain"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
        }}
        style={{
          
          height: 50,
          marginTop: 22,

        }}/>
        
        
        </View>

         <ScrollView Key="conteudo" style={{
          backgroundColor: '#e4e4e4',
          flex: 1
        }}>
        {arrFotos.map(item =>( <Image  style={{
          marginVertical: 20,
          height: 200,

        }}
        source={{
          uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4KzZVLCNzffVBj2WZIlhd54uTY8Xo7A-VrpElQlLVmnqDoxPg'
        }}/>))}
       
        </ScrollView>

        <View Key="menu" style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: 45,
        }}>
        <Foundation name="home" size={25} color="black" />
        <AntDesign name="search1" size={25} color="black"/>
        <AntDesign name="plussquareo" size={25} color="black"/>
        <AntDesign name="hearto" size={25} color="black"/>
        <AntDesign name="user" size={25} color="black"/>
        
        </View>


      </View>
    );
  }
}
