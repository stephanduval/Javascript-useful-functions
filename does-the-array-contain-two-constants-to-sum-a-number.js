
const thisMakesThat = (array, targetNumber) => {
    /**
   * Summary          Finds out if a number can be produced by adding two numbers in an array
   * Description      Loops through each combinaton of numbers tro try every result
   * 
   * @param           one array, one int
   * @author:         StephanDDuVal
   * @Created:         23MAY2021
   * @efficiency      O(n)
   * 
   */
// debugger;
let i = 0;
while (i < array.length) {
  for (j = 0; j <array.length; j++) {
    if (array[j] + array[i] == targetNumber) {
   answer = `First Number: ${array[i]}, Second Number: ${array[j]}`;
   return answer
    } 

  }
  i++
} 

  return 'damn fool'
}


// test code
thisMakesThat([1,2,3], 5)
