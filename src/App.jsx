import './App.css';

import { FirstComponent } from './component/firstComponent';
import { Teste } from './component/Teste';
import { TemplateEx } from './component/Template';
import { MyComponent } from './component/MyComponent';
import { Events } from './component/Events';

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


      {/* Evento de Click */}
      <Events />
    </div>
  );
}

export default App
