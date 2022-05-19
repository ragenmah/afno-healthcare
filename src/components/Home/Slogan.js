import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';

const Slogan = () => {
  return (
    <View style={styles.sloganContainer}>
      <View style={{padding: 10, width: '60%'}}>
        <Text style={styles.logoText}>Aafno Heathcare services</Text>
        <Text style={styles.sloganText}>Your Health our mission</Text>
      </View>
      <View style={{width: '50%'}}>
        <Image
          source={require('../../../assets/icons/doctorf.png')}
          style={styles.doctorImage}
        />
      </View>
    </View>
  );
};

export default Slogan;

const styles = StyleSheet.create({
  sloganContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#F6F6F6',
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#033C76',
    // paddingTop: 10,
  },
  sloganText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ADADAD',
  },
  doctorImage: {
    marginRight: 10,
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    // aspectRatio: ,
  },
});
