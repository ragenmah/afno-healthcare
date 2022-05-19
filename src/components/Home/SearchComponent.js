import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const SearchComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <Pressable onPress={() => {}}>
        <View style={[styles.inputContainer]}>
          <TextInput
            style={[styles.inputField]}
            value={''}
            placeholder="Search By Doctors, specialities & Hospitals"
            editable={false}
          />

          <AntDesignIcons
            name={'search1'}
            size={20}
            color="#ADADAD"
            style={{paddingLeft: 10}}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 1,
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
    width: '88%',
  },
});
