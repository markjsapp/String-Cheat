import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'E Major',
    icon: 'music-note',
    Press:'EMaj'
    },
    {
    name: 'E Major 7th',
    icon: 'music-note',
    Press:'EMaj7'
    },
    {
    name: 'E Minor',
    icon: 'music-note',
    Press:'EMin'
    },
    {
    name: 'E Minor 7th',
    icon: 'music-note',
    Press:'EMin7'
    },
    {
      name: 'E Dominant 7th',
      icon: 'music-note',
      Press:'EDom7'
    },
    {
    name: 'E Diminished',
    icon: 'music-note',
    Press:'EDim'
    },
    {
    name: 'E Augmented',
    icon: 'music-note',
    Press:'EAug'
    },
]

const ESelector = ({ navigation }) => {
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

export default ESelector;
