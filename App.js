import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/rootStack';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
}
