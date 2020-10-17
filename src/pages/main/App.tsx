import React, { ChangeEvent, FormEvent, useState } from 'react';
import api from '../../services/api';

import './App.css';

const App = () => {
  
  const [formData, setFormData] = useState({
    primary_drug: '',
    second_drug: ''
  });

  const [resPriDrug, setResPriDrug] = useState('')
  const [resSecDrug, setResSecDrug] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  async function setValuesAboutDrugs(response:any) {
    setResPriDrug(response.data[0])
    setResSecDrug(response.data[1])
  }

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
          <p>{resPriDrug}</p>
        </div>
        <div className="SecondBull">
        <h3>Primeiro Medicamento</h3>
          <p>{resSecDrug}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
