import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Mapmethod from './src/methods/Mapmethod'
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData'
const fillMethod = () =>
{

  const array1 = [1, 2, 3, 4];
  const array4 = [1, 2, 3, 4];
  const array2 = array4.fill(5, 1, 3); // index 3 is not counted in this method
  const array3 = array1.fill(5, 2);
 

const tempGirls = Array(5).fill("girl", 0);

  return (
    
    <View>
      <Text style={styles.mainText}>{tempGirls.length}-{tempGirls.join(",")}</Text>
      <Text style={styles.mainText}>{array2.join(",")}</Text>
      <Text style={styles.mainText}>{array3.join(",")}</Text>

    </View>
  )
}

export default fillMethod

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    textAlign: "center",
    margin:5,
    backgroundColor:"skyblue"
  }
})