import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

const chords = [
    {
    name: 'Db Major',
    icon: 'music-note',
    Press:'DbMaj'
    },
    {
    name: 'Db Major 7th',
    icon: 'music-note',
    Press:'DbMaj7'
    },
    {
    name: 'Db Minor',
    icon: 'music-note',
    Press:'DbMin'
    },
    {
    name: 'Db Minor 7th',
    icon: 'music-note',
    Press:'DbMin7'
    },
    {
    name: 'Gb Dominant 7th',
    icon: 'music-note',
    Press:'GbDom7'
    },
    {
    name: 'Db Diminished',
    icon: 'music-note',
    Press:'DbDim'
    },
    {
    name: 'Db Augmented',
    icon: 'music-note',
    Press:'DbAug'
    },
]

const DbSelector = ({ navigation }) => {
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

export default DbSelector;
