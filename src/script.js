

let heroText = document.getElementById('head-hero');

let charCollection = Array.from(heroText.innerHTML).map((char) => {
    return `<span class="hover-big cursor-pointer transition-all">${char}</span>`
})

charCollection = charCollection.reduce((a,b) => a + b);

heroText.innerHtml = "";
heroText.innerHTML = charCollection