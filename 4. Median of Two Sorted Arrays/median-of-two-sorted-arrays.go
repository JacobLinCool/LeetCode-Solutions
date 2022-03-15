// 4. Median of Two Sorted Arrays (5/29/2021)
// Runtime: 16 ms (65.27%) Memory: 5.38 MB (57.67%) 

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m, n := len(nums1), len(nums2)
	p1, p2 := 0, 0
	if (m + n) % 2 == 1 {
		for i := 0; i < (m+n)/2; i++ {
			if p1 >= m {
				p2++
			} else if p2 >= n {
				p1++
			} else if nums1[p1] > nums2[p2] {
				p2++
			} else {
				p1++
			}
		}

		if p1 >= m {
            return float64(nums2[p2])
		} else if p2 >= n {
            return float64(nums1[p1])
		} else if nums1[p1] > nums2[p2] {
            return float64(nums2[p2])
		} else {
            return float64(nums1[p1])
		}
	} else {
		for i := 0; i < (m+n)/2-1; i++ {
			if p1 >= m {
				p2++
			} else if p2 >= n {
				p1++
			} else if nums1[p1] > nums2[p2] {
				p2++
			} else {
				p1++
			}
		}

		sum := 0
		for i := 0; i < 2; i++ {
			if p1 >= m {
				sum += nums2[p2]
                p2++
			} else if p2 >= n {
				sum += nums1[p1]
                p1++
			} else if nums1[p1] > nums2[p2] {
				sum += nums2[p2]
                p2++
			} else {
				sum += nums1[p1]
                p1++
			}
		}
        return float64(sum) / 2
	}
}