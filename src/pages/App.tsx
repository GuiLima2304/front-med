import React, { useState } from 'react';
import { Link } from 'react-scroll'

import { Input } from '@material-ui/core';
import {Collapse, Button, Col} from 'react-bootstrap';


import api from '../services/api';

const App = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  // const [priDrug, setPriDrug] = useState<String>('')
  // const [secDrug, setSecDrug] = useState<String>('')

  // const [resPriDrug, setResPriDrug] = useState('')
  // const [resSecDrug, setResSecDrug] = useState('')

  // async function handleSubmit(primary_drug: any, second_drug: any) {    
   
  //   const data = {
  //     primary_drug,
  //     second_drug
  //   }    
    
  //    await api.post('medicines', data)
  //     .then(res => setValuesAboutDrugs(res))
  //     .catch((error) => { console.log(error) });
  //  }

  // async function setValuesAboutDrugs(response: any) {       
    
  //   setResPriDrug(response.data[0].teste[0].description)    
  //   setResSecDrug(response.data[1].teste[0].description)
  // }

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
            // onChange={drug => setPriDrug(drug.target.value)}
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
            // onChange={drug => setSecDrug(drug.target.value)}
          />

          <Link
            activeClass='active'
            to='section3'
            spy={true}  
            smooth={true}
            offset={-70}
            duration={500}>   
            <div className='actions'>
              <button>Buscar</button>
            </div>
          </Link>

        </div>
      </div>

      <div className='section' id='section3'>

        <div className='container-responses'>

          <div className='section-content' id='section-response' >
            <h2>Bula 1</h2>

            <Button
              onClick={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
              >
              Mostrar
            </Button>
            
            <Collapse in={open1}>
              <text className='question'>  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
              </text>      
            </Collapse>
          </div>

          <div className='section-content' id='section-response' >  
            <h2>Bula 2</h2>

            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
            >
              Mostrar
            </Button>

            <Collapse  in={open2}>
              <text className='question'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a expedita reprehenderit, alias nam doloremque placeat quos praesentium ut rerum voluptas esse quod vel necessitatibus perferendis facilis recusandae nulla! Consequatur!
              </text>       
            </Collapse>
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