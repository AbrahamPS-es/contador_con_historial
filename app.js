const contador=document.getElementById('contador');
const incrementButton=document.getElementById('increment');
const decrementButton=document.getElementById('decrement');
const resetButton=document.getElementById('reset');
let historyList=document.getElementById('history__list');

function main(){
    contador.textContent = 0;
    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
}

function increment() {
    contador.textContent = parseInt(contador.textContent) + 1;
    const node=document.createElement('li');
    const textNode=document.createTextNode('Aumentó +1');
    node.appendChild(textNode);
    historyList.appendChild(node);
}

function decrement() {
    contador.textContent = parseInt(contador.textContent) - 1;
    const node=document.createElement('li');
    const textNode=document.createTextNode('Disminuyó -1');
    node.appendChild(textNode);
    historyList.appendChild(node);
}

function reset() {
    contador.textContent = 0;
    historyList.innerHTML = '';
}

main();