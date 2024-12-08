import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import Todo from './src/screens/todo/Todo';
import { store } from './src/stores/store';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Todo />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
