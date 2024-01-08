import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useTranslation } from 'react-i18next'
import i18n from './i18next'
const initI18n = i18n;
const Localization = () =>
{
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>

      <Text style={{ flex: 1, alignSelf: 'center', textAlignVertical: 'center' }}>{t('Hey Yo Im at home')}</Text>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('en')} //Here I change the language to "en" English
          style={styles.button}>
          <Text style={{ color: '#fff' }}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('es')} //Here I change the language to "es" Spanish
          style={styles.button}>
          <Text style={{ color: '#fff' }}>ES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('de')} //Here I change the language to "de" German
          style={styles.button}>
          <Text style={{ color: '#fff' }}>DE</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Localization

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#61e3a5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
})