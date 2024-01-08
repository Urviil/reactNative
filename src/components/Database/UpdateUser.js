import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage'

let db = openDatabase({ name: 'UserDatabaseXYZ.db' });
const UpdateUser = ({navigation}) =>
{
  const route =useRoute();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() =>
  {
    setName(route.params.data.name);
    setEmail(route.params.data.email);
    setAddress(route.params.data.address);

  }, []);

  const updateData = () =>
  {
    db.transaction((tx) => {
        tx.executeSql(
          'UPDATE table_user set user_name=?, user_email=? , user_address=? where user_id=?',
          [name, email, address, route.params.data.id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User updated successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.goBack(),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Updation Failed');
          }
        );
      });
    };
  
  
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

      <TouchableOpacity style={styles.updateBtn} onPress={() =>{
      
        updateData()
      }}
      >
        <Text style={{ fontSize: 16, color: 'white' }}>Update user</Text>
      </TouchableOpacity>


    </View>
  )
}

export default UpdateUser

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', },
  inputstyle: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
    borderRadius: 10,
    padding: 10

  },
  updateBtn: {
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