import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {ListItem} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const chords = [
  {
  name: 'A Major',
  icon: 'music-note',
  Press: 'AMaj'
  },
  {
  name: 'A Major 7th',
  icon: 'music-note',
  Press: 'AMaj7'
  },
  {
  name: 'A Minor',
  icon: 'music-note',
  Press: 'AMin'
  },
  {
  name: 'A Minor 7th',
  icon: 'music-note',
  Press: 'AMin7'
  },
  {
  name: 'A Dominant 7th',
  icon: 'music-note',
  Press: 'ADom7'
  },
  {
  name: 'A Diminished',
  icon: 'music-note',
  Press:'ADim'
  },
  {
  name: 'A Augmented',
  icon: 'music-note',
  Press: 'AAug'
  },
]

const ASelector = ({ navigation }) => {
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

export default ASelector;
