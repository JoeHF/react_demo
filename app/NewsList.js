// NewsList.js

import React from 'react';
import { connect } from 'react-redux'
import AMUIReact from 'amazeui-react'

import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';
import MyNewsItem from './MyNewsItem.js';

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'
import Footer from './components/Footer.js'

import DropdownItem from './components/DropdownItem.js'

import './css/amazeui.min.css'
class NewsList extends React.Component {
  render() {
    var testData = {
       "by" : "bane",
       "descendants" : 49,
       "id" : 11600137,
       "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
       "score" : 56,
       "time" : 1461985332,
       "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
       "type" : "story",
       "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
     };

     var Dropdown = AMUIReact.Dropdown;
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
        <div className="newsList">
          <NewsHeader />
          <NewsItem item={testData} rank={1} />
          <MyNewsItem />
          <AMUIReact.Button>这是一个按钮</AMUIReact.Button>
            <Dropdown title="下拉列表" btnStyle="primary">
              <DropdownItem 
                onClick={text => console.log("hello")}/>
            </Dropdown>
          <AddTodo
            onAddClick={text =>
              dispatch(addTodo(text))
            } />
          <TodoList
            todos={visibleTodos}
            onTodoClick={index =>
              dispatch(completeTodo(index))
            } />
          <Footer
            filter={visibilityFilter}
            onFilterChange={nextFilter =>
              dispatch(setVisibilityFilter(nextFilter))
            } />
        </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(NewsList)