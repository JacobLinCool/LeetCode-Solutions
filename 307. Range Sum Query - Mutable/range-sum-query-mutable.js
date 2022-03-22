// 307. Range Sum Query - Mutable (6/18/2021)
// Runtime: 588 ms (78.08%) Memory: 71.32 MB (94.52%) 

// lowbit: x 化為二進位後只保留最右邊的 1 的數
function lowbit(x) {
    return x & (-x);
}

// 二元索引樹 (Binary Indexed Tree) 
class BIT {
    constructor(nums) {
        this.val = new Array(nums.length + 1).fill(0);
        for(let i = 0; i < nums.length; i++) this.update(i + 1, nums[i]);
    }
    
    update(index, delta) {
        while (index < this.val.length) {
            this.val[index] += delta;
            index += lowbit(index);
        }
    }
    
    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.val[index];
            index -= lowbit(index);
        }
        return sum;
    }
}

class NumArray {
    constructor(nums) {
        this.nums = nums;
        this.bit = new BIT(nums);
    }
    
    update(index, value) {
        this.bit.update(index + 1, value - this.nums[index]);
        this.nums[index] = value;
    }
    
    sumRange(left, right) {
        return this.bit.query(right + 1) - this.bit.query(left);
    }
}