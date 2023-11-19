import './App.css';

import { FirstComponent } from './component/firstComponent';
import { Teste } from './component/Teste';
import { TemplateEx } from './component/Template';
import { MyComponent } from './component/MyComponent';
import { Events } from './component/Events';
import { EventFuncion } from './component/EventFunction';
import { FuncionRender } from './component/functionRender';
import { Data } from './component/Data';
import { DataDois } from './component/DataDois';
import { ListRender } from './component/ListRender';
import { Condi } from './component/ConditionalRender';
import { ShowUser } from './component/ShowUserName';
import { CarDetails } from './component/CarDetails';
import { DetailsJob } from './component/DetailsJob';

// Importando imagem
import two from './assets/m3.jpg';
import four from './assets/m4.jpg';
import ippo from './public/ippo.png';



function App() {
  return (
    <div className="App">
      {/* Criação do Primeiro Componente */}
      <h1>Fundamentos React</h1>
      <h2>Importação de componentes:</h2>
      <MyComponent />
      <FirstComponent />
      <Teste />

      {/* Criação de comentários */}

      <h2>Tipos de comentários:</h2>
      <p>// Comentário ou /* Comentário entre chaves*/</p>

      {/* Template Expression */}
      <TemplateEx /> 

      {/* Hierarquia de Componente */}
      <MyComponent />

      <h2>Eventos Click:</h2>
      {/* Evento de Click */}
      <Events />

      {/* Funções nos Eventos */}
      <EventFuncion />

      {/* Funções de Renderização */}
      <FuncionRender />

      <h1>Avançando em React</h1>
      <h3>Importação de imagem:</h3>
      <p>Utilizando imagem como componentes</p>

      <img src= {two} />
      <img src= {four} />
      <img src= {ippo} />
      {/* UseState */}
      <h1>HOOKS</h1>
      <h2>UseState:</h2>
      <Data />
      <DataDois />

      {/* Renderização de lista */}
      <h1>Renderização de lista:</h1>
      <ListRender />  

      <h1>Condição IF:</h1>
      <Condi />

      <h1>PROPS:</h1>
      <ShowUser name='Matheus'/>

      <h1>Desestruturando PROPS:</h1>
      <CarDetails model='HB20' age={2016} color='branco'/>
      <DetailsJob sal={4000} xp='Junior' mod='Remoto'/>

      <h1>Reaproveitamento de componentes:</h1>
      <CarDetails model='Atego' age={2024} color='Preto'/>
      <DetailsJob sal={7000} xp='Pleno' mod='Remoto'/>

      <h1>Renderização de lista com componentes:</h1>

      const users = [
        {id: 1, name: 'Matheus', age: 28},
        {id: 2, name: 'Pedro', age: 50},
        {id: 3, name: 'lucas', age: 18}
      ];

      {user.map((car)=>(
        <CarDetails key={car.id} model={car.model} age={car.age} color={car.color}/>
      ))}

    </div>
  );
}

export default App
