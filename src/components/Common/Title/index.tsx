import { Title } from "@mantine/core"

const CustomTitle = ({ text, order, addedStyles }: {
  text: string;
  order: 1 | 2 | 3 | 4 | 5 | 6;
  addedStyles?: React.CSSProperties;
}) => (
  <Title order={order} style={{
    color: "#253949",
    fontWeight: 600,
    lineHeight: 1,
    textTransform: "uppercase",
    ...addedStyles
  }}>
    {text}
  </Title>
)

export default CustomTitle
