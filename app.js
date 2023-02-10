import './style.css'
import { useState } from 'react';


function App() {
const [in1, setIn1] = useState(0);
const [in2, setIn2] = useState(0);
const [calc, setCalc] = useState(in2 , in1 );

function calcul() {
setCalc((in2 / in1 ) *100)

}
  return (
    
    <div className='app'>
      <div className="div_1">
          
   <h1><p>Расчет топлива</p></h1>
   </div> 

      <div className="div_2">
              
  <h2><p>Литраж</p></h2>
           
        <input 
             
            placeholder='введите топливо в литрах' 
            onChange={e => setIn2(e.target.value)}
            type="number"
            />

  <h2><p>Километраж</p></h2>
           
            <input 
                placeholder='введите пробег в км' 
                onChange={e => setIn1(e.target.value)}
                type="number"
                />
          </div>      
         
        <div className="div_3">
         
   <button className='butt' onClick={calcul}  >Расход топлива</button>
         
        <input className='bb' disabled value={calc.toFixed(2)}></input>
           
        </div>
      



    </div>
   
  );
}

export default App;
