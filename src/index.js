import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Switch>
          <Route>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
