interface RootLayoutProps {
	children: Readonly<React.ReactNode>;
}

export function RootLayout({ children }: RootLayoutProps) {
	return <div className="relative flex h-screen w-full bg-slate-400">{children}</div>;
}
