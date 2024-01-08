import { StatusBar, StyleSheet, Button, Text, View, PermissionsAndroid, Platform } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {request, PERMISSIONS} from 'react-native-permissions';

const askForPermission =(permission)=>{
  request(permission).then((result) => {
    console.log(result)
  });
} 
const requestCameraPermission =()=>{
  if(Platform.OS == 'android' )
  {
    askForPermission(PERMISSIONS.ANDROID.CAMERA)
  }
  else{
    askForPermission(PERMISSIONS.IOS.CAMERA)
  }
}

const PermissionPractice = () =>
{

  return (
    <View style={styles.container}>
      <Text style={styles.txtbox}>Trying Permissions</Text>
      <Button title="Request Permissions" onPress={requestCameraPermission} />
    </View>
  )
}

export default PermissionPractice

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  txtbox: {
    fontSize: RFValue(20, 580),
    fontWeight: 'bold'
  }
})