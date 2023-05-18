import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const fade = <div id="fade" className="fade hide"></div>;

  return (
    <div className="App">
      <Header/>
      <div>{fade}</div>
      <Main/>
    </div>
  );
}

export default App;
