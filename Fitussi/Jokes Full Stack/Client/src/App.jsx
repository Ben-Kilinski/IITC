import './App.css';
import Navbar from './components/Navbar';
import Random_btn from './components/Random';
import AllJokes from './components/AllJokes';

function App() {


  return (
    <div class="bg-[url('https://t3.ftcdn.net/jpg/09/42/62/14/360_F_942621460_COojLDLcIGrRXFWGS1mi9Ni9fIg9b9Vy.jpg')] bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <Random_btn />
      <AllJokes />
    </div>
  );
}

export default App;
