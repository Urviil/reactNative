import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window')
const ModalPractice = ({onSelectLang}) =>
{
  const [selectedLang, setSelectedlang] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [languages, setLanguages] = useState([
    { name: 'English', selected: true },
    { name: 'हिंदी', selected: false },
    { name: 'ગુજરાતી', selected: false },
    { name: 'ਪੰਜਾਬੀ', selected: false },
    { name: 'ਪੰਜਾਬੀ', selected: false },
    { name: 'தமிழ்', selected: false },
  ])

  const onSelect = (index) =>
  {
    const temp = languages;
    temp.map((item, ind) =>
    {
      if (index == ind)
      {
        if (item.selected == true)
        {
          item.selected = false;
        }
        else
        {
          item.selected = true;
          setSelectedlang(index)
        }
      }
      else
      {
        item.selected = false;
      }
      let temp2 = []
      temp.map(item =>
      {
        temp2.push(item)
      })
      setLanguages(temp2)
    })
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() =>
        {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={{ width: "100%" }}>
              <FlatList data={languages}
                renderItem={({ item, index }) =>
                {
                  return (

                    <TouchableOpacity style={[styles.selectionButtonOfLanguage, { borderColor: item.selected == true ? 'blue' : null }]} onPress={() => { onSelect(index) }}>
                      {
                        item.selected == true ? (<Image source={require('../Images/selected.png')}
                          style={{ width: 24, height: 24, tintColor: 'blue' }} />)
                          :
                          (<Image source={require('../Images/nonselected.png')}
                            style={{ width: 24, height: 24 }} />)
                      }



                      <Text style={{ marginLeft: 10, fontSize: 16, color: item.selected == true ? 'blue' : null }}>{item.name}</Text></TouchableOpacity>

                  )
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)
                }>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>{

                  setModalVisible(!modalVisible)
                  onSelectLang(selectedLang)
                }
              }>
              <Text style={styles.textStyle}>Apply</Text>
            </Pressable>
          </View>
        </View>
    </View>
      </Modal >
  <Pressable
    style={[styles.button, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}>
    <Text style={styles.textStyle}>Select lang</Text>
  </Pressable>
    </View >
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    width: width - 20,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    width: "40%"
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  selectionButtonOfLanguage: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row'

  }
});

export default ModalPractice;