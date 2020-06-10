import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
// A chord imports
import ASelector from './src/screens/chords/a/ASelector';
import AMajor from './src/screens/chords/a/AMajor';
import AMajor7 from './src/screens/chords/a/AMajor7';
import AMinor from './src/screens/chords/a/AMinor';
import AMinor7 from './src/screens/chords/a/AMinor7';
import ADiminished from './src/screens/chords/a/ADiminished';
import AAugmented from './src/screens/chords/a/AAugmented';
import ADominant7 from './src/screens/chords/a/ADominant7';
// Ab chord imports
import AbSelector from './src/screens/chords/ab/AbSelector';
import AbMajor from './src/screens/chords/ab/AbMajor';
import AbMajor7 from './src/screens/chords/ab/AbMajor7';
import AbMinor from './src/screens/chords/ab/AbMinor';
import AbMinor7 from './src/screens/chords/ab/AbMinor7';
import AbDiminished from './src/screens/chords/ab/AbDiminished';
import AbAugmented from './src/screens/chords/ab/AbAugmented';
import AbDominant7 from './src/screens/chords/ab/AbDominant7';
// B chord imports
import BSelector from './src/screens/chords/b/BSelector';
import BMajor from './src/screens/chords/b/BMajor';
import BMajor7 from './src/screens/chords/b/BMajor7';
import BMinor from './src/screens/chords/b/BMinor';
import BMinor7 from './src/screens/chords/b/BMinor7';
import BDiminished from './src/screens/chords/b/BDiminished';
import BAugmented from './src/screens/chords/b/BAugmented';
import BDominant7 from './src/screens/chords/b/BDominant7';
// Bb chord imports
import BbSelector from './src/screens/chords/bb/BbSelector';
import BbMajor from './src/screens/chords/bb/BbMajor';
import BbMajor7 from './src/screens/chords/bb/BbMajor7';
import BbMinor from './src/screens/chords/bb/BbMinor';
import BbMinor7 from './src/screens/chords/bb/BbMinor7';
import BbDiminished from './src/screens/chords/bb/BbDiminished';
import BbAugmented from './src/screens/chords/bb/BbAugmented';
import BbDominant7 from './src/screens/chords/bb/BbDominant7';
// C Chord imports
import CSelector from './src/screens/chords/c/CSelector';
import CMajor from './src/screens/chords/c/CMajor';
import CMajor7 from './src/screens/chords/c/CMajor7';
import CMinor from './src/screens/chords/c/CMinor';
import CMinor7 from './src/screens/chords/c/CMinor7';
import CDiminished from './src/screens/chords/c/CDiminished';
import CAugmented from './src/screens/chords/c/CAugmented';
import CDominant7 from './src/screens/chords/c/CDominant7';
// D chord imports
import DSelector from './src/screens/chords/d/DSelector';
import DMajor from './src/screens/chords/d/DMajor';
import DMajor7 from './src/screens/chords/d/DMajor7';
import DMinor from './src/screens/chords/d/DMinor';
import DMinor7 from './src/screens/chords/d/DMinor7';
import DDiminished from './src/screens/chords/d/DDiminished';
import DAugmented from './src/screens/chords/d/DAugmented';
import DDominant7 from './src/screens/chords/d/DDominant7';
// Db chord imports
import DbSelector from './src/screens/chords/db/DbSelector';
import DbMajor from './src/screens/chords/db/DbMajor';
import DbMajor7 from './src/screens/chords/db/DbMajor7';
import DbMinor from './src/screens/chords/db/DbMinor';
import DbMinor7 from './src/screens/chords/db/DbMinor7';
import DbDiminished from './src/screens/chords/db/DbDiminished';
import DbAugmented from './src/screens/chords/db/DbAugmented';
import DbDominant7 from './src/screens/chords/db/DbDominant7';
// E chord imports
import ESelector from './src/screens/chords/e/ESelector';
import EMajor from './src/screens/chords/e/EMajor';
import EMajor7 from './src/screens/chords/e/EMajor7';
import EMinor from './src/screens/chords/e/EMinor';
import EMinor7 from './src/screens/chords/e/EMinor7';
import EDiminished from './src/screens/chords/e/EDiminished';
import EAugmented from './src/screens/chords/e/EAugmented';
import EDominant7 from './src/screens/chords/e/EDominant7';
// Eb chord imports
import EbSelector from './src/screens/chords/eb/EbSelector';
import EbMajor from './src/screens/chords/eb/EbMajor';
import EbMajor7 from './src/screens/chords/eb/EbMajor7';
import EbMinor from './src/screens/chords/eb/EbMinor';
import EbMinor7 from './src/screens/chords/eb/EbMinor7';
import EbDiminished from './src/screens/chords/eb/EbDiminished';
import EbAugmented from './src/screens/chords/eb/EbAugmented';
import EbDominant7 from './src/screens/chords/eb/EbDominant7';
// F chord imports
import FSelector from './src/screens/chords/f/FSelector';
import FMajor from './src/screens/chords/f/FMajor';
import FMajor7 from './src/screens/chords/f/FMajor7';
import FMinor from './src/screens/chords/f/FMinor';
import FMinor7 from './src/screens/chords/f/FMinor7';
import FDiminished from './src/screens/chords/f/FDiminished';
import FAugmented from './src/screens/chords/f/FAugmented';
import FDominant7 from './src/screens/chords/f/FDominant7';
// G chord imports
import GSelector from './src/screens/chords/g/GSelector';
import GMajor from './src/screens/chords/g/GMajor';
import GMajor7 from './src/screens/chords/g/GMajor7';
import GMinor from './src/screens/chords/g/GMinor';
import GMinor7 from './src/screens/chords/g/GMinor7';
import GDiminished from './src/screens/chords/g/GDiminished';
import GAugmented from './src/screens/chords/g/GAugmented';
import GDominant7 from './src/screens/chords/g/GDominant7';
// Gb chord imports
import GbSelector from './src/screens/chords/gb/GbSelector';
import GbMajor from './src/screens/chords/gb/GbMajor';
import GbMajor7 from './src/screens/chords/gb/GbMajor7';
import GbMinor from './src/screens/chords/gb/GbMinor';
import GbMinor7 from './src/screens/chords/gb/GbMinor7';
import GbDiminished from './src/screens/chords/gb/GbDiminished';
import GbAugmented from './src/screens/chords/gb/GbAugmented';
import GbDominant7 from './src/screens/chords/gb/GbDominant7';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Each chord has a dedicated selector screen
    // From these screens you can navigate to the appropriate chord
    // ex. C chord -> C selector -> C Major
    ASelect: ASelector,
    AbSelect: AbSelector,
    BSelect: BSelector,
    BbSelect: BbSelector,
    CSelect: CSelector,
    DSelect: DSelector,
    DbSelect: DbSelector,
    ESelect: ESelector,
    EbSelect: EbSelector,
    FSelect: FSelector,
    GSelect: GSelector,
    GbSelect: GbSelector,
    // Dedicated Chord Pages
    // Major Chords
    AMaj: AMajor,
    AbMaj: AbMajor,
    BMaj: BMajor,
    BbMaj: BbMajor,
    CMaj: CMajor,
    DMaj: DMajor,
    DbMaj: DbMajor,
    EMaj: EMajor,
    EbMaj: EbMajor,
    FMaj: FMajor,
    GMaj: GMajor,
    GbMaj: GbMajor,
    // Minor Chords
    AMin: AMinor,
    AbMin: AbMinor,
    BMin: BMinor,
    BbMin: BbMinor,
    CMin: CMinor,
    DMin: DMinor,
    DbMin: DbMinor,
    EMin: EMinor,
    EbMin: EbMinor,
    FMin: FMinor,
    GMin: GMinor,
    GbMin: GbMinor,
    // Major 7th Chords
    AMaj7: AMajor7,
    AbMaj7: AbMajor7,
    BMaj7: BMajor7,
    BbMaj7: BbMajor7,
    CMaj7: CMajor7,
    DMaj7: DMajor7,
    DbMaj7: DbMajor7,
    EMaj7: EMajor7,
    EbMaj7: EbMajor7,
    FMaj7: FMajor7,
    GMaj7: GMajor7,
    GbMaj7: GbMajor7,
    // Minor 7th Chords
    AMin7: AMinor7,
    AbMin7: AbMinor7,
    BMin7: BMinor7,
    BbMin7: BbMinor7,
    CMin7: CMinor7,
    DMin7: DMinor7,
    DbMin7: DbMinor7,
    EMin7: EMinor7,
    EbMin7: EbMinor7,
    FMin7: FMinor7,
    GMin7: GMinor7,
    GbMin7: GbMinor7,
    // Dominant 7 Chords
    ADom7: ADominant7,
    AbDom7: AbDominant7,
    BDom7: BDominant7,
    BbDom7: BbDominant7,
    CDom7: CDominant7,
    DDom7: DDominant7,
    DbDom7: DbDominant7,
    EDom7: EDominant7,
    EbDom7: EbDominant7,
    FDom7: FDominant7,
    GDom7: GDominant7,
    GbDom7: GbDominant7,
    // Diminished Chords
    ADim: ADiminished,
    AbDim: AbDiminished,
    BDim: BDiminished,
    BbDim: BbDiminished,
    CDim: CDiminished,
    DDim: DDiminished,
    DbDim: DbDiminished,
    EDim: EDiminished,
    EbDim: EbDiminished,
    FDim: FDiminished,
    GDim: GDiminished,
    GbDim: GbDiminished,
    // Augmented Chords
    AAug: AAugmented,
    AbAug: AbAugmented,
    BAug: BAugmented,
    BbAug: BbAugmented,
    CAug: CAugmented,
    DAug: DAugmented,
    DbAug: DbAugmented,
    EAug: EAugmented,
    EbAug: EbAugmented,
    FAug: FAugmented,
    GAug: GAugmented,
    GbAug: GbAugmented
  },
  {// The default screen that displays 
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "String Cheat"
    }
  }
);

export default createAppContainer(navigator);
