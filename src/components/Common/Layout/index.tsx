import { AppShell, Burger, NavLink } from "@mantine/core"
import { Link, useLocation } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"
import { Logo } from "../Logo"
import styles from "./Layout.module.css"

const menu = [
  {
    label: "Current Weather",
    href: "/"
  },
  {
    label: "Forecast",
    href: "/forecast"
  }
]

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure()
  let location = useLocation()

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="xl"
    >
      <AppShell.Header className={styles.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Logo />
      </AppShell.Header>

      <AppShell.Navbar p="xl" className={styles.navbar}>
        {menu?.map((item) => (
          <NavLink
            key={item.label}
            component={Link}
            to={item.href}
            active={location.pathname == item.href}
            label={item.label}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
