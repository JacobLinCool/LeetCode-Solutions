// 232. Implement Queue using Stacks (10/6/2021)
// Runtime: 129 ms (0.00%) Memory: 37.81 MB (92.95%) 


class MyQueue {
    constructor() {
        this.stk = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(item) {
        this.stk.push(item);
    }

    /**
     * @return {number}
     */
    pop() {
        const stk2 = [];
        while (this.stk.length > 1) stk2.push(this.stk.pop());
        const target = this.stk.pop();
        while (stk2.length > 0) this.stk.push(stk2.pop());
        return target;
    }

    /**
     * @return {number}
     */
    peek() {
        const stk2 = [];
        while (this.stk.length > 1) stk2.push(this.stk.pop());
        const target = this.stk.pop();
        stk2.push(target);
        while (stk2.length > 0) this.stk.push(stk2.pop());
        return target;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stk.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */