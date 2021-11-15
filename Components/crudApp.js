import React, { useState } from "react";
import { view, TextInput,Text,Button,ScrollView,TouchableOpacity } from "react-native";


function crudApp(){

    const [text , setText]= useState('')
    const [list , setlist ]= useState([])
    return(
        <view style={{flex:1, padding:10}}>
        <TextInput style={{borderWidth:0.31, marginBottom:10}} value={text}onChangeText={(e) =>{setText(e) }}  />
        <Button title={'Add'}/>
        </view>
    )
}
export default crudApp