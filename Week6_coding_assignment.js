<<<<<<< HEAD
class DeckOfCards {
    constructor(){
        this.suits = ["spades", "diamonds", "clubs", "hearts"];
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8",
            "9", "10", "J", "Q", "K"];
    }
    getDeck() {
        let deck = [];

        for(let i = 0; i < this.suits.length; i++) {
            for(let x = 0; x < this.values.length; x++) {
                let card = {Value: this.values[x], Suit: this.suits[i]};
                deck.push(card);
            }
        }
        console.log("line 18");
        return deck;
    }

}
const myDeck = new DeckOfCards();
myDeck.getDeck()
=======
class DeckOfCards {
    constructor(){
        let suits = ["spades", "diamonds", "clubs", "hearts"];
        let values = ["A", "2", "3", "4", "5", "6", "7", "8",
            "9", "10", "J", "Q", "K"];
        function getDeck()
        {
            let deck = new Array();

            for(let i = 0; i < suits.length; i++)
            {
                for(let x = 0; x < values.length; x++)
                {
                    let card = {Value: values[x], Suit: suits[i]};
                    deck.push(card);
                }
             }
             console.log("line 18"); //does not print to console - i don't know why this isn't working off the top of my head... strange, though. 
             return deck;
        }
        // this isn't printing to console because the variable deck is out of scope here, because you're trying to access it outside of the function in which it was initilized. 
        //if you want to log what deck is, you'll need to do it inside the curly braces of the function where let deck= new Array() is declared
        console.log(deck); //does not print to console 
    }
}
//console.log(DeckOfCards);
>>>>>>> b11ad0bfc60e3dffa7c19080a92e83146829ffd8
