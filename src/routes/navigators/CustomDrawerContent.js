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
  FlatList,
} from 'react-native';
import navigationString from '../../constants/navigationString';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../constants/appColors';

const CustomDrawerContent = props => {
  const width = useWindowDimensions().width * 0.3;

  const ListView = ({item, props}) => {
    return (
      <DrawerItem
        label={() => (
          <View style={[styles.drawerItemRow, {color: appColors.primary1}]}>
            <Icon
              name={item.icon}
              size={20}
              style={{color: appColors.primary1}}
            />
            <Text style={[styles.drawerLabel, {color: appColors.primary1}]}>
              {item.name}
            </Text>
          </View>
        )}
        onPress={() => {
          props.navigation.navigate(navigationString.APPOINTMENT);
        }}
        style={[styles.drawerItem]}
      />
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <FlatList
          data={drawerItemList}
          renderItem={({item}) => <ListView item={item} props={props} />}
          keyExtractor={item => item.id}
          key={item => item.id}
        />

        <Text
          style={{
            color: appColors.primary1,
            alignSelf: 'center',
            bottom: 0,
            // top: 10,
          }}>
          Version 1.0
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    // height: '100%',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  // menuItemsCard: {
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  // },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
    marginLeft: 10,
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#757575',
    marginLeft: 16,
    marginRight: 16,
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  drawerItemRow: {flexDirection: 'row'},
});

const drawerItemList = [
  {
    id: 1,
    name: 'Your Appointment',
    icon: 'timetable',
  },
  {
    id: 2,
    name: 'Search Doctor',
    icon: 'card-search',
  },
  {
    id: 3,
    name: 'View Hospitals',
    icon: 'hospital-building',
  },
  {
    id: 4,
    name: 'Are you a Doctor?',
    icon: 'doctor',
  },
  {
    id: 5,
    name: 'Log in',
    icon: 'login',
  },
];
