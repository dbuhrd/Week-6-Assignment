const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../Week6_coding_assignment');

describe('DeckOfCards', function() {
    describe('constructor', function(){
        it('should return a deck of cards', function(){
            let aDeckofCards = new DeckofCards(); //why not defined?
            expect(aDeckofCards).to.be.not(null);


        })
    })
})