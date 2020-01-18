import React, {useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

/*TRES CONCEITOS DO REACT: 

-COMPONENTE: é uma função que  retorna conteúdo html/css/js(para interface)
            bloco isolado de HTML/CSS/JS que nçao interfere no restante da aplicação

-PROPRIEDADE: Informações que um componente pai(App) passa para o componente filho

-ESTADO: Informações que o componente manipula. Informações mantidas pelo componente(Imutabilidade)
*/

// APP É UMA FUNÇÃO JAVASCRIPT QUE RETORNA UM CONTEÚDO HTML
//funções proprias de um componente são criadas dentro dele mesmo
function App() {
  const [devs, setDevs] = useState([]);
  

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
        
      </aside>

      <main>
        <ul>
          {devs.map(dev =>(
            <DevItem key={dev._id} dev={ dev } />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
