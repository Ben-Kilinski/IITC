import React, { useContext, useState } from "react";
import { TaskContext } from "./Context-task";
import Form from "./Form";

const ListOfTasks: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState<number | null>(null);

  if (!taskContext) {
    return null;
  }

  const { tasks, deleteTask } = taskContext;

  const handleEdit = (id: number) => {
    setEditingTask(id); // Define a tarefa que está sendo editada
  };

  return (
    <div>
      {editingTask !== null ? (
        <Form
          editingTaskId={editingTask}
          onFinishEdit={() => setEditingTask(null)} // Callback para finalizar a edição
        />
      ) : (
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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                  <button onClick={() => handleEdit(task.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListOfTasks;
