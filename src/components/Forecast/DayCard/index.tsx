import { Card } from "@mantine/core"
import CustomTitle from "../../Common/Title"
import { getDate } from "../../../utils"
import styles from "./DayCard.module.css"

const DayCard = ({ item }: {
  item: any;
}) => {
  return (
    <Card withBorder shadow="sm" radius="md" miw={"25%"} flex={1} className={styles.card}>
      <Card.Section withBorder inheritPadding p="md">
        <CustomTitle
          text={`${getDate(item.dt)}`}
          order={3}
          addedStyles={{
            fontWeight: 500,
            fontSize: "clamp(0.875rem, 1.1vw, 1.25rem)",
            textTransform: "unset",
          }}
        />
      </Card.Section>
      <Card.Section inheritPadding p="md">
        <CustomTitle
          text={`Min: ${item.main.temp_min} °F`}
          order={2}
          addedStyles={{
            fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
            textTransform: "unset",
            color: item.main.temp_min > 75 ? "#ffd191" : "#7bc7dd"
          }}
        />
        <CustomTitle
          text={`Max: ${item.main.temp_max} °F`}
          order={2}
          addedStyles={{
            fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
            textTransform: "unset",
            color: item.main.temp_max > 75 ? "#ffd191" : "#7bc7dd"
          }}
        />
      </Card.Section>
    </Card>
  )
}

export default DayCard
