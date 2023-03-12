/**
 * Saves a value to the browser's local storage using the specified key.
 * @param {string} key - The key to use for the saved value.
 * @param {*} value - The value to be saved. This can be any JSON-compatible data type.
 */

export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves data from local storage for a given key and parses it as JSON.
 * @param {string} key - The key used to retrieve data from local storage.
 * @returns {object|null} - The parsed JSON data or null if no data is found or if the data cannot be parsed as JSON.
 */

export function load(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    }catch {
        return null
    }
}


/**
 * Removes the item with the specified key from the local storage.
 * @param {string} key - The key of the item to be removed.
 */

export function remove(key) {
    localStorage.removeItem(key);
}