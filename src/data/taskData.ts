// src/data/tasksData.ts

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const taskList: Task[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true },
  { id: 3, title: 'Clean the house', completed: false },
  { id: 4, title: 'Write blog post', completed: false },
  { id: 5, title: 'Exercise for 30 minutes', completed: true },
  { id: 6, title: 'Call mom', completed: false },
  { id: 7, title: 'Prepare presentation', completed: false },
  { id: 8, title: 'Fix bugs in project', completed: true },
  { id: 9, title: 'Plan weekend trip', completed: false },
  { id: 10, title: 'Pay utility bills', completed: true },
];
