import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const ReduceMethod = () =>
{

  
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,79];
  const reduce = array.reduce((total, value)=> total + value,0 );

  
 
  return (
    
    <View>
      <Text style={styles.mainText}>{reduce}</Text>
   

    </View>
  )
}

export default ReduceMethod

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    textAlign: "center",
    margin:5,
    backgroundColor:"skyblue"
  }
})