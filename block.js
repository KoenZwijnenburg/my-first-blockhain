class Block {

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
        Timestamp: ${this.timestamp}
        last hash: ${this.lastHash.substr(0, 10)}
        Hash: ${this.hash.substr(0, 10)}
        Data: ${this.data}
        `;
    }

    static genesis() {
        return new this('Genesis time', '------', 'f1r570h45h', []);
    }
}

module.exports = Block;