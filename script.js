fetch("games.json")
.then(r=>r.json())
.then(data=>{

let container=document.getElementById("games")

data.forEach(game=>{

let card=document.createElement("div")
card.className="game"

card.innerHTML=` <img src="${game.cover}" loading="lazy">

<h3>${game.name}</h3>
<p>${game.description}</p>
<a href="games/${game.folder}/index.html">
<button>Play</button>
</a>
`

container.appendChild(card)

})

})

document.getElementById("search").addEventListener("input",function(){

let keyword=this.value.toLowerCase()

document.querySelectorAll(".game").forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase()

if(title.includes(keyword)){
card.style.display="block"
}else{
card.style.display="none"
}

})

})
