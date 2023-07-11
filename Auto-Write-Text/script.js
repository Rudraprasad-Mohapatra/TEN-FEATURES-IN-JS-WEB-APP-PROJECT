const text = `You are the best person !! 💜 `;

let index = 0;

function writetext() {
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length - 1) {
        setTimeout(() => {
            index = 0;
        }, 1000);
    }
}

setInterval(writetext, 150);

