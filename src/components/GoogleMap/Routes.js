import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const Routes = () =>


{
  const GOOGLE_MAPS_APIKEY ="AIzaSyADtL0p7cMApW8WhJ9m4UICEXocmqICI1Q"
  const [state,setState] = useState({
   pickupCords:{
    latitude: 28.7041,
    longitude: 77.1025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,},
   destinationCords:{
    latitude: 28.7383,
    longitude: 77.0822,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
   }
  })
  const {pickupCords, destinationCords} = state
  return ( 
    <View style={styles.container}>
      <MapView style={{ flex:1,width:"100%",height: "100%",}}
  initialRegion={pickupCords}>
    <Marker
    coordinate={pickupCords}
  title={"test"}
  description={"des"}
/>
<Marker
    coordinate={destinationCords}
  title={"test"}
  description={"des"}
/>
<MapViewDirections
    origin={pickupCords}
    destination={destinationCords}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="hotpink"
  />
</MapView>
    </View>
  )
}

export default Routes

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