import { writable } from "svelte/store";

const pageStore = writable(window.location.pathname);

export default pageStore

import { navigateTo } from "svelte-router-spa"

export function goToPage(page) {
  navigateTo(page)
  pageStore.set(page)
}