import buildDiamond from './app';

function getParam() {
  const param = process.argv[2];
  if (!param || !param.match(/^[A-Za-z]$/)) {
    throw 'One parameter (composed of one letter) is expected.';
  }
  return param;
}

console.log(buildDiamond(getParam()));