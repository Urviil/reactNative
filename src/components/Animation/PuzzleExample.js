import { Dimensions, StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PuzzleExample = () =>
{

    const position = new Animated.ValueXY({ x: 0, y: 0 })

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove:(e, gesture) =>{
            position.setValue({x:gesture.dx , y:gesture.dy})
        }
        // Animated.event([
        //     null,
        //     {dx:position.x, dy:position.y}
        // ],{useNativeDriver: false}
        // )
            ,
        onPanResponderRelease:()=>{
            // position.setValue({x:0 , y:0})
            Animated.spring(position,{
                toValue:{x:0,y:0},
                speed:20,
        useNativeDriver: true
            }).start()
        }
    })

    // Animated.spring(position, {
    //     toValue: { x: 300, y: 400 },
    //     bounciness:10, 
    //     speed: 1,
    //     useNativeDriver: true
    // }).start()
    // Animated.timing(position, {
    //     toValue: { x: 200, y: 500 },
    // duration: 2000,
    //     useNativeDriver: true
    // }).start()
    const rotate = position.x.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.container}>
            <Text style={styles.mainTxt}>AnimatedTiming</Text>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Animated.View {...pan.panHandlers} style={{
                    height: windowHeight * 0.1,
                    width: windowWidth * 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                    transform: [
                        { translateX: position.x },
                        { translateY: position.y },
                        { rotate: rotate }
                    ]
                }}>
                    <Text>BOX</Text>
                </Animated.View>
            </View>
        </View>
    )
}
export default PuzzleExample

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