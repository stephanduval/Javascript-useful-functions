function hexToRgb(hex) {
    /**
* Summary          Hexadecimal to RGB Value
* Description      
* 
* @param           a seven digit hexadecimal value
* @author:         Grepper
* @Created:        Aug 02 2019
* @complexity      
*/
var result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
if(result){
var r= parseInt(result[1], 16);
var g= parseInt(result[2], 16);
var b= parseInt(result[3], 16);
return r+","+g+","+b;//return 23,14,45 -> reformat if needed 
} 
return null;
}
console.log(rgbToHex(10, 54, 120)); //#0a3678
console.log(hexToRgb("#0a3678"));//"10,54,120"