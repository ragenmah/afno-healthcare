import React, {useEffect, useState} from 'react';

import {Text, StyleSheet, View, FlatList, Image} from 'react-native';

const CategoryNames = [
  {
    id: 1,
    name: 'Call Doctor Now',
    image: require('../../../assets/icons/doctor.png'),
  },
  {
    id: 2,
    name: 'Hospitals',
    image: require('../../../assets/icons/hospital.png'),
  },
  {
    id: 3,
    name: 'Order Medicine(s)',
    image: require('../../../assets/icons/medicine.png'),
  },
  {
    id: 4,
    name: 'Search Via Diseases',
    image: require('../../../assets/icons/search.png'),
  },
  {
    id: 5,
    name: 'Ambulance ',
    image: require('../../../assets/icons/ambulance.png'),
  },
  {
    id: 6,
    name: 'Ask Doctor For Free',
    image: require('../../../assets/icons/ask.png'),
    // image: require('../../../assets/icons/logo.png'),
  },
];

const Categories = () => {
  const GridView = ({item}) => (
    <View style={styles.gridStyle}>
      <Image source={item.image} style={styles.gridImage} />
      <Text style={styles.gridText}>{item.name}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={CategoryNames}
        renderItem={({item}) => <GridView item={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
        key={item => item.id}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

  gridStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    // padding: 10,
    margin: 2,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#033C76',
  },
  gridImage: {
    height: 50,
    width: 50,
  },
  gridText: {
    fontSize: 12,
    color: '#ADADAD',
  },
});
