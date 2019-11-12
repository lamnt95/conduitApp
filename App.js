import React from 'react';
import {View} from 'react-native';

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://3976f395eb904555b9aae5655df7b337@sentry.io/1816465', 
});


export default () => <View></View>;
