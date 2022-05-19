import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Appointment = () => {
  return (
    <View style={styles.searchContainer}>
      <Pressable onPress={() => {}}>
        <View style={[styles.inputContainer]}>
          <View style={styles.iconBackground}>
            <MaterialIcons name={'date-range'} size={20} color="#033C76" />
          </View>
          <Text style={[styles.inputField]}>Your Appointments</Text>
          <AntDesignIcons
            name={'right'}
            size={18}
            color="#033C76"
            style={{paddingLeft: 10}}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 1,
  },
  iconBackground: {
    backgroundColor: '#DAE8FB',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    height: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#F6F6F6',
  },
  inputField: {
    paddingLeft: 10,
    fontSize: 12,
    width: '78%',
    color: '#ADADAD',
  },
});
