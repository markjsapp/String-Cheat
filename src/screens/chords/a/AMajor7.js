import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const AMajor7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/major7chords/a/a1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/a/a2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/a/a3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/a/a4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/a/a5.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/a/a6.png')} 
          style={styles.image}
          />
          </ScrollView>
        </View>
    )
  };

const styles = StyleSheet.create({
  container: {
  alignItems: 'center',
  padding: 15,
  backgroundColor: '#FFFFFF'
  },
  image: {
    width: 350, 
    height: 350, 
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF'
  }
});

export default AMajor7;
