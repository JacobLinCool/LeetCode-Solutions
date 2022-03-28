// 895. Maximum Frequency Stack (3/19/2022)
// Runtime: 386 ms (64.97%) Memory: 75.94 MB (34.88%) 

class FreqStack {
    #most = 0;
    #counts = {};
    #stacks = {};
    
    push(val) {
        this.#counts[val] = (this.#counts[val] || 0) + 1;
        this.#most = Math.max(this.#most, this.#counts[val]);
        
        if (!this.#stacks[this.#counts[val]]) {
            this.#stacks[this.#counts[val]] = [];
        }
        this.#stacks[this.#counts[val]].push(val);
    }

    pop() {
        const val = this.#stacks[this.#most].pop();
        
        if (this.#stacks[this.#counts[val]--].length === 0) {
            this.#most--;
        }
        
        return val;
    }
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */