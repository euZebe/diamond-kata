const PYRAMID_TIP = 'A';

String.prototype.charCode = function() {
  return this.charCodeAt(0);
}

function buildDiamond(letter = PYRAMID_TIP) {
  const pyramidHeight = letter.charCode() - PYRAMID_TIP.charCode() + 1;
  let result = '';
  for(let level = 0 ; level < pyramidHeight ; level++) {
    const nbSpacesBefore = pyramidHeight - level;
    const currentLetter = String.fromCharCode(PYRAMID_TIP.charCode() + level);
    result += '\n' + Array(nbSpacesBefore).join(' ') // spaces before
      + currentLetter; // add letter
    if (level != 0) {
      const nbSpacesBetween = level * 2 - 1;
      result += Array(nbSpacesBetween + 1).join(' ') // + 1 cause join feels only intervals
        + currentLetter;
    }
  }

  for (let level = pyramidHeight - 2 ; level >= 0 ; level--) {
    const nbSpacesBefore = pyramidHeight - level;
    const currentLetter = String.fromCharCode(PYRAMID_TIP.charCode() + level);
    result += '\n' + Array(nbSpacesBefore).join(' ') // spaces before
      + currentLetter; // add letter
    if (level != 0) {
      const nbSpacesBetween = level * 2 - 1;
      result += Array(nbSpacesBetween + 1).join(' ') // + 1 cause join feels only intervals
        + currentLetter;
    }
  }
  return result;
}

export default buildDiamond;

