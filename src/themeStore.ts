import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

const updateTheme = (v: Theme) => {
	if (typeof window === 'undefined') return;
	// update css vars by changing data attribute
	window.document.querySelector('html')!.dataset.theme = v;
};

const getInitialTheme = (): Theme => {
	if (typeof window === 'undefined') return 'dark';
	let returned: Theme;
	const stored = window.localStorage.getItem('colorScheme') as Theme | null;

	if (stored) returned = stored;
	else returned = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

	updateTheme(returned);
	return returned;
};

export const themeState = atom<Theme>(getInitialTheme());

themeState.subscribe(updateTheme);

export const switchTheme = (theme: Theme) => {
	localStorage.setItem('colorScheme', theme);
	themeState.set(theme);
};
