import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { useStore } from '@nanostores/preact';
import { switchTheme, Theme, themeState } from '@/themeStore';
import styles from './Counter.module.scss';

export default function Counter({ children }: { children?: ComponentChildren }) {
	const theme = useStore(themeState);
	const [count, setCount] = useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<select
				value={theme}
				onChange={(e) => {
					switchTheme(e.currentTarget.value as Theme);
				}}
			>
				<option>dark</option>
				<option>light</option>
			</select>
			<div className={styles.counter}>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className={styles['counter-message']}>{children}</div>
		</>
	);
}
