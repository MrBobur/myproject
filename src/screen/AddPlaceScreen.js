import * as React from 'react';
import {View, Text,Button, StyleSheet,TextInput } from 'react-native';

export function AddPlaceScreen({ navigation }) {
  return (
    <View style={style.add_main_contegner}>
        <View><TextInput placeholder='Напишите что-нибудь...' style={style.text_input}/></View>
    </View>
  );
}

const style = StyleSheet.create({
    add_main_contegner:{
        backgroundColor:'white',
        flex:1,
    },
    text_input:{
    borderWidth:2,
    height:100,
    }

})