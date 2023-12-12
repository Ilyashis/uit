import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import { User } from '@consta/uikit/User';
import { Sidebar } from '@consta/uikit/Sidebar';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

// Icons
import { IconRing } from "@consta/uikit/IconRing";
import { IconBento } from "@consta/uikit/IconBento"
import { IconClose } from "@consta/icons/IconClose"
import { IconSearchStroked } from "@consta/icons/IconSearchStroked"

// Header
import {
  Header,
  HeaderButton,
  HeaderLogo,
  HeaderMenu,
  HeaderModule,
  HeaderSearchBar
} from "@consta/uikit/Header";

import './Navbar.style.scss'

export default function App() {
  const activeMenuItemInitial = JSON.parse(sessionStorage.getItem('active-menu'))

  const [activeMenuItem, setActiveMenuItem] = useState(activeMenuItemInitial || 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation()

  // Search Input value
  const [value, setValue] = useState(null);
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
    setActiveMenuItem(0)
  }

  // Navbar Menu links
  const menuItems = [
    {
      label: "Главная",
      onClick: () => {
        navigate('/')
        setActiveMenuItem(0)
        setIsSidebarOpen(false)
      },
      active: activeMenuItem === 0
    },
    {
      label: "Аналитика",
      onClick: () => {
        navigate('/analytics')
        setActiveMenuItem(1)
        setIsSidebarOpen(false)
      },
      active: activeMenuItem === 1
    },
    {
      label: "Справочники",
      onClick: () => {
        navigate('/references')
        setActiveMenuItem(2)
        setIsSidebarOpen(false)
      },
      active: activeMenuItem === 2
    }
  ];

  useEffect(() => {
    sessionStorage.setItem('active-menu', JSON.stringify(activeMenuItem))
  }, [activeMenuItem])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveMenuItem(0)
        break;

      case '/analytics':
        setActiveMenuItem(1)
        break;

      case '/references':
        setActiveMenuItem(2)
        break;

      default:
        break;
    }
  }, [location])

  return (
    <>
      <Header
        className="header"
        leftSide={
          <>
            <HeaderModule>
              <HeaderLogo onClick={goHome} className="header__logo">
                <Text as="p" size="l" weight="bold">
                  СИП. РБ
                </Text>
              </HeaderLogo>
            </HeaderModule>
            <HeaderModule indent="l" className="header__search">
              <HeaderSearchBar
                placeholder="я ищу"
                label="поиск"
                value={value}
                onChange={({ value }) => setValue(value)}
              />
            </HeaderModule>
            <HeaderModule indent="l" className="header__menu">
              <HeaderMenu items={menuItems} />
            </HeaderModule>
          </>
        }

        rightSide={
          <>
            <HeaderModule indent="s">
              <HeaderButton iconLeft={IconRing} />
            </HeaderModule>
            <HeaderModule indent="s">
              <HeaderButton iconLeft={IconBento} />
            </HeaderModule>
            <HeaderModule indent="s">
              {windowWidth > 800 ? (
                <User
                  avatarUrl="/assets/images/user-logo.png"
                  name="Имя Фамилия"
                  info="Доп. информация"
                />
              ) : (
                <User
                  avatarUrl="/assets/images/user-logo.png"
                  name="Имя Фамилия"
                  info="Доп. информация"
                  onlyAvatar
                  onClick={() => setIsSidebarOpen(true)}
                />
              )}
            </HeaderModule>
          </>
        }
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickOutside={() => setIsSidebarOpen(false)}
        onEsc={() => setIsSidebarOpen(false)}
        className="sidebar"
        style={{ zIndex: 100 }}
      >
        <Layout className="sidebar__close-btn">
          <Button
            size="xs"
            view="ghost"
            label="Закрыть"
            width="default"
            iconRight={IconClose}
            onlyIcon
            onClick={() => setIsSidebarOpen(false)}
          />
        </Layout>
        <Layout className="sidebar__search-input">
          <HeaderSearchBar
            placeholder="я ищу"
            label="поиск"
            value={value}
            onChange={({ value }) => setValue(value)}
            className="sidebar__search-input--input"
          />
          <Button
            onClick={() => {
              setValue('')
              setIsSidebarOpen(false)
            }}
            view="ghost"
            onlyIcon
            iconRight={IconSearchStroked} />
        </Layout>
        <Layout className="sidebar__menu">
          <HeaderMenu items={menuItems} />
        </Layout>
      </Sidebar>
    </>
  );
}
