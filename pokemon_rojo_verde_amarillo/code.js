const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const newSongButton = document.getElementById('new-song-button');
const currentSongButton = document.getElementById('current-song-button');
const songSelector = document.getElementById('song-selector');
const homeButton = document.getElementById('home_page'); 
const audioFiles = [
    'pk_rojo/1-01. Game Freak Logo.mp3',
	'pk_rojo/1-02. Opening Movie.mp3',
	'pk_rojo/1-03. Title Screen.mp3',
	'pk_rojo/1-04. Game Tutorial.mp3',
	'pk_rojo/1-05. Welcome to the World of Pokémon!.mp3',
	'pk_rojo/1-06. Pallet Town Theme.mp3',
	'pk_rojo/1-07. Professor Oak.mp3',
	//'pk_rojo/1-08. Professor Oak's Laboratory.mp3',
	'pk_rojo/1-13. Road to Viridian City - Leaving Pallet Town.mp3',
	'pk_rojo/1-15. Pewter City Theme.mp3',
	'pk_rojo/1-17. Viridian Forest.mp3',
	'pk_rojo/1-18. Battle! (Wild Pokémon).mp3',
	'pk_rojo/1-19. Victory! (Wild Pokémon).mp3',
	'pk_rojo/1-21. Pokémon Center.mp3',
	'pk_rojo/1-23. Pokémon Healed.mp3',
	'pk_rojo/1-25. Pokémon Gym.mp3',
	'pk_rojo/1-28. Victory! (Gym Leader Battle).mp3',
	'pk_rojo/1-30. Evolution.mp3',
	'pk_rojo/1-31. Fanfare - Evolution.mp3',
	'pk_rojo/1-32. Road to Cerulean City - Leaving Mt. Moon.mp3',
	'pk_rojo/1-34. Caves of Mt. Moon.mp3',
	'pk_rojo/1-35. Vermilion City Theme.mp3',
	'pk_rojo/1-36. The S.S. Anne.mp3',
	'pk_rojo/1-37. Cycling.mp3',
	'pk_rojo/1-38. Lavender Town Theme.mp3',
	'pk_rojo/1-39. Pokémon Tower.mp3',
	'pk_rojo/1-40. Celadon City Theme.mp3',
	'pk_rojo/1-41. Rocket Game Corner.mp3',
	'pk_rojo/1-45. Rocket Hideout.mp3',
	'pk_rojo/1-47. Silph Co..mp3',
	'pk_rojo/1-48. Road to Fuchsia City - Leaving Lavender Town.mp3',
	'pk_rojo/1-50. Fuchsia City Theme.mp3',
	'pk_rojo/1-52. The Sea.mp3',
	'pk_rojo/1-55. Cinnabar Island Theme.mp3',
	'pk_rojo/1-56. Pokémon Mansion.mp3',
	'pk_rojo/1-57. Pokémon Net Center.mp3',
	'pk_rojo/1-59. Sevii Islands - Four & Five Islands.mp3',
	'pk_rojo/1-60. Pokémon Jump.mp3',
	'pk_rojo/1-63. Sevii Islands.mp3',
	'pk_rojo/1-64. Sevii Islands - Six & Seven Islands.mp3',
	'pk_rojo/1-65. The Union Room.mp3',
	'pk_rojo/1-69. The Final Road.mp3',
	'pk_rojo/1-71. Epilogue.mp3',
	'pk_rojo/1-72. Hall of Fame.mp3',
	'pk_rojo/1-73. Ending Theme.mp3',
	'pk_rojo/2-12. Battle! (Trainer Battle).mp3'
];

let currentSongIndex = 0;
let isPaused = false;

function playRandomSong() {
    const randomIndex = generateRandomIndex();
    currentSongIndex = randomIndex;
    const randomSong = audioFiles[randomIndex];
    audioPlayer.src = randomSong;
    audioPlayer.play();
    isPaused = false;
}

function generateRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * audioFiles.length);
    } while (randomIndex === currentSongIndex);
    return randomIndex;
}

function showCurrentSong() {
    const currentSong = audioFiles[currentSongIndex];
    alert(`Canción Actual: ${currentSong}`);
}

playButton.addEventListener('click', () => {
    if (!audioPlayer.paused && !isPaused) {
        // No hacer nada si la canción está reproduciéndose y no se pausó
        return;
    }
    if (isPaused) {
        // Continuar reproducción desde donde se pausó
        audioPlayer.play();
        isPaused = false;
    } else {
        // Reproducir una nueva canción
        playRandomSong();
    }
});

newSongButton.addEventListener('click', playRandomSong);

stopButton.addEventListener('click', () => {
    if (!audioPlayer.paused) {
        // Pausar la canción y recordar el tiempo actual
        audioPlayer.pause();
        isPaused = true;
    } else {
        // Reanudar la reproducción desde donde se pausó
        audioPlayer.play();
        isPaused = false;
    }
});

currentSongButton.addEventListener('click', showCurrentSong);

homeButton.addEventListener('click', function() {
    window.location.href = '../index.html';
});

// Reproduce una canción al cargar la página
playRandomSong();
