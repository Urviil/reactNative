import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AnimatedTiming = () =>
{

    const position = new Animated.ValueXY({ x: 0, y: 0 })
    Animated.spring(position, {
        toValue: { x: 300, y: 400 },
        bounciness:10, 
        speed: 1,
        useNativeDriver: true
    }).start()
    // Animated.timing(position, {
    //     toValue: { x: 200, y: 500 },
    // duration: 2000,
    //     useNativeDriver: true
    // }).start()
    const rotate = position.x.interpolate({
        inputRange:[0,100],
        outputRange:['0deg','360deg']
    })
    return (
        <View style={styles.container}>
            <Text style={styles.mainTxt}>AnimatedTiming</Text>
            <Animated.View style={{height: windowHeight * 0.1,
        width: windowWidth * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        transform: [
            { translateX: position.x },
            { translateY: position.y },
            {rotate:rotate}
        ]
        }}> 
                <Text>BOX</Text>
            </Animated.View>
        </View>
    )
    }
export default AnimatedTiming

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTxt: {
        fontSize: RFValue(20, 580),
        fontWeight: 'bold',
        textAlign: "center"
    },
    boxView: {
        
    }
})