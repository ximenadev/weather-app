import { Flex, Title, Loader } from "@mantine/core"

const Loading = () => (
  <Flex p="xl" h={200} justify="center" align="center" direction="column">
    <Title order={1} style={{
      textAlign: "center",
      fontWeight: 300,
      fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)"
    }}>
      Please wait...
    </Title>
    <Loader color="blue" />
  </Flex>
)

export default Loading
