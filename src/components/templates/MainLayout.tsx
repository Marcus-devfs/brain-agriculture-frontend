import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Typography from '../atoms/Typography'

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
`

const Content = styled.div<{ open: boolean }>`
  flex: 1;
  margin-left: ${({ open }) => open ? '240px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  position: relative;
  width: 100%;
  height: 100vh; /* altura total da tela */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`

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
  margin-top: 40px;
  padding-left: 15px;
  width: 100%;
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
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  padding: 10px;
  box-sizing: border-box;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
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
    <PageWrapper>
      <Container>
        <Sidebar open={sidebarOpen}>
          <CloseButton onClick={() => setSidebarOpen(false)}>
            <Typography variant="primary">X Fechar</Typography>
          </CloseButton>
          <Menu>
            <MenuItem to="/" onClick={handleCloseMenu}>Dashboard</MenuItem>
            <MenuItem to="/producers" onClick={handleCloseMenu}>Produtores</MenuItem>
            <MenuItem to="/property" onClick={handleCloseMenu}>Fazendas</MenuItem>
            <MenuItem to="/planted-crops" onClick={handleCloseMenu}>Culturas Plantadas</MenuItem>
            <MenuItem to="/crops" onClick={handleCloseMenu}>Safras</MenuItem>
          </Menu>
        </Sidebar>

        <Content open={sidebarOpen}>
          <Header>
            {!sidebarOpen &&
              <Hamburger onClick={() => setSidebarOpen((prev) => !prev)}>
                <span /><span /><span />
              </Hamburger>}
          </Header>

          <Main>{children}</Main>
        </Content>
      </Container >
    </PageWrapper>
  )
}

export default MainLayout
