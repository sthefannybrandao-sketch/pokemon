import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './carder.css';

function App() {
  const [pokemons, setPokemons] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await
         axios.get('https://pokeapi.co/api/v2/pokemon/fennekin');
         
        setPokemons(res.data);
        console.log('success:', res.data);
        setLoading(false);

      }
      catch (err) {
        console.error("erro ao carregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, {});


  if (loading) return (
    <div className="loader">
      carregando pokédex...
  </div>
  );

  if (error) return (
    <div className="error">
      ocorreu um erro inesperado
  </div>
  );

  return (
    <div className="app"> 
       <div className="pokemon-container"> 

       <div className="pokemon-card">
        
       <h2>{pokemons.name}</h2>
        
       <img src={pokemons.sprites.front_default } alt={pokemons.name}/>
       <h3>{pokemons.stats[0].stat.name + ''+
     pokemons.stats[0].base_stat + pokemons.stats[1].stat.name + '' +
     pokemons.stats[0].base_stat +
     pokemons.types[0].type.name }</h3>
      
        </div>
        </div>
        </div>
  );
}

export default carder;
