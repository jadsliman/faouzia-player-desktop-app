const exitButton = document.querySelector('#exit');
const nextButton = document.querySelector('#next');
const previouseButton = document.querySelector('#previouse');
const playPauseButton = document.querySelector('#play-pause');
const audioPlayer = document.querySelector('#player');
const background = document.querySelector('.container');
const songCover = document.querySelector('#cover');
const songTitle = document.querySelector('#title');

let paused = true;
let counter = 0;
let songs = [
    {
        title: 'Unethical',
        cover: '../Assets/Covers/unethical.png',
        color: 'slategray',
        source: '../Assets/Songs/UNETHICAL.mp3'
    },

    {
        title: 'Ornament',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/ORNAMENT.mp3"
    },

    {
        title: 'Anybody Else',
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/Anybody Else.mp3"
    },

    {
        title: 'Hero',
        cover: '../Assets/Covers/hero.png',
        color: 'plum',
        source: "../Assets/Songs/Hero.mp3"
    },

    {
        title: 'Fur Elise',
        cover: '../Assets/Covers/ice.png',
        color: 'seagreen',
        source: "../Assets/Songs/Fur Elise.mp3"
    },

    {
        title: "Don't Ever Leave Me",
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/DON'T EVER LEAVE ME.mp3"
    },

    {
        title: 'Puppet',
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/Puppet.mp3"
    },

    {
        title: 'Peace & Violence',
        cover: '../Assets/Covers/peace & violence.png',
        color: 'darkred',
        source: "../Assets/Songs/PEACE & VIOLENCE.mp3"
    },

    {
        title: 'LOST MY MIND IN PARIS',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/LOST MY MIND IN PARIS.mp3"
    },

    {
        title: 'I Know',
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/I Know.mp3"
    },

    {
        title: 'Tears Of Gold',
        cover: '../Assets/Covers/tears of gold.png',
        color: 'goldenrod',
        source: "../Assets/Songs/Tears of gold.mp3"
    },

    {
        title: 'ICE',
        cover: '../Assets/Covers/ice.png',
        color: 'seagreen',
        source: "../Assets/Songs/ICE.mp3"
    },

    {
        title: 'Pretty Stranger',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/PRETTY STRANGER.mp3"
    },

    {
        title: 'Porcelain',
        cover: '../Assets/Covers/porcelain.png',
        color: 'darksalmon',
        source: "../Assets/Songs/Porcelain.mp3"
    },

    {
        title: 'RIP Love',
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/RIP Love.mp3"
    },

    {
        title: "My Heart's Grave",
        cover: "../Assets/Covers/my heart's grave.png",
        color: '#222',
        source: "../Assets/Songs/My Heart's Grave.mp3"
    },

    {
        title: 'How It All Works Out',
        cover: '../Assets/Covers/how it all works out.png',
        color: 'goldenrod',
        source: "../Assets/Songs/How It All Works Out.mp3"
    },

    {
        title: 'Sweet Fever',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/SWEET FEVER.mp3"
    },

    {
        title: 'SoLie',
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/SoLie.mp3"
    },

    {
        title: 'Born Without A Heart',
        cover: '../Assets/Covers/born without a heart.png',
        color: '#111',
        source: "../Assets/Songs/Born Without A Heart.mp3"
    },

    {
        title: 'Weirdo',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/WEIRDO.mp3"
    },

    {
        title: "Don't tell me I'm pretty",
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/Don't tell me I'm pretty.mp3"
    },

    {
        title: "You Don't Even Know Me",
        cover: "../Assets/Covers/you don't even know me.png",
        color: 'slateblue',
        source: "../Assets/Songs/You Don't Even Know Me.mp3"
    },

    {
        title: 'Tous Ces Mots',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/TOUS CES MOTS.mp3"
    },

    {
        title: "Thick And Thin",
        cover: '../Assets/Covers/citizens.png',
        color: 'steelblue',
        source: "../Assets/Songs/Thick and Thin.mp3"
    },

    {
        title: "This Mountain",
        cover: "../Assets/Covers/this mountain.png",
        color: 'olive',
        source: "../Assets/Songs/This Mountain.mp3"
    },

    {
        title: 'Desert Rose',
        cover: '../Assets/Covers/film noir.png',
        color: 'black',
        source: "../Assets/Songs/DESERT ROSE.mp3"
    },

    {
        title: 'Minefields',
        cover: '../Assets/Covers/minefields.png',
        color: '#f5de81',
        source: "../Assets/Songs/Minefields.mp3"
    },
];

function exit(e) {
    ipcRenderer.send('quit app', {});
}

function playAndPause(e) {
    if (paused === false) {
        e.target.style.backgroundImage = 'url("../Assets/Icons/play.png")';
        audioPlayer.pause();
    }
    else {
        e.target.style.backgroundImage = 'url("../Assets/Icons/pause.png")';
        audioPlayer.play();
    }
    paused = !paused;
}

function playSong({ title, cover, color, source }) {
    audioPlayer.src = source;
    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.style.backgroundImage = 'url("../Assets/Icons/pause.png")';

    songCover.src = cover;

    songTitle.innerText = title;

    background.style.backgroundColor = color;
}

function nextSong() {
    counter++;
    if (counter === songs.length) counter = 0;
    playSong(songs[counter]);
}

function previouseSong() {
    counter--;
    if (counter === -1) counter = songs.length - 1;
    playSong(songs[counter]);
}

audioPlayer.addEventListener("ended", nextSong);
exitButton.addEventListener('click', exit);
nextButton.addEventListener('click', nextSong);
previouseButton.addEventListener('click', previouseSong);
playPauseButton.addEventListener('click', playAndPause);