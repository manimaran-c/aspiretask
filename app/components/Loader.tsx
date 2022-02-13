import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import IState from 'app/models/reducers';

const Loader: React.FC = () => {
  const isLoading = useSelector(
    (state: IState) => state.loadingReducer.isLoading,
  );

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isLoading}
      style={styles.zIndex}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={isLoading} color="black" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  zIndex: {
    zIndex: 1100,
  },
});

export default Loader;
