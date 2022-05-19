import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BandCComponent from './components/BandCComponent';

const BookAndConsult = () => {
  const navigation = useNavigation();

  const gotoSpecialities = () => {
    navigation.navigate('SpecialitiesScreen');
  };
  return (
    <View style={styles.bandcContainer}>
      <BandCComponent
        title={'Consult Online'}
        subtitle="Video Consultation / Online Prescription"
        image={require('../../../assets/icons/online.png')}
        gotoSpecialities={gotoSpecialities}
      />
      <BandCComponent
        title={'Book Appointment'}
        subtitle="Book your appointment with doctors"
        image={require('../../../assets/icons/planner.png')}
        gotoSpecialities={gotoSpecialities}
      />
    </View>
  );
};

export default BookAndConsult;

const styles = StyleSheet.create({
  bandcContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '49%',
    flexDirection: 'row',
  },
});
