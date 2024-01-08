import { Dimensions, StyleSheet, Text, View, Animated, Button } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Fading = () =>
{

    const opacity = useState(new Animated.Value(0))[0]

    const openFade =()=>{Animated.timing(opacity,{
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }).start()
    }

    function closeFade (){Animated.timing(opacity,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        }).start()
    }


    return (
        <View style={styles.container}>
            <Text style={styles.mainTxt}>AnimatedTiming</Text>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Animated.View style={{
                    height: windowHeight * 0.1,
                    width: windowWidth * 0.2,
                    justifyContent: 'center',
                 opacity,
                    alignItems: 'center',
                    backgroundColor: 'yellow',

                }}>
                    <Text>BOX</Text>
                    

                </Animated.View>
                <View style={{ margin: 10, flexDirection: "row", justifyContent: 'space-between' }}>

                <Button  title="Fade in" onPress={openFade} />

                <Button title="Fade out" onPress={closeFade} />
            </View>
</View>
            

        </View>
    )
}
export default Fading

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTxt: {
        fontSize: RFValue(20, 580),
        textAlign: "center",
        fontFamily:'Agbalumo-Regular'
    },
    boxView: {

    }
})