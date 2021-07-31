export const storage = type => {
    const store = window[`${type}Storage`];
    const isSupported = typeof Storage === 'function';
    return {
        isSupported,
        set(key, value) {
            store.setItem(key, JSON.stringify(value));
        },
        get(key) {
            return JSON.parse(store.getItem(key));
        },
        remove(key) {
            store.removeItem(key);
        },
        empty() {
            store.clear();
        },
    };
};
