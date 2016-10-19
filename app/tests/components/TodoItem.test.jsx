import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoItem from '../../components/TodoItem';

describe('TodoItem', () => {

	it('Should exist', () => {
		expect(TodoItem).toExist();
	});

	it('should called onToggle prop with id on click', () => {
		var todoData = {
			id: 199,
			text: 'Write todo test',
			completed: true
		};
		var spy = expect.createSpy();
		var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy} />);
		let $el = $(ReactDOM.findDOMNode(todoItem));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);

	})

});