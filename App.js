import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CamUse from './src/components/CamUse'
import AnimatedTiming from './src/components/Animation/AnimatedTiming'
import PuzzleExample from './src/components/Animation/PuzzleExample'
import Fading from './src/components/Animation/Fading'
import Geolocation from '@react-native-community/geolocation'
import GeoLocation from './src/components/GeoLocation'
import ApiWorkAxios from './src/components/API/ApiWorkAxios'
import Downloader from './src/components/Downloader'
import ModalPractice from './src/components/ModalPractice'
import SqlliteStorage from './src/components/Database/SqlliteStorage'
import AddNewUser from './src/components/Database/AddNewUser'
import MainScreen from './src/components/Database/MainScreen'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Routes from './src/components/GoogleMap/Routes'
import FireStore from './src/components/Firebase/FireStore'
import RealtimeDB from './src/components/Firebase/RealtimeDB'

const App = () =>


{
  
  return ( 
    <View style={styles.container}>
      <RealtimeDB />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#61e3a5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
})