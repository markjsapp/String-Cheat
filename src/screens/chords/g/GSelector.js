import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'G Major',
    icon: 'music-note',
    Press:'GMaj'
    },
    {
    name: 'G Major 7th',
    icon: 'music-note',
    Press:'GMaj7'
    },
    {
    name: 'G Minor',
    icon: 'music-note',
    Press:'GMin'
    },
    {
    name: 'G Minor 7th',
    icon: 'music-note',
    Press:'GMin7'
    },
    {
      name: 'G Dominant 7th',
      icon: 'music-note',
      Press:'GDom7'
    },
    {
    name: 'G Diminished',
    icon: 'music-note',
    Press:'GDim'
    },
    {
    name: 'G Augmented',
    icon: 'music-note',
    Press:'GAug'
    },
]

const GSelector = ({ navigation }) => {
    return (
        <View>
          <ScrollView>
        {
    chords.map((item, i) => (
      <TouchableOpacity>
      <ListItem
        onPress={() => navigation.navigate(item.Press)}
        title={item.name}
        leftIcon={{ name: item.icon }}
        rightTitleStyle = {styles.sideTitle}
        bottomDivider
        chevron
      />
      </TouchableOpacity>
    ))
  }
  </ScrollView>
        </View>
    )
  };

const styles = StyleSheet.create({});

export default GSelector;
