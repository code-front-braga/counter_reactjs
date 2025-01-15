import { Header, Counter, Footer } from './components';
import { RootLayout } from './layout/Layout';

export default function App() {
	return (
		<RootLayout>
			<Header />
			<Counter />
			<Footer />
		</RootLayout>
	);
}
