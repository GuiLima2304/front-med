import React, { useState } from 'react';

import { Collapse } from 'react-bootstrap';
import { FiPlus } from "react-icons/fi";


import { 
  ComoDevoUsarEsteMedicamento, 
  ComoEsteMedicamentoFunciona,
  GruposFarmacologicos, 
  IndicacoesTerapeuticas,
  InteraçõesMedicamentosas,
  OQueDevoFazerQuandoEsquecer,
  OQueDevoSaberAntesDeUsar,
  OQueFazerSeAlguemUsarUmaQuantidadeMaior,
  OndeComoEPorQuantoTempoPossoGuardar,
  ParaQueEsteMedicamentoIndicado,
  PrincipiosAtivos,
  QuaisOsMales,
  QuandoNaoDevoUsar

} from './strings';

import { Button, Card }  from './styles';

interface ComponentProps {
  data: any,
  index: number
}

const MedicineLeaflet: React.FC<ComponentProps> = ({data, index}) => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return ( 
    <>

      <Card>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Button onClick={() => setOpen1(open1 ? false : true)}>
            <FiPlus/>
          </Button>
          
          <h4 style={{marginLeft: 20, marginTop: 5}}>{ComoDevoUsarEsteMedicamento}</h4>

         
        </div>
      </Card>
      <Card>
        <Collapse in={open1}>
            <text style={{padding: 20}}>{data[index][ComoDevoUsarEsteMedicamento]}</text>
          </Collapse> 
      </Card>


      <h4>{ComoEsteMedicamentoFunciona}</h4>
      <text>{data[index][ComoEsteMedicamentoFunciona]}</text>

      <h4>{GruposFarmacologicos}</h4>
      <text>{data[index][GruposFarmacologicos]}</text>

      <h4>{IndicacoesTerapeuticas}</h4>
      <text>{data[index][IndicacoesTerapeuticas]}</text>

      <h4>{InteraçõesMedicamentosas}</h4>
      <text>{data[index][InteraçõesMedicamentosas]}</text>

      <h4>{OQueDevoFazerQuandoEsquecer}</h4>
      <text>{data[index][OQueDevoFazerQuandoEsquecer]}</text>

      <h4>{OQueDevoSaberAntesDeUsar}</h4>
      <text>{data[index][OQueDevoSaberAntesDeUsar]}</text>

      <h4>{OQueFazerSeAlguemUsarUmaQuantidadeMaior}</h4>
      <text>{data[index][OQueFazerSeAlguemUsarUmaQuantidadeMaior]}</text>

      <h4>{OndeComoEPorQuantoTempoPossoGuardar}</h4>
      <text>{data[index][OndeComoEPorQuantoTempoPossoGuardar]}</text>

      <h4>{ParaQueEsteMedicamentoIndicado}</h4>
      <text>{data[index][ParaQueEsteMedicamentoIndicado]}</text>

      <h4>{PrincipiosAtivos}</h4>
      <text>{data[index][PrincipiosAtivos]}</text>

      <h4>{QuaisOsMales}</h4>
      <text>{data[index][QuaisOsMales]}</text>

      <h4>{QuandoNaoDevoUsar}</h4>
      <text>{data[index][QuandoNaoDevoUsar]}</text>

    </>
  );
}

export default MedicineLeaflet;