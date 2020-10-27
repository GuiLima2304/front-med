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

      <div className='section-3' id='section3'>
        <div className='section-content' >
        <text className='question'>
          <span className='number'>
            <strong>
              Encontramos isso:
            </strong>
          </span>
            { resPriDrug }
          </text>
          <div className="texts">
              <div className="text-response">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis tempus maximus. Praesent ornare augue et eleifend semper. Vivamus et convallis diam, a placerat eros. Suspendisse ante elit, lobortis sit amet gravida ut, iaculis sit amet nunc. Donec elementum sapien ac metus scelerisque, sit amet maximus magna porta. In sem mi, semper vel nisl in, sodales pretium magna. Suspendisse eu sem vel sapien pretium finibus. Morbi condimentum enim vitae semper luctus. Fusce sit amet nunc porttitor massa venenatis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis lacus ante. In aliquet, urna sed iaculis faucibus, mi orci pharetra nunc, sed dapibus ex augue eu felis.

                    Phasellus pharetra orci tellus, ut lobortis quam ornare sit amet. Aliquam ut lectus in leo accumsan iaculis id facilisis dolor. Nunc eleifend blandit leo, ac dapibus lectus tincidunt sed. Quisque lacus urna, congue in magna vel, bibendum luctus augue. Nunc commodo congue tincidunt. Morbi in nulla eget enim pellentesque eleifend nec eget quam. Sed hendrerit hendrerit justo, nec convallis lorem sodales et. Vivamus consectetur metus sit amet risus tempor suscipit. Sed urna nisi, congue luctus ullamcorper quis, lobortis a tellus.</p>
              </div>
              <div  className="text-response">
                <p>Maecenas ullamcorper nisl at lacus gravida tincidunt. Aliquam erat volutpat. Curabitur ac tristique elit, ut tincidunt leo. Nulla quis velit nisl. Praesent et nisi in mi fringilla tincidunt ut sed justo. Praesent vitae tempus dolor. Donec pretium vehicula eros vel pretium. Morbi felis elit, porttitor eget tellus et, tempus tincidunt est. Aliquam non sodales ex, vitae luctus tellus. Quisque quis malesuada quam, at auctor neque. Pellentesque suscipit scelerisque neque eu sodales. Aenean non urna sed turpis tristique rhoncus eget non metus. Curabitur eget vehicula erat. Aenean porttitor, nisl id vehicula aliquet, nisi ipsum pellentesque ante, id pellentesque augue purus nec augue.
                    Vestibulum pulvinar ligula et velit dapibus, eu bibendum neque viverra. Pellentesque sed malesuada nisl. Cras ultrices pellentesque enim ac vehicula. Vivamus sit amet diam a ante eleifend posuere. Phasellus aliquam lorem dui, vel consectetur tortor malesuada nec. Nulla hendrerit porta justo, convallis ullamcorper mi rhoncus sollicitudin. Nam vel semper risus.
                    Curabitur nec ante ipsum. Fusce luctus sodales quam, ut lacinia elit faucibus nec. Sed rutrum sapien sit amet nulla commodo varius. Vivamus vulputate ex non hendrerit varius. Curabitur elit orci, ultricies et nunc in, bibendum accumsan dui. Duis aliquet, turpis pellentesque pharetra pulvinar, tellus risus accumsan nulla, vel semper lectus neque vel leo. Vestibulum et ex sodales, porttitor orci eget, condimentum erat. Vestibulum nibh magna, imperdiet id condimentum et, maximus sed ex. Integer erat magna, ornare et facilisis a, suscipit cursus enim. Curabitur auctor a lacus vitae iaculis. Aenean sit amet volutpat felis, a facilisis odio. Vestibulum nec magna eget odio molestie ornare.</p>
              </div>
            </div>
          
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


