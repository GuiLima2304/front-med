import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-scroll'

import { TextField, Button } from '@material-ui/core';

import api from '../services/api';

const App = () => {
  
  return (
    <div className="App">
      
      <div className={"section" + (false ? " section-dark" : "")}>
        <div className="section-content" id='intro'>
          <h1>Olá!</h1>
          <p>Bem vindo a BulasMed</p>

          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <Button variant="contained" color="primary">Começar</Button>
            </Link>
        </div>
      </div>

      <div className={"section" + (false ? " section-dark" : "")}>
        <div className="section-content" id='section1'>
          <p>Insira seu primeiro medicamento</p>
          <TextField 
            id="primary_drug"
            name="primary_drug"
            variant="filled"
            label="Primeiro medicamento" 
           
          />

          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <Button variant="contained" color="primary">Próximo</Button>
            </Link>
        </div>
      </div>

      




      {/* <Section
        title="Section 2"
        subtitle={dummyText}
        dark={false}
        id="section2"
      />
      <Section
        title="Section 3"
        subtitle={dummyText}
        dark={true}
        id="section3"
      />
      <Section
        title="Section 4"
        subtitle={dummyText}
        dark={false}
        id="section4"
      />
      <Section
        title="Section 5"
        subtitle={dummyText}
        dark={true}
        id="section5"
      /> */}
    </div>
  );
}

export default App;


  // const [formData, setFormData] = useState({
  //   primary_drug: '',
  //   second_drug: ''
  // });

  // const [resPriDrug, setResPriDrug] = useState('')
  // const [resSecDrug, setResSecDrug] = useState('')

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value })
  // }

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
    
  //   const { primary_drug, second_drug } = formData;
    
  //   const data = {
  //     primary_drug,
  //     second_drug
  //   }
    
  //   await api.post('medicines', data)
  //     .then(response => setValuesAboutDrugs(response))
  //     .catch((error) => { console.log(error) });
  // }

  // async function setValuesAboutDrugs(response:any) {
  //   setResPriDrug(response.data[0])
  //   setResSecDrug(response.data[1])
  // }



{/* <div className="App">
<header className="App-header">
  <form onSubmit={handleSubmit}>

    <div className="Form">
      <TextField 
        id="primary_drug"
        name="primary_drug"
        variant="filled"
        label="Primeiro medicamento" 
        onChange={handleInputChange}
      />

      <TextField 
        id="second_drug"                   
        name="second_drug"
        variant="filled"
        label="Segundo medicamento" 
        onChange={handleInputChange}
      />
    
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

</div> */}


