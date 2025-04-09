import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSongs } from "./ListSongs";
import "../styles/gen.css";

function Gen () {
  const { generacion } = useParams();
  const [songs, setSongs] = useState(getSongs(generacion, "es"));
  const [random, setRandom] = useState(Math.floor(Math.random() * songs.length));
  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [nameSong, setNameSong] = useState(songs[random].name);
  const [showName, setShowName] = useState(false);
  const [listSongs, setListSongs] = useState("");
  const [hasGuess, setHasGuess] = useState(false);
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);

  const [query, setQuery] = useState("");
  const filtered = songs.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setAudio(new Audio(songs[random].src));
    setNameSong(songs[random].name);
  }, [random]);

  const reproduceStop = () => {
    if (isPlaying) {
      audio.pause() ;
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const newSong = () => {
    audio.pause();
    setIsPlaying(false);
    setShowName(false);
    setHasGuess(false);
    setIsGuessCorrect(false);
    
    let found = false;
    while(!found){
      const rnd = Math.floor(Math.random() * songs.length);
      if(songs[rnd].active === true){
        found = true;
        setRandom(rnd);
      }
    }
  };

  const showSong = () => {
    showName ? setShowName(false) : setShowName(true);
  };

  const showListSongs = () => {
    if (listSongs === ""){
      let str=""; 
      for(let i=0; i<songs.length; i++){
        str += songs[i].name;  
      }
      setListSongs(str);
    }else{
      setListSongs("")
    }
  }

  const saveSelections = async () => {
    const form = document.getElementById('songSelectionForm');
    const selectedSongs = Array.from(form.elements)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    const updatedSongs = songs.map(song => {
      song.active = selectedSongs.includes(song.name);
      return song;
    });
    setSongs(updatedSongs);
  };

  const checkChoosenSong = (song) =>{
    setQuery("");
    setHasGuess(true);
    song.name == nameSong ? setIsGuessCorrect(true) : setIsGuessCorrect(false);
  }
  

  return (
    <>
      <h1>Canciones de Pokemon <spam>{generacion}</spam></h1>
  
      <div className="buttons">
        <button onClick={reproduceStop}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
        <button onClick={newSong}>Nueva Canción</button>

        <div id="filtradoSong">
          <input
            type="text"
            placeholder="Adivina la cancion"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <ul>            
              {filtered.length > 0 ? (
                filtered.map((song, index) => (
                  <li key={index} onClick={() => checkChoosenSong(song)}>
                    {song.name}
                  </li>
                ))
              ) : (
                <li>No hay coincidencias</li>
              )}
            </ul>
          )}
        </div>
        {hasGuess && 
          <p>Tu Guess es: {isGuessCorrect ? "Correcto :)" : "Incorrecto :("}</p>
        }

        <button onClick={showSong}>{showName ? "Ocultar Cancion" : "Mostrar Cancion"}</button>
        {showName && <p>La canción actual es: {nameSong}</p>}
        
        <button onClick={showListSongs}>
          {listSongs === "" ? "Listado" : "Ocultar"}
        </button>
        { listSongs &&
          <div id="checkboxes">
            <h3>Seleccionar canciones</h3>
            <form id="songSelectionForm">
              {songs.map((song, index) => {
                const b = song.active;
                return (
                  <label key={index}>
                    <input
                      type="checkbox"
                      name={`song-${index}`}
                      value={song.name}
                      defaultChecked={b}
                    />
                    {song.name}<spam>&nbsp;&nbsp;&nbsp;</spam> 
                    <audio src={songs[index].src} controls /> <br></br>
                  </label>
                );
              })}
              <button type="button" onClick={saveSelections}>Guardar</button>
            </form>
          </div>
        }
      </div>
    </>
  );
}

export default Gen;
