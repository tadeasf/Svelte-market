import { writable } from 'svelte/store';

function createLoading() {
    const { subscribe, set, update } = writable(true);

    return {
        subscribe,
        toggle: (value) => { update(state => value) }
    }
}

export const loading = createLoading();