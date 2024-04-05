import { useEffect, useState } from "react"
import { AppShell, Burger, NavLink } from "@mantine/core"
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
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.location.href.includes('forecast'))
      setActive(1)
    else
      setActive(0)
  }, [])

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
        {menu?.map((item, index) => (
          <NavLink
            key={item.label}
            href={item.href}
            label={item.label}
            active={active === index}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
