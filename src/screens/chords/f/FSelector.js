import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'F Major',
    icon: 'music-note',
    Press:'FMaj'
    },
    {
    name: 'F Major 7th',
    icon: 'music-note',
    Press:'FMaj7'
    },
    {
    name: 'F Minor',
    icon: 'music-note',
    Press:'FMin'
    },
    {
    name: 'F Minor 7th',
    icon: 'music-note',
    Press:'FMin7'
    },
    {
    name: 'F Dominant 7th',
    icon: 'music-note',
    Press:'FDom7'
    },
    {
    name: 'F Diminished',
    icon: 'music-note',
    Press:'FDim'
    },
    {
    name: 'F Augmented',
    icon: 'music-note',
    Press:'FAug'
    },
]

const FSelector = ({ navigation }) => {
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

export default FSelector;
