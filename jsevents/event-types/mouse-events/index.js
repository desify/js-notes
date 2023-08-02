console.log("hello world");

const box = document.querySelector('.box');

box.style.backgroundColor = "grey";
box.style.width = "200px";
box.style.height = "200px";

box.addEventListener('click', e => {
    console.log('click');
    box.textContent = 'click'
    box.style.backgroundColor = 'pink';
})

box.addEventListener('dblclick', () => {
    console.log('dblclick');
    box.textContent = 'dblclick'
    box.style.backgroundColor = 'red';
})

box.addEventListener('mousedown', (e) => {
    console.log('mousedown');
    box.textContent = 'mousedown'
    box.style.backgroundColor = 'blue';
})

box.addEventListener('mouseup', () => {
    console.log('mouseup');
    box.textContent = 'mouseup'
})
/* **************************************** */
const purple = document.querySelector('.enter');
purple.addEventListener('mouseenter', (e) => {
    console.log("enter purple")
    e.currentTarget.style.backgroundColor = "grey";
})
purple.addEventListener('mouseleave', (e) => {
    console.log("leave purple")
    e.currentTarget.style.backgroundColor = "purple";
})
const green = document.querySelector('.over');
green.addEventListener('mouseover', (e) => {
    console.log("over green")
    e.currentTarget.style.backgroundColor = "grey";
})
green.addEventListener('mouseout', (e) => {
    console.log("out green")
    e.currentTarget.style.backgroundColor = "green";
})
const purpleChildren = document.querySelectorAll('.enter > p');
const greenChildren = document.querySelectorAll('.over > p');

purpleChildren.forEach((p) => {
    p.addEventListener('mouseenter', (e) => {
        console.log("enter p")
        e.currentTarget.style.borderColor = "gold";
    })

    p.addEventListener('mouseleave', (e) => {
        console.log("leave p")
        e.currentTarget.style.borderColor = "black";
    })

})

greenChildren.forEach((p) => {
    p.addEventListener('mouseover', (e) => {
        console.log("over p")
        e.currentTarget.style.borderColor = "gold";
    })

    p.addEventListener('mouseout', (e) => {
        console.log("out p")
        e.currentTarget.style.borderColor = "black";
    })

})




