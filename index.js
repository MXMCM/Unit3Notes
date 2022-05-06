const cardList = document.querySelector('.cardList');
const amount = document.getElementById('score');
const upgrade = document.getElementById('upgrade')
const auto = document.getElementById('auto');
const endgame = document.getElementById('end');
let multi=1;
let plier=100;
buildBoard();

let interval = setInterval(function (){
    addCard(cardList.children.length +1)
}, 2000);
cardList.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        let total=+amount.textContent+multi;
        console.log(total);
        amount.innerHTML= total;
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    total=+amount.textContent+multi;
    console.log(total);
    amount.innerHTML= total;
})
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}
function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }

}
upgrade.addEventListener('click',function (){
    if(amount.textContent >20){
    multi+=.5
    amount.textContent-=20;
    }

})
auto.addEventListener('click', function (){
    if(amount.textContent >plier){
        setInterval(function (){
            addCard(cardList.children.length +1)
        }, 1500);
        amount.textContent-=plier;
    }
})
endgame.addEventListener('click', function(){
    if(amount.textContent>1000){
        window.alert(`YOU WIN !!!!!`)
        window.close();
    }
})
