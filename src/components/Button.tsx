import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className="w-full rounded-md bg-white p-2 shadow-xl active:scale-[.9] active:bg-[#D6AA58]">
			{children}
		</button>
	);
}
