const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
})
let arr = [];
function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        arr.push(song);
        console.log(arr);
        song.pause();
        song.currentTime = 0;
    })
}