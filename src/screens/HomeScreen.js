import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { Card, ListItem, Button, Icon} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { ScrollView } from "react-native-gesture-handler";


const chords = [
  {
    name: 'A Chords',
    icon: 'music-note',
    key: '1',
    Press:'ASelect'
  },
  {
    name: 'Ab / G# Chords',
    icon: 'music-note',
    key: '2',
    Press:'AbSelect'
  },
  {
    name: 'B Chords',
    icon: 'music-note',
    key: '3',
    Press:'BSelect'
  },
  {
    name: 'Bb / A# Chords',
    icon: 'music-note',
    key: '4',
    Press:'BbSelect'
  },
  {
    name: 'C Chords',
    icon: 'music-note',
    key: '5',
    Press:'CSelect'
  },
  {
    name: 'D Chords',
    icon: 'music-note',
    key: '6',
    Press:'DSelect'
  },
  {
    name: 'Db / C# Chords',
    icon: 'music-note',
    key: '7',
    Press:'DbSelect'
  },
  {
    name: 'E Chords',
    icon: 'music-note',
    key: '8',
    Press:'ESelect'
  },
  {
    name: 'Eb  / D# Chords',
    icon: 'music-note',
    key: '9',
    Press:'EbSelect'
  },
  {
    name: 'F Chords',
    icon: 'music-note',
    key: '10',
    Press:'FSelect'
  },
  {
    name: 'G Chords',
    icon: 'music-note',
    key: '11',
    Press:'GSelect'
  },
  {
    name: 'Gb / F# Chords',
    icon: 'music-note',
    key: '12',
    Press:'GbSelect'
  },
]

const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <ScrollView>
      {chords.map((item, i) => (
      <TouchableOpacity>
      <ListItem
        onPress={() => navigation.navigate(item.Press)}
        title={item.name}
        leftIcon={{ name: item.icon }}
        rightTitle= 'Major, Minor, 7ths, Dom7, Dim, Aug'
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
  }

const styles = StyleSheet.create({
  user: {
      marginTop: 5,
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 25,
      marginHorizontal: 0,
      flexDirection:'row',
      marginBottom: 0
  },
  name: {
      fontSize: 25,
  },
  image:{
      alignSelf: 'auto',
      marginHorizontal: 15
  },
  sideTitle:{
    fontSize: 12
  }
});

export default HomeScreen;
