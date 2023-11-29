const app = Vue.createApp({
    data() {
        return {
            // define the array
            cardArray: [
                {
                    "Title": " 8 spade",
                    "Desc" : " This is a 8 Spade",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/08_of_spades.svg/langfr-150px-08_of_spades.svg.png"
                },
                {
                    "Title": " 2 clover",
                    "Desc" : " This is a 2 Clover",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/02_of_clubs.svg/800px-02_of_clubs.svg.png"
                },
                {
                    "Title": " 9 square",
                    "Desc" : " This is a 9 Square",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/09_of_diamonds.svg/1200px-09_of_diamonds.svg.png"
                }
            ],
            // create the current card attribute
            currentCard: {},
            // creating an index to loop the cards
            currentIndex: 0
        };
    },
    mounted() {
        // calling the method for initialisation
        this.showCard();
    },
    methods: {
        // Method to display the card
        showCard() {
            this.currentCard = this.cardArray[this.currentIndex];
        },
        // method for next card
        nextCard() {
            this.currentIndex = (this.currentIndex + 1) % this.cardArray.length;
            this.showCard();
        },
        // method for previus card
        prevCard() {
            this.currentIndex = (this.currentIndex - 1 + this.cardArray.length) % this.cardArray.length;
            this.showCard();
        }
    }
})

app.mount('#app')