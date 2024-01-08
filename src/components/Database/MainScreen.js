import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
import { useIsFocused } from '@react-navigation/native';

let db = openDatabase({ name: 'UserDatabaseXYZ.db' });

const MainScreen = ({navigation, }) => {
    const isFocused = useIsFocused()
    const [userList, setUserList]= useState([])
    useEffect(() => {
        getData();
      }, [isFocused]);

      const getData =()=>{
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user',
            [],
            (tx, res) => {
              let temp = [];
              for (let i = 0; i < res.rows.length; ++i){
console.log(res.rows.item(i))
                  temp.push(res.rows.item(i));
                }
              setUserList(temp);
            }
          );
        });
      }

      const deleteUser =(id)=>{
        db.transaction((tx) => {
          tx.executeSql(
            'DELETE FROM  table_user where user_id=?',
            [id],
            (tx, results) => {
              getData();
      })
    });
  }
  return (
    <View style={{flex:1}}>
        <FlatList data={userList} renderItem={({item, index})=>{
            return(
              <View style={{margin:20, backgroundColor:'white',
              padding:10,}}>
                <View style={styles.dataViewbox}> 
                <Text style={styles.dataTxt}>{'Name: ' +item.user_name}</Text>
                <Text style={styles.dataTxt}>{'Email: ' +item.user_email}</Text>
                <Text style={styles.dataTxt}>{'Address: ' +item.user_address}</Text>
                </View>
                <View style={{borderRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-around',backgroundColor:'#f2f2f2'}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('UpdateUser',
                  {data:
                    {
                      name:item.user_name,
                      email:item.user_email,
                      address:item.user_address,
                      id:item.user_id,
                  }
                }
                  )}}><Image style={styles.imageIcon} source={require('../../Images/user_edit.png')}/></TouchableOpacity>
                  <TouchableOpacity onPress={()=>deleteUser(item.user_id)}><Image style={styles.imageIcon} source={require('../../Images/user_delete.png')}/></TouchableOpacity>
                </View>
                </View> 
            )
        }} />

      <TouchableOpacity style={styles.saveBtn} onPress={() =>{
        navigation.navigate('AddNewUser');
      }}
      >
      <Text style={{ fontSize: 16, color: 'white' }}>Add user</Text>
    </TouchableOpacity>
      
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    saveBtn: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'purple',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
      },
      dataViewbox:{
        backgroundColor:'white',
      },
      dataTxt:{
        fontSize:18
      },
      imageIcon:{
        width:24,
        height:24
      }
})