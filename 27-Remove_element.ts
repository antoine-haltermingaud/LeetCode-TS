function removeElement(nums: (number | undefined)[], val: number): number {
 let k = nums.length
 for (let i: number = 0; i < nums.length; i++) {
  let collision: boolean = (nums[i] === val)
  if (collision) {
   nums.splice(i, 1)
   k--
   i--
  }
 }
 return k
};
let nums_array: (number | undefined)[] = [0, 1, 2, 2, 3, 0, 4, 2]
let val1: number = 2
console.log(removeElement(nums_array, val1))