import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import AddTodo from '../../components/AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();	
	});	

	it('should call handleAddTodo if was enter a todo', () => {
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		let $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.todoText.value = 'Buy Milk';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith('Buy Milk');	
	});

	it('should not call handleAddTodo if wasn´t enter a todo', () => {
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		let $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});

});