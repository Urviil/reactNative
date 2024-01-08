import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Geolocation from '@react-native-community/geolocation'

const GeoLocation = () => {
    const [info,setInfo] = useState('')
    Geolocation.getCurrentPosition(data =>
        {
            setInfo(data.coords.latitude);
        }         )
            
  return (
    <View>
      <Text>GeoLocation</Text>
      <Text>{info}</Text>
    </View>
  )
}

export default GeoLocation

const styles = StyleSheet.create({})