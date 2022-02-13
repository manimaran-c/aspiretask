import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigator from 'app/navigation';
import AppStyles from './config/AppStyles';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from 'app/store';

const {persistor, store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Fragment>
          <SafeAreaView style={styles.topColor} />
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Navigator />
          </SafeAreaView>
        </Fragment>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.COLOR_WHITE,
  },
  topColor: {
    flex: 0,

    backgroundColor: AppStyles.colors.COLOR_BG,
  },
});

export default App;
