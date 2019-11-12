import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import NewFeed from './src/screens/NewFeed';
import Chat from './src/screens/Chat';
import Group from './src/screens/Group';
import App from './App';

Navigation.registerComponent('navigation.playground.Login', () => Login);
Navigation.registerComponent('navigation.playground.NewFeed', () => NewFeed);
Navigation.registerComponent('navigation.playground.Chat', () => Chat);
Navigation.registerComponent('navigation.playground.Group', () => Group);

const stack = {
  children: [
    {
      component: {
        name: 'navigation.playground.Login',
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  ],
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack,
    },
  });
});
