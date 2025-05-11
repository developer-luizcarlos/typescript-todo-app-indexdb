export function isEmptyEstring(text) {
    return /^\s/.test(text) || /\s$/.test(text) || text === "";
}
