import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CssVarsProvider } from '@mui/joy/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssVarsProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</CssVarsProvider>
	</StrictMode>
);
