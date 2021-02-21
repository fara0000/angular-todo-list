export interface TodoState {
  tasks: TaskToDo[] | [];
}

export interface TaskToDo {
  id: number;
  description: string;
  isCompleted: boolean;
}

export interface DeleteTaskId {
  id: number;
}

export interface AppState {
  todo: TodoState;
}
