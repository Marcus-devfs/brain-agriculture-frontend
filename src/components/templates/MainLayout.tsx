import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

const Sidebar = styled.nav<{ open: boolean }>`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
  padding: ${({ theme }) => theme.spacing(2)};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`

const Content = styled.div<{ open: boolean }>`
  flex: 1;
  margin-left: ${({ open }) => open ? '240px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  position: relative;
  width: 100%;
`

const Hamburger = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  left: ${({ theme }) => theme.spacing(2)};
  width: 36px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6px;
  cursor: pointer;
  z-index: 200;

  span {
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 2px;
  }
`

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(4)};
`


interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleCloseMenu() {
    setSidebarOpen(false)
  }

  return (
    <Container>
      <Sidebar open={sidebarOpen}>
        <Menu>
          <MenuItem to="/" onClick={handleCloseMenu}>Dashboard</MenuItem>
          <MenuItem to="/add-producer" onClick={handleCloseMenu}>Cadastrar Produtor</MenuItem>
          <MenuItem to="/producers" onClick={handleCloseMenu}>Lista de Produtores</MenuItem>
          <MenuItem to="/fazendas" onClick={handleCloseMenu}>Fazendas</MenuItem>
          <MenuItem to="/safras" onClick={handleCloseMenu}>Safras</MenuItem>
        </Menu>
      </Sidebar>

      <Content open={sidebarOpen}>
        <Hamburger onClick={() => setSidebarOpen(prev => !prev)}>
          <span /><span /><span />
        </Hamburger>

        <Main>{children}</Main>
      </Content>
    </Container>
  )
}

export default MainLayout
