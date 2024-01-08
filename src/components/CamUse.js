import { Button, StyleSheet, Text, View,StatusBar, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import ImagePicker from 'react-native-image-crop-picker';

const CamUse = () => {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


    const [img,setImg]= useState('https://images.pexels.com/photos/1208074/pexels-photo-1208074.jpeg')
    const openCamera =()=>{
        ImagePicker.openCamera({
            width: windowWidth *0.5,
            height: windowHeight* 0.5,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImg(image.path)
          });
          
    }
    const openVideo=()=>{
      ImagePicker.openCamera({
        mediaType: 'video',
      }).then(image => {
        console.log(image);

        setImg(image.path)
      });
    }
  return (
    <View style={styles.container}>
      <Text style={styles.txtbox}>CameraUse</Text>
     
        <Image style={{ width: windowWidth * 1, height: windowHeight* 0.25, alignContent:'center'}} source={{uri:img}}/>
    
      <View style={{flexDirection:"row",padding:10, justifyContent:'space-evenly'}}>
      <Button title="Open Camera" onPress={openCamera}/>
      <Button title="Open video" onPress={openVideo}/>
      </View>
      
      
    </View>
  )
}

export default CamUse

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      txtbox: {
        fontSize: RFValue(20, 580),
        fontWeight: 'bold',
        textAlign:"center"
      }
})