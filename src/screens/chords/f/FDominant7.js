import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const FDominant7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/dominantchords/f/f1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/f/f2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/f/f3.png')} 
          style={styles.image}
          /> 
          <Image 
          source={require('../../../../assets/dominantchords/f/f4.png')} 
          style={styles.image}
          /> 
          <Image 
          source={require('../../../../assets/dominantchords/f/f5.png')} 
          style={styles.image}
          /> 
          <Image 
          source={require('../../../../assets/dominantchords/f/f6.png')} 
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

export default FDominant7;
