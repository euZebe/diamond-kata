import buildDiamond from './app';

describe('buildPyramid', () => {
  test('should return a single A when no parameter given', () => {
    expect(buildDiamond()).toBe('\nA');
  });

  test('should return a A with two B when B is given', () => {
    expect(buildDiamond('B')).toBe('\n A\nB B\n A');
  });

  test('should return a C diamond when C is given', () => {
    expect(buildDiamond('C')).toBe('\n  A\n B B\nC   C\n B B\n  A');
  });

});