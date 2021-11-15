import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
      <Text style={styles.addText}>Delete</Text>

    </View>
  ) 
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    fontSize:20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: 'blue',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  //added user list
  itemText: {
    maxWidth: '90%',
    fontSize:18,
    fontWeight:'bold'
    
  },
  //delete text
  addText :{
      fontSize:18,
      color:'red'

  }

  //   circular: {
//     width: 0,
//     height: 0,
//     borderColor: 'none',
//     borderWidth: 2,
//     borderRadius: 5,
//     padding:0
//   },
});

export default Task;