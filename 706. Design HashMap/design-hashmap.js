// 706. Design HashMap (2/7/53841)
// Runtime: 192 ms (79.57%) Memory: 47.88 MB (94.93%) 


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
