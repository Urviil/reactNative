import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage'

let db = openDatabase({ name: 'UserDatabaseXYZ.db' });
const AddNewUser = ({navigation}) =>
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() =>
  {
    db.transaction((txn) =>
    {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) =>
        {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0)
          {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(30), user_address VARCHAR(255))',
              []
            );
          }
          else
          {
            console.log("Already table exists")
          }
        }
      );
    });
  }, []);

  const saveData = () =>
  {
    db.transaction(txn =>
    {
      txn.executeSql(
        'INSERT INTO table_user(user_name, user_email, user_address) VALUES(?,?,?)',
        [name, email, address],
        (tex, res) =>
        {
          if(res.rowsAffected==1){
            navigation.goBack()
            console.log(res)
          }
          else{
            console.log(res)
          }
        },
        (error)=>{
          console.log(error);
        }
      );
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        style={styles.inputstyle}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.inputstyle}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Address"
        style={styles.inputstyle}
        value={address}
        onChangeText={txt => setAddress(txt)}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={() =>{
      
        saveData()
      }}
      >
        <Text style={{ fontSize: 16, color: 'white' }}>Save user</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AddNewUser

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', },
  inputstyle: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
    borderRadius: 10,
    padding: 10

  },
  saveBtn: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    backgroundColor: 'purple',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
})