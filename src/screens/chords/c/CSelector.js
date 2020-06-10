import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'C Major',
    icon: 'music-note',
    Press:'CMaj'
    },
    {
    name: 'C Major 7th',
    icon: 'music-note',
    Press:'CMaj7'
    },
    {
    name: 'C Minor',
    icon: 'music-note',
    Press:'CMin'
    },
    {
    name: 'C Minor 7th',
    icon: 'music-note',
    Press:'CMin7'
    },
    {
      name: 'C Dominant 7th',
      icon: 'music-note',
      Press:'CDom7'
    },
    {
    name: 'C Diminished',
    icon: 'music-note',
    Press:'CDim'
    },
    {
    name: 'C Augmented',
    icon: 'music-note',
    Press:'CAug'
    },
]

const CSelector = ({ navigation }) => {
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

export default CSelector;
