const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const newSongButton = document.getElementById('new-song-button');
const currentSongButton = document.getElementById('current-song-button');
const songSelector = document.getElementById('song-selector');
const homeButton = document.getElementById('home_page'); 
const audioFiles = [
    'audios/1-01 Title Demo ~Departure From The.mp3',
	'audios/1-02 Title Demo 2 ~Double Battle~.mp3',
	'audios/1-03 Title ~Main Theme~.mp3',
	'audios/1-04 Opening Select.mp3',
	'audios/1-05 Mishiro Town.mp3',
	'audios/1-06 Birch Pokémon Lab.mp3',
	'audios/1-07 Haruka.mp3',
	'audios/1-08 Help Me!.mp3',
	'audios/1-09 Battle! Wild Pokémon.mp3',
	'audios/1-10 Victory Against Wild Pokémon!.mp3',
	'audios/1-11 Route 101.mp3',
	'audios/1-12 Kotoki Town.mp3',
	'audios/1-13 Pokémon Center.mp3',
	'audios/1-14 Recovery.mp3',
	'audios/1-15 Look! Shorts Boy.mp3',
	'audios/1-16 Look! Mini Skirt.mp3',
	'audios/1-17 Battle! Trainer.mp3',
	'audios/1-18 Victory Against Trainer!.mp3',
	'audios/1-19 Level Up.mp3',
	'audios/1-20 Touka City.mp3',
	'audios/1-21 Hurry Along.mp3',
	'audios/1-22 Route 104.mp3',
	'audios/1-23 Touka Woods.mp3',
	'audios/1-24 Team Magma Appears!.mp3',
	'audios/1-25 Battle! Team Aqua _ Team Magma.mp3',
	'audios/1-26 Victory Against Team Aqua _ Tea.mp3',
	'audios/1-27 Kanazumi City.mp3',
	'audios/1-28 Trainers_ School.mp3',
	'audios/1-29 Beyond The Sea.mp3',
	'audios/1-30 Muro Town.mp3',
	'audios/1-31 Look! Tuber Girl.mp3',
	'audios/1-32 Kaina City.mp3',
	'audios/1-33 Ocean Science Museum.mp3',
	'audios/1-34 Route 110.mp3',
	'audios/1-35 Cycling.mp3',
	'audios/1-36 Game Corner.mp3',
	'audios/1-37 Hit!.mp3',
	'audios/1-38 Too Bad.mp3',
	'audios/1-39 B D Time.mp3',
	'audios/1-40 Jackpot.mp3',
	'audios/1-41 Shidake Town.mp3',
	'audios/1-42 Route 113.mp3',
	'audios/1-43 Twins.mp3',
	'audios/1-44 Hajitsuge Town.mp3',
	'audios/1-45 Ropeway.mp3',
	'audios/1-46 Mt. Chimney.mp3',
	'audios/1-47 Look! Hiker.mp3',
	'audios/1-48 Route 111.mp3',
	'audios/1-49 Gym.mp3',
	'audios/1-50 Battle! Gym Leader.mp3',
	'audios/1-51 Victory Against Gym Leader!.mp3',
	'audios/1-52 Get Badge.mp3',
	'audios/1-53 Get Move Machine.mp3',
	'audios/1-54 Surfing.mp3',
	'audios/2-01 Route 119.mp3',
	'audios/2-02 Hiwamaki City.mp3',
	'audios/2-03 Route 120.mp3',
	'audios/2-04 Interviewers.mp3',
	'audios/2-05 Safari Zone.mp3',
	'audios/2-06 Look! Gentleman.mp3',
	'audios/2-07 Minamo City.mp3',
	'audios/2-08 Art Museum.mp3',
	'audios/2-09 Move Deleted.mp3',
	'audios/2-10 Yūki.mp3',
	'audios/2-11 Battle! Yūki _ Haruka.mp3',
	'audios/2-12 Evolution.mp3',
	'audios/2-13 Congratulations On Your Evoluti.mp3',
	'audios/2-14 Friendly Shop.mp3',
	'audios/2-15 Mt. Pyre.mp3',
	'audios/2-16 Look! Psychicer.mp3',
	'audios/2-17 Look! Occult Maniac.mp3',
	'audios/2-18 Mt. Pyre Exterior.mp3',
	'audios/2-19 Hideout.mp3',
	'audios/2-20 Tool Get.mp3',
	'audios/2-21 Team Aqua Appears!.mp3',
	'audios/2-22 Battle! Team Aqua _ Team Magma.mp3',
	'audios/2-23 The Super-Ancient Pokémon Awake.mp3',
	'audios/2-24 Drought.mp3',
	'audios/2-25 Heavy Rain.mp3',
	'audios/2-26 Dive.mp3',
	'audios/2-27 Rune City.mp3',
	'audios/2-28 Shrine Of Awakening.mp3',
	'audios/2-29 Battle! Super-Ancient Pokémon.mp3',
	'audios/2-30 Look! Bikini Sister.mp3',
	'audios/2-31 Saiyū City.mp3',
	'audios/2-32 Get Berry.mp3',
	'audios/2-33 Contest Lobby.mp3',
	'audios/2-34 Contest!.mp3',
	'audios/2-35 Results Announcement.mp3',
	'audios/2-36 Contest Winner.mp3',
	'audios/2-37 Stone Chamber Of The Proclamati.mp3',
	'audios/2-38 Battle! Regirock _ Regice _ Reg.mp3',
	'audios/2-39 Karakuri House.mp3',
	'audios/2-40 Abandoned Ship.mp3',
	'audios/2-41 Battle Tower.mp3',
	'audios/2-42 Champion Road.mp3',
	'audios/2-43 Look! Cooltrainer.mp3',
	'audios/2-44 The Four Heavenly Kings Appears.mp3',
	'audios/2-45 Battle! The Four Heavenly Kings.mp3',
	'audios/2-46 Champion Daigo.mp3',
	'audios/2-47 Decisive Battle! Daigo.mp3',
	'audios/2-48 Victory Against Daigo!.mp3',
	'audios/2-49 Room Of Glory.mp3',
	'audios/2-50 Hall Of Fame.mp3',
	'audios/2-51 Ending.mp3',
	'audios/2-52 The END.mp3',
	'audios/2-53 TRICK MASTER.mp3',
	'audios/2-54 SLATEPORT CITY.mp3',
	'audios/2-55 STEVEN STONE.mp3'
    // Agrega aquí más nombres de archivos MP3
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
