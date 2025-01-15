import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className="rounded-md bg-white p-2 shadow-xl">
			{children}
		</button>
	);
}
