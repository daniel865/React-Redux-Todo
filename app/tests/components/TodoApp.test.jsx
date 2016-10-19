import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {

	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		let todoText = 'test text';
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({
			todos: []
		});

		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed when handleToggle called', () => {
		let todoData = {
			id: 11,
			text: 'Test featrures',
			completed: false
		}
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		// Check that todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);
		// Call handle handle toggle with 11
		todoApp.handleToggle(todoData.id);
		// Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(true);
	});

});