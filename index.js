import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './product.css';
import Products from './products';
import Create from './app/react-crud/src/components/create';
import Update from './update';
import Error from './app/react-crud/src/components/Error';
import './index.css';
import reportWebVitals from './app/react-crud/src/reportWebVitals';
import App from './app/react-crud/src/App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
		<div>

			<Route exact path='/' component={App} />

			<Route path='/create' component={Create} />
			<Route path='/update/:id' component={Update} />
		</div>
	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();