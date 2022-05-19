import React, {createRef, Fragment} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainApp from './src/routes/navigations/MainApp';

const navigationRef = createRef();

const App = () => {
  React.useEffect(() => {
    // SplashScreen.hide();
  });
  return (
    <NavigationContainer ref={navigationRef}>
      <Fragment>
        <SafeAreaView style={styles.safeArea}></SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor="#DAE8FB"
        />
        <MainApp />
      </Fragment>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    // overflow: 'hidden',
    backgroundColor: '#000',
  },
});

export default App;
