// 752. Open the Lock (6/5/2021)
// Runtime: 1112 ms (5.23%) Memory: 45.53 MB (92.84%) 

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const visited = {};
    const queue = [];
    let depth = 0;
    
    visited["0000"] = true;
    queue.push("0000");
    
    while(queue.length) {
        let size = queue.length;
        while(size > 0) {
            // 要處理的新組合
            let lock = queue.shift();
            
            // 如果是 DeadEnd 就直接換下一個
            if(deadends.includes(lock)) {
                size--;
                continue;
            }
            
            // 找到就輸出 depth
            if(lock === target) return depth;
            
            for(let i = 0; i < 4; i++) {
                let n = parseInt(lock[i]);
                
                let go_up = lock.substr(0, i) + (n == 9 ? "0" : n + 1) + lock.substr(i + 1);
                let go_down = lock.substr(0, i) + (n == 0 ? "9" : n - 1) + lock.substr(i + 1);
                
                if(!visited[go_up] && !deadends.includes(go_up)) {
                    visited[go_up] = true;
                    queue.push(go_up);
                }
                if(!visited[go_down] && !deadends.includes(go_down)) {
                    visited[go_down] = true;
                    queue.push(go_down);
                }
            }
            
            size--;
        }
        depth++;
    }
    
    return -1;
};