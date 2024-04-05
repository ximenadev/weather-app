import { Flex } from "@mantine/core"
import CustomTitle from "../Title"

const Header = ({ city }: { city: string }) => (
  <Flex wrap="wrap" justify="space-between" align="center" mb="lg" style={{ width: "100%" }}>
    <CustomTitle
      order={1}
      text={city}
      addedStyles={{
        fontSize: "clamp(2rem, 2.33vw, 2.5rem)",
      }}
    />
  </Flex>
)

export default Header
