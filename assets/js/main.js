var cards = document.querySelectorAll (".card");
console.log (cards);
var html = document.querySelector ("html")

cards.forEach ((card) => {
    card.onclick = () => {
        card.classList.toggle ("active");
        cards.forEach ((c) => {
            if (c != card) {
                c.classList.remove("active");
            }
        })
    }
    
})
