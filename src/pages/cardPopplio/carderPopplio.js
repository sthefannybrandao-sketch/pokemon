import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetchPokeapi from "../../hooks/useFstchPokeApi" ;
import './cardPopplio.css';

function CarderPopplio() {
    const {pokemons, loading, error} = useFetchPokeapi("popplio"); 

   

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
       <div className="pokemon-container1"> 

       <div className="pokemon-card1">

    
        
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

export default CarderPopplio;

