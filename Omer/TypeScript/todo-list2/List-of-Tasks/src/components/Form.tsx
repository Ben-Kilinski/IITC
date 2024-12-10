import React, { useState, useContext } from "react";
import { TaskContext } from "./Context-task";
import { Task } from "../interfaces";

const Form: React.FC<{ taskToEdit?: Task; onClose: () => void }> = ({
  taskToEdit,
  onClose,
}) => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Form must be used within TaskProvider");
  }
  const { addTask, updateTask } = context;

  const [task, setTask] = useState<Omit<Task, "id">>({
    title: taskToEdit?.title || "",
    description: taskToEdit?.description || "",
    dueDate: taskToEdit?.dueDate || "",
    priority: taskToEdit?.priority || "Low",
    status: taskToEdit?.status || "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskToEdit) {
      await updateTask({ ...task, id: taskToEdit.id });
    } else {
      await addTask(task);
    }
    onClose(); // Fecha o formulário após salvar
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{taskToEdit ? "Edit Task" : "Add Task"}</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default Form;
