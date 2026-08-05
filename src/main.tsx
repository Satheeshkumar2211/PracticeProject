import { MantineProvider } from '@mantine/core'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme } from './theme/MantineTheme.tsx'
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={Theme} defaultColorScheme="light">
    <App />
  </MantineProvider>
)
