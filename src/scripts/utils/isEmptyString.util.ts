export function isEmptyEstring(text: string): boolean {
  return /^\s/.test(text) || /\s$/.test(text) || text === "";
}
