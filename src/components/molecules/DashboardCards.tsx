import React from 'react'
import styled from 'styled-components'
import { FaSeedling, FaTractor, FaWarehouse } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
`

const Card = styled.div`
background-color: #eeeeee;
  border-radius: ${({ theme }) => theme.borderRadius || '8px'};
  padding: 1.5rem;
  width:  calc(33.33% - 1.5rem);
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* sombra mais forte */
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px); /* leve elevação ao passar o mouse */
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || '#f9604b'};
`

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary || '#333'};
`

const ActionText = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary || '#333'};
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`

const DashboardCards: React.FC = () => {
  const navigate = useNavigate()
    return (
        <Container>
            <Card>
                <IconWrapper>
                    <FaSeedling />
                </IconWrapper>
                <Title>Safras</Title>
                <ActionText onClick={() => navigate('/crop/new')}>Cadastrar &gt;</ActionText>
            </Card>

            <Card>
                <IconWrapper>
                    <FaTractor />
                </IconWrapper>
                <Title>Cultura Plantada</Title>
                <ActionText onClick={() => navigate('/planted-crop/new')}>Cadastrar  &gt;</ActionText>
            </Card>

            <Card>
                <IconWrapper>
                    <FaWarehouse />
                </IconWrapper>
                <Title>Fazenda</Title>
                <ActionText onClick={() => navigate('/property/new')}>Cadastrar &gt;</ActionText>
            </Card>
        </Container>
    )
}

export default DashboardCards
