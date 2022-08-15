import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import './Counter.module.scss';
import { useStore } from '@nanostores/preact';
import { switchTheme, Theme, themeState } from '@/themeStore';

export default function Counter({ children }: { children?: ComponentChildren }) {
	const theme = useStore(themeState);
	const [count, setCount] = useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<select onChange={(e) => {
				switchTheme(e.currentTarget.value as Theme);
			}}>
				<option>dark</option>
				<option>light</option>
			</select>
			<div className='counter'>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className='counter-message'>{children}</div>
		</>
	);
}
