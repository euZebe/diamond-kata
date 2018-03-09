const PYRAMID_TIP = 'A';

String.prototype.charCode = function() {
  return this.charCodeAt(0);
}

function buildDiamondLevel(pyramidHeight, level) {
  const nbSpacesBefore = pyramidHeight - level;
  const currentLetter = String.fromCharCode(PYRAMID_TIP.charCode() + level);
  let result = '\n' + Array(nbSpacesBefore).join(' ') // spaces before
    + currentLetter; // add letter
  if (level != 0) { // spaces between
    const nbSpacesBetween = level * 2 - 1;
    result += Array(nbSpacesBetween + 1).join(' ') // + 1 cause join feels only intervals
      + currentLetter;
  }
  return result;
}

/**
 * returns an array of integers
 * @param length
 * @param reverse - if true, goes from length - 1 to 0
 * @returns {number[]}
 */
function intArray(length, reverse = false) {
  return Array(length)
    .fill(null)
    .map((e, index) => reverse ? length - index - 1 : index);
}

const diamondLevelAppender = (pyramidHeight) => (partial, level) => partial + buildDiamondLevel(pyramidHeight, level);

export default function buildDiamond(letter = PYRAMID_TIP) {
  const pyramidHeight = letter.charCode() - PYRAMID_TIP.charCode() + 1;

  const top = intArray(pyramidHeight)
    .reduce(diamondLevelAppender(pyramidHeight), '');

  const bottom = intArray(pyramidHeight - 1, true)
    .reduce(diamondLevelAppender(pyramidHeight), '');

  return top + bottom;
}

