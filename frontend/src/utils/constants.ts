import type { TaskStatus } from '../types';

export const COLUMNS: { id: TaskStatus; title: string; color: string }[] = [
  { id: 'todo', title: 'To Do', color: 'bg-blue-500' },
  { id: 'inprogress', title: 'In Progress', color: 'bg-yellow-500' },
  { id: 'done', title: 'Done', color: 'bg-green-500' },
];

export const PRIORITY_COLORS = {
  low: 'bg-gray-500',
  medium: 'bg-yellow-500',
  high: 'bg-red-500',
};

export const PRIORITY_TEXT_COLORS = {
  low: 'text-gray-700 dark:text-gray-300',
  medium: 'text-yellow-700 dark:text-yellow-300',
  high: 'text-red-700 dark:text-red-300',
};