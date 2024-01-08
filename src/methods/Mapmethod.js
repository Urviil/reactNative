import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Mapmethod = () =>
{
    const user = [
        {
            id: 1,
            name: "aa"
        },
        {
            id: 2,
            name: "ab"
        },
        {
            id: 3,
            name: "ca"
        }
    ]
    console.log(user);
    const filteredNames = user.filter((item) => item.name.charAt(0) === 'a');
    console.log(filteredNames);
    return (
        <View>
            
            {
                filteredNames?.map((item) =>
                {
                    return (
                        <View>
                        <Text>{item.name}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default Mapmethod;