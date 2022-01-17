import React from 'react';
import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './services/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;