import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const headers = {
  'Cache-Control': 'no-cache',
};

const StaticSide = (props) => {
  // console.log(props);

  return props.pokemons.map((pokemon) => {
    return (
      <div key={pokemon.name}>
        <img src={pokemon.imgUrl} alt="" />
        <p>{pokemon.name}</p>
        <hr />
      </div>
    );
  });
};

export const getStaticProps = async () => {
  const response = await axios.get(url, { headers });

  const promises = response.data.results.map((result) => {
    return axios.get(result.url);
  });

  const responses = await Promise.all(promises);

  const pokeData = responses.map((r) => {
    return {
      name: r.data.name,
      imgUrl: r.data.sprites.front_default,
    };
  });

  return {
    props: {
      pokemons: pokeData,
    },
  };
};

export default StaticSide;
