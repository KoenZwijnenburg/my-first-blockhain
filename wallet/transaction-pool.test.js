const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./wallet');


describe('TransactionPool', () => {
    let tp, wallet, transaction;

    beforeEach(() => {
        tp = new TransactionPool();
        wallet = new Wallet();
        transaction = Transaction.newTransaction(wallet, 'r4nd-4dre355', 30);
        tp.updateOrAddTransaction(transaction)
    });

    it('adds a transaction to the pool', () => {
        expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
    });

    it('updates a transaction in th pool', () => {
        const oldTransaction = JSON.stringify(transaction);
        const newTransaction = transaction.update(wallet, 'foo-4addr355', 40);
        tp.updateOrAddTransaction(newTransaction);

        expect(JSON.stringify(tp.transactions.find(t => t.id === newTransaction.id))).not.toEqual(oldTransaction);

    })

});