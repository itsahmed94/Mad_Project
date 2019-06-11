/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/Pages/HomeScreen';
import DashBoard from './src/Pages/DashBoard';

AppRegistry.registerComponent(appName, () => HomeScreen);


