import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';


const chords = [
    {
    name: 'Gb Major',
    icon: 'music-note',
    Press:'GbMaj'
    },
    {
    name: 'Gb Major 7th',
    icon: 'music-note',
    Press:'GbMaj7'
    },
    {
    name: 'Gb Minor',
    icon: 'music-note',
    Press:'GbMin'
    },
    {
    name: 'Gb Minor 7th',
    icon: 'music-note',
    Press:'GbMin7'
    },{
    name: 'Gb Dominant 7th',
    icon: 'music-note',
    Press:'GbDom7'
    },
    {
    name: 'Gb Diminished',
    icon: 'music-note',
    Press:'GbDim'
    },
    {
    name: 'Gb Augmented',
    icon: 'music-note',
    Press:'GbAug'
    }
]

const GbSelector = ({ navigation }) => {
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

export default GbSelector;
