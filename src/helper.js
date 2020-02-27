export function translateNumBase(val, base) {
  const int = parseInt(val, base)
  const base10 = int === 0 ? 0 : int ? int : '' 
  const result =  {
    10: base10.toString(10),
    16: base10.toString(16).toUpperCase(),
    2: base10.toString(2),
  }
  result[base] = result[base].padStart(val.length, '0')

  return result
}