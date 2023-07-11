const imgs = document.getElementById('imgs');

let idx = 0;

const img = document.querySelectorAll('#imgs img');

function run() {
    idx++;

    if (idx >= img.length) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(run, 2000);