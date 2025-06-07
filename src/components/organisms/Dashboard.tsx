import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Button from '../atoms/Button'
import ProducerForm from '../molecules/ProducerForm'
import DashboardCards from '../molecules/DashboardCards'
import DashboardIndicators from '../molecules/DashboardIndicators'

const Container = styled.div`
  padding: 2rem;
  margin: auto;
`

const Dashboard: React.FC = () => {
    const [editingProducerId, setEditingProducerId] = useState<string | null>(null)
    const [showForm, setShowForm] = useState(false)

    // Fechar formulário
    const handleCloseForm = () => {
        setEditingProducerId(null)
        setShowForm(false)
    }

    return (
        <Container>
            <Typography variant="h3" mb={3}>
                Dashboard de Produtores
            </Typography>

            {!showForm && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => setShowForm(true)}>Cadastrar Novo Produtor</Button>
                </div>
            )}

            {showForm && (
                <>
                    <ProducerForm
                        editingId={editingProducerId}
                        onClose={handleCloseForm}
                    />
                </>
            )}

            <DashboardCards />
            <DashboardIndicators />
        </Container>
    )
}

export default Dashboard
