import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultCookies = { _created: new Date(), visited: false };
export const Cookies = writable((browser && JSON.parse(localStorage.getItem("cookies"))) || defaultCookies);
Cookies.subscribe((value) => browser && (localStorage.cookies = JSON.stringify(value)));