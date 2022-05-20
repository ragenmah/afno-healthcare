import React, {createRef, Fragment} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainApp from './src/routes/navigations/MainApp';
import SplashScreen from 'react-native-splash-screen';

const navigationRef = createRef();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer ref={navigationRef}>
      <Fragment>
        {Platform.OS === 'ios' && (
          <StatusBar
            barStyle="light-content"
            animated={true}
            backgroundColor="#DAE8FB"
          />
        )}
        <SafeAreaView style={styles.safeArea}></SafeAreaView>

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
