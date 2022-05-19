import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      console.log('inside timeout');
      gotoHomeMain();
    }, 2000);
  }, []);
  const gotoHomeMain = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeMain', params: {someParam: 'Param1'}}],
    });
  };
  const gotoLogin = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
          params: {someParam: 'Param1'},
        },
      ],
    });
  };
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#DAE8FB"
      />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '70%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/circleBG.png')}
              resizeMode={'cover'}
            />
            <Image
              source={require('../../assets/icons/logo.png')}
              resizeMode={'cover'}
              style={{
                position: 'absolute',
                height: 150,
                width: 150,
                borderRadius: 100,
              }}
            />
          </View>

          <Text style={styles.logoText}>AAFNO HEALTHCARE</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#DAE8FB',
    // position: 'relative',
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#033C76',
    paddingTop: 10,
    alignSelf: 'center',
  },
});
