'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        storageKey="data-theme"
        enableSystem
        attribute="data-theme"
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
