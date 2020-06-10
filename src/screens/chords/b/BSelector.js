import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'B Major',
    icon: 'music-note',
    Press: 'BMaj'
    },
    {
    name: 'B Major 7th',
    icon: 'music-note',
    Press: 'BMaj7'
    },
    {
    name: 'B Minor',
    icon: 'music-note',
    Press: 'BMin'
    },
    {
    name: 'B Minor 7th',
    icon: 'music-note',
    Press: 'BMin7'
    },
    {
    name: 'B Dominant 7th',
    icon: 'music-note',
    Press: 'BDom7'
    },
    {
    name: 'B Diminished',
    icon: 'music-note',
    Press: 'BDim'
    },
    {
    name: 'B Augmented',
    icon: 'music-note',
    Press: 'BAug'
    },
]

const BSelector = ({ navigation }) => {
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

export default BSelector;
