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
             console.log("line 18"); //does not print to console
             return deck;
        }
        console.log(deck); //does not print to console
    }
}
//console.log(DeckOfCards);