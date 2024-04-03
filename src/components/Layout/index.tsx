import { useState } from "react";
import { AppShell, Burger, NavLink } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "../Logo";
import styles from "./Layout.module.css"

const menu = [
  {
    label: "Current",
    href: "/"
  },
  {
    label: "Historic",
    href: "/"
  },
  {
    label: "Multiple Cities",
    href: "/"
  }
]

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
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

      <AppShell.Navbar p="lg" className={styles.navbar}>
        {menu?.map((item, index) => (
          <NavLink
            key={item.label}
            // href={item.href}
            label={item.label}
            active={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
