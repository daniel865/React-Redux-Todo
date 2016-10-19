import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoList from '../../components/TodoList';
import TodoItem from '../../components/TodoItem';

describe('TodoList', () => {

	it('Should exist', () => {
		expect(TodoList).toExist();		
	});

	it('should render one Todo component for each todo item', () => {
		let todos = [{
			id: 1,
			text: 'Do something'
		}, {
			id: 2,
			text: 'Check mail'
		}];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		let todos = [];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		let $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});

});