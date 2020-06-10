import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const AbMajor7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/major7chords/ab/ab1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/ab/ab2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/ab/ab3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/ab/ab4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/ab/ab5.png')} 
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

export default AbMajor7;
