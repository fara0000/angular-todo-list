import {
  MetaReducer,
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { AppState } from '../../models';

// metaReducers продвинутый редюсер который логирует каждый наш action и state c помошью функции debug
// типизиуется он состоянием всего приложения AppState
// общий блинчик состояний собирается в объекте reducers который типизикуется специальным ActionReducerMap
// который принимает тип всего состояния приложения AppState

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [debug];
