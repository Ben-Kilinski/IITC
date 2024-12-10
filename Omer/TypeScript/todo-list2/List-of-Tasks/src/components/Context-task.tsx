// Este arquivo será responsável por gerenciar o estado global das tarefas usando o React Context
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Task } from "../interfaces";
import { TaskContextType } from "../interfaces";

// Definir o tipo das tarefas

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from JSON Server
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const addTask = async (task: Task) => {
    try {
      const response = await axios.post("http://localhost:3000/tasks", task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update an existing task
  const updateTask = async (task: Task) => {
    try {
      await axios.put(`http://localhost:3000/tasks/${task.id}`, task);
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
