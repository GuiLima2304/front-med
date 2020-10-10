import React, { ChangeEvent, FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from '../../services/api';

function App() {
  

const [formData, setFormData] = useState({
  primary_drug: '',
  second_drug: ''
});

function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  const { name, value } = event.target;
  
  setFormData({ ...formData, [name]: value })
}

async function handleSubmit(event: FormEvent) {
  event.preventDefault();
  
  const { primary_drug, second_drug } = formData;
  
  const data = {
    primary_drug,
    second_drug
  }
  
  await api.post('medicines', data)
    .then(response => setValuesAboutDrugs(response))
    .catch((error) => { console.log(error) });
}

var teste1;
var teste2;

async function setValuesAboutDrugs(response:any) {

  const aboutDrugs = {
    aboutDrug1: null,
    aboutDrug2: null
  };

  console.log(response)

  teste1 = response.data[0];
  teste2 = response.data[1];

  console.log(teste1)

  aboutDrugs.aboutDrug1 = response[0]
  aboutDrugs.aboutDrug2 = response[1]

  console.log(aboutDrugs.aboutDrug1)
}

// const  aboutDrug2  = useState;

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>

        <div className="Form">
          <div>
            <label>1º Medicamento:</label><br />
            <input type="text"
                   name="primary_drug"
                   id="primary_drug"
                   onChange={handleInputChange}></input>
          </div>

          <div>
            <label>2º Medicamento:</label><br />
            <input type="text"
                   name="second_drug"
                   id="second_drug"
                   onChange={handleInputChange}></input>
          </div>

          <div className='actions'>
            <button type="submit">Buscar</button>
          </div>

        </div>
          </form>
      </header>

      <div className="Interation">
        <h2>Não há Interação Medicamentosa</h2>
        <h3>Medicamento X com Medicamento Y não apresentou nenhuma interação medicamentosa</h3>
      </div>

      <div className="Bulls">
        <div className="FirstBull">
          <h3>Primeiro Medicamento</h3>
          <p>{teste1}</p>
        </div>
        <div className="SecondBull">
        <h3>Primeiro Medicamento</h3>
          <p>{teste2}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
