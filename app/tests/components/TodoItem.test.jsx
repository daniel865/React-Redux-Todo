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

});