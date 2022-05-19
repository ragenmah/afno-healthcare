import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import AppointmentScreen from '../../screens/AppointmentScreen';
import MedicalRecordsScreen from '../../screens/MedicalRecordsScreen';
import navigationString from '../../constants/navigationString';
import SpecialitiesScreen from '../../screens/SpecialitiesScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationString.HOME} component={HomeScreen} />
      <Stack.Screen name="SpecialitiesScreen" component={SpecialitiesScreen} />
    </Stack.Navigator>
  );
};

const AppointmentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationString.APPOINTMENT}
        component={AppointmentScreen}
      />
    </Stack.Navigator>
  );
};
const MedicalRecordsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationString.MEDICALRECORDS}
        component={MedicalRecordsScreen}
      />
    </Stack.Navigator>
  );
};
export {
  HomeStackNavigator,
  AppointmentStackNavigator,
  MedicalRecordsStackNavigator,
};
