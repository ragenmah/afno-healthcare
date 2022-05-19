import React, {useState, useEffect} from 'react';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

import {
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  Animated,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';
import ShowHelpline from './ShowHelpline';

const Helpline = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const phoneNumber = '9808086299';

  useEffect(() => {
    if (confirmation) {
      Linking.openURL(`tel:${phoneNumber}`);
    }
  });

  return (
    <View style={styles.helplineContainer}>
      <ShowHelpline
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message="Do you want to contact?"
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <TouchableHighlight
        style={{
          backgroundColor: '#033C76',
          width: 100,
          position: 'absolute',
          top: '80%',
          right: 0,
          transform: [{rotate: '-90deg'}],
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
        onPress={() => {
          setModalVisible(true);
          setConfirmation(false);
        }}>
        <View style={{flexDirection: 'row-reverse'}}>
          <Text
            style={{
              color: '#ADADAD',
              // width: 100,
              // alignSelf: 'center',
              // transform: [{rotate: '-90deg'}],
              padding: 5,
              // margin: 5,
              fontSize: 14,
            }}>
            Help Desk
          </Text>

          <FontistoIcons
            name={'headphone'}
            size={15}
            color="#ADADAD"
            style={{
              transform: [{rotate: '360deg'}],
              padding: 5,
              alignSelf: 'center',
            }}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Helpline;
const styles = StyleSheet.create({
  helplineContainer: {
    // backgroundColor: 'red',
    width: '110%',
    height: '100%',
    // flex: 0,
    // justifyContent: 'center',
    position: 'absolute',
    // right: 0,
  },
});
