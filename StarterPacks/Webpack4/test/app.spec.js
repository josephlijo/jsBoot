var expect = require('chai').expect;

describe('When the application renders', () => {
    describe('Main element', () => {
        it('Content is correct', () => {
            expect("webpack4").to.be.equal("webpack4");
        });
    });
});