import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import navigationString from '../../constants/navigationString';
import CustomDrawerContent from './CustomDrawerContent';
import TabRoutes from './TabRoutes';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import imagePath from '../../constants/imagePath';
import appColors from '../../constants/appColors';
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#F9F9F9',
          height: 56,
        },
        headerShown: true,
        drawerStyle: {
          marginTop: 56,
          marginBottom: 55,
          backgroundColor: '#F9F9F9',
          width: '75%',
        },
        swipeEdgeWidth: 0,
        // drawerPosition: 'right',
        overlayColor: 'transparent',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}>
            <Image source={imagePath.icHome} style={styles.logo} />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        component={TabRoutes}
        name={navigationString.HOME}
        options={{
          // drawerItemStyle: {height: 0},

          title: 'Home',
          //   headerTitle: () => <WelcomeCard firstName={'Ragen'} />,
          headerTitle: () => (
            <Text style={[styles.headerTitle, {color: appColors.primary1}]}>
              AAFNO HEATHCARE
            </Text>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableNativeFeedback onPress={() => {}}>
                <View
                  style={[
                    styles.roundCard,
                    {
                      color: appColors.primary2,
                      backgroundColor: appColors.primary2,
                    },
                  ]}>
                  <FeatherIcon name="users" size={20} color="#292D32" />
                </View>
              </TouchableNativeFeedback>
            </View>
          ),
        }}
      />
      {/* <Drawer.Screen
        component={Me}
        name={navigationString.MEDICALRECORDS}
      /> */}
    </Drawer.Navigator>
  );
}

export default Routes;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  logo: {
    height: 35,
    width: 35,
  },

  headerTitle: {
    color: '#551E18',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

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
    borderBottomWidth: 2,
    borderBottomColor: '#757575',
    marginLeft: 16,
    marginRight: 16,
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  drawerItemRow: {flexDirection: 'row'},
  roundCard: {
    borderRadius: 100,
    width: 36,
    height: 36,
    // backgroundColor: '#F4E0FB',
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#CECECE',
  },
  checkin: {
    color: '#1F1F1F',
    fontSize: 20,
    marginLeft: '10%',
  },
  checkinNumber: {
    color: '#803A9B',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
