import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const BbMajor = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/majorchords/bb/bb1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/bb/bb2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/bb/bb3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/bb/bb4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/bb/bb5.png')} 
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

export default BbMajor;
