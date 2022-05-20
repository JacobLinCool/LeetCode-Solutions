// 946. Validate Stack Sequences (3/16/2022)
// Runtime: 110 ms (23.53%) Memory: 45.54 MB (58.82%) 

function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stk: number[] = [];
    
    while (pushed.length || popped.length) {
        while (pushed.length && pushed[0] !== popped[0]) {
            stk.push(pushed.shift());
        }
        if (pushed.length && pushed[0] === popped[0]) {
            stk.push(pushed.shift());
        }
        if (stk[stk.length - 1] !== popped[0]) {
            return false;
        }
        while (popped.length && stk[stk.length - 1] === popped[0]) {
            stk.pop();
            popped.shift();
        }
    }
    
    return stk.length === 0;
};
