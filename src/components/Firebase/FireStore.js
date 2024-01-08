import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const FireStore = () => {
 const[mydata,setMydata] = useState(null);
    useEffect(()=>{
        getDatabase();
    },[])
    const getDatabase = async()=>{
        try {
            const data = await firestore().collection('testing').doc('V9Hn2apEMo1xbJPO8HK1').get()
           setMydata(data._data);
        } catch (error) {
            console.log(error)
        }
        
    } 
  return (
    <View>
      <Text>Name: {mydata?mydata.name: "Loading..."}</Text>
      <Text>Age: {mydata?mydata.age: "Loading..."}</Text>
      <Text>Hobby: {mydata?mydata.hobby.map((list)=>`  ${list}`) : "Loading..."}</Text>
    </View>
  )
}

export default FireStore

const styles = StyleSheet.create({})