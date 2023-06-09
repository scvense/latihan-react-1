import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { store, persistor } from './reduxToolkit/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>

    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
