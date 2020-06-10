import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const CMajor7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/major7chords/c/c1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/c/c2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/c/c3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/c/c4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/c/c5.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/major7chords/c/c6.png')} 
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

export default CMajor7;
