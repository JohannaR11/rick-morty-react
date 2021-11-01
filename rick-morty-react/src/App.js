import './App.css';
import HeaderResponsive from './Components/HeaderResponsive';
import MainSection from './Components/MainSection';

function App() {
  return (
    <div className="App">
      <header className= "header">
        <HeaderResponsive/>
        <MainSection/>
      </header>
    </div>
  );
}

export default App;
