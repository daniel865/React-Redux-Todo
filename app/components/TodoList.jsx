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
      if (todos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

  		return todos.map((todo) => {
  			return (
  				<TodoItem key={todo.id} {...todo}  onToggle={this.props.onToggle} />
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