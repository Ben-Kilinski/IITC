import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "./Context-task";

interface FormProps {
  editingTaskId?: number | null;
  onFinishEdit?: () => void;
}

const Form: React.FC<FormProps> = ({ editingTaskId, onFinishEdit }) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return null;
  }

  const { tasks, addTask, updateTask } = taskContext;

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  useEffect(() => {
    if (editingTaskId !== null) {
      const taskToEdit = tasks.find((task) => task.id === editingTaskId);
      if (taskToEdit) {
        setFormData(taskToEdit);
      }
    }
  }, [editingTaskId, tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTaskId !== null) {
      updateTask(formData); // Atualiza a tarefa
      if (onFinishEdit) {
        onFinishEdit(); // Finaliza o modo de edição
      }
    } else {
      addTask({ ...formData, id: Date.now() }); // Adiciona uma nova tarefa
    }
    setFormData({
      id: 0,
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
      status: "Pending",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      ></textarea>
      <input
        type="date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        required
      />
      <select
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{editingTaskId !== null ? "Update Task" : "Add Task"}</button>
      {editingTaskId !== null && (
        <button type="button" onClick={onFinishEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default Form;
