// 706. Design HashMap (11/14/2021)
// Runtime: 192 ms (82.45%) Memory: 47.88 MB (91.49%) 


class MyHashMap {
    constructor() {
        this.size = 1e6;
        this.space = [];
    }
    
    put(key, val) {
        this.space[key % this.size] = val;
    }
    
    get(key) {
        return this.space[key % this.size] === undefined ? -1 : this.space[key % this.size];
    }
    
    remove(key) {
        delete this.space[key % this.size];
    }
}
