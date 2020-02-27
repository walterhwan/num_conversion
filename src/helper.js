export function translateNumBase(val, base) {
  const int = parseInt(val, base) || ''
  return {
    decimal: int.toString(10),
    hex: int.toString(16).toUpperCase(),
    binary: int.toString(2),
  }
}