/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prettier/prettier
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
