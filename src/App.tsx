import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Title } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Title order={1}>Weather App</Title>
    </MantineProvider>
  )
}

export default App
