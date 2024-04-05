import { Flex, Title, Text } from "@mantine/core"

const EmptyState = ({ isForecast=false }: { isForecast: boolean }) => {
  return (
    <Flex
      p="xl"
      h={200}
      justify="center"
      align="center"
      direction="column"
    >
      <Title
        order={1}
        style={{
        textAlign: "center",
        fontWeight: 300,
        fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)"
      }}>
        Will it rain {isForecast ? "tomorrow" : "today"}?
      </Title>
      <Text
        style={{
          textAlign: "center",
          fontSize: "clamp(0.875rem, 1.5vw, 2rem)"
        }}
      >
        If you want to see the sunshine, you have to weather the storm.
      </Text>
    </Flex>
  );
}

export default EmptyState
