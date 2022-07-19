import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className="App">
      <MyButton text={"<"}/>
      <MyButton text={">"}/>
    </div>
  );
}

export default App;
