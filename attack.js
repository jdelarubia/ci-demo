const attack = (creatureName, damage, isCritical = false) => {
  return `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;
};

module.exports = { attack: attack };
