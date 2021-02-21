import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, TodoState } from '../../models';

// createFeatureSelector типизируется общим стором AppState и оределённым объектом из стора TodoState
// Нужно для выбора объекта из стора, из которого будешь брать данные в данном случае это todo

export const selectTodo = createFeatureSelector<AppState, TodoState>('todo');

// createSelector принимает первым аргументом текущий объект из стора todo
// state так же типизиркутся как должен выгдлядеть initialState и из state берём сразу нужные данные

export const getAllTasks = createSelector(selectTodo, (state: TodoState) => state.tasks);
