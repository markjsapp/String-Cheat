import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'Eb Major',
    icon: 'music-note',
    Press:'EbMaj'
    },
    {
    name: 'Eb Major 7th',
    icon: 'music-note',
    Press:'EbMaj7'
    },
    {
    name: 'Eb Minor',
    icon: 'music-note',
    Press:'EbMin'
    },
    {
    name: 'Eb Minor 7th',
    icon: 'music-note',
    Press:'EbMin7'
    },
    {
      name: 'Eb Dominant 7th',
      icon: 'music-note',
      Press:'EbDom7'
    },
    {
    name: 'Eb Diminished',
    icon: 'music-note',
    Press:'EbDim'
    },
    {
    name: 'Eb Augmented',
    icon: 'music-note',
    Press:'EbAug'
    },
]

const EbSelector = ({ navigation }) => {
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

export default EbSelector;
