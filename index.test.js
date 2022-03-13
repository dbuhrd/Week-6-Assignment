// const { assert } = require("chai");
// const { expect } = require("chai");
// const { describe } = require("chai");

const expect = chai.expect;

describe('DeckOfCards', function() {
    describe('constructor', function(){
        it('should return a deck of cards', function(){
            let aDeckofCards = new DeckofCards();
            expect(aDeckofCards).to.be.not(null);


        })
    })
})