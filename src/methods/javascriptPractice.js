import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const javascriptPractice = () =>
{

  const userData = [{
    "2022-08-18": [{
      "allergens": null,
      "date": "2022-08-18",
      "desc": "with parmesan roasted cauliflower and broccoli side",
      "end": "2022-08-18",
      "id": 12,
      "imageURL": "",
      "ingredients": null,
      "isNutrAvailable": null,
      "mealCalendarId": 34,
      "name": "C: Baked Alfredo Ziti (vegetarian)",
      "price": 6.5,
      "qty": 1,
      "reducedPrice": 3.5,
      "shortDescription": null,
      "start": "2022-08-18",
      "summaryId": 1,
      "type": "MEAL"
    }]
  },
  {
    "2022-08-19": [{
      "allergens": null,
      "date": "2022-08-19",
      "desc": "with parmesan roasted cauliflower and broccoli side",
      "end": "2022-08-19",
      "id": 12,
      "imageURL": "",
      "ingredients": null,
      "isNutrAvailable": null,
      "mealCalendarId": 34,
      "name": "C: Baked Alfredo Ziti (vegetarian)",
      "price": 6.5,
      "qty": 1,
      "reducedPrice": 3.5,
      "shortDescription": null,
      "start": "2022-08-19",
      "summaryId": 1,
      "type": "MEAL"
    }]
  }, {
    "2022-08-20": [{
      "allergens": null,
      "date": "2022-08-20",
      "desc": "with parmesan roasted cauliflower and broccoli side",
      "end": "2022-08-20",
      "id": 12,
      "imageURL": "",
      "ingredients": null,
      "isNutrAvailable": null,
      "mealCalendarId": 34,
      "name": "C: Baked Alfredo Ziti (vegetarian)",
      "price": 6.5,
      "qty": 1,
      "reducedPrice": 3.5,
      "shortDescription": null,
      "start": "2022-08-20",
      "summaryId": 1,
      "type": "MEAL"
    }]
  }]

  // const test = userData[0]['2022-08-18'][0]['price']
  // const test = Object.values(userData);
  // console.log(test);
  // const totalPrice = userData.reduce((accVal, curVal) => accVal + curVal.price, 0)

  // const key = userData.keys();
  // for (const element of key)
  // {
  //   console.log(element);
  // }
  // const descendingOrder = userData.sort(function(a, b){return b.date - a.date});
  // console.log(descendingOrder)

  
  let totalprice = 0;
   userData.forEach(e=>{
    const keyPrice= e[Object.keys(e)[0]][0].price;
    totalprice += keyPrice;
   
  });
 
  

  const totalPrice = userData.reduce((accVal, currVal)=>{
    const price = Object.values(currVal)[0][0].price;
    accVal += price;
    return accVal;
  },0)


  const allKeys = userData.flatMap( x=>Object.keys(x)[0]  );

  const sortedData = userData.sort(function(a, b) {
    var dateA = Object.keys(a)[0];
    var dateB = Object.keys(b)[0];
    return new Date(dateB) - new Date(dateA);
  });
  
  const desc =JSON.stringify(sortedData[0])
  // console.log(desc);

  


  return (

    <View>
      <ScrollView>

      <Text style={styles.mainText}>Listed names from the given array</Text>
      
      {
        userData?.map((item, index) =>
        {
          
          return (
            <View>
              <Text key={index}>{item[Object.keys(item)][0].name}</Text>

            </View>
          )
        })
      }
      <Text style={styles.mainText}>Total Price </Text>
      
      <Text style={styles.txtBox}>{totalPrice}</Text>
      <Text style={styles.mainText}>Listing out Keys </Text>
      
      <Text>{allKeys.join(' , ')}</Text>
      <Text style={styles.mainText}>Listing out inn descendingOrder </Text>
      <Text style={styles.txtBox}>{desc}</Text>

      
      </ScrollView>
    </View>
  )
}

export default javascriptPractice

const styles = StyleSheet.create({
  mainText: {
    fontSize: RFValue(24,700), // second argument is standardScreenHeight(optional),
    textAlign: "center",
    margin: 10,
    textAlign: "center",
    margin: 5,
    backgroundColor: "skyblue"
  },
  txtBox: {
    fontSize:  RFValue(24,1000),

  }
})