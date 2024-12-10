import React, { useState, useEffect } from 'react';
import { Task } from './types';
import './index.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Lista de tarefas
  const [newTask, setNewTask] = useState<string>('first useSate'); // Texto da nova tarefa
  // tasks = lista completa das tarefas 
  // newTask = nova tarefa a ser adicionada a lista 
  // setTasks = pelo função addTask (click do botão), adiciona a newTask a lista tasks 
  // setNewTask = pelo evento onChange (digitar no input), adiciona a letra digitada ao newTask

  // Carregar tarefas do Local Storage ao iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  // Salvar tarefas no Local Storage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('tasks_in_local_storage', JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova tarefa✌️
  const addTask = () => {
    if (!newTask.trim()) {
      return; // Impede texto vazio
    } else {
      setTasks([
        ...tasks,
        { id: crypto.randomUUID(), text: newTask, completed: false },
      ]);
      setNewTask(''); // Limpa o input
    }
  };
  
// Marcar uma tarefa como concluída
const toggleTaskCompletion = (id: string) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

// Remover uma tarefa
const deleteTask = (id: string) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

return (
  <div className="app">
    <h1>Task Manager</h1>

    {/* Input para adicionar nova tarefa */}
    <div className="add-task">
      <input
        type="text"
        value={newTask}
        onChange={(e) => {setNewTask(e.target.value), console.log(e)}}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>

    {/* Lista de tarefas */}
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default App;
