import React from "react";
import { TaskProvider } from "./components/Context-task";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskList />
        <Form />
      </div>
    </TaskProvider>
  );
};

export default App;
