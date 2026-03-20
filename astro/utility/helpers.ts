/**
 * Utility function to select a random element from an array, used to provide dynamic and engaging user experiences by randomly choosing from predefined sets of messages, colors, or other data within the LCARS-themed website design.
 * 
 * @param array - The array from which to select a random element.
 * @returns A random element from the provided array.
 */
export const selectRandom = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};