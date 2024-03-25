import './App.css';
//import { ShowName } from './Props/ShowName';
import { Car } from './Props/Car';
import { Dev } from './Props/Dev';
import { ChildrenProp } from './Props/ChildrenProp';

function App() {

  const cars = [
    {id: 1, cor: "Branco", km: 12000, ano: 2022},
    {id: 2, cor: "Preto", km: 1000, ano: 2002},
    {id: 3, cor: "Cinza", km: 500, ano: 2019},
  ]

  return (
    <div className="App">
      <h1>Props:</h1>
      {/* <ShowName name="Matheus"/> */}
      <Car cor="Vermalho" km={12000} ano={2021}/> 

      <Dev name="Matheus" age={29} job="FrontEnd"/>
      <Dev name="Joao" age={25} job="BackEnd"/>

       {
        cars.map((car) => (
          <Car key={car.id} cor={car.cor} km={car.km} ano={car.ano}/>
        ))
       }

       <ChildrenProp>
        <p>Conteudo de fora do componente!</p>
       </ChildrenProp>
    </div>
  );
}

export default App
