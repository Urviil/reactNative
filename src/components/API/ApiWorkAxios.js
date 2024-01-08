import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"
const ApiWorkAxios = () => {

    const [users,setUsers]= useState('')

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users ")
        .then((resp)=> setUsers(resp.data))
        .catch((err)=> console.log(err))
    },[])
   const userdata=({item})=>{
    return(
      <View>
        <Text>{item.name}</Text>
        </View>
    )
  }
    
  return (
    <View>
      <Text>ApiWorkAxios</Text>
      {/* {
        users?.map((r,i)=>{
          return(
            <View  key={i}>
              <Text>{r.id}</Text>
              <Text>{r.name}</Text>
              </View>
          )
        } )
      } */}
      <FlatList 
      data={users}
      renderItem={userdata}/>
    </View>
  )
}

export default ApiWorkAxios

const styles = StyleSheet.create({})
