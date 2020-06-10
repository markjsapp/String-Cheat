import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const GMinor7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/minor7chords/g/g1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/minor7chords/g/g2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/minor7chords/g/g3.png')} 
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

export default GMinor7;
