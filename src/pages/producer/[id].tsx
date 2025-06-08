import { useParams } from "react-router-dom"
import Typography from "../../components/atoms/Typography"

const ProducerDetailsPage = () => {
    const { id } = useParams()
    return (
        <Typography variant="h1">Detalhes do produtor {id}</Typography>
    )
}

export default ProducerDetailsPage