import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Audio} from 'expo-av'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [sound, setSound] = useState()

  async function handleChocMental() {
    const {sound} = await Audio.Sound.createAsync(
      require('./assets/choc_mental.mp3')
    )
    setSound(sound)

    await sound.playAsync()
  }

  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync()
    } : undefined;
  }, [sound])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Un Bon Moment</Text>
      <Button title={"Choc Mental !"} onPress={() => handleChocMental()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    textTransform: 'uppercase'
  },
  buttonStyle: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'black'
  }
});
