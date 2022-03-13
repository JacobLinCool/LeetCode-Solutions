// 729. My Calendar I (6/10/2021)
// Runtime: 164 ms (87.72%) Memory: 47.40 MB (83.33%) 

/** MyCalendar.book
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
class MyCalendar {
    constructor() {
        this.events = [];
    }
    
    book(start, end) {
        let left = 0; 
        let right = this.events.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.events[mid][0] < end && this.events[mid][1] > start) return false;
            else if (this.events[mid][1] <= start) right = mid - 1;
            else left = mid + 1;
        }
        this.events.splice(left, 0, [start, end]);
        return true;
    }
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */