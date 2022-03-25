import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { queryClient } from '../context/queryClient';
import { SigningCosmWasmProvider } from '../context/cosmwasm';
import AppLayout from '../components/Layout/AppLayout';
import '../styles/globals.css'

// App root

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
      <SigningCosmWasmProvider >
        <QueryClientProvider client={queryClient}>
          <AppLayout>
            <Component {...pageProps} />
            </AppLayout>
            <Toaster position="top-right" toastOptions={{ duration: 10000 }} />
        </QueryClientProvider>
      </SigningCosmWasmProvider>
  )
};

export default MyApp;

