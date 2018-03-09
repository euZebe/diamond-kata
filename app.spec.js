import buildPyramid from './app';

describe('buildPyramid', () => {
  test('should return a single A when no parameter given', () => {
    expect(buildPyramid()).toBe('A');
  });
});