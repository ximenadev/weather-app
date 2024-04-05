import { ReactNode } from "react"
import { Container } from "@mantine/core"

const PageContainer = ({ children }: { children: ReactNode }) => (
  <Container fluid p={0}>
    {children}
  </Container>
)

export default PageContainer
