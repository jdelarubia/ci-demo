const { attack } = require('./attack');

test('should return damage sentence when called correctly', () => {
  const result = attack('Troll', 10, false);
  expect(result).toBe('Troll dealt 10 damage!');
  expect(result).toMatch(/^Troll(.*)10 damage!/);
});
