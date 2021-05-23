function rgbToHex(r, g, b) {
    /**
 * Summary          RGB to Hexadecimal Value
 * Description      Bit shits << the input values and then adds them.  Then it uses the toSrting(radix)
 *                  parameter to convert the numbers to base 16 (hexadecimal). Finally it clices the first
 *                  number off, which isn't used for some reason.
 * 
 * @param           three values (r+g+b)
 * @author:         Grepper
 * @Created:        Aug 02 2019
 * @complexity      O(n)
 */

return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}