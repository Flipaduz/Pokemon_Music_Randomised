import gen1 from "../json/gen1.json";
import gen2 from "../json/gen2.json";

function listSongs(){
}

export const getSongs = (generation, language) =>  {
  let gen;
  switch (generation) {
    case "gen1":
      gen = gen1;
      break;
    case "gen2":
      gen = gen2;
      break;
  }
  
  return gen.map(song =>({ 
      src: song.src,
      name: song.name[language],
      active: song.active
    }))
}

export default listSongs
