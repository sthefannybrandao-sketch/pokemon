import { useState, useEffect } from 'react';
import axios from 'axios';
// procura informacoes na API do pokemon//

function useFetchPokeapi(pokemon) {
  console.log('iniciando construção da pagina')
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specie, setSpecie] = useState({});
  const { evolution, setEvolution } = useState({});
  const { myPokemon, setMyPokemon } = useState({});


  //get inicio//
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`// await aguardar o axios trezer informacoes do axios
        );

        setPokemons(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, [pokemon]);
  //get da especie//
  useEffect(() => {
    const getSpecies = async () => {
      try {
        console.log('Success: teste 1', pokemons);

        const res = await axios.get(pokemons.species.url, {})

        setSpecie(res.data);
        console.log('Success:', res.data);

      }
      catch (err) {
        console.error("Erro ao carregar API", err);

      }
    };
    getSpecies();
  }, [pokemons]);



  useEffect(() => {
    const getEvolutions = async () => {
      try {
        const res = await axios.get(specie.evolution_chain.url, {})// await aguardar o axios trezer informacoes do axios


        setEvolution(res.data);
        console.log('Success:', res.data);

      }
      catch (err) {
        console.error("Erro ao carregar API", err);

      }
    };
    getEvolutions();
  }, [specie]);

  useEffect(() => {
    const setPoke = async () => {
      try {
        setMyPokemon({
          nome: pokemons.name,
          vida: pokemons.stats[0].base_stat,
          ataque: pokemons.stats[1].base_stat,
          tipo: pokemons.types[0].type.name,
          evolucao: [evolution.chain.evolves_to[0].species.name],
          imagem: pokemons.sprites.front_default,
        });
      } catch (err) {
        console.error(err);
      }
    };
    setPoke();
  }, [evolution, pokemons]);
  console.log('Success: teste');
  return { myPokemon, loading, error }
}

export default useFetchPokeapi;

