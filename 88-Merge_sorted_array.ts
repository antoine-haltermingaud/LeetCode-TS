
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
 let i = m - 1;
 let j = n - 1;
 let k = m + n - 1;

 while (j >= 0) {
  if (i >= 0 && nums1[i] > nums2[j]) {
   nums1[k] = nums1[i];
   i--;
  } else {
   nums1[k] = nums2[j];
   j--;
  }
  k--;
 }
 console.log(nums1)
}



// nums1 = [0], m = 0, nums2 = [1], n = 1
// nums1 = [1], m = 1, nums2 = [], n = 0
// nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

var nums1 = [1, 2, 3, 0, 0, 0]
var m = 3
var nums2 = [2, 5, 6]
var n = 3

merge(nums1, m, nums2, n)