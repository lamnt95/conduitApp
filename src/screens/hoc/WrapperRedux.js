import React from 'react';
import {Provider} from 'react-redux';
import blogAppRedux from 'blogAppRedux';

let store = blogAppRedux.createAppStore();

export default Component => {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
