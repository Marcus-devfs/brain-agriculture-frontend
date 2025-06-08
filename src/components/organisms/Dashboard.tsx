import React from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Button from '../atoms/Button'
import DashboardCards from '../molecules/DashboardCards'
import DashboardIndicators from '../molecules/DashboardIndicators'
import { useNavigate, useRoutes } from 'react-router-dom'

const Container = styled.div`
  padding: 2rem;
  margin: auto;
  width: 100%;
`

const Dashboard: React.FC = () => {

    const navigate = useNavigate()


    return (
        <Container>
            <Typography variant="h3" mb={3}>
                Dashboard de Produtores
            </Typography>

            <Button onClick={() =>  navigate('/producer/new')}>Cadastrar Novo Produtor</Button>

            <DashboardCards />
            <DashboardIndicators />
        </Container>
    )
}

export default Dashboard
