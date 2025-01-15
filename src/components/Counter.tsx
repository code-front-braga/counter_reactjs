import { useState } from 'react';
import { Button } from './Button';

export function Counter() {
	const [count, setCount] = useState<number>(0);

	const formatNumber = (value: number) => {
		return value.toString().padStart(2, '0');
	};

	const increaseValue = () => setCount(count + 1);
	const decreaseValue = () => {
		if (count === 0) {
			return;
		}
		setCount(count - 1);
	};

	return (
		<div className="m-auto flex rounded-xl bg-slate-600 p-6">
			<div className="flex flex-col items-center gap-10">
				<span className="text-5xl text-white">{formatNumber(count)}</span>

				<div className="flex items-center gap-4">
					<Button onClick={increaseValue}>Increase</Button>
					<Button onClick={decreaseValue}>Decrease</Button>
				</div>
			</div>
		</div>
	);
}
