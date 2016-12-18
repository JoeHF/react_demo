// app.js

import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './css/app.css'

import NewsList from './NewsList.js'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
	<Provider store={store}>
		<NewsList />
	</Provider>,
	$('#content')[0]
);
