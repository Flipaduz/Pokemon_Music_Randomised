import gen1 from "../json/gen1.json";
import gen2 from "../json/gen2.json";

function listSongs(){
}

export const getSongs = (generation, language) =>  {
  if(generation === "gen1"){
    return gen1.map(song =>({ 
      src: song.src,
      name: song.name[language],
      active: song.active
    }))
  }
  else if (generation === "gen2"){
    return gen2.map(song =>({ 
      src: song.src,
      name: song.name[language],
      active: song.active
    }))
  }
}

export default listSongs
