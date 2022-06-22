import './App.css';
import Boton from './componentes/Boton'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Interactive Calculator</h1>
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
