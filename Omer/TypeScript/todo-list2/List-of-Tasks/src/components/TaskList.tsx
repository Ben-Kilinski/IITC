import React, { useContext, useState } from "react";
import { TaskContext } from "./Context-task";
import Form from "./Form";
import { Task } from "../interfaces";

const TaskList: React.FC = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("TaskList must be used within TaskProvider");
  }
  const { tasks, deleteTask } = context;

  const [isFormOpen, setIsFormOpen] = useState(false); // Controla se o formulário está aberto
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null); // Controla a tarefa a ser editada

  // Função para abrir o formulário
  const openForm = (task: Task | null = null) => {
    setTaskToEdit(task); // Define a tarefa em edição (ou null para nova tarefa)
    setIsFormOpen(true); // Abre o formulário
  };

  // Função para fechar o formulário
  const closeForm = () => {
    setTaskToEdit(null); // Limpa a tarefa selecionada
    setIsFormOpen(false); // Fecha o formulário
  };

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Botão para adicionar nova tarefa */}
      <button onClick={() => openForm()}>Add Task</button>

      {/* Renderização condicional do formulário */}
      {isFormOpen && (
        <Form
          taskToEdit={taskToEdit || undefined} // Passa a tarefa a ser editada (ou undefined para nova tarefa)
          onClose={closeForm} // Função para fechar o formulário
        />
      )}

      {/* Tabela de tarefas */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>
                  {/* Botão para editar tarefa */}
                  <button onClick={() => openForm(task)}>Edit</button>

                  {/* Botão para excluir tarefa */}
                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
                        deleteTask(task.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No tasks available. Add one using the "Add Task" button.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
