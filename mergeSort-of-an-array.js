
const MergeSort = (array) => {
    /**
     * Summary          Organizes numbers in an array in ascending order.
     * Description      Takes an array and uses a Merge/Sort Algorithm to order the numbers
     *                  in an array.  Uses the function merge to complete this task.
     * 
     * @param           an array
     * @author:         StephanDDuVal
     * @Created:         23MAY2021
     * 
     * @Sample Test code:
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
console.log(MergeSort(array)); 
    */ 

 if (array.length < 2) {
   console.log('length is less than 2',array);
   return array;
 } else {
     let middle = (array.length)/2
     let left = MergeSort(array.slice(0,middle))
     let right = MergeSort(array.slice(middle))
    return merge(left,right);
   }
}

const merge = (left,right) => {
        /**
     * Summary          Takes two single arrays and arranges them in numberical order
     * Description      Iterates along each array comparing the values and adding the lowest value to an
     *                  array called result. 
     * 
     * @param           an array
     * @author:         StephanDDuVal
     * Created:         23MAY2021
     * 
     */ 
  let result = [];
  let i = 0;
  let j = 0;
   while (i < left.length && j < right.length){
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++
  }
  while (j < right.length) {
    result.push(right[j]);
    j++
  }
  return result
  }


