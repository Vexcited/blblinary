/**
 * @example
 * charToBlblinary("I");
 * // >>> "blbblbbl"
 */
export const charToBlblinary = (char: string) => char
  .charCodeAt(0)
  .toString(2)
  // Replace `0` by `b` and `1` by `l`.
  .replace(/[01]/g, (match) => match === "0" ? "b" : "l")
  .padStart(8, "b");

/**
 * @example
 * blblToText("blbblbbl");
 * // >>> "I"
 */
export const blblToText = (blbl: string) => String.fromCharCode(parseInt(
  blbl
    // Replace `b` by `0` and `l` by `1`.
    .replace(/[bl]/g, (match) => match === "b" ? "0" : "1")
, 2))

export const textToBlblinary = (text: string) => Array
  .from(text, charToBlblinary)
  .reduce((acc, curr) => acc + " " + curr);

export const blblinaryToText = (blblinary: string) => blblinary
  .split(" ")
  .map(blblToText)
  .reduce((acc, curr) => acc + curr);
