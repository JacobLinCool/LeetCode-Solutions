// 895. Maximum Frequency Stack (3/19/2022)
// Runtime: 303 ms (94.93%) Memory: 72.69 MB (68.35%) 

type frequency = number;

class FreqStack {
    private most: frequency = 0;
    private frequencies: Record<number, frequency> = {};
    private stacks: Record<frequency, number[]> = {};

    public push(val: number): void {
        this.frequencies[val] = (this.frequencies[val] || 0) + 1;
        this.most = Math.max(this.most, this.frequencies[val]);

        if (!this.stacks[this.frequencies[val]]) {
            this.stacks[this.frequencies[val]] = [];
        }
        this.stacks[this.frequencies[val]].push(val);
    }

    public pop(): number {
        const val = this.stacks[this.most].pop();
        if (!this.stacks[this.frequencies[val]--].length) {
            this.most--;
        }
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */