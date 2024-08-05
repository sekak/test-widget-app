import './App.css';
import Details from './components/Details';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Widget from './components/Widget';
import { ContextProvide, CreateContext } from './context/Context';

function App() {

  return (
    <ContextProvide>
      <div className="h-screen w-screen box-content relative">
        <Widget />
        <Navbar />
        <Hero />
        <Details />
      </div>
    </ContextProvide>
  );
}

export default App;
