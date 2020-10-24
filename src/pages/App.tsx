import React, { useState } from 'react';
import { Link } from 'react-scroll'

import { Input } from '@material-ui/core';

import api from '../services/api';

const App = () => {

  const [priDrug, setPriDrug] = useState<String>('')
  const [secDrug, setSecDrug] = useState<String>('')

  const [resPriDrug, setResPriDrug] = useState('')
  const [resSecDrug, setResSecDrug] = useState('')

  async function handleSubmit(primary_drug: any, second_drug: any) {    
   
    const data = {
      primary_drug,
      second_drug
    }    
    
     await api.post('medicines', data)
      .then(res => setValuesAboutDrugs(res))
      .catch((error) => { console.log(error) });
   }

   async function setValuesAboutDrugs(response: any) {       
    
    setResPriDrug(response.data[0].teste[0].description)
    setResSecDrug(response.data[1].teste)
   }
  
  return (
    <div className='App'>
      
      <div className='section'  id='intro'>
        <div className='section-content'>
          <h1 className='title'>Olá!</h1>
          <text className='subtitle'>Bem-vindo a <strong>BulasMed!</strong></text>

          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <div className='actions'>
                <button type='submit'>Clique para começar</button>
              </div>
          </Link>
        
        </div>
      </div>

      <div className='section' id='section1'>
        <div className='section-content' >
          <text className='question'><span className='number'><strong>1 -</strong></span> Insira seu <strong>primeiro medicamento.</strong>*</text>
          
          <Input 
            placeholder="Nome do medicamento..." 
            id='primary_drug'
            name='primary_drug'
            style={{marginBottom: 30, width: 550, fontSize: 23, color: '#1F7FFF'}}
            onChange={drug => setPriDrug(drug.target.value)}
            />

          <Link
            activeClass='active'
            to='section2'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <div className='actions'>
                <button>Próximo</button>
              </div>
            </Link>
        </div>
      </div>

      <div className='section' id='section2'>
        <div className='section-content' >
          <text className='question'><span className='number'><strong>2 -</strong></span> Insira seu <strong>segundo medicamento.</strong>*</text>
          
          <Input 
            placeholder="Nome do medicamento..." 
            id='second_drug'
            name='second_drug'
            style={{marginBottom: 30, width: 550, fontSize: 23, color: '#1F7FFF'}}
            onChange={drug => setSecDrug(drug.target.value)}
          />

          <Link
            activeClass='active'
            to='section3'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <div className='actions'>
                <button onClick={() => handleSubmit(priDrug, secDrug)}>Buscar</button>
              </div>
            </Link>
        </div>
      </div>

      <div className='section' id='section3'>
        <div className='section-content' >
        <text className='question'>
          <span className='number'>
            <strong>
              Encontramos isso:
            </strong>
          </span>
            { resPriDrug }
          </text>
          
          <Link
            activeClass='active'
            to='response'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              
              <div className='actions'>
                <button>Nova consulta</button>
              </div>
            </Link>
        </div>
      </div>

    </div>
  );
}

export default App;


