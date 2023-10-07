const cards = document.querySelectorAll('.cards-ul li')
for(let i=0; i<cards.length; i++ ){
    cards[i].addEventListener("mouseover", () => {
        cards[i].classList.add('cards_animate')
            cards[i].addEventListener("mouseout", () => {
                cards[i].classList.remove('cards_animate')
            })
    })
}


