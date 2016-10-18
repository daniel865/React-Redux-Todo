import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					text: 'walk the dog'
				},{
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Pay the bills'
				}, {
					id: 4,
					text: 'Do the homework'
				}
			]
		}
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo(text){
		alert('new todo: ' + text);
	}

	render() {
		let {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}

