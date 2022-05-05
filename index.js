const cardList = document.querySelector('.cardList');
const amount = document.getElementById('score');
const upgrade = document.getElementById('upgrade')
const auto = document.getElementById('auto');
const farmer = document.getElementById('farmer');
let multi=1;
let plier=50;
buildBoard();

let interval = setInterval(function (){
    addCard(cardList.children.length +1)
}, 2000000);
cardList.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let total=+amount.textContent+multi;
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
    if(amount.textContent >10){
    multi+=1
    amount.textContent-=10;
    }

})
auto.addEventListener('click', function (){
    if(amount.textContent >50){
        setInterval(function (){
            addCard(cardList.children.length +1)
        }, 1000);
    }
})
farmer.addEventListener('click',function (){
    if(amount.textContent >50) {
        setInterval(clock, 1000)
    }
    })
function clock(){

}


