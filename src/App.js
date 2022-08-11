import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Ginásio 1',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Ginásio 2',
      corPrimaria: '#82Cffa',
      corSecundaria: '#E8F8E2',
    },
    {
      nome: 'Ginásio 3',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Ginásio 4',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Ginásio 5',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Ginásio 6',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Ginásio 7',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF',
    },
    {
      nome: 'Ginásio 8',
      corPrimaria: '#DB3787',
      corSecundaria: '#FFFFE4',
    },
    {
      nome: 'Elite Four',
      corPrimaria: '#C477C8',
      corSecundaria: '#F3F3F3',
    }
  ]

  const [pokemons, setPokemon] = useState([])

  const aoPokemonCadastrado = (pokemon) => {
    setPokemon([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Banner />
      <p className="text-banner">Monte o seu time e se prepare para todas as batalhas de Ginásio e Elite Four!</p>
      <Formulario times={times.map(time => time.nome)} aoPokemonCadastrado={pokemon => aoPokemonCadastrado(pokemon)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      pokemons={pokemons.filter(pokemon => pokemon.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
