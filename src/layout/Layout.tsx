interface RootLayoutProps {
	children: Readonly<React.ReactNode>;
}

export function RootLayout({ children }: RootLayoutProps) {
	return <div className="font-inter relative flex h-screen w-full bg-[#477A91]">{children}</div>;
}
