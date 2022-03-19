// 1881. Maximum Value after Insertion (5/30/2021)
// Runtime: 200 ms (12.07%) Memory: 67.30 MB (18.97%) 

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
let u = false;
    if(n[0] == "-") {
        for(let i = 1; i < n.length; i++) {
            if(x - parseInt(n[i]) < 0) {
n = n.split("");
                n.splice(i,0,x);
    n = n.join("");
                u = true;
break;
}
        }
    } else {
        for(let i = 0; i < n.length; i++) {
            if(x - parseInt(n[i]) > 0) {
n = n.split("");
                n.splice(i,0,x);
    n = n.join("");
                u = true;
break;
}
        }
    }
    
    if(!u) return n + String(x);
    
    else return n;
};