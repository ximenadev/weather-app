import { Card, Group, Text, Box } from "@mantine/core"
import CustomTitle from "../../Common/Title"
import { getColor, getCurrentDate, getIconClass } from "../../../utils"

const Today = ({ weather, temp }: {
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
  temp: number;
}) => {
  const { description, id } = weather
  return (
    <Card withBorder shadow="sm" radius="md" w="100%">
      <Card.Section withBorder inheritPadding p="md">
        <Group justify="space-between">
          <CustomTitle
            order={3}
            addedStyles={{
              fontWeight: 500,
              fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)",
              textTransform: "unset",
            }}
            text="Today's weather"
          />
          <CustomTitle
            order={3}
            text={getCurrentDate()}
            addedStyles={{
              fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)",
              fontWeight: 500,
            }}
          />
        </Group>
      </Card.Section>
      <Card.Section inheritPadding p="md">
        <Group className="icon-wrap">
          <Box className="icon">
            <i
              style={{ color: getColor(id) }}
              className={getIconClass(id)}
            />
          </Box>
        </Group>
        <Group className="icon-wrap">
          <CustomTitle
            order={2}
            text={`${temp}°F`}
            addedStyles={{
              fontSize: "clamp(2.5rem, 2.5vw, 3.75rem)",
            }}
          />
          <Group gap="0" ml="xl">
            <CustomTitle
              order={3}
              text={weather.main}
              addedStyles={{
                fontSize: "clamp(2.5rem, 2.5vw, 3.75rem)",
                textTransform: "capitalize",
              }}
            />
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)",
                marginLeft: "1rem",
                marginTop: "auto",
                marginBottom: 0,
                fontWeight: 300,
              }}
            >
              {description}
            </Text>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default Today
