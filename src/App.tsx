import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import { Layout } from './components/Layout';

const theme = createTheme({
  fontFamily: 'Inter',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Layout>
      </Layout>
    </MantineProvider>
  )
}

export default App
