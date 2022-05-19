import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {block} from 'react-native-reanimated';

const BandCComponent = props => {
  return (
    <Pressable onPress={props.gotoSpecialities}>
      <View style={styles.bandcContainer}>
        <View style={{width: '70%'}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>

        <Image
          source={props.image}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
    </Pressable>
  );
};

export default BandCComponent;

const styles = StyleSheet.create({
  bandcContainer: {
    padding: 10,
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#DAE8FB',
    marginLeft: 6,
    // paddingRight: 5,
    borderRadius: 10,
    // width: 180,
    // alignItems: 'center',
  },
  title: {
    color: '#033C76',
    fontWeight: 'bold',
    fontSize: 12,
  },
  subtitle: {
    fontSize: 10,
    color: '#ADADAD',
    // width: '70%',
    position: 'relative',
  },
});
