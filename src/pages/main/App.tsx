import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="Form">
          <div>
            <label>1º Medicamento:</label><br />
            <input />
          </div>

          <div>
            <label>2º Medicamento:</label><br />
            <input />
          </div>

          <div className='actions'>
            <button>Buscar</button>
          </div>

        </div>
      </header>

      <div className="Interation">
        <h2>Não há Interação Medicamentosa</h2>
        <h3>Medicamento X com Medicamento Y não apresentou nenhuma interação medicamentosa</h3>
      </div>

      <div className="Bulls">
        <div className="FirstBull">
          <h3>Primeira Bula</h3>
        </div>
        <div className="SecondBull">
          <h3>Segunda Bula</h3>
        </div>
      </div>

    </div>
  );
}

export default App;
