function getParam() {
  const param = process.argv[2];
  if (!param || !param.match(/^[A-Za-z]$/)) {
    throw 'One parameter (composed of one letter) is expected.';
  }
  return param;
}

const PYRAMID_TIP = 'A';

export default (letter = PYRAMID_TIP) => {
  return undefined;
}
