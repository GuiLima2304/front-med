import React, { useState } from 'react';
import { Link } from 'react-scroll'

import { Input } from '@material-ui/core';

import Loader from '../components/loader'
import MedicineLeaflet from '../components/medicine-leaflet'

import api from '../services/api';

const App = () => {
  
  const [priDrug, setPriDrug] = useState<String>('')
  const [secDrug, setSecDrug] = useState<String>('')

  const [bula1, setBula1] = useState()

  const [loading, setLoading] = useState(true)
  const [test, setTest] = useState()

  async function handleSubmit(primary_drug: any, second_drug: any) {    
   
    const data = {
      primary_drug,
      second_drug
    }    
    
    await api.post('medicines', data)
      .then(res => {
        setValuesAboutDrugs(res)
        setLoading(false)
      })
      .catch((error) => { console.log(error) });
  }

   async function setValuesAboutDrugs(response: any) {
    
    console.log(response.data);
    setTest(response.data)

   }

  return (
    <div className='App'>
      
      <div className='section' id='intro'>
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

      {/* RESPONSE */}

      <div className='section' id='section3'>

        <div className='container-responses'>

          <div className='section-content' id='section-response' >   
            {
              loading ? <Loader/> :
                <> 
                  <h2>{priDrug.charAt(0).toUpperCase() + priDrug.slice(1)}</h2>
                  <MedicineLeaflet data={test} index={0}/>
                </>
            }
          </div>

          <div className='section-content' id='section-response' >  
           
          {
              loading ? <Loader/> : 
                <> 
                  <h2>{secDrug.charAt(0).toUpperCase() + secDrug.slice(1)}</h2>
                  <MedicineLeaflet data={test} index={1}/>
                </>
              
            }

          </div>
          
        </div>

      </div>

    </div>
  );
}

export default App;




{/*           
            <Link
              activeClass='active'
              to='intro'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                
                <div className='actions'>
                  <button>Nova consulta</button>
                </div>
              </Link> */}