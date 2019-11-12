/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Profile from './src/screens/Profile';

Navigation.registerComponent('navigation.playground.Home', () => Home);
Navigation.registerComponent('navigation.playground.About', () => About);
Navigation.registerComponent('navigation.playground.Profile', () => Profile);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.Home',
            },
          },
        ],
      },
    },
  });
});
