import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import AssistantService from './services/assistant-service';
import { AssistantServiceProvider } from './components/assistant-service-context';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer)

const assistantService = new AssistantService();

ReactDOM.render(
  <Provider store={store}>   
      <AssistantServiceProvider value={assistantService} >
        <Router>
          <App />  
        </Router>
      </AssistantServiceProvider>    
  </Provider>,
  document.getElementById('root'));


