import { Alert, Dimensions, FlatList, StyleSheet,Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';

const {height, width} = Dimensions.get('screen')
const RealtimeDB = () => {
 const [inputText, setInputText] = useState(null)
 const [list, setList] = useState(null)
 const[mydata,setMydata] = useState(null);
 const [isupdateData, setIsupdateData] = useState(false)
 const [selectedCardindex, setSelectedCardindex] = useState(null)

    useEffect(()=>{
        getDatabase();
    },[])
    const getDatabase = async ()=>{
        try {
            // const data = await database().ref('newUsers').once('value');
            const data = await database().ref('newUsers').on('value',(tempdata)=>{
                console.log(data)
                setList(tempdata.val())
            })
        } catch (error) {
            console.log(error)
        }
        
    } 

    const handleData =async ()=>{
       try {
        if(inputText.length>0){
            const index= list.length
        const resp = await database().ref(`newUsers/${index}`).set({
            value: inputText
        })
        console.log(resp)
        setInputText('')
        }
        else{
            alert("Please Enter Value")
        }
       } catch (error) {
        
       }

    }
    const handleUpdateData =async ()=>{
        try {
            if(inputText.length>0){
                const resp = await database().ref(`newUsers/${selectedCardindex}`).update({
                    value: inputText
                })
                setInputText('')
                setIsupdateData(false)
            }
            else{
                alert("Please Enter Value && try again!")
            }
        } catch (error) {
            
        }
    }

    const handleCardPress =(cardIndex, iivalue)=>{
        try {
            setIsupdateData(true)
            setSelectedCardindex(cardIndex)
            setInputText(iivalue)
        } catch (error) {
            
        }
    }

    const handleLongPress=  (cardIndex, iivalue)=>{
        try {
            Alert.alert('Alert', `Are you sure to delete ${iivalue} ?`,[
                {
                    text: 'Cancel',
                    onPress:()=>{
                        console.log("Cancelled")
                    }
                },
                {
                    text: 'Ok',
                    onPress:async()=>{
                        try {
                            const resp = await database().ref(`newUsers/${cardIndex}`).remove();
                            console.log(resp)
                            setInputText('')
                setIsupdateData(false)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            ])
        } catch (error) {
            
        }
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Todo App</Text>
        <View>

      <TextInput placeholder='Enter Value' style={styles.inputTxt} value={inputText} onChangeText={e => setInputText(e)}/>
      {
        !isupdateData ? <TouchableOpacity style={styles.addButton} onPress={handleData}><Text style={{fontSize:16,color:'white'}}>Add</Text></TouchableOpacity> :
        <TouchableOpacity style={styles.addButton} onPress={handleUpdateData} ><Text style={{fontSize:16,color:'white'}}>Update</Text></TouchableOpacity>
      }
      
        </View>
        <View>
            <Text style={styles.txt}>Todo List</Text>
            <View style={{marginTop:10}}>
                <FlatList data={list} renderItem={item=>{
                    const cardIndex = item.index;
                    if(item.item !==null){
                        return(
                            <TouchableOpacity onLongPress={()=>{handleLongPress(cardIndex,item.item.value)}} onPress={()=>{handleCardPress(cardIndex,item.item.value)}}>

                            <Text style={styles.cardTxt}>{item.item.value}</Text>
                            </TouchableOpacity>
                            )
                        }
                }} />
                
            </View>
        </View>
    </View>
  )
}

export default RealtimeDB

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:10,
    },
    txt:{
        fontSize:20,
        fontWeight: 'bold'
    },
    inputTxt:{
        width: width - 30,
        borderWidth:2,
        padding:10,
        marginTop:10,
        borderRadius:10,
    },
    addButton:{
        backgroundColor:'blue',
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        marginVertical:10,
        padding:5,
        justifyContent:'center'
    },
    cardTxt:{
        width: width - 30,
        backgroundColor:'skyblue',
        padding:20,
        borderRadius:50,
        marginBottom:10,
        fontSize:16
    }
})