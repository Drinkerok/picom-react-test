import {createSelector} from 'reselect';
import {mapToArray} from './../utils';


const todoItemsGetter = state => state.todo.entities;


export const todoItemsSelector = createSelector(todoItemsGetter, (items) => {
  return mapToArray(items);
});