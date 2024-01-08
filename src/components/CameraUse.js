import { Button, StyleSheet, Text, View,StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const CameraUse = () => {
    const [imgUrl, setImgUrl]= useState('https://images.pexels.com/photos/1208074/pexels-photo-1208074.jpeg');
    const openCamera = async ()=>{
        let options={
            storageOptions: {
                path: 'images',
                mediaType:'photo'
              },
        }
        console.log("Camera opened")
        const result = await launchCamera(options)
        console.log(result)
        setImgUrl(result?.assets[0]?.uri);
        console.log(imgUrl)
    }
  return (
    <View style={styles.container}>
      <Text>CameraUse</Text>
      <View>
      <Image style={{height:300, width:300}} source={{uri: imgUrl}}/>
      </View>
     
      <Button title="Open Camera" onPress={openCamera}/>
    </View>
  )
}

export default CameraUse

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