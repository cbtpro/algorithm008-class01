/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  let sortMap = [];
  for(let i = 0; i < nums.length; i++){
    if(!map.has(nums[i])){
      map.set(nums[i], 1);
    }else{
      let count = map.get(nums[i]);
      count++;
      map.set(nums[i], count);
    }
  }
  map.forEach(item =>{
    sortMap.push(item);
  })
  sortMap.sort((a, b) => a - b);
  let allItem = sortMap.slice(sortMap.length-k);
  let result = [];
  map.forEach((value,key) =>{
    if(allItem.indexOf(value) != -1){
      result.push(key);
    }
  })
  return result;
};