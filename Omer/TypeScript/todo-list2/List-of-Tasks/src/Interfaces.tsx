export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum Status {
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
}

export interface Task {
  id?: number; // ID é opcional para tarefas recém-criadas
  title: string;
  description: string;
  dueDate: string; // Deve ser no formato ISO (ex.: "YYYY-MM-DD")
  priority: Priority;
  status: Status;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  fetchTasks: () => void;
}
