import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';

const ShowHelpline = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <Pressable
        style={[
          Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => props.setModalVisible(false)}
      />
      <View>
        <View style={[styles.cardContainer]}>
          <View style={styles.horizontalLine}></View>
          <View style={styles.cardInsideContainer}>
            <Text style={{fontSize: 16, color: '#414141'}}>
              {props.message}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <TouchableHighlight
                style={{
                  borderRadius: 15,
                  backgroundColor: '#033C76',
                  //   marginTop: 25,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 90,
                  marginRight: 30,
                }}
                onPress={() => {
                  props.setConfirmation(true);
                  props.setModalVisible(false);
                }}>
                <Text style={{color: '#fff', letterSpacing: 1.24}}>
                  CALL NOW
                </Text>
              </TouchableHighlight>
              <View
                style={{
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{letterSpacing: 1.25}}
                  onPress={() => {
                    props.setConfirmation(false);
                    props.setModalVisible(false);
                  }}>
                  CANCEL
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShowHelpline;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: '90%',
    marginHorizontal: 25,
    elevation: 10,
    // alignSelf:'center'
  },
  cardInsideContainer: {
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 10,
    backgroundColor: '#033C76',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iOSBackdrop: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: '#232f34',
    opacity: 0.32,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
