const inner = document.querySelector('.inner');
const p = document.querySelector('p');

console.dir(inner);
inner.onclick = handler;
inner.onmouseover = handler;
inner.onmouseout = handler;

p.addEventListener('click', pFunc);

function handler(event) {
    console.dir(event);
    console.log("Event Type = " + event.type);

    switch (event.type) {
        case 'click':
            console.log("CLICKED");
            break;
        case 'mouseover':
            event.target.style.backgroundColor = 'orange';
            break;
        case 'mouseout':
            event.target.style.backgroundColor = "";
            break;
    }
}
function pFunc(event) {
    console.log("target === currentTarget  " + (event.target === event.currentTarget));
    console.log("Event target === this   " + (event.target === this));
    console.log("Event currentTarget === this   " + (event.currentTarget === this));
}