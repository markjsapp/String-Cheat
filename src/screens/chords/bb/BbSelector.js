import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'Bb Major',
    icon: 'music-note',
    Press:'BbMaj'
    },
    {
    name: 'Bb Major 7th',
    icon: 'music-note',
    Press:'BbMaj7'
    },
    {
    name: 'Bb Minor',
    icon: 'music-note',
    Press:'BbMin'
    },
    {
    name: 'Bb Minor 7th',
    icon: 'music-note',
    Press:'BbMin7'
    },
    {
      name: 'Bb Dominant 7th',
      icon: 'music-note',
      Press:'BbDom7'
    },
    {
    name: 'Bb Diminished',
    icon: 'music-note',
    Press:'BbDim'
    },
    {
    name: 'Bb Augmented',
    icon: 'music-note',
    Press:'BbAug'
    },
]

const BbSelector = ({ navigation }) => {
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

export default BbSelector;
