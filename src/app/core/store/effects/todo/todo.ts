import { TaskToDo } from '../../../models';

export const createTask = (description: string): TaskToDo => {
  const id = new Date().getTime();

  return {
    id,
    description,
    isCompleted: false
  };
};
