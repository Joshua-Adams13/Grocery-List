'use strict'

function createH1 (text) {
    let h1 = document.createElement('h1');
    let t = document.createTextNode(text);
    h1.appendChild(t);
    document.body.appendChild(h1);
}

function createList () {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
}

function createItem (name) {
    this.name = name;
}

createH1('We need:');
createList();

const banana = new createItem('Banana');

let list = document.querySelector('ul');
let addItem = document.createElement('li');
addItem.textContent = banana.name;

list.appendChild(addItem);




