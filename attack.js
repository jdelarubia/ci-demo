const attack = (creatureName, damage, isCritical = false) => `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;

module.exports = { attack };
