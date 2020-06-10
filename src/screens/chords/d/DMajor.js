import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const DMajor = () =>  {
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image 
          source={require('../../../../assets/majorchords/d/d1.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/d/d2.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/d/d3.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/d/d4.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/d/d5.png')} 
          style={styles.image}
          />
          <Image 
          source={require('../../../../assets/majorchords/d/d6.png')} 
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

export default DMajor;
