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
		<div className="m-auto flex w-full max-w-[70%] rounded-xl bg-[#A9CDD4] p-6 shadow-xl lg:max-w-[40%]">
			<div className="flex w-full flex-col items-center gap-10">
				<div className="w-full rounded-lg bg-[#E1EBF0] p-8 text-center">
					<span className="text-5xl tracking-wider text-[#477A91]">{formatNumber(count)}</span>
				</div>

				<div className="flex flex-col w-full gap-4">
					<div className="flex w-full items-center gap-4 p-1">
						<Button onClick={increaseValue}>Aumentar</Button>
						<Button onClick={decreaseValue}>Diminuir</Button>
					</div>
					<Button onClick={() => setCount(0)}>Resetar</Button>
				</div>
			</div>
		</div>
	);
}
