function convertTemp(celsius, decimalPlaces = 1) {
  // celsius to fahrenheit
  // decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  // toFixed returns a string, -> use Number for explicit type conversion
  return Number( fahrenheit.toFixed(decimalPlaces) );
}

console.log(convertTemp(21, 0));
