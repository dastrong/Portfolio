function hexToInteger(hex: string): number[] {
  return hex.match(/\w\w/g).map(color => parseInt(color, 16));
}

function integerToHex(a: number, b: number, amount: number): string {
  return Math.round(a + (b - a) * amount)
    .toString(16)
    .padStart(2, "0");
}

export function blendColors(
  colorA: string,
  colorB: string,
  amount = 0.5
): string {
  if (amount < 0) throw new Error("Amount cannot be lower than 0");
  if (amount > 1) throw new Error("Amount cannot be higher than 1");
  const [rA, gA, bA] = hexToInteger(colorA);
  const [rB, gB, bB] = hexToInteger(colorB);
  const r = integerToHex(rA, rB, amount);
  const g = integerToHex(gA, gB, amount);
  const b = integerToHex(bA, bB, amount);
  return "#" + r + g + b;
}
