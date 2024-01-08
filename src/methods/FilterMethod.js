import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Mapmethod from './src/methods/Mapmethod'
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData'
const FilterMethod = () =>
{

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,79];
  const primeNum = array.filter(primevalue);

  function primevalue(num){
    for(let i=2; i<num; i++){
      if(num % i ===0){
        return false;
      }
    }
    return num>1;

  }
 
  return (
    
    <View>
      <Text style={styles.mainText}>{result.join(",")}</Text>
      <Text style={styles.mainText}>{primeNum.join(",")}</Text>
   

    </View>
  )
}

export default FilterMethod;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    textAlign: "center",
    margin:5,
    backgroundColor:"skyblue"
  }
})