import React, { useState, useEffect } from "react";
import "./gen.css";

const songs = [
  { src: "/audios/audiosGen1/1-01. Game Freak Logo.mp3", name: "Game Freak Logo" },
  { src: "/audios/audiosGen1/1-02. Opening Movie.mp3", name: "Opening Movie" },
  { src: "/audios/audiosGen1/1-03. Title Screen.mp3", name: "Title Screen" },
  { src: "/audios/audiosGen1/1-04. Game Tutorial.mp3", name: "Game Tutorial" },
  { src: "/audios/audiosGen1/1-05. Welcome to the World of Pokémon!.mp3", name: "Welcome to the World of Pokémon!" },
  { src: "/audios/audiosGen1/1-06. Pallet Town Theme.mp3", name: "Pallet Town Theme" },
  { src: "/audios/audiosGen1/1-07. Professor Oak.mp3", name: "Professor Oak" },
  { src: "/audios/audiosGen1/1-08. Professor Oak's Laboratory.mp3", name: "Professor Oak's Laboratory" },
  { src: "/audios/audiosGen1/1-13. Road to Viridian City - Leaving Pallet Town.mp3", name: "Road to Viridian City - Leaving Pallet Town" },
  { src: "/audios/audiosGen1/1-15. Pewter City Theme.mp3", name: "Pewter City Theme" },
  { src: "/audios/audiosGen1/1-17. Viridian Forest.mp3", name: "Viridian Forest" },
  { src: "/audios/audiosGen1/1-18. Battle! (Wild Pokémon).mp3", name: "Battle! (Wild Pokémon)" },
  { src: "/audios/audiosGen1/1-19. Victory! (Wild Pokémon).mp3", name: "Victory! (Wild Pokémon)" },
  { src: "/audios/audiosGen1/1-21. Pokémon Center.mp3", name: "Pokémon Center" },
  { src: "/audios/audiosGen1/1-23. Pokémon Healed.mp3", name: "Pokémon Healed" },
  { src: "/audios/audiosGen1/1-25. Pokémon Gym.mp3", name: "Pokémon Gym" },
  { src: "/audios/audiosGen1/1-28. Victory! (Gym Leader Battle).mp3", name: "Victory! (Gym Leader Battle)" },
  { src: "/audios/audiosGen1/1-30. Evolution.mp3", name: "Evolution" },
  { src: "/audios/audiosGen1/1-31. Fanfare - Evolution.mp3", name: "Fanfare - Evolution" },
  { src: "/audios/audiosGen1/1-32. Road to Cerulean City - Leaving Mt. Moon.mp3", name: "Road to Cerulean City - Leaving Mt. Moon" },
  { src: "/audios/audiosGen1/1-34. Caves of Mt. Moon.mp3", name: "Caves of Mt. Moon" },
  { src: "/audios/audiosGen1/1-35. Vermilion City Theme.mp3", name: "Vermilion City Theme" },
  { src: "/audios/audiosGen1/1-36. The S.S. Anne.mp3", name: "The S.S. Anne" },
  { src: "/audios/audiosGen1/1-37. Cycling.mp3", name: "Cycling" },
  { src: "/audios/audiosGen1/1-38. Lavender Town Theme.mp3", name: "Lavender Town Theme" },
  { src: "/audios/audiosGen1/1-39. Pokémon Tower.mp3", name: "Pokémon Tower" },
  { src: "/audios/audiosGen1/1-40. Celadon City Theme.mp3", name: "Celadon City Theme" },
  { src: "/audios/audiosGen1/1-41. Rocket Game Corner.mp3", name: "Rocket Game Corner" },
  { src: "/audios/audiosGen1/1-45. Rocket Hideout.mp3", name: "Rocket Hideout" },
  { src: "/audios/audiosGen1/1-47. Silph Co..mp3", name: "Silph Co." },
  { src: "/audios/audiosGen1/1-48. Road to Fuchsia City - Leaving Lavender Town.mp3", name: "Road to Fuchsia City - Leaving Lavender Town" },
  { src: "/audios/audiosGen1/1-50. Fuchsia City Theme.mp3", name: "Fuchsia City Theme" },
  { src: "/audios/audiosGen1/1-52. The Sea.mp3", name: "The Sea" },
  { src: "/audios/audiosGen1/1-55. Cinnabar Island Theme.mp3", name: "Cinnabar Island Theme" },
  { src: "/audios/audiosGen1/1-56. Pokémon Mansion.mp3", name: "Pokémon Mansion" },
  { src: "/audios/audiosGen1/1-57. Pokémon Net Center.mp3", name: "Pokémon Net Center" },
  { src: "/audios/audiosGen1/1-59. Sevii Islands - Four & Five Islands.mp3", name: "Sevii Islands - Four & Five Islands" },
  { src: "/audios/audiosGen1/1-60. Pokémon Jump.mp3", name: "Pokémon Jump" },
  { src: "/audios/audiosGen1/1-63. Sevii Islands.mp3", name: "Sevii Islands" },
  { src: "/audios/audiosGen1/1-64. Sevii Islands - Six & Seven Islands.mp3", name: "Sevii Islands - Six & Seven Islands" },
  { src: "/audios/audiosGen1/1-65. The Union Room.mp3", name: "The Union Room" },
  { src: "/audios/audiosGen1/1-69. The Final Road.mp3", name: "The Final Road" },
  { src: "/audios/audiosGen1/1-71. Epilogue.mp3", name: "Epilogue" },
  { src: "/audios/audiosGen1/1-72. Hall of Fame.mp3", name: "Hall of Fame" },
  { src: "/audios/audiosGen1/1-73. Ending Theme.mp3", name: "Ending Theme" },
  { src: "/audios/audiosGen1/2-12. Battle! (Trainer Battle).mp3", name: "Battle! (Trainer Battle)" }
];


function Gen1 () {
  const [random, setRandom] = useState(Math.floor(Math.random() * songs.length));
  const [audio, setAudio] = useState(new Audio(songs[random].src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [nombreCancion, setNombreCancion] = useState(songs[random].name);
  const [mostrarNombre, setMostrarNombre] = useState(false);
  const [listaCanciones, setListaCanciones] = useState("");

  useEffect(() => {
    setAudio(new Audio(songs[random].src));
    setNombreCancion(songs[random].name);
  }, [random]);

  const reproducirPausar = () => {
    if (isPlaying) {
      audio.pause() ;
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nuevaCancion = () => {
    audio.pause();
    setIsPlaying(false);
    setMostrarNombre(false);
    const rnd = Math.floor(Math.random() * songs.length);
    setRandom(rnd);
  };

  const mostrarCancion = () => {
    mostrarNombre ? setMostrarNombre(false) : setMostrarNombre(true);
  };

  const mostrarListadoCanciones = () => {
    if (listaCanciones == ""){
      let str=""; 
      for(let i=0; i<songs.length; i++){
        str += songs[i].name;  
      }
      setListaCanciones(str);
    }else{
      setListaCanciones("")
    }
  }
  return (
    <div>
      <h1>Canciones de Pokemon</h1>
  
      <div className="botones">
        <button onClick={reproducirPausar}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
        <button onClick={nuevaCancion}>Nueva Canción</button>

        <button onClick={mostrarCancion}>Mostrar Cancion</button>
        {mostrarNombre && <p>La canción actual es: {nombreCancion}</p>}
        
        <button onClick={mostrarListadoCanciones}>
          {listaCanciones === "" ? "Listado" : "Ocultar"}
        </button>
        <ul>
          {listaCanciones && songs.map((song, index) => (
            <li key={index}>{song.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default Gen1;
