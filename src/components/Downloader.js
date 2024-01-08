import { PermissionsAndroid, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { assets } from '../../react-native.config'
import RNFetchBlob from 'rn-fetch-blob'
const Downloader = () =>
{
    const [pastedUrl, setPastedUrl] = useState('')

    const requestStoragePermission = async () =>
    {
        try
        {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Downloader App Storage Permission',
                    message:
                        ' Downloader App needs access to your Storage ' +
                        'so you can download files.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED)
            {
                downloadFile()
            } else
            {
                console.log('Storage permission denied');
            }
        } catch (err)
        {
            console.warn(err);
        }
    };

    const downloadFile = () =>
    {
        const { config, fs } = RNFetchBlob
        const date = new Date();
        const fileDir = fs.dirs.DownloadDir;
  config({
            // add this option that makes response data to be stored as a file,
            // this is much more performant.
            fileCache: true,
            addAndroidDownloads:{
                useDownloadManager:true,
                notification:true,
                path:fileDir +"/dowload_"+Math.floor(date.getDate() + date.getSeconds() /2)+".png",
                description:"File download"
            }
        })
    .fetch('GET', pastedUrl, {
        //some headers ..
    })
    .then((res) =>
    {
        // the temp file path
        console.log('The file saved to ', res.path())
        alert("File Downloaded Succesfully")
    })
      }
return (
    <View style={styles.container}>

        <TextInput placeholder='Enter URL' style={styles.inputBox} value={pastedUrl} onChangeText={(e) => setPastedUrl(e)} />
        <TouchableOpacity style={styles.button}
            onPress={() =>
            {
                if (pastedUrl !== "")
                {

                    requestStoragePermission()
                }
                else
                {
                    alert("No url detected")
                }
            }
            }
        >

            <Text style={{ fontFamily: 'Milky Honey' }}>Downloader</Text>
        </TouchableOpacity>
    </View>
)
}

export default Downloader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        borderWidth: 1,
        width: '90%',
        margin: 5,
        borderRadius: 15
    },
    button: {
        width: "90%",
        backgroundColor: "skyblue",
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})