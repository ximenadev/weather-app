import { Title } from "@mantine/core"

export const Logo = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22 16a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1zm-5 5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm-1-8a4 4 0 0 0-8 0zm2-1a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1zM4 11a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm7-7v1a1 1 0 0 0 2 0V4a1 1 0 0 0-2 0zm5.95 1.636-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414zm-9.9 0A1 1 0 0 0 5.636 7.05l.707.707a1 1 0 0 0 1.414-1.414z"/>
      </svg>
      <Title>Weather <em>Wise</em></Title>
    </>
  );
}
