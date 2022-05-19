import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';
import AppointmentScreen from '../../screens/AppointmentScreen';
import MedicalRecordsScreen from '../../screens/MedicalRecordsScreen';

import SpecialitiesScreen from '../../screens/SpecialitiesScreen';
import Routes from '../navigators/Routes';

const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Stack.Screen
        name="MedicalRecordsScreen"
        component={MedicalRecordsScreen}
      /> */}
      <Stack.Screen name="HomeMain" component={Routes} />
    </Stack.Navigator>
  );
};

export default MainApp;
