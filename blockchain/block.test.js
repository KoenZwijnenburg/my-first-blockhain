const Block = require('./block');
const {DIFFICULTY} = require("../config");

describe('Block', () => {
    let data, lastBlock , block;

    beforeEach(() => {
       data = 'bar';
       lastBlock = Block.genesis();
       block = Block.mineBlock(lastBlock, data);
    });

    it('set the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('set the `lastHash` to match the has of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });


    it('generates a has that matches the difficulty', () => {
        expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
    });
});