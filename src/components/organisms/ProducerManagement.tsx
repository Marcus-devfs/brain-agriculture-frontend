import { useState } from "react"
import ProducerForm from "../molecules/ProducerForm"
import ProducerList from "../molecules/ProducerList"

const ProducerManagement = () => {
    const [editingProducerId, setEditingProducerId] = useState<string | null>(null)
    const [showForm, setShowForm] = useState(false)

    const handleEdit = (id: string) => {
        setEditingProducerId(id)
        setShowForm(true)
    }

    const handleCloseForm = () => {
        setEditingProducerId(null)
        setShowForm(false)
    }

    return (
        <>
            {showForm && (
                <>
                    <ProducerForm
                        editingId={editingProducerId}
                        onClose={handleCloseForm}
                    />
                </>
            )}
            <ProducerList onEdit={handleEdit} />
        </>
    )
}

export default ProducerManagement