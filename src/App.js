import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Ekushe Book Fair Stall Registration 2022";
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
