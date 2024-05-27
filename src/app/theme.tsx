'use client'

import { ThemeProvider as MaterialThemeProvider, createTheme } from '@mui/material'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00FF9E',
        light: '#00BE9C'
      }
    }
  })

  return <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
}
