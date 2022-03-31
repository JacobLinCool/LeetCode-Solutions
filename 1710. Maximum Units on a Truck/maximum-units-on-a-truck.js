// 1710. Maximum Units on a Truck (6/14/2021)
// Runtime: 84 ms (76.35%) Memory: 40.96 MB (94.88%) 

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    // 已經在車上的總箱子數與總單元數
    let total_boxes = 0, total_units = 0;
    
    // 依單一箱子容量來排序箱子種類
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    // 從單一箱子容量最大來遍歷箱子種類
    for(let i = 0; i < boxTypes.length; i++) {
        // 車上還剩多少可以放箱子的空間
        let space = truckSize - total_boxes;
        
        if(space >= boxTypes[i][0]) {
            // 如果空間來足以將所有此種箱子放入，則放入所有此種箱子
            total_boxes += boxTypes[i][0];
            total_units += boxTypes[i][0] * boxTypes[i][1];
        }
        else {
            // 如果空間不足將所有此種箱子放入，則以此種箱子填滿剩餘空間
            total_units += space * boxTypes[i][1];
            break;
        }
    }
    
    return total_units;
};