import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from 'TodoItem';

export default class TodoList extends React.Component {
  
  constructor(props){
  	super(props);
  }	

  render(){
  	let {todos} = this.props;
  	let renderTodos = () => {
  		return todos.map((todo) => {
  			return (
  				<TodoItem key={todo.id} {...todo} />
  			);
  		});
  	};

    return (
    	<div>
    		{renderTodos()}
    	</div>
    );
  }

}