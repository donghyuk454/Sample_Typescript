import * as CryptoJS from "crypto-js";

class Block {
    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string): string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validationStructure = (aBlock: Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
    
        

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number) {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
    };
}

const genesisBlock:Block = new Block(0, "20202020", "", "hi", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const nextTimestamp: number = getNewTimeStamp();
    const newHash: string = 
        Block.calculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);   
    const newBlock : Block = 
        new Block(newIndex, newHash, previousBlock.hash, data, nextTimestamp);

    addBlock(newBlock);
    console.log(newBlock);
    return newBlock;
};

const getHashforBlock = (aBlock: Block) : string =>
    Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block) : boolean => {
    if(!Block.validationStructure(candidateBlock)) {
        return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    return true;
};

const addBlock = (candidateBlock: Block) : void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock);
    }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);
export {};