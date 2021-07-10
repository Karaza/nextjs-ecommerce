import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const headers = {
  'Cache-Control': 'no-cache',
};

const ClientSide = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(url, { headers });

      const promises = response.data.results.map((result) => {
        return axios.get(result.url);
      });

      // Promise is a function taking an array of promises as a param
      const responses = await Promise.all(promises);

      const pokeData = responses.map((r) => {
        return {
          name: r.data.name,
          imgUrl: r.data.sprites.front_default,
        };
      });

      setPokemons(pokeData);
    };

    fetchPokemon();
  }, []);

  return pokemons.map((pokemon) => {
    return (
      <div key={pokemon.name}>
        <img src={pokemon.imgUrl} alt="" />
        <p>{pokemon.name}</p>
        <hr />
      </div>
    );
  });
};

export default ClientSide;
