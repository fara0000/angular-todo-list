import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../../models';
import { TodoActions } from '../actions';

export const initialState: TodoState = {
  tasks: [
    {
      id: 0,
      description: 'First task',
      isCompleted: false,
    },
  ]
};

// составление Редюсера состоит из двух этапов, первый это createReducer
// createReducer принимает первым аргументом в себя первоначальное состояние, вторым метод "on"
// метод "on" это как "case" метода "switch", только первым аргументом принимает в себя сам action
// вторым методом функцию callback которая в свою очередь принимает state и action
// (в данном примере сделана дистрактиризация и вынут сразу payload)
// callback взаимодействует со стором и возвращает новое состояние

const _todoReducer = createReducer(
  initialState,
  on(TodoActions.addNewTaskStore, (state,  { payload }) => ({
    ...state,
      tasks: [...state.tasks, payload],
  })),
  on(TodoActions.deleteTaskByIdStore, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((task: any) => task.id !== payload.id)
  }))
);

// второй этап это функция которая принимает state и action передаёт в заранее соданный нами createReducer
// и возвращает его для использование в сборке всех редюсеров

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
