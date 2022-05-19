import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
} from 'react-native';
import navigationString from '../../constants/navigationString';
const CustomDrawerContent = props => {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            {backgroundColor: '#fff2df', width: width, height: width},
          ]}>
          <>
            <View
              style={[styles.circleContainer, {backgroundColor: '#FFC56F'}]}>
              {/* <Feather travel name="briefcase" size={25} color="#fbae41" /> */}
              <DrawerItem
                label="Screen1"
                labelStyle={{color: '#fbae41', fontSize: 10}}
                onPress={() => {
                  props.navigation.navigate(navigationString.HOME);
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{color: '#609806'}}
            onPress={() => {
              props.navigation.navigate(navigationString.HOME);
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            {backgroundColor: '#EFFFD5', width: width, height: width},
          ]}>
          <View style={[styles.circleContainer, {backgroundColor: '#b5ff39'}]}>
            {/* <Feather Medical name="briefcase" size={25} color="#609806" /> */}
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Screen2"
            labelStyle={{color: '#609806'}}
            onPress={() => {
              props.navigation.navigate(navigationString.APPOINTMENT);
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
