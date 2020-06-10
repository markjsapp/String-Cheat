import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'D Major',
    icon: 'music-note',
    Press:'DMaj'
    },
    {
    name: 'D Major 7th',
    icon: 'music-note',
    Press:'DMaj7'
    },
    {
    name: 'D Minor',
    icon: 'music-note',
    Press:'DMin'
    },
    {
    name: 'D Minor 7th',
    icon: 'music-note',
    Press:'DMin7'
    },
    {
    name: 'D Dominant 7th',
    icon: 'music-note',
    Press:'DDom7'
    },
    {
    name: 'D Diminished',
    icon: 'music-note',
    Press:'DDim'
    },
    {
    name: 'D Augmented',
    icon: 'music-note',
    Press:'DAug'
    },
]

const DSelector = ({ navigation }) => {
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

export default DSelector;
