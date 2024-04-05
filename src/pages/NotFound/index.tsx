import { Flex, Title } from "@mantine/core"
import PageContainer from "../../components/Common/PageContainer"

const NotFound = () => {
  return (
    <PageContainer>
      <Flex p="xl" h={200} justify="center" align="center" direction="column">
        <Title>
          This page doesn't exist {":("}
        </Title>
      </Flex>
    </PageContainer>
  )
}

export default NotFound
