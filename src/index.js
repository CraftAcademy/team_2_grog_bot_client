import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.defaults.baseURL = "https://grog-bot.herokuapp.com/api/";
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
