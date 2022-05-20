// 4. Median of Two Sorted Arrays (5/29/2021)
// Runtime: 128 ms (64.57%) Memory: 43.58 MB (94.78%) 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    let p1 = 0, p2 = 0;
    if((m + n) % 2) {
        for(var i = 0; i < parseInt((m + n) / 2); i++) {
            if(nums1[p1] === undefined) p2++;
            else if(nums2[p2] === undefined) p1++;
            else if(nums1[p1] > nums2[p2]) p2++;
            else p1++;
        }
        
        if(nums1[p1] === undefined) return nums2[p2];
        if(nums2[p2] === undefined) return nums1[p1];
        return nums1[p1] > nums2[p2] ? nums2[p2] : nums1[p1];
    } else {
        for(var i = 0; i < (m + n) / 2 - 1; i++) {
            if(nums1[p1] === undefined) p2++;
            else if(nums2[p2] === undefined) p1++;
            else if(nums1[p1] > nums2[p2]) p2++;
            else p1++;
        }
        
        let sum = 0;
        for(var i = 0; i < 2; i++) {
            if(nums1[p1] === undefined) sum += nums2[p2++];
            else if(nums2[p2] === undefined) sum += nums1[p1++];
            else if(nums1[p1] > nums2[p2]) sum += nums2[p2++];
            else sum += nums1[p1++];
        }
        return sum / 2;
    }
    
    return 0;
};