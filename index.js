const colors = [

  '#6F98A8',

  '#2B8EAD',

  '#2F454E ',

  '#2B8EAD',

  '#2F454E ',

  '#BFBFBF',

  '#BFBFBF',

  '#6F98A8',

  '#2F454E',

];

const appDiv = document.getElementById('app');

const tileGrid = document.getElementById('tile-grid');

const shuffleBtn = document.getElementById('shuffle');

const sortBtn = document.getElementById('sort');

 

shuffleBtn.addEventListener('click', shuffle);

sortBtn.addEventListener('click', sort);

 

for (let i = 0; i < 9; i++) {

  tileGrid.appendChild(createTile(i));

}

 

function createTile(i) {

  const tile = document.createElement('div');

  tile.setAttribute('class', 'tile mobile');

  tile.style.backgroundColor = colors[i];

  tile.style.setProperty('--originalColor', colors[i]);

  tile.innerText = i + 1;

  return tile;

}

 

function shuffle() {

  const tiles = document.getElementsByClassName('tile');

  console.log(tiles);

  for (var i = tiles.length - 1; i > 0; i--) {

    var j = Math.floor(Math.random() * (i + 1));

    var temp = tiles[i].outerHTML;

    tiles[i].outerHTML = tiles[j].outerHTML;

    tiles[j].outerHTML = temp;

  }

}

function sort() {

  const tileGrid = document.getElementById('tile-grid');

  tileGrid.innerHTML = '';

  for (let i = 0; i < 9; i++) {

    tileGrid.append(createTile(i));

  }

}