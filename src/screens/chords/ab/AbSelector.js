import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'Ab Major',
    icon: 'music-note',
    Press: 'AbMaj'
    },
    {
    name: 'Ab Major 7th',
    icon: 'music-note',
    Press: 'AbMaj7'
    },
    {
    name: 'Ab Minor',
    icon: 'music-note',
    Press: 'AbMin'
    },
    {
    name: 'Ab Minor 7th',
    icon: 'music-note',
    Press: 'AbMin7'
    },
    {
      name: 'Ab Dominant 7th',
      icon: 'music-note',
      Press: 'AbDom7'
    },
    {
    name: 'Ab Diminished',
    icon: 'music-note',
    Press:'AbDim'
    },
    {
    name: 'Ab Augmented',
    icon: 'music-note',
    Press: 'AbAug'
    },
]

const AbSelector = ({ navigation }) => {
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

export default AbSelector;
