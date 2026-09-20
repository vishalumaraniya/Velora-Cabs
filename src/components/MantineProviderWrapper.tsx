'use client';

import React from 'react';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const veloraGold: MantineColorsTuple = [
  '#fff9e5',
  '#fff1cb',
  '#ffe399',
  '#ffd363',
  '#f5b921', // Primary gold accent
  '#e2a10d',
  '#b87d05',
  '#845802',
  '#513600',
  '#251700',
];

const theme = createTheme({
  colors: {
    gold: veloraGold,
  },
  primaryColor: 'gold',
  primaryShade: 4,
  fontFamily: 'var(--font-sans), sans-serif',
  defaultRadius: 'lg',
});

export default function MantineProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
