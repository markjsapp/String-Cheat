import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const ADominant7 = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/dominantchords/a/a1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a5.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a6.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/dominantchords/a/a7.png')} 
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

export default ADominant7;
