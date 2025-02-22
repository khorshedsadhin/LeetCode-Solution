'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length;

    // merge the sorted arrays
    let mergedArr = [];
    let i = 0, j = 0;

    while(i < n && j < m) {
        if(nums1[i] <= nums2[j]) {
            mergedArr.push(nums1[i]);
            i++;
        }

        else {
            mergedArr.push(nums2[j]);
            j++;
        }
    }

    while(i < n) {
        mergedArr.push(nums1[i]);
        i++;
    }

    while(j < m) {
        mergedArr.push(nums2[j]);
        j++;
    }

    // now the median
    let l = mergedArr.length;
    if(l % 2 !== 0) {
        let t = Math.ceil(l/2);
        return mergedArr[t - 1];
    }
    else {
        let num1 = mergedArr[l/2 - 1];
        let num2 = mergedArr[(l/2)];

        return (num1 + num2)/2;
    }
};
