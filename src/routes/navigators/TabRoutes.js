import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import {
  HomeStackNavigator,
  AppointmentStackNavigator,
  MedicalRecordsStackNavigator,
} from './MainStackNavigators';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationString.HOME}
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ADD8E6',
          // borderRadius: 50,
          // bottom: 20,
          // marginHorizontal: 16
        },

        tabBarActiveBackgroundColor: '#DAE8FB',
        headerShown: false,
        tabBarStyle: styles.tabContainer,
      }}>
      <Tab.Screen
        name={navigationString.HOME}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home"
                size={25}
                style={{marginTop: 4}}
                color={focused ? '#033C76' : '#FCFCFC'}
              />
            );
          },
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? '#033C76' : '#FCFCFC'},
              ]}>
              {'Home'}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={navigationString.APPOINTMENT}
        component={AppointmentStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="timetable"
                size={25}
                style={{marginTop: 4}}
                color={focused ? '#033C76' : '#DAE8FB'}
              />
            );
          },
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? '#033C76' : '#DAE8FB'},
              ]}>
              {'My Appointment'}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name={navigationString.MEDICALRECORDS}
        component={MedicalRecordsStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="file-document-multiple"
                size={25}
                style={{marginTop: 4}}
                color={focused ? '#033C76' : '#DAE8FB'}
              />
            );
          },
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ? '#033C76' : '#DAE8FB'},
              ]}>
              {'My Medical Records'}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#DAE8FB ',
    fontSize: 12,
    marginBottom: 8,
  },
  tabContainer: {
    height: 55,
    backgroundColor: '#033C76',
    letterSpacing: 0.4,
    // margin:8,
    color: '#DAE8FB ',
  },
});
