import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sound from 'react-native-sound'
const soundList = [
    require("../sounds/sound.mp3"),
    require("../sounds/musicSong.mp3")
]
const SoundDemo = () => {
    

    // const playSound =()=>{
    //     const sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
    //         if (error) {
    //           console.log('failed to load the sound', error);
    //           return;
    //         }
    //         // loaded successfully
    //         console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
          
    //         // Play the sound with an onEnd callback
    //         sound.play((success) => {
    //           if (success) {
    //             console.log('successfully finished playing');
    //           } else {
    //             console.log('playback failed due to audio decoding errors');
    //           }
    //         });
    //       });
    //       console.log(sound);
    // }

    const soundPlay =(sound)=>{
        const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err)=>{
            if(err){
                console.log("can't play")
            }
        })
           setTimeout(() => {
            soundVar.play();
           }, 1000); 
    

        soundVar.release();

    }    

  return (
    <View>
      
      {soundList.map((sound)=> {
        return(
            <View>
            <Text key={sound} onPress={()=>soundPlay(sound)}>{sound}</Text>
            </View>
        )
        
        
      })}
    </View>
  )
}

export default SoundDemo

const styles = StyleSheet.create({})