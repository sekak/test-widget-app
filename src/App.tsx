import './App.css';
import ButtonWidget from './components/ButtonWidget';
import Frame from './components/Frame';
import { ContextProvide, CreateContext } from './context/Context';

function App() {
 
  return (
    <ContextProvide>
      <div className="h-screen w-screen box-content relative overflow-hidden">
        <ButtonWidget />
        <Frame />
      </div>
    </ContextProvide>
  );
}

export default App;
