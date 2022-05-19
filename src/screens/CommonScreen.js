import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Helpline from '../components/helpline/Helpline';
const CommonScreen = ({children}) => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#F9F9F9"
      />
      <ScrollView>{children}</ScrollView>
      <Helpline />
    </SafeAreaView>
  );
};

export default CommonScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    // position: 'relative',
  },
});
