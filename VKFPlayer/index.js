/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import VKLogin from 'react-native-vkontakte-login';
import store from './src/redux/store';
import {Provider} from 'react-redux';

VKLogin.initialize(51545973);
//
const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
