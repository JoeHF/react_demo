// NewsList.js

import React from 'react';
import NewsHeader from './NewsHeader.js'
import NewsItem from './NewsItem.js'

export default class NewsList extends React.Component { 
  render() { 
	return (
	  <div className='newsList'>
	    Hello houfang
		<NewsHeader/>
		<NewsItem/>
	  </div>
	);
  }
}
