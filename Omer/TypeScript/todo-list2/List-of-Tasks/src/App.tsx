import React from "react";
import { TaskProvider } from "./components/Context-task";
import Form from "./components/Form";
import ListOfTasks from "./components/List-of-tasks";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <ListOfTasks />
      </div>
    </TaskProvider>
  );
};

export default App;
