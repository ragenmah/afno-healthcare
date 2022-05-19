import React, {useState, useEffect} from 'react';
import {specialityList} from './specialityData';
import {Text, StyleSheet, View, FlatList, Image, TextInput} from 'react-native';

const Specialities = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(specialityList);
  const [masterDataSource, setMasterDataSource] = useState(specialityList);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     setFilteredDataSource(responseJson);
    //     setMasterDataSource(responseJson);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const GridView = ({item}) => (
    <View style={styles.gridStyle}>
      <Image source={item.image} style={styles.gridImage} />
      <Text style={styles.gridText}>{item.name}</Text>
    </View>
  );

  const ListView = ({item}) => (
    <View style={styles.listStyle}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.listImage} />
      </View>
      <Text style={styles.listText}>{item.name}</Text>
    </View>
  );
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Speciality"
      />
      <Text style={styles.title}>All Specialities (A - Z)</Text>
      <FlatList
        data={filteredDataSource}
        renderItem={({item}) => <ListView item={item} />}
        keyExtractor={item => item.id}
        // numColumns={3}
        key={item => item.id}
        // ItemSeparatorComponent={ItemSeparatorView}
      />
    </View>
  );
};

export default Specialities;

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {color: '#033C76', fontWeight: 'bold', fontSize: 16},
  listContainer: {
    margin: 5,
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

  listStyle: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    padding: 10,
    margin: 2,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#F6F6F6',
  },
  imageContainer: {
    // backgroundColor: '#DAE8FB',
    // height: 50,
    // width: 50,
    // // padding: 20,
    // borderRadius: 100,
  },
  listImage: {
    height: 50,
    width: 50,
    backgroundColor: '#DAE8FB',
    alignSelf: 'center',
    // padding: 20,
    borderRadius: 100,
  },
  listText: {
    fontSize: 12,
    color: '#ADADAD',
  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#DAE8FB',
    backgroundColor: '#F3f3f3',
    borderRadius: 10,
  },
});
