import { Card, Flex } from "@mantine/core";
import CustomTitle from "../../Common/Title";
import styles from "../../../pages/Home/Home.module.css";

const Stat = ({ text, title, addedStyles }: {
  text: string,
  title: string,
  addedStyles?: React.CSSProperties,
}) => {
  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      h={"auto"}
      style={{
        ...addedStyles,
      }}
      className={styles.stat}
    >
      <Card.Section withBorder inheritPadding p="md">
        <CustomTitle
          order={3}
          text={title}
          addedStyles={{
            fontWeight: 500,
            fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)",
            textTransform: "unset",
          }}
        />
      </Card.Section>
      <Card.Section inheritPadding p="md">
        <CustomTitle
          order={2}
          addedStyles={{
            fontSize: "clamp(2.5rem, 2.5vw, 3.75rem)",
            textTransform: "unset",
          }}
          text={text}
        />
      </Card.Section>
    </Card>
  );
}

const Stats = ({ stats }: {
  stats: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  }
}) => {
  const { feels_like, humidity, pressure, temp_max, temp_min } = stats

  return (
    <Flex
      justify="space-between"
      align="center"
      mt="xl"
      gap="1rem"
      w="100%"
      h="100%"
      wrap="wrap"
    >
      <Stat title="Max" text={`${temp_max} °F`} addedStyles={{
        width: "calc(50% - 0.5rem)",
      }} />
      <Stat title="Min" text={`${temp_min} °F`} addedStyles={{
        width: "calc(50% - 0.5rem)",
      }} />
      <Stat title="Feels Like" text={`${feels_like} °F`}
        addedStyles={{width:"calc((100% - 2rem ) / 3)"}}
      />
      <Stat title="Humidity" text={`${humidity} %`} addedStyles={{width:"calc((100% - 2rem ) / 3)"}} />
      <Stat title="Pressure" text={`${pressure} hPa`} addedStyles={{width:"calc((100% - 2rem ) / 3)"}} />
    </Flex>
  );
};

export default Stats;
