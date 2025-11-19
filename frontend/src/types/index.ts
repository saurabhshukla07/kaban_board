export type TaskStatus = 'todo' | 'inprogress' | 'done';

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
}

export interface UpdateTaskInput extends Partial<CreateTaskInput> {
  _id: string;
}