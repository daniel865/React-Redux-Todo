var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('../../reducers/reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(def(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

});