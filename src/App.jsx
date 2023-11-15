import './App.css';

import { FirstComponent } from './component/firstComponent';
import { Teste } from './component/Teste';
import { TemplateEx } from './component/Template';
import { MyComponent } from './component/MyComponent';
import { Events } from './component/Events';
import { EventFuncion } from './component/EventFunction';
import { FuncionRender } from './component/functionRender';

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
      <h1>HOOKS</h1>
      <h2>UseState:</h2>

    </div>
  );
}

export default App
