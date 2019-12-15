import 'rxjs';
import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import NewFeed from './src/screens/NewFeed';
import Chat from './src/screens/Chat';
import Group from './src/screens/Group';
import * as Sentry from '@sentry/react-native';
import WrapperRedux from './src/screens/hoc/WrapperRedux';

Sentry.init({
  dsn: 'https://3976f395eb904555b9aae5655df7b337@sentry.io/1816465',
});

Navigation.registerComponent(
  'navigation.playground.Login',
  () => WrapperRedux(Login),
  () => Login,
);
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
