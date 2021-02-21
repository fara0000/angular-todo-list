import { createAction, props } from '@ngrx/store';
import { TaskToDo, DeleteTaskId } from '../../models';
import constants from '../../../constants';

// createAction принимает первым аргументом тип экшена (константу)
// вторым (не обязательный) аргументом props это обект с ключом payload который должен типизироваться
// относительно того, что в себе содержит и после нужно вызвать его () - так синтаксис

export const createTask = createAction(constants.CREATE_TASK, props<{ payload: string }>());
export const addNewTaskStore = createAction(constants.ADD_NEW_TASK_STORE, props<{ payload: TaskToDo }>());
export const deleteTaskByIdStore = createAction(constants.DELETE_TASK_BY_ID_STORE, props<{ payload: DeleteTaskId }>());
