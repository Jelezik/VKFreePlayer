/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import VKLogin from 'react-native-vkontakte-login';

VKLogin.initialize(51545973);

AppRegistry.registerComponent(appName, () => App);
