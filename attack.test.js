const { attack } = require('./attack');

test('should return damage sentence when called correctly', () => {
  const result = attack('Troll', 10);
  expect(result).toBe('Troll dealt 10 damage!');
  expect(result).toMatch(/^Troll(.*)10 damage!/);
});

test('sentence should contain the word "damage"', () => {
  const result = attack('Troll', 10, true);
  expect(result).toMatch(/damage/);
});

test('if critical damage is set to True, damage should double', () => {
  const result = attack('Troll', 10, true);
  expect(result).toMatch(/20/);
});
