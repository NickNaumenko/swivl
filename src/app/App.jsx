import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../components/AppRouter/AppRouter';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
