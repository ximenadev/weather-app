import '@mantine/core/styles.css'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { MantineProvider, createTheme } from '@mantine/core'
import { Layout } from './components/Common/Layout'
import { routes } from './routes'
import Loading from './components/Common/Loading'

const theme = createTheme({
  fontFamily: 'Inter',
});

function App() {
  const location = useLocation();
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes location={location}>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <route.component />
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Layout>
    </MantineProvider>
  )
}

export default App
