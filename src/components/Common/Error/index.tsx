import { Flex, Title, Text } from "@mantine/core"

const Error = () => {
  return (
    <Flex p="xl" h={200} justify="center" align="center" direction="column">
      <Title order={1} style={{
        textAlign: "center",
        fontWeight: 300,
        fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)"
      }}>
        There has been an error
      </Title>
      <Text
        style={{
          textAlign: "center",
        }}
      >Please try again later</Text>
    </Flex>
  )
}

export default Error
