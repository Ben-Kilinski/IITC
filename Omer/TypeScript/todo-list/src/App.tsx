function App() {
  // interface Todo = {
  //   id: string;
  //   text: string;
  //   completed: boolean;
  //   description: string;
  // }
  return (
    <>
      <h1>To do list with TypeScript</h1>
      <input>What i need to do?</input>
      <button className="btn_add">Add</button>
      <div>
        <h2>To do</h2>
        <ol></ol>
      </div>
    </>
  )
};
export default App;